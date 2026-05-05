# Goblin Parcel Service — Data Dictionary

## source_primary.xlsx and source_append.csv

These files share the same structure. `source_primary.xlsx` contains January–February delivery records. `source_append.csv` contains March delivery records to be appended.

| Field | Plain English | Data Type | Valid Values / Range | Blanks Allowed | Key |
|---|---|---|---|---|---|
| `delivery_id` | Unique identifier for each delivery | Text | GPS-001 to GPS-999 format | No | Primary key |
| `route_code` | Code identifying the delivery route | Text | R01–R06 (R99 = invalid) | No | Foreign key → source_lookup |
| `courier_id` | Code identifying the courier dragon | Text | DRG-01 to DRG-99 format | No | Foreign key → source_secondary |
| `parcel_type` | Category of the parcel | Text | Standard, Express, Fragile | No | — |
| `weight_kg` | Weight of the parcel in kilograms | Number | 0.1 – 100.0 (typical range) | Yes | — |
| `dispatch_date` | Date the parcel was sent | Date | YYYY-MM-DD format | No | — |
| `delivery_date` | Date the parcel was delivered | Date | YYYY-MM-DD format | No | — |
| `status` | Current delivery status | Text | Delivered, In Transit, Delayed | No | — |
| `customer_ref` | Reference code for the customer | Text | CUST-101 to CUST-999 format | No | — |
| `notes` | Free-text notes from the courier | Text | Any text | Yes | — |

**Known data quality issues in source_primary.xlsx:**
- `delivery_id` GPS-015 appears twice (duplicate row)
- `parcel_type` contains mixed casing: Standard, standard, STANDARD
- `status` contains mixed casing: Delivered, DELIVERED, delivered
- `courier_id` has leading spaces on two rows
- `weight_kg` is blank on two rows
- `weight_kg` for GPS-022 is 999 — this looks suspicious
- `route_code` R99 on GPS-030 does not exist in the lookup table
- `notes` is blank on three rows (this is allowed)

---

## source_secondary.csv

Courier dragon details.

| Field | Plain English | Data Type | Valid Values / Range | Blanks Allowed | Key |
|---|---|---|---|---|---|
| `courier_id` | Unique identifier for each courier dragon | Text | DRG-01 to DRG-99 format | No | Primary key |
| `courier_name` | Full name of the courier dragon | Text | Any text | No | — |
| `dragon_type` | Breed or type of the dragon | Text | Any text | No | — |
| `home_base` | The depot the dragon operates from | Text | Northern Depot, Eastern Hub, Central Base, Western Outpost, Southern Base | No | — |
| `max_weight_kg` | Maximum weight the dragon can carry | Number | 10.0 – 100.0 | No | — |
| `license_class` | Courier licence classification | Text | Class A, Class B, Class C | No | — |
| `active` | Whether the dragon is currently active | Text | Y or N | No | — |

**Note:** Three dragons (DRG-04, DRG-10, DRG-16) are marked as inactive (active = N).

---

## source_lookup.pdf

Route classification reference table. Used to classify each delivery by zone and priority.

| Field | Plain English | Data Type | Valid Values / Range | Blanks Allowed | Key |
|---|---|---|---|---|---|
| `route_code` | Unique identifier for each route | Text | R01–R06 | No | Primary key |
| `route_name` | Descriptive name of the route | Text | Any text | No | — |
| `zone` | Geographic zone of the route | Text | Central, Northern, Southern, Eastern | No | — |
| `standard_days` | Expected delivery time in days | Number | 1–3 | No | — |
| `priority_level` | Service priority of the route | Text | Standard, Express, Remote | No | — |

**Note:** Route R99 does not exist in this table. Deliveries logged with R99 will not match during the merge.

---

## Key Relationships

```
source_primary.xlsx  ──── route_code ────►  source_lookup.pdf
source_primary.xlsx  ──── courier_id ────►  source_secondary.csv
source_append.csv    ──── route_code ────►  source_lookup.pdf
source_append.csv    ──── courier_id ────►  source_secondary.csv
```

Both activity files (source_primary and source_append) share the same structure and can be appended before merging with the lookup and secondary tables.
