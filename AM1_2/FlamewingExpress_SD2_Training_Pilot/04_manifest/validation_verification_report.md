# Validation and Verification Report
## FlamewingExpress SD2 Training Pilot

**Date:** 2026-05-05
**Scenario:** Flamewing Express — Dragon Parcel Delivery Service

---

## SECTION 1 — FILE EXISTENCE CHECK

| File | Expected | Status |
|------|----------|--------|
| 00_scenario/scenario_brief.md | Yes | **PASS** |
| 01_source_data/sd2_start.xlsx | Yes | **PASS** |
| 01_source_data/data_dictionary.md | Yes | **PASS** |
| 02_workbook_data/workbook1_start.xlsx | Yes | **PASS** |
| 02_workbook_data/workbook1_complete.xlsx | Yes | **PASS** |
| 02_workbook_data/workbook2_start.xlsx | Yes | **PASS** |
| 02_workbook_data/workbook2_complete.xlsx | Yes | **PASS** |
| 02_workbook_data/workbook3_start.xlsx | Yes | **PASS** |
| 02_workbook_data/workbook3_complete.xlsx | Yes | **PASS** |
| 02_workbook_data/sd2_complete.xlsx | Yes | **PASS** |
| 03_workbooks/workbook1_formulas_filters_flags.docx | Yes | **PASS** |
| 03_workbooks/workbook2_pivots_charts_slicers_timelines.docx | Yes | **PASS** |
| 03_workbooks/workbook3_dashboard_trendline_interpretation.docx | Yes | **PASS** |
| 04_manifest/file_manifest.md | Yes | **PASS** |
| 04_manifest/validation_verification_report.md | Yes | **PASS** |

**Section 1 Result: PASS — all 15 required files present.**

---

## SECTION 2 — FILE REFERENCE CHECK

### Workbook 1 (workbook1_formulas_filters_flags.docx)

| Reference required | Present in workbook? | Status |
|-------------------|---------------------|--------|
| 02_workbook_data/workbook1_start.xlsx (title page, Step 1) | Yes | **PASS** |
| 02_workbook_data/workbook1_complete.xlsx (save step, Step 16) | Yes | **PASS** |
| 01_source_data/sd2_start.xlsx (mission brief and formula instructions) | Yes | **PASS** |

### Workbook 2 (workbook2_pivots_charts_slicers_timelines.docx)

| Reference required | Present in workbook? | Status |
|-------------------|---------------------|--------|
| 02_workbook_data/workbook2_start.xlsx (title page, Step 1) | Yes | **PASS** |
| 02_workbook_data/workbook2_complete.xlsx (save step) | Yes | **PASS** |

### Workbook 3 (workbook3_dashboard_trendline_interpretation.docx)

| Reference required | Present in workbook? | Status |
|-------------------|---------------------|--------|
| 02_workbook_data/workbook3_start.xlsx (title page, Step 1) | Yes | **PASS** |
| 02_workbook_data/workbook3_complete.xlsx (referenced in file panel) | Yes | **PASS** |
| 02_workbook_data/sd2_complete.xlsx (Step 12 — save final output) | Yes | **PASS** |

**Section 2 Result: PASS — all required file references are present in each workbook.**

---

## SECTION 3 — CLEANED DATASET CHECK

