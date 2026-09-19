# SmartFarm Architecture

## Architecture rule
**Local-first, domain-driven, integration-ready.**

The browser is the primary operational environment. IndexedDB is the local source of truth for the active device. Cloud sync, analytics and external advisory services are optional layers.

## Layers
### Presentation
React components, responsive screens, accessible forms and dashboard visualisations.

### Application
Use-case services such as create crop cycle, record input use, complete task, record harvest and calculate enterprise margin.

### Domain
Typed entities, validation rules, calculations and domain events.

### Persistence
Dexie over IndexedDB. Repository interfaces prevent UI code from depending directly on storage details.

### Integration
Optional adapters for weather, market information, mapping, messaging, AI/advisory services and future sensor/IoT systems.

## Data integrity
Every record should carry a stable ID, createdAt, updatedAt, status, optional notes, and provenance for imported/external information where relevant.

Use Zod schemas at input boundaries.

## Offline/sync policy
No MVP feature may require a live API merely to view or edit existing farm records.

Future synchronisation should use explicit conflict handling and append-only event concepts where practical. Never silently overwrite farmer records.

## Security
- Minimise personally identifiable information.
- Keep secrets out of the client bundle.
- Avoid embedding API keys in frontend code.
- Provide explicit export/delete controls.
- Treat farm locations and sensitive production information as controlled data.

## Deployment target
Static PWA deployment compatible with Cloudflare Pages. Backend services, when introduced, should be optional and separately deployable.
