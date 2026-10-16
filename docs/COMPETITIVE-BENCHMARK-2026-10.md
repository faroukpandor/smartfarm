# Competitive Benchmark — SmartFarm (Botswana)

**Date:** 16 October 2026 | **Purpose:** feature and workflow benchmarks, not a promise of superiority.

## Competitor baseline
Farmbrite publicly advertises whole-farm records, crops, livestock, inventory, finance, traceability, roles/permissions, reports, mobile use and offline record capture. Its help centre explains an offline Scout Mode that syncs selected records after reconnecting. FarmERP positions itself as enterprise agriculture ERP covering field operations, contract farming, logistics, traceability and predictive intelligence. Both are useful benchmarks; do not copy proprietary code or assume their plans/prices are suitable for Botswana.

## Required SmartFarm differentiators
1. Offline-first core flows with tested sync recovery and conflict handling.
2. Simple crop/livestock/input/labour/water/task/finance records that work on low-end phones.
3. Farmer-owned CSV/JSON export/import and documented schemas.
4. BWP budgets, gross-margin and cash-flow projections with visible assumptions.
5. Local crop/season/district configurations only where sources exist and are current.
6. Audit trail for edits, evidence attachments and consent-based sharing with AgriSage/AgriSolutions.
7. Traceability records that do not pretend to replace BAITS/LITS, official records or certification.
8. Low complexity and modular adoption rather than enterprise feature overload.

## Minimum acceptance tests before claiming a differentiator
- Create, edit and export a full season with no internet.
- Reconnect after duplicate edits and prove conflict resolution is visible and lossless.
- Export, delete and re-import anonymised sample data.
- Test role permissions with at least farmer, worker and adviser roles.
- Demonstrate farm economics from real sample data and expose assumptions.
- Compare a representative farmer workflow with paper/WhatsApp baseline.

## Source
- Farmbrite features: https://www.farmbrite.com/features
- Farmbrite offline: https://www.farmbrite.com/features/offline-record-keeping
- FarmERP: https://www.farmerp.com/
- Local context: https://www.rekamosoagrimart.com/ and https://afa.gov.bw/register
- Master landscape: [AgriSage competitive intelligence](https://github.com/faroukpandor/AGRISAGE/blob/research/competitive-intelligence-2026-10/docs/COMPETITIVE-INTELLIGENCE-AND-OUTCOMPETITION-ROADMAP-2026-10.md)
