# Dragon Express Delivery Co. — Scenario Brief

## Organisation

**Dragon Express Delivery Co. (DEDC)**

Dragon Express Delivery Co. is the continent's most reliable parcel delivery service — if your parcel needs to reach the Northern Mountains before Tuesday, a trained dragon is the only sensible option. The company operates a fleet of twenty dragons across seven official routes, handling everything from fragile glass trinkets to enormous chunks of enchanted rock.

Every quarter, the Data team pulls together the delivery logs, checks them against dragon profiles, and produces a clean summary for the operations review. This quarter, the task falls to Flick Pebble — and she has roped in your help.

---

## The Team

**Bramble Finch** — Head Dispatcher

Bramble manages the day-to-day routing of dragons and parcels. He is cheerful, slightly scatterbrained, and has a habit of writing delivery_ids on whatever is nearest to hand. He will pop up throughout your workbooks with tips and warnings.

**Flick Pebble** — Data Coordinator

Flick is methodical and loves a checklist. She set up the original delivery log system and is responsible for producing the quarterly clean dataset. She is your main guide through the data cleaning process.

**Crumble Ash** — Senior Dragon Wrangler

Crumble has been working with dragons since before most of the current fleet hatched. He keeps the dragon profiles up to date and is the person to ask if a dragon's data looks odd. He is practical, direct, and slightly suspicious of spreadsheets.

---

## The Business Question

> Which routes are taking the longest to deliver, and are there any dragons whose delivery times seem unusually high compared to the rest of the fleet?

---

## Why the Data Needs Work

DEDC keeps its Q3 and Q4 delivery logs in separate files. The dragon profiles are stored in a separate HR system. Route codes are only explained in a reference PDF that lives in the operations folder.

Before the quarterly operations review, the team needs to:

1. Import the Q3 delivery log from `01_source_data/source_primary.xlsx`
2. Import the Q4 delivery log from `01_source_data/source_append.csv`
3. Import the dragon profiles from `01_source_data/source_secondary.csv`
4. Import the route lookup from `01_source_data/source_lookup.pdf`
5. Clean the data — fix casing, trim spaces, handle blanks and duplicates
6. Append the Q3 and Q4 records into one combined delivery table
7. Merge the delivery table with the route lookup to understand route categories
8. Merge the delivery table with the dragon profiles to bring in dragon details
9. Validate the final result — check row counts, blanks, and unmatched records
10. Produce a final clean output file: `02_workbook_data/sd1_complete.xlsx`

---

## Known Data Issues

The delivery logs were entered by several different people across the quarter. As a result, the data has a few issues that need fixing before analysis can begin:

- Some package types are written in different cases (Express, EXPRESS, express)
- One dragon_id has a leading space that needs trimming
- Three status cells are blank and need to be flagged
- One delivery record appears twice (a full duplicate)
- One route code (RT-X99) does not appear in the official route lookup table
- Dragon breed names are written inconsistently across the profiles file
- One dragon name has a double space in the middle

None of these issues is serious. They are all normal data quality problems that a data technician is trained to find, understand, and fix.

---

## Tone

This is a training pilot, not an assessment.

The aim is to build your confidence with Power Query, one step at a time.

Mistakes are normal. Curiosity is good. Every pattern you notice is a clue, not a problem.

---

*Document reference: DEDC-SD1-PILOT-2025 | Author: Flick Pebble, Data Coordinator*
