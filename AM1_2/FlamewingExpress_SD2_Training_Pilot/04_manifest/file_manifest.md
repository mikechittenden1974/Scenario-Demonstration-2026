# File Manifest — FlamewingExpress SD2 Training Pilot

**Status:** REVIEW REQUIRED — see validation_verification_report.md for full details.
**Generated:** 2026-05-05
**Scenario:** Flamewing Express — Dragon Parcel Delivery Service
**Pack type:** SD2 Training Pilot (Style and Structure Pilot)

---

## Folder Structure

```
FlamewingExpress_SD2_Training_Pilot/
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

## File Register

| # | File Path | Purpose | Workbook # | Difficulty | Validation |
|---|-----------|---------|------------|------------|------------|
| 1 | 00_scenario/scenario_brief.md | Fictional scenario description, staff bios, business question | — | — | PASS |
| 2 | 01_source_data/sd2_start.xlsx | Cleaned and treated source dataset — 75 delivery records, Jan–Dec 2025 | — | — | PASS |
| 3 | 01_source_data/data_dictionary.md | Full field-by-field reference including analytical notes | — | — | PASS |
| 4 | 02_workbook_data/workbook1_start.xlsx | Start file for Workbook 1 — DeliveryData + blank Summary sheet | 1 | 3/10 | PASS |
| 5 | 02_workbook_data/workbook1_complete.xlsx | Completed example for Workbook 1 — all formulas, ReviewFlag, Summary | 1 | 3/10 | PASS |
| 6 | 02_workbook_data/workbook2_start.xlsx | Start file for Workbook 2 — data with ReviewFlag + blank PivotWork sheet | 2 | 5/10 | PASS |
| 7 | 02_workbook_data/workbook2_complete.xlsx | Completed example for Workbook 2 — PivotSummary with SUMIF/COUNTIF | 2 | 5/10 | PASS |
| 8 | 02_workbook_data/workbook3_start.xlsx | Start file for Workbook 3 — DeliveryData, RiderSummary, ScatterData, Dashboard | 3 | 7/10 | PASS |
| 9 | 02_workbook_data/workbook3_complete.xlsx | Completed example for Workbook 3 — Dashboard, Interpretation, full analysis | 3 | 7/10 | PASS |
| 10 | 02_workbook_data/sd2_complete.xlsx | Final analysed output — SD2_COMPLETE cover sheet + all analysis sheets | Final | — | PASS |
| 11 | 03_workbooks/workbook1_formulas_filters_flags.docx | Learner workbook — Formulas, Filters and Flags | 1 | 3/10 | PASS |
| 12 | 03_workbooks/workbook2_pivots_charts_slicers_timelines.docx | Learner workbook — Pivots, Charts, Slicers and Timelines | 2 | 5/10 | PASS |
| 13 | 03_workbooks/workbook3_dashboard_trendline_interpretation.docx | Learner workbook — Dashboard, Trendline and Interpretation | 3 | 7/10 | PASS |
| 14 | 04_manifest/file_manifest.md | This document — full file register and structure | — | — | PASS |
| 15 | 04_manifest/validation_verification_report.md | Full 12-section validation and verification sweep | — | — | PASS |

---

## Workbook Summary

| Workbook | Title | Difficulty | Time | Start File | Complete File |
|----------|-------|------------|------|------------|---------------|
| 1 | Formulas, Filters and Flags | 3/10 | 60 min | 02_workbook_data/workbook1_start.xlsx | 02_workbook_data/workbook1_complete.xlsx |
| 2 | Pivots, Charts, Slicers and Timelines | 5/10 | 60 min | 02_workbook_data/workbook2_start.xlsx | 02_workbook_data/workbook2_complete.xlsx |
| 3 | Dashboard, Trendline and Interpretation | 7/10 | 75–90 min | 02_workbook_data/workbook3_start.xlsx | 02_workbook_data/workbook3_complete.xlsx |

---

## KSB Coverage Summary

| KSB Code | Description | Workbook 1 | Workbook 2 | Workbook 3 |
|----------|-------------|------------|------------|------------|
| K7 | Step-by-step logic and algorithms | ✓ | — | ✓ |
| K8 | Filtering relevant information | ✓ | ✓ | ✓ |
| K9 | Basic statistical methods | ✓ | ✓ | ✓ |
| K10 | Common data quality issues | ✓ | — | ✓ |
| K11 | Validation methods | ✓ | ✓ | ✓ |
| S7 | Apply statistics to find trends | ✓ | ✓ | ✓ |
| S8 | Cross-checking techniques | ✓ | ✓ | ✓ |
| S9 | Audit data results | — | ✓ | ✓ |
| S16 | Clean, test and assess confidence | — | — | ✓ |
| B2 | Work independently | ✓ | ✓ | ✓ |
| B3 | Use own initiative | — | ✓ | ✓ |
| B4 | Thorough and organised approach | ✓ | ✓ | ✓ |

---

## Dataset Summary

| Property | Value |
|----------|-------|
| Records | 75 |
| Date range | January 2025 – December 2025 |
| Riders | 5 (Brimstone Bill, Cinderella Vex, Hotfoot Hana, Puff McGuffin, Scorch the Magnificent) |
| Routes | 5 (Northern Peaks, Ironforge Pass, Misty Vale, Sunken Swamp, Crystal Coast) |
| Package types | 4 (Standard, Express, Fragile, Oversized) |
| Outlier record | FE-042 (22 km, 47 hours — anomaly) |
| Top rider | Hotfoot Hana (highest total revenue) |
| Lowest rider | Puff McGuffin (lowest total revenue) |
| Seasonal peak | June – August |
| R² expectation | Approx 0.84 (distance vs revenue — strong positive relationship) |

---

## Notes for Reviewers

1. The three learner workbooks (.docx) contain step-by-step instructions referencing Excel features (slicers, timelines, trendlines). These must be reviewed in Microsoft Excel to confirm all steps produce the expected outputs.
2. The completed Excel files (.xlsx) contain SUMIF and COUNTIF formulas referencing the DeliveryData sheet. These should be opened in Excel and recalculated to verify all formula results.
3. Pivot Tables, Pivot Charts, slicers and timelines cannot be created programmatically by this generation system — the workbook files contain the data and supporting tables; the interactive elements must be created by the learner following the workbook instructions.
4. The scatter chart trendline values (slope, intercept, R²) should be verified in Excel after inserting the trendline, as they depend on the exact data range.

---

*This manifest was generated as part of the FlamewingExpress SD2 Training Pilot, 2026-05-05.*
