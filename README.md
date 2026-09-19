# SmartFarm

**Offline-first farm operating system for Botswana and climate-resilient agriculture.**

SmartFarm is the reusable farm-management core intended to underpin the wider **AgriSage360** ecosystem. It is designed for smallholder, emerging, commercial and mixed farms where connectivity, cash flow, labour, water, livestock and crop records must work together.

## Design principles
- Offline-first; sync is additive, never a prerequisite for daily work.
- Farmer-first UX with low-bandwidth and mobile use as defaults.
- Crop, livestock, irrigation, inputs, labour, finance and task records in one coherent model.
- Evidence-based recommendations; assumptions and uncertainty are visible.
- No invented agronomic or veterinary facts.
- Data ownership, consent and exportability by design.
- Free/open-source-friendly stack wherever practical.
- Cloudflare Pages-compatible deployment target.

## Initial scope
1. Farm and field/enterprise profiles
2. Crops and production cycles
3. Livestock and herd records
4. Inputs and inventory
5. Irrigation and water-use records
6. Tasks, labour and costs
7. Sales, expenses and gross-margin tracking
8. Weather/observation logging
9. Farm dashboard and reports
10. Offline data export/import

## Relationship to AgriSage360
**SmartFarm = operational system of record.**
**AgriSage360 = intelligence, advisory, field-services and enterprise layer.**

The two should integrate through stable data contracts rather than becoming one tightly coupled application.

## Current stack
React + Vite + TypeScript + Dexie/IndexedDB + Zustand + Zod.

## Planned UI/data extensions
Tailwind CSS, React Hook Form and Recharts remain planned additions; they are not yet part of the implemented dependency set.

See docs/PRODUCT-SPEC.md, docs/ARCHITECTURE.md, and docs/ROADMAP.md.
