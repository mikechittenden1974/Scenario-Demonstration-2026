# DATA DICTIONARY — sd2_start.xlsx
## Starbase Meridian Logistics Authority — Cargo Delivery Records 2025

---

This file describes every column in the dataset `01_source_data/sd2_start.xlsx`.

The dataset contains **75 rows** of cleaned and treated cargo delivery records.

---

## Column Inventory

| Col | Field Name | Plain-English Meaning | Data Type | Valid Values / Range | Blanks? |
|-----|-----------|----------------------|-----------|---------------------|---------|
| A | DeliveryID | Unique identifier for each delivery | Text | MD-001 to MD-075 | No |
| B | DeliveryDate | Date the delivery was completed | Date | 01/01/2025 to 25/11/2025 | No |
| C | Sector | Orbital sector the cargo was delivered to | Text (category) | Alpha, Beta, Gamma, Delta | No |
| D | DeliveryType | The service tier used for the delivery | Text (category) | Express, Standard, Economy | No |
| E | CargoWeight_kg | The weight of the cargo in kilograms | Integer (numeric) | 55 to 500 | No |
| F | DeliveryTime_hrs | The number of hours the delivery took | Integer (numeric) | 5 to 46 | No |
| G | Revenue_credits | The revenue earned from the delivery in credits | Integer (numeric) | 340 to 4,200 | No |
| H | StaffID | The staff member who handled the delivery | Text (category) | PV01, RO02, ZQ03 | No |
| I | Status | The outcome of the delivery | Text (category) | Delivered, Delayed, Returned | No |

---

## Field-by-Field Guide

### A — DeliveryID
- **Meaning:** A unique reference code for each cargo delivery. Uses the format MD-001 through MD-075.
- **Useful for:** Identifying individual rows. Confirming record count with COUNTA.
- **Filtering:** Not typically filtered.
- **Grouping:** Not used for grouping.
- **Calculation:** Not used in formulas.
- **Charting:** Not used in charts.
- **Slicers:** No.
- **Timelines:** No.

---

### B — DeliveryDate
- **Meaning:** The date the delivery was recorded as complete. Format: DD/MM/YYYY.
- **Range:** 08/01/2025 to 25/11/2025. All records fall within calendar year 2025.
- **Useful for:** Trend analysis over time. Monthly and quarterly grouping.
- **Filtering:** Yes — filter by month, quarter, or date range.
- **Grouping:** Yes — group by month or quarter in Pivot Tables.
- **Calculation:** Not directly used in SUM/AVERAGE formulas, but used in date-based COUNTIFS.
- **Charting:** Yes — use as the x-axis for time-series line charts.
- **Slicers:** No (date fields use timelines, not slicers).
- **Timelines:** YES — this is the field to use for the timeline in Workbook 2 and the Dashboard.
- **Trendline:** Not directly, but monthly totals can show a revenue trend over time.
- **Analytical note:** July 2025 is the peak revenue month (12,200 credits). December 2025 has only one delivery (720 credits). A timeline filter reveals this seasonal pattern clearly.

---

### C — Sector
- **Meaning:** The orbital sector the cargo was delivered to. There are four sectors: Alpha, Beta, Gamma and Delta.
- **Useful for:** Comparing performance between sectors. Answering the business question.
- **Filtering:** Yes — filter by sector to isolate performance.
- **Grouping:** Yes — use in Pivot Table Rows to group by sector.
- **Calculation:** Yes — use as the criteria in COUNTIF, SUMIF, AVERAGEIF, COUNTIFS, SUMIFS, AVERAGEIFS.
- **Charting:** Yes — use as categories in bar charts and Pivot Charts.
- **Slicers:** YES — add a slicer for Sector to explore individual sector performance.
- **Timelines:** No.
- **Trendline:** No — Sector is categorical.
- **Analytical note:**
  - Alpha has the highest revenue total: **49,220 credits** (22 deliveries).
  - Delta has the lowest revenue total: **9,890 credits** (15 deliveries).
  - The gap between Alpha and Delta is large and meaningful.

---

### D — DeliveryType
- **Meaning:** The service tier chosen for the delivery. Express is fastest and most expensive. Economy is slowest and cheapest.
- **Valid values:** Express, Standard, Economy.
- **Useful for:** Identifying which service tier drives revenue.
- **Filtering:** Yes — filter by DeliveryType to compare tiers.
- **Grouping:** Yes — use in Pivot Table Rows or Columns.
- **Calculation:** Yes — use as criteria in COUNTIF, SUMIF, AVERAGEIF, COUNTIFS, SUMIFS.
- **Charting:** Yes — use as chart categories or series labels.
- **Slicers:** YES — the primary slicer field for the Dashboard.
- **Timelines:** No.
- **Trendline:** No — DeliveryType is categorical.
- **Analytical note:**
  - Express delivers the highest average revenue: **2,364.58 credits per delivery**.
  - Economy delivers the lowest: **531.25 credits per delivery**.
  - Alpha Sector is strongly Express-dominated (15 of 22 deliveries).

---

### E — CargoWeight_kg
- **Meaning:** The weight of the cargo in kilograms. Heavier cargo generally corresponds to higher-value deliveries.
- **Range:** 55 kg (minimum, Delta Economy) to 500 kg (maximum, Alpha Express — the outlier row MD-021).
- **Useful for:** Scatter chart analysis. Understanding the relationship between weight and revenue.
- **Filtering:** Not a primary filter field.
- **Grouping:** Not used for grouping.
- **Calculation:** Yes — SUM, AVERAGE, MIN, MAX. Also used in AVERAGEIF by Sector.
- **Charting:** YES — use as the x-axis in a scatter chart against Revenue_credits.
- **Slicers:** No.
- **Timelines:** No.
- **Trendline / Regression:** YES — this is one of the two fields for the scatter chart and trendline.
- **Analytical note:** There is a very strong positive correlation between CargoWeight_kg and Revenue_credits. R² = 0.9782.