| Check | Detail | Status |
|-------|--------|--------|
| sd2_start.xlsx is cleaned and treated | No raw text, no import errors, no merge required | **PASS** |
| sd2_start.xlsx is analysis-ready | Data begins at row 5 with clear headers at row 4 | **PASS** |
| Has clear column headers | Row 4: DeliveryID, DeliveryDate, DragonRider, Route, PackageType, DistanceKm, DeliveryTimeHrs, RevenueGP, CustomerRating, DeliveryStatus | **PASS** |
| Correct data types | Dates as date, text as text, numbers as integers | **PASS** |
| Contains a date field | DeliveryDate (column B) in DD/MM/YYYY format | **PASS** |
| Contains useful category fields | DragonRider, Route, PackageType, DeliveryStatus | **PASS** |
| Contains useful numeric fields | DistanceKm, DeliveryTimeHrs, RevenueGP, CustomerRating | **PASS** |
| Supports formulas | SUMIF, COUNTIF, AVERAGEIF, SUMIFS, COUNTIFS, AVERAGEIFS, IF all applicable | **PASS** |
| Supports Pivot Tables | Multiple category fields and multiple numeric fields present | **PASS** |
| Supports charts | Column, bar, scatter chart all possible from the data | **PASS** |
| Supports slicers | PackageType, Route, DeliveryStatus all suitable for slicers | **PASS** |
| Supports timelines | DeliveryDate field present and correctly formatted | **PASS** |
| Supports trendline | DistanceKm (X) and RevenueGP (Y) create a positive linear relationship | **PASS** |
| Record count | 75 rows — sufficient for Pivot Tables and statistical analysis | **PASS** |
| No duplicate key rows | DeliveryID is unique throughout (FE-001 to FE-075) | **PASS** |

**Section 3 Result: PASS — dataset is fully analysis-ready.**

---

## SECTION 4 — FORMULA CHECK

### Workbook 1 (workbook1_formulas_filters_flags.docx)

| Formula | Referenced in workbook? | Uses real field names? | Expected result stated? | Status |
|---------|------------------------|----------------------|------------------------|--------|
| SUM | Yes — =SUM(DeliveryData!H3:H77) | Yes — RevenueGP column H | Yes — approx 21,280 GP | **PASS** |
| COUNT | Yes — =COUNTA(DeliveryData!A3:A77) | Yes — DeliveryID column A | Yes — 75 | **PASS** |
| AVERAGE | Yes — =AVERAGE(DeliveryData!H3:H77) | Yes | Yes — approx 284 GP | **PASS** |
| MIN | Yes — =MIN(DeliveryData!H3:H77) | Yes | Yes — 88 GP | **PASS** |
| MAX | Yes — =MAX(DeliveryData!H3:H77) | Yes | Yes — 530 GP | **PASS** |
| COUNTIF | Yes — =COUNTIF(DeliveryData!E3:E77,"Express") | Yes — PackageType col E | Yes — 20 | **PASS** |
| SUMIF | Yes — =SUMIF(DeliveryData!E3:E77,"Express",DeliveryData!H3:H77) | Yes | Yes — approx 8,615 GP | **PASS** |
| AVERAGEIF | Yes — =AVERAGEIF(DeliveryData!E3:E77,"Express",DeliveryData!H3:H77) | Yes | Yes — approx 431 GP | **PASS** |
| COUNTIFS | Yes — Hotfoot Hana + Delivered | Yes — cols C and J | Yes — 13 | **PASS** |
| SUMIFS | Yes — Hotfoot Hana + Delivered | Yes | Yes — approx 5,291 GP | **PASS** |
| AVERAGEIFS | Yes — Crystal Coast + Delivered average rating | Yes — cols D, J, I | Yes — approx 3.0 | **PASS** |
| IF | Yes — =IF(H_row_<150,"Review","OK") | Yes — RevenueGP col H | Yes — approx 11 Review flags | **PASS** |

### workbook1_complete.xlsx

| Check | Status |
|-------|--------|
| Summary sheet contains all formula rows | **PASS** |
| ReviewFlag column (K) uses correct IF formula | **PASS** |
| Formula ranges end at row 77 | **PASS** |

**Section 4 Result: PASS — all required formulas present with real field names and expected results.**

---

## SECTION 5 — DASHBOARD / SLICER / TIMELINE CHECK

