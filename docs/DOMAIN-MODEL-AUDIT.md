# SmartFarm Domain Model Audit — Universal Agriculture

**Audit date:** 21 November 2026  
**Scope:** Repository code and tracked product documents inspected through GitHub.  
**Status:** Initial static audit; no local build, test suite, runtime inspection or browser migration test was executed.  
**Purpose:** Establish the current model before any database redesign.

## 1. Executive finding
The current SmartFarm codebase is a small farm-profile prototype, not yet a universal farm-management data model. Its product documentation describes a broader set of entities and workflows than the default branch currently implements. The database must not be expanded on the assumption that described entities already exist.

AgriSage360 contains a much broader agricultural production-systems register and farm-operations catalogue. That is valuable existing work and should be assessed for taxonomy and evidence reuse. It must not be copied wholesale or treated as authoritative: its own production-system document marks all 21 fact sheets and 24 cited instruments unverified. AgriSage360 repository rules require a full verification run before any commit; this session did not run that suite, so no AgriSage360 code or documentation was changed.

## 2. SmartFarm — verified current state

### Default branch (master)
- src/domain/farm.ts defines FarmSchema with id, name, ownerName, location, createdAt and updatedAt.
- The same file defines FieldSchema with id, farmId, name, positive areaHa and enterprise.
- Field.enterprise is a closed enum: crop, livestock, mixed, other.
- src/db/database.ts declares Dexie version 1 with farms and fields tables only.
- src/App.tsx exposes Overview, Crops, Livestock, Inventory, Tasks and Finance navigation. On the inspected default branch, non-overview sections are placeholders.
- docs/PRODUCT-SPEC.md lists a wider proposed entity set (crop cycles, livestock groups, individual animals, inputs, inventory transactions, tasks, labour, irrigation, observations, expenses, sales, customers, suppliers, attachments and advisory notes). This is specification, not evidence those entities are implemented.
- docs/ARCHITECTURE.md describes layered local-first architecture and future integration; it does not define a complete universal agricultural schema.
- docs/ROADMAP.md lists several operational modules as planned/incomplete.

### Livestock calculator branch / PR #4
The separate feature/livestock-performance-calculator-20261121 branch adds LivestockAssessment and a Dexie version 2 table. Its fields and calculations are specifically cattle breeding/weaning cohort measures. This branch is not the default branch and the calculator is not a universal production-cycle abstraction. PR #4 and the architecture documentation PR are separate branches from master; review merge order and compatibility before combining work.

### Universal-scope branch / PR #6
The architecture branch contains the universal production-system scope document and README positioning. It is documentation-only; it does not change the production database or claim that all production systems are implemented.

## 3. Data-model gaps and design consequences

| Current limitation | Why it blocks universal agriculture | Required design response |
|---|---|---|
| Field is the only production-place record and requires areaHa | A hive, pond, tank, poultry house, greenhouse, mushroom room or nursery batch is not necessarily a hectare-based field | Introduce generic Place and typed ProductionUnit; retain Field as a compatible legacy/specialist form |
| enterprise is a four-value enum | It cannot distinguish production system, subtype, purpose or production mode | Use versioned taxonomy references and configurable subtype codes |
| No Enterprise table | A farm cannot formally manage several independent production businesses or link shared resources | Add Enterprise with farm relationship and production-system identity |
| No generic cycle/cohort table | Crop seasons, breeding cohorts, fish batches, mushroom flushes and perennial cycles differ | Define a flexible cycle/cohort base plus typed specialist records |
| No universal resource/input/usage records | Feed, seed, fertiliser, biological inputs, energy, water and packaging need shared traceable records | Model catalogued resources, inventory transactions and resource-use events |
| No activity/labour/equipment records | Farm work cannot be consistently costed or traced | Add activities/tasks and labour/equipment links |
| No output/loss/traceability records | Yield, harvest, eggs, milk, honey, fish, seedlings, mortality and rejected product need different units and traceability | Model typed output items, quantities, units, lots and loss events |
| No shared-resource cost allocation | Mixed farms cannot defensibly calculate enterprise margins | Add explicit measured/estimated allocation records and preserve unallocated costs |
| Country, units, currency and taxonomy settings are not represented in current schemas | Global use would otherwise lead to hard-coded assumptions | Introduce country/region configuration and unit/currency metadata without embedding local law in the core |

