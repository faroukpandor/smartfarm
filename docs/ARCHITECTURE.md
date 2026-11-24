# SmartFarm Architecture

## Architecture rule
**Local-first, domain-driven, production-system-independent, integration-ready.**

The browser is the primary operational environment. IndexedDB is the local source of truth for the active device. Cloud sync, analytics, integrations and external advisory services are optional layers. SmartFarm records operational facts and performs transparent, deterministic calculations; AgriSage360 owns specialist agricultural intelligence and advisory methodology.

## Domain boundaries
The shared domain model must support farms with multiple enterprises and production systems. A farm, enterprise, place, production unit and production cycle are distinct concepts:

- **Farm/organisation:** the operating entity or holding.
- **Enterprise:** a production or service activity within a farm (e.g. poultry, field crops, apiary, orchard).
- **Place:** a named/geospatial location (e.g. farm block, paddock, greenhouse, pond, shed).
- **Production unit:** the typed unit being managed (e.g. field, flock, hive, pond, tank, orchard block, mushroom room).
- **Cycle/cohort:** a time-bounded or recurring production grouping; not every system is seasonal or annual.
- **Resource/input:** what is consumed, allocated or used (water, land, labour, energy, seed, feed, fertiliser, equipment).
- **Activity/event:** what happened, when, where, by whom and with what evidence.
- **Output/loss:** what was produced, harvested, transformed, rejected, lost or disposed.
- **Financial transaction:** the money or value recorded, with direct/shared/estimated allocation explicit.

These relationships must be modelled explicitly. Do not collapse enterprise, commodity, place and production unit into one field or one universal enum.

## Architecture layers
### Presentation
React components, responsive screens, accessible forms and dashboard visualisations. Forms should reveal only fields relevant to the selected production system and activity.

### Application
Use-case services for creating farms and enterprises, recording cycles, inputs, activities, observations, outputs, sales and expenses, exporting data and calculating metrics.

### Domain
Typed entities, versioned taxonomies, Zod validation, deterministic calculations, domain events and specialist extension contracts. Avoid a single unstructured JSON blob as the entire model.

### Persistence
Dexie over IndexedDB. Repository interfaces prevent UI code from depending directly on storage details. Use additive, versioned migrations; preserve legacy records and test migrations against populated databases.

### Integration
Optional adapters for AgriSage360, weather, markets, mapping, messaging and future sensors/IoT. Integrations use versioned, documented data contracts, explicit consent and failure isolation. No external service is required for core record capture.

## Taxonomy and extension model
Production-system categories and subtype codes must be configurable and versioned rather than embedded as a closed enum in every entity. A specialist extension owns the domain-specific schema and calculations for its system. Core entities reference stable enterprise and production-unit identifiers. Extension payloads must be typed and validated; they must not turn into an ungoverned JSON dumping ground.

The AgriSage360 production-systems register is a potential taxonomy/evidence source, not an automatically trusted dependency. Its published documentation marks all 21 fact sheets and 24 cited instruments unverified. Before reuse, map its identifiers and coverage, validate sources and jurisdiction, and define an owned versioned contract. Do not copy its legal or technical claims into SmartFarm as verified facts. See [Universal Entity and Taxonomy Contract](TAXONOMY-AND-ENTITY-CONTRACT.md) for the proposed canonical entity relationships, taxonomy dimensions, stable identifiers, versioning rules and initial AgriSage360 mapping audit.

## Data integrity and provenance
Every record should carry a stable ID, createdAt, updatedAt, status, and optional notes. Where applicable also retain farmId, enterpriseId, productionUnitId, cycleId, source, observer/actor, method, unit, confidence, jurisdiction, reviewDate and attachment references. Distinguish measured, imported, estimated, imputed and user-entered values.

Use Zod schemas at input boundaries. Metrics must carry definitions and calculation versions. Unknown or missing values remain unknown; do not silently substitute zero.

## Shared resources and finance
Use direct attribution when the evidence supports it. Shared-resource allocations must store the allocation driver, method, period and whether the value is measured or estimated. Do not present fully allocated enterprise margins when shared costs have not been defensibly allocated.

## Offline and synchronisation policy
No MVP feature may require a live API merely to view or edit existing farm records. Future synchronisation must support explicit conflict handling, stable IDs, export/backup and recoverability. Never silently overwrite farmer records.

## Security and privacy
- Minimise personally identifiable information.
- Keep secrets out of the client bundle.
- Avoid embedding API keys in frontend code.
- Provide explicit export/delete controls.
- Treat farm locations, animal/production records and supplier/customer information as controlled data.
- Apply access control and consent at boundaries, not only in individual screens.

## Deployment target
Static PWA deployment compatible with Cloudflare Pages. Backend services, when introduced, should be optional and separately deployable.