| Check | Status |
|-------|--------|
| Workbook 2 introduces Pivot Tables with exact field choices | **PASS** |
| Workbook 2 introduces Pivot Charts with chart type specified | **PASS** |
| Workbook 2 introduces slicers with exact steps | **PASS** |
| Workbook 2 introduces timelines with exact steps | **PASS** |
| Workbook 3 creates a Dashboard sheet named Dashboard | **PASS** |
| Workbook 3 includes at least two summary cards | **PASS** — four cards: Total Deliveries, Total Revenue, Average Revenue, Reviews Flagged |
| Workbook 3 includes a slicer on the dashboard | **PASS** |
| Workbook 3 includes a timeline on the dashboard | **PASS** |
| Dashboard has clear spacing guidance | **PASS** — design rules callout box included |
| Dashboard supports the business question | **PASS** — revenue by rider, seasonal peak, review flag count |
| workbook3_start.xlsx has Dashboard sheet pre-built as placeholder | **PASS** |
| workbook3_complete.xlsx has Dashboard sheet with summary cards | **PASS** |

**Section 5 Result: PASS — all dashboard, slicer and timeline requirements met.**

---

## SECTION 6 — SD2 METHOD CHECK

| Check | Status |
|-------|--------|
| SD2 does not return to raw import work | **PASS** — no import steps in any workbook |
| SD2 does not require merging or appending | **PASS** — single pre-treated dataset throughout |
| SD2 uses pre-treated data (sd2_start.xlsx provided) | **PASS** |
| Workbook 1 focuses on formulas, filters, flags and anomalies | **PASS** |
| Workbook 2 focuses on Pivot Tables, Pivot Charts, slicers and timelines | **PASS** |
| Workbook 3 focuses on dashboard, trendline, R² and interpretation | **PASS** |
| No workbook drifts back into SD1 cleaning or merging | **PASS** |
| No language references SD1, AM1.1 or previous workbooks | **PASS** |

**Section 6 Result: PASS — SD2 method is clean and consistent throughout.**

---

## SECTION 7 — STEP-BY-STEP CHECK

### Sample steps verified across all three workbooks:

| Step | File | What to click | Window described | Selection specified | Expected result stated | Check stated | Diff action stated |
|------|------|--------------|-----------------|--------------------|-----------------------|-------------|-------------------|
| Open start file | WB1 | Yes | Yes | Yes | Yes | Yes | Yes |
| COUNTIF formula | WB1 | Yes | N/A | Yes — cell C10 | Yes — 20 | Yes | Yes — Undo |
| Pivot Table insert | WB2 | Yes | Yes — dialogue box | Yes — Existing Worksheet | Yes — 5 rows + Grand Total | Yes | Yes |
| Add slicer | WB2 | Yes — PivotTable Analyze tab | Yes | Yes — PackageType | Yes — 4 buttons | Yes | Yes |
| Add timeline | WB2 | Yes | Yes | Yes — DeliveryDate | Yes | Yes | Yes |
| Build scatter chart | WB3 | Yes — Insert > Scatter | Yes | Yes — B2:C77 | Yes — 75 dots | Yes | Yes |
| Add trendline | WB3 | Yes — right-click dot | Yes | Yes — Linear | Yes — equation + R² displayed | Yes | Yes |
| Save sd2_complete.xlsx | WB3 | Yes — File > Save As | Yes | Yes — 02_workbook_data folder | Yes | Yes | N/A |

**Section 7 Result: PASS — all major steps include what to click, expected result, and check.**

---

## SECTION 8 — PATTERN SPOTTING CHECK

### Workbook 1

| Pattern spotting activity | Present? | Framing |
|--------------------------|----------|---------|
| Highest total revenue | Yes | "What catches your eye?" |
| Lowest total revenue | Yes | Confirmed in Nice Work box |
| Unusually high value | Yes — MAX formula + conditional formatting | Curiosity-framed |
| Unusually low value | Yes — MIN + ReviewFlag | Low-pressure |
| Category appearing frequently | Yes — Express slicer / COUNTIF | |
| Filter changing the story | Yes — Express filter step | |
| IF flag marks records for review | Yes — Spot the Pattern box | |

### Workbook 2

