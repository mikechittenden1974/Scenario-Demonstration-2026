# Data Dictionary — Apex Sports Academy
## Session Booking and Member Engagement Analysis 2024

**Maintained by:** Jamie (Data Analyst)  
**Version:** 1.0 | May 2024  
**Covers:** source_primary.xlsx · source_secondary.csv · source_lookup.pdf · SD1_COMPLETE.xlsx · SD2_START.xlsx

---

## 1. source_primary.xlsx — Session Bookings

| Field | Data Type | Source File | Meaning | Valid Values / Range | Null Allowed | Key Field? |
|---|---|---|---|---|---|---|
| booking_id | Text | source_primary.xlsx | Unique identifier for each booking | BK001 – BK999 format | No | PRIMARY KEY |
| member_id | Text | source_primary.xlsx | Identifier linking to Members table | MBR001 – MBR999 format | No | FOREIGN KEY → Members |
| session_date | Date | source_primary.xlsx | Date the session took place | 2024-01-01 – 2024-12-31 | No | Used in composite lookups |
| session_time | Text | source_primary.xlsx | Start time of the session | HH:MM 24-hour format | No | No |
| facility_code | Text | source_primary.xlsx | Code identifying the facility used | FAC01–FAC05 | No | FOREIGN KEY → Facility_Lookup |
| session_type | Text | source_primary.xlsx | Type of session booked | Boxing, Pilates, Spin, Swim, Yoga | No | FOREIGN KEY → Session_Lookup |
| coach_id | Text | source_primary.xlsx | Identifier for the coach who led the session | C01–C05 | Yes (swim/uncoached) | No |
| attendance_status | Text | source_primary.xlsx | Whether the member attended | Attended, No-Show, Cancelled, Unknown | No (replace nulls) | No |
| booking_source | Text | source_primary.xlsx | Channel through which booking was made | App, Online, Reception | No | No |
| fee_paid | Decimal Number | source_primary.xlsx | Amount charged for the session in GBP | 0.00 – 15.00 | No (replace nulls with 0) | No |

**Known Data Quality Issues in Raw Source:**
- `session_type`: inconsistent casing (yoga, YOGA, Yoga) — standardise to Title Case
- `attendance_status`: 9 null values — replace with "Unknown"; 3 rows lowercase
- `booking_source`: leading/trailing spaces in 2 rows — apply Trim and Clean
- `fee_paid`: 8 null values — replace with 0; 1 row has both status and fee null
- `booking_id`: 3 duplicate rows (BK002, BK007, BK013) — remove full duplicates
- `member_id`: MBR099 appears in bookings but not in Members table — retain with null member fields (Left Join)

---

## 2. source_secondary.csv — Members

| Field | Data Type | Source File | Meaning | Valid Values / Range | Null Allowed | Key Field? |
|---|---|---|---|---|---|---|
| member_id | Text | source_secondary.csv | Unique identifier for each member | MBR001 – MBR999 format | No | PRIMARY KEY |
| first_name | Text | source_secondary.csv | Member's first name | Free text | No | No |
| last_name | Text | source_secondary.csv | Member's last name | Free text | No | No |
| date_of_birth | Date | source_secondary.csv | Member's date of birth | Date format YYYY-MM-DD | No | No |
| age | Whole Number | source_secondary.csv | Member's age in years at time of export | 16–100 | No | No |
| membership_type | Text | source_secondary.csv | Tier of membership held | Bronze, Silver, Gold, Platinum | No | FOREIGN KEY → Membership_Lookup |
| join_date | Date | source_secondary.csv | Date the member first joined Apex | 2015-01-01 – 2024-12-31 | No | No |
| postcode | Text | source_secondary.csv | Member's home postcode | UK postcode format | Yes (replace with "Not Provided") | No |
| gender | Text | source_secondary.csv | Member's self-reported gender | Male, Female, Non-Binary, Prefer not to say | No | No |
| email | Text | source_secondary.csv | Member's contact email address | Valid email format | No | No |
| status | Text | source_secondary.csv | Whether the member's account is currently active | Active, Inactive | No | No |

**Known Data Quality Issues in Raw Source:**
- `membership_type`: casing inconsistencies (gold, PLATINUM, silver) — standardise to Title Case
- `postcode`: 3 null values (MBR034, MBR127, MBR235) — replace with "Not Provided"
- `member_id`: 1 duplicate row (MBR023 Diane Nguyen appears twice) — remove duplicate
- `age`: stored as text in some rows — set data type to Whole Number in Power Query

---

## 3. source_lookup.pdf — Facility and Session Reference

### 3a. Facility Reference

| Field | Data Type | Source File | Meaning | Valid Values / Range | Null Allowed | Key Field? |
|---|---|---|---|---|---|---|
| facility_code | Text | source_lookup.pdf | Unique code for each facility | FAC01–FAC05 | No | PRIMARY KEY |
| facility_name | Text | source_lookup.pdf | Plain-English name of the facility | Free text | No | No |
| location | Text | source_lookup.pdf | Location within the building | Ground Floor, First Floor, Basement, Second Floor | No | No |
| capacity | Whole Number | source_lookup.pdf | Maximum number of participants per session | 1–100 | No | No |
| opening_hours | Text | source_lookup.pdf | Daily operating hours | HH:MM–HH:MM format | No | No |

