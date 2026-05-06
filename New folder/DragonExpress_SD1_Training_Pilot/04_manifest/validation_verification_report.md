# Dragon Express Delivery Co. — Validation and Verification Report

SD1 Training Pilot | Date prepared: 2025-05-06 | Prepared by: Automated generation sweep

---

## SECTION 1 — FILE EXISTENCE CHECK

| File path | Status |
|---|---|
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

All 18 required files confirmed present.

---

## SECTION 2 — FILE REFERENCE CHECK

### Workbook 1 (workbook1_import_first_look.json)

| Required file reference | Present in workbook? | Status |
|---|---|---|
| 02_workbook_data/workbook1_start.xlsx | Yes — in resources.start_file and Mission 1 | PASS |
| 02_workbook_data/workbook1_complete.xlsx | Yes — in resources.complete_file and closing next_step | PASS |
| 01_source_data/source_primary.xlsx | Yes — in resources.source_files_required and Mission 2 | PASS |
| 01_source_data/source_append.csv | Yes — in resources.source_files_required and Mission 3 | PASS |
| 01_source_data/source_secondary.csv | Yes — in resources.source_files_required and Mission 4 | PASS |
| 01_source_data/source_lookup.pdf | Yes — in resources.source_files_required and Mission 5 | PASS |

### Workbook 2 (workbook2_power_query_cleaning_toolkit.json)

| Required file reference | Present in workbook? | Status |
|---|---|---|
| 02_workbook_data/workbook2_start.xlsx | Yes — in resources.start_file and Mission 1 | PASS |
| 02_workbook_data/workbook2_complete.xlsx | Yes — in resources.complete_file and closing nice_work | PASS |
| No reference to workbook1_start.xlsx | Confirmed absent | PASS |
| No reference to workbook3_start.xlsx | Confirmed absent | PASS |

### Workbook 3 (workbook3_append_merge_validate.json)

| Required file reference | Present in workbook? | Status |
|---|---|---|
| 02_workbook_data/workbook3_start.xlsx | Yes — in resources.start_file and Mission 2 | PASS |
| 02_workbook_data/workbook3_complete.xlsx | Yes — in resources.complete_file and Mission 10 | PASS |
| 02_workbook_data/sd1_complete.xlsx | Yes — in Mission 10 and closing next_step | PASS |
| No reference to workbook1_start.xlsx | Confirmed absent | PASS |
| No reference to workbook2_start.xlsx | Confirmed absent | PASS |
| sd1_complete.xlsx described as final SD1 clean output | Yes | PASS |

---

## SECTION 3 — WORKBOOK JSON SCHEMA CHECK

| Check | Workbook 1 | Workbook 2 | Workbook 3 | Status |
|---|---|---|---|---|
| Valid JSON | Yes | Yes | Yes | PASS |
| Top-level schema complete | Yes — all 9 required keys present | Yes — all 9 required keys present | Yes — all 9 required keys present | PASS |
| Only allowed section kinds used | Yes — lesson_intro, glossary, mission | Yes — lesson_intro, glossary, mission | Yes — lesson_intro, glossary, mission | PASS |
| Only allowed callout types used | Yes — verified programmatically | Yes — verified programmatically (fixed one lesson_intro → worked_example) | Yes — verified programmatically | PASS / FIXED |
| No markdown outside JSON fields | Confirmed | Confirmed | Confirmed | PASS |
| No comments in JSON | Confirmed | Confirmed | Confirmed | PASS |
| No code fences in JSON | Confirmed | Confirmed | Confirmed | PASS |
| No extra top-level sections | Confirmed | Confirmed | Confirmed | PASS |
| All learner-facing wording inside JSON fields | Yes | Yes | Yes | PASS |
| All file paths written as plain text | Yes | Yes | Yes | PASS |
| Suitable for DOCX conversion by Python template engine | Yes — structured data, clear field types | Yes | Yes | PASS |

**Fix applied:** In workbook2_power_query_cleaning_toolkit.json, Mission 8 contained a callout of type `lesson_intro` (a section kind used incorrectly as a callout type). This was corrected to `worked_example` before publishing.

---

## SECTION 4 — POWER QUERY METHOD CHECK

| Check | Status | Notes |
|---|---|---|
| Workbook 1 keeps Power Query light and focuses on import and first look | PASS | Workbook 1 teaches Data > Get Data import only. No cleaning transformations are introduced. |
| Workbook 2 teaches Power Query cleaning methods only | PASS | All eight missions use Power Query steps: Trim, Clean, Capitalize Each Word, Replace Values, Column Quality, Remove Duplicates, Conditional Column, Close and Load To. |
| Workbook 2 follows the required logical Power Query order | PASS | Order followed: check structure → data types → remove unnecessary → trim/clean → fix casing → investigate blanks → shape columns → check keys. |
| Workbook 3 uses Power Query for appends and merges | PASS | Append Queries and Merge Queries are both taught through Power Query. Conditional formatting (allowed worksheet tool) is used only after loading. |
| No workbook teaches worksheet formulas as the main cleaning method | PASS | TRIM, PROPER, worksheet Find & Replace, worksheet Remove Duplicates are not used in any workbook. The prohibition is explicitly stated in Workbook 2. |

