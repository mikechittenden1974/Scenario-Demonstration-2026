import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
from datetime import date
import numpy as np, os, pickle

OUT = "/sessions/tender-sleepy-hawking/mnt/AM1_2/CosmoCourier_SD2_Training_Pilot"

def calc_fee(service, weight, region):
    bases  = {"Standard":8,"Express":18,"Priority":35}
    rates  = {"Standard":0.9,"Express":2.0,"Priority":2.5}
    rmult  = {"Solar South":1.15,"Nebula North":1.0,"Asteroid East":1.05,"Warp West":0.88}
    return round((bases[service]+rates[service]*weight)*rmult[region])

GROUPS = [
    ("Nebula North",  "Standard", [2.5,5.0,7.5,4.0,8.5,6.0]),
    ("Nebula North",  "Express",  [4.0,7.0,10.0,5.5,9.0,12.0]),
    ("Nebula North",  "Priority", [3.0,6.0,9.5,12.0,5.5,15.0]),
    ("Solar South",   "Standard", [2.0,4.5,6.0,8.0,5.0,9.5]),
    ("Solar South",   "Express",  [5.0,8.0,11.0,6.0,13.0,9.0]),
    ("Solar South",   "Priority", [4.0,7.0,10.0,14.0,8.0,18.0]),
    ("Asteroid East", "Standard", [3.0,28.5,6.5,4.0,7.0,5.5]),
    ("Asteroid East", "Express",  [6.0,9.0,12.0,7.5,10.5,14.0]),
    ("Asteroid East", "Priority", [5.0,8.0,11.0,6.0,13.0,16.0]),
    ("Warp West",     "Standard", [2.0,4.5,7.0,5.0,9.0,6.5]),
    ("Warp West",     "Express",  [5.0,8.0,11.0,6.5,13.0,9.0]),
    ("Warp West",     "Priority", [4.0,7.0,10.0,13.0,8.0,16.0]),
]

MONTH_DAYS=[
    (2025,1,[6,14,15,10,19,28,11,7,22,16,21,27]),
    (2025,2,[14,11,7,20,4,18,14,6,12,9,27,22]),
    (2025,3,[3,5,18,3,20,12,11,15,25,21,13,9]),
    (2025,4,[19,9,2,15,8,25,18,5,11,14,28,17]),
    (2025,5,[10,14,14,6,19,9,22,16,3,1,12,25]),
    (2025,6,[22,12,17,3,17,24,2,14,1,18,24,11]),
]

TIMES={
    ("Nebula North","Standard"):[145,130,160,120,175,140],
    ("Nebula North","Express"):[75,60,80,55,70,85],
    ("Nebula North","Priority"):[30,25,35,40,20,45],
    ("Solar South","Standard"):[130,125,145,135,120,150],
    ("Solar South","Express"):[60,50,65,55,70,60],
    ("Solar South","Priority"):[25,20,30,35,25,40],
    ("Asteroid East","Standard"):[155,165,140,130,160,145],
    ("Asteroid East","Express"):[75,65,80,70,75,85],
    ("Asteroid East","Priority"):[30,25,35,20,40,35],
    ("Warp West","Standard"):[150,165,145,155,170,160],
    ("Warp West","Express"):[85,75,90,80,95,70],
    ("Warp West","Priority"):[40,35,45,40,30,50],
}

RATINGS={
    ("Nebula North","Standard"):[3,4,3,4,3,4],
    ("Nebula North","Express"):[4,4,3,4,3,4],
    ("Nebula North","Priority"):[5,4,5,4,5,4],
    ("Solar South","Standard"):[4,5,4,5,4,5],
    ("Solar South","Express"):[5,5,4,5,4,5],
    ("Solar South","Priority"):[5,5,5,4,5,5],
    ("Asteroid East","Standard"):[3,2,4,3,4,3],
    ("Asteroid East","Express"):[4,3,4,3,4,3],
    ("Asteroid East","Priority"):[4,5,4,5,4,4],
    ("Warp West","Standard"):[2,2,3,2,3,2],
    ("Warp West","Express"):[2,3,2,3,2,3],
    ("Warp West","Priority"):[3,2,3,2,3,2],
}

raw=[]
did=1
for g_idx,(region,service,weights) in enumerate(GROUPS):
    for m_idx in range(6):
        yr,mo,days=MONTH_DAYS[m_idx]
        dy=days[g_idx]
        w=weights[m_idx]
        fee=calc_fee(service,w,region)
        raw.append({"DeliveryID":f"D{did:03d}","DeliveryDate":date(yr,mo,dy),
            "Region":region,"ServiceType":service,"Weight_kg":w,"DeliveryFee":fee,
            "DeliveryTime_mins":TIMES[(region,service)][m_idx],
            "CustomerRating":RATINGS[(region,service)][m_idx]})
        did+=1

