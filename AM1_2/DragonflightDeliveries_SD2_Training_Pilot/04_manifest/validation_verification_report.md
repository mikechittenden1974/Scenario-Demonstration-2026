# VALIDATION AND VERIFICATION REPORT
## Dragonflight Deliveries Ltd — SD2 Training Pilot
## Generated: 04 May 2026

---

> This report documents the pre-publication validation and verification sweep.
> All checks are based on actual generated files, not assumed content.

---

## SECTION 1 — FILE EXISTENCE CHECK

| File | Status |
|---|---|
| 00_scenario/scenario_brief.md | PASS — file present, 3,718 bytes |
| 01_source_data/sd2_start.xlsx | PASS — file present, 10,035 bytes |
| 01_source_data/data_dictionary.md | PASS — file present, 9,692 bytes |
| 02_workbook_data/workbook1_start.xlsx | PASS — file present, 12,380 bytes |
| 02_workbook_data/workbook1_complete.xlsx | PASS — file present, 12,595 bytes |
| 02_workbook_data/workbook2_start.xlsx | PASS — file present, 11,767 bytes |
| 02_workbook_data/workbook2_complete.xlsx | PASS — file present, 12,776 bytes |
| 02_workbook_data/workbook3_start.xlsx | PASS — file present, 14,601 bytes |
| 02_workbook_data/workbook3_complete.xlsx | PASS — file present, 16,000 bytes |
| 02_workbook_data/sd2_complete.xlsx | PASS — file present, 16,003 bytes |
| 03_workbooks/workbook1_formulas_filters_flags.docx | PASS — file present, 20,472 bytes |
| 03_workbooks/workbook2_pivots_charts_slicers_timelines.docx | PASS — file present, 17,544 bytes |
| 03_workbooks/workbook3_dashboard_trendline_interpretation.docx | PASS — file present, 21,259 bytes |
| 04_manifest/file_manifest.md | PASS — file present |
| 04_manifest/validation_verification_report.md | PASS — this file |

**Overall: 15/15 files present — PASS**

---

## SECTION 2 — FILE REFERENCE CHECK

### Workbook 1 (workbook1_formulas_filters_flags.docx)

| Required Reference | Status |
|---|---|
| 02_workbook_data/workbook1_start.xlsx | PASS — referenced on cover page and in step instructions |
| 02_workbook_data/workbook1_complete.xlsx | PASS — referenced as comparison file in multiple sections |
| 01_source_data/sd2_start.xlsx | PASS — referenced as original source data |

### Workbook 2 (workbook2_pivots_charts_slicers_timelines.docx)

| Required Reference | Status |
|---|---|
| 02_workbook_data/workbook2_start.xlsx | PASS — referenced on cover page and in step instructions |
| 02_workbook_data/workbook2_complete.xlsx | PASS — referenced as comparison file |

### Workbook 3 (workbook3_dashboard_trendline_interpretation.docx)

| Required Reference | Status |
|---|---|
| 02_workbook_data/workbook3_start.xlsx | PASS — referenced on cover page and in step instructions |
| 02_workbook_data/workbook3_complete.xlsx | PASS — referenced as comparison file |
| 02_workbook_data/sd2_complete.xlsx | PASS — referenced as the final save target in Section G |

**Overall: PASS**

---

## SECTION 3 — CLEANED DATASET CHECK

Dataset: 01_source_data/sd2_start.xlsx, sheet: Deliveries

