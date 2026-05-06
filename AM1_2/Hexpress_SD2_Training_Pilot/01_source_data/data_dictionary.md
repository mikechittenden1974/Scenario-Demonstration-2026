# Data Dictionary — sd2_start.xlsx

**Organisation:** Hexpress Delivery Co.
**File:** 01_source_data/sd2_start.xlsx
**Sheet:** Deliveries
**Records:** 75
**Date range:** 05 January 2026 – 29 June 2026
**Status:** Cleaned and treated — ready for analysis

---

## How to Read This Dictionary

Each field in the dataset is listed below.

For each field you will find:

- what the field is called in the spreadsheet
- what it means in plain English
- the data type (text, number or date)
- the valid values or range
- whether blank values are allowed
- which analytical uses the field supports

---

## Field Definitions

---

### DeliveryID

| Property | Detail |
|---|---|
| Field name | DeliveryID |
| Plain-English meaning | A unique code identifying each individual delivery. |
| Data type | Text |
| Valid values | HX001 to HX075 — one code per row |
| Blanks allowed? | No |
| Useful for filtering? | No — each value appears only once |
| Useful for grouping? | No |
| Useful for calculation? | No |
| Useful for charting? | As a label only |
| Useful for slicers? | No |
| Useful for timelines? | No |
| Useful for regression or trendline? | No — this is an identifier, not a measurement |

**Note:** Row HX023 is highlighted in yellow in the dataset. This delivery has an unusually long delivery time relative to its distance and is worth investigating.

---

### DeliveryDate

| Property | Detail |
|---|---|
| Field name | DeliveryDate |
| Plain-English meaning | The date on which the delivery was completed. |
| Data type | Date (formatted DD/MM/YYYY) |
| Valid values | 05 January 2026 – 29 June 2026 |
| Blanks allowed? | No |
| Useful for filtering? | Yes — filter by month, quarter or date range |
| Useful for grouping? | Yes — group by month to see seasonal patterns |
| Useful for calculation? | Yes — use COUNTIFS with date criteria to count deliveries in a period |
| Useful for charting? | Yes — use on the horizontal axis of a time-series chart |
| Useful for slicers? | No — slicers work best with text categories |
| Useful for timelines? | **Yes — this is the field to use for a Pivot Table timeline** |
| Useful for regression or trendline? | No |

**Pattern to look for:** March 2026 has noticeably more deliveries than other months.

---

### DragonName

| Property | Detail |
|---|---|
| Field name | DragonName |
| Plain-English meaning | The name of the dragon who completed the delivery. |
| Data type | Text |
| Valid values | Scorchwing, Frostclaw, Embermaw, Thornscale |
| Blanks allowed? | No |
| Useful for filtering? | **Yes — filter by dragon to compare performance** |
| Useful for grouping? | **Yes — group by DragonName in Pivot Tables** |
| Useful for calculation? | **Yes — use COUNTIF, SUMIF, AVERAGEIF with DragonName as the condition** |
| Useful for charting? | **Yes — use on the axis of a bar or column chart** |
| Useful for slicers? | **Yes — excellent slicer field** |
| Useful for timelines? | No |
| Useful for regression or trendline? | No — this is a category, not a measurement |

**Pattern to look for:** Scorchwing consistently achieves the highest customer scores. Frostclaw consistently achieves the lowest.

---

### DeliveryZone

| Property | Detail |
|---|---|
| Field name | DeliveryZone |
| Plain-English meaning | The geographical zone to which the delivery was made. |
| Data type | Text |
| Valid values | North, South, East, West, Central |
| Blanks allowed? | No |
| Useful for filtering? | **Yes — filter by zone to compare revenue and performance** |
| Useful for grouping? | **Yes — group by DeliveryZone in Pivot Tables** |
| Useful for calculation? | **Yes — use SUMIF with DeliveryZone to total revenue by zone** |
| Useful for charting? | **Yes — use on the axis of a bar chart** |
| Useful for slicers? | **Yes — excellent slicer field** |
| Useful for timelines? | No |
| Useful for regression or trendline? | No |

**Pattern to look for:** North zone deliveries are the longest and generate the most revenue. Central zone deliveries are very short and generate the least.

---

### PackageType

