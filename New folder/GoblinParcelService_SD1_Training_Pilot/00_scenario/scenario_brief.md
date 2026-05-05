# Goblin Parcel Service — SD1 Training Pilot

## Scenario Brief

**Organisation:** Goblin Parcel Service (GPS)

GPS is the Enchanted Realm's most reliable courier company. Trained delivery dragons fly parcels across six established routes, from the Meadow Loop to the Highland Spiral. GPS prides itself on punctual deliveries, cheerful dragons, and never — ever — losing a parcel in the Murky Bog.

---

## Your Team

| Name | Role | Personality |
|---|---|---|
| **Zogra Dragonkin** | Head Dispatcher | Enthusiastic, dramatic, says "BY THE ANCIENT SCROLLS!" when surprised |
| **Munko Flysworth** | Route Analyst | Calm, methodical, loves a good pattern |
| **Splink Pouch-Handler** | Portal Clerk | Helpful, double-checks everything twice |

---

## The Situation

GPS has just completed its busiest quarter. Deliveries were logged across two time periods:

- **January–February 2025** records were saved in the main delivery file.
- **March 2025** records were saved in a separate file when the system was being updated.

On top of this, the Goblin IT Gremlins have been up to their usual tricks. The data has a few issues:

- Some entries have been typed in different cases — "Delivered", "DELIVERED", "delivered"
- One delivery record appears twice
- A couple of weight values are missing
- One entry has a suspicious weight that Munko is already suspicious about
- One delivery was logged against a route that does not exist

---

## The Business Question

> **Which delivery routes are meeting the standard delivery time?**
> **Which courier dragons are logging the most delays?**

To answer this, you will need to:

1. Import the delivery data from all source files
2. Clean and standardise the data in Power Query
3. Append the March records to the January–February records
4. Merge in the route classification and courier dragon details
5. Check the final data for quality issues
6. Produce a clean, validated dataset ready for the quarterly board report

---

## Source Files

| File | Contents |
|---|---|
| `01_source_data/source_primary.xlsx` | January–February delivery records (40 rows + 1 duplicate) |
| `01_source_data/source_append.csv` | March delivery records to append (10 rows) |
| `01_source_data/source_secondary.csv` | Courier dragon details (20 records) |
| `01_source_data/source_lookup.pdf` | Route classification reference table (6 routes) |

---

## Your Workbooks

| Workbook | File | Focus |
|---|---|---|
| Workbook 1 | `03_workbooks/workbook1_import_first_look.json` | Import files and take a first look |
| Workbook 2 | `03_workbooks/workbook2_power_query_cleaning_toolkit.json` | Clean and prepare the data |
| Workbook 3 | `03_workbooks/workbook3_append_merge_validate.json` | Append, merge and validate |

---

## Zogra's Opening Note

*"Welcome to GPS Data Central! Before we can tell the board which routes are flying and which ones are fumbling, we need to get our data in order. Munko will guide you through each step. Splink has already triple-checked the filing. All you need to do is follow the missions. BY THE ANCIENT SCROLLS — let's get started!"*

---

*This is a training scenario. All names, places and dragons are fictional.*