| Check | Detail | Status |
|---|---|---|
| Dataset is cleaned and treated | No raw import files. Data is ready for analysis. | PASS |
| Dataset is analysis-ready | No merging, appending or cleaning required | PASS |
| Clear headers in row 1 | All 11 headers present and correctly named | PASS |
| Correct data types | Dates as dates, numbers as numbers, text as text | PASS |
| No duplicate key rows | All 75 Delivery_IDs are unique (DD001–DD075) | PASS |
| Date field present | Delivery_Date — covers 02/01/2025 to 28/09/2025 | PASS |
| Categorical fields (2+) | Dragon_Name, Route, Cargo_Category, On_Time | PASS |
| Numeric fields (3+) | Cargo_Weight_kg, Flight_Time_Hours, Revenue_GP, Tip_GP, Customer_Rating | PASS |
| Field suitable for grouping | Route, Dragon_Name, Cargo_Category | PASS |
| Field suitable for filtering | Route, Cargo_Category, Dragon_Name, On_Time | PASS |
| Field suitable for trend analysis | Delivery_Date (month/quarter grouping) | PASS |
| Fields suitable for conditional formulas (2+) | Route, Cargo_Category, On_Time, Dragon_Name | PASS |
| Two fields for scatter chart | Cargo_Weight_kg (X), Flight_Time_Hours (Y) | PASS |
| 60–90 rows | 75 rows | PASS |
| Best-performing category visible | Mountain_Pass: 8,885 GP (highest by clear margin) | PASS |
| Worst-performing category visible | Cavern_Run: 2,671 GP (lowest) | PASS |
| Time-period rise visible | Q3 (Jul–Sep) deliveries carry higher revenue | PASS |
| Outlier present | DD037: 150 kg / 0.5 hours — outlier in scatter chart | PASS |
| Relationship for scatter chart | Pearson r = 0.65; R² = 0.42 incl. outlier, 0.67 excl. outlier | PASS |
| Pattern after filtering | Flameheart dominates Mountain_Pass when filter applied | PASS |
| Pattern in Pivot Table | Luxury_Goods highest avg revenue category | PASS |
| Pattern after slicer | Flameheart slicer reveals Mountain_Pass concentration | PASS |
| Pattern after timeline | Q3 revenue visibly higher than Q1 | PASS |
| Area where data suggests but doesn't prove | Weight-time relationship (r² moderate not high) | PASS |
| Limitation available | Dataset ends Sep 2025; no Q4 data; outlier unexplained | PASS |
| Supports all planned activities | Formulas, Pivots, Charts, Slicers, Timelines, Dashboard, Trendline | PASS |

**Overall: PASS**

---

## SECTION 4 — FORMULA CHECK

Verification against actual content of 02_workbook_data/workbook1_complete.xlsx, sheet: Analysis

| Formula | Present | Cell reference style | Status |
|---|---|---|---|
| SUM | Yes | =SUM(Deliveries!H2:H76) | PASS |
| COUNT / COUNTA | Yes | =COUNTA(Deliveries!A2:A76) | PASS |
| AVERAGE | Yes | =AVERAGE(Deliveries!H2:H76) | PASS |
| MIN | Yes | =MIN(Deliveries!H2:H76) | PASS |
| MAX | Yes | =MAX(Deliveries!H2:H76) | PASS |
| COUNTIF | Yes | =COUNTIF(Deliveries!D2:D76,"Mountain_Pass") | PASS |
| SUMIF | Yes | =SUMIF(Deliveries!E2:E76,"Luxury_Goods",Deliveries!H2:H76) | PASS |
| AVERAGEIF | Yes | =AVERAGEIF(Deliveries!D2:D76,"Mountain_Pass",Deliveries!H2:H76) | PASS |
| COUNTIFS | Yes | =COUNTIFS(Deliveries!D2:D76,"Mountain_Pass",Deliveries!E2:E76,"Luxury_Goods") | PASS |
| SUMIFS | Yes | =SUMIFS(Deliveries!H2:H76,Deliveries!D2:D76,"Mountain_Pass",Deliveries!K2:K76,"Y") | PASS |
| AVERAGEIFS | Yes | =AVERAGEIFS(Deliveries!H2:H76,...) | PASS |
| IF (Review_Flag) | Yes | =IF(J2<3,"Review","OK") in Deliveries column L | PASS |

Additional checks:

| Check | Status |
|---|---|
| Formulas use real field names from actual dataset | PASS |
| Expected results stated for every formula in workbook guide | PASS |
| Formula checks included (compare with complete file) | PASS |
| SUMIF vs SUMIFS argument order difference explained | PASS — highlighted as Common Trap in WB1 |
| Workbook 1 guide references workbook1_start.xlsx and workbook1_complete.xlsx | PASS |

**Total formula cells in workbook1_complete.xlsx Analysis sheet: 38**
**Overall: PASS**

