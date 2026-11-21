# SmartFarm Universal Entity and Taxonomy Contract

**Status:** Proposed architecture contract for review; not an implemented schema or live integration.  
**Scope:** Botswana-first, production-system-independent, internationally extensible.  
**Depends on:** `AGRICULTURAL-PRODUCTION-SYSTEMS-SCOPE.md` and `DOMAIN-MODEL-AUDIT.md`.

## 1. Decision

SmartFarm must not represent agriculture as one flat list of enterprises or a single closed enum. It must keep separate concepts for:

1. **Production system** — the organised biological and operational arrangement used to produce goods or services (for example, a broiler unit, rain-fed cereal system, dairy, apiary, aquaculture pond system, mushroom unit or protected-crop system).
2. **Commodity or output** — what is produced, harvested, sold or transferred (for example, beef, milk, eggs, sorghum, Bambara groundnut, tomatoes, honey, fish, mushrooms, seedlings, compost or microbial inoculant).
3. **Production mode and practice** — how an activity is carried out (for example, rain-fed, irrigated, extensive, housed, free-range, protected, hydroponic, organic where independently defined, or conservation agriculture). These are facets, not mutually exclusive production-system categories.
4. **Enterprise** — the farm's management or economic activity boundary used to plan, assign responsibility and account for resources, outputs and costs.
5. **Place** — a named or geospatial location, such as a farm block, paddock, greenhouse, apiary site, pond area, shed or store.
6. **Production unit** — the physical or biological unit being managed, such as a field, orchard block, flock, herd, hive, pond, tank, greenhouse bay, mushroom room, nursery batch or insect-rearing container.
7. **Operation or activity** — work performed, such as planting, irrigation, feeding, hive inspection, vaccination recording, harvesting, grading, water testing or compost turning.
8. **Resource and stewardship domain** — land, soil, water, rangeland, biodiversity, energy and ecosystem condition. These may support production or be managed as a distinct stewardship objective; they are not automatically commodities or production systems.
9. **Evidence and regulatory reference** — a source-backed claim, standard, instrument, permit condition or guidance item, with jurisdiction and review status.

These concepts may be linked, but they must not be collapsed into one another. A farm can operate several systems, produce several commodities from one system, use multiple modes over time, and share production units or resources across enterprises.

## 2. Canonical relationship model

```text
Farm / Organisation
  ├── Places
  │     └── Production Units
  ├── Enterprises
  │     └── Production Arrangements (time-bounded links)
  │            ├── Production-system concept + version
  │            ├── Production mode / practice facets
  │            ├── Purpose and intended outputs
  │            └── Production Units (one or more)
  ├── Cycles / Cohorts / Batches
  │     └── Activities, Observations and Events
  ├── Resources and Inputs
  │     └── Resource-use / allocation events
  ├── Outputs, Losses and Lots
  │     └── Inventory movements / Storage
  ├── Financial Transactions
  │     └── Direct or explicitly allocated shared costs
  └── Documents, Evidence, Consent and Audit History
```

This is a conceptual map. It does not prescribe a database table for every noun before use cases and migration tests justify one.

### Relationship rules

- A Farm/Organisation owns or operates multiple Places and Enterprises.
- A Place can contain or reference multiple Production Units.
- A Production Unit belongs to a Place where its physical location is known; temporary, mobile or distributed units may have no single fixed Place.
- An Enterprise can participate in multiple Production Arrangements over time.
- A Production Arrangement links an Enterprise to one production-system concept, selected modes/practices, one or more Production Units and a validity period. It is the join that allows one enterprise to use different systems or units without duplicating the enterprise.
- A Production Unit can be used by more than one Enterprise or Arrangement, concurrently or sequentially, only where the relationship and time period are explicit.
- A Cycle/Cohort/Batch belongs to an Arrangement and may cover one or more units. Not every system needs a seasonal cycle; continuous, perennial, recurring and event-driven patterns must be supported.
- Activities, observations, input-use events, outputs and losses must link to the most specific known arrangement, unit and cycle. Missing links remain unknown rather than being fabricated.
- Shared resources and costs use explicit allocation records with method, driver, period, source and measured/estimated status. If no defensible allocation exists, leave the amount unallocated.
- Outputs can be transformed into other outputs. Preserve source-lot and transformation links to avoid double counting.

