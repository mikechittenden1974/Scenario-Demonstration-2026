# Wyrmwing Express — Data Dictionary

This dictionary explains every field in the four source files used by the
SD1 Training Pilot. Use it as a quick reference whenever a column name looks
unfamiliar, or when you want to remember which file a field comes from.

---

## File: 01_source_data/source_primary.xlsx

The main activity table. One row per delivery flight in the first three weeks
of last month. About forty rows.

| Field name      | Plain-English meaning                                               | Data type | Valid values / range                  | Blanks allowed | Key?         |
|-----------------|---------------------------------------------------------------------|-----------|---------------------------------------|----------------|--------------|
| delivery_id     | Unique reference for each flight, used on the docket.               | Text      | DEL-#### format.                      | No             | Primary key  |
| delivery_date   | The date the parcel was flown.                                      | Date      | Real calendar date.                   | No             | No           |
| dragon_id       | The dragon that flew the parcel.                                    | Text      | DR-### format. Joins to roster.       | No             | Foreign key  |
| route_code      | Short code for the flight route.                                    | Text      | Letters and digits, e.g. NW-12.       | No             | Foreign key  |
| parcel_count    | Number of parcels carried on that flight.                           | Whole #   | 1 to about 40.                        | No             | No           |
| weight_kg       | Total weight of the parcels in kilograms.                           | Decimal   | 0.5 to about 90.                      | A few          | No           |
| fee_coins       | Total fee paid to Wyrmwing for that flight, in gold coins.          | Whole #   | 5 to about 500.                       | A few          | No           |
| customer_id     | The customer who booked the flight.                                 | Text      | CUST-### format.                      | No             | No           |

## File: 01_source_data/source_append.csv

An extra week of activity, sent across by the Cloudfen station after the main
file was already saved. Same shape as `source_primary.xlsx`. About a dozen rows.

| Field name      | Plain-English meaning                                               | Data type | Valid values / range                  | Blanks allowed | Key?         |
|-----------------|---------------------------------------------------------------------|-----------|---------------------------------------|----------------|--------------|
| delivery_id     | Unique reference for each flight.                                   | Text      | DEL-#### format.                      | No             | Primary key  |
| delivery_date   | The date the parcel was flown.                                      | Date      | Real calendar date.                   | No             | No           |
| dragon_id       | The dragon that flew the parcel.                                    | Text      | DR-### format.                        | No             | Foreign key  |
| route_code      | Short code for the flight route.                                    | Text      | Letters and digits.                   | No             | Foreign key  |
| parcel_count    | Number of parcels carried on that flight.                           | Whole #   | 1 to about 40.                        | No             | No           |
| weight_kg       | Total weight of the parcels in kilograms.                           | Decimal   | 0.5 to about 90.                      | A few          | No           |
| fee_coins       | Total fee paid for that flight.                                     | Whole #   | 5 to about 500.                       | A few          | No           |
| customer_id     | The customer who booked the flight.                                 | Text      | CUST-### format.                      | No             | No           |

## File: 01_source_data/source_secondary.csv

The dragon roster. One row per dragon currently flying for Wyrmwing.

| Field name      | Plain-English meaning                                               | Data type | Valid values / range                  | Blanks allowed | Key?         |
|-----------------|---------------------------------------------------------------------|-----------|---------------------------------------|----------------|--------------|
| dragon_id       | Unique identifier for each dragon.                                  | Text      | DR-### format.                        | No             | Primary key  |
| dragon_name     | The dragon's name.                                                  | Text      | Free text, mostly title case.         | No             | No           |
| breed           | The dragon's breed.                                                 | Text      | One of a small set of breed labels.   | No             | No           |
| base_station    | Home station where the dragon is rostered.                          | Text      | Station name.                         | No             | No           |
| rider_name      | Lead rider for that dragon.                                         | Text      | Free text, mostly title case.         | A few          | No           |
| status          | Current flight status of the dragon.                                | Text      | Active, Resting, Training.            | No             | No           |

## File: 01_source_data/source_lookup.pdf

A printed reference card from the routing office. Lists every official route
code with a friendly name, a region and a distance band.

| Field name      | Plain-English meaning                                               | Data type | Valid values / range                  | Blanks allowed | Key?         |
|-----------------|---------------------------------------------------------------------|-----------|---------------------------------------|----------------|--------------|
| route_code      | Short code for the flight route.                                    | Text      | Letters and digits, e.g. NW-12.       | No             | Primary key  |
| route_name      | Friendly name for the route.                                        | Text      | Title case.                           | No             | No           |
| region          | Region of the sky the route flies in.                               | Text      | One of a small set of region labels.  | No             | No           |
| distance_band   | Rough distance category for the route.                              | Text      | Short, Medium, Long.                  | No             | No           |

---

## How the files connect

- `source_primary.xlsx` and `source_append.csv` are the same shape. They will be
  **appended** so all activity sits in a single table.
- The combined activity table connects to `source_secondary.csv` through
  `dragon_id`. This **merge** brings in the dragon name, breed and station.
- The combined activity table connects to `source_lookup.pdf` through
  `route_code`. This **merge** brings in the route name, region and distance
  band.
- One of the route codes in the activity table is not in the lookup. Postmaster
  Theo wants that left visible after the join, so we know to ask about it.
