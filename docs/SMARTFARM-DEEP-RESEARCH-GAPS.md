# SmartFarm Deep Research & Gap Closure
Date: 2026-10-08

## Scope

The current opportunity exposes a useful reference-farm scenario: poultry + stud Limousin + Starlink + CCTV + future processing.

SmartFarm should remain operational infrastructure, not the commercial CRM or funding system.

## Missing operational evidence

Poultry:
- house registry
- house capacity
- flock placement/closeout
- daily mortality
- feed intake
- water
- weight samples
- climate/ventilation observations
- health events
- biosecurity checks
- labour
- utility costs
- maintenance
- collection

Cattle:
- animal ID
- pedigree/registration
- breeding events
- calving
- weights
- health events by authorised users
- movement
- sales

Infrastructure:
- Starlink device inventory
- router/network map
- CCTV inventory
- camera locations
- storage/retention
- authorised viewers
- power/backup
- maintenance
- incident log

## Integration boundaries

MOKORO: customer/contract/commission pipeline.
AgriSage: agricultural intelligence, funding-readiness and professional referral.
SmartFarm: operational farm records.
EverythingCity: future public discovery.

Avoid tight coupling.

## Smart-farm cybersecurity/privacy gap

CCTV and connectivity create personal-data and security exposure. Do not expose camera feeds or farm addresses publicly. Add role-based access, audit logs, retention policy and incident response before any cloud integration.

## KPI layer

Provide auditable calculations:
mortality %, FCR, average daily gain where appropriate, average live weight, cycle length, feed cost/kg gain, house utilisation, utility cost per bird, gross margin and downtime.

Every KPI needs formula, units, source and calculation date.

## Offline-first requirement

Farm records should remain usable without continuous connectivity, with conflict-safe sync when connectivity returns. Starlink is an enabler, not a dependency.

## UI

Narrative farm reports, visual timelines, cards, evidence/status badges and simple dashboards following the Collective Napkin AI × Gamma AI direction.

## Definition of done

No camera/network integration is claimed until the farm owner explicitly authorises it and the technical architecture is documented.