## 3. Minimal universal entity responsibilities

| Entity | Responsibility | Examples / design notes |
|---|---|---|
| Farm / Organisation | Operating owner or accountable group | Household farm, company, cooperative, communal or contract operator |
| Place | Physical/geospatial context | Paddock, field block, greenhouse, apiary site, pond area, store |
| Production Unit | Managed physical/biological unit | Field, orchard block, hive, flock, pond, tank, mushroom room, nursery batch |
| Enterprise | Management and economic boundary | Poultry, field crops, apiary, orchard, fish production, seedling nursery |
| Production Arrangement | Time-bounded system-to-enterprise/unit relationship | Broiler production in house A; rain-fed sorghum on field B |
| Cycle / Cohort / Batch | A production grouping or period | Crop season, poultry placement, fish batch, mushroom flush, seedling batch |
| Activity / Event | Work or event recorded | Planting, feeding, inspection, irrigation, harvest, mortality, maintenance |
| Observation | A measured or observed condition | Soil test, water quality, weather, animal weight, pest count |
| Resource / Input | Reusable or consumable resource | Water source, feed, seed lot, fertiliser, energy, labour, equipment |
| Resource-use / Allocation | How a resource is consumed or shared | Metered water, labour hours, shared pump allocation |
| Output / Loss / Lot | Produced, transformed, rejected or lost material | Eggs, milk, grain, honey, fish, seedlings, manure, mortality |
| Inventory Movement | Stock movement and custody | Receipt, issue, transfer, harvest intake, sale, disposal |
| Financial Transaction | Recorded value movement | Purchase, sale, wage, service, asset cost, payment |
| Evidence / Document | Supporting source or record | Invoice, laboratory result, permit, certificate, photo, buyer specification |

A Production Unit must not require hectares. Its common identity should be small and stable (identifier, farm, optional place, unit-type reference, label, status and dates). Area, volume, capacity, count, length, biomass and other measurements belong in typed details or measured attributes with explicit units. Do not create a large record full of nullable fields for every possible production system.

## 4. Taxonomy contract

### 4.1 Taxonomy dimensions

Maintain separate, versioned registries for:

- Production-system concepts and their parent/child relationships.
- Production-unit types.
- Commodities, products and output classes.
- Production modes and practice claims.
- Production purposes.
- Operations and activity types.
- Resource and stewardship domains.
- Measurement units and dimensions.
- Evidence sources, standards and regulatory instruments.

A taxonomy term must state which registry it belongs to. The same display label may legitimately occur in different registries but must not share an identifier merely because the words match.

### 4.2 Stable identifiers and versioning

- SmartFarm owns its internal immutable identifiers. Use opaque IDs for farm records and namespaced, stable concept IDs for taxonomy entries; never use a translated label or mutable display name as a key.
- Each published taxonomy release carries a publisher, taxonomy identifier, semantic version, publication date and change note.
- A concept has a stable ID, preferred label, definition, aliases, parent references, status, applicable jurisdiction(s), source references and review metadata.
- Correcting a label or adding a translation does not create a new concept ID. A genuine change in meaning does.
- Retired concepts remain resolvable for historical records and exports. Mark them deprecated and provide a replacement mapping where one exists; never silently rewrite historical records.
- Store the taxonomy release/version used when an arrangement or record was created. Newer labels and definitions must not silently change the meaning of old records.
- External IDs are mappings, not SmartFarm primary keys. Record the external publisher, registry, external ID, external release (if known), mapping status, reviewer and date.
- Unknown or unmapped concepts must be representable as pending review; do not force users to select a misleading nearest match.

### 4.3 Status and evidence

Every Botswana catalogue entry should distinguish its local status from its technical evidence status.

Suggested local status values: `established`, `emerging`, `specialised_niche`, `potential`, `status_to_verify`, `not_applicable`.

Suggested evidence/review status values: `unreviewed`, `source_checked`, `specialist_reviewed`, `authority_confirmed`, `superseded`.

