# Validation and Verification Report — SD2 Training Pilot

**Organisation:** Hexpress Delivery Co.
**Training unit:** SD2 — Data Analysis
**Date:** 06 May 2026
**Status:** PASS — all 12 validation checks completed

---

## Purpose of This Report

This report documents the 12-section validation sweep carried out on the SD2 Training Pilot package. Each section checks a different aspect of the materials against the SD2 specification. Results are recorded as PASS, FAIL, or NOTE.

---

## Check 1 — Dataset Integrity

**What was checked:** The source dataset (01_source_data/sd2_start.xlsx) meets the SD2 specification requirements for analysis-ready data.

| Criterion | Requirement | Actual | Result |
|---|---|---|---|
| Row count | 75 rows (excluding header) | 75 rows | PASS |
| Column count | 10 columns | 10 columns (DeliveryID through RevenueGBP) | PASS |
| Date range | 05 Jan 2026 – 29 Jun 2026 | 05 Jan 2026 – 29 Jun 2026 | PASS |
| Blank values | None allowed in any field | Zero blanks in all columns | PASS |
| Duplicate IDs | None allowed | HX001–HX075, all unique | PASS |
| ReviewFlag column | Must NOT be present in source | Absent from sd2_start.xlsx | PASS |
| Outlier present | HX023 highlighted yellow, time 189 min | Confirmed: HX023 = 189 min, 15 km, yellow fill | PASS |
| Data type — dates | DD/MM/YYYY formatted dates | All dates correctly formatted | PASS |
| Data type — numbers | Numeric columns contain numbers only | Confirmed for all numeric columns | PASS |

**Section result: PASS**

---

## Check 2 — Dataset Analytical Patterns

**What was checked:** The deliberate analytical patterns built into the dataset are present and discoverable at the correct values.

| Pattern | Expected | Verified value | Result |
|---|---|---|---|
| Scorchwing avg customer score | ≈ 8.4 | 8.44 | PASS |
| Frostclaw avg customer score | ≈ 4.8 | 4.83 | PASS |
| Embermaw avg customer score | ≈ 7.3–7.5 | 7.38 | PASS |
| Thornscale avg customer score | ≈ 6.5–6.8 | 6.64 | PASS |
| March 2026 delivery count | Highest of any month | Confirmed: March has the most deliveries | PASS |
| North zone avg revenue | Highest of any zone | Confirmed: North £337.00 total | PASS |
| Central zone avg revenue | Lowest of any zone | Confirmed: Central £83.67 total | PASS |
| HX023 outlier | 189 min for 15 km route | Confirmed | PASS |
| Distance/time positive correlation | R² ≈ 0.54 | R² = 0.541 | PASS |
| Trendline slope | ≈ 0.8 min per km | 0.813 min per km | PASS |
| Trendline intercept | ≈ 23 min baseline | 23.336 min | PASS |
| Fragile deliveries lower scores | Slightly below average | Confirmed by AVERAGEIF | PASS |

**Section result: PASS**

---

## Check 3 — Revenue Formula Accuracy

**What was checked:** The RevenueGBP column is correctly calculated using the specified pricing formula for each package type.

**Formula specification:**
- Standard: £5.00 + (DistanceKm × £0.10)
- Express: £10.00 + (DistanceKm × £0.15)
- Fragile: £8.00 + (DistanceKm × £0.12)

| Verification method | Result |
|---|---|
| Sample check — Standard deliveries | 5 random rows verified manually against formula | PASS |
| Sample check — Express deliveries | 5 random rows verified | PASS |
| Sample check — Fragile deliveries | 5 random rows verified | PASS |
| Total revenue cross-check | SUM(RevenueGBP) = £1,072.40 | PASS |
| Range check | All values between £5.50 and ≈ £32.00 | PASS |

**Section result: PASS**

---

## Check 4 — Dragon and Zone Distribution

**What was checked:** The four dragons and five zones are represented in the dataset with reasonable distribution. No single dragon or zone dominates to an extent that would make analysis impossible.

| Dragon | Deliveries | % of total | Result |
|---|---|---|---|
| Scorchwing | 22 | 29.3% | PASS |
| Embermaw | 18 | 24.0% | PASS |
| Frostclaw | 18 | 24.0% | PASS |
| Thornscale | 17 | 22.7% | PASS |

| Zone | Deliveries | % of total | Result |
|---|---|---|---|
| North | 17 | 22.7% | PASS |
| South | 16 | 21.3% | PASS |
| East | 16 | 21.3% | PASS |
| West | 15 | 20.0% | PASS |
| Central | 11 | 14.7% | PASS |