---

### F — DeliveryTime_hrs
- **Meaning:** How many hours the delivery took from dispatch to confirmed arrival.
- **Range:** 5 hours (fastest — Alpha Express) to 46 hours (slowest — Delta Economy).
- **Useful for:** Understanding efficiency differences between sectors and delivery types.
- **Filtering:** Not a primary filter.
- **Grouping:** Not used for grouping.
- **Calculation:** Yes — SUM, AVERAGE, MIN, MAX. Reveals the time cost of Economy deliveries.
- **Charting:** Can be used in a secondary chart for operational analysis.
- **Slicers:** No.
- **Timelines:** No.
- **Trendline:** Secondary option only (CargoWeight vs Revenue is the primary trendline pair).
- **Analytical note:** Economy deliveries average 36.67 hours. Express deliveries average 7.92 hours. The difference is operationally significant.

---

### G — Revenue_credits
- **Meaning:** The amount of revenue earned from each individual delivery, measured in station credits.
- **Range:** 340 credits (minimum) to 4,200 credits (maximum — outlier: MD-021).
- **Overall total:** 104,060 credits across all 75 deliveries.
- **Useful for:** Answering the main business question. The primary numeric field for analysis.
- **Filtering:** Not a primary filter (but used in IF flag — values above 2,500 are flagged for review).
- **Grouping:** Not used for grouping.
- **Calculation:** YES — the main field for SUM, AVERAGE, MIN, MAX, SUMIF, AVERAGEIF, SUMIFS, AVERAGEIFS, IF.
- **Charting:** YES — use as the y-axis in bar charts, Pivot Charts and scatter charts.
- **Slicers:** No (numeric fields do not use slicers).
- **Timelines:** No.
- **Trendline / Regression:** YES — this is the y-axis field in the scatter chart and trendline.
- **Analytical note:** MD-021 (Alpha, Express, 500 kg) earns 4,200 credits — noticeably higher than any other record. This is the dataset outlier. It appears in conditional formatting and should be mentioned in interpretation.

---

### H — StaffID
- **Meaning:** The staff member who handled the delivery. Uses the codes PV01 (Commander Petra Volkov), RO02 (Tech Analyst Remi Okafor), and ZQ03 (Dispatcher Zara Quintero).
- **Valid values:** PV01, RO02, ZQ03.
- **Useful for:** Filtering to see how many deliveries each staff member handled.
- **Filtering:** Yes — filter by StaffID.
- **Grouping:** Can be used in Pivot Table Rows.
- **Calculation:** Used as criteria in COUNTIFS (e.g. PV01 + Delivered).
- **Charting:** Secondary use only.
- **Slicers:** Optional — can be added to explore staff-level patterns.
- **Timelines:** No.
- **Trendline:** No.
- **Analytical note:** PV01 handles mainly Express deliveries. ZQ03 handles mainly Economy deliveries. This is worth noting during interpretation.

---

### I — Status
- **Meaning:** The outcome of the delivery. Delivered = completed successfully. Delayed = arrived late. Returned = did not reach the destination.
- **Valid values:** Delivered, Delayed, Returned.
- **Overall split:** 61 Delivered (81%), 11 Delayed (15%), 3 Returned (4%).
- **Useful for:** Identifying operational problems. Filtering by Delayed to see which sectors or types have issues.
- **Filtering:** YES — filtering by Status=Delayed reveals a pattern: Beta Sector Economy deliveries have a high rate of Delayed outcomes.
- **Grouping:** Can be used in Pivot Table Rows or Columns.
- **Calculation:** Used as criteria in COUNTIFS and SUMIFS (e.g. Beta + Delayed).
- **Charting:** Can be used in a stacked bar chart.
- **Slicers:** YES — add a slicer for Status to explore delivery outcomes.
- **Timelines:** No.
- **Trendline:** No.
- **Analytical note:** Filtering for Sector = Beta AND DeliveryType = Economy reveals 4 out of 7 records are Delayed or Returned. This is the "pattern that only appears after filtering."

---

## Analytical Features Summary

| Feature | Detail |
|---------|--------|
| Best-performing category | Alpha Sector — 49,220 credits total revenue |
| Worst-performing category | Delta Sector — 9,890 credits total revenue |
| Time period with notable change | July 2025 is peak (12,200 credits); December 2025 drops to 720 credits (1 delivery) |
| Outlier row | MD-021 — Alpha, Express, 500 kg, 4,200 credits (row 22 in Excel) |
| Scatter chart fields | CargoWeight_kg (x-axis) and Revenue_credits (y-axis) |
| Pattern after filtering | Filter Sector=Beta AND DeliveryType=Economy: 4 of 7 deliveries Delayed or Returned |
| Pattern in Pivot Table | Alpha Sector dominates; 15 of its 22 deliveries are Express |
| Pattern with slicer | Selecting Economy in the DeliveryType slicer reveals Delta and Beta problems |
| Pattern with timeline | Selecting Q4 in the timeline reveals a sharp revenue drop — especially December |
| Data suggests but does not prove | Heavier cargo = higher revenue (strong correlation, R²=0.9782, but only 75 records) |
| Limitation | Small sub-group sample sizes (e.g. Delta Express = 1 delivery only — cannot generalise) |
