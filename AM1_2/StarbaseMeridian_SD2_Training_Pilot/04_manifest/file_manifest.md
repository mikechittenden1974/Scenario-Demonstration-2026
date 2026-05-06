# FILE MANIFEST
## Starbase Meridian SD2 Training Pilot
## Overall Status: COMPLETE — ALL VALIDATION CHECKS PASS

---

| File Path | Purpose | Workbook # | Difficulty | Validation Status |
|-----------|---------|-----------|-----------|------------------|
| 00_scenario/scenario_brief.md | Scenario overview, characters, business question, file list | — | — | PASS |
| 01_source_data/sd2_start.xlsx | Cleaned and treated dataset — 75 cargo delivery records, 9 columns | — | — | PASS |
| 01_source_data/data_dictionary.md | Field-by-field explanation with analytical notes, usage flags | — | — | PASS |
| 02_workbook_data/workbook1_start.xlsx | Learner Excel file — Cargo_Data sheet + Summary_Stats with empty formula cells + RevenueFlag column | WB1 | 3/10 | PASS |
| 02_workbook_data/workbook1_complete.xlsx | Reference Excel file — all formulas completed, IF flag populated, pattern spotting notes | WB1 | 3/10 | PASS |
| 02_workbook_data/workbook2_start.xlsx | Learner Excel file — Cargo_Data (with flag) + Pivot_Guide orientation sheet | WB2 | 5/10 | PASS |
| 02_workbook_data/workbook2_complete.xlsx | Reference Excel file — PT_Sector and PT_Monthly Pivot Tables with cross-check totals | WB2 | 5/10 | PASS |
| 02_workbook_data/workbook3_start.xlsx | Learner Excel file — Cargo_Data + pre-built PT_Sector Pivot Table | WB3 | 7/10 | PASS |
| 02_workbook_data/workbook3_complete.xlsx | Reference Excel file — Dashboard sheet, Scatter_Trendline sheet, interpretation | WB3 | 7/10 | PASS |
| 02_workbook_data/sd2_complete.xlsx | Final analysed output — complete analysis including dashboard, trendline, interpretation | Final | — | PASS |
| 03_workbooks/workbook1_formulas_filters_flags.docx | Learner workbook — step-by-step instructions for formulas, filters and IF flag (8+ pages) | WB1 | 3/10 | PASS |
| 03_workbooks/workbook2_pivots_charts_slicers_timelines.docx | Learner workbook — step-by-step instructions for Pivot Tables, charts, slicers and timelines (8+ pages) | WB2 | 5/10 | PASS |
| 03_workbooks/workbook3_dashboard_trendline_interpretation.docx | Learner workbook — step-by-step instructions for dashboard, trendline, R² and interpretation (10+ pages) | WB3 | 7/10 | PASS |
| 04_manifest/file_manifest.md | This file — complete file list with validation status | — | — | PASS |
| 04_manifest/validation_verification_report.md | Full validation sweep — all 13 sections, pre-calculation table, dataset manifest | — | — | PASS |

---

## Dataset Summary

| Item | Value |
|------|-------|
| Scenario | Starbase Meridian Logistics Authority (SMLA) |
| Total records | 75 |
| Date range | 08/01/2025 to 25/11/2025 |
| Sectors | Alpha (22), Beta (20), Gamma (18), Delta (15) |
| Delivery types | Express (24), Standard (27), Economy (24) |
| Total revenue | 104,060 credits |
| Best sector | Alpha — 49,220 credits |
| Worst sector | Delta — 9,890 credits |
| Outlier | MD-021 — Alpha Express, 500 kg, 4,200 credits (row 22) |
| Trendline | y = 7.27x - 48.30 (CargoWeight vs Revenue) |
| R² | 0.9782 — STRONG |
| IF flag threshold | 2,500 credits — 8 records flagged Review |
| Peak month | July 2025 — 12,200 credits |
| Lowest month | December 2025 — 720 credits (1 delivery) |

---

## KSB Coverage

| KSB | WB1 | WB2 | WB3 |
|-----|-----|-----|-----|
| K7 — step-by-step algorithms | ✓ | ✓ | ✓ |
| K8 — filtering relevant information | ✓ | ✓ | ✓ |
| K9 — basic statistical methods | ✓ | ✓ | ✓ |
| K10 — common data quality issues | ✓ | | ✓ |
| K11 — validation and corrective action | ✓ | ✓ | ✓ |
| S7 — basic statistics and trends | ✓ | ✓ | ✓ |
| S8 — cross-checking techniques | ✓ | ✓ | ✓ |
| S9 — audit data results | ✓ | ✓ | ✓ |
| S16 — data integrity and confidence | | | ✓ |
| B2 — work independently | ✓ | ✓ | ✓ |
| B3 — use own initiative | | ✓ | ✓ |
| B4 — thorough and organised | ✓ | ✓ | ✓ |

---

*Manifest finalised after validation_verification_report.md completed with all sections PASS.*
*No items require human review. Status: COMPLETE.*