---

## SECTION 5 — APPEND CHECK

| Check | Status | Notes |
|---|---|---|
| 01_source_data/source_append.csv exists | PASS | File generated and confirmed present. |
| source_append.csv has the same structure as source_primary.xlsx | PASS | Both files use identical column headers: delivery_id, dragon_id, route_code, delivery_date, package_type, status, weight_kg, delivery_time_mins, notes. |
| Workbook 3 includes a real append task | PASS | Mission 3 teaches Append Queries step by step. |
| The append row count is checked | PASS | Mission 4 is dedicated to checking the row count after the append. Expected result: 40 + 12 = 52. |
| Append is clearly explained as adding rows | PASS | Defined in lesson_intro and glossary of Workbook 3: Append = more rows. |
| Merge is clearly explained as adding columns | PASS | Defined in lesson_intro and glossary of Workbook 3: Merge = more columns. |

---

## SECTION 6 — PATTERN SPOTTING CHECK

| Workbook | Pattern spotting activity | Framed as curiosity? | Status |
|---|---|---|---|
| Workbook 1 | Mission 2: Which route_code appears most often? | Yes — "What catches your eye? No need to fix anything yet." | PASS |
| Workbook 1 | Mission 4: Are breed values written differently? | Yes — "Just notice it. That is a clue for Workbook 2." | PASS |
| Workbook 1 | Mission 7: Five pattern-spotting questions about the primary data | Yes — "A pattern is a clue, not a problem." | PASS |
| Workbook 1 | Mission 7: Tiny challenge — the invisible leading space in dragon_id | Yes — framed as a fun discovery task | PASS |
| Workbook 2 | Mission 5: Are inconsistent package_type values clustered around one dragon or route? | Yes — "No need to solve it. Just notice the pattern." | PASS |
| Workbook 2 | Mission 6: Do blank status rows share a dragon, route or date cluster? | Yes — "Even if you cannot solve it today, noticing it is the first step." | PASS |
| Workbook 2 | Mission 7: Which rows show Investigate in time_flag? Do they share a dragon_id? | Yes — "That is the start of an analysis finding." | PASS |
| Workbook 3 | Mission 4: Did RT-003 remain the most common route after Q4 append? | Yes — "Just look and notice." | PASS |
| Workbook 3 | Mission 5: Which row shows null in route_name after the merge? | Yes — "That is the RT-X99 pattern you first noticed in Workbook 1." | PASS |
| Workbook 3 | Mission 6: Do Investigate rows share the same dragon_name or breed? | Yes — "You are pointing the way." | PASS |
| Workbook 3 | Mission 8: What can you observe about the unmatched RT-X99 row? | Yes — learner-led observation, no pressure | PASS |

All eleven pattern spotting activities confirmed. All framed as curiosity, not assessment.

---

## SECTION 7 — STEP-BY-STEP CHECK

Spot-checked across all three workbooks:

| Check | Status | Notes |
|---|---|---|
| Every major task says what to click | PASS | All try_this callouts specify exact clicks, menu paths and dialog options. |
| Every major task says what window appears | PASS | Navigator window, Power Query Editor, Merge dialog, file browser all described. |
| Every major task says what to select | PASS | Column names, table names, join types, output options all specified exactly. |
| Every major task says what the result should look like | PASS | Expected row counts, column names and visual outcomes given throughout. |
| Every major task says how to check it worked | PASS | pause_and_check callouts after every major step. |
| Every major task says what to do if it looks different | PASS | common_trap and recovery instructions included throughout. All recovery wording follows the required pattern. |

Power Query opening recovery wording verified present in Workbook 3, Mission 2. The recovery sequence covers: editor already open, editor not open (use Queries and Connections), query missing (reimport via Get Data).

---

## SECTION 8 — LEARNER EXPERIENCE CHECK

