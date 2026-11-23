# Agricultural Biological Inputs — SmartFarm Traceability Handover

**Date:** 23 November 2026  
**Status:** Documentation-only integration handover. No application code, schema, migration, API, sync, deployment or production behaviour changed.

## Canonical ownership

- **AGRISAGE / AgriSage360:** source-linked supplier, product, competitor, evidence and Botswana regulatory intelligence.
- **SmartFarm:** offline-first operational record for farms, production units, crop cycles, inventory references, input applications, costs, observations and harvest outcomes.
- **AgriSolutions:** qualified field assessments, service delivery and consent-based trial execution.
- **TerraNexa Global:** any later product specification, formulation, manufacturing and quality-system work.
- **MOKORO AgriValue Network:** buyer requirements, sourcing, preorder, fulfilment and transaction economics.

Do not duplicate AgriSage360's regulatory master register inside SmartFarm. SmartFarm may reference an approved product identifier and retain the source snapshot needed for a farm's historical record, but it must not infer legal approval from a product's presence in a catalogue.

## Candidate operational record flow (concept only)

1. **Product reference:** stable external/canonical product ID, trade name, manufacturer, formulation type and source record.
2. **Batch/lot:** batch identifier, manufacture/expiry dates, COA reference, label/specification version, storage conditions and source provenance.
3. **Regulatory snapshot:** jurisdiction, status, authority/source, effective/checked dates and review state. This is a reference to the authoritative AgriSage360 record, not an independently calculated permission.
4. **Farm application event:** farm/production unit, crop/cycle, product and batch references, date/time, applied quantity and unit, area/denominator, method, operator and label/protocol source. Never invent or prefill a dose.
5. **Trial observation:** protocol/version, treatment/control allocation, baseline, site/soil/water context, dates, measurement units, observer and evidence provenance.
6. **Harvest and economics:** harvest quantity/quality, sales or valuation basis, input/labour/water costs and gross-margin calculation with assumptions visible.

All records should support offline creation, later synchronisation without silent overwrite, exportability and correction history. Store only the minimum data required; farm identity, supplier terms, precise farm locations and customer records remain private.

## Evidence and safety rules

- A product listing is not proof of registration, quality, efficacy or permission to use.
- Manufacturer marketing claims remain **MANUFACTURER CLAIM** until independently supported.
- Product registration, organic certification/attestation and field efficacy are distinct evidence dimensions.
- Record exact label and batch versions; do not generalise one SKU's label to another.
- Never recommend an application rate unless it comes from a verified current label or an approved qualified protocol.
- A trial requires applicable regulatory/research permissions, informed participant consent, an approved protocol and clear data ownership.
- Biological product viability, storage and compatibility require technical evidence; do not infer them from a generic “organic” designation.

## Approval and implementation gates

- **FAR-182:** approve the universal entity/taxonomy contract before changing SmartFarm's data model.
- **FAR-184:** current immediate research priority is assistant-led public-source verification of one Grow More product (GROW COMPOSTIA/COMPOSITA). It remains HOLD pending primary technical documents and Botswana regulatory confirmation.
- **FAR-187:** obtain authoritative Botswana regulatory classification and clarify product/operator requirements.

Until these gates are passed, this handover does not authorise a database migration, new legal-status entity, product catalogue implementation, vendor API, automatic sync, purchase, import, possession, sale, distribution, advertising, field trial or production rule.

## Linked canonical intelligence

- [AgriSage360 competitive opportunity assessment](https://github.com/faroukpandor/AGRISAGE/blob/docs/botswana-regulatory-intelligence-2026-11-22/docs/research/BOTSWANA-BIOFERTILISER-COMPETITIVE-OPPORTUNITY-ASSESSMENT-2026-11-23.md)
- [Biological inputs opportunity register](https://github.com/faroukpandor/AGRISAGE/blob/docs/botswana-regulatory-intelligence-2026-11-22/data/market-intelligence/BOTSWANA-BIOLOGICAL-INPUTS-OPPORTUNITY-REGISTER-2026-11-23.csv)
- [AGRISAGE regulatory and research PR #102](https://github.com/faroukpandor/AGRISAGE/pull/102)
- [FAR-182 taxonomy approval](https://linear.app/faroukpandor/issue/FAR-182/approve-smartfarm-universal-entity-model-and-agrisage360-taxonomy)
- [FAR-184 product evidence gate](https://linear.app/faroukpandor/issue/FAR-184/tng-02-growfast-mystery-shop-and-farmer-discovery)
- [FAR-187 regulatory classification](https://linear.app/faroukpandor/issue/FAR-187/tng-05-botswana-regulatory-classification-licensing-and-research)
