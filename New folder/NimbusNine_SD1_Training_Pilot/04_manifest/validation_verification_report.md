# Validation and Verification Report

**Pilot:** Nimbus Nine — SD1 Training Pilot
**Date:** 2026-05-03
**Author:** Automated build
**Scope:** SD1 only. SD2, Practice and Actual phases are out of scope for this pilot.

This report records the pre-publish sweep over every file in the pilot.
Each section follows the seven-part structure required for the Training Pilot.

---

## Section 1 — File existence check

| Required file | Present | Status |
|---|---|---|
| 00_scenario/scenario_brief.md | yes | PASS |
| 01_source_data/source_primary.xlsx | yes | PASS |
| 01_source_data/source_secondary.csv | yes | PASS |
| 01_source_data/source_lookup.pdf | yes | PASS |
| 01_source_data/data_dictionary.md | yes | PASS |
| 02_workbook_data/workbook1_start.xlsx | yes | PASS |
| 02_workbook_data/workbook1_complete.xlsx | yes | PASS |
| 02_workbook_data/workbook2_start.xlsx | yes | PASS |
| 02_workbook_data/workbook2_complete.xlsx | yes | PASS |
| 02_workbook_data/workbook3_start.xlsx | yes | PASS |
| 02_workbook_data/workbook3_complete.xlsx | yes | PASS |
| 02_workbook_data/sd1_complete.xlsx | yes | PASS |
| 03_workbooks/workbook1_import_inspect_patterns.docx | yes | PASS |
| 03_workbooks/workbook2_clean_fix_keys.docx | yes | PASS |
| 03_workbooks/workbook3_merge_append_validate.docx | yes | PASS |
| 04_manifest/file_manifest.md | yes (this run) | PASS |
| 04_manifest/validation_verification_report.md | yes (this file) | PASS |

**Result:** All required files exist. **PASS**

---

## Section 2 — File reference check

Each workbook was opened, all paragraph and table text extracted, and searched for the
required path strings.

### Workbook 1 — workbook1_import_inspect_patterns.docx

| Reference | Found |
|---|---|
| 02_workbook_data/workbook1_start.xlsx | yes |
| 02_workbook_data/workbook1_complete.xlsx | yes |
| 01_source_data/source_primary.xlsx | yes |
| 01_source_data/source_secondary.csv | yes |
| 01_source_data/source_lookup.pdf | yes |

**Status:** PASS

### Workbook 2 — workbook2_clean_fix_keys.docx

| Reference | Found |
|---|---|
| 02_workbook_data/workbook2_start.xlsx | yes |
| 02_workbook_data/workbook2_complete.xlsx | yes |
| 02_workbook_data/workbook1_start.xlsx (must NOT appear) | not found |

**Status:** PASS

### Workbook 3 — workbook3_merge_append_validate.docx

| Reference | Found |
|---|---|
| 02_workbook_data/workbook3_start.xlsx | yes |
| 02_workbook_data/workbook3_complete.xlsx | yes |
| 02_workbook_data/sd1_complete.xlsx | yes |
| 02_workbook_data/workbook2_start.xlsx (must NOT appear) | not found |

**Status:** PASS

`sd1_complete.xlsx` is described only as the final SD1 clean output, in Workbook 3
and on the Cover sheet of the file itself. **PASS**

---

## Section 3 — Power Query method check

Each workbook was checked for the presence of Power Query terminology and the
absence of worksheet-formula-based cleaning as the main method.

| Check | Workbook 1 | Workbook 2 | Workbook 3 |
|---|---|---|---|
| Mentions "Power Query" | yes | yes | yes |
| Uses Data > Get Data | yes | yes | yes |
| Uses Transform Data (not just Load) | yes | yes | yes |
| Uses Close & Load | yes | yes | yes |
| No `=TRIM(` formulas | n/a | confirmed absent | n/a |
| No `=PROPER(` formulas | n/a | confirmed absent | n/a |
| Cleaning steps live in Power Query Editor | yes | yes | yes |

**Status:** PASS

---

## Section 4 — Step-by-step check

Step indicator counts (number of imperative click verbs) per workbook:

| Indicator | Workbook 1 | Workbook 2 | Workbook 3 |
|---|---|---|---|
| Click | 23 | 31 | 18 |
| Choose | 3 | 1 | 7 |
| Double-click | 7 | 1 | 0 |

Each major task was reviewed against the ten-point step verification rule:

1. File names are exact and match the folder structure.
2. Folder paths use the prefixed numeric folder convention (01_source_data etc.).
3. Each step happens in a clearly named application or window (Excel ribbon, Navigator, Power Query Editor).
4. Power Query is used for all importing, cleaning and combining work.
5. The learner is told exactly what to click in plain language.
6. Each task includes a description of what should appear next.
7. Each major task ends with a PAUSE AND CHECK box describing how to verify.
8. Earlier dependencies (queries, sheets) are referenced by their exact names.
9. Recovery wording is used consistently in Workbook 2 and Workbook 3 for reopening Power Query.
10. Tone is calm and learner-safe; warnings are framed as COMMON TRAPs.

**Status:** PASS

---

## Section 5 — Learner experience check

Callout box counts per workbook:

| Callout | Workbook 1 | Workbook 2 | Workbook 3 |
|---|---|---|---|
| MISSION BRIEF | 1 | 1 | 1 |
| WHY THIS MATTERS | 1 | 1 | 1 |
| TRY THIS | 1 | 1 | 1 |
| PAUSE AND CHECK | 4 | 5 | 4 |
| COMMON TRAP | 2 | 3 | 1 |
| NICE WORK | 2 | 1 | 2 |
| YOU ARE DEVELOPING | 1 | 1 | 1 |

Layout review:

- Each workbook uses A4 page size with 2cm margins.
- Each workbook uses generous spacing between paragraphs (line spacing 1.25, space before/after callouts).
- Each Mission ends on its own page using explicit page breaks.
- No giant 24-step tables; steps are split across small Missions.
- No dense audit-style layouts.
- The scenario (Nimbus Nine, Captain Vega, Pip Quasar, Thessaly Comet) is referenced in every workbook.
- COMMON TRAP boxes are framed as "this catches lots of people" rather than as warnings.

**Status:** PASS

---

## Section 6 — Data continuity check

Sheet structure per workbook:

| File | Sheets present |
|---|---|
| workbook1_start.xlsx | Welcome, Inspection_Notes |
| workbook1_complete.xlsx | Welcome, Deliveries_Raw, Couriers_Raw, Routes_Raw, Inspection_Notes |
| workbook2_start.xlsx | Welcome, Deliveries_Raw, Couriers_Raw, Routes_Raw, Cleaning_Notes |
| workbook2_complete.xlsx | Welcome, Deliveries_Clean, Couriers_Clean, Routes_Clean, Cleaning_Notes |
| workbook3_start.xlsx | Welcome, Deliveries_Clean, Couriers_Clean, Routes_Clean, Validation_Notes |
| workbook3_complete.xlsx | Welcome, Deliveries_Clean, Couriers_Clean, Routes_Clean, Deliveries_Final, Validation_Notes |
| sd1_complete.xlsx | Cover, Deliveries_Final |

Row count progression:

- Source primary deliveries: 52 rows (raw, including two seeded duplicates).
- Workbook 1 complete (raw view): 52 rows.
- Workbook 2 complete (cleaned, deduped): 50 rows.
- Workbook 3 complete merged Deliveries_Final: 50 rows.
- sd1_complete.xlsx Deliveries_Final: 50 rows.

Unmatched record demonstration:

- Delivery D047 uses route_code R09, which is not in the routes lookup.
- After the Left Join in Workbook 3, that row remains visible with blank route_name.
- Verified directly in sd1_complete.xlsx: 1 unmatched row, exactly as designed.

Source linking, not duplication:

- The three source files in 01_source_data carry the only authoritative copies of the raw data.
- Workbook xlsx files contain the data at each stage of the learner journey, not parallel copies of the sources.

**Status:** PASS

---

## Section 7 — Pass / Fix status summary

| Check | Status |
|---|---|
| All required files exist | PASS |
| File reference correctness in Workbook 1 | PASS |
| File reference correctness in Workbook 2 | PASS |
| File reference correctness in Workbook 3 | PASS |
| Power Query method used throughout | PASS |
| Step-by-step structure complete | PASS |
| Learner experience: spacious, friendly, callout-rich | PASS |
| Data continuity from raw through to sd1_complete.xlsx | PASS |

No items flagged as FIXED.
No items flagged as NEEDS HUMAN REVIEW.

This pilot is cleared for review.

---

## Notes for human reviewers

- The pilot deliberately seeds friendly issues (duplicates, mixed casing, leading spaces, one unmatched key, a few blanks) so the learner has something to find. This is intentional and is documented in `01_source_data/data_dictionary.md`.
- The "From PDF" import path in Workbook 1 depends on Excel for Microsoft 365 / Excel 2019+. For older versions, the same routes data could be imported From Excel Workbook using a copy of the table. This pilot assumes a current Excel.
- The append step in Workbook 3 is exploratory only — no second deliveries file is provided. The learner is asked to inspect the dialog and notice "Append Queries as New", then cancel.