---

## SECTION 5 — DASHBOARD / SLICER / TIMELINE CHECK

| Check | Detail | Status |
|---|---|---|
| Workbook 2 introduces Pivot Tables | Step-by-step from Insert PivotTable onwards | PASS |
| Workbook 2 introduces Pivot Charts | Clustered Column from Pivot Table, step-by-step | PASS |
| Workbook 2 includes slicers | Dragon_Name slicer — step-by-step | PASS |
| Workbook 2 includes timelines | Delivery_Date timeline — step-by-step | PASS |
| Workbook 3 creates Dashboard sheet | Dashboard sheet in workbook3_start.xlsx and complete | PASS |
| Workbook 3 includes at least one slicer | Dragon_Name slicer — covered in Section C of WB3 guide | PASS |
| Workbook 3 includes one timeline | Delivery_Date timeline — covered in Section C of WB3 guide | PASS |
| Dashboard has clear spacing | Placeholder areas clearly defined; spacing guidance given | PASS |
| Dashboard includes two-three summary cards | Three cards: Total Deliveries, Total Revenue, Avg Revenue | PASS |
| Dashboard supports the business question | Cards + chart + slicer + timeline together answer: which routes and categories generate most revenue? | PASS |
| Dashboard title present | "DRAGONFLIGHT DELIVERIES LTD — Performance Dashboard" | PASS |
| Dashboard not crowded | Guidance explicitly states: no more than three charts | PASS |

**IMPORTANT NOTE — Interactive Excel features:**
Pivot Tables, Pivot Charts, slicers and timelines require learner actions in Excel.
These features cannot be pre-built via openpyxl (which does not support them).
The workbook Excel files contain workspace sheets (PivotWorkspace, Dashboard, ScatterData) with clear placeholders and instructions.
The complete files contain formula-based summaries that replicate the Pivot Table results.
**The learner guide workbooks (Word docs) provide full click-by-click instructions.**

Status: **NEEDS HUMAN REVIEW** — a human reviewer should open the start files in Excel and confirm the placeholder layouts are clear and well-positioned before learner rollout.

---

## SECTION 6 — SD2 METHOD CHECK

| Check | Status |
|---|---|
| SD2 does not return to raw import work | PASS — no CSV or raw source files in any workbook |
| SD2 does not require merging or appending | PASS — dataset is pre-treated and single-table |
| SD2 uses pre-treated data | PASS — sd2_start.xlsx is clean and ready |
| Workbook 1 focuses on formulas, filters, flags and anomalies | PASS — SUM/COUNT/AVERAGE/IF/COUNTIF/SUMIF/AVERAGEIF/COUNTIFS/SUMIFS/AVERAGEIFS + filter + conditional formatting |
| Workbook 2 focuses on Pivot Tables, Pivot Charts, slicers and timelines | PASS |
| Workbook 3 focuses on dashboard, trendline, R² and interpretation | PASS |
| No workbook drifts back into SD1 cleaning or merging | PASS — verified across all three guides |
| SD1 folder not created | PASS |
| Practice folder not created | PASS |
| Actual folder not created | PASS |
| Raw source folder not created | PASS |

**Overall: PASS**

---

## SECTION 7 — STEP-BY-STEP CHECK

Verification across all three Word workbook guides:

| Check | WB1 | WB2 | WB3 |
|---|---|---|---|
| What to click is specified | PASS | PASS | PASS |
| What window appears is described | PASS | PASS | PASS |
| What to select is specified | PASS | PASS | PASS |
| What result should appear is described | PASS | PASS | PASS |
| How to check it worked is included | PASS | PASS | PASS |
| What to do if it looks different is included | PASS | PASS | PASS |
| File names are exact (not vague references) | PASS | PASS | PASS |
| Sheet names are specified | PASS | PASS | PASS |
| Formula exact text is provided | PASS | N/A | N/A |
| Pivot Table field choices are specified | N/A | PASS | PASS |
| Chart type is specified | N/A | PASS | PASS |
| Slicer field choice is specified | N/A | PASS | PASS |
| Timeline date field is specified | N/A | PASS | PASS |
| Save steps are included | PASS | PASS | PASS |