records=sorted(raw,key=lambda r:(r["DeliveryDate"],r["DeliveryID"]))
N=len(records)
fees=[r["DeliveryFee"] for r in records]
wts=[r["Weight_kg"] for r in records]
times=[r["DeliveryTime_mins"] for r in records]
rats=[r["CustomerRating"] for r in records]
regs=[r["Region"] for r in records]
svcs=[r["ServiceType"] for r in records]
mnths=[r["DeliveryDate"].month for r in records]

print("="*60)
print("DATASET MANIFEST — CosmoCourier SD2")
print("="*60)
print(f"Total records: {N}")
print(f"SUM DeliveryFee: {sum(fees)}")
print(f"SUM Weight_kg: {sum(wts)}")
print(f"COUNT: {N}")
print(f"AVERAGE DeliveryFee: {sum(fees)/N:.6f}")
print(f"AVERAGE Weight_kg: {sum(wts)/N:.6f}")
print(f"AVERAGE CustomerRating: {sum(rats)/N:.6f}")
print(f"MIN DeliveryFee: {min(fees)}")
print(f"MAX DeliveryFee: {max(fees)}")
print(f"MIN Weight_kg: {min(wts)}")
print(f"MAX Weight_kg: {max(wts)}")
print(f"MIN CustomerRating: {min(rats)}")
print(f"MAX CustomerRating: {max(rats)}")
print(f"MIN DeliveryTime_mins: {min(times)}")
print(f"MAX DeliveryTime_mins: {max(times)}")

print("\n--- REGION SUMMARIES ---")
for reg in ["Nebula North","Solar South","Asteroid East","Warp West"]:
    rf=[fees[i] for i in range(N) if regs[i]==reg]
    print(f"  {reg}: count={len(rf)}, sum_fee={sum(rf)}, avg_fee={sum(rf)/len(rf):.4f}")

print("\n--- SERVICE TYPE SUMMARIES ---")
for svc in ["Standard","Express","Priority"]:
    sf=[fees[i] for i in range(N) if svcs[i]==svc]
    print(f"  {svc}: count={len(sf)}, sum_fee={sum(sf)}, avg_fee={sum(sf)/len(sf):.4f}")

print("\n--- KEY SUMIFS ---")
combos=[("Solar South","Priority"),("Warp West","Standard"),
        ("Nebula North","Express"),("Asteroid East","Priority"),
        ("Warp West","Express"),("Solar South","Standard")]
for reg,svc in combos:
    sf=[fees[i] for i in range(N) if regs[i]==reg and svcs[i]==svc]
    print(f"  {reg}+{svc}: count={len(sf)}, sum={sum(sf)}, avg={sum(sf)/len(sf):.4f}")

print("\n--- MONTHLY SUMMARIES ---")
mnames={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun"}
for m in range(1,7):
    mf=[fees[i] for i in range(N) if mnths[i]==m]
    print(f"  {mnames[m]} 2025: count={len(mf)}, sum_fee={sum(mf)}")

good=sum(1 for r in rats if r>=4)
print(f"\nCustomerRating>=4 (Good): {good}")
print(f"CustomerRating<4 (Review): {N-good}")

for i,r in enumerate(records):
    if r["DeliveryID"]=="D038":
        print(f"\nOUTLIER D038: row={i+2}, region={r['Region']}, service={r['ServiceType']}, weight={r['Weight_kg']}, fee={r['DeliveryFee']}, rating={r['CustomerRating']}, date={r['DeliveryDate']}")

x=np.array(wts); y=np.array(fees)
xm,ym=x.mean(),y.mean()
slope=np.sum((x-xm)*(y-ym))/np.sum((x-xm)**2)
intercept=ym-slope*xm
y_pred=slope*x+intercept
r2=1-np.sum((y-y_pred)**2)/np.sum((y-ym)**2)
print(f"\n--- TRENDLINE Weight_kg vs DeliveryFee ---")
print(f"  slope={slope:.4f}, intercept={intercept:.4f}, R2={r2:.4f}")
print(f"  Equation: y = {slope:.2f}x + {intercept:.2f}")

print("\n--- ALL RECORDS (sorted by date) ---")
for i,r in enumerate(records):
    flag="*OUTLIER*" if r["DeliveryID"]=="D038" else ""
    print(f"  Row{i+2:3d} {r['DeliveryID']} {r['DeliveryDate']} {r['Region'][:14]:14} {r['ServiceType']:8} {r['Weight_kg']:5.1f}kg £{r['DeliveryFee']:3} {r['DeliveryTime_mins']:3}min rating={r['CustomerRating']} {flag}")

with open(f"{OUT}/records.pkl","wb") as f:
    pickle.dump(records,f)
print("\nSaved records.pkl")
