# File Manifest — Orbit Express SD2 Training Pilot

**Generated:** 2026-05-03
**Status:** VALIDATED — see 04_manifest/validation_verification_report.md
**Scenario:** Orbit Express Delivery Ltd — Intergalactic Parcel Delivery
**Business question:** Which delivery routes and parcel types generate the most revenue, and is there a relationship between parcel weight and delivery cost?

---

## Folder Structure

```
OrbitExpress_SD2_Training_Pilot/
├── 00_scenario/
│   └── scenario_brief.md
├── 01_source_data/
│   ├── sd2_start.xlsx
│   └── data_dictionary.md
├── 02_workbook_data/
│   ├── workbook1_start.xlsx
│   ├── workbook1_complete.xlsx
│   ├── workbook2_start.xlsx
│   ├── workbook2_complete.xlsx
│   ├── workbook3_start.xlsx
│   ├── workbook3_complete.xlsx
│   └── sd2_complete.xlsx
├── 03_workbooks/
│   ├── workbook1_formulas_filters_flags.docx
│   ├── workbook2_pivots_charts_slicers_timelines.docx
│   └── workbook3_dashboard_trendline_interpretation.docx
└── 04_manifest/
    ├── file_manifest.md
    └── validation_verification_report.md
```

---

## File-by-File Reference

---

### 00_scenario/scenario_brief.md

| Property | Detail |
|----------|--------|
| Purpose | Scenario description, characters, business question, and file index |
| Workbook number | N/A |
| Difficulty score | N/A |
| File size | 3,548 bytes |
| Validation status | PASS |

---

### 01_source_data/sd2_start.xlsx

| Property | Detail |
|----------|--------|
| Purpose | Cleaned and treated dataset. 75 delivery order records, Jan–Sep 2024. Ready for analysis. |
| Sheets | Data |
| Records | 75 rows of data (rows 3–77), column headers in row 2 |
| Columns | OrderID, OrderDate, DeliveryRoute, ParcelType, CourierName, ParcelWeight_kg, DeliveryDistance_AU, BaseCost_credits, FuelSurcharge_credits, TotalRevenue_credits, DeliveryTime_hours, CustomerRating, OnTimeDelivery |
| Workbook number | N/A — source file used by all three workbooks |
| Difficulty score | N/A |
| File size | 13,450 bytes |
| Validation status | PASS — zero formula errors confirmed |

---

### 01_source_data/data_dictionary.md

| Property | Detail |
|----------|--------|
| Purpose | Plain-English explanation of every field in sd2_start.xlsx, including valid values, data types, and recommended uses for filtering, grouping, calculation, charting, slicers, timelines, and regression |
| Workbook number | N/A |
| Difficulty score | N/A |
| File size | 9,268 bytes |
| Validation status | PASS |

---

### 02_workbook_data/workbook1_start.xlsx

| Property | Detail |
|----------|--------|
| Purpose | Learner start file for Workbook 1. Contains: Data sheet (75 rows, no ReviewFlag column), Calculations sheet (Section labels and yellow formula cells — all empty for learner to complete), START HERE instructions sheet |
| Workbook number | 1 |
| Difficulty score | 3 / 10 |
| File size | 13,906 bytes |
| Validation status | PASS |

---

### 02_workbook_data/workbook1_complete.xlsx

| Property | Detail |
|----------|--------|
| Purpose | Model answer for Workbook 1. Contains: Data sheet with ReviewFlag column (IF formula in column N), Calculations sheet with all SUM/COUNT/AVERAGE/MIN/MAX/COUNTIF/SUMIF/AVERAGEIF/COUNTIFS/SUMIFS/AVERAGEIFS formulas completed, conditional formatting on TotalRevenue_credits |
| Workbook number | 1 |
| Difficulty score | 3 / 10 |
| File size | 17,315 bytes |
| Validation status | PASS — zero formula errors confirmed |

---

### 02_workbook_data/workbook2_start.xlsx

| Property | Detail |
|----------|--------|
| Purpose | Learner start file for Workbook 2. Contains: Data sheet (with ReviewFlag), completed Calculations sheet, PivotWorkspace sheet with step-by-step instructions for Pivot Table, chart, slicer and timeline work |
| Workbook number | 2 |
| Difficulty score | 5 / 10 |
| File size | 14,399 bytes |
| Validation status | PASS |

---

### 02_workbook_data/workbook2_complete.xlsx

| Property | Detail |
|----------|--------|
| Purpose | Model answer for Workbook 2. Contains: Data sheet, completed Calculations, RouteSummary table (pivot output equivalent), MonthlySummary table, CourierSummary table, InsightNote sheet with key patterns recorded |
| Workbook number | 2 |
| Difficulty score | 5 / 10 |
| File size | 23,322 bytes |
| Validation status | PASS — zero formula errors confirmed |

---

### 02_workbook_data/workbook3_start.xlsx