**Overall: PASS**

---

## SECTION 8 — PATTERN SPOTTING CHECK

| Workbook | Pattern spotting activities | Framing | Status |
|---|---|---|---|
| WB1 | Highest/lowest total revenue by route; unusual values; Review_Flag clusters; filter changing the story | "What catches your eye?" / "Just notice the pattern." / "A pattern is a clue, not a final answer." | PASS |
| WB2 | Route performance ranking; category comparison; slicer changing story; Q3 timeline peak | "Does the chart make a pattern easier to see?" / "This is about curiosity before certainty." | PASS |
| WB3 | Dashboard story; slicer and timeline effects; trendline slope; R² strength; outlier identification | "Does the dashboard tell a clear story?" / "What does the data not prove?" | PASS |

All pattern spotting is framed as curiosity and observation, not assessment. No fear language detected.

**Overall: PASS**

---

## SECTION 9 — INTERPRETATION CHECK

Verification against Workbook 3 guide (workbook3_dashboard_trendline_interpretation.docx) and workbook3_complete.xlsx, sheet: Interpretation:

| Required element | Present in guide | Present in complete file | Status |
|---|---|---|---|
| What the data shows | Section F, "TRY THIS" box | Interpretation row 1 | PASS |
| What the data suggests | Section F, "TRY THIS" box | Interpretation row 2 | PASS |
| What the data does NOT prove | Section F, "TRY THIS" box — limitations | Interpretation row 3 | PASS |
| Recommendation | Section F4 | Interpretation row 4 | PASS |
| Limitation or confidence issue | Section F3 | Interpretation row 5 | PASS |
| y = mx + c explained in plain English | Section E1 — "WHAT THE EQUATION MEANS" callout | Interpretation row 6 | PASS |
| R² explained in plain English | Section E2 — "WHAT R SQUARED MEANS" callout | Interpretation row 7 | PASS |
| R² value — correct to actual data | R² ≈ 0.42 (with outlier) / R² ≈ 0.67 (without outlier DD037) | PASS — both values stated | PASS |
| Outlier DD037 mentioned | Section D "SPOT THE PATTERN" and Interpretation | PASS | PASS |

**Note on R²:** The embedded outlier DD037 (150 kg, 0.5 hours) is intentional. With the outlier included, learners will see R² ≈ 0.42. Without the outlier, R² ≈ 0.67. Both the guide text and the completed interpretation file correctly state both values and explain the difference. This is a deliberate and valuable teaching moment.

**Overall: PASS**

---

## SECTION 10 — LEARNER EXPERIENCE CHECK

| Check | Status | Notes |
|---|---|---|
| Each workbook is spacious | PASS | Generous spacing between sections; page breaks between major sections |
| Each workbook uses page breaks | PASS | PageBreak elements used in all three Word documents |
| No giant dense tables | PASS | Step tables use maximum 10 steps; no multi-column audit-style layouts |
| No workbook feels like a technical audit manual | PASS | Friendly scenario language and character tips throughout |
| Tone is fun and supportive | PASS | Dragon scenario, character tips, "NICE WORK" boxes |
| Scenario used throughout | PASS — character names and scenario framing appear in each section | PASS |
| Common traps are friendly, not scary | PASS | "This catches a lot of people." / "Do not panic." / "Use Undo." |
| Difficulty scores stated | PASS | WB1: 3/10, WB2: 5/10, WB3: 7/10 |
| Estimated time stated | PASS | WB1: 60 min, WB2: 60 min, WB3: 75–90 min |
| "YOU ARE DEVELOPING" KSB box included | PASS | All three workbooks, plain English beside each code |
| Maximum sentence length approximately 20 words | PASS — verified across all sections | PASS |
| Technical terms explained on first use | PASS — Pivot Table, slicer, timeline, trendline, R², dashboard all explained | PASS |

**Overall: PASS**

---

## SECTION 11 — DATA CONTINUITY CHECK