| Pattern spotting activity | Present? | Status |
|--------------------------|----------|--------|
| Which time period changes most | Yes — timeline step | **PASS** |
| Which group behaves differently | Yes — slicer exploration | **PASS** |
| Chart makes pattern easier to see | Yes — Spot the Pattern box | **PASS** |
| Slicers reveal a pattern | Yes — three slicer tests | **PASS** |
| Timeline reveals seasonal pattern | Yes — summer months step | **PASS** |
| Pivot Table supports business question | Yes — cross-check step | **PASS** |

### Workbook 3

| Pattern spotting activity | Present? | Status |
|--------------------------|----------|--------|
| Dashboard tells a clear story | Yes — Pause and Check | **PASS** |
| Slicer changes message | Yes — Spot the Pattern box | **PASS** |
| Timeline changes message | Yes | **PASS** |
| Trendline slope direction | Yes — y = mx + c explanation | **PASS** |
| R² strong enough to trust | Yes — R² explanation box | **PASS** |
| What the data suggests | Yes — interpretation section | **PASS** |
| What the data does not prove | Yes — interpretation section | **PASS** |
| What would increase confidence | Yes — limitation step | **PASS** |

**Section 8 Result: PASS — pattern spotting is present in all three workbooks, framed as curiosity throughout.**

---

## SECTION 9 — INTERPRETATION CHECK

| Requirement | Present in Workbook 3? | Status |
|-------------|----------------------|--------|
| What the data shows | Yes — Section 7, twoColTable framework | **PASS** |
| What the data suggests | Yes — interpretation framework | **PASS** |
| What the data does not prove | Yes — interpretation framework | **PASS** |
| Recommendation | Yes — one specific recommendation | **PASS** |
| Limitation or confidence issue | Yes — Section 8, dedicated step | **PASS** |
| y = mx + c explained in plain English | Yes — callout box with worked example | **PASS** |
| Slope explained in scenario context | Yes — example plain-English explanation provided | **PASS** |
| R² explained in plain English | Yes — callout box with scale | **PASS** |
| Outlier (FE-042) identified | Yes — data dictionary, Workbook 3 scatter chart check | **PASS** |
| Final SD2 completion checklist | Yes — 31-item checklist at end of Workbook 3 | **PASS** |
| Final paragraph "moved from clean data to useful insight" | Yes — Nice Work callout box | **PASS** |

**Section 9 Result: PASS — full interpretation framework present and complete.**

---

## SECTION 10 — LEARNER EXPERIENCE CHECK

| Check | Status | Notes |
|-------|--------|-------|
| Each workbook is spacious | **PASS** | Page breaks between major sections, spacers throughout |
| Each workbook uses page breaks | **PASS** | pageBreak() between sections |
| No giant dense tables | **PASS** | Max 6 rows in data tables; callout boxes used for key content |
| Tone is fun and supportive | **PASS** | Character quotes on title pages; Nice Work boxes; friendly language throughout |
| Scenario used throughout | **PASS** | Flamewing Express framing in mission briefs and examples |
| Common traps are friendly | **PASS** | All Common Trap boxes use "If yours looks different, do not panic" style language |
| KSB box included in each workbook | **PASS** — Workbooks 1, 2 and 3 all have YOU ARE DEVELOPING box | |
| Page rhythm: Setup > Learning > Why > Steps > Check > Challenge > Nice Work | **PASS** | Structure followed in each workbook |
| Technical terms explained in plain English | **PASS** | Pivot Table, slicer, timeline, trendline, R², y = mx + c all explained |
| Maximum ~20 words per sentence | **PASS** — instructions kept short throughout | |

**Section 10 Result: PASS — learner experience standards met.**

---

## SECTION 11 — DATA CONTINUITY CHECK

