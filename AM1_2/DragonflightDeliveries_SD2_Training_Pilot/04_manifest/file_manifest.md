# FILE MANIFEST
## Dragonflight Deliveries Ltd — SD2 Training Pilot
## Generated: 04 May 2026

---

> **Validation status: REVIEW REQUIRED for interactive Excel features (slicers, timelines, Pivot Charts)**
> See 04_manifest/validation_verification_report.md Section 12 for details.

---

## Folder Structure

```
DragonflightDeliveries_SD2_Training_Pilot/
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

## File Inventory

| # | File Path | Purpose | Workbook | Difficulty | Validation Status |
|---|---|---|---|---|---|
| 1 | 00_scenario/scenario_brief.md | Fictional scenario introduction and context | — | — | PASS |
| 2 | 01_source_data/sd2_start.xlsx | Cleaned and treated dataset (75 rows, 11 fields) | — | — | PASS |
| 3 | 01_source_data/data_dictionary.md | Field-by-field data dictionary | — | — | PASS |
| 4 | 02_workbook_data/workbook1_start.xlsx | Learner start file: formulas, filters, flags | WB1 | 3/10 | PASS |
| 5 | 02_workbook_data/workbook1_complete.xlsx | Completed reference file for WB1 | WB1 | 3/10 | PASS |
| 6 | 02_workbook_data/workbook2_start.xlsx | Learner start file: pivots, charts, slicers, timelines | WB2 | 5/10 | PASS |
| 7 | 02_workbook_data/workbook2_complete.xlsx | Completed reference file for WB2 | WB2 | 5/10 | PASS |
| 8 | 02_workbook_data/workbook3_start.xlsx | Learner start file: dashboard, trendline, interpretation | WB3 | 7/10 | PASS |
| 9 | 02_workbook_data/workbook3_complete.xlsx | Completed reference file for WB3 | WB3 | 7/10 | PASS |
| 10 | 02_workbook_data/sd2_complete.xlsx | Final analysed output (learner saves this at end of WB3) | WB3 | — | PASS |
| 11 | 03_workbooks/workbook1_formulas_filters_flags.docx | Step-by-step learner guide for WB1 | WB1 | 3/10 | PASS |
| 12 | 03_workbooks/workbook2_pivots_charts_slicers_timelines.docx | Step-by-step learner guide for WB2 | WB2 | 5/10 | PASS |
| 13 | 03_workbooks/workbook3_dashboard_trendline_interpretation.docx | Step-by-step learner guide for WB3 | WB3 | 7/10 | PASS |
| 14 | 04_manifest/file_manifest.md | This file | — | — | PASS |
| 15 | 04_manifest/validation_verification_report.md | Full validation and verification sweep | — | — | PASS |

**Total files: 15**

---

## Dataset Summary

| Property | Detail |
|---|---|
| File | 01_source_data/sd2_start.xlsx |
| Records | 75 delivery records |
| Date range | 01/01/2025 to 30/09/2025 |
| Sheet name | Deliveries |
| Total Revenue_GP | Approximately 27,500 Gold Pieces |
| Leading route | Mountain_Pass (approx. 32% of total revenue) |
| Weakest route | Cavern_Run (approx. 10% of total revenue) |
| Embedded outlier | DD037: 150 kg cargo, 0.5 hours flight time |
| Date field for timeline | Delivery_Date |
| Slicer-suitable fields | Dragon_Name, Route, Cargo_Category, On_Time |
| Scatter chart fields | Cargo_Weight_kg (X), Flight_Time_Hours (Y) |
| Expected R² | 0.60 to 0.75 |

---

## Learning Progression

| Workbook | Focus | From SD2 Journey |
|---|---|---|
| Workbook 1 | Formulas, filters, flags | Check > Summarise > Condition > Flag > Focus > Spot |
| Workbook 2 | Pivots, charts, slicers, timelines | Pivot > Visualise |
| Workbook 3 | Dashboard, trendline, interpretation | Dashboard > Model > Explain |

---

## KSB Coverage Summary

| KSB | Covered in |
|---|---|
| K7 — Algorithms and step-by-step logic | WB1, WB3 |
| K8 — Filtering relevant information | WB1, WB2, WB3 |
| K9 — Basic statistical methods | WB1, WB2, WB3 |
| K10 — Common data quality issues | WB1, WB3 |
| K11 — Validation methods | WB2, WB3 |
| S7 — Apply statistical methods to find patterns | WB1, WB2, WB3 |
| S8 — Cross-checking techniques | WB1, WB2, WB3 |
| S9 — Audit data results | WB2, WB3 |
| S16 — Assess confidence and integrity | WB3 |
| S18 — Prioritise within project context | WB1 (task ordering) |
| B2 — Work independently | WB1, WB2, WB3 |
| B3 — Use own initiative | WB2, WB3 |
| B4 — Thorough and organised | WB1, WB2, WB3 |

---

*Manifest generated for Dragonflight Deliveries Ltd SD2 Training Pilot*
*Scheduled task run: 04 May 2026*
