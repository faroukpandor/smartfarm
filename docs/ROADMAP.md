# SmartFarm Roadmap

**North star:** A production-system-independent farm operating platform, beginning with Botswana and designed for international use. The phases below are intended scope, not a claim that listed capabilities are already implemented.

## Phase 0 — Domain and evidence foundation
- [x] Initial React/Vite application shell.
- [x] Dexie/IndexedDB repository foundation.
- [x] Initial Farm and Field Zod schemas.
- [ ] Complete the domain-model audit against code, tests and all active PR branches.
- [ ] Approve the universal entity map and production-system taxonomy ownership.
- [ ] Map AgriSage360 production-system and farm-operations catalogues; record unverified claims and overlap.
- [ ] Define stable IDs, units, provenance, country configuration and specialist extension contracts.
- [ ] Define migration and rollback strategy before changing existing tables.

## Phase 1 — Universal farm foundation
- [ ] Farm/organisation, places, production units and multi-enterprise registry.
- [ ] Configurable production-system taxonomy and specialist extension registration.
- [ ] Generic cycles/cohorts supporting seasonal, continuous, perennial and recurring production.
- [ ] Common resources, inputs, activities, labour, observations and attachments.
- [ ] Outputs, losses, inventory and traceability.
- [ ] Sales, expenses and auditable direct/shared-cost allocation.
- [ ] Open-format export/import and backup/restore.
- [ ] Local-first usability and data migration tests.

## Phase 2 — Botswana priority specialist packs
Prioritise through producer discovery, technical evidence and legal/regulatory review. Candidate packs:
- Ruminants and other livestock (retain cattle breeding/weaning as a specialist workflow).
- Poultry and pigs.
- Field crops, pulses and fodder/forage.
- Open-field and protected horticulture.
- Apiculture.
- Aquaculture where locally validated.
- Agroforestry, nurseries and biological production where relevant.

Do not activate an extension solely because it appears in a catalogue. Confirm the workflow, evidence, user need and specialist reviewer.

## Phase 3 — Mixed-farm resource and enterprise economics
- [ ] Link multiple enterprises to shared land, water, labour, equipment and infrastructure.
- [ ] Introduce measured or disclosed shared-resource allocation.
- [ ] Calculate enterprise gross margin only when source data is adequate.
- [ ] Add water, energy, labour and land productivity with explicit boundaries and units.
- [ ] Prevent double-counting across linked enterprises and transformed outputs.

## Phase 4 — Climate, environment and evidence
- [ ] Weather, soil, water and land-condition observations with provenance.
- [ ] Climate-risk records and transparent scenario assumptions.
- [ ] Sustainability indicators only where methods and boundaries are defensible.
- [ ] Evidence-linked advisory requests through AgriSage360; no automated professional diagnosis or prescriptions.

## Phase 5 — Global extension and ecosystem integration
- [ ] Country/region packs for language, currency, units, calendars, local classifications and reviewed regulatory references.
- [ ] Additional systems: fungi/microbial production, insects/bioconversion, controlled-environment agriculture, aquaponics, perennial and other locally relevant systems.
- [ ] Versioned AgriSage360 integration contracts and optional field-service workflows.
- [ ] Cooperative/group views and optional synchronisation after privacy, conflict and security review.

## Critical gates
- Do not alter the production database until the schema audit, entity map and migration plan are reviewed.
- Do not merge or deploy the livestock calculator until its own build, migration and browser validation checklist is complete.
- Do not describe a production system as supported until the live user workflow, persistence, export and tests are verified.
- Do not add AI, sensors or paid integrations ahead of reliable core records.
