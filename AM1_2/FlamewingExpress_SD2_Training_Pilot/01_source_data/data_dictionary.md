# Data Dictionary — Flamewing Express SD2 Dataset

**File:** `01_source_data/sd2_start.xlsx`
**Sheet:** DeliveryData
**Records:** 75 rows (rows 5 to 79 in the Excel file, including 3 header rows)
**Date range:** January 2025 – December 2025
**Status:** Cleaned and treated. Ready for analysis.

---

## Field Reference

---

### 1. DeliveryID

| Property | Detail |
|----------|--------|
| Plain-English meaning | A unique reference code for each individual delivery |
| Data type | Text |
| Format | FE-001 to FE-075 |
| Valid values | Any code beginning FE- followed by a three-digit number |
| Blanks allowed? | No — every delivery must have an ID |
| Useful for filtering? | No — each value is unique |
| Useful for grouping? | No |
| Useful for calculation? | No |
| Useful for charting? | Yes — can label individual data points on a scatter chart |
| Useful for slicers? | No |
| Useful for timelines? | No |
| Useful for regression? | No |

---

### 2. DeliveryDate

| Property | Detail |
|----------|--------|
| Plain-English meaning | The date on which the delivery was completed or attempted |
| Data type | Date |
| Format | DD/MM/YYYY |
| Valid values | Any date in 2025 |
| Blanks allowed? | No |
| Useful for filtering? | Yes — filter by month, quarter or specific period |
| Useful for grouping? | Yes — group by month or quarter in Pivot Tables |
| Useful for calculation? | Yes — can be used to calculate month or time period |
| Useful for charting? | Yes — use on the X axis for time-series charts |
| Useful for slicers? | No — use a timeline instead |
| Useful for timelines? | **Yes — primary field for timeline filter** |
| Useful for regression? | No |

**Analytical note:** Revenue shows a visible peak in June, July and August. A timeline filter will reveal this seasonal pattern.

---

### 3. DragonRider

| Property | Detail |
|----------|--------|
| Plain-English meaning | The name of the dragon rider who completed the delivery |
| Data type | Text (categorical) |
| Valid values | Brimstone Bill, Cinderella Vex, Hotfoot Hana, Puff McGuffin, Scorch the Magnificent |
| Blanks allowed? | No |
| Useful for filtering? | Yes |
| Useful for grouping? | **Yes — primary grouping field. Use in Pivot Table Rows.** |
| Useful for calculation? | Yes — use with COUNTIF, SUMIF, AVERAGEIF to summarise by rider |
| Useful for charting? | Yes — X axis for rider comparison bar/column chart |
| Useful for slicers? | Yes — can be used as a slicer to filter by rider |
| Useful for timelines? | No |
| Useful for regression? | No |

**Analytical note:** Hotfoot Hana has the highest total revenue. Puff McGuffin has the lowest. This is visible in a Pivot Table and a column chart.

---

### 4. Route

| Property | Detail |
|----------|--------|
| Plain-English meaning | The delivery route taken by the dragon rider |
| Data type | Text (categorical) |
| Valid values | Northern Peaks, Ironforge Pass, Misty Vale, Sunken Swamp, Crystal Coast |
| Blanks allowed? | No |
| Useful for filtering? | **Yes — key filtering field** |
| Useful for grouping? | Yes — group by route in Pivot Tables |
| Useful for calculation? | Yes — use with SUMIF/AVERAGEIF |
| Useful for charting? | Yes — route comparison charts |
| Useful for slicers? | **Yes — add a Route slicer to reveal Crystal Coast performance** |
| Useful for timelines? | No |
| Useful for regression? | No |

**Analytical note:** Crystal Coast has the lowest revenue and the highest rate of Delayed deliveries. This pattern is clearest when a Route slicer is applied.

---

### 5. PackageType

| Property | Detail |
|----------|--------|
| Plain-English meaning | The category of package delivered |
| Data type | Text (categorical) |
| Valid values | Standard, Express, Fragile, Oversized |
| Blanks allowed? | No |
| Useful for filtering? | Yes |
| Useful for grouping? | Yes |
| Useful for calculation? | Yes — COUNTIF/SUMIF by PackageType |
| Useful for charting? | Yes |
| Useful for slicers? | **Yes — primary slicer field used in Workbooks 2 and 3** |
| Useful for timelines? | No |
| Useful for regression? | No |

**Analytical note:** Express packages have a significantly higher average revenue (~431 GP) compared to the overall average (~284 GP). Express packages also have the highest average CustomerRating.

---

### 6. DistanceKm

| Property | Detail |
|----------|--------|
| Plain-English meaning | The distance of the delivery route in kilometres |
| Data type | Whole number (integer) |
| Valid range | 22 km to 480 km |
| Blanks allowed? | No |
| Useful for filtering? | Yes — can filter for long or short routes |
| Useful for grouping? | No — continuous numeric field |
| Useful for calculation? | Yes — use in scatter chart and regression |
| Useful for charting? | **Yes — X axis for scatter chart (distance vs revenue)** |
| Useful for slicers? | No |
| Useful for timelines? | No |
| Useful for regression? | **Yes — primary X variable for trendline analysis** |