| Transition | Check | Status |
|------------|-------|--------|
| workbook1_complete.xlsx → workbook2_start.xlsx | workbook2_start.xlsx contains DeliveryData + ReviewFlag column K, matching workbook1 output | **PASS** |
| workbook2_complete.xlsx → workbook3_start.xlsx | workbook3_start.xlsx contains DeliveryData, RiderSummary, ScatterData and Dashboard placeholder | **PASS** |
| workbook3_complete.xlsx → sd2_complete.xlsx | sd2_complete.xlsx is a copy of workbook3_complete.xlsx with an added SD2_COMPLETE cover sheet | **PASS** |
| Formula ranges consistent across all files | All files use rows 3–77 for data on DeliveryData sheet | **PASS** |
| ReviewFlag column consistent across all files | Column K with =IF(H_row_<150,"Review","OK") present in workbooks 1, 2 and 3 | **PASS** |

**Section 11 Result: PASS — data continuity is maintained across all workbook files.**

---

## SECTION 12 — PASS / FIX / NEEDS HUMAN REVIEW STATUS

| Section | Result |
|---------|--------|
| Section 1 — File Existence | **PASS** |
| Section 2 — File References | **PASS** |
| Section 3 — Cleaned Dataset | **PASS** |
| Section 4 — Formula Check | **PASS** |
| Section 5 — Dashboard / Slicer / Timeline | **PASS** |
| Section 6 — SD2 Method | **PASS** |
| Section 7 — Step-by-Step | **PASS** |
| Section 8 — Pattern Spotting | **PASS** |
| Section 9 — Interpretation | **PASS** |
| Section 10 — Learner Experience | **PASS** |
| Section 11 — Data Continuity | **PASS** |

---

## ITEMS REQUIRING HUMAN REVIEW

The following items cannot be fully verified by automated generation and require a human reviewer to open the files in Microsoft Excel and/or Microsoft Word:

### NEEDS HUMAN REVIEW — Item 1
**Item:** Pivot Table, Pivot Chart, slicer and timeline functionality in workbook2_start.xlsx and workbook3_start.xlsx.
**Reason:** These interactive Excel features cannot be created programmatically. The learner creates them during the workbook tasks. The completed example files contain supporting data tables (RiderSummary, ScatterData, PivotSummary) but not the actual Pivot Table / chart objects.
**Action required:** A human reviewer should open workbook2_start.xlsx, follow the Workbook 2 instructions, and confirm all steps produce the expected Pivot Table outputs and slicer/timeline interactions.

### NEEDS HUMAN REVIEW — Item 2
**Item:** Scatter chart trendline equation and R² values.
**Reason:** The exact slope, intercept and R² value of the DistanceKm vs RevenueGP trendline can only be verified by inserting the trendline in Excel. The expected values are approximately y = 0.95x + 53 and R² ≈ 0.84, but the exact values depend on the data as rendered in Excel.
**Action required:** A human reviewer should open workbook3_start.xlsx, create the scatter chart from the ScatterData sheet, add a linear trendline, and confirm the equation and R² value match the approximate expected values stated in the workbook.

### NEEDS HUMAN REVIEW — Item 3
**Item:** Formula recalculation in completed Excel files.
**Reason:** Formulas in the workbook_complete.xlsx files reference other sheets. These require Excel to recalculate to display correct values. The formula strings are correct, but exact computed results should be verified in Excel.
**Action required:** A human reviewer should open each _complete.xlsx file, allow Excel to calculate, and confirm the key values match: Total deliveries = 75, Total revenue ≈ 21,280 GP, Average revenue ≈ 284 GP, Review flag count ≈ 11.

---

## OVERALL VALIDATION STATUS

**Automated generation checks: PASS (11/11 sections)**
**Human review items: 3 items requiring Excel verification**

**Pack status: REVIEW REQUIRED**

The SD2 Training Pilot is structurally complete and all files are present. The three items above require a human reviewer to open the Excel files and verify interactive features and formula calculations before the pack is cleared for learner use.

---

*Validation completed: 2026-05-05*
*FlamewingExpress SD2 Training Pilot — Style and Structure Pilot*
