# SmartFarm: Universal Agricultural Production Systems Scope

**Status:** Architecture proposal for review — not a claim that every production module is implemented.  
**Geographic starting point:** Botswana.  
**Long-term scope:** Globally extensible agricultural production systems.  
**Product role:** Operational system of record for farms and agricultural enterprises.

## 1. Product direction

SmartFarm is not a cattle-management application, a livestock-only platform, or a crop-only farm diary. It is a production-system-independent farm operating platform. It must support the full range of agricultural production systems practised in Botswana and be architected so that additional systems can be configured and supported in other countries without redesigning the core.

Cattle breeding and weaning is one specialised workflow within this wider platform. Its metrics remain valid for the cattle enterprise for which they were designed; they must not become the universal data model or dashboard for every farm.

The product should serve smallholder, household, emerging, commercial, cooperative, contract, communal, estate, intensive, extensive, rain-fed, irrigated, indoor, outdoor and mixed farms. A farm may operate one enterprise or many, and may combine several production systems that share land, water, buildings, equipment, labour, inputs, finance, storage, transport and markets.

## 2. Geographic scope and production-system catalogue

The Botswana catalogue is the first reference catalogue, not a limit on the platform. The categories below are a design inventory. Their inclusion does not assert that every subtype is currently widespread, commercially established, legally permitted in every setting, or supported by a validated local production protocol. Each subtype must be tagged as **established**, **emerging**, **specialised/niche**, **potential**, or **status to verify**, with local evidence and regulatory review before advice or claims are published.

### 2.1 Livestock and animal production

- Ruminants: cattle, goats, sheep and other locally relevant domestic ruminants.
- Non-ruminants: poultry (broilers, layers, indigenous/free-range poultry, breeders, ducks, turkeys, geese and other poultry where relevant), pigs, rabbits and other small livestock.
- Other managed animal enterprises: equines, ostriches and other ratites, game/wildlife ranching or farming where lawful, and other species subject to welfare, conservation and veterinary controls.
- Production purposes: meat, milk, eggs, breeding stock, fibre/hair, hides/skins, manure, draft/work and multi-purpose systems.
- Production modes: extensive grazing, communal grazing, ranching, semi-intensive, feedlot, housed, free-range, pasture-based, contract production and integrated systems.

### 2.2 Field crops and arable production

- Cereals and grain crops, including sorghum, maize, millet and other locally or regionally relevant grains.
- Pulses and legumes, including cowpea, Bambara groundnut, common beans, groundnut and other grain legumes.
- Oilseeds, fibre crops, roots, tubers and other field crops.
- Fodder and forage crops, pasture establishment, hay, silage and conserved feed.
- Seed multiplication, planting-material production and contract/outgrower crop production.

### 2.3 Horticulture and specialised plant production

- Open-field vegetables and market gardening.
- Fruit, orchard, vineyard and perennial crop systems.
- Herbs, spices, medicinal and aromatic plants, including indigenous plant production where lawful and sustainably sourced.
- Nurseries, seedlings, propagation, ornamentals and landscaping plants.
- Protected cultivation: shade-net, tunnels, greenhouses and controlled-environment growing.
- Hydroponics, aeroponics, vertical farming and other soilless systems.
- Mushroom and cultivated fungi production.
- Agroforestry, silvopasture, orchard-livestock combinations and other tree-based agricultural systems.

### 2.4 Aquatic and integrated water-based production

- Aquaculture and fish farming, including pond, tank, cage and recirculating systems where locally appropriate and permitted.
- Hatchery, fingerling and broodstock operations.
- Aquaponics and integrated fish–plant systems.
- Other aquatic production only where species, water use, biosecurity and environmental permissions are verified.

### 2.5 Apiculture, insects and biological production

- Beekeeping and apiary management for honey, wax, propolis, pollination and other lawful hive products.
- Managed pollination services.
- Edible insect or insect-protein production where locally relevant and compliant.
- Black soldier fly and other insect bioconversion systems, where suitable and regulated.
- Vermiculture, earthworm production and biological soil-input enterprises.
- Other microbial, fungal or biological input production only as a separately governed specialist enterprise, with biosafety and product-quality controls.