| Check | Status |
|---|---|
| workbook1_complete.xlsx feeds logically into workbook2_start.xlsx | PASS — WB1 complete establishes formulas and Review_Flag; WB2 start opens the same clean data and begins Pivot Table work |
| workbook2_complete.xlsx feeds logically into workbook3_start.xlsx | PASS — WB2 complete establishes Pivot Table summaries; WB3 start builds on these with dashboard and trendline |
| workbook3_complete.xlsx feeds logically into sd2_complete.xlsx | PASS — sd2_complete.xlsx is a save-as copy of workbook3_complete.xlsx with identical structure and completed interpretation |
| Learner journey follows SD2 sequence | PASS — Check > Summarise > Condition > Flag > Focus > Spot > Pivot > Visualise > Dashboard > Model > Explain |

**Overall: PASS**

---

## SECTION 12 — PASS / FIX STATUS SUMMARY

| Section | Item | Status |
|---|---|---|
| S1 | All 15 files present | PASS |
| S2 | All file references correct in workbooks | PASS |
| S3 | Dataset: 75 rows, clean, all required fields | PASS |
| S3 | Dataset: embedded patterns (outlier, best/worst route, Q3 peak) | PASS |
| S3 | Scatter correlation present (r=0.65, R²=0.42 incl. outlier) | PASS |
| S4 | All 12 formula types present in WB1 | PASS |
| S4 | Formulas use real field names | PASS |
| S5 | Dashboard with 3 summary cards, chart, slicer, timeline | PASS |
| S5 | Interactive Excel features (slicers, timelines, Pivot Charts) | **NEEDS HUMAN REVIEW** |
| S6 | SD2 method: no raw import, no SD1 content | PASS |
| S7 | Step-by-step instructions across all 3 workbooks | PASS |
| S8 | Pattern spotting in all 3 workbooks | PASS |
| S9 | Full interpretation: shows / suggests / not proves / recommendation / limitation | PASS |
| S9 | R² value: correctly stated with and without outlier | PASS |
| S10 | Learner experience: spacing, tone, scenario, callout boxes | PASS |
| S11 | Data continuity: WB1 > WB2 > WB3 > sd2_complete | PASS |

---

## ITEMS REQUIRING HUMAN REVIEW

### NEEDS HUMAN REVIEW — Item 1

**Item:** Interactive Excel features — slicers, timelines, Pivot Charts

**Detail:** The Excel workbook files (workbook1_start.xlsx through workbook3_start.xlsx) are built using openpyxl, which cannot create Pivot Tables, Pivot Charts, slicers or timelines programmatically. These items require the learner to create them by following the workbook guide instructions.

The start files include:
- Placeholder workspace sheets (PivotWorkspace, Dashboard, ScatterData) with clearly labelled placeholder areas
- A Summary sheet (WB3) with pre-built formula calculations that feed the dashboard

The complete files include:
- Formula-based summaries that replicate Pivot Table results (PT_Route_Revenue, PT_Category_Revenue sheets)
- A completed Interpretation sheet

**Action required:** A human reviewer should open each start file in Excel before learner rollout and confirm:
1. The placeholder areas are clearly visible and appropriately positioned
2. The Deliveries sheet data is fully intact and formatted correctly
3. The Summary sheet formulas calculate correctly
4. The ScatterData sheet pulls correctly from the Deliveries sheet

**Risk level:** Low — all the data and formula infrastructure is in place. The interactive features are created by the learner following the step-by-step guide, which is the intended pedagogical approach.

---

## OVERALL STATUS

| Area | Result |
|---|---|
| File existence | PASS (15/15) |
| File references | PASS |
| Dataset quality | PASS |
| Formula coverage | PASS |
| Dashboard / interactive features | NEEDS HUMAN REVIEW (interactive Excel elements) |
| SD2 method integrity | PASS |
| Step-by-step instructions | PASS |
| Pattern spotting | PASS |
| Interpretation | PASS |
| Learner experience | PASS |
| Data continuity | PASS |

**MANIFEST STATUS: REVIEW REQUIRED**

The pack is complete and ready for human review of the interactive Excel elements before learner rollout.
All other checks pass.

---

*Validation and Verification Report — Dragonflight Deliveries Ltd SD2 Training Pilot*
*Scheduled task autonomous run: 04 May 2026*
