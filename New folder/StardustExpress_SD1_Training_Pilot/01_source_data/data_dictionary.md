# Data Dictionary - Stardust Express SD1 Pilot

This dictionary explains every field across the four source files used in this training pilot. Use it as a friendly reference when you are not sure what a column means.

A **key** is a column used to match rows between tables. Keys appear in the rightmost column below.

---

## File 1: source_primary.xlsx

Sheet name: Deliveries.

The main delivery records for the quarter.

| field name | source file | plain-English meaning | data type | valid values or range | blanks allowed | key |
| --- | --- | --- | --- | --- | --- | --- |
| delivery_id | source_primary.xlsx | A unique code for each delivery | Text | SE-001 to SE-040 | No | Yes (primary key) |
| delivery_date | source_primary.xlsx | The day the delivery was made | Date | 2026-04-01 to 2026-04-20 | No | No |
| route_code | source_primary.xlsx | Code for the route used | Text | R01 to R08 | No | Yes (foreign key to source_lookup.pdf) |
| courier_id | source_primary.xlsx | Code for the courier who delivered | Text | C001 to C018 | No | Yes (foreign key to source_secondary.csv) |
| parcel_type | source_primary.xlsx | The kind of parcel delivered | Text | Glow-Tulips, Spare Bolts, Star Maps, Comet Dust, Engine Oil | Sometimes (one is blank in the pilot) | No |
| weight_kg | source_primary.xlsx | The parcel weight in kilograms | Decimal | 0.5 to about 25 typical | Sometimes (one is blank in the pilot) | No |
| status | source_primary.xlsx | Whether the delivery is complete | Text | Delivered, Pending | No | No |

Note: the casing in parcel_type and status is inconsistent in the raw data. You will tidy this up in Workbook 2.

---

## File 2: source_append.csv

Extra delivery rows that arrived late and need to be added to the main table. The structure is identical to source_primary.xlsx so the two files can be appended.

| field name | source file | plain-English meaning | data type | valid values or range | blanks allowed | key |
| --- | --- | --- | --- | --- | --- | --- |
| delivery_id | source_append.csv | Unique code for each late delivery | Text | SE-041 to SE-052 | No | Yes |
| delivery_date | source_append.csv | The day the delivery was made | Date | 2026-04-21 to 2026-04-26 | No | No |
| route_code | source_append.csv | Code for the route used | Text | R01 to R05 | No | Yes |
| courier_id | source_append.csv | Code for the courier who delivered | Text | C001 to C007 | No | Yes |
| parcel_type | source_append.csv | The kind of parcel delivered | Text | Glow-Tulips, Spare Bolts, Star Maps, Comet Dust, Engine Oil | No | No |
| weight_kg | source_append.csv | The parcel weight in kilograms | Decimal | 0.5 to about 20 | No | No |
| status | source_append.csv | Whether the delivery is complete | Text | Delivered, Pending | No | No |

---

## File 3: source_secondary.csv

The list of couriers who fly for Stardust Express.

| field name | source file | plain-English meaning | data type | valid values or range | blanks allowed | key |
| --- | --- | --- | --- | --- | --- | --- |
| courier_id | source_secondary.csv | Unique code for each courier | Text | C001 to C018 | No | Yes (primary key) |
| courier_name | source_secondary.csv | The courier's full name | Text | Free text | No | No |
| ship_class | source_secondary.csv | The class of ship the courier flies | Text | Skipper-IV, Cruiser-II, Hauler-IX | No | No |
| home_station | source_secondary.csv | Where the courier is based | Text | Hopper Station, Tinwheel Outpost, Big Joe Drydock | Sometimes (one is blank in the pilot) | No |
| years_service | source_secondary.csv | Years the courier has been flying for us | Whole number | 0 to 20 | No | No |

---

## File 4: source_lookup.pdf

A printed reference sheet that lists the active delivery routes.

| field name | source file | plain-English meaning | data type | valid values or range | blanks allowed | key |
| --- | --- | --- | --- | --- | --- | --- |
| route_code | source_lookup.pdf | Unique code for each route | Text | R01, R02, R03, R04, R05, R07, R08 | No | Yes (primary key) |
| route_name | source_lookup.pdf | A friendly name for the route | Text | Free text | No | No |
| sector | source_lookup.pdf | The sector the route serves | Text | Sector A to Sector G | No | No |
| distance_lightyears | source_lookup.pdf | Approximate one-way distance in light years | Decimal | 1.0 to 10.0 | No | No |

---

## How the files connect

- source_primary.xlsx and source_append.csv share the same columns, so they can be **appended** (stacked underneath each other).
- source_primary.xlsx links to source_secondary.csv through **courier_id**.
- source_primary.xlsx links to source_lookup.pdf through **route_code**.

Glossary refresher:

- An **append** stacks rows underneath existing rows.
- A **join** brings columns from one table into another.
- A **key** is the column used to match rows between tables.
