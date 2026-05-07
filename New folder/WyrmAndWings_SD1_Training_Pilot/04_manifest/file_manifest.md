# File Manifest
## Wyrm & Wings Dragon Delivery Co. — SD1 Training Pilot

Validation sweep completed: 2026-05-07
All files: PASS

---

## 00_scenario

| File | Purpose | Workbook | Difficulty | Validation |
|------|---------|----------|-----------|------------|
| 00_scenario/scenario_brief.md | Scenario overview — organisation, characters, business question, source file summary | All workbooks | N/A | PASS |

---

## 01_source_data

| File | Purpose | Workbook | Difficulty | Validation |
|------|---------|----------|-----------|------------|
| 01_source_data/source_primary.xlsx | Northern Depot delivery records. 43 rows including 2 full-row duplicates, 1 blank dragon_id, inconsistent status casing, 1 unregistered dragon (DRG-99), 1 weight outlier (280 kg). Primary activity table. | Workbook 1 (import), Workbook 2 (clean) | N/A | PASS |
| 01_source_data/source_append.csv | Southern Depot delivery records. 12 rows. Same 7-column structure as source_primary.xlsx. Used for append task in Workbook 3. | Workbook 1 (import), Workbook 2 (clean), Workbook 3 (append) | N/A | PASS |
| 01_source_data/source_secondary.csv | Dragon registry. 20 rows. dragon_id, dragon_name, breed, handler, base_depot, registered_year. DRG-99 intentionally absent to create one Left Join unmatched record. | Workbook 1 (import), Workbook 3 (merge) | N/A | PASS |
| 01_source_data/source_lookup.pdf | Route reference table. 6 rows. route_code, route_name, region, difficulty_rating. PDF format — practises Get Data > From PDF. | Workbook 1 (import), Workbook 3 (merge) | N/A | PASS |
| 01_source_data/data_dictionary.md | Data dictionary for all four source files. Field names, types, valid values, blank rules, key field flags, known data quality issues, key relationships diagram. | Reference | N/A | PASS |

---

## 02_workbook_data

| File | Purpose | Workbook | Difficulty | Validation |
|------|---------|----------|-----------|------------|
| 02_workbook_data/workbook1_start.xlsx | Learner start file for Workbook 1. Contains START_HERE instructions sheet and blank Inspection_Notes sheet. No data loaded yet. | Workbook 1 | 2/10 | PASS |
| 02_workbook_data/workbook1_complete.xlsx | Completed reference file for Workbook 1. Contains four loaded data sheets (primary_deliveries, append_deliveries, dragon_registry, route_lookup) and completed Inspection_Notes. | Workbook 1 | 2/10 | PASS |
| 02_workbook_data/workbook2_start.xlsx | Learner start file for Workbook 2. Contains four data sheets loaded from source files (raw, uncleaned). Includes blank Cleaning_Notes sheet. | Workbook 2 | 3/10 | PASS |
| 02_workbook_data/workbook2_complete.xlsx | Completed reference file for Workbook 2. Contains four cleaned data sheets (primary_clean: 41 rows, append_clean: 12 rows, dragon_registry, route_lookup) and completed Cleaning_Notes. | Workbook 2 | 3/10 | PASS |
| 02_workbook_data/workbook3_start.xlsx | Learner start file for Workbook 3. Contains four cleaned data sheets from Workbook 2, ready for append and merge. | Workbook 3 | 4/10 | PASS |
| 02_workbook_data/workbook3_complete.xlsx | Completed reference file for Workbook 3. Contains sd1_deliveries sheet (53 rows, 14 columns, merged from all sources) and Validation_Summary sheet. | Workbook 3 | 4/10 | PASS |
| 02_workbook_data/sd1_complete.xlsx | Final clean SD1 output. 53 rows. 14 columns: delivery_id, route_code, dragon_id, delivery_date, package_weight_kg, status, notes, route_name, region, difficulty_rating, dragon_name, breed, handler, base_depot. Standalone file (no query connection). | Workbook 3 (output) | N/A | PASS |

---

## 03_workbooks

| File | Purpose | Workbook | Difficulty | Validation |
|------|---------|----------|-----------|------------|
| 03_workbooks/workbook1_import_first_look.json | Workbook 1 content in JSON format. 7 missions covering: open start file, import 4 source files via Power Query, check headers and row counts, spot simple patterns, complete Inspection Notes. Converts to 8–12 page DOCX. | Workbook 1 | 2/10 | PASS |
| 03_workbooks/workbook2_power_query_cleaning_toolkit.json | Workbook 2 content in JSON format. 9 missions covering: reopen Power Query safely, rename and set types, remove columns, trim and clean, fix casing and standardise values, investigate blanks, prepare key columns, remove full-row duplicates, load. Converts to 8–12 page DOCX. | Workbook 2 | 3/10 | PASS |
| 03_workbooks/workbook3_append_merge_validate.json | Workbook 3 content in JSON format. 8 missions covering: open workbook3_start.xlsx, append delivery tables, merge with route lookup, merge with dragon registry, validate row counts and unmatched records, load with conditional formatting, save sd1_complete.xlsx, record validation findings. Converts to 8–12 page DOCX. | Workbook 3 | 4/10 | PASS |

---

## 04_manifest

| File | Purpose | Workbook | Difficulty | Validation |
|------|---------|----------|-----------|------------|
| 04_manifest/file_manifest.md | This file. Lists all files, their purpose, associated workbook, difficulty score and validation status. | Reference | N/A | PASS |
| 04_manifest/validation_verification_report.md | Full 11-section validation and verification report. Covers file existence, file references, JSON schema, Power Query methods, append, pattern spotting, step-by-step completeness, learner experience, data continuity, duplicate handling, and pass/fix summary. | Reference | N/A | PASS |

---

## Summary

| Folder | Files | Status |
|--------|-------|--------|
| 00_scenario | 1 | PASS |
| 01_source_data | 5 | PASS |
| 02_workbook_data | 7 | PASS |
| 03_workbooks | 3 | PASS |
| 04_manifest | 2 | PASS |
| **Total** | **18** | **ALL PASS** |

---

## Key Data Facts

| Metric | Value |
|--------|-------|
| source_primary.xlsx rows | 43 (including 2 duplicates) |
| source_append.csv rows | 12 |
| source_secondary.csv rows | 20 |
| source_lookup.pdf rows | 6 |
| primary_clean rows (after duplicate removal) | 41 |
| append_clean rows | 12 |
| Combined after append | 53 |
| sd1_complete.xlsx rows | 53 |
| sd1_complete.xlsx columns | 14 |
| Unmatched dragon records in sd1_complete.xlsx | 2 (DRG-99 unregistered; DEL-043 blank) |
| Status values in clean output | Complete, Delayed, Failed |
| Route codes in clean output | RT-01, RT-02, RT-03, RT-04, RT-05, RT-06 |
