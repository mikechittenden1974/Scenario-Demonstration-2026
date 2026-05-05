# DATA DICTIONARY
## Dragonflight Deliveries Ltd — SD2 Dataset
## File: 01_source_data/sd2_start.xlsx

---

This dictionary explains every field in the cleaned and treated dataset.

The dataset is ready for analysis. No further cleaning or preparation is required.

---

## Fields

---

### Delivery_ID

| Property | Detail |
|---|---|
| Plain-English meaning | A unique code for each delivery record |
| Data type | Text |
| Valid values | DD001 to DD075 |
| Blanks allowed | No |
| Useful for filtering | No |
| Useful for grouping | No |
| Useful for calculation | No |
| Useful for charting | No |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for regression / trendline | No |

**Notes:** Each delivery has a unique ID. Use it to identify individual records if you spot an outlier or unusual value.

---

### Delivery_Date

| Property | Detail |
|---|---|
| Plain-English meaning | The date the delivery was completed |
| Data type | Date (DD/MM/YYYY) |
| Valid values | 01/01/2025 to 30/09/2025 |
| Blanks allowed | No |
| Useful for filtering | Yes |
| Useful for grouping | Yes — group by month or quarter |
| Useful for calculation | Yes — use to sort or filter by time period |
| Useful for charting | Yes — use on a chart horizontal axis |
| Useful for slicers | No |
| Useful for timelines | Yes — this is the date field for the Excel Timeline |
| Useful for regression / trendline | No |

**Notes:** The dataset covers January 2025 to September 2025. Look for patterns across months. A timeline in Excel uses this field to let you filter by time period.

---

### Dragon_Name

| Property | Detail |
|---|---|
| Plain-English meaning | The name of the dragon who made the delivery |
| Data type | Text |
| Valid values | Flameheart, Stonewing, Cinderpuff, Mossclaw |
| Blanks allowed | No |
| Useful for filtering | Yes |
| Useful for grouping | Yes — group by dragon to compare performance |
| Useful for calculation | Yes — use with COUNTIF or SUMIF |
| Useful for charting | Yes — use as a category on a chart |
| Useful for slicers | Yes — use as a slicer field |
| Useful for timelines | No |
| Useful for regression / trendline | No |

**Notes:** There are four dragons. Each has a different delivery count and revenue contribution. A slicer using Dragon_Name lets you explore one dragon at a time.

---

### Route

| Property | Detail |
|---|---|
| Plain-English meaning | The delivery route taken by the dragon |
| Data type | Text |
| Valid values | Mountain_Pass, Coastal_Hop, Forest_Trail, Sky_Summit, Cavern_Run |
| Blanks allowed | No |
| Useful for filtering | Yes |
| Useful for grouping | Yes — group by route to compare revenue |
| Useful for calculation | Yes — use with COUNTIF, SUMIF, AVERAGEIF |
| Useful for charting | Yes — key category for charts |
| Useful for slicers | Yes — use as a slicer field |
| Useful for timelines | No |
| Useful for regression / trendline | No |

**Notes:** Route is one of the most important fields for answering the business question. Compare total revenue by route using a Pivot Table. Look for the highest-performing and lowest-performing routes.

---

### Cargo_Category

| Property | Detail |
|---|---|
| Plain-English meaning | The type of cargo carried on the delivery |
| Data type | Text |
| Valid values | Luxury_Goods, Standard_Parcels, Fragile_Items, Perishables, Oversized |
| Blanks allowed | No |
| Useful for filtering | Yes |
| Useful for grouping | Yes — group by category to compare revenue and ratings |
| Useful for calculation | Yes — use with COUNTIF, SUMIF, AVERAGEIF |
| Useful for charting | Yes — use as a second grouping in Pivot Charts |
| Useful for slicers | Yes — use as a slicer field |
| Useful for timelines | No |
| Useful for regression / trendline | No |

**Notes:** Different cargo types attract different revenue levels. Use Cargo_Category with a slicer to explore how each cargo type affects the overall picture.

---

### Cargo_Weight_kg

| Property | Detail |
|---|---|
| Plain-English meaning | The weight of the cargo in kilograms |
| Data type | Number (decimal, 1 decimal place) |
| Valid values | 1.0 to 150.0 |
| Blanks allowed | No |
| Useful for filtering | Yes — filter to heavy or light deliveries |
| Useful for grouping | No — use as a number, not a category |
| Useful for calculation | Yes — use in SUM, AVERAGE, MIN, MAX |
| Useful for charting | Yes — use on the X axis of a scatter chart |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for regression / trendline | Yes — use as the X variable in a scatter trendline |

**Notes:** Cargo_Weight_kg and Flight_Time_Hours are the two fields for the scatter chart and trendline. Pebble Grimstone believes heavier packages take longer. The scatter chart will help you explore this. Watch for one unusual record that does not follow the general pattern.

---