### 2.6 Mixed, integrated and circular production

- Crop–livestock integration.
- Poultry–crop, pig–crop, aquaculture–crop and other nutrient/resource-linked combinations.
- Silvopasture and agroforestry–livestock systems.
- Aquaponics and other coupled production loops.
- Manure, compost, crop-residue, digestate and by-product recovery.
- Conservation agriculture, regenerative practices and diversified systems where practices are recorded as activities, not assumed to guarantee outcomes.

Integrated farms must be modelled as multiple linked enterprises with shared resources and explicit allocation rules, not forced into a single enterprise category.

## 3. Universal core: common records across all production systems

The core must describe what is common without pretending that a calf, tomato crop, beehive, fish pond and mushroom growing room have identical biological cycles.

### 3.1 Farm, organisation and place

- Farm/organisation profile, ownership or operating arrangement, contacts and permissions.
- Geospatial boundaries and named places: farms, blocks, fields, paddocks, orchards, greenhouses, sheds, poultry houses, barns, apiaries, ponds, tanks, dams, water points, stores and processing areas.
- Production units with type, area/volume/capacity, location, tenure/access status and operating status.
- Country/region settings, local timezone, preferred language, units, currency and relevant production calendar.

### 3.2 Enterprise and production-unit registry

Every farm can contain multiple enterprises. Each enterprise has a production-system category, subtype, purpose, production mode, status, start/end dates, responsible person, location links and optional specialist extension. Production units can be associated with one or more enterprises using explicit relationships.

### 3.3 Production cycles and cohorts

A common cycle framework records planned and actual start/end dates, stage, status, targets, quantities, units, events, losses, outputs and supporting evidence. System-specific extensions define stages and biological entities: crop seasons and plots; animal breeding or grow-out cohorts; apiary inspection periods; fish batches and pond cycles; mushroom flushes; nursery batches; and so forth.

Do not assume that all systems are seasonal, annual, cohort-based or measured by headcount. Perennial orchards, continuous egg production, staggered vegetable planting, multi-year breeding herds and recurring hive harvests need different cycle patterns.

### 3.4 Resources and inputs

Common records cover seed, planting material, animals, feed, fertiliser, soil amendments, crop-protection products, veterinary products, biological inputs, water, energy, fuel, packaging, equipment, infrastructure and other consumables. Capture quantity, unit, source, batch/lot where applicable, date, cost, intended use, application/use event, responsible person and relevant safety or withholding information.

### 3.5 Activities, labour and equipment

Record tasks and observations with date/time, location, enterprise, production unit, responsible person, labour time, equipment, inputs used, completion status and evidence. Examples include planting, irrigation, fertilising, spraying, weeding, pruning, feeding, breeding, vaccination (record only; no diagnosis/prescribing), milking, egg collection, hive inspection, pond management, harvesting, grading and cleaning.

### 3.6 Outputs, quality, losses and inventory

Record harvested or produced goods, by-products, waste, mortality, crop losses, rejected product, spoilage and other losses. Each record needs a defined item, quantity, unit, date, origin enterprise/unit, quality or grade where applicable, storage location, traceability reference and disposition. Product types and quality attributes are configurable; there is no single universal output unit.

### 3.7 Sales, costs and financial records

The common financial layer records revenue, purchases, operating costs, labour, services, transport, storage, processing, fees, assets and other financial events. Support cash and non-cash transactions and distinguish paid, payable, imputed and allocated amounts. Enterprise gross margin must only be calculated where revenue and attributable costs are sufficiently complete and allocation assumptions are visible. Shared costs must not be silently allocated.

### 3.8 Water, land, climate and environment

Record water sources, abstraction or delivery where measurable, storage, irrigation, use, quality tests, energy requirements and restrictions. Record soil tests, land condition, grazing/forage observations, weather observations and climate hazards with source, date, method, location, unit and confidence. Do not infer carrying capacity, forage quality, disease, soil fertility or environmental compliance from incomplete observations.

### 3.9 Documents, traceability and governance

Attach permits, certificates, invoices, movement records, laboratory results, veterinary documents, buyer specifications, photos, field notes and other evidence. Maintain audit history, provenance, consent, access control, retention and open-format export. Personal, commercial and farm-sensitive records must not be exposed through public repositories.

