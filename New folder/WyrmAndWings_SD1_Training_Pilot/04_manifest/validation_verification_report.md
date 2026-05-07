# Validation and Verification Report
## Wyrm & Wings Dragon Delivery Co. — SD1 Training Pilot

---

## SECTION 1 — FILE EXISTENCE CHECK

All required files confirmed present.

| File Path | Status |
|-----------|--------|
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

**Result: All 18 files present. PASS**

---

## SECTION 2 — FILE REFERENCE CHECK

### Workbook 1 — workbook1_import_first_look.json

| Reference Required | Present in JSON | Status |
|-------------------|-----------------|--------|
| 02_workbook_data/workbook1_start.xlsx | resources.start_file | PASS |
| 02_workbook_data/workbook1_complete.xlsx | resources.complete_file | PASS |
| 01_source_data/source_primary.xlsx | resources.source_files_required + Mission 2 | PASS |
| 01_source_data/source_append.csv | resources.source_files_required + Mission 3 | PASS |
| 01_source_data/source_secondary.csv | resources.source_files_required + Mission 4 | PASS |
| 01_source_data/source_lookup.pdf | resources.source_files_required + Mission 5 | PASS |

**Result: All Workbook 1 file references correct. PASS**

### Workbook 2 — workbook2_power_query_cleaning_toolkit.json

| Reference Required | Present in JSON | Status |
|-------------------|-----------------|--------|
| 02_workbook_data/workbook2_start.xlsx | resources.start_file | PASS |
| 02_workbook_data/workbook2_complete.xlsx | resources.complete_file + Mission 9 | PASS |
| No source_primary.xlsx references (correct — WB2 uses WB2_start only) | Confirmed absent | PASS |

**Result: All Workbook 2 file references correct. PASS**

### Workbook 3 — workbook3_append_merge_validate.json

| Reference Required | Present in JSON | Status |
|-------------------|-----------------|--------|
| 02_workbook_data/workbook3_start.xlsx | resources.start_file + Mission 1 | PASS |
| 02_workbook_data/workbook3_complete.xlsx | resources.complete_file | PASS |
| 02_workbook_data/sd1_complete.xlsx | Mission 7 + closing | PASS |
| No workbook2_start.xlsx references (correct — WB3 uses WB3_start only) | Confirmed absent | PASS |

**Result: All Workbook 3 file references correct. PASS**

---

## SECTION 3 — WORKBOOK JSON SCHEMA CHECK

| Check | WB1 | WB2 | WB3 |
|-------|-----|-----|-----|
| Valid JSON (parsed without error) | PASS | PASS | PASS |
| All required top-level keys present (cover, snapshot, resources, team_note, mission_brief, why_this_matters, learning_outcomes, sections, closing) | PASS | PASS | PASS |
| Only allowed section kinds used (lesson_intro, glossary, mission) | PASS | PASS | PASS |
| Only allowed callout types used | PASS | PASS | PASS |
| Every mission has at least one try_this callout | PASS | PASS | PASS |
| Every mission has at least one pause_and_check callout | PASS | PASS | PASS |
| No markdown outside JSON fields | PASS | PASS | PASS |
| No code fences | PASS | PASS | PASS |
| No comments | PASS | PASS | PASS |
| No extra top-level sections | PASS | PASS | PASS |
| All file paths written as plain text (no hyperlinks, no brackets) | PASS | PASS | PASS |
| Suitable for conversion to DOCX by Python template engine | PASS | PASS | PASS |

**Result: All three JSON files pass schema check. PASS**

---

## SECTION 4 — POWER QUERY METHOD CHECK

| Check | Status | Notes |
|-------|--------|-------|
| Workbook 1 keeps Power Query light — focuses on import and first look only | PASS | Import steps use Get Data only; no cleaning transformations in WB1 |
| Workbook 2 teaches Power Query cleaning methods only | PASS | No worksheet formulas used as the main method |
| Workbook 2 follows the required logical Power Query order | PASS | Structure → Types → Reduce → Clean → Standardise → Handle gaps → Shape → Keys → Validate |
| Workbook 3 uses Power Query for appends and merges | PASS | Append Queries and Merge Queries taught via Power Query |
| No workbook teaches worksheet formulas as the main cleaning method | PASS | Worksheet features (conditional formatting, filter) used only for post-load review |