### Flight_Time_Hours

| Property | Detail |
|---|---|
| Plain-English meaning | How long the delivery flight took in hours |
| Data type | Number (decimal, 1 decimal place) |
| Valid values | 0.5 to 14.0 |
| Blanks allowed | No |
| Useful for filtering | No |
| Useful for grouping | No |
| Useful for calculation | Yes — use in AVERAGE, MIN, MAX |
| Useful for charting | Yes — use on the Y axis of a scatter chart |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for regression / trendline | Yes — use as the Y variable in a scatter trendline |

**Notes:** Flight_Time_Hours is the Y variable for the scatter chart. There is a general upward relationship between cargo weight and flight time, but the relationship is not perfect. One record has an unusually short flight time for a very heavy package.

---

### Revenue_GP

| Property | Detail |
|---|---|
| Plain-English meaning | The revenue received for the delivery, in Gold Pieces |
| Data type | Number (whole number) |
| Valid values | 50 to 850 |
| Blanks allowed | No |
| Useful for filtering | Yes — filter to high or low revenue deliveries |
| Useful for grouping | No — use as a number, not a category |
| Useful for calculation | Yes — key field for SUM, AVERAGE, SUMIF, SUMIFS |
| Useful for charting | Yes — use as the Values field in Pivot Charts |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for regression / trendline | No |

**Notes:** Revenue_GP (Gold Pieces) is the primary measure for answering the business question. Use it in SUM, SUMIF and SUMIFS to compare performance by route and category.

---

### Tip_GP

| Property | Detail |
|---|---|
| Plain-English meaning | The tip received from the customer, in Gold Pieces |
| Data type | Number (whole number) |
| Valid values | 0 to 80 |
| Blanks allowed | No |
| Useful for filtering | Yes — filter to deliveries with tips |
| Useful for grouping | No |
| Useful for calculation | Yes — can be added to Revenue_GP or used separately |
| Useful for charting | Yes — useful as a secondary measure |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for regression / trendline | No |

**Notes:** Some deliveries receive no tip (value = 0). Tip patterns can reveal something interesting when you filter by route or cargo category.

---

### Customer_Rating

| Property | Detail |
|---|---|
| Plain-English meaning | The customer satisfaction rating for the delivery (1 = very unhappy, 5 = very happy) |
| Data type | Number (whole number) |
| Valid values | 1, 2, 3, 4, 5 |
| Blanks allowed | No |
| Useful for filtering | Yes — filter to low-rated deliveries |
| Useful for grouping | Yes — group by rating |
| Useful for calculation | Yes — use AVERAGEIF to compare average ratings by route or category |
| Useful for charting | Yes |
| Useful for slicers | No |
| Useful for timelines | No |
| Useful for regression / trendline | No |

**Notes:** A rating of 1 or 2 suggests a delivery that needs review. The IF formula in Workbook 1 uses this field to create a Review_Flag. Ash Wingmore particularly wants to see which deliveries scored below 3.

---

### On_Time

| Property | Detail |
|---|---|
| Plain-English meaning | Whether the delivery arrived on time |
| Data type | Text |
| Valid values | Y (on time), N (late) |
| Blanks allowed | No |
| Useful for filtering | Yes — filter to late deliveries |
| Useful for grouping | Yes — group by on-time status |
| Useful for calculation | Yes — use in COUNTIF, COUNTIFS, AVERAGEIF |
| Useful for charting | No |
| Useful for slicers | Yes |
| Useful for timelines | No |
| Useful for regression / trendline | No |

**Notes:** Use On_Time with COUNTIFS to answer two-condition questions. For example: how many deliveries on the Coastal_Hop route were also late?

---

## Summary Table

| Field | Type | Filter | Group | Calculate | Chart | Slicer | Timeline | Trendline |
|---|---|---|---|---|---|---|---|---|
| Delivery_ID | Text | No | No | No | No | No | No | No |
| Delivery_Date | Date | Yes | Yes | Yes | Yes | No | **Yes** | No |
| Dragon_Name | Text | Yes | Yes | Yes | Yes | **Yes** | No | No |
| Route | Text | Yes | Yes | Yes | Yes | **Yes** | No | No |
| Cargo_Category | Text | Yes | Yes | Yes | Yes | **Yes** | No | No |
| Cargo_Weight_kg | Number | Yes | No | Yes | Yes | No | No | **X axis** |
| Flight_Time_Hours | Number | No | No | Yes | Yes | No | No | **Y axis** |
| Revenue_GP | Number | Yes | No | Yes | Yes | No | No | No |
| Tip_GP | Number | Yes | No | Yes | Yes | No | No | No |
| Customer_Rating | Number | Yes | Yes | Yes | Yes | No | No | No |
| On_Time | Text | Yes | Yes | Yes | No | Yes | No | No |

---

*Data Dictionary — Dragonflight Deliveries Ltd SD2 Training Pilot*
