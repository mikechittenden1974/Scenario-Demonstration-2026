# Data Dictionary
## Wyrm & Wings Dragon Delivery Co. — SD1 Training Pilot

---

## source_primary.xlsx — Northern Depot Delivery Records

Sheet: `deliveries`
Row count: 43 (including 2 duplicate rows and 1 blank dragon_id)

| Field | Data Type | Meaning | Valid Values / Range | Blanks Allowed | Key Field |
|-------|-----------|---------|----------------------|----------------|-----------|
| delivery_id | Text | Unique identifier for each delivery record. Format: DEL-NNN | DEL-001 to DEL-999 | No | Yes — primary key |
| route_code | Text | Code identifying the delivery route taken | RT-01 to RT-06 (see source_lookup.pdf) | No | Yes — foreign key to source_lookup.pdf |
| dragon_id | Text | ID of the dragon that made the delivery. Format: DRG-NN | DRG-01 to DRG-20 (see source_secondary.csv) | One intentional blank (DEL-043) | Yes — foreign key to source_secondary.csv |
| delivery_date | Text (date as text) | Date the delivery was made | YYYY-MM-DD format | No | No |
| package_weight_kg | Number | Weight of the delivered package in kilograms | 1.0 to 100.0 expected; one outlier at 280.0 | No | No |
| status | Text | Outcome of the delivery | Complete, Delayed, Failed | No | No |
| notes | Text | Optional free-text notes about the delivery | Any text; many cells are blank | Yes | No |

**Known data quality issues in source_primary.xlsx:**
- `status` column contains inconsistent casing: `complete`, `COMPLETE`, `Completed`, ` complete` (with leading space)
- Row DEL-021 has a leading space in the status value
- Row DEL-013 has an unusually high `package_weight_kg` of 280.0 kg
- Row DEL-009 contains `dragon_id` = `DRG-99` which does not exist in source_secondary.csv
- Row DEL-043 has a blank `dragon_id`
- Rows 41 and 42 are full-row duplicates of DEL-007 and DEL-019 respectively
- Many `notes` cells are intentionally blank

---

## source_append.csv — Southern Depot Delivery Records

Row count: 12

| Field | Data Type | Meaning | Valid Values / Range | Blanks Allowed | Key Field |
|-------|-----------|---------|----------------------|----------------|-----------|
| delivery_id | Text | Unique identifier for each delivery. Format: DEL-NNN | DEL-101 to DEL-112 | No | Yes — primary key |
| route_code | Text | Code identifying the delivery route | RT-02, RT-04, RT-06 | No | Yes — foreign key |
| dragon_id | Text | ID of the dragon that made the delivery | DRG-04, DRG-07, DRG-11 | No | Yes — foreign key |
| delivery_date | Text (date as text) | Date the delivery was made | YYYY-MM-DD format | No | No |
| package_weight_kg | Number | Weight of the package in kilograms | 8.0 to 41.0 in this file | No | No |
| status | Text | Outcome of the delivery | Complete, Delayed, Failed (one lowercase: `complete`) | No | No |
| notes | Text | Optional notes | Text or blank | Yes | No |

**Note:** source_append.csv has the same column structure as source_primary.xlsx.
This is deliberate — it allows the two tables to be appended in Power Query.

---

## source_secondary.csv — Dragon Registry

Row count: 20

| Field | Data Type | Meaning | Valid Values / Range | Blanks Allowed | Key Field |
|-------|-----------|---------|----------------------|----------------|-----------|
| dragon_id | Text | Unique ID for each registered dragon. Format: DRG-NN | DRG-01 to DRG-20 | No | Yes — primary key |
| dragon_name | Text | The dragon's given name | Any text | No | No |
| breed | Text | Dragon breed classification | Firewing, Ashscale, Cloudpuff, Icewing, Stormwing, Stonewing | No | No |
| handler | Text | The member of staff responsible for this dragon | Beatrix Flameholt, Gideon Scales, Nora Ashwick | No | No |
| base_depot | Text | The depot this dragon is assigned to | Northern, Southern | No | No |
| registered_year | Number | Year the dragon was registered with the company | 2018–2023 | No | No |

**Note:** DRG-99 does not appear in this file. This is intentional.
It creates one unmatched record after a Left Join with the delivery data.

---

## source_lookup.pdf — Route Reference Table

Row count: 6

| Field | Data Type | Meaning | Valid Values / Range | Blanks Allowed | Key Field |
|-------|-----------|---------|----------------------|----------------|-----------|
| route_code | Text | Unique code for each delivery route | RT-01 to RT-06 | No | Yes — primary key |
| route_name | Text | Full descriptive name of the route | Any text | No | No |
| region | Text | Geographic region served by the route | Northern Highlands, Mountain Range, Forest District, Lowland Valley, Coastal Region, Southern Plains | No | No |
| difficulty_rating | Text | How challenging the route is for dragons | Easy, Low, Medium, High | No | No |

---

## Key Relationships

```
source_primary.xlsx ──────── route_code ──────► source_lookup.pdf
source_append.csv   ──────── route_code ──────► source_lookup.pdf

source_primary.xlsx ──────── dragon_id  ──────► source_secondary.csv
source_append.csv   ──────── dragon_id  ──────► source_secondary.csv
```

- The delivery files share structure and can be **appended** (rows stacked).
- After appending, the combined table can be **merged** with source_lookup.pdf using `route_code`.
- The combined table can also be **merged** with source_secondary.csv using `dragon_id`.

---

## Intentional Learning Opportunities

| Issue | Where | Purpose |
|-------|-------|---------|
| Inconsistent status casing | source_primary.xlsx, source_append.csv | Practise Replace Values and Trim/Clean |
| Leading space in status | source_primary.xlsx row 21 | Practise Trim |
| 2 full-row duplicate rows | source_primary.xlsx rows 41–42 | Practise Remove Duplicates (whole table) |
| 1 blank dragon_id | source_primary.xlsx DEL-043 | Practise handling blanks |
| DRG-99 unregistered | source_primary.xlsx DEL-009 | Creates one Left Join unmatched record |
| 280.0 kg outlier | source_primary.xlsx DEL-013 | Simple pattern spotting |
| RT-04 most frequent | source_primary.xlsx | Simple pattern spotting |
| RT-06 only in append | source_append.csv | Post-append pattern spotting |