## 4. Specialist extension packs

The core is shared; specialist packs add typed records, workflows, calculations and reports. They must not force irrelevant fields on other production systems.

| Extension pack | Example specialist records and measures |
|---|---|
| Ruminant livestock | Animal/group identity, breeding, calving/lambing/kidding, mortality, growth, weaning, milk, wool/hair, grazing and herd/flock movement |
| Poultry | Flock/batch, placement, feed, mortality, egg production, hatchability, growth, conversion and housing conditions |
| Pigs and other monogastrics | Sow/litter or cohort records, farrowing, weaning, growth, feed, mortality and market weights |
| Field crops | Crop/variety, plot, planting, emergence, field operations, crop protection, yield, moisture, grade and post-harvest losses |
| Horticulture | Bed/row/orchard, cultivar, planting batch, phenology, pruning, irrigation/fertigation, picking rounds, grade and pack-out |
| Protected/soilless crops | Structure, growing medium/system, nutrient solution, climate/energy, crop batch, water recirculation and yield |
| Aquaculture | Species, pond/tank, stocking batch, water quality, feed, sampling, mortality, growth, harvest and biosecurity |
| Apiculture | Apiary/hive identity, colony status, inspections, queen events, treatments recorded, forage context, harvest, moisture/quality and hive products |
| Mushrooms/fungi | Species/strain, substrate batch, inoculation, incubation, flushes, yield, contamination and spent-substrate outputs |
| Nursery/seed | Variety/lot, propagation batch, germination, survival, grading, certification and dispatch |
| Agroforestry/perennial systems | Tree/crop cohort, species, spacing, establishment, survival, pruning, harvest, intercrops and long-term asset records |
| Insect/bioconversion systems | Species/batch, substrate, environmental conditions, growth, harvest, conversion outputs and safety controls |

The cattle breeding/weaning calculator is retained as the first livestock specialist workflow. Its formulas and fields remain cattle/cohort-specific and should later be joined to the shared enterprise, cycle, resource, output and financial records through stable identifiers.

## 5. Metrics and calculations: no false universality

SmartFarm must distinguish:

1. **Universal operational measures** that can be shared when units and definitions match (for example, input quantity, labour hours, water volume, harvested quantity, revenue and cost).
2. **System-specific production indicators** (for example, kg weaned per exposed cow, eggs per hen housed, tonnes per hectare, marketable pack-out percentage, fish survival or honey yield per managed hive).
3. **Context-dependent sustainability indicators** (for example, water productivity, nutrient-use efficiency, energy intensity, emissions intensity or soil-carbon change), which require a stated boundary, method, time period and credible data.
4. **Advisory or benchmark values**, which must be sourced, geographically relevant, dated and clearly separated from measured farm results.

Every KPI definition must specify numerator, denominator, unit, time period, population/cohort, inclusion/exclusion rules, data source, missing-data treatment and calculation version. A dashboard must never compare unlike systems or units as if they were directly equivalent. Benchmarks must not be invented or presented as universal targets.

## 6. Shared-resource accounting for mixed farms

Land, water, labour, machinery, buildings, energy, transport, storage and finance may serve several enterprises. SmartFarm must support:

- Direct attribution where a resource or cost is clearly linked to one enterprise.
- Measured allocation where a meter, time sheet, area, weight or other defensible driver exists.
- Explicit estimated allocation where measurement is unavailable, with method, assumptions and confidence shown.
- Unallocated shared costs where no defensible allocation exists.

Reports must show which values are measured, estimated, imputed or unallocated. Do not create precise enterprise profitability from arbitrary allocation rules.

## 7. International extensibility

The platform must not hard-code Botswana-only assumptions into the data model. Botswana is the first configuration and validation context. Country/region packs may provide:

- Local names and classifications for production systems, species, breeds, crops and varieties.
- Currency, units, language, timezone, calendar and measurement conventions.
- Regulatory, movement, food-safety, environmental and certification references.
- Locally relevant production calendars, buyer grades and reporting templates.
- Verified research, extension guidance and benchmark datasets.

The core must support multiple currencies and units, configurable taxonomies, local calendars, translation and versioned country packs. A country pack is not automatically legal advice or a guarantee of compliance.

