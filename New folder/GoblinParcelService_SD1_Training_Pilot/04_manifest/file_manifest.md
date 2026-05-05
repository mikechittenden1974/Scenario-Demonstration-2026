# Goblin Parcel Service SD1 Training Pilot
## File Manifest

**Pilot name:** GoblinParcelService_SD1_Training_Pilot
**Date produced:** 2026-05-05
**Validation status:** All files passed — see 04_manifest/validation_verification_report.md

---

## Folder Structure

```
GoblinParcelService_SD1_Training_Pilot/
├── 00_scenario/
│   └── scenario_brief.md
├── 01_source_data/
│   ├── source_primary.xlsx
│   ├── source_append.csv
│   ├── source_secondary.csv
│   ├── source_lookup.pdf
│   └── data_dictionary.md
├── 02_workbook_data/
│   ├── workbook1_start.xlsx
│   ├── workbook1_complete.xlsx
│   ├── workbook2_start.xlsx
│   ├── workbook2_complete.xlsx
│   ├── workbook3_start.xlsx
│   ├── workbook3_complete.xlsx
│   └── sd1_complete.xlsx
├── 03_workbooks/
│   ├── workbook1_import_first_look.json
│   ├── workbook2_power_query_cleaning_toolkit.json
│   └── workbook3_append_merge_validate.json
└── 04_manifest/
    ├── file_manifest.md
    └── validation_verification_report.md
```

---

## File Details

### 00_scenario

| File | Purpose | Validation |
|---|---|---|
| scenario_brief.md | Fictional scenario overview, team members, business question and source file index | PASS |

### 01_source_data

| File | Purpose | Rows | Columns | Validation |
|---|---|---|---|---|
| source_primary.xlsx | Main GPS delivery records — January and February 2025. Contains intentional quality issues for cleaning practice. | 41 (includes 1 duplicate GPS-015) | 10 | PASS |
| source_append.csv | GPS delivery records — March 2025. Same structure as source_primary.xlsx. Used for append practice in Workbook 3. | 10 | 10 | PASS |
| source_secondary.csv | Courier dragon details — names, types, home bases, licence classes. Linked to delivery data via courier_id. | 20 | 7 | PASS |
| source_lookup.pdf | Route classification reference table. Linked to delivery data via route_code. Route R99 intentionally absent for unmatched record practice. | 6 | 5 | PASS |
| data_dictionary.md | Plain-English field definitions for all source files, including valid values, data types, blank rules and key relationships. | — | — | PASS |

### 02_workbook_data

| File | Purpose | Workbook | Difficulty | Validation |
|---|---|---|---|---|
| workbook1_start.xlsx | Learner start file for Workbook 1. Contains empty Inspection Notes sheet and instructions. | Workbook 1 | 2/10 | PASS |
| workbook1_complete.xlsx | Reference completion file for Workbook 1. Shows all four source files imported with completed Inspection Notes. | Workbook 1 | — | PASS |
| workbook2_start.xlsx | Learner start file for Workbook 2. Contains raw imported data (Deliveries_Raw, March_Raw, Dragons_Raw) and empty Cleaning Notes sheet. | Workbook 2 | 3/10 | PASS |
| workbook2_complete.xlsx | Reference completion file for Workbook 2. Shows cleaned data and completed Cleaning Notes. | Workbook 2 | — | PASS |
| workbook3_start.xlsx | Learner start file for Workbook 3. Contains cleaned data tables and empty Validation Notes sheet ready for appending and merging. | Workbook 3 | 4/10 | PASS |
| workbook3_complete.xlsx | Reference completion file for Workbook 3. Shows final 50-row merged SD1 dataset with completed Validation Notes and highlighted unmatched row. | Workbook 3 | — | PASS |
| sd1_complete.xlsx | Final clean SD1 output file. Contains the 50-row combined, merged and validated GPS delivery dataset with metadata sheet. This is the final deliverable. | — | — | PASS |

### 03_workbooks

| File | Purpose | Workbook | Difficulty | Estimated Time | Validation |
|---|---|---|---|---|---|
| workbook1_import_first_look.json | Structured workbook JSON for Workbook 1. Covers importing four source files and taking a first look. 7 missions, 9 sections. | Workbook 1 | 2/10 | 30–45 min | PASS |
| workbook2_power_query_cleaning_toolkit.json | Structured workbook JSON for Workbook 2. Covers Power Query cleaning in logical order. 8 missions, 10 sections. | Workbook 2 | 3/10 | 45–60 min | PASS |
| workbook3_append_merge_validate.json | Structured workbook JSON for Workbook 3. Covers append, merge and validation. 9 missions, 11 sections. | Workbook 3 | 4/10 | 60 min | PASS |

### 04_manifest

| File | Purpose | Validation |
|---|---|---|
| file_manifest.md | This file. Lists all pilot files with purpose, workbook number, difficulty and validation status. | PASS |
| validation_verification_report.md | Full 11-section validation sweep confirming file existence, file references, JSON schema, Power Query methods, append, pattern spotting, step-by-step, learner experience, data continuity and duplicate handling. | PASS |

---

## Known Intentional Data Issues (for training purposes)

| Issue | File | Field | Delivery ID | Purpose |
|---|---|---|---|---|
| Duplicate row | source_primary.xlsx | delivery_id | GPS-015 (appears twice) | Workbook 2 — duplicate removal practice |
| Mixed casing | source_primary.xlsx | status | Multiple rows | Workbook 2 — Capitalize Each Word practice |
| Mixed casing | source_primary.xlsx | parcel_type | Multiple rows | Workbook 2 — Capitalize Each Word practice |
| Leading spaces | source_primary.xlsx | courier_id | GPS-025, GPS-034 | Workbook 2 — Trim practice |
| Blank values | source_primary.xlsx | weight_kg | GPS-029, GPS-037 | Workbook 2 — blank handling practice |
| Suspicious value | source_primary.xlsx | weight_kg | GPS-022 (value = 999) | Workbook 1 — pattern spotting |
| Invalid route code | source_primary.xlsx | route_code | GPS-030 (route = R99) | Workbook 3 — unmatched record in left join |

---

*End of File Manifest*