**Power Query order in Workbook 2 — verified sequence:**

1. Import / open data — Mission 1
2. Check what Power Query has done automatically — Mission 1 (Applied Steps)
3. Rename the query — Mission 2
4. Check headers and column names — Mission 2
5. Rename columns clearly — Mission 2
6. Set data types — Mission 2
7. Remove columns not needed — Mission 3
8. Trim and Clean text — Mission 4
9. Fix casing / Capitalize Each Word — Mission 5
10. Replace or standardise values — Mission 5
11. Find and handle blanks — Mission 6
12. Check key columns — Mission 7
13. Remove duplicates — Mission 8
14. Close and Load — Mission 9

**Result: Power Query method check complete. PASS**

---

## SECTION 5 — APPEND CHECK

| Check | Status | Notes |
|-------|--------|-------|
| 01_source_data/source_append.csv exists | PASS | 12 data rows confirmed |
| source_append.csv has same structure as source_primary.xlsx | PASS | Both have identical columns: delivery_id, route_code, dragon_id, delivery_date, package_weight_kg, status, notes |
| Workbook 3 includes a real append task | PASS | Mission 2 teaches Append Queries via Power Query |
| Append row count is checked | PASS | Mission 2 pause_and_check: expected 41 + 12 = 53 |
| Append clearly explained as adding rows | PASS | lesson_intro and Mission 2 both explain this |
| Merge clearly explained as adding columns | PASS | lesson_intro and Missions 3–4 both explain this |

**Result: Append check complete. PASS**

---

## SECTION 6 — PATTERN SPOTTING CHECK

### Workbook 1 — Pattern Spotting Activities

| Pattern | Location | Status |
|---------|----------|--------|
| RT-04 appears most often in route_code | Mission 2 spot_the_pattern | PASS |
| Status column has inconsistent casing | Mission 2 spot_the_pattern | PASS |
| DEL-009 dragon_id (DRG-99) not in dragon registry | Mission 4 spot_the_pattern | PASS |
| One unusually high package weight (280.0 kg) | Mission 2 spot_the_pattern | PASS |
| RT-06 only appears in append file | Mission 3 spot_the_pattern | PASS |
| Framed as curiosity not assessment | All — wording: "Just notice the pattern", "No need to fix anything yet" | PASS |

### Workbook 2 — Pattern Spotting Activities

| Pattern | Location | Status |
|---------|----------|--------|
| Inconsistent status labels are the same category | Mission 5 spot_the_pattern | PASS |
| Blanks in notes are spread, blank in dragon_id is isolated | Mission 6 spot_the_pattern | PASS |
| Duplicate rows checked for clustering by category | Mission 8 spot_the_pattern | PASS |
| Key values checked for consistent shape | Mission 7 | PASS |

### Workbook 3 — Pattern Spotting Activities

| Pattern | Location | Status |
|---------|----------|--------|
| Append row count increases by expected amount | Mission 2 spot_the_pattern | PASS |
| RT-06 only in append — noticed after combining | Mission 2 spot_the_pattern | PASS |
| Unmatched rows have different causes | Mission 4 spot_the_pattern | PASS |
| RT-04 still most frequent after full append | Mission 5 spot_the_pattern | PASS |
| RT-02 has most delays / highest difficulty | Mission 5 spot_the_pattern | PASS |

**Result: Pattern spotting present in all three workbooks. Framing is curiosity-based throughout. PASS**

---

## SECTION 7 — STEP-BY-STEP CHECK

Each major task verified against the following criteria:

| Criterion | Workbook 1 | Workbook 2 | Workbook 3 |
|-----------|-----------|-----------|-----------|
| What to click is specified | PASS | PASS | PASS |
| What window should appear is described | PASS | PASS | PASS |
| What to select is specified | PASS | PASS | PASS |
| Expected result is described | PASS | PASS | PASS |
| How to check it worked is described | PASS | PASS | PASS |
| What to do if it looks different is described | PASS | PASS | PASS |
| Earlier dependencies are present | PASS | PASS | PASS |
| Navigator window steps described | PASS | N/A | N/A |
| Query naming steps included | PASS | PASS | PASS |
| Row count checks included | PASS | PASS | PASS |
| Close and Load choices described | PASS | PASS | PASS |

