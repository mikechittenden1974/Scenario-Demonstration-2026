# Validation and Verification Report - Stardust Express SD1 Training Pilot

This report covers the eleven required sweeps before the pilot is published.

Each item is marked PASS, FIXED or NEEDS HUMAN REVIEW.

## Section 1 - File Existence Check

| Required file | Status |
| --- | --- |
| 00_scenario/scenario_brief.md | PASS |
| 01_source_data/source_primary.xlsx | PASS |
| 01_source_data/source_append.csv | PASS |
| 01_source_data/source_secondary.csv | PASS |
| 01_source_data/source_lookup.pdf | PASS |
| 01_source_data/data_dictionary.md | PASS |
| 02_workbook_data/workbook1_start.xlsx | PASS |
| 02_workbook_data/workbook1_complete.xlsx | PASS |
| 02_workbook_data/workbook2_start.xlsx | PASS |
| 02_workbook_data/workbook2_complete.xlsx | PASS |
| 02_workbook_data/workbook3_start.xlsx | PASS |
| 02_workbook_data/workbook3_complete.xlsx | PASS |
| 02_workbook_data/sd1_complete.xlsx | PASS |
| 03_workbooks/workbook1_import_first_look.json | PASS |
| 03_workbooks/workbook2_power_query_cleaning_toolkit.json | PASS |
| 03_workbooks/workbook3_append_merge_validate.json | PASS |
| 04_manifest/file_manifest.md | PASS |
| 04_manifest/validation_verification_report.md | PASS |

All required files are present. No SD2, Practice or Actual folders exist.

## Section 2 - File Reference Check

Each workbook JSON was inspected for the file references it should and should not include.

Workbook 1 references:

| Required reference | Status |
| --- | --- |
| 02_workbook_data/workbook1_start.xlsx | PASS |
| 02_workbook_data/workbook1_complete.xlsx | PASS |
| 01_source_data/source_primary.xlsx | PASS |
| 01_source_data/source_append.csv | PASS |
| 01_source_data/source_secondary.csv | PASS |
| 01_source_data/source_lookup.pdf | PASS |

Note: Workbook 1 also points learners to 02_workbook_data/workbook2_start.xlsx in its closing.next_step field, which is intentional and helpful navigation.

Workbook 2 references:

| Required reference | Status |
| --- | --- |
| 02_workbook_data/workbook2_start.xlsx | PASS |
| 02_workbook_data/workbook2_complete.xlsx | PASS |

Note: Workbook 2 points learners to 02_workbook_data/workbook3_start.xlsx in its closing.next_step field, which is intentional.

Workbook 3 references:

| Required reference | Status |
| --- | --- |
| 02_workbook_data/workbook3_start.xlsx | PASS |
| 02_workbook_data/workbook3_complete.xlsx | PASS |
| 02_workbook_data/sd1_complete.xlsx | PASS |

No workbook references the start file of a different workbook in its instructional steps. sd1_complete.xlsx is described only as the final SD1 clean output, in Workbook 3 Mission 10.

## Section 3 - Workbook JSON Schema Check

All three workbook JSON files were parsed with Python's json module.

| Check | workbook1 | workbook2 | workbook3 |
| --- | --- | --- | --- |
| Valid JSON | PASS | PASS | PASS |
| Top-level keys exact match (cover, snapshot, resources, team_note, mission_brief, why_this_matters, learning_outcomes, sections, closing) | PASS | PASS | PASS |
| Section kinds limited to lesson_intro, glossary, mission | PASS | PASS | PASS |
| Callout types limited to allowed set | PASS | PASS | PASS |
| Every mission contains try_this | PASS | PASS | PASS |
| Every mission contains pause_and_check | PASS | PASS | PASS |
| At least one spot_the_pattern callout in the workbook | PASS | PASS | PASS |
| No markdown outside JSON fields | PASS | PASS | PASS |
| No comments | PASS | PASS | PASS |
| No code fences | PASS | PASS | PASS |
| No extra top-level sections | PASS | PASS | PASS |
| No file paths in markdown-link form | PASS | PASS | PASS |
| Suitable for DOCX conversion by a Python template engine | PASS | PASS | PASS |

## Section 4 - Power Query Method Check

| Check | Status |
| --- | --- |
| Workbook 1 keeps Power Query light - Get Data + Navigator only | PASS |
| Workbook 2 teaches Power Query cleaning methods only (no worksheet TRIM, PROPER, Find & Replace or worksheet Remove Duplicates as the main method) | PASS |
| Workbook 2 follows the required logical Power Query order (rename, set types, remove unused columns, trim/clean, casing/replace, blanks, split/fill/example/conditional, key check) | PASS |
| Workbook 3 uses Power Query for appends and merges | PASS |
| Workbook 3 only mentions worksheet conditional formatting after the Power Query output is loaded, for visual review | PASS |
| No workbook teaches worksheet formulas as the main cleaning method | PASS |

