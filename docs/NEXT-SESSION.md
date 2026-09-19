# Next Session

**Repository:** `faroukpandor/smartfarm`

## Single recommended starting point
Verify the GitHub Actions build, then implement **Fields + production units** on top of the existing farm persistence layer.

## Required sequence
1. Reconcile `README.md` with what is actually implemented.
2. Confirm the CI install/build result.
3. Add Field/ProductionUnit Zod models and Dexie tables.
4. Extend the Farm Setup workflow to create and edit fields.
5. Load persisted field records into the dashboard.
6. Add export tests for the growing local data contract.
7. Update `docs/ROADMAP.md`, `docs/STATUS.md`, and this file.

## Architectural guardrail
Do not introduce AI, sensor automation, lending decisions, autonomous irrigation or mandatory cloud accounts before basic records are reliable, exportable and offline usable.
