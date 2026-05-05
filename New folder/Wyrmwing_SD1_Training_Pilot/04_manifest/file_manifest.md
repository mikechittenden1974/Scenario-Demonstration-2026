# SD1 Training Pilot — File Manifest

Pilot: **Wyrmwing Express SD1 Training Pilot**
Generated: 3 May 2026

This manifest lists every file produced by the SD1 Training Pilot, with its
purpose, the workbook it relates to (where applicable), the difficulty score
(where applicable), and the validation status from
`04_manifest/validation_verification_report.md`.

## 00_scenario

| File | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| 00_scenario/scenario_brief.md | Fictional Wyrmwing Express scenario, recurring characters, business question, tone notes. | All | — | PASS |

## 01_source_data

| File | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| 01_source_data/source_primary.xlsx | Main delivery activity table (40 rows, includes 1 duplicate). | 1 (import), 2 (clean), 3 (append) | — | PASS |
| 01_source_data/source_append.csv | Extra week of activity (12 rows), same shape as primary. | 1 (import), 3 (append) | — | PASS |
| 01_source_data/source_secondary.csv | Dragon roster (18 rows). | 1 (import), 3 (merge) | — | PASS |
| 01_source_data/source_lookup.pdf | Route reference card (7 rows). XX-99 deliberately absent. | 1 (import), 3 (merge) | — | PASS |
| 01_source_data/data_dictionary.md | Plain-English meaning, type, range, blanks-allowed and key flag for every field. | All | — | PASS |

## 02_workbook_data

| File | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| 02_workbook_data/workbook1_start.xlsx | Cover sheet plus empty Inspection_Notes for Workbook 1. | 1 | 2/10 | PASS |
| 02_workbook_data/workbook1_complete.xlsx | Workbook 1 finished state: four imported tables and prefilled Inspection_Notes. | 1 | 2/10 | PASS |
| 02_workbook_data/workbook2_start.xlsx | Workbook 2 starting state: raw Deliveries table ready to be cleaned in Power Query. | 2 | 3/10 | PASS |
| 02_workbook_data/workbook2_complete.xlsx | Workbook 2 finished state: cleaned Deliveries_Clean table (39 rows). | 2 | 3/10 | PASS |
| 02_workbook_data/workbook3_start.xlsx | Workbook 3 starting state: cleaned deliveries plus the three other tables ready to append and merge. | 3 | 4/10 | PASS |
| 02_workbook_data/workbook3_complete.xlsx | Workbook 3 finished state: appended and merged Activity_Merged table (51 rows). | 3 | 4/10 | PASS |
| 02_workbook_data/sd1_complete.xlsx | Final clean SD1 output: Activity_Final (51 rows) plus a small Summary_For_Esme sheet. | 3 (final output) | — | PASS |

## 03_workbooks

| File | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| 03_workbooks/workbook1_import_first_look.docx | Spacious 12-page learner workbook covering import and first look. Seven missions plus closing. | 1 | 2/10 | PASS |
| 03_workbooks/workbook2_power_query_cleaning_toolkit.docx | Spacious 17-page learner workbook covering the Power Query cleaning toolkit in the required logical order. Eight missions plus closing. | 2 | 3/10 | PASS (page count NEEDS HUMAN REVIEW — 17 vs 8–12 target) |
| 03_workbooks/workbook3_append_merge_validate.docx | Spacious 15-page learner workbook covering append, merge, expand, validate and load. Ten missions plus closing. | 3 | 4/10 | PASS (page count NEEDS HUMAN REVIEW — 15 vs 8–12 target) |

## 04_manifest

| File | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| 04_manifest/file_manifest.md | This manifest. | All | — | PASS |
| 04_manifest/validation_verification_report.md | Full validation and verification sweep results. | All | — | PASS |

---

## Summary

- 18 files produced across 5 folders.
- All required files exist and are non-empty.
- All file references inside the workbooks point to the correct files.
- Power Query is the primary tool for cleaning, appending, merging and validating.
- The append, merge and unmatched-record patterns work end-to-end.
- The data continuity chain holds from source → workbook 1 → workbook 2 →
  workbook 3 → sd1_complete.
- Two items flagged NEEDS HUMAN REVIEW: workbook 2 and workbook 3 page counts
  exceed the 8–12 target because of the number of missions the prompt requires
  in each. See `validation_verification_report.md` for context.
