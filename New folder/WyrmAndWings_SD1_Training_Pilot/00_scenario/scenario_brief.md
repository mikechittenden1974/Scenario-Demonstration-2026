# Wyrm & Wings Dragon Delivery Co.
## SD1 Training Pilot — Scenario Brief

---

## The Organisation

**Wyrm & Wings Dragon Delivery Co.** is the Lowlands' most trusted parcel courier service — the catch being that every delivery is made by a trained dragon.

Founded in 2018 by the legendary logistics wizard Beatrix Flameholt, the company now operates two depots (Northern and Southern), a fleet of twenty registered dragons, and six established delivery routes across the region.

Business is booming. Unfortunately, the data is not.

---

## The Challenge

The company collects delivery records in two separate spreadsheets — one from each depot. At the end of each quarter, someone (usually Gideon) needs to combine the records, clean up the inconsistencies, match the dragon details and route information, and produce a single clean output table for the senior team.

This quarter, that someone is you.

The business question is simple:

> **Which delivery routes are generating the most delays and failures — and do certain dragons or breeds appear more often in those records?**

To answer that question, the data must be imported, cleaned, combined, and validated first.

---

## The Team

**Beatrix Flameholt** — Head of Logistics. Beatrix has been wrangling dragons (and spreadsheets) since before most of the dragons were hatched. She is direct, encouraging, and has a fondness for very strong tea. She will appear throughout the workbooks with tips and observations.

**Gideon Scales** — Data Wrangler. Gideon manages all things data. He is cheerful, slightly chaotic, and responsible for most of the data issues you are about to clean up. He means well.

**Nora Ashwick** — Route Supervisor. Nora manages the day-to-day operations across all six routes. She knows the patterns in the delivery data before anyone else, and will flag things that seem unusual.

---

## Why the Data Needs Cleaning

Delivery records from the Northern Depot were entered by hand during a very busy period. Gideon also forgot to export the Southern Depot records until two weeks later, so they exist as a separate file.

As a result:

- Some status values are inconsistent (`complete`, `COMPLETE`, `Completed`, `Complete`)
- Some rows have leading or trailing spaces in text columns
- Two rows are exact duplicates (they were accidentally submitted twice)
- One delivery has no dragon ID logged (there was a depot incident)
- One dragon ID in the records does not match any registered dragon
- The route details and dragon registry are stored in separate files that need to be joined

---

## The Source Files

| File | Contents |
|------|----------|
| `01_source_data/source_primary.xlsx` | Northern Depot delivery records (Jan 2026) |
| `01_source_data/source_append.csv` | Southern Depot delivery records (Feb 2026) |
| `01_source_data/source_secondary.csv` | Dragon registry — names, breeds, handlers, depots |
| `01_source_data/source_lookup.pdf` | Route reference table — route names, regions, difficulty |

---

## The Three Workbooks

| Workbook | File | Focus |
|----------|------|-------|
| Workbook 1 | `03_workbooks/workbook1_import_first_look.json` | Import all four source files and take a first look |
| Workbook 2 | `03_workbooks/workbook2_power_query_cleaning_toolkit.json` | Clean the data using Power Query |
| Workbook 3 | `03_workbooks/workbook3_append_merge_validate.json` | Append, merge and validate the final output |

---

## The Final Output

`02_workbook_data/sd1_complete.xlsx`

This file contains 53 clean delivery records with route details and dragon details joined in.
It is ready for analysis.

---

*Wyrm & Wings Dragon Delivery Co. — "We deliver anywhere. Even the mountain routes. Especially the mountain routes."*