## 8. Architecture principles

- Use a stable common domain model for farms, places, enterprises, production units, cycles/cohorts, resources, activities, outputs, inventory, finance, observations, documents and traceability.
- Use typed specialist entities and versioned extensions for biological and production-system differences. Avoid a single unstructured JSON field as the entire data model.
- Keep production-system taxonomies configurable and versioned; do not encode every crop/species as a hard-coded application branch.
- Preserve local-first/offline operation and user-owned exportable data.
- Support progressive complexity: a small producer can record a few essential facts, while a commercial operation can use batches, lots, cost centres and detailed traceability.
- Make forms conditional on production type and activity, so farmers are not asked irrelevant questions.
- Keep calculations deterministic, inspectable and testable. Recommendations belong to the separately governed AgriSage360 intelligence layer.
- Keep the boundary clear: SmartFarm records and calculates operational data; AgriSage360 provides intelligence, advisory methodology and enterprise orchestration; AgriSolutions handles field assessment and execution; specialist public knowledge destinations publish reviewed educational content.

## 9. Phased delivery

### Phase 0 — Scope and domain foundation
- Approve the universal scope and Botswana production-system catalogue.
- Inventory existing SmartFarm schemas and map them to the common domain model.
- Identify duplicate entities and preserve current data through migrations.
- Define taxonomy governance, extension contracts, units and provenance rules.

### Phase 1 — Universal farm operations
- Farm, location, production unit and enterprise registry.
- Generic production cycles/cohorts, activities, observations, resources and input use.
- Inventory, outputs/losses, sales, expenses, labour and document attachments.
- Local data export/import and multi-enterprise dashboard.

### Phase 2 — Botswana priority extension packs
Prioritise through farmer discovery and evidence, not assumptions. Candidate packs include cattle and small ruminants; poultry; pigs; field crops and pulses; horticulture; beekeeping; fodder; and aquaculture where locally validated. Keep the existing cattle workflow as a specialist pack rather than the master product model.

### Phase 3 — Mixed-farm and resource economics
- Link enterprises through shared resources and inputs.
- Introduce defensible cost allocation and enterprise-level gross margin.
- Add water, energy, labour and land-use productivity where data quality permits.
- Support mixed-farm reporting without double-counting outputs or costs.

### Phase 4 — Additional and global systems
- Add further specialist packs such as mushrooms, nurseries, protected cultivation, agroforestry, aquaponics, insects and other locally relevant systems.
- Introduce country/region configuration packs and translation.
- Validate each extension with practitioners, specialists and applicable authorities.

## 10. Acceptance criteria for the universal platform

The architecture is acceptable when:

- One farm can manage multiple distinct production systems and enterprises at the same time.
- Each enterprise can use its own production cycle, cohort, units, indicators and specialist records.
- Shared land, water, labour, equipment, inputs and costs can be linked without forced or hidden allocation.
- The system does not require animal counts for crop enterprises or crop-area fields for animal-only enterprises.
- A new production type can be introduced through taxonomy/configuration and a specialist extension, without rewriting unrelated modules.
- System-specific calculations disclose definitions, units, denominators, periods and data completeness.
- Existing cattle records can be migrated or retained without making cattle concepts mandatory for other systems.
- Local-first capture, data ownership, auditability and open export remain intact.
- Country-specific advice and compliance claims are sourced and reviewed before activation.
- No production module is represented as complete until it has passed functional, data-integrity and practitioner validation.

## 11. Immediate next steps

1. Treat this scope as the proposed product north star and review it against the existing SmartFarm schemas before changing the database.
2. Update the product specification, data model, architecture and roadmap to align with this scope.
3. Keep the cattle breeding/weaning workflow intact as the first specialist extension; do not generalise its metrics to all agriculture.
4. Define the first universal entities and migration strategy, then implement one small vertical slice at a time.
5. Reassess the research programme so cattle profitability remains a specialist case study within a broader Botswana agricultural production and farm-enterprise evidence programme.

**Important:** This document defines intended coverage and architecture. It does not mean that every listed production system, calculation, regulatory workflow or country pack is already implemented or locally validated.