| Property | Detail |
|---|---|
| Field name | PackageType |
| Plain-English meaning | The category of package being delivered. |
| Data type | Text |
| Valid values | Standard, Express, Fragile |
| Blanks allowed? | No |
| Useful for filtering? | **Yes — filter by PackageType to compare customer scores and revenue** |
| Useful for grouping? | **Yes — group by PackageType in Pivot Tables** |
| Useful for calculation? | **Yes — use COUNTIFS, SUMIFS or AVERAGEIFS with PackageType as one condition** |
| Useful for charting? | **Yes — use on the axis or as a series in a grouped chart** |
| Useful for slicers? | **Yes — this is the recommended slicer field for the dashboard** |
| Useful for timelines? | No |
| Useful for regression or trendline? | No |

**Revenue reference:**
- Standard: £5.00 base + £0.10 per km
- Express: £10.00 base + £0.15 per km
- Fragile: £8.00 base + £0.12 per km

**Pattern to look for:** Fragile deliveries tend to receive slightly lower customer scores, likely due to handling expectations.

---

### DistanceKm

| Property | Detail |
|---|---|
| Field name | DistanceKm |
| Plain-English meaning | The distance of the delivery route in kilometres. |
| Data type | Number (one decimal place) |
| Valid values | 5.0 km to 148.0 km |
| Blanks allowed? | No |
| Useful for filtering? | Yes — filter for short or long routes |
| Useful for grouping? | No — this is a continuous number, not a category |
| Useful for calculation? | **Yes — use in regression analysis, AVERAGEIF or SUMIF** |
| Useful for charting? | **Yes — use on the horizontal (X) axis of a scatter chart** |
| Useful for slicers? | No — continuous numbers do not work well as slicers |
| Useful for timelines? | No |
| Useful for regression or trendline? | **Yes — this is the X variable in the scatter chart trendline** |

**Zone distance guide (approximate ranges):**
- North: 80 – 148 km
- South: 40 – 88 km
- East: 30 – 78 km
- West: 20 – 68 km
- Central: 5 – 24 km

---

### DeliveryTimeMin

| Property | Detail |
|---|---|
| Field name | DeliveryTimeMin |
| Plain-English meaning | How long the delivery took, in minutes. |
| Data type | Number (whole number, minutes) |
| Valid values | Approximately 15 to 200 minutes (one outlier at 189 minutes — see HX023) |
| Blanks allowed? | No |
| Useful for filtering? | Yes — filter for unusually long or short deliveries |
| Useful for grouping? | No |
| Useful for calculation? | **Yes — use AVERAGE, AVERAGEIF, AVERAGEIFS to compare dragons** |
| Useful for charting? | **Yes — use on the vertical (Y) axis of a scatter chart** |
| Useful for slicers? | No |
| Useful for timelines? | No |
| Useful for regression or trendline? | **Yes — this is the Y variable in the scatter chart trendline** |

**Outlier note:** HX023 has a delivery time of 189 minutes for a 15 km route. This is far above the expected value and should be noticed during analysis.

---

### PackageWeightKg

| Property | Detail |
|---|---|
| Field name | PackageWeightKg |
| Plain-English meaning | The weight of the package in kilograms. |
| Data type | Number (one decimal place) |
| Valid values | 0.5 kg to 18.0 kg |
| Blanks allowed? | No |
| Useful for filtering? | Yes — filter for heavy or light packages |
| Useful for grouping? | No |
| Useful for calculation? | Yes — AVERAGE, MIN, MAX for general statistics |
| Useful for charting? | Yes — as a secondary scatter variable to explore if weight affects time |
| Useful for slicers? | No |
| Useful for timelines? | No |
| Useful for regression or trendline? | Possible secondary analysis — not the main scatter pair for this scenario |

---

### CustomerScore

| Property | Detail |
|---|---|
| Field name | CustomerScore |
| Plain-English meaning | The satisfaction rating given by the customer after the delivery. Scored from 1 (very poor) to 10 (excellent). |
| Data type | Number (one decimal place) |
| Valid values | 1.0 to 10.0 |
| Blanks allowed? | No |
| Useful for filtering? | **Yes — filter for low scores (below 6) to find problem deliveries** |
| Useful for grouping? | No — this is a measurement, not a category |
| Useful for calculation? | **Yes — AVERAGE, AVERAGEIF, AVERAGEIFS to compare dragons and package types** |
| Useful for charting? | **Yes — use on bar charts to compare average scores by dragon or zone** |
| Useful for slicers? | No |
| Useful for timelines? | No |
| Useful for regression or trendline? | No — CustomerScore is not the focus of the trendline in this scenario |
| Useful for IF flag? | **Yes — use IF(CustomerScore < 6, "Review", "OK") to flag low-scoring deliveries** |

