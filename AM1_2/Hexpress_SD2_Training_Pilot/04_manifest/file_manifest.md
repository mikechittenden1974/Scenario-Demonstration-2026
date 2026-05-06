# File Manifest — SD2 Training Pilot

**Organisation:** Hexpress Delivery Co.
**Training unit:** SD2 — Data Analysis
**Qualification level:** Level 3 Data Technician
**Date generated:** 06 May 2026
**Status:** Complete

---

## Overview

This manifest lists every file in the SD2 Training Pilot package, organised by folder. For each file you will find the filename, a plain-English description of the file's purpose, the file type, and the approximate file size.

The package contains 13 files across 5 folders.

---

## Folder Structure

```
Hexpress_SD2_Training_Pilot/
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
    ├── file_manifest.md          ← this file
    └── validation_verification_report.md
```

---

## 00_scenario

| Filename | Description | Type | Size |
|---|---|---|---|
| scenario_brief.md | The fictional business scenario for Hexpress Delivery Co. Introduces the company, the staff (Ember Ashwick, Cinders Bramblewood, Blaze Ironforge), the business question, and the learning objectives. Read this first before opening any workbooks. | Markdown | 3.6 KB |

---

## 01_source_data

| Filename | Description | Type | Size |
|---|---|---|---|
| sd2_start.xlsx | The cleaned and treated source dataset. Sheet: Deliveries. 75 rows covering January–June 2026. Columns: DeliveryID, DeliveryDate, DragonName, DeliveryZone, PackageType, DistanceKm, DeliveryTimeMin, PackageWeightKg, CustomerScore, RevenueGBP. Row HX023 is highlighted in yellow as a flagged outlier. No ReviewFlag column — this is added by the learner in Workbook 1. | Excel (.xlsx) | 11 KB |
| data_dictionary.md | Full field-by-field reference for sd2_start.xlsx. For each of the 10 columns, documents: plain-English meaning, data type, valid values, whether blanks are allowed, and which analytical uses the field supports (filtering, grouping, charting, slicers, timelines, regression). Also includes a dataset patterns summary and a limitations section. | Markdown | 13 KB |

---

## 02_workbook_data

This folder contains the Excel files used alongside the three learner workbooks. Each workbook has a **start** file (what the learner begins with) and a **complete** file (the finished reference version).

| Filename | Description | Type | Size |
|---|---|---|---|
| workbook1_start.xlsx | Start file for Workbook 1. Contains: Deliveries sheet (no ReviewFlag column) and Analysis sheet with empty formula cells and labelled rows ready for the learner to complete. | Excel (.xlsx) | 12 KB |
| workbook1_complete.xlsx | Complete reference file for Workbook 1. Contains: Deliveries sheet with ReviewFlag column (=IF(I5<6,"Review","OK")), Analysis sheet with all formulas filled in (SUM, COUNT, AVERAGE, MIN, MAX, COUNTIF, SUMIF, AVERAGEIF, COUNTIFS, SUMIFS, AVERAGEIFS). | Excel (.xlsx) | 13 KB |
| workbook2_start.xlsx | Start file for Workbook 2. Contains: Deliveries sheet and an empty Pivot_Work sheet ready for the learner to build Pivot Tables on. | Excel (.xlsx) | 12 KB |
| workbook2_complete.xlsx | Complete reference file for Workbook 2. Contains: Deliveries, Dragon_Summary, Zone_Summary, Monthly_Summary, and Scatter_Data sheets, all populated with summary data. | Excel (.xlsx) | 17 KB |
| workbook3_start.xlsx | Start file for Workbook 3. Contains: Deliveries, Dragon_Summary, Zone_Summary, Monthly_Summary, Summary_Cards, a blank Dashboard sheet, and Scatter_Data. The learner builds the dashboard, scatter chart, and interpretation in this session. | Excel (.xlsx) | 19 KB |
| workbook3_complete.xlsx | Complete reference file for Workbook 3. Contains all sheets from the start file, plus a completed Dashboard sheet, trendline information in Scatter_Data, and a completed Interpretation sheet. | Excel (.xlsx) | 21 KB |
| sd2_complete.xlsx | The final, fully analysed reference file. Identical to workbook3_complete but saved under this name to mark it as the definitive completed output. Also includes a Completion_Status sheet with a checklist of all items. | Excel (.xlsx) | 23 KB |

