# Agricultural Extension — Farm Records Integration Contract

**Status:** Proposed interface contract; no integration is claimed.  
**Canonical programme:** [AgriSage360 Agricultural Extension Programme](https://github.com/faroukpandor/AGRISAGE/blob/main/docs/AGRICULTURAL-EXTENSION-PROGRAMME-2026-10-23.md)

## Boundary

SmartFarm is the potential canonical home for operational farm records and production workflows where that role is confirmed. AgriSage360 owns extension advisory, content and officer case triage. Neither system should silently become the source of truth for every record.

## Minimum integration principles

- Define record ownership, identifiers, permitted purposes, retention and export before building a connector.
- Share only the smallest data set needed for a farmer-authorised workflow.
- Use stable farm/case references where possible; avoid exposing public farm coordinates or unnecessary personal data.
- Keep provenance, created/updated timestamps, source and correction history.
- Make sync state visible; handle offline work, duplicate submissions and conflicts explicitly.
- Allow human review and correction; do not overwrite a newer or authoritative record without a declared rule.
- Provide export and practical deletion/retention handling consistent with legal duties and legitimate recordkeeping requirements.
- Document authentication, permissions, audit events, error handling and failure fallback.

## Proposed minimum event vocabulary

A future contract may map events such as `farmer_consent_recorded`, `farm_activity_logged`, `extension_case_opened`, `referral_requested`, `referral_completed` and `follow_up_due`. These are design examples, not existing API events. No endpoint, schema, authentication mechanism or live sync should be promised until implemented and tested.

## Acceptance gates

Demonstrate consent and role enforcement, offline completion, safe conflict handling, auditability, export, failure recovery and tests using synthetic data before any real farmer data is connected. Confirm compatibility with the actual repository architecture first. This contract does not assert that SmartFarm currently provides these functions.
