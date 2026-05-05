# File Manifest - Stardust Express SD1 Training Pilot

This manifest lists every file in the pilot, its purpose, the workbook it belongs to where applicable, the difficulty score where applicable, and its validation status.

The manifest was produced after the validation and verification sweep documented in 04_manifest/validation_verification_report.md.

| File path | Purpose | Workbook | Difficulty | Validation status |
| --- | --- | --- | --- | --- |
| 00_scenario/scenario_brief.md | Sets the fictional Stardust Express scenario, recurring crew, business question and tone. | n/a | n/a | PASS |
| 01_source_data/source_primary.xlsx | Main delivery records (40 rows) for Quarter 2. Primary input for Workbook 1. | 1 | n/a | PASS |
| 01_source_data/source_append.csv | Late-arriving delivery rows (12 rows) with the same structure as source_primary.xlsx. Used in the append task in Workbook 3. | 1, 3 | n/a | PASS |
| 01_source_data/source_secondary.csv | Courier reference (18 rows) joined into the deliveries via courier_id. | 1, 3 | n/a | PASS |
| 01_source_data/source_lookup.pdf | Printed route reference (7 rows) joined into the deliveries via route_code. | 1, 3 | n/a | PASS |
| 01_source_data/data_dictionary.md | Plain-English data dictionary for every field across the four source files. | n/a | n/a | PASS |
| 02_workbook_data/workbook1_start.xlsx | Cover sheet plus an empty Inspection Notes sheet. The learner opens this to begin Workbook 1. | 1 | 2/10 | PASS |
| 02_workbook_data/workbook1_complete.xlsx | Expected end state of Workbook 1 - four loaded source sheets and a filled Inspection Notes sheet. | 1 | 2/10 | PASS |
| 02_workbook_data/workbook2_start.xlsx | Same loaded data as workbook1_complete.xlsx, framed for cleaning. The learner opens this to begin Workbook 2. | 2 | 3/10 | PASS |
| 02_workbook_data/workbook2_complete.xlsx | Expected end state of Workbook 2 - cleaned versions of the four tables and a filled Cleaning Notes sheet. | 2 | 3/10 | PASS |
| 02_workbook_data/workbook3_start.xlsx | Cleaned tables from Workbook 2, ready for the append, merge and validate work. | 3 | 4/10 | PASS |
| 02_workbook_data/workbook3_complete.xlsx | Expected end state of Workbook 3 - one combined Deliveries_full table with route and courier details merged in, plus a filled Validation Notes sheet. | 3 | 4/10 | PASS |
| 02_workbook_data/sd1_complete.xlsx | Final tidy SD1 output for Glim. Contains the combined Deliveries_full table and a Summary sheet. | 3 | 4/10 | PASS |
| 03_workbooks/workbook1_import_first_look.json | Structured workbook content for Workbook 1, ready for conversion to DOCX by a Python template engine. | 1 | 2/10 | PASS |
| 03_workbooks/workbook2_power_query_cleaning_toolkit.json | Structured workbook content for Workbook 2. | 2 | 3/10 | PASS |
| 03_workbooks/workbook3_append_merge_validate.json | Structured workbook content for Workbook 3. | 3 | 4/10 | PASS |
| 04_manifest/file_manifest.md | This file. | n/a | n/a | PASS |
| 04_manifest/validation_verification_report.md | Full validation and verification sweep across the pilot. | n/a | n/a | PASS |

## Folder summary

- 00_scenario - 1 file
- 01_source_data - 5 files
- 02_workbook_data - 7 files
- 03_workbooks - 3 files
- 04_manifest - 2 files
- Total: 18 files

No SD2, Practice or Actual folders have been created. This manifest is for the SD1 Training Pilot only.