---

## 03_workbooks

These are the learner-facing instruction documents. Each is a step-by-step guide to completing one session of the SD2 pilot.

| Filename | Description | Type | Size |
|---|---|---|---|
| workbook1_formulas_filters_flags.docx | Workbook 1 instruction guide. Covers: dataset check, SUM/COUNT/AVERAGE/MIN/MAX, COUNTIF/SUMIF/AVERAGEIF, COUNTIFS/SUMIFS/AVERAGEIFS, IF review flag, AutoFilter, Conditional Formatting, and pattern spotting. Difficulty: ★★☆☆☆. Estimated time: 45–60 minutes. KSBs: S7, S8, K7, K11, B2, B3. | Word (.docx) | 20 KB |
| workbook2_pivots_charts_slicers_timelines.docx | Workbook 2 instruction guide. Covers: Pivot Table by DragonName, average scores, Pivot Chart (column/bar), PackageType slicer, DeliveryDate timeline, Zone revenue Pivot Table, grand total verification. Difficulty: ★★★☆☆. Estimated time: 60–75 minutes. KSBs: S7, S9, K7, K10, B2, B4. | Word (.docx) | 18 KB |
| workbook3_dashboard_trendline_interpretation.docx | Workbook 3 instruction guide. Covers: Dashboard sheet layout, summary cards, Pivot Chart on dashboard, slicer and timeline integration, scatter chart (DistanceKm vs DeliveryTimeMin), linear trendline (y = 0.813x + 23.336, R² = 0.541), plain-English interpretation, dataset limitations, save as sd2_complete.xlsx, SD2 completion checklist. Difficulty: ★★★★☆. Estimated time: 75–90 minutes. KSBs: S7, S8, S9, S16, K7, K8, K9, K10, K11, B2, B3, B4. | Word (.docx) | 10 KB |

---

## 04_manifest

| Filename | Description | Type |
|---|---|---|
| file_manifest.md | This file. Lists all files in the package with descriptions and sizes. | Markdown |
| validation_verification_report.md | 12-section validation sweep confirming that the dataset, Excel files, and learner workbooks all meet the SD2 Training Pilot specification. | Markdown |

---

## KSB Coverage Summary

| KSB | Description | Covered in |
|---|---|---|
| S7 | Identifies patterns, outliers, and trends | WB1, WB2, WB3 |
| S8 | Uses formulas and functions to analyse data | WB1, WB3 |
| S9 | Presents data findings clearly using charts and visualisations | WB2, WB3 |
| S16 | Communicates data findings in plain English | WB3 |
| K7 | Understands descriptive statistics | WB1, WB2 |
| K8 | Understands correlation, trendlines, and R² | WB3 |
| K9 | Understands correlation vs causation | WB3 |
| K10 | Understands how to structure a data analysis workflow | WB2, WB3 |
| K11 | Understands data quality and outlier identification | WB1, WB3 |
| B2 | Works accurately and checks results | WB1, WB2, WB3 |
| B3 | Is honest about limitations | WB1, WB3 |
| B4 | Communicates appropriately for the audience | WB2, WB3 |

---

## Notes for Facilitators

- The dataset is entirely fictional. All dragons, staff names, and delivery data are invented for training purposes.
- All 75 rows are clean and treated. Learners are not required to clean the data — the analysis starts immediately.
- Row HX023 is deliberately highlighted in yellow in sd2_start.xlsx. Learners are expected to notice and investigate this outlier.
- The ReviewFlag column is intentionally absent from all start files. Learners add it in Workbook 1.
- The workbooks are designed to be used in order (1 → 2 → 3). Each start file builds on the previous complete file.
- The complete files are reference versions — they are not handed to learners at the start. They are made available for checking at the end of each session.
- sd2_complete.xlsx is the single definitive output file that a learner should have at the end of all three sessions.

---

*File manifest created for SD2 Training Pilot — Hexpress Delivery Co. All data is fictional.*