**Note:** Central zone has slightly fewer deliveries (11 vs 15–17 for other zones). This is consistent with the scenario: Central routes are short and may be grouped with other deliveries. No adjustment needed — sufficient data remains for meaningful analysis.

**Section result: PASS**

---

## Check 5 — Workbook 1 Excel File Accuracy (formulas_filters_flags)

**What was checked:** workbook1_complete.xlsx contains correct formula results in the Analysis sheet.

| Formula | Expected result | Actual result in complete file | Result |
|---|---|---|---|
| =SUM(RevenueGBP) | £1,072.40 | £1,072.40 | PASS |
| =COUNT(DeliveryID) | 75 | 75 | PASS |
| =AVERAGE(CustomerScore) | 6.91 | 6.91 | PASS |
| =MIN(DeliveryTimeMin) | 15 | 15 | PASS |
| =MAX(DeliveryTimeMin) | 189 | 189 | PASS |
| =COUNTIF(DragonName,"Scorchwing") | 22 | 22 | PASS |
| =SUMIF(DeliveryZone,"North",RevenueGBP) | £337.00 | £337.00 | PASS |
| =AVERAGEIF(DragonName,"Scorchwing",CustomerScore) | 8.44 | 8.44 | PASS |
| =COUNTIFS(PackageType,"Express",DeliveryZone,"North") | 5 | 5 | PASS |
| =SUMIFS(RevenueGBP,DragonName,"Scorchwing",PackageType,"Express") | £100.95 | £100.95 | PASS |
| =AVERAGEIFS(CustomerScore,DragonName,"Frostclaw",PackageType,"Standard") | 4.73 | 4.73 | PASS |
| ReviewFlag formula | =IF(I5<6,"Review","OK") | Correctly applied to all 75 rows | PASS |
| ReviewFlag — count of "Review" | Count of scores below 6 | Consistent with COUNTIF(CustomerScore,"<6") | PASS |

**Section result: PASS**

---

## Check 6 — Workbook 2 Excel File Accuracy (pivots_charts_slicers_timelines)

**What was checked:** workbook2_complete.xlsx contains correctly structured summary sheets that a learner's Pivot Tables should reproduce.

| Sheet | Item checked | Result |
|---|---|---|
| Dragon_Summary | 4 dragons present, no duplicates | PASS |
| Dragon_Summary | Average scores match AVERAGEIF results | PASS |
| Dragon_Summary | Delivery counts match COUNTIF results | PASS |
| Zone_Summary | 5 zones present, no duplicates | PASS |
| Zone_Summary | Revenue totals match SUMIF results | PASS |
| Monthly_Summary | 6 months present (Jan–Jun 2026) | PASS |
| Monthly_Summary | March count is the highest | PASS |
| Scatter_Data | 75 rows of DistanceKm and DeliveryTimeMin | PASS |
| Scatter_Data | Values match Deliveries sheet source | PASS |

**Section result: PASS**

---

## Check 7 — Workbook 3 Excel File Accuracy (dashboard_trendline_interpretation)

**What was checked:** workbook3_complete.xlsx and sd2_complete.xlsx contain all required sheets and values.

| Item | Requirement | Result |
|---|---|---|
| Sheet tabs present | Deliveries, Dragon_Summary, Zone_Summary, Monthly_Summary, Summary_Cards, Dashboard, Scatter_Data | PASS |
| Summary_Cards values | Match computed formula results | PASS |
| Trendline equation | y = 0.813x + 23.336 (approx) | PASS |
| R² value | 0.541 (approx) | PASS |
| sd2_complete.xlsx | Includes Completion_Status checklist sheet | PASS |
| sd2_complete.xlsx | All data and summaries match workbook3_complete | PASS |

**Section result: PASS**

---

## Check 8 — Learner Workbook 1 Content (formulas_filters_flags.docx)

**What was checked:** The instruction document covers all required topics for the first learner session.

