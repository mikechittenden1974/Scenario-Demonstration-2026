# Data Dictionary — StarPost Express Ltd Delivery Dataset

**File:** 01_source_data/sd2_start.xlsx
**Sheet:** Deliveries
**Records:** 75 rows (plus 1 header row)
**Date range:** January 2025 – June 2025

This dataset has been cleaned and treated. It is ready for analysis.

---

## Fields

---

### DeliveryID

| Property | Detail |
|---|---|
| Plain-English meaning | Unique reference code for each delivery |
| Data type | Text |
| Format | SPX-001 to SPX-075 |
| Blanks allowed | No |
| Useful for filtering | No — each value is unique |
| Useful for grouping | No |
| Useful for calculation | No |
| Useful for charting | No |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for trendline | No |

**Notes:** Use this field to identify individual records when reviewing flagged deliveries.

---

### DeliveryDate

| Property | Detail |
|---|---|
| Plain-English meaning | The date the delivery was completed or attempted |
| Data type | Date |
| Format | DD/MM/YYYY |
| Valid range | 03/01/2025 – 27/06/2025 |
| Blanks allowed | No |
| Useful for filtering | Yes — filter by month or quarter |
| Useful for grouping | Yes — group by month in Pivot Tables |
| Useful for calculation | No (use as a category, not a number) |
| Useful for charting | Yes — X-axis for trend over time |
| Useful for slicers | No |
| Useful for timelines | **Yes — primary timeline field** |
| Useful for trendline | No |

**Notes:** Six months of data (January–June 2025). April and May show a noticeable spike in delivery volume and revenue.

---

### Sector

| Property | Detail |
|---|---|
| Plain-English meaning | The galactic sector the delivery was routed through |
| Data type | Text (category) |
| Valid values | Alpha, Beta, Gamma, Delta, Epsilon |
| Blanks allowed | No |
| Useful for filtering | **Yes — key filter field** |
| Useful for grouping | **Yes — primary grouping field** |
| Useful for calculation | No — use in conditional formulas (COUNTIF, SUMIF) |
| Useful for charting | **Yes — X-axis for bar/column charts** |
| Useful for slicers | **Yes — primary slicer field** |
| Useful for timelines | No |
| Useful for trendline | No |

**Notes:** Alpha sector generates the highest total revenue. Delta sector generates the lowest. This field is central to the business question.

---

### ParcelClass

| Property | Detail |
|---|---|
| Plain-English meaning | The type of parcel being delivered |
| Data type | Text (category) |
| Valid values | Standard, Priority, Fragile, Oversized |
| Blanks allowed | No |
| Useful for filtering | **Yes — secondary filter field** |
| Useful for grouping | **Yes — secondary grouping field** |
| Useful for calculation | No — use in conditional formulas |
| Useful for charting | Yes — group or colour by class |
| Useful for slicers | **Yes — useful second slicer** |
| Useful for timelines | No |
| Useful for trendline | No |

**Notes:** Oversized generates the highest total revenue. Priority generates the highest average fee per delivery. Standard is the most frequent class. Fragile parcels receive the highest average customer rating.

---

### DestinationType

| Property | Detail |
|---|---|
| Plain-English meaning | The type of location the delivery was sent to |
| Data type | Text (category) |
| Valid values | Colony, Station, AsteroidBase, ShipToShip |
| Blanks allowed | No |
| Useful for filtering | Yes |
| Useful for grouping | Yes |
| Useful for calculation | No |
| Useful for charting | Yes — optional grouping in charts |
| Useful for slicers | Yes |
| Useful for timelines | No |
| Useful for trendline | No |

**Notes:** Colony is the most common destination type. ShipToShip deliveries are rarer and tend to involve Fragile or Priority classes.

---

### PilotID

| Property | Detail |
|---|---|
| Plain-English meaning | The pilot courier who completed the delivery |
| Data type | Text (category) |
| Valid values | P01-Kira, P02-Blaze, P03-Orion, P04-Nova, P05-Volt |
| Blanks allowed | No |
| Useful for filtering | Yes |
| Useful for grouping | Yes |
| Useful for calculation | No |
| Useful for charting | Yes — optional grouping |
| Useful for slicers | Yes |
| Useful for timelines | No |
| Useful for trendline | No |

**Notes:** Five pilots are active across all sectors. Pilot performance varies slightly, but sample sizes per pilot are small enough to limit conclusions. This is noted as a limitation in Workbook 3.

---

### Distance_AU

| Property | Detail |
|---|---|
| Plain-English meaning | The distance of the delivery route in astronomical units (AU) |
| Data type | Number (decimal) |
| Valid range | 0.5 – 15.0 |
| Blanks allowed | No |
| Useful for filtering | No |
| Useful for grouping | No |
| Useful for calculation | **Yes — key numeric field** |
| Useful for charting | **Yes — X-axis for scatter chart** |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for trendline | **Yes — predictor variable for regression** |

**Notes:** One astronomical unit (AU) is the distance from Earth to the Sun. This field has a positive correlation with DeliveryFee_credits. Use as the X variable in scatter chart and trendline analysis. One outlier (SPX-035) at 14.8 AU should be noticed and discussed.

