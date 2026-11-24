# SmartFarm Product Specification

**Product direction:** Production-system-independent farm operating platform.  
**Initial reference context:** Botswana. **Long-term scope:** International.

## 1. Problem and promise
Farmers and agricultural enterprises need a dependable operational record of what they produce, where and how they produce it, which resources they use, what work is done, what is lost, what is harvested or otherwise produced, what is sold, and what it costs. They need this record to work with limited connectivity and to remain under their control.

SmartFarm is not a cattle application, crop diary or livestock-first ERP. It is a universal farm operating core with specialist extension packs for different production systems. A single farm may operate multiple enterprises and link shared resources without forcing them into one production category.

The platform records operational facts first. Calculations are transparent. Advisory interpretation is separately governed and must disclose its evidence, assumptions and limitations.

## 2. Users and operating contexts
- Household, subsistence, smallholder and emerging farmers.
- Commercial farms, ranches, estates and specialised production facilities.
- Mixed and integrated farms, cooperatives, producer groups and contract/outgrower networks.
- Farm managers, workers, extension officers, field assessors and authorised service providers.
- Agricultural businesses that need traceable production, inventory, fulfilment and enterprise records.

Support rain-fed and irrigated; extensive and intensive; communal and private; open-field, protected, indoor, aquatic and tree-based production. These are operating contexts and dimensions, not mutually exclusive product categories.

## 3. Production-system coverage
The Botswana-first reference catalogue must be broad enough to cover relevant local systems while remaining globally extensible. Candidate families include:

1. **Animal production:** cattle, goats, sheep, poultry, pigs, rabbits and other locally relevant managed species; dairy, meat, eggs, breeding, fibre and other production purposes.
2. **Field crops:** cereals, pulses, legumes, oilseeds, roots, tubers, fibre, fodder, forage, pasture, seed and planting-material production.
3. **Horticulture:** vegetables, fruit, orchards, vineyards, herbs, spices, medicinal/aromatic plants, nurseries and ornamentals.
4. **Protected and soilless cultivation:** shade-net, tunnels, greenhouses, hydroponics, aeroponics, vertical and controlled-environment systems.
5. **Aquatic production:** aquaculture, hatcheries, ponds, tanks, cages, recirculating systems and aquaponics where suitable and permitted.
6. **Apiculture and pollination:** managed hives, honey and other hive products, colony management and pollination services.
7. **Fungi and microbial/biological production:** mushrooms, cultivated fungi, microbial inoculants, biofertilisers, biopesticides and other biological inputs subject to identity, quality, biosafety and regulatory controls.
8. **Agroforestry and perennial systems:** tree crops, farm forestry, silvopasture and integrated tree–crop–livestock systems.
9. **Insects and circular bio-production:** insect farming, insect bioconversion, vermiculture, composting and other controlled biological conversion systems where appropriate.
10. **Integrated and mixed systems:** linked crop–livestock, poultry–crop, aquaculture–crop and other multi-enterprise systems.
11. **Adjacent land and natural-resource operations:** rangeland, veld products, forestry, wildlife/game and water/soil stewardship where they are part of an agricultural enterprise or authorised land-management workflow. These retain their own legal, conservation and stewardship boundaries.

This catalogue is a coverage inventory, not a claim that every subtype is currently established, commercially viable, legally permitted or validated in Botswana. Each entry must carry a status such as established, emerging, specialised/niche, potential or status-to-verify, plus source, jurisdiction, review date and qualified-review status. The AgriSage360 production-systems register is a useful starting taxonomy, but its fact sheets and cited instruments are explicitly marked unverified; it must not be treated as authoritative without verification.

## 4. Universal operational core
The common model represents shared operational concepts without pretending that a calf, crop plot, fish pond, hive, mushroom room and tree block have identical biological cycles.

### Farm and organisation
Farm or operating organisation, owner/manager references, permissions, contact settings, country/region, timezone, language, currency, units and operating calendar. Minimise personal data and separate private identity/contact details from production records.

### Places and production units
Named and optionally geospatial places: farm, block, field, paddock, orchard, greenhouse, poultry house, barn, apiary, hive location, pond, tank, hatchery, mushroom room, nursery, store and processing area. A production unit may be measured by area, volume, capacity, count, length or another explicit unit. Do not require hectares for every unit.

### Enterprises
A farm may have many enterprises. Each enterprise has a stable ID, production-system category and subtype code, purpose, production mode, operating status, responsible person, place links, start/end dates and optional specialist extension. An enterprise is not the same thing as a commodity or a physical field.

### Cycles, cohorts and recurring operations
Support crop seasons, planting batches, animal breeding/grow-out cohorts, continuous poultry flocks, recurring hive inspections/harvests, fish batches, mushroom flushes, nursery batches, perennial production years and continuous production. The model must not require every enterprise to have one annual cycle.

### Resources, inputs and inventory
Inputs and resources include seed, planting material, animals, feed, fertiliser, soil amendments, crop-protection products, veterinary products, biological inputs, water, energy, fuel, packaging, equipment, infrastructure and consumables. Record quantity, unit, source, batch/lot where relevant, date, intended use, actual use, cost and responsible person. Inventory tracks receipts, use, adjustments, losses and balances.

### Activities, labour and equipment
Tasks and completed activities link to time, place, enterprise, production unit, responsible person, labour, equipment, inputs, status and evidence. Activity types are configurable and specialist packs may define required fields.

