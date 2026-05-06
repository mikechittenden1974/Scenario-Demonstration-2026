# Dragon Express Delivery Co. — Data Dictionary

## How to use this document

This data dictionary explains every field in every source file used in the SD1 Training Pilot. Refer to it whenever you want to check what a field means, what values are valid, or whether blanks are expected.

---

## File: 01_source_data/source_primary.xlsx

**Description:** Q3 delivery log (July to August 2025). This is the main activity table. Each row represents one delivery attempt by one dragon on one route.

| Field | Data Type | Meaning | Valid Values / Range | Blanks Allowed? | Key Field? |
|---|---|---|---|---|---|
| delivery_id | Text | Unique identifier for each delivery. Format: DEL-NNN | DEL-001 to DEL-999 | No | Yes — primary key |
| dragon_id | Text | Identifier for the dragon that made the delivery. Format: DRG-NNN | DRG-001 to DRG-020 | No | Yes — foreign key → source_secondary.csv |
| route_code | Text | Code for the route taken. Format: RT-NNN | RT-001 to RT-007 (authorised). RT-X99 is not authorised. | No | Yes — foreign key → source_lookup.pdf |
| delivery_date | Date | Date the delivery was made or attempted | 2025-07-01 to 2025-08-31 | No | No |
| package_type | Text | Category of parcel. Should be one consistent value | Express, Standard, Fragile | No | No |
| status | Text | Outcome of the delivery attempt | Completed, In Transit, Failed | Yes — but should be investigated | No |
| weight_kg | Decimal | Weight of the parcel in kilograms | 1.0 to 25.0 | No | No |
| delivery_time_mins | Integer | Actual time taken for the delivery in minutes | 40 to 200 | No | No |
| notes | Text | Free-text notes added by the dispatcher | Any text, or blank | Yes | No |

**Known issues in this file:**
- delivery_id DEL-019 appears twice (full duplicate row)
- One dragon_id has a leading space: ` DRG-009` should be `DRG-009`
- package_type has inconsistent casing: Express, EXPRESS, express, STANDARD
- status is blank in three rows (rows 29, 33 and 36 in the raw data)
- route_code RT-X99 does not appear in source_lookup.pdf

---

## File: 01_source_data/source_append.csv

**Description:** Q4 delivery log (October 2025). This file has the same structure as source_primary.xlsx. It is used in Workbook 3 to practise appending — stacking these rows underneath the cleaned Q3 records.

| Field | Data Type | Meaning | Valid Values / Range | Blanks Allowed? | Key Field? |
|---|---|---|---|---|---|
| delivery_id | Text | Unique identifier for each delivery | DEL-041 to DEL-052 | No | Yes — primary key |
| dragon_id | Text | Dragon identifier | DRG-001 to DRG-012 | No | Yes — foreign key → source_secondary.csv |
| route_code | Text | Route code | RT-001 to RT-007 | No | Yes — foreign key → source_lookup.pdf |
| delivery_date | Date | Date of delivery or attempt | 2025-10-01 to 2025-10-16 | No | No |
| package_type | Text | Category of parcel | Express, Standard, Fragile | No | No |
| status | Text | Outcome of the delivery attempt | Completed, In Transit, Failed | No | No |
| weight_kg | Decimal | Weight of parcel in kilograms | 1.0 to 25.0 | No | No |
| delivery_time_mins | Integer | Actual delivery time in minutes | 40 to 200 | No | No |
| notes | Text | Free-text notes | Any text, or blank | Yes | No |

**Known issues in this file:**
- package_type has casing inconsistencies: EXPRESS, express

---

## File: 01_source_data/source_secondary.csv

**Description:** Dragon profiles from the DEDC HR system. Each row represents one dragon registered with the company. This file is merged with the delivery log using dragon_id.

| Field | Data Type | Meaning | Valid Values / Range | Blanks Allowed? | Key Field? |
|---|---|---|---|---|---|
| dragon_id | Text | Unique identifier for each dragon. Format: DRG-NNN | DRG-001 to DRG-020 | No | Yes — primary key |
| dragon_name | Text | Dragon's registered name | Any text | No | No |
| breed | Text | Dragon breed category | Fire Drake, Ridge Flyer, Cloud Glider, Cave Drake | No | No |
| home_base | Text | The depot the dragon is based at | Ashford Keep, Stonegate, High Perch, Deeprock | No | No |
| max_load_kg | Integer | Maximum parcel weight the dragon can carry | 15 to 25 | No | No |
| active | Text | Whether the dragon is currently active | Yes, No | No | No |
| joined_year | Integer | Year the dragon joined the DEDC fleet | 2014 to 2025 | No | No |

**Known issues in this file:**
- breed has inconsistent casing: fire drake, CLOUD GLIDER, Fire Drake
- dragon_name has a double space in one row: Glimmer  Peak should be Glimmer Peak
- DRG-013, DRG-014, and DRG-019 are inactive (active = No) but still appear in this table

---

## File: 01_source_data/source_lookup.pdf

**Description:** Official route reference table. Lists every authorised DEDC route code with its full name, region, terrain type, and typical delivery time. This file is merged with the delivery log using route_code.

| Field | Data Type | Meaning | Valid Values / Range | Blanks Allowed? | Key Field? |
|---|---|---|---|---|---|
| route_code | Text | Unique identifier for each route. Format: RT-NNN | RT-001 to RT-007 | No | Yes — primary key |
| route_name | Text | Full descriptive name of the route | See table below | No | No |
| region | Text | Geographic region the route serves | Western Shore, Central Plains, Northern Highlands, Eastern Woodland, Southern Wetlands | No | No |
| terrain_type | Text | Type of terrain on the route | Coastal, Lowland, Mountain, Forest, Wetland | No | No |
| typical_time_mins | Integer | Expected delivery time in minutes under standard conditions | 48 to 85 | No | No |

**Reference values:**

| route_code | route_name | region | terrain_type | typical_time_mins |
|---|---|---|---|---|
| RT-001 | Coastline Run | Western Shore | Coastal | 60 |
| RT-002 | Valley Loop | Central Plains | Lowland | 55 |
| RT-003 | Northern Mountains | Northern Highlands | Mountain | 48 |
| RT-004 | Deep Forest Trail | Eastern Woodland | Forest | 85 |
| RT-005 | Marsh Crossing | Southern Wetlands | Wetland | 75 |
| RT-006 | Cliff Edge Path | Western Shore | Coastal | 65 |
| RT-007 | Highland Shortcut | Northern Highlands | Mountain | 52 |

**Note:** RT-X99 does not appear in this table. Any delivery record using RT-X99 is not on an authorised route and should be flagged for review.

---

## Key field relationships

```
source_primary.xlsx  ─── dragon_id ──►  source_secondary.csv
source_primary.xlsx  ─── route_code ──► source_lookup.pdf
source_append.csv    ─── dragon_id ──►  source_secondary.csv
source_append.csv    ─── route_code ──► source_lookup.pdf
```

---

*Document reference: DEDC-DATA-DICT-2025 | Author: Flick Pebble, Data Coordinator*
