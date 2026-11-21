# SmartFarm

**Production-system-independent, offline-first farm operating system — beginning in Botswana, designed for global agricultural use.**

SmartFarm is the reusable farm-management core intended to underpin the wider **AgriSage360** ecosystem. It is designed for household, smallholder, emerging, commercial, cooperative and mixed farms where production, land, water, labour, resources, inventory and financial records must work together.

## Design principles
- Offline-first; sync is additive, never a prerequisite for daily work.
- Farmer-first UX with low-bandwidth and mobile use as defaults.
- A universal operational core for crops, livestock, horticulture, aquaculture, apiculture, agroforestry, protected cultivation, mixed farms and other production systems.
- Specialist, typed extension packs for the different biological and operational needs of each production system.
- Shared land, water, labour, infrastructure, inputs, inventory, outputs and financial records across multiple enterprises.
- Evidence-based recommendations; assumptions and uncertainty are visible.
- No invented agronomic or veterinary facts.
- Data ownership, consent and exportability by design.
- Free/open-source-friendly stack wherever practical.
- Cloudflare Pages-compatible deployment target.

## Product scope

SmartFarm is designed to manage multiple agricultural enterprises on one farm, including Botswana's diverse production systems and additional systems internationally. Cattle is one specialist workflow, not the product's organising model.

The shared core covers farms and locations, enterprises, production units, cycles/cohorts, resources and inputs, activities, labour, water, inventory, outputs and losses, sales, expenses, observations, documents, traceability and reporting. Specialist extension packs provide production-specific records and indicators.

See [Universal Agricultural Production Systems Scope](docs/AGRICULTURAL-PRODUCTION-SYSTEMS-SCOPE.md) for the production-system catalogue, domain principles, extension model, Botswana-first rollout and international architecture.

## Relationship to AgriSage360
**SmartFarm = operational system of record.**
**AgriSage360 = intelligence, advisory, field-services and enterprise layer.**

The two should integrate through stable data contracts rather than becoming one tightly coupled application.

## Current stack
React + Vite + TypeScript + Dexie/IndexedDB + Zustand + Zod.

## Planned UI/data extensions
Tailwind CSS, React Hook Form and Recharts remain planned additions; they are not yet part of the implemented dependency set.

See docs/PRODUCT-SPEC.md, docs/ARCHITECTURE.md, and docs/ROADMAP.md.