## Section 5 - Append Check

| Check | Status |
| --- | --- |
| 01_source_data/source_append.csv exists | PASS |
| source_append.csv has the same column structure as source_primary.xlsx | PASS |
| Workbook 3 includes a real append task (Mission 3) | PASS |
| The append row count is checked (Mission 4: 40 + 12 = 52) | PASS |
| Append is clearly explained as adding rows | PASS |
| Merge is clearly explained as adding columns | PASS |

## Section 6 - Pattern Spotting Check

| Check | Status |
| --- | --- |
| Workbook 1 has at least one spot_the_pattern callout | PASS (Missions 3 and 7) |
| Workbook 2 has at least one spot_the_pattern callout | PASS (Missions 5 and 6) |
| Workbook 3 has at least one spot_the_pattern callout | PASS (Missions 4, 5, 6 and 8) |
| Pattern spotting is framed as curiosity, not assessment | PASS - wording such as "What catches your eye?", "No need to fix it yet. Just notice." and "A pattern is a clue, not a problem." is used throughout |

## Section 7 - Step-by-Step Check

For each mission in each workbook, the try_this callout was reviewed against the six required elements.

| Element | All workbooks |
| --- | --- |
| What to click | PASS |
| What window appears | PASS |
| What to select | PASS |
| What result should appear | PASS |
| How the learner checks it worked | PASS |
| What to do if it looks different | PASS |

Each Power Query opening step uses the prescribed three-state recovery pattern (already open, not open, missing).

## Section 8 - Learner Experience Check

| Check | Status |
| --- | --- |
| Each workbook JSON supports a spacious layout when converted to DOCX (one main idea per mission, callout boxes used to break content into chunks) | PASS |
| Each workbook uses clear mission sections (numbered Mission 1, Mission 2, etc.) | PASS |
| No workbook has giant dense tables | PASS - tables only appear in the supporting markdown files (data_dictionary.md, manifest, this report) |
| No workbook feels like a technical audit manual | PASS |
| The tone is fun and supportive throughout | PASS - phrases such as "Tea and biscuits are now permitted." and "Mistakes are normal. Use Undo and try again." are used |
| The Stardust Express scenario is used throughout | PASS - Captain Nova, Pip Quasar and Glim Bracket appear by name |
| Common traps are friendly, not scary | PASS - common_trap callouts use guiding language, never threats |

## Section 9 - Data Continuity Check

| Check | Status |
| --- | --- |
| Source files are linked, not duplicated (each is a different shape and connects via keys) | PASS |
| source_append.csv is a valid append file with the same columns as source_primary.xlsx | PASS |
| workbook1_complete.xlsx feeds logically into workbook2_start.xlsx (same loaded data, framed for cleaning) | PASS |
| workbook2_complete.xlsx feeds logically into workbook3_start.xlsx (cleaned tables, ready for combine) | PASS |
| workbook3_complete.xlsx feeds logically into sd1_complete.xlsx (same Deliveries_full table, plus a Summary sheet) | PASS |

## Section 10 - Duplicate Handling Check

| Check | Status |
| --- | --- |
| Workbook 2 explains key-column duplicate removal | PASS (Mission 7 worked example) |
| Workbook 2 explains full-row duplicate removal | PASS (Mission 7 try_this and common_trap) |
| Workbook 2 explains the difference between selecting one column and selecting the whole table | PASS (Mission 7 common_trap) |
| Workbook 2 instructs the use of Power Query for duplicate handling | PASS - Home > Remove Rows > Remove Duplicates |
| Workbook 2 explains row counts must be checked afterwards | PASS - Mission 7 try_this Step 6 and pause_and_check |
| Workbook 2 acknowledges that there are no full-row duplicates in this training data | PASS - Mission 7 pause_and_check states "In this task, there is nothing to remove." |

## Section 11 - Pass / Fix Status Summary

| Section | Result |
| --- | --- |
| 1. File Existence | PASS |
| 2. File Reference | PASS |
| 3. Workbook JSON Schema | PASS |
| 4. Power Query Method | PASS |
| 5. Append | PASS |
| 6. Pattern Spotting | PASS |
| 7. Step-by-Step | PASS |
| 8. Learner Experience | PASS |
| 9. Data Continuity | PASS |
| 10. Duplicate Handling | PASS |

No items currently sit at NEEDS HUMAN REVIEW. The pilot is ready for publication.