### Observations, outputs and losses
Observations retain method, time, place, source, unit, observer and confidence. Outputs include harvested crops, animals/products, eggs, milk, honey, fish, mushrooms, seedlings, biomass, by-products and other products. Losses include mortality, crop loss, rejected product, spoilage, contamination and waste. Product quality and grade attributes are configurable.

### Finance and transactions
Record income, purchases, operating costs, labour, services, transport, storage, processing, fees, capital items and other financial events. Distinguish cash paid, payable, non-cash, imputed and allocated amounts. Gross margin is calculated only where revenues and attributable costs are sufficiently complete. Shared-cost allocation must be explicit and auditable.

### Traceability, documents and governance
Support lots/batches, origin, transformations, storage, dispatch, buyer specifications, permits, certificates, invoices, laboratory results and other attachments. Include provenance, consent, audit history, access control, retention and open-format export.

## 5. Specialist extension packs
Specialist packs provide typed domain entities, stages, validations, calculations and reports. They must not impose irrelevant fields on unrelated enterprises.

| Pack | Specialist concepts (illustrative, not exhaustive) |
|---|---|
| Ruminants | species, herd/flock, identity, mating, births, weaning, weights, milk, fibre, grazing and movements |
| Poultry | flock/batch, placement, feed, mortality, eggs, hatchability, growth and housing |
| Pigs and monogastrics | breeding groups, litters, farrowing, weaning, growth, feed and mortality |
| Field crops | crop/variety, plot, planting, emergence, field operations, crop protection, yield, moisture and grade |
| Horticulture | bed/row/orchard, cultivar, phenology, irrigation/fertigation, picking rounds and pack-out |
| Protected/soilless | structure, growing system, substrate, nutrient solution, climate, energy and recirculated water |
| Aquaculture | species, pond/tank, stocking batch, water quality, feed, growth, mortality and harvest |
| Apiculture | apiary/hive, colony, inspections, queen events, forage context, harvest and hive-product quality |
| Fungi/microbial | species or strain identity, culture/substrate batch, inoculation, incubation, production, contamination, quality and biosafety |
| Nursery/seed | variety/lot, propagation batch, germination, survival, grading, certification and dispatch |
| Agroforestry/perennials | species, planting cohort, spacing, establishment, survival, pruning, intercrops and long-term asset records |
| Insects/bioconversion | species/batch, substrate, environmental conditions, growth, conversion outputs, harvest and safety controls |
| Rangeland/wildlife/veld | management unit, survey/observation method, condition, permitted activity, harvest/movement and conservation controls |

The cattle breeding/weaning calculator is one such extension. Its denominators and biological rules remain cattle-specific.

## 6. Metrics and comparison rules
Every metric must define numerator, denominator, unit, period, population/cohort, inclusion/exclusion rules, data source, missing-data treatment and calculation version.

- Universal measures may be shared when definitions and units match (e.g. labour hours, water volume, energy, expenditure, revenue).
- Production indicators remain system-specific (e.g. kg weaned per exposed cow, eggs per hen housed, tonnes per hectare, fish survival, honey per hive).
- Sustainability indicators require explicit system boundaries, methods and evidence (e.g. water productivity, nutrient-use efficiency, energy intensity, emissions intensity, soil-carbon change).
- Benchmarks require a source, geography, date, system definition and comparability caveat. Do not invent targets or compare unlike systems.

## 7. Shared resources and multi-enterprise accounting
Land, water, labour, machinery, buildings, energy, transport, storage and finance may serve multiple enterprises. Attribute direct costs where evidence supports it; allocate shared costs only using a measured or disclosed driver (metered use, labour time, area, throughput or another defensible basis). Estimated allocations must be labelled with assumptions and confidence. Where no defensible allocation exists, leave the cost unallocated. Prevent double-counting of shared outputs and inputs.

## 8. International configuration
Botswana is the first validation context, not a hard-coded boundary. Country packs may define local names, species/crop classifications, production calendars, currencies, units, language, regulatory references, market grades and verified extension guidance. Keep core identifiers and relationships country-neutral. Country packs are not legal advice and cannot mark a rule as verified without source and qualified review.

## 9. Non-goals and safeguards
- No automated veterinary diagnosis, prescribing or treatment.
- No unverified pesticide or chemical prescriptions.
- No automated carrying-capacity or stocking-rate claims from incomplete data.
- No legal/compliance, certification or market-access guarantee.
- No profit uplift claims without measured baseline and follow-up evidence.
- No mandatory cloud account, paid API or vendor-locked data format.
- No public exposure of private farm, supplier, worker or customer records.

## 10. Acceptance criteria
- One farm can manage multiple enterprises across different production systems.
- Each enterprise can use suitable units, cycles/cohorts and specialist indicators.
- Fields, ponds, tanks, houses, hives, growing rooms and tree blocks can be represented without forcing one area-only template.
- Shared resources and costs can be linked with visible allocation methods.
- Adding a specialist system does not require rewriting unrelated workflows.
- Existing records are preserved through explicit, tested migrations.
- Offline capture, exportability, provenance and access controls remain intact.
- No listed system or specialist capability is described as implemented until its live workflow and tests are verified.

## 11. Current implementation status
The default SmartFarm branch currently implements a farm profile and a field record. The field's enterprise value is a small closed enum (crop, livestock, mixed, other); the product specification's broader entity list is not evidence that those entities exist in the database.

The livestock calculator is proposed on a separate feature branch/PR and is not part of the default branch yet. The universal production-system architecture proposal is documentation-only. See [Domain Model Audit](DOMAIN-MODEL-AUDIT.md) for verified findings, gaps and the recommended migration sequence.