**Analytical note:** One outlier exists: FE-042 has a distance of only 22 km but a DeliveryTimeHrs of 47 hours. This is visually detectable on a scatter chart. The general relationship between DistanceKm and RevenueGP is positive (longer routes = more revenue).

---

### 7. DeliveryTimeHrs

| Property | Detail |
|----------|--------|
| Plain-English meaning | The number of hours taken to complete the delivery |
| Data type | Whole number (integer) |
| Valid range | 2 hours to 52 hours |
| Blanks allowed? | No |
| Useful for filtering? | Yes — can filter for unusually long deliveries |
| Useful for grouping? | No |
| Useful for calculation? | Yes — use MIN/MAX to find fastest and slowest |
| Useful for charting? | Yes — scatter chart with DistanceKm |
| Useful for slicers? | No |
| Useful for timelines? | No |
| Useful for regression? | Potentially — but DistanceKm vs RevenueGP is the primary relationship |

**Analytical note:** FE-042 has a DeliveryTimeHrs of 47 hours for a 22 km journey. This is a clear outlier and should be flagged during pattern-spotting. Conditional formatting on this column will highlight it.

---

### 8. RevenueGP

| Property | Detail |
|----------|--------|
| Plain-English meaning | The revenue earned from the delivery, measured in Gold Pieces (GP) |
| Data type | Whole number (integer) |
| Valid range | 88 GP to 530 GP |
| Blanks allowed? | No |
| Useful for filtering? | Yes — can filter for high or low earners |
| Useful for grouping? | No — continuous numeric field |
| Useful for calculation? | **Yes — primary calculation field: SUM, AVERAGE, SUMIF, SUMIFS** |
| Useful for charting? | **Yes — Y axis for scatter chart and column/bar charts** |
| Useful for slicers? | No |
| Useful for timelines? | No |
| Useful for regression? | **Yes — primary Y variable for trendline analysis** |

**Analytical note:** RevenueGP is the key business metric. The ReviewFlag IF formula flags records below 150 GP. Conditional formatting highlights low and high values. The Pivot Table groups revenue by rider and by month.

---

### 9. CustomerRating

| Property | Detail |
|----------|--------|
| Plain-English meaning | The customer satisfaction score for the delivery, on a scale of 1 to 5 |
| Data type | Whole number (integer) |
| Valid range | 1 (very poor) to 5 (excellent) |
| Blanks allowed? | No |
| Useful for filtering? | Yes — filter for low ratings |
| Useful for grouping? | Yes — can group by rating |
| Useful for calculation? | Yes — AVERAGEIF by route or rider |
| Useful for charting? | Yes |
| Useful for slicers? | No |
| Useful for timelines? | No |
| Useful for regression? | No |

**Analytical note:** Express packages have an average rating of approximately 4.2. Delayed and Lost deliveries have lower ratings. Crystal Coast (Delivered only) has an average rating of approximately 3.0.

---

### 10. DeliveryStatus

| Property | Detail |
|----------|--------|
| Plain-English meaning | Whether the delivery was completed successfully, delayed, or lost |
| Data type | Text (categorical) |
| Valid values | Delivered, Delayed, Lost |
| Blanks allowed? | No |
| Useful for filtering? | **Yes — key filtering field. Filter to Delivered to exclude delays.** |
| Useful for grouping? | Yes — use in Pivot Table or as a second COUNTIFS condition |
| Useful for calculation? | Yes — use as second condition in COUNTIFS/SUMIFS/AVERAGEIFS |
| Useful for charting? | Yes |
| Useful for slicers? | Yes — useful second slicer |
| Useful for timelines? | No |
| Useful for regression? | No |

**Analytical note:** Most Delayed and Lost deliveries involve Puff McGuffin or Crystal Coast route. Filtering to Delivered only changes rider rankings.

---

### 11. ReviewFlag (calculated column — added in Workbook 1)

| Property | Detail |
|----------|--------|
| Plain-English meaning | A flag created by an IF formula to mark deliveries with low revenue |
| Data type | Text (calculated) |
| Valid values | OK or Review |
| Formula | =IF(H_row_ < 150, "Review", "OK") |
| Created in | workbook1_complete.xlsx, column K |
| Blanks allowed? | No |
| Useful for filtering? | **Yes — filter to Review to focus on low-revenue records** |
| Useful for grouping? | Yes |
| Useful for calculation? | Yes — COUNTIF to count flagged records |
| Useful for slicers? | No |

---

## Dataset Summary Statistics (reference values)

| Measure | Value |
|---------|-------|
| Total records | 75 |
| Date range | January 2025 – December 2025 |
| Total revenue | Approx 21,280 GP |
| Average revenue | Approx 284 GP |
| Minimum revenue | 88 GP (FE-037) |
| Maximum revenue | 530 GP (FE-043) |
| Express delivery count | 20 |
| Express average revenue | Approx 431 GP |
| Records flagged Review | Approx 11 |
| Outlier record | FE-042 (22 km, 47 hours) |
| Top rider by revenue | Hotfoot Hana |
| Lowest rider by revenue | Puff McGuffin |
| Highest route average revenue | Northern Peaks |
| Lowest route average revenue | Crystal Coast |
| Peak revenue months | June, July, August |