## 4. AgriSage360 — existing work to align, not duplicate
Verified from its README and inspected documents/source:
- src/data/productionSystems.ts is the production-system registry. Generated docs/PRODUCTION_SYSTEMS.md describes 21 systems across 11 categories and 24 cited standards/instruments.
- The register distinguishes production systems that share a commodity but have different operational and regulatory obligations (e.g. communal beef, commercial beef ranch and feedlot finishing).
- src/data/farmOperations.ts is the operations catalogue; its README/index describes 90 operations across 18 domains.
- src/data/enterprises.ts is the commodity/enterprise catalogue, distinct from the production-system and operations catalogues.
- docs/PRODUCTION_SYSTEMS.md explicitly states all 21 fact sheets and all 24 citations are unverified. Treat the register as a candidate taxonomy and evidence queue, not verified guidance.
- docs/UNREACHABLE_CAPABILITY_AUDIT.md records that the production-system UI was wired as a factsheets tool after an earlier reachability defect. The audit's measured state is dated; re-run the prescribed verification before making current reachability claims.
- AgriSage360 AGENTS.md requires DOCS_INDEX.md, HANDOVER.md and docs/OUTSTANDING_REGISTER.md to be read before changes, inspection of actual code, and npm run verify before every commit. No AgriSage360 change is made because this session did not execute its full required verification workflow.

### Proposed ownership boundary
- **AgriSage360:** canonical agricultural domain intelligence, production-system evidence, specialist methodology, reviewed guidance and versioned taxonomy/evidence publication.
- **SmartFarm:** farmer-owned operational records, farm/enterprise/unit/cycle relationships, resource use, activities, outputs, inventory, transactions and deterministic farm calculations.
- **AgriSolutions:** consent-based field assessments and authorised execution/service workflows.
- **Livestock Botswana / AnimalHealth:** specialist livestock-facing educational and animal-health content. It is not the universal production-system catalogue.
- **MOKORO AgriValue Network:** commercial produce sourcing, buyer/supplier workflow and fulfilment. It must not be duplicated as a general farm-record module.

This is a proposed boundary for review, not evidence of live APIs or synchronisation.

## 5. Recommended universal domain map
Farm/Organisation → Places → Production Units → Enterprises → Production Cycles/Cohorts → Activities/Observations → Resource and Input Use → Outputs/Losses/Lots → Inventory/Storage/Traceability → Sales/Expenses/Labour/Shared Cost Allocations → Reports/Export.

Relationships are many-to-many where justified: an enterprise may use multiple production units; a unit may serve multiple enterprises over time; resources and shared assets may serve several enterprises. Every allocation must record its basis. Specialist extensions add typed entities and metrics; they do not turn the shared model into an untyped JSON store.

## 6. Migration and delivery recommendation
1. Keep current Farm and Field records readable. Do not rename or delete tables as a first step.
2. Define canonical IDs and a taxonomy contract before introducing new foreign keys.
3. Add Enterprise and ProductionUnit registries in an additive Dexie migration; define how existing fields map to units and how the legacy enterprise enum is retained or translated.
4. Add generic cycle/cohort and activity/observation records only after the entity map is reviewed.
5. Add resources, inventory, outputs and finance as separate, auditable domains.
6. Keep specialist livestock assessments linked to an enterprise/cohort where the reviewed schema supports it; do not convert cattle-specific counts into generic universal measures.
7. Test migration from a populated v1 database, backup/export, duplicate IDs, missing relationships, partial data and offline persistence.
8. Build one production-system vertical slice at a time, validating with producers and qualified specialists.

## 7. Open questions before implementation
- Should Enterprise be a user-defined operating unit with a selected system taxonomy, or should a farm have several production activities under one enterprise? Model both if real use cases require it; do not assume.
- What minimal common ProductionUnit abstraction represents both area-based and non-area-based units without a large nullable field set?
- Which AgriSage360 identifiers are stable enough to adopt, and who owns taxonomy versioning?
- How will units be represented and converted without silently comparing incomparable quantities?
- What is the minimum viable provenance and consent model for shared/field-service data?
- Which Botswana production systems should be first implementation priorities based on producer discovery, not catalogue size?

## 8. Evidence and limitations
This audit is based on static repository files fetched from GitHub. It does not establish runtime reachability, build success, browser behaviour, migration safety, legal compliance, local commercial prevalence or farmer usability. No farmer data was accessed. No production database, deployment or public content was changed.