These statuses are not interchangeable. A system can be established in practice while a particular regulatory claim remains unverified. A specialist-reviewed production method does not imply statutory approval, certification or commercial viability.

Evidence records should capture at least: claim, source title/publisher, source URL or document reference, publication/effective date, access/review date, jurisdiction, relevant passage or section, reviewer and competence/standing, review decision, limitations and next review date. Preserve conflicting sources rather than flattening them into one unsupported answer.

## 5. Production-system coverage and classification

The Botswana reference catalogue should cover, at minimum, these production families and specialist areas, subject to local status and evidence review:

- **Animal production:** cattle, goats, sheep, poultry, pigs, rabbits, equines, ostriches/ratites and other locally relevant managed species; communal, ranch, feedlot, dairy, breeder, grow-out, free-range and housed arrangements where applicable.
- **Field and arable crops:** cereals, pulses and legumes (including Bambara groundnut), oilseeds, fibre crops, roots/tubers, fodder, forage, pasture, seed multiplication and outgrower/contract production.
- **Horticulture and perennial plants:** open-field vegetables, orchards, fruit, herbs, spices, medicinal/aromatic plants, nurseries, ornamentals, propagation, vineyards and tree crops.
- **Protected and soilless cultivation:** shade-net, tunnels, greenhouses, hydroponics, aeroponics, vertical systems and other controlled-environment production.
- **Aquatic production:** aquaculture, hatcheries, ponds, tanks, cages, recirculating aquaculture and aquaponics where species, water and environmental conditions are validated.
- **Apiculture and pollination:** managed apiaries, hive products, colony management and pollination services.
- **Fungi and microbial production:** cultivated mushrooms, fungal products, microbial biomass, inoculants, biofertilisers, biopesticides and other biological inputs, subject to identity, biosafety, quality and regulatory controls.
- **Insects and biological conversion:** edible insects, insect protein, black soldier fly and other bioconversion, vermiculture and earthworm production where relevant and compliant.
- **Agroforestry and perennial systems:** silvopasture, farm forestry, orchards, multipurpose trees and integrated tree-crop-livestock arrangements.
- **Mixed and circular systems:** crop-livestock, aquaculture-crop, poultry/pig-crop, nutrient cycling, composting, residue use, manure processing and other linked arrangements.

Keep resource stewardship distinguishable from commodity production. Rangeland condition, soil health, water availability, groundwater abstraction, biodiversity and wildlife conservation may be core managed domains or constraints. They can also intersect with a productive enterprise (for example, a game ranch or a grazing enterprise), but should not be forced into the same classification as beef, tomatoes or honey. Wildlife production, game ranching, conservation and human-wildlife conflict also need distinct purpose and authority/evidence treatment.

The catalogue is a coverage inventory, not a claim that every system is established, lawful in every location, commercially viable or already supported by a SmartFarm workflow.

## 6. Initial AgriSage360 alignment findings

**Observed from repository files inspected on 21 November 2026; not an independent validation of the underlying agricultural or legal claims.**

- `src/data/productionSystems.ts` contains 21 production-system entries across 11 categories. Its categories include livestock, crops, horticulture, rangeland, wildlife, aquatic, forestry, veld-products, water, soil and mixed.
- The 21 entries are: `communal_beef`, `commercial_beef_ranch`, `feedlot`, `smallstock`, `poultry_broiler`, `poultry_layer`, `dairy`, `piggery`, `rainfed_cereals`, `irrigated_field_crops`, `horticulture_open`, `horticulture_protected`, `rangeland_management`, `game_ranching`, `human_wildlife_conflict`, `aquaculture`, `veld_products`, `woodland_forestry`, `groundwater_supply`, `soil_health` and `mixed_crop_livestock`.
- The same source contains 24 named standards/instruments. Its generated `docs/PRODUCTION_SYSTEMS.md` states that all 21 fact sheets and all 24 citations are unverified. Do not import their claims as verified SmartFarm guidance.
- `src/data/enterprises.ts` is a commodity register for contracting and buyer requirements. It answers what can be contracted and on what terms; it is not the production-system taxonomy.
- `src/data/farmOperations.ts` contains 90 farm operations across 18 domains. It describes work a provider can perform, with competence, hazards, records and legal-basis review status. It is not a list of production systems.
- `src/data/productionSystems.test.ts` tests structural integrity, cross-references, coverage categories and unverified flags. Those tests establish internal consistency, not that each agricultural, legal or regulatory statement is true.
- The AgriSage360 outstanding register records the production-system data as not reachable from the main farmer workflow at the audit date and identifies surfacing it as unfinished work. Reachability must be rechecked before claiming that farmers can use it.

