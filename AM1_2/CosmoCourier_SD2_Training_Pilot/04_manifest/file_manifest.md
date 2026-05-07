# File Manifest
## CosmoCourier_SD2_Training_Pilot

**Generated:** 7 May 2026
**Scenario:** Cosmo Courier Co.
**Phase:** SD2 Training Pilot — Style and Structure Pilot
**Overall status: REVIEW REQUIRED** (see validation_verification_report.md — two low-impact human review items)

---

## Folder Structure

```
CosmoCourier_SD2_Training_Pilot/
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

## File Details

### 00_scenario/

| File | Purpose | Validation |
|------|---------|------------|
| scenario_brief.md | The fictional scenario for Cosmo Courier Co. Introduces Zara Voss, Blix Tanaka and Korvus Neel. States the business question. Explains the learner's role. | PASS |

---

### 01_source_data/

| File | Purpose | Validation |
|------|---------|------------|
| sd2_start.xlsx | The cleaned and treated dataset. 72 delivery records, Jan–Jun 2025. 8 fields: DeliveryID, DeliveryDate, Region, ServiceType, Weight_kg, DeliveryFee, DeliveryTime_mins, CustomerRating. No cleaning required. Ready for analysis. | PASS |
| data_dictionary.md | Full field-by-field documentation of sd2_start.xlsx. Includes data types, valid values, usefulness for filtering, grouping, charting, slicers, timelines and regression. Includes Analytical Features Manifest. | PASS |

---

### 02_workbook_data/

| File | Purpose | Workbook | Difficulty | Validation |
|------|---------|----------|------------|------------|
| workbook1_start.xlsx | Learner starting file for Workbook 1. Contains the Deliveries data sheet (with blank ReviewFlag column I) and a blank labelled Analysis sheet. | WB1 | 3/10 | PASS |
| workbook1_complete.xlsx | Reference complete file for Workbook 1. Deliveries sheet has ReviewFlag IF formulas in column I. Analysis sheet has all COUNTIF, SUMIF, AVERAGEIF, COUNTIFS, SUMIFS, AVERAGEIFS formulas completed with formula references (not hardcoded). | WB1 | 3/10 | PASS |
| workbook2_start.xlsx | Learner starting file for Workbook 2. Contains workbook1_complete data plus a blank PivotWork sheet. Learner builds Pivot Tables interactively. | WB2 | 5/10 | NEEDS HUMAN REVIEW — see validation report item 1 |
| workbook2_complete.xlsx | Reference complete file for Workbook 2. Adds formula-based Region, Service Type and Monthly summary tables showing expected Pivot Table results. Learner confirms their interactively-built Pivot Table matches these values. | WB2 | 5/10 | NEEDS HUMAN REVIEW — see validation report item 1 |
| workbook3_start.xlsx | Learner starting file for Workbook 3. Contains workbook2_complete data plus blank Dashboard and ScatterData sheets. ScatterData has Weight_kg and DeliveryFee pre-populated for the scatter chart. | WB3 | 7/10 | PASS |
| workbook3_complete.xlsx | Reference complete file for Workbook 3. Dashboard sheet has completed summary cards, region table, trendline equation, and interpretation notes. | WB3 | 7/10 | NEEDS HUMAN REVIEW — see validation report item 2 |
| sd2_complete.xlsx | Final analysed output file. Copy of workbook3_complete.xlsx. This is the file the learner saves at the end of Workbook 3 following the save instructions. | WB3 | — | NEEDS HUMAN REVIEW — see validation report item 2 |

---

### 03_workbooks/

| File | Purpose | Workbook | Difficulty | Pages (approx) | Validation |
|------|---------|----------|------------|----------------|------------|
| workbook1_formulas_filters_flags.docx | Full step-by-step learner workbook. Covers: dataset review, SUM/COUNT/AVERAGE/MIN/MAX, COUNTIF/SUMIF/AVERAGEIF (8 formulas), COUNTIFS/SUMIFS/AVERAGEIFS (5 formulas), IF review flag, filters, conditional formatting, pattern spotting. 27+ tasks. | WB1 | 3/10 | 12–14 | PASS |
| workbook2_pivots_charts_slicers_timelines.docx | Full step-by-step learner workbook. Covers: Pivot Table by Region and by ServiceType, Pivot Chart (Clustered Column), ServiceType Slicer, DeliveryDate Timeline, Monthly Pivot Table, cross-checking Grand Total (£2,653) against WB1 SUM result, two-sentence insight note. 13 steps. | WB2 | 5/10 | 10–12 | PASS |
| workbook3_dashboard_trendline_interpretation.docx | Full step-by-step learner workbook. Covers: Dashboard construction (3 summary cards, chart, slicer, timeline), scatter chart (Weight_kg vs DeliveryFee), linear trendline (y=2.80x+13.64), R²=0.34 interpretation, interpretation framework (shows/suggests/does not prove/recommendation/limitation), save as sd2_complete.xlsx. 12 steps. | WB3 | 7/10 | 12–14 | PASS |

---

### 04_manifest/

| File | Purpose | Validation |
|------|---------|------------|
| file_manifest.md | This file. Lists all outputs, their purposes, and validation status. | PASS |
| validation_verification_report.md | Full 13-section validation sweep. Confirms formulas, file references, dataset consistency, dashboard structure, step-by-step completeness, pattern spotting, interpretation and learner experience. | REVIEW REQUIRED (2 low-impact items) |

---

## Key Numbers — Quick Reference

| Metric | Value | Source |
|--------|-------|--------|
| Total delivery records | 72 | sd2_start.xlsx, 72 rows |
| Date range | Jan–Jun 2025 | DeliveryDate column |
| Regions | 4 (18 records each) | Region column |
| Service types | 3 (24 records each) | ServiceType column |
| Total DeliveryFee | £2,653 | =SUM(Deliveries!F2:F73) |
| Average DeliveryFee | £36.85 | =AVERAGE(Deliveries!F2:F73) |
| Highest-revenue region | Solar South (£749) | =SUMIF(C2:C73,"Solar South",F2:F73) |
| Lowest-revenue region | Warp West (£570) | =SUMIF(C2:C73,"Warp West",F2:F73) |
| Highest-revenue service | Priority (£1,441) | =SUMIF(D2:D73,"Priority",F2:F73) |
| Outlier record | D038, row 21: AE Std, 28.5 kg, £35, rating 2 | Verified in dataset |
| Good ratings (≥4) | 42 | =COUNTIF(I2:I73,"Good") |
| Review ratings (<4) | 30 | =COUNTIF(I2:I73,"Review") |
| Trendline equation | y = 2.80x + 13.64 | numpy linear regression on 72 records |
| R-squared | 0.34 (moderate) | numpy on Weight_kg vs DeliveryFee |

---

## KSB Coverage Summary

| KSB | Description | Covered in |
|-----|-------------|------------|
| K7 | Step-by-step logic and possible automation | WB1, WB2, WB3 |
| K8 | Filtering relevant information | WB1 (filters), WB2 (slicers), WB3 (timeline) |
| K9 | Basic statistical methods and data modelling | WB1 (stats), WB3 (trendline) |
| K10 | Common data quality issues | WB1 (outlier spotting) |
| K11 | Validation methods and corrective action | WB2 (cross-check), WB3 (R² interpretation) |
| S7 | Apply basic statistical methods to find patterns | WB1 (formulas), WB2 (pivots), WB3 (trendline) |
| S8 | Cross-checking techniques | WB2 (Grand Total cross-check) |
| S9 | Audit data results | WB2, WB3 (verification steps) |
| S16 | Clean, test and assess confidence | WB3 (R² and limitations) |
| S18 | Prioritise within project context | WB1–WB3 (logical progression) |
| B2 | Work independently and take responsibility | Throughout |
| B3 | Use own initiative | WB2 (pattern spotting), WB3 (interpretation) |
| B4 | Thorough and organised approach | Throughout |

---

**Manifest signed off by:** Automated generation pipeline — 7 May 2026