### 3b. Session Type Reference

| Field | Data Type | Source File | Meaning | Valid Values / Range | Null Allowed | Key Field? |
|---|---|---|---|---|---|---|
| session_type | Text | source_lookup.pdf | Name of the session type | Boxing, Pilates, Spin, Swim, Yoga | No | PRIMARY KEY |
| standard_code | Text | source_lookup.pdf | 3-letter code for the session | BOX, PLT, SPN, SWM, YGA | No | No |
| duration_mins | Whole Number | source_lookup.pdf | Length of the session in minutes | 30–90 | No | No |
| price_band | Text | source_lookup.pdf | Category determining the standard fee | Low, Standard, Premium | No | FOREIGN KEY → Price_Lookup |
| coach_required | Text | source_lookup.pdf | Whether a coach must be present | Yes, No | No | No |

### 3c. Price Band Reference

| Field | Data Type | Source File | Meaning | Valid Values / Range | Null Allowed | Key Field? |
|---|---|---|---|---|---|---|
| price_band | Text | source_lookup.pdf | Fee category label | Low, Standard, Premium | No | PRIMARY KEY |
| standard_fee | Decimal Number | source_lookup.pdf | Standard session fee in GBP | 8.00, 12.00, 15.00 | No | No |

### 3d. Membership Tier Reference

| Field | Data Type | Source File | Meaning | Valid Values / Range | Null Allowed | Key Field? |
|---|---|---|---|---|---|---|
| membership_type | Text | source_lookup.pdf | Name of the membership tier | Bronze, Silver, Gold, Platinum | No | PRIMARY KEY |
| monthly_fee | Decimal Number | source_lookup.pdf | Monthly subscription cost in GBP | 25.00–85.00 | No | No |
| booking_discount_pct | Whole Number | source_lookup.pdf | Percentage discount on session fees | 0, 10, 20, 30 | No | No |

---

## 4. SD1_COMPLETE.xlsx / SD2_START.xlsx — Final Merged Dataset

This table contains all fields from sections 1–3 above, plus the following calculated columns added during SD1 Power Query transformation:

| Field | Data Type | Derived From | Meaning | Valid Values | Null Allowed | Key Field? |
|---|---|---|---|---|---|---|
| first_name | Text | Members | Member's first name (joined from Members table) | Free text; null if member not found | Yes (unmatched) | No |
| last_name | Text | Members | Member's last name (joined from Members table) | Free text; null if member not found | Yes (unmatched) | No |
| membership_type | Text | Members | Cleaned membership tier (joined from Members) | Bronze, Silver, Gold, Platinum | Yes (unmatched) | No |
| facility_name | Text | Facility_Lookup | Plain-English facility name (joined from lookup) | Studio A, Spin Suite, Aquatics Centre, Combat Zone, Wellness Room | No | No |
| price_band | Text | Session_Lookup | Price band for the session type | Low, Standard, Premium | No | No |
| booking_month | Text | session_date | Calendar month name derived in Power Query | January–December | No | No |
| quarter | Text | session_date | Financial/calendar quarter derived in Power Query | Q1, Q2, Q3, Q4 | No | No |
| attended_flag | Text | attendance_status | Conditional column: Yes if Attended, No otherwise | Yes, No | No | No |
| fee_category | Text | fee_paid | Conditional column classifying fee level | Free/Cancelled, Low, Standard, Premium | No | No |
| member_full_name | Text | first_name + last_name | Combined full name for display and analysis | Free text; "Unknown" if no match | No | No |

---

## 5. Relationship Diagram

```
source_primary.xlsx (Session_Bookings)
    ├── member_id ────────────────────► source_secondary.csv (Members)
    ├── facility_code ────────────────► source_lookup.pdf (Facility_Lookup)
    └── session_type ─────────────────► source_lookup.pdf (Session_Lookup)
                                              └── price_band ──► source_lookup.pdf (Price_Lookup)
```

**Join Types Used in SD1:**
- Bookings → Members: **Left Outer Join** (keeps all bookings; nulls where no member match)
- Bookings → Facility_Lookup: **Left Outer Join** (all facility codes should match; flag any nulls)
- Bookings → Session_Lookup: **Left Outer Join** (all session types should match after cleaning)

---

## 6. Data Confidence Levels

| Field Group | Confidence | Notes |
|---|---|---|
| booking_id, session_date, fee_paid | High | Clean, validated, no substitutions made |
| attendance_status | Medium | 9 nulls replaced with "Unknown" — true status not known |
| fee_paid (0 values) | Medium | Nulls replaced with 0 — some may represent waived fees not errors |
| postcode | Medium | 3 values replaced with "Not Provided" — not available for analysis |
| PDF lookup data | Medium | PDF imports can be unreliable — verify against original document |
| MBR099 (BK121) | Low | No member record found — retained with nulls; exclude from member analysis |