**Score bands:**
- 8.0 – 10.0: High satisfaction — no action needed
- 6.0 – 7.9: Acceptable
- Below 6.0: Requires review

**Pattern to look for:**
- Scorchwing average score: approximately 8.4
- Frostclaw average score: approximately 4.8
- The gap between these two dragons is the key business finding.

---

### RevenueGBP

| Property | Detail |
|---|---|
| Field name | RevenueGBP |
| Plain-English meaning | The revenue generated by the delivery, in pounds sterling (£). |
| Data type | Number (two decimal places, £) |
| Valid values | £5.50 to approximately £32.00 |
| Blanks allowed? | No |
| Useful for filtering? | Yes |
| Useful for grouping? | No |
| Useful for calculation? | **Yes — SUM, SUMIF, SUMIFS to total revenue by zone, dragon or package type** |
| Useful for charting? | **Yes — use in bar charts to compare total or average revenue by group** |
| Useful for slicers? | No |
| Useful for timelines? | No |
| Useful for regression or trendline? | No — not the main metric for regression in this scenario |

**Revenue formula used:**
- Standard: £5.00 + (DistanceKm × £0.10)
- Express: £10.00 + (DistanceKm × £0.15)
- Fragile: £8.00 + (DistanceKm × £0.12)

**Pattern to look for:** North zone generates far more revenue per delivery than Central zone, because North routes are much longer.

---

## ReviewFlag (added by the learner in Workbook 1)

| Property | Detail |
|---|---|
| Field name | ReviewFlag |
| Plain-English meaning | A label created by the learner using an IF formula, to flag deliveries with a CustomerScore below 6. |
| Data type | Text (formula result) |
| Valid values | "Review" or "OK" |
| Blanks allowed? | No — the formula should cover all 75 rows |
| Formula | =IF(I5<6,"Review","OK") — entered in column K of the Deliveries sheet |
| Useful for filtering? | **Yes — filter by "Review" to focus on problem deliveries** |
| Useful for grouping? | Yes — count Review vs OK using COUNTIF |
| Useful for slicers? | Yes — can be used as a slicer once the Pivot Table is built |

**Note:** This column is not present in 01_source_data/sd2_start.xlsx. The learner adds it in Workbook 1.

---

## Dataset Patterns — Summary

The following patterns are intentionally present in the dataset for analysis.

These are not listed in order of importance.

| Pattern | How to find it |
|---|---|
| Scorchwing has the highest avg customer score | AVERAGEIF or Pivot Table by DragonName |
| Frostclaw has the lowest avg customer score | AVERAGEIF or Pivot Table by DragonName |
| March 2026 had the most deliveries | COUNTIFS with date range, or Timeline on Pivot Table |
| HX023 is an outlier (189 min for 15 km) | Filter by DeliveryTimeMin > 100, or Conditional Formatting |
| North zone generates the highest avg revenue | AVERAGEIF(DeliveryZone,"North",RevenueGBP) |
| Central zone generates the lowest avg revenue | AVERAGEIF(DeliveryZone,"Central",RevenueGBP) |
| Distance and delivery time are positively correlated | Scatter chart of DistanceKm vs DeliveryTimeMin |
| R² ≈ 0.54 for the distance/time trendline | Display R² on the trendline in Excel |
| Fragile deliveries tend to have lower scores | AVERAGEIF(PackageType,"Fragile",CustomerScore) |
| Express deliveries generate the most revenue per km | AVERAGEIF(PackageType,"Express",RevenueGBP) |

---

## Dataset Limitations

1. **Time period:** Six months only (January–June 2026). Seasonal patterns cannot be confirmed from one year of data.

2. **Outlier cause:** The cause of HX023's unusually long delivery time is unknown. It could be an incident, a recording error, or an unusual route. The data does not explain it.

3. **Score interpretation:** CustomerScore reflects satisfaction, but does not indicate the reason for dissatisfaction. A low score from Frostclaw could reflect the dragon's performance, the difficulty of the route, or customer expectations.

4. **Causation vs correlation:** The positive correlation between DistanceKm and DeliveryTimeMin (R² ≈ 0.54) does not prove that distance causes the time variation. Other factors, including which dragon made the delivery, also influence delivery time.

---

*Data dictionary created for SD2 Training Pilot — Hexpress Delivery Co. All data is fictional.*