---

### Weight_kg

| Property | Detail |
|---|---|
| Plain-English meaning | The weight of the parcel in kilograms |
| Data type | Number (decimal) |
| Valid range | 0.5 – 50.0 |
| Blanks allowed | No |
| Useful for filtering | No |
| Useful for grouping | No |
| Useful for calculation | Yes — can be summarised by class |
| Useful for charting | Yes — optional Y-axis |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for trendline | No |

**Notes:** Oversized parcels are heaviest (typically 37–50 kg). Fragile parcels are lightest (typically 1.5–2.5 kg). Weight broadly correlates with ParcelClass.

---

### DeliveryFee_credits

| Property | Detail |
|---|---|
| Plain-English meaning | The fee charged to the customer for the delivery, in StarPost credits |
| Data type | Number (whole number) |
| Valid range | 60 – 890 |
| Blanks allowed | No |
| Useful for filtering | No |
| Useful for grouping | No |
| Useful for calculation | **Yes — primary revenue field** |
| Useful for charting | **Yes — Y-axis for bar charts and scatter chart** |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for trendline | **Yes — outcome variable for regression** |

**Notes:** This is the main revenue field. Use SUMIF and SUMIFS to total revenue by sector, class, or status. Use as the Y variable in scatter chart analysis. SPX-035 has the highest fee at 890 credits — this is a genuine outlier and should be noted.

---

### DeliveryTime_hours

| Property | Detail |
|---|---|
| Plain-English meaning | The total time taken to complete the delivery, in hours |
| Data type | Number (whole number) |
| Valid range | 4 – 72 |
| Blanks allowed | No |
| Useful for filtering | No |
| Useful for grouping | No |
| Useful for calculation | Yes — average by sector or class |
| Useful for charting | Yes — optional comparison chart |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for trendline | No |

**Notes:** Longer distances generally take longer. Delayed deliveries often show higher hours. Oversized deliveries take the longest on average.

---

### CustomerRating

| Property | Detail |
|---|---|
| Plain-English meaning | Customer satisfaction score, given after delivery (1 = very poor, 5 = excellent) |
| Data type | Number (whole number) |
| Valid range | 1 – 5 |
| Blanks allowed | **Yes — blank for Returned deliveries** |
| Useful for filtering | No |
| Useful for grouping | No |
| Useful for calculation | Yes — AVERAGEIF by sector or class |
| Useful for charting | Yes — optional comparison |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for trendline | No |

**Notes:** Four records have blank ratings (SPX-028, SPX-032, SPX-055, SPX-075). These are all Returned deliveries. Fragile class has the highest average rating (consistently 5). Delta sector has the lowest average rating. Blanks are a data limitation to acknowledge in interpretation.

---

### StatusFlag

| Property | Detail |
|---|---|
| Plain-English meaning | The outcome status of the delivery |
| Data type | Text (category) |
| Valid values | OnTime, Delayed, Returned |
| Blanks allowed | No |
| Useful for filtering | **Yes — important filter field** |
| Useful for grouping | Yes |
| Useful for calculation | Yes — COUNTIF to count delayed or returned deliveries |
| Useful for charting | Yes — group or colour by status |
| Useful for slicers | **Yes — useful slicer field** |
| Useful for timelines | No |
| Useful for trendline | No |

**Notes:** Most deliveries are OnTime. Delta sector has the highest proportion of Delayed and Returned deliveries. Use this field in IF formulas to create a ReviewFlag. Returned deliveries have blank CustomerRating values.

---

## Analytical Features Summary

| Pattern | Where to find it |
|---|---|
| Alpha sector performs best | SUMIF by Sector, Pivot Table |
| Delta sector performs worst | SUMIF by Sector, Pivot Table |
| Oversized generates highest total revenue | SUMIF by ParcelClass |
| Priority generates highest average fee | AVERAGEIF by ParcelClass |
| April–May spike in volume and revenue | Timeline, Pivot Table by Month |
| High-value outlier (SPX-035, 890 credits) | Conditional formatting, MAX formula |
| Distance_AU correlates with DeliveryFee_credits | Scatter chart and trendline |
| Fragile class has best average customer rating | AVERAGEIF by ParcelClass |
| Delta sector has most Delayed/Returned | COUNTIFS by Sector and StatusFlag |
| Pattern after filtering: OnTime deliveries only | Filter on StatusFlag |
| Returned deliveries have blank CustomerRating | Filter on CustomerRating = blank |

---

## Limitations

1. **Blank CustomerRating values** — four records have no rating (Returned deliveries). Any average rating calculation should acknowledge this.
2. **Small pilot sample** — five pilots across 75 deliveries gives approximately 15 deliveries per pilot on average. This is too small to draw firm conclusions about individual pilot performance.
3. **Six months of data only** — trends visible in this dataset may not hold over a full year. Seasonal effects cannot be confirmed from this dataset alone.
4. **No cost data** — the dataset records revenue (DeliveryFee_credits) but not the cost of each delivery. Profit cannot be calculated.

---

*Data Dictionary prepared for training purposes. All values are fictional.*
