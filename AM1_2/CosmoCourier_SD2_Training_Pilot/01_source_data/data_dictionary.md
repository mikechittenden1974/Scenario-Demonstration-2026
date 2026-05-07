# Data Dictionary — CosmoCourier SD2 Dataset

**File:** `01_source_data/sd2_start.xlsx`
**Sheet:** Deliveries
**Total records:** 72
**Date range:** 1 January 2025 – 30 June 2025

---

## Column Inventory

| Column | Field Name | Column Letter | Data Type | Description |
|--------|-----------|---------------|-----------|-------------|
| 1 | DeliveryID | A | Text | Unique delivery reference. Format: D001 to D072. No blanks. |
| 2 | DeliveryDate | B | Date (DD/MM/YYYY) | Date the delivery was completed. Jan–Jun 2025. No blanks. |
| 3 | Region | C | Text (categorical) | Delivery sector. Four values: Nebula North, Solar South, Asteroid East, Warp West. No blanks. |
| 4 | ServiceType | D | Text (categorical) | Service tier. Three values: Standard, Express, Priority. No blanks. |
| 5 | Weight_kg | E | Number (decimal) | Parcel weight in kilograms. Range: 2.0 to 28.5. No blanks. |
| 6 | DeliveryFee | F | Number (whole £) | Delivery charge in pounds. Range: £9 to £92. No blanks. |
| 7 | DeliveryTime_mins | G | Number (whole) | Time taken to complete delivery (minutes). Range: 20 to 175. No blanks. |
| 8 | CustomerRating | H | Number (integer) | Customer satisfaction score. Values: 1, 2, 3, 4, 5. No blanks. |

---

## Field Detail

### DeliveryID (Column A)
- **Type:** Text
- **Valid values:** D001 to D072
- **Blanks allowed:** No
- **Useful for filtering:** No — all values unique
- **Useful for grouping:** No
- **Useful for calculation:** No
- **Useful for charting:** No
- **Useful for slicers:** No
- **Useful for timelines:** No
- **Useful for regression:** No

---

### DeliveryDate (Column B)
- **Type:** Date
- **Valid range:** 01/01/2025 to 30/06/2025
- **Blanks allowed:** No
- **Useful for filtering:** Yes — filter by month, quarter or specific period
- **Useful for grouping:** Yes — group by month in Pivot Tables
- **Useful for calculation:** No (not summed)
- **Useful for charting:** Yes — x-axis of time-series chart
- **Useful for slicers:** No
- **Useful for timelines:** Yes — the date field for the Timeline filter in Pivot Tables
- **Useful for regression:** No

---

### Region (Column C)
- **Type:** Text (categorical)
- **Unique values:** Nebula North, Solar South, Asteroid East, Warp West
- **Records per value:** 18 each
- **Blanks allowed:** No
- **Useful for filtering:** Yes — key grouping field
- **Useful for grouping:** Yes — Rows or Columns field in Pivot Tables
- **Useful for calculation:** Yes — use as criteria in COUNTIF, SUMIF, AVERAGEIF etc.
- **Useful for charting:** Yes — category axis in bar/column charts
- **Useful for slicers:** Yes — ideal slicer field
- **Useful for timelines:** No
- **Useful for regression:** No (categorical)

---

### ServiceType (Column D)
- **Type:** Text (categorical)
- **Unique values:** Standard, Express, Priority
- **Records per value:** 24 each
- **Blanks allowed:** No
- **Useful for filtering:** Yes — second key grouping field
- **Useful for grouping:** Yes — Rows or Columns field in Pivot Tables
- **Useful for calculation:** Yes — use as criteria in conditional formulas
- **Useful for charting:** Yes — series or category axis
- **Useful for slicers:** Yes — ideal second slicer
- **Useful for timelines:** No
- **Useful for regression:** No (categorical)

---

### Weight_kg (Column E)
- **Type:** Number (decimal, 1dp)
- **Valid range:** 2.0 to 28.5
- **Typical range:** 2.0 to 18.0 (one outlier at 28.5 — row 21, D038)
- **Blanks allowed:** No
- **Useful for filtering:** No (continuous numeric)
- **Useful for grouping:** No
- **Useful for calculation:** Yes — SUM, AVERAGE, MIN, MAX
- **Useful for charting:** Yes — x-axis in scatter chart
- **Useful for slicers:** No
- **Useful for timelines:** No
- **Useful for regression:** Yes — independent variable (x) in scatter chart trendline

---

### DeliveryFee (Column F)
- **Type:** Number (whole pounds £)
- **Valid range:** £9 to £92
- **Blanks allowed:** No
- **Useful for filtering:** No
- **Useful for grouping:** No
- **Useful for calculation:** Yes — primary numeric field for SUM, AVERAGE, SUMIF, SUMIFS etc.
- **Useful for charting:** Yes — y-axis in bar, column and scatter charts
- **Useful for slicers:** No
- **Useful for timelines:** No
- **Useful for regression:** Yes — dependent variable (y) in scatter chart trendline

---

### DeliveryTime_mins (Column G)
- **Type:** Number (whole minutes)
- **Valid range:** 20 to 175
- **Blanks allowed:** No
- **Useful for filtering:** No
- **Useful for grouping:** No
- **Useful for calculation:** Yes — secondary numeric analysis field
- **Useful for charting:** Yes — secondary chart series
- **Useful for slicers:** No
- **Useful for timelines:** No
- **Useful for regression:** Possible — secondary analysis only

---

### CustomerRating (Column H)
- **Type:** Number (integer 1–5)
- **Valid values:** 1, 2, 3, 4, 5
- **Distribution in this dataset:** Min=2, Max=5
- **Blanks allowed:** No
- **Useful for filtering:** Yes — filter to high-rating or low-rating records
- **Useful for grouping:** Yes — group by rating in Pivot Tables
- **Useful for calculation:** Yes — AVERAGE, COUNTIF (e.g. count of ratings ≥ 4)
- **Useful for charting:** Yes — compare ratings by region or service type
- **Useful for slicers:** Yes — slice by rating band
- **Useful for timelines:** No
- **Useful for regression:** Possible — but not the primary trendline field
- **Note:** This field is used to create the ReviewFlag using an IF formula in Workbook 1.

---

## Analytical Features

| Feature | Detail |
|---------|--------|
| Best-performing region | Solar South — Total DeliveryFee = £749 |
| Worst-performing region | Warp West — Total DeliveryFee = £570 |
| Best-performing service | Priority — Total DeliveryFee = £1,441 |
| Notable time trend | Revenue grows from Jan (£340) to Jun (£530), with a slight dip in April (£433) |
| Outlier | D038 (Row 21): Asteroid East, Standard service, Weight = 28.5 kg. All other parcels are 2.0–18.0 kg. |
| Scatter/trendline fields | Weight_kg (x) and DeliveryFee (y) — positive relationship |
| Pattern after filtering | Filter Region = Warp West: all CustomerRatings are 2 or 3, revealing consistent service quality issues not obvious in the full dataset |
| Pivot Table pattern | Solar South always leads total DeliveryFee; Priority service dominates revenue |
| Slicer pattern | Using a ServiceType slicer set to Standard reveals that Standard delivers consistently low average fees across all regions |
| Timeline pattern | Filtering Jan–Mar vs Apr–Jun shows increasing revenue in the second quarter |
| Limitation | The trendline R² = 0.34 is moderate. Weight alone does not fully explain fee variation — service type is also a major factor. |