| Property | Detail |
|----------|--------|
| Purpose | Learner start file for Workbook 3. Contains: Data sheet, Calculations, RouteSummary, MonthlySummary, ScatterData (columns A-B ready for scatter chart), Dashboard sheet (blank placeholder with instructions) |
| Workbook number | 3 |
| Difficulty score | 7 / 10 |
| File size | 19,335 bytes |
| Validation status | PASS |

---

### 02_workbook_data/workbook3_complete.xlsx

| Property | Detail |
|----------|--------|
| Purpose | Model answer for Workbook 3. Contains: all sheets from workbook3_start plus completed Dashboard (with summary cards, route revenue table, courier rating table, interpretation note), ScatterData (with trendline summary), Interpretation sheet |
| Workbook number | 3 |
| Difficulty score | 7 / 10 |
| File size | 29,329 bytes |
| Validation status | PASS — zero formula errors confirmed |

---

### 02_workbook_data/sd2_complete.xlsx

| Property | Detail |
|----------|--------|
| Purpose | Final analysed SD2 output file. Identical to workbook3_complete.xlsx. This is the file the learner saves at the end of Workbook 3. Contains: completed Dashboard, Interpretation sheet, all analysis sheets. |
| Workbook number | N/A — final output |
| Difficulty score | N/A |
| File size | 29,329 bytes |
| Validation status | PASS — zero formula errors confirmed |

---

### 03_workbooks/workbook1_formulas_filters_flags.docx

| Property | Detail |
|----------|--------|
| Purpose | Step-by-step learner guide for Workbook 1. Covers: open and check the dataset, SUM/COUNT/AVERAGE/MIN/MAX, COUNTIF/SUMIF/AVERAGEIF, COUNTIFS/SUMIFS/AVERAGEIFS, IF ReviewFlag, filters, conditional formatting, pattern spotting, completion checklist. |
| Workbook number | 1 |
| Difficulty score | 3 / 10 |
| Estimated time | 60 minutes |
| Start file referenced | 02_workbook_data/workbook1_start.xlsx |
| Complete file referenced | 02_workbook_data/workbook1_complete.xlsx |
| Source file referenced | 01_source_data/sd2_start.xlsx |
| File size | 19,706 bytes |
| Validation status | PASS — valid DOCX (ZIP) structure confirmed |

---

### 03_workbooks/workbook2_pivots_charts_slicers_timelines.docx

| Property | Detail |
|----------|--------|
| Purpose | Step-by-step learner guide for Workbook 2. Covers: insert Pivot Table, add Pivot Chart, insert slicers (DeliveryRoute, ParcelType), insert timeline (OrderDate), test and explore, cross-check totals, second Pivot Table (courier ratings), dashboard thinking, pattern spotting, completion checklist. |
| Workbook number | 2 |
| Difficulty score | 5 / 10 |
| Estimated time | 60 minutes |
| Start file referenced | 02_workbook_data/workbook2_start.xlsx |
| Complete file referenced | 02_workbook_data/workbook2_complete.xlsx |
| File size | 19,070 bytes |
| Validation status | PASS — valid DOCX (ZIP) structure confirmed |

---

### 03_workbooks/workbook3_dashboard_trendline_interpretation.docx

| Property | Detail |
|----------|--------|
| Purpose | Step-by-step learner guide for Workbook 3. Covers: build Dashboard sheet, add summary cards, add Pivot Chart + slicer + timeline, test dashboard, create scatter chart, add trendline, explain y=mx+c and R², write interpretation (shows/suggests/does not prove/recommendation/limitation), save sd2_complete.xlsx, completion checklist. |
| Workbook number | 3 |
| Difficulty score | 7 / 10 |
| Estimated time | 75–90 minutes |
| Start file referenced | 02_workbook_data/workbook3_start.xlsx |
| Complete file referenced | 02_workbook_data/workbook3_complete.xlsx |
| Final output file referenced | 02_workbook_data/sd2_complete.xlsx |
| File size | 22,057 bytes |
| Validation status | PASS — valid DOCX (ZIP) structure confirmed |

---

### 04_manifest/file_manifest.md

| Property | Detail |
|----------|--------|
| Purpose | This file. Lists all generated files with purpose, workbook number, difficulty, file size, and validation status. |
| Validation status | PASS |

---

### 04_manifest/validation_verification_report.md

| Property | Detail |
|----------|--------|
| Purpose | Full validation and verification sweep across all 12 sections. Confirms file existence, formula correctness, step-by-step quality, learner experience, and data continuity. |
| Validation status | PASS — see report for detail |

---

## Summary

| Category | Count | Status |
|----------|-------|--------|
| Scenario and dictionary files | 2 | PASS |
| Excel source dataset | 1 | PASS |
| Excel start files | 3 | PASS |
| Excel complete files | 3 | PASS |
| Excel final output | 1 | PASS |
| DOCX learner workbooks | 3 | PASS |
| Manifest files | 2 | PASS |
| **Total files** | **15** | **ALL PASS** |

---

*Orbit Express SD2 Training Pilot — File Manifest v1.0*
