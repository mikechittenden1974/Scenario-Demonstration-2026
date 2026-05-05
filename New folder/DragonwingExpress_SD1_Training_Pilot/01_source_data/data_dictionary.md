# Dragonwing Express — Data Dictionary

This page explains every field in every source file. Keep it open while you work — Jasper Inkwell reckons it is the single most useful page in the whole training.

## Plain-English Reminders

- A **field** is a column in a table.
- A **key** is a column that links rows between two tables.
- A **blank** is a missing value.
- A **valid value** is one of the values that field is allowed to contain.

---

## File 1 — source_primary.xlsx (Delivery Log)

Main activity table. One row per parcel delivery.

| Field | Source | Meaning | Type | Valid Values | Blanks Allowed | Key? |
|---|---|---|---|---|---|---|
| delivery_id | source_primary.xlsx | Unique code for each delivery | Text | DEL-0001 to DEL-9999 | No | Yes (primary key) |
| delivery_date | source_primary.xlsx | Date the parcel was delivered | Date | Any date in last quarter | No | No |
| dragon_id | source_primary.xlsx | Which dragon flew the route | Text | DRG-01 to DRG-20 | No | Yes (links to dragons) |
| route_code | source_primary.xlsx | Short code for the route flown | Text | R-### format | No | No |
| origin_code | source_primary.xlsx | Where the parcel was picked up | Text | 3-letter location code | No | Yes (links to locations) |
| destination_code | source_primary.xlsx | Where the parcel was delivered | Text | 3-letter location code | No | Yes (links to locations) |
| parcel_weight_kg | source_primary.xlsx | Weight of the parcel | Number | 0.1 to 50 | No | No |
| delivery_status | source_primary.xlsx | Outcome of the delivery | Text | Delivered, Delayed, Lost, Returned | No | No |
| customer_notes | source_primary.xlsx | Free-text comment from the customer | Text | Any short message | Yes | No |

---

## File 2 — source_secondary.csv (Dragon Roster)

One row per dragon currently working at Dragonwing Express.

| Field | Source | Meaning | Type | Valid Values | Blanks Allowed | Key? |
|---|---|---|---|---|---|---|
| dragon_id | source_secondary.csv | Unique code for each dragon | Text | DRG-01 to DRG-20 | No | Yes (primary key) |
| dragon_name | source_secondary.csv | The dragon's friendly name | Text | Any name | No | No |
| dragon_type | source_secondary.csv | Breed of dragon | Text | Skywing, Frostscale, Emberback, Mistwyrm | No | No |
| certification_level | source_secondary.csv | Training level reached | Text | Trainee, Standard, Senior, Master | No | No |
| base_location_code | source_secondary.csv | Home roost location | Text | 3-letter location code | No | Yes (links to locations) |

---

## File 3 — source_lookup.pdf (Location Lookup)

One row per location served by Dragonwing Express.

| Field | Source | Meaning | Type | Valid Values | Blanks Allowed | Key? |
|---|---|---|---|---|---|---|
| location_code | source_lookup.pdf | 3-letter code for the place | Text | CLD, MNT, RVR, SWP, etc. | No | Yes (primary key) |
| location_name | source_lookup.pdf | The full place name | Text | Any name | No | No |
| region | source_lookup.pdf | Which kingdom region it is in | Text | North, South, East, West | No | No |

---

## How The Files Link Together

- `source_primary.dragon_id` joins to `source_secondary.dragon_id`.
- `source_primary.origin_code` and `source_primary.destination_code` join to `source_lookup.location_code`.
- `source_secondary.base_location_code` also joins to `source_lookup.location_code`.

That is your map for the joins you will build in Workbook 3.
