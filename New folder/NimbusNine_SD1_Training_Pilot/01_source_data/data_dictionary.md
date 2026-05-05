# Data Dictionary

This dictionary explains every column in the three source files for the
Nimbus Nine SD1 Training Pilot.

## Source files

* `01_source_data/source_primary.xlsx` — main deliveries activity table
* `01_source_data/source_secondary.csv` — couriers roster
* `01_source_data/source_lookup.pdf` — routes reference table

## Plain English glossary

A **key** is a column used to match rows between tables.

A **join** brings columns from one table into another.

An **append** stacks rows underneath rows from another table with the same shape.

**Power Query** is Excel's tool for importing, cleaning and reshaping data.

## source_primary.xlsx (Deliveries)

| Field | Source | Meaning | Type | Valid values | Blanks allowed | Key |
|-------|--------|---------|------|--------------|----------------|-----|
| delivery_id | Deliveries | Unique code for each delivery | Text | D001 to D050 | No | Yes |
| courier_id | Deliveries | Code for the courier who flew the run | Text | C01 to C20 | No | Yes (joins to couriers) |
| route_code | Deliveries | Code for the route flown | Text | R01 to R08 (sometimes R09 in raw data) | No | Yes (joins to routes) |
| delivery_date | Deliveries | Date the run took place | Date | 2026-04-01 to 2026-04-25 | No | No |
| status | Deliveries | Outcome of the delivery | Text | Delivered, In Transit, Returned, Cancelled | No | No |
| cargo_type | Deliveries | Kind of cargo carried | Text | Standard, Fragile, Hazardous, Bulk | No | No |
| parcel_weight_kg | Deliveries | Weight of the parcel in kg | Number | 0 to 30 | Yes | No |
| fee_charged | Deliveries | Amount charged to the customer | Number | 0 to 100 | No | No |

## source_secondary.csv (Couriers)

| Field | Source | Meaning | Type | Valid values | Blanks allowed | Key |
|-------|--------|---------|------|--------------|----------------|-----|
| courier_id | Couriers | Code for the courier | Text | C01 to C20 | No | Yes |
| courier_name | Couriers | Full courier name | Text | Free text | No | No |
| ship_class | Couriers | Class of ship the courier flies | Text | Falcon-3, Comet-2, Nova-1 | No | No |
| member_tier | Couriers | Loyalty tier | Text | Bronze, Silver, Gold | No | No |
| email | Couriers | Contact email | Text | Standard email format | No | No |

## source_lookup.pdf (Routes)

| Field | Source | Meaning | Type | Valid values | Blanks allowed | Key |
|-------|--------|---------|------|--------------|----------------|-----|
| route_code | Routes | Code for the route | Text | R01 to R08 | No | Yes |
| route_name | Routes | Friendly name of the route | Text | Free text | No | No |
| sector | Routes | Sector served | Text | Sector 1 to Sector 6 | No | No |
| base_distance_au | Routes | Distance in astronomical units | Number | 0 to 5 | No | No |
| difficulty | Routes | Operational difficulty | Text | Easy, Medium, Hard | No | No |

## Things you may notice

* Some text fields have leading or trailing spaces.
* Some text values use mixed casing (such as "delivered" and "DELIVERED").
* Two rows in Deliveries are duplicated.
* A few `parcel_weight_kg` values are blank.
* One delivery uses route_code R09, which is not in the routes reference. This
  is the "unmatched" record we will keep visible during a Left Join.
