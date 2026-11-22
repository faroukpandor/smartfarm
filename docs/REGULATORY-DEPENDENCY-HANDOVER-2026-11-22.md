# Botswana Agricultural Regulatory Dependency — SmartFarm Handover

**Date:** 22 November 2026  
**Repository:** faroukpandor/smartfarm  
**Related canonical intelligence repository:** [faroukpandor/AGRISAGE](https://github.com/faroukpandor/AGRISAGE)  
**Regulatory evidence:** [AGRISAGE PR #102](https://github.com/faroukpandor/AGRISAGE/pull/102) — open and unmerged  
**Related Linear gate:** FAR-182 — SmartFarm universal entity model and AgriSage360 taxonomy contract

## Purpose

Record the regulatory dependency between agricultural production records in SmartFarm and the authoritative regulatory research maintained in AgriSage360/AGRISAGE. This is a documentation-only handover. It does not approve any production activity, product, organism, import, field trial, schema migration or deployment.

## Verified example: Azolla

- Botswana Plant Protection Regulations, S.I. 58 of 2009, regulation 3 / First Schedule item 5 list “Azolla” among plants whose importation is prohibited.
- The Aquatic Weeds (Control) Act, Chapter 34:04, lists *Azolla filiculoides* in its Schedule. Sections 2–3 cover scheduled aquatic weeds and prohibit importation and domestic movement.
- The schedules have different taxonomic scope. Do not treat them as identical.
- These provisions establish import/movement controls. Do not hard-code or repeat an unqualified blanket cultivation ban without written regulator/legal interpretation.

Full source assessment and official source links are maintained in [AGRISAGE's Botswana Agricultural Regulatory Intelligence note](https://github.com/faroukpandor/AGRISAGE/blob/main/docs/regulatory/BOTSWANA-AGRICULTURAL-REGULATORY-INTELLIGENCE-2026-11-22.md).

## SmartFarm product boundary

SmartFarm remains the operational farm record system. It may eventually record lawful farm activities, inputs, batches, applications, water use, production and observations. It must not become the legal authority or infer permissions from an organism name or product category.

Before any regulatory feature or validation rule is implemented:

1. Complete FAR-182's universal entity/taxonomy approval and map existing schemas first.
2. Define product/organism identity with accepted scientific name, taxon/strain/variety and source provenance.
3. Treat jurisdictional legal status as sourced, dated, reviewable metadata—not a hard-coded universal boolean.
4. Distinguish import, domestic movement, collection, propagation, cultivation, research, product registration and commercial licensing.
5. Store authority, legal instrument, section/schedule, effective date, evidence source, status, conditions and reviewer.
6. Keep uncertain status as PENDING; never silently convert it to permitted.
7. Do not store private supplier/customer details or precise farm locations in public Git.

## No implementation authorised

This handover authorises no database migration, new entity, validation rule, external API, sync service, vendor integration, production release or farmer-facing legal advice. Existing local-first operation, data ownership and open-format export remain unchanged.

## Next sequence

FAR-184 remains the immediate portfolio task: verify one priority Grow More product's legal manufacturer, complete label/specification, batch COA and Botswana registration status. FAR-187 then obtains written regulator classification, including Azolla scope and biological-input categories. SmartFarm changes remain blocked until the current schema/taxonomy review is completed under FAR-182.

## Sources

- [Botswana e-Laws](https://elaws.gov.bw/)
- [Plant Protection Regulations — Government PDF](https://www.gov.bw/sites/default/files/2021-04/CHAPTER%203502%20PLANT%20PROTECTION%20SUBSIDIARY%20LEGISLATION-Plant%20Protection%20Regulations.pdf)
- [Aquatic Weeds (Control) Act — FAOLEX PDF](https://faolex.fao.org/docs/pdf/bot6484.pdf)
- [AGRISAGE regulatory intelligence PR #102](https://github.com/faroukpandor/AGRISAGE/pull/102)
