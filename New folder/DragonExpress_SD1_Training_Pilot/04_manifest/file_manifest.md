# Dragon Express Delivery Co. — File Manifest

SD1 Training Pilot | Date prepared: 2025-05-06 | Validated: Yes — see validation_verification_report.md

All files have passed the validation and verification sweep before this manifest was published.

---

## Folder: 00_scenario

| File | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| 00_scenario/scenario_brief.md | Fictional scenario background, team characters, business question, data overview, and tone guidance. Reference document for learner and trainer. | All three workbooks | N/A | PASS |

---

## Folder: 01_source_data

| File | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| 01_source_data/source_primary.xlsx | Q3 delivery log. 40 rows plus one duplicate. 9 columns. Contains known data quality issues: duplicate row (DEL-019), leading space in dragon_id, inconsistent casing in package_type, 3 blank status values, 1 unmatched route code (RT-X99). Main activity table. | Workbook 1 (import), Workbook 3 (append/merge) | N/A | PASS |
| 01_source_data/source_append.csv | Q4 delivery log. 12 rows. Same 9-column structure as source_primary.xlsx. Contains minor casing issues in package_type. Used in Workbook 3 for the append task. | Workbook 1 (import), Workbook 3 (append) | N/A | PASS |
| 01_source_data/source_secondary.csv | Dragon profiles. 20 rows. 7 columns. Contains casing issues in breed column, double space in one dragon_name, and 3 inactive dragons. Linked to delivery log via dragon_id. | Workbook 1 (import), Workbook 3 (merge) | N/A | PASS |
| 01_source_data/source_lookup.pdf | Route reference table. 7 rows. 5 columns. Official route codes RT-001 to RT-007. RT-X99 is intentionally absent. Linked to delivery log via route_code. | Workbook 1 (import), Workbook 3 (merge) | N/A | PASS |
| 01_source_data/data_dictionary.md | Field-by-field explanation of every column in every source file. Includes data types, valid values, blank rules, and key field relationships. Reference document. | All three workbooks | N/A | PASS |

---

## Folder: 02_workbook_data

| File | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| 02_workbook_data/workbook1_start.xlsx | Start file for Workbook 1. Contains: Instructions sheet (mission overview and file references), Inspection Notes sheet (blank template for learner to complete). Learner imports source files into this workbook. | Workbook 1 | 2/10 | PASS |
| 02_workbook_data/workbook1_complete.xlsx | Reference answer for Workbook 1. Contains: Instructions sheet, Primary Data sheet, Append Data sheet, Dragon Profiles sheet, Route Lookup sheet, Inspection Notes (completed). Used for comparison only. | Workbook 1 | 2/10 | PASS |
| 02_workbook_data/workbook2_start.xlsx | Start file for Workbook 2. Contains: Instructions sheet, Raw Primary Data sheet (uncleaned Q3 data), Raw Append Data sheet (uncleaned Q4 data), Cleaning Notes sheet (blank template). Learner opens Power Query and cleans the data. | Workbook 2 | 3/10 | PASS |
| 02_workbook_data/workbook2_complete.xlsx | Reference answer for Workbook 2. Contains: Instructions sheet, Cleaned Deliveries sheet, Cleaned Append Data sheet, Dragon Profiles Cleaned sheet, Cleaning Notes (completed). Used for comparison only. | Workbook 2 | 3/10 | PASS |
| 02_workbook_data/workbook3_start.xlsx | Start file for Workbook 3. Contains: Instructions sheet, Cleaned Q3 Deliveries sheet, Cleaned Q4 Deliveries sheet, Dragon Profiles sheet, Route Lookup sheet. Learner appends, merges and validates. | Workbook 3 | 4/10 | PASS |
| 02_workbook_data/workbook3_complete.xlsx | Reference answer for Workbook 3. Contains: Instructions sheet, Combined Deliveries sheet (appended + merged), Validation Summary sheet. Used for comparison only. | Workbook 3 | 4/10 | PASS |
| 02_workbook_data/sd1_complete.xlsx | The final SD1 clean output file. Contains: SD1 Clean Data sheet (52 rows, 20 columns — all delivery records combined, merged with route and dragon details), Summary sheet. This is the deliverable produced at the end of Workbook 3. | Workbook 3 (final output) | N/A | PASS |

---

## Folder: 03_workbooks

| File | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| 03_workbooks/workbook1_import_first_look.json | Structured workbook content for Workbook 1. Valid JSON. Follows the required schema. Contains 9 sections: 1 lesson_intro, 1 glossary, 7 missions. Covers: import of all four source files, header and row count checks, pattern spotting. Ready for conversion to DOCX by a Python template engine. | Workbook 1 | 2/10 | PASS |
| 03_workbooks/workbook2_power_query_cleaning_toolkit.json | Structured workbook content for Workbook 2. Valid JSON. Follows the required schema. Contains 10 sections: 2 lesson_intro, 1 glossary, 7 missions. Covers: reopening Power Query, setting data types, trimming and cleaning text, fixing casing, handling blanks, adding a conditional column, removing duplicates, preparing keys. Ready for conversion to DOCX. | Workbook 2 | 3/10 | PASS / FIXED |
| 03_workbooks/workbook3_append_merge_validate.json | Structured workbook content for Workbook 3. Valid JSON. Follows the required schema. Contains 12 sections: 1 lesson_intro, 1 glossary, 10 missions. Covers: append vs merge concept, appending Q3 and Q4, row count validation, merging with route lookup (left join), merging with dragon profiles (left join), expanding columns, validating null values, conditional formatting, saving sd1_complete.xlsx. Ready for conversion to DOCX. | Workbook 3 | 4/10 | PASS |

**Note on workbook2_power_query_cleaning_toolkit.json FIXED status:** One callout was incorrectly typed as `lesson_intro` (a section kind) rather than a valid callout type. This was corrected to `worked_example` before publishing. All three JSON files were verified programmatically for schema compliance, section kind validity, and callout type validity before this manifest was produced.

---

## Folder: 04_manifest

| File | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| 04_manifest/file_manifest.md | This document. Lists every file in the pilot with its purpose, workbook, difficulty, and validation status. | All | N/A | PASS |
| 04_manifest/validation_verification_report.md | Full 11-section validation and verification sweep. Covers file existence, file references, JSON schema, Power Query methods, append, pattern spotting, step-by-step quality, learner experience, data continuity, duplicate handling, and pass/fix summary. | All | N/A | PASS |

---

## Summary counts

| Category | Count |
|---|---|
| Total files in pilot | 18 |
| Files with PASS status | 17 |
| Files with FIXED status | 1 |
| Files needing replacement | 0 |
| Items needing human review (trainer note only) | 1 |

---

## Data model summary

```
source_primary.xlsx  (40 rows)   ─── dragon_id  ──► source_secondary.csv  (20 rows)
source_append.csv    (12 rows)   ─── route_code ──► source_lookup.pdf      (7 rows)

Append: source_primary + source_append → 52 combined rows
Merge 1: 52 rows + route_lookup → adds route_name, region, terrain_type, typical_time_mins
Merge 2: 52 rows + dragon profiles → adds dragon_name, breed, home_base, max_load_kg, active, joined_year
Final output: sd1_complete.xlsx — 52 rows, 20 columns
```

---

*Manifest prepared after full validation sweep. Pilot approved for learner use.*