**Power Query recovery wording pattern confirmed in Workbook 3 Mission 1:**
- If Power Query Editor is already open: continue
- If not open: Data > Queries and Connections > double-click
- If query is missing: Data > Get Data > re-import

**Result: Step-by-step check complete. PASS**

---

## SECTION 8 — LEARNER EXPERIENCE CHECK

| Check | Status | Notes |
|-------|--------|-------|
| Each workbook JSON supports spacious layout when converted to DOCX | PASS | Sections are broken into short missions with generous callout spacing |
| Each workbook uses clear mission sections | PASS | 7 / 9 / 8 missions per workbook respectively |
| No workbook has giant dense tables | PASS | No large tables in JSON content; data tables are in Excel files only |
| No workbook feels like a technical audit manual | PASS | Tone is consistently warm and guided |
| Tone is fun and supportive throughout | PASS | Scenario characters appear in team_note; language uses "That is a clue, not a failure" style |
| Scenario is used throughout | PASS | Wyrm & Wings characters referenced in team_notes; scenario language in missions |
| Common traps are friendly, not scary | PASS | All warnings renamed common_trap; wording: "If yours looks different, do not panic" |
| Maximum sentence length approximately 20 words | PASS | Verified across all three JSON files |
| Technical terms explained on first use | PASS | Glossary sections in all three workbooks; inline definitions in missions |

**Result: Learner experience check complete. PASS**

---

## SECTION 9 — DATA CONTINUITY CHECK

| Check | Status | Notes |
|-------|--------|-------|
| Source files are linked, not duplicated | PASS | source_append.csv has same structure as but different content from source_primary.xlsx |
| source_append.csv is a valid append file | PASS | Identical 7-column structure; delivery IDs DEL-101 to DEL-112 (no overlap with primary) |
| workbook1_complete.xlsx feeds logically into workbook2_start.xlsx | PASS | Both contain same 4 sheets; workbook2_start.xlsx carries the imported raw queries forward |
| workbook2_complete.xlsx feeds logically into workbook3_start.xlsx | PASS | workbook3_start.xlsx contains the cleaned queries (primary_clean, append_clean, dragon_registry, route_lookup) |
| workbook3_complete.xlsx feeds logically into sd1_complete.xlsx | PASS | sd1_complete.xlsx is the final table from workbook3_complete.xlsx saved as standalone values |
| Total row count verified: 41 + 12 = 53 in sd1_complete.xlsx | PASS | Confirmed by Python count |

**Result: Data continuity check complete. PASS**

---

## SECTION 10 — DUPLICATE HANDLING CHECK

| Check | Status | Notes |
|-------|--------|-------|
| Workbook 2 explains key-column duplicate removal | PASS | Mission 8 common_trap explains this method |
| Workbook 2 explains full-row duplicate removal | PASS | Mission 8 try_this: table icon → Home → Remove Rows → Remove Duplicates |
| Difference between selecting one column and whole table is explained | PASS | Mission 8 common_trap: "Selecting one column tells Power Query to check duplicates using only that column" |
| Power Query used for duplicate handling (not worksheet Remove Duplicates) | PASS | All steps are Power Query steps |
| Row counts checked before and after | PASS | Mission 8 pause_and_check: expects 41 rows (43 minus 2 duplicates) |
| Full-row duplicate definition explained | PASS | Workbook 2 glossary: "A row where every value matches every value in another row" |
| worked_example explains the scenario where there are no full-row duplicates | PASS | Mission 8 worked_example included |

**Result: Duplicate handling check complete. PASS**

---

## SECTION 11 — PASS / FIX STATUS SUMMARY

| Section | Status |
|---------|--------|
| Section 1 — File Existence Check | PASS |
| Section 2 — File Reference Check | PASS |
| Section 3 — Workbook JSON Schema Check | PASS |
| Section 4 — Power Query Method Check | PASS |
| Section 5 — Append Check | PASS |
| Section 6 — Pattern Spotting Check | PASS |
| Section 7 — Step-by-Step Check | PASS |
| Section 8 — Learner Experience Check | PASS |
| Section 9 — Data Continuity Check | PASS |
| Section 10 — Duplicate Handling Check | PASS |

**All 10 sections: PASS**

**Items requiring human review: None**

---

*Validation sweep completed: 2026-05-07*
*All files confirmed present, valid, and consistent.*
*The SD1 Training Pilot is ready for review.*