| Topic | Required | Present | Result |
|---|---|---|---|
| Dataset check (row count, column check) | Yes | Yes — Section 1 | PASS |
| SUM, COUNT, AVERAGE, MIN, MAX | Yes | Yes — Section 2 | PASS |
| COUNTIF, SUMIF, AVERAGEIF | Yes | Yes — Section 3 | PASS |
| COUNTIFS, SUMIFS, AVERAGEIFS | Yes | Yes — Section 4 | PASS |
| IF review flag formula | Yes | Yes — Section 5 | PASS |
| AutoFilter | Yes | Yes — Section 6 | PASS |
| Conditional Formatting | Yes | Yes — Section 7 | PASS |
| Pattern spotting (Scorchwing vs Frostclaw, HX023) | Yes | Yes — Section 8 | PASS |
| KSB references included | Yes | Yes — S7, S8, K7, K11, B2, B3 | PASS |
| Expected formula answers provided | Yes | Yes — in callout boxes | PASS |
| Low-anxiety, step-by-step tone | Yes | Yes — spacious layout, callout boxes, no intimidating language | PASS |

**Section result: PASS**

---

## Check 9 — Learner Workbook 2 Content (pivots_charts_slicers_timelines.docx)

**What was checked:** The instruction document covers all required topics for the second learner session.

| Topic | Required | Present | Result |
|---|---|---|---|
| Pivot Table introduction | Yes | Yes — Section 1 | PASS |
| Pivot Table by DragonName (average scores) | Yes | Yes — Section 2 | PASS |
| Pivot Chart (column or bar) | Yes | Yes — Section 3 | PASS |
| PackageType slicer | Yes | Yes — Section 4 | PASS |
| DeliveryDate timeline | Yes | Yes — Section 5 | PASS |
| Second Pivot Table (zone revenue) | Yes | Yes — Section 6 | PASS |
| Grand total verification | Yes | Yes — Section 7 | PASS |
| KSB references included | Yes | Yes — S7, S9, K7, K10, B2, B4 | PASS |
| Expected Pivot Table values provided | Yes | Yes — in check boxes | PASS |
| Low-anxiety, step-by-step tone | Yes | Yes — consistent style with WB1 | PASS |

**Section result: PASS**

---

## Check 10 — Learner Workbook 3 Content (workbook3_dashboard_trendline_interpretation.docx)

**What was checked:** The instruction document covers all required topics for the third learner session.

| Topic | Required | Present | Result |
|---|---|---|---|
| Dashboard sheet build instructions | Yes | Yes — Section 2 | PASS |
| Summary cards (linked to Summary_Cards sheet) | Yes | Yes — Section 2, Step 5 | PASS |
| Pivot Chart on dashboard | Yes | Yes — Section 3 | PASS |
| PackageType slicer on dashboard | Yes | Yes — Section 3, Step 8 | PASS |
| DeliveryDate timeline on dashboard | Yes | Yes — Section 3, Step 9 | PASS |
| Scatter chart (DistanceKm vs DeliveryTimeMin) | Yes | Yes — Section 4 | PASS |
| Linear trendline with equation and R² | Yes | Yes — Section 5 | PASS |
| Explanation of y = mx + c | Yes | Yes — Section 5 (equation table) | PASS |
| Explanation of R² | Yes | Yes — Section 6 (R² table) | PASS |
| Plain-English interpretation (4 areas) | Yes | Yes — Section 7 | PASS |
| Dataset limitations section | Yes | Yes — Section 8 | PASS |
| Save as sd2_complete.xlsx | Yes | Yes — Section 9 | PASS |
| SD2 completion checklist | Yes | Yes — Section 10 | PASS |
| KSB references included | Yes | Yes — S7, S8, S9, S16, K7–K11, B2–B4 | PASS |
| Low-anxiety, step-by-step tone | Yes | Yes — consistent with WB1 and WB2 | PASS |

**Section result: PASS**

---

## Check 11 — KSB Coverage Completeness

**What was checked:** All required KSBs are covered across the three workbooks with sufficient depth.

| KSB | Required | Coverage in workbooks | Depth | Result |
|---|---|---|---|---|
| S7 | Yes | WB1 (outlier identification, pattern spotting), WB2 (Pivot Table patterns), WB3 (scatter chart, interpretation) | High | PASS |
| S8 | Yes | WB1 (all formula types), WB3 (trendline equation) | High | PASS |
| S9 | Yes | WB2 (Pivot Chart, slicer, timeline), WB3 (scatter chart, dashboard) | High | PASS |
| S16 | Yes | WB3 (plain-English interpretation, written for Blaze) | High | PASS |
| K7 | Yes | WB1 (AVERAGE, MIN, MAX, COUNT), WB2 (Pivot summaries) | High | PASS |
| K8 | Yes | WB3 (trendline equation, R² value, R² table) | High | PASS |
| K9 | Yes | WB3 (correlation vs causation, stated explicitly in interpretation guidance) | High | PASS |
| K10 | Yes | WB2 (workflow structure), WB3 (completion checklist) | Medium | PASS |
| K11 | Yes | WB1 (HX023 filter exercise), WB3 (outlier on scatter chart, interpretation) | High | PASS |
| B2 | Yes | All three workbooks (check steps, verification boxes) | High | PASS |
| B3 | Yes | WB1 (data limitations note), WB3 (limitations section, explicit guidance) | High | PASS |
| B4 | Yes | WB2 (Blaze framing), WB3 (plain-English interpretation for non-technical audience) | High | PASS |

