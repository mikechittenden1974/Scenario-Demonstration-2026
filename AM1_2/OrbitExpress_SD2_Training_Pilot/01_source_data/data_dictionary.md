# Data Dictionary — Orbit Express Delivery Ltd

**Dataset:** 01_source_data/sd2_start.xlsx

**Sheet:** Data

**Records:** 75 delivery orders (January 2024 – September 2024)

**Status:** Cleaned and treated. Ready for analysis.

---

## Field Reference

---

### OrderID

| Property | Detail |
|----------|--------|
| Plain-English meaning | A unique identifier for each delivery order |
| Data type | Text |
| Format | ORB-001 to ORB-075 |
| Valid values | Any value in the format ORB-NNN |
| Blanks allowed | No |
| Useful for filtering | No — each value is unique |
| Useful for grouping | No |
| Useful for calculation | No |
| Useful for charting | No |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for regression | No |

---

### OrderDate

| Property | Detail |
|----------|--------|
| Plain-English meaning | The date the delivery order was placed |
| Data type | Date (formatted DD/MM/YYYY) |
| Format | 01/01/2024 – 30/09/2024 |
| Valid values | Any date between January 2024 and September 2024 |
| Blanks allowed | No |
| Useful for filtering | Yes — filter by month or quarter |
| Useful for grouping | Yes — group by month or quarter |
| Useful for calculation | No |
| Useful for charting | Yes — time series charts |
| Useful for slicers | No |
| Useful for timelines | **Yes — primary timeline field** |
| Useful for regression | No |

---

### DeliveryRoute

| Property | Detail |
|----------|--------|
| Plain-English meaning | The named interstellar route the parcel travelled |
| Data type | Text (category) |
| Valid values | Nebula Dash, Red Dwarf Run, Blue Giant Loop, Solar Circuit, Asteroid Express |
| Blanks allowed | No |
| Useful for filtering | **Yes — primary filter field** |
| Useful for grouping | **Yes — primary grouping field** |
| Useful for calculation | Yes — use with SUMIF, COUNTIF, AVERAGEIF |
| Useful for charting | Yes — bar or column chart by route |
| Useful for slicers | **Yes — recommended slicer field** |
| Useful for timelines | No |
| Useful for regression | No |

---

### ParcelType

| Property | Detail |
|----------|--------|
| Plain-English meaning | The category of parcel being delivered |
| Data type | Text (category) |
| Valid values | Standard, Express, Fragile, Oversized, Hazardous |
| Blanks allowed | No |
| Useful for filtering | Yes |
| Useful for grouping | Yes |
| Useful for calculation | Yes — use with SUMIF, COUNTIF |
| Useful for charting | Yes — bar or pie chart by type |
| Useful for slicers | **Yes — recommended slicer field** |
| Useful for timelines | No |
| Useful for regression | No |

---

### CourierName

| Property | Detail |
|----------|--------|
| Plain-English meaning | The name of the courier who handled the delivery |
| Data type | Text (category) |
| Valid values | Zara Comet, Max Quasar, Bip-9000, Lyra Stardust |
| Blanks allowed | No |
| Useful for filtering | Yes |
| Useful for grouping | Yes |
| Useful for calculation | Yes — use with AVERAGEIF to compare courier ratings |
| Useful for charting | Yes — compare couriers by rating or revenue |
| Useful for slicers | Yes |
| Useful for timelines | No |
| Useful for regression | No |

---

### ParcelWeight_kg

| Property | Detail |
|----------|--------|
| Plain-English meaning | The weight of the parcel in kilograms |
| Data type | Number (decimal) |
| Valid range | 0.5 kg – 50.0 kg |
| Blanks allowed | No |
| Useful for filtering | Yes — filter for heavy parcels |
| Useful for grouping | No (continuous variable) |
| Useful for calculation | Yes — SUM, AVERAGE, MIN, MAX |
| Useful for charting | Yes — histogram or scatter chart |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for regression | **Yes — recommended X-axis variable for scatter/trendline** |

---

### DeliveryDistance_AU

| Property | Detail |
|----------|--------|
| Plain-English meaning | How far the parcel travelled, measured in Astronomical Units (AU) |
| Data type | Number (integer) |
| Valid range | 5 AU – 95 AU |
| Blanks allowed | No |
| Useful for filtering | No |
| Useful for grouping | No |
| Useful for calculation | Yes — AVERAGE, MIN, MAX |
| Useful for charting | Yes — scatter chart |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for regression | Yes — alternative X-axis variable |