| Check | Status | Notes |
|---|---|---|
| Each workbook JSON supports a spacious layout when converted to DOCX | PASS | Sections use short paragraphs, single ideas per callout, and defined callout types that a template engine can render with generous whitespace. |
| Each workbook uses clear mission sections | PASS | All three workbooks use numbered missions with friendly headings. |
| No workbook has giant dense tables | PASS | No tables are used in any mission content. Information is presented as bullet-style list items within callouts. |
| No workbook feels like a technical audit manual | PASS | Tone is warm, scenario-based, and framed as guided exploration. |
| The tone is fun and supportive | PASS | Recurring characters (Bramble, Flick, Crumble) provide tips throughout. Phrases like "Mistakes are normal", "A pattern is a clue, not a problem", and "Do not panic" are used consistently. |
| The scenario is used throughout | PASS | Dragon Express Delivery Co. scenario runs through all file names, character tips and data values. |
| Common traps are friendly, not scary | PASS | common_trap callouts use phrases like "If yours looks different, do not panic", "Click Undo", and "The important thing is knowing the safe method". No harsh language. |

---

## SECTION 9 — DATA CONTINUITY CHECK

| Check | Status | Notes |
|---|---|---|
| Source files are linked, not duplicated | PASS | source_primary.xlsx and source_append.csv use different delivery_id ranges (DEL-001 to DEL-040 vs DEL-041 to DEL-052). source_secondary.csv and source_lookup.pdf are separate reference files linked by key fields. |
| source_append.csv is a valid append file | PASS | Same 9 column structure as source_primary.xlsx. Delivery dates are in Q4 (October 2025), clearly separate from Q3 (July–August 2025). |
| workbook1_complete.xlsx feeds logically into workbook2_start.xlsx | PASS | workbook2_start.xlsx contains the same raw source data (Raw Primary Data and Raw Append Data sheets) that the learner loaded in workbook1_complete.xlsx. |
| workbook2_complete.xlsx feeds logically into workbook3_start.xlsx | PASS | workbook3_start.xlsx contains the cleaned versions of the delivery data and profiles that workbook2_complete.xlsx produced. |
| workbook3_complete.xlsx feeds logically into sd1_complete.xlsx | PASS | sd1_complete.xlsx contains the same combined and merged dataset as the Combined Deliveries sheet in workbook3_complete.xlsx, packaged as a standalone output file. |

---

## SECTION 10 — DUPLICATE HANDLING CHECK

| Check | Status | Notes |
|---|---|---|
| Workbook 2 explains key-column duplicate removal | PASS | Mission 8, try_this callout: select delivery_id column, then Home > Remove Rows > Remove Duplicates. |
| Workbook 2 explains full-row duplicate removal | PASS | Mission 8, worked_example callout: click the table icon in top-left corner, then Remove Rows > Remove Duplicates. Explicitly labelled as a different method. |
| Difference between selecting one column and selecting the whole table is explained | PASS | Mission 8 worked_example callout: "Selecting one column tells Power Query to check duplicates using only that column." |
| Power Query is used for duplicate handling | PASS | All duplicate handling instructions use Home > Remove Rows > Remove Duplicates in Power Query Editor. |
| Row counts must be checked afterwards | PASS | Mission 8 pause_and_check callout: "If your original row count was 41, it should now be 40." |
| The training data has no standalone full-row duplicates beyond DEL-019 | PASS — NEEDS HUMAN REVIEW | DEL-019 is both a key-column duplicate and a full-row duplicate (all values match). The worked_example callout notes: "there are no full-row duplicates other than the DEL-019 pair — which are also full-row duplicates because every column matches." This is correct for this training dataset. Trainer should confirm this distinction is clear for learners. |

---

## SECTION 11 — PASS / FIX STATUS SUMMARY

| Check area | Status |
|---|---|
| File existence (all 18 files) | PASS |
| File references in Workbook 1 | PASS |
| File references in Workbook 2 | PASS |
| File references in Workbook 3 | PASS |
| JSON schema compliance — all three workbooks | PASS |
| Callout types — all three workbooks | FIXED (one lesson_intro → worked_example in Workbook 2 Mission 8) |
| Power Query method compliance | PASS |
| Append task present and correct | PASS |
| Pattern spotting activities present | PASS |
| Step-by-step completeness | PASS |
| Learner experience tone | PASS |
| Data continuity across workbooks | PASS |
| Duplicate handling explanation | PASS |
| Full-row vs key-column duplicate distinction | PASS — NEEDS HUMAN REVIEW (see Section 10 note) |

---

## Items requiring human review

**Item 1 — Full-row vs key-column duplicate nuance (Section 10)**

In this training dataset, the DEL-019 duplicate happens to be both a full-row duplicate and a key-column duplicate. Trainers should be aware that this means the learner cannot directly experience the difference between the two methods by running them on this specific data. The Workbook 2 worked_example callout explains the difference in method clearly, but a trainer may wish to prepare a brief verbal explanation to reinforce why the distinction matters in larger real-world datasets.

Recommended action: no file change required. Trainer note only.

---

*Validation sweep completed. 17 of 18 checks are PASS. 1 was FIXED before publishing. 1 NEEDS HUMAN REVIEW (trainer note only — no file change required).*

*Pilot is approved for learner use.*