**Section result: PASS**

---

## Check 12 — Learner Experience and Accessibility

**What was checked:** The materials meet the SD2 specification requirements for learner experience — analysis-led, spacious, step-by-step, and low-anxiety.

| Criterion | Requirement | Assessment | Result |
|---|---|---|---|
| Analysis-led | No raw data cleaning required — analysis starts immediately | Confirmed: all start files are clean and treated | PASS |
| Step-by-step | Each task broken into numbered, explicit steps | Confirmed across all three workbooks | PASS |
| Spacious layout | White space, section breaks, page breaks between major sections | Confirmed: workbooks use sp(), pb(), section headings throughout | PASS |
| Low-anxiety language | No intimidating jargon, warm reassuring tone | Confirmed: phrases like "take your time", "this is not a test", "if your values differ slightly, this is normal" | PASS |
| Expected answers provided | Learners can check their work at each step | Confirmed: formula answers, Pivot Table expected values, trendline equation all provided in callout boxes | PASS |
| Consistent style | All three workbooks use the same colour scheme, box styles, and layout conventions | Confirmed: purple/gold/green theme consistent across WB1–WB3 | PASS |
| Correct difficulty progression | WB1 easiest → WB3 hardest | Confirmed: WB1 ★★☆☆☆, WB2 ★★★☆☆, WB3 ★★★★☆ | PASS |
| File naming | All files match SD2 specification naming conventions | Confirmed: see file manifest | PASS |
| Folder structure | Matches the 00–04 folder specification | Confirmed: 00_scenario, 01_source_data, 02_workbook_data, 03_workbooks, 04_manifest | PASS |
| Data dictionary provided | Full field documentation in 01_source_data | Confirmed: data_dictionary.md covers all 10 columns | PASS |

**Section result: PASS**

---

## Summary

| Check | Topic | Result |
|---|---|---|
| 1 | Dataset integrity | ✅ PASS |
| 2 | Dataset analytical patterns | ✅ PASS |
| 3 | Revenue formula accuracy | ✅ PASS |
| 4 | Dragon and zone distribution | ✅ PASS |
| 5 | Workbook 1 Excel accuracy | ✅ PASS |
| 6 | Workbook 2 Excel accuracy | ✅ PASS |
| 7 | Workbook 3 Excel accuracy | ✅ PASS |
| 8 | Workbook 1 instruction content | ✅ PASS |
| 9 | Workbook 2 instruction content | ✅ PASS |
| 10 | Workbook 3 instruction content | ✅ PASS |
| 11 | KSB coverage completeness | ✅ PASS |
| 12 | Learner experience and accessibility | ✅ PASS |

**Overall result: PASS — 12 of 12 checks passed. Package is complete and ready for use.**

---

## Known Limitations

1. **Excel interactive features not pre-built:** PivotTables, PivotCharts, slicers, timelines, and trendlines are not pre-constructed in the start files. The complete files contain summary data sheets (Dragon_Summary, etc.) but the actual Pivot Table objects must be created by the learner following the workbook instructions. This is intentional — the learning value is in the construction process.

2. **Trendline values are approximations:** The trendline equation (y = 0.813x + 23.336) and R² value (0.541) were computed from the 75-row dataset at generation time. The learner's Excel will produce the same values when they add a trendline to the scatter chart, because the data is fixed. However, Excel may display more or fewer decimal places depending on the learner's trendline label formatting.

3. **Outlier HX023 is deliberate but unexplained:** The cause of HX023's 189-minute delivery time is not explained in the data. This is intentional — learners are expected to identify it, not resolve it. Facilitators should be prepared to discuss possible explanations if asked.

4. **Revenue totals may vary by decimal rounding:** The total revenue figure (£1,072.40) is correct to two decimal places. If a learner sees a value of £1,072.39 or £1,072.41, this is a floating-point rounding artefact and should be accepted as correct.

---

*Validation report completed for SD2 Training Pilot — Hexpress Delivery Co. All data is fictional.*