---

### BaseCost_credits

| Property | Detail |
|----------|--------|
| Plain-English meaning | The base delivery fee charged to the customer, in credits |
| Data type | Number (integer) |
| Valid range | 80 – 600 credits |
| Blanks allowed | No |
| Useful for filtering | No |
| Useful for grouping | No |
| Useful for calculation | Yes — part of revenue total |
| Useful for charting | No — use TotalRevenue_credits instead |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for regression | No |

---

### FuelSurcharge_credits

| Property | Detail |
|----------|--------|
| Plain-English meaning | An additional fee applied based on fuel costs for the route, in credits |
| Data type | Number (integer) |
| Valid range | 10 – 200 credits |
| Blanks allowed | No |
| Useful for filtering | No |
| Useful for grouping | No |
| Useful for calculation | Yes — part of revenue total |
| Useful for charting | No — use TotalRevenue_credits instead |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for regression | No |

---

### TotalRevenue_credits

| Property | Detail |
|----------|--------|
| Plain-English meaning | The total revenue earned per order (BaseCost + FuelSurcharge), in credits |
| Data type | Number (integer) |
| Valid range | 100 – 950 credits (one outlier above 800) |
| Blanks allowed | No |
| Useful for filtering | Yes — filter for high or low revenue orders |
| Useful for grouping | No (continuous variable) |
| Useful for calculation | **Yes — primary numeric field for SUM, AVERAGE, SUMIF, SUMIFS** |
| Useful for charting | **Yes — primary Y-axis variable for most charts** |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for regression | **Yes — recommended Y-axis variable for scatter/trendline** |

---

### DeliveryTime_hours

| Property | Detail |
|----------|--------|
| Plain-English meaning | How long the delivery took, in hours |
| Data type | Number (decimal) |
| Valid range | 1.5 – 24.0 hours |
| Blanks allowed | No |
| Useful for filtering | Yes |
| Useful for grouping | No |
| Useful for calculation | Yes — AVERAGE, MIN, MAX |
| Useful for charting | Yes — scatter chart against rating |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for regression | No |

---

### CustomerRating

| Property | Detail |
|----------|--------|
| Plain-English meaning | The customer's satisfaction rating for the delivery (1 = very poor, 5 = excellent) |
| Data type | Number (one decimal place) |
| Valid range | 1.0 – 5.0 |
| Blanks allowed | No |
| Useful for filtering | Yes — filter for low ratings to review |
| Useful for grouping | No |
| Useful for calculation | Yes — AVERAGE, AVERAGEIF, AVERAGEIFS |
| Useful for charting | Yes — compare by route or courier |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for regression | No |

---

### OnTimeDelivery

| Property | Detail |
|----------|--------|
| Plain-English meaning | Whether the delivery arrived within the promised time window |
| Data type | Text |
| Valid values | Yes, No |
| Blanks allowed | No |
| Useful for filtering | **Yes — important filter field** |
| Useful for grouping | Yes |
| Useful for calculation | Yes — use with COUNTIFS and SUMIFS |
| Useful for charting | Yes |
| Useful for slicers | **Yes — recommended slicer field** |
| Useful for timelines | No |
| Useful for regression | No |

---

## Known Analytical Features

The following patterns are present in the dataset. The learner should discover these through analysis.

| Pattern | Description |
|---------|-------------|
| Best-performing route | Nebula Dash generates the highest total revenue |
| Worst-performing route | Asteroid Express generates the lowest total revenue |
| Seasonal spike | Orders and revenue are noticeably higher in Q3 (July–September 2024) |
| Outlier | One Oversized/Hazardous order has an unusually high total revenue |
| Weight-revenue relationship | There is a positive correlation between ParcelWeight_kg and TotalRevenue_credits |
| Late deliveries and ratings | Orders with OnTimeDelivery = No tend to have lower CustomerRating values |
| Courier standout | Bip-9000 has the highest average CustomerRating across all routes |
| Route-type interaction | Express parcels are concentrated on Nebula Dash |
| Timeline pattern | The timeline reveals a clear Q3 spike not obvious in overall totals |

---

## Limitations

- The dataset covers only 9 months (January–September 2024). No annual comparison is possible.
- There is no customer demographic data. Age, location, and purchase history are unknown.
- The weight-revenue correlation is positive but not perfect. Other factors influence revenue.
- Sample size is 75 records. Conclusions should be treated as indicative, not definitive.

---

*Data Dictionary version 1.0 — Orbit Express SD2 Training Pilot*
