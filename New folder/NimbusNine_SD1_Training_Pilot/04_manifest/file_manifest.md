# File Manifest

**Pilot:** Nimbus Nine — SD1 Training Pilot
**Date:** 2026-05-03
**Validation status:** All items PASS (see `04_manifest/validation_verification_report.md`)

This manifest is published only after the validation and verification sweep.
Every file below was confirmed present, correctly named, and correctly referenced.

## 00_scenario

| Path | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| 00_scenario/scenario_brief.md | Friendly fictional scenario brief, characters, business question | n/a | n/a | PASS |

## 01_source_data

| Path | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| 01_source_data/source_primary.xlsx | Main deliveries activity table (52 rows raw, includes seeded duplicates and one unmatched route_code) | 1 | 2/10 | PASS |
| 01_source_data/source_secondary.csv | Couriers roster (20 rows) | 1 | 2/10 | PASS |
| 01_source_data/source_lookup.pdf | Routes reference table (8 rows) | 1 | 2/10 | PASS |
| 01_source_data/data_dictionary.md | Plain-English data dictionary for all three sources | reference | n/a | PASS |

## 02_workbook_data

| Path | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| 02_workbook_data/workbook1_start.xlsx | Welcome page and empty Inspection_Notes template | 1 | 2/10 | PASS |
| 02_workbook_data/workbook1_complete.xlsx | Worked Workbook 1: three queries imported, raw tables shown, Inspection_Notes filled | 1 | 2/10 | PASS |
| 02_workbook_data/workbook2_start.xlsx | Carries the imported raw queries from Workbook 1, plus blank Cleaning_Notes | 2 | 3/10 | PASS |
| 02_workbook_data/workbook2_complete.xlsx | Worked Workbook 2: trimmed, deduplicated, casing fixed, Cleaning_Notes filled | 2 | 3/10 | PASS |
| 02_workbook_data/workbook3_start.xlsx | Carries the cleaned queries from Workbook 2, plus blank Validation_Notes | 3 | 4/10 | PASS |
| 02_workbook_data/workbook3_complete.xlsx | Worked Workbook 3: cleaned tables plus merged Deliveries_Final, Validation_Notes filled | 3 | 4/10 | PASS |
| 02_workbook_data/sd1_complete.xlsx | Final SD1 clean output. Cover sheet plus Deliveries_Final (50 rows, 1 expected unmatched route) | final | n/a | PASS |

## 03_workbooks

| Path | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| 03_workbooks/workbook1_import_inspect_patterns.docx | Step-by-step learner workbook: Power Query import of three sources, inspection notes | 1 | 2/10 | PASS |
| 03_workbooks/workbook2_clean_fix_keys.docx | Step-by-step learner workbook: Power Query trim, casing, blanks, duplicates, key prep | 2 | 3/10 | PASS |
| 03_workbooks/workbook3_merge_append_validate.docx | Step-by-step learner workbook: Power Query merge, expand, append, validate, save sd1_complete.xlsx | 3 | 4/10 | PASS |

## 04_manifest

| Path | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| 04_manifest/file_manifest.md | This manifest | n/a | n/a | PASS |
| 04_manifest/validation_verification_report.md | Pre-publish validation and verification sweep, seven sections | n/a | n/a | PASS |

## Summary

- 17 files across 5 folders.
- All files present, correctly named, and correctly cross-referenced.
- Power Query is the primary tool throughout.
- Data flows cleanly from sources, through three workbook stages, to the final sd1_complete.xlsx.
- One deliberate unmatched record (route R09) demonstrates Left Join behaviour, with row count preserved at 50 in the final output.
