# DATA DICTIONARY — Drakonex Dragon Express

This document describes the three source files used in Scenario Demonstration 1.
The files are *linked, not duplicated*. Each file holds a different slice of the same weekend sprint.

---

## 1. source_primary.xlsx — `delivery_log`

The flight clerks' record of every parcel run during last weekend's sprint.

| Column           | Type   | Description                                                       |
|------------------|--------|-------------------------------------------------------------------|
| delivery_id      | text   | Unique reference for each delivery (e.g. `DLV-1042`).              |
| delivery_date    | date   | Date of the flight.                                                |
| dragon_id        | text   | Reference to the dragon used (e.g. `DRG-007`). Joins to dragons.   |
| route_code       | text   | Reference to the route (e.g. `RT-N03`). Joins to the route lookup. |
| depart_village   | text   | Where the parcel left from.                                        |
| arrive_village   | text   | Where the parcel was delivered.                                    |
| parcel_count     | number | How many parcels in the batch.                                     |
| distance_km      | number | Distance flown.                                                    |
| status           | text   | `Delivered`, `Returned`, `Late`, `Lost`.                           |

**Row count:** ~50 rows (deliberately includes a few duplicates and blanks).

### Known issues (left in deliberately for the learner to find)
- Two duplicate rows with identical `delivery_id`.
- Several blank `parcel_count` cells.
- Inconsistent capitalisation in village names (`LAVENDERHILL`, `Lavenderhill`, `lavenderhill`).
- Leading and trailing spaces in some `route_code` values.
- Inconsistent status wording (`Delivered`, `delivered`, `DELIVERED`, `Done`).
- One row references a `dragon_id` that does not exist in the dragon register.

---

## 2. source_secondary.csv — `dragons`

The roost-keepers' register of working dragons.

| Column                | Type | Description                                            |
|-----------------------|------|--------------------------------------------------------|
| dragon_id             | text | Unique reference (e.g. `DRG-007`). Joins to deliveries.|
| dragon_name           | text | The dragon's name.                                     |
| breed                 | text | E.g. `Hearthback`, `Mistwing`, `Cinder-tail`.          |
| max_load_kg           | number | Maximum carrying capacity in kilograms.              |
| last_inspection_date  | date | Most recent vet inspection.                            |
| status                | text | `Active`, `Resting`, `Training`.                       |

**Row count:** 18 rows.

### Known issues
- One `dragon_name` has trailing whitespace.
- One `max_load_kg` value is blank.
- Mixed casing in `breed` column (`Hearthback` and `hearthback`).

---

## 3. source_lookup.pdf — `routes_reference`

Printed reference table from the Operations wall. Lists each route code and what it means.

| Column       | Type | Description                                              |
|--------------|------|----------------------------------------------------------|
| route_code   | text | Unique reference (e.g. `RT-N03`). Joins to deliveries.   |
| route_name   | text | Friendly name (e.g. `Northern Misty Pass`).              |
| region       | text | One of `North`, `South`, `East`, `West`, `Central`.      |
| terrain_type | text | One of `Mountain`, `Forest`, `Coastal`, `Plains`, `Marsh`.|
| typical_km   | number | Typical distance for the route.                        |

**Row count:** 8 routes.

### Known issues
- None. This file is clean. Learners will use it as a trustworthy reference.

---

## How the files connect

```
delivery_log (primary)
    ├── dragon_id   ─────►  dragons.dragon_id
    └── route_code  ─────►  routes_reference.route_code
```

In Workbook 3, you will:
1. **Merge** `delivery_log` with `routes_reference` to add route name, region and terrain.
2. **Merge** `delivery_log` with `dragons` to add dragon name and breed.
3. **Validate** that all delivery rows survived the join, and that no unexpected blanks appeared.

You will also see a small **append** example, where two date-split copies of the delivery log are stacked back together. This is to demonstrate the difference between merging (adding columns) and appending (stacking rows).