### Mapping rule

Do not copy the 21 AgriSage360 IDs directly into SmartFarm as canonical primary keys. Create explicit external mappings after reviewing definitions and category meaning. In particular:

- `groundwater_supply` is primarily a water-resource domain/management subject, not itself a crop or livestock production system.
- `soil_health` is a soil-resource and condition domain.
- `rangeland_management` is a land/forage stewardship and management domain that can support several livestock systems.
- `human_wildlife_conflict` is a risk/incident and mitigation domain, not a production system.
- `game_ranching` may be a productive enterprise where lawful, while wildlife conservation and conflict management remain separate concerns.
- `veld_products` is a family of products and harvesting arrangements; species, harvesting method, regeneration and access/benefit-sharing conditions need finer-grained records.
- Apiculture appears in the operations catalogue as `beekeeping_services`, but that does not prove that AgriSage360 has a complete apiary production-system fact sheet.
- Mushroom/fungi, microbial-input, insect-bioconversion, nursery/seed and advanced soilless systems require a deliberate coverage review; absence from the 21-entry list alone does not prove that no related material exists elsewhere.

## 7. Measurement and interoperability

- Every quantity is a value plus a unit, dimension, measurement context, timestamp/period and provenance. Do not compare values merely because both are numbers.
- Store original values and units. Conversions must name the conversion rule/version and preserve the original measurement.
- Distinguish count, area, length, volume, mass, energy, time, concentration, rate, currency and ratios. Ratios require a defined numerator, denominator and population/time boundary.
- Metrics require a definition, unit, numerator/denominator where relevant, period, population, inclusion/exclusion rules, missing-value treatment, source and calculation version.
- Country packs configure language, currency, units, calendar, local classifications, market grades and jurisdiction-specific evidence. Country packs do not make legal determinations.
- Imports must preserve source IDs, source version, import date and mapping decisions. Exports must include enough taxonomy and unit metadata to interpret records without the live application.

## 8. Specialist extension contract

A specialist pack may add typed entities, validation, workflows and calculations, but must declare:

- the production-system concept(s) and taxonomy release it supports;
- the specialist records and their relationship to the universal entities;
- required and optional measurements, units and conversion rules;
- cycle/cohort semantics and lifecycle stages;
- outputs, by-products, losses and traceability requirements;
- safety, welfare, biosecurity and environmental controls;
- evidence sources, jurisdiction and review status;
- calculation definitions and test cases;
- export/import behaviour and migration strategy.

A specialist pack must not make unrelated systems inherit its fields. Cattle breeding/weaning, for example, remains a ruminant specialist workflow; it must connect to shared enterprise, arrangement, unit, cohort, activity, resource, output and finance records through stable references.

## 9. Implementation gates

Before database implementation:

1. Review and approve the relationship model and definitions with representative production examples: a cattle enterprise, a field-crop enterprise, a poultry house, an apiary, a pond/tank, a greenhouse, a mushroom room and a nursery batch.
2. Agree the minimal Production Unit type and how typed details are stored without nullable-field sprawl.
3. Agree taxonomy ownership, release/version semantics and external mapping review.
4. Define the unit registry and measurement dimensions.
5. Define provenance, consent, access and audit requirements.
6. Map existing Farm and Field records to the new model without deleting or changing their meaning.
7. Write migration tests against populated Dexie v1 data and the separate livestock-calculator branch before changing tables.
8. Implement one vertical slice, then verify capture, persistence, offline use, export, migration and user-facing reachability before describing it as supported.

No AgriSage360 code or documentation was changed for this contract. Its repository requires the full `npm run verify` workflow before every commit; that workflow was not run in this task.
