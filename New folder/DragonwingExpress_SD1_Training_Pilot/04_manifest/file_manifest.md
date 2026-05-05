# Dragonwing Express — SD1 Training Pilot File Manifest

This manifest lists every file produced for the SD1 Training Pilot. The pilot
proves the learner experience for the new style — fun, spacious, Power
Query-led, low anxiety.

## Folder map

```
DragonwingExpress_SD1_Training_Pilot/
├── 00_scenario/
│   └── scenario_brief.md
├── 01_source_data/
│   ├── source_primary.xlsx
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
│   ├── workbook1_import_inspect_patterns.docx
│   ├── workbook2_clean_fix_keys.docx
│   └── workbook3_merge_append_validate.docx
└── 04_manifest/
    └── file_manifest.md
```

## File inventory

| File path | Purpose | Workbook | Difficulty | Status |
|---|---|---|---|---|
| 00_scenario/scenario_brief.md | Sets up the fictional Dragonwing Express scenario, characters and business question. | — | — | Validated |
| 01_source_data/source_primary.xlsx | Main activity table — 52 delivery rows including 2 duplicates and 1 row that will not match the dragon roster. | — | — | Validated |
| 01_source_data/source_secondary.csv | Dragon roster — 20 rows including casing and trim issues for cleaning. | — | — | Validated |
| 01_source_data/source_lookup.pdf | Location lookup card — 8 rows for joining. | — | — | Validated |
| 01_source_data/data_dictionary.md | Plain-English explanation of every field, type, valid values, blank rules and key role. | — | — | Validated |
| 02_workbook_data/workbook1_start.xlsx | Empty workbook with Read Me First and an empty Inspection Notes template. | 1 | 2/10 | Validated |
| 02_workbook_data/workbook1_complete.xlsx | Same workbook with three preview sheets and a model-answer Inspection Notes. | 1 | 2/10 | Validated |
| 02_workbook_data/workbook2_start.xlsx | The Workbook 1 result, re-titled for Workbook 2, plus an empty Cleaning Notes template. | 2 | 3/10 | Validated |
| 02_workbook_data/workbook2_complete.xlsx | Cleaned previews and a filled Cleaning Notes sheet showing every Power Query fix applied. | 2 | 3/10 | Validated |
| 02_workbook_data/workbook3_start.xlsx | The Workbook 2 result, re-titled for Workbook 3. | 3 | 4/10 | Validated |
| 02_workbook_data/workbook3_complete.xlsx | Includes deliveries_final (merged) and a Validation sheet with row counts. | 3 | 4/10 | Validated |
| 02_workbook_data/sd1_complete.xlsx | Standalone final output — the merged deliveries_final table with conditional formatting on blank dragon_name. | — | — | Validated |
| 03_workbooks/workbook1_import_inspect_patterns.docx | 11-page printable workbook for Workbook 1. Power Query-led import. | 1 | 2/10 | Validated |
| 03_workbooks/workbook2_clean_fix_keys.docx | 10-page printable workbook for Workbook 2. Power Query-led cleaning, no worksheet formulas. | 2 | 3/10 | Validated |
| 03_workbooks/workbook3_merge_append_validate.docx | 10-page printable workbook for Workbook 3. Merge / append / validate, with Left Join focus. | 3 | 4/10 | Validated |
| 04_manifest/file_manifest.md | This file. | — | — | Validated |

## Final validation checklist

| Check | Result |
|---|---|
| Only three workbooks were created | Pass — workbook1, workbook2, workbook3 |
| Folder structure matches the spec exactly | Pass — five top-level folders, no extras |
| Source data is linked, not duplicated | Pass — primary, secondary and lookup share the location_code and dragon_id keys |
| Power Query is the primary tool throughout | Pass — every workbook teaches Get Data > Transform Data first |
| Workbook 1 uses Data > Get Data > Transform Data | Pass — three import missions, all via Transform Data |
| Workbook 2 uses Power Query cleaning, not worksheet formulas | Pass — Trim, Clean, Capitalize Each Word, UPPERCASE, Remove Duplicates, Replace Values |
| Workbook 3 gives a clear route back into Power Query | Pass — Mission 2 explains all three reopen paths |
| Each workbook is spacious and mission-led | Pass — small missions with Pause / Trap / Nice Work boxes |
| Each workbook is fun and scenario-led | Pass — Mira, Jasper and Captain Borin appear with friendly tips |
| Each workbook is literally step-by-step | Pass — every action specifies what to click, what should appear, and what to do if not |
| Difficulty scores included | Pass — 2/10, 3/10, 4/10 |
| KSBs visible but not intimidating | Pass — KSBs shown in lilac "You are developing" boxes |
| Start and complete files exist for each workbook | Pass — six xlsx files, plus sd1_complete.xlsx |
| sd1_complete.xlsx exists | Pass |
| All data files exist | Pass — primary xlsx, secondary csv, lookup pdf, data dictionary |
| No SD2, Practice or Actual content created | Pass |
| No assessment-style language used | Pass — warnings renamed Common Trap, friendly tone throughout |

## Notes for reviewers

- The unmatched row (DRG-21) is intentional. It demonstrates that a Left Join preserves unmatched data, and gives the learner a real reason to follow up rather than delete the row.
- Cleaning step counts in Workbook 2 are flexible. Learners may discover and fix issues in a different order; the Cleaning Notes sheet is designed to absorb that variation.
- Page counts after rendering with a Word-compatible engine: Workbook 1 = 11 pages, Workbook 2 = 10 pages, Workbook 3 = 10 pages. All within the 8–12 target.
