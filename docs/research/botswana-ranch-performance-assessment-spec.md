# SmartFarm: Botswana Ranch Performance Assessment — Product and Data Specification

**Status:** Proposed, evidence-informed workflow; not a validated advisory product  
**Date:** 21 November 2026  
**Repository role:** SmartFarm is the offline-first farm operational system of record. AgriSage360 owns intelligence/advisory interpretation; AgriSolutions owns consented field execution and assessments; AnimalHealth remains the specialist veterinary evidence layer.

## 1. Product objective

Create a low-bandwidth, offline-capable ranch performance record and assessment workflow for Botswana cattle enterprises. The first version should help a farmer organise existing information and identify missing measurements. It must not claim to calculate a scientifically validated carrying capacity, diagnose animal disease, prescribe treatment, or guarantee profit improvement.

The initial deliverable is a structured data capture and export workflow, not an automated recommendation engine.

## 2. Users and operating contexts

Support three distinct contexts without assuming they are economically or operationally equivalent:

- Commercial ranch: fenced management units, formal costs, sales, labour and infrastructure.
- Cattle post/emerging producer: partial records, variable water and grazing access, limited capital and labour.
- Communal producer/group: shared grazing, collective rules, multiple owners, shared water and wildlife/livestock interfaces.

Each record must capture context. Benchmarks must not compare unlike systems without explicit adjustment.

## 3. Minimum assessment modules

### A. Farm and land context
- Farm/enterprise identifier and consent status.
- District/locality at a level appropriate to user consent.
- Ecological zone and land/vegetation description.
- Tenure/management arrangement.
- Total area, estimated grazeable area and method/source.
- Water points and seasonal availability.
- Grazing units, access arrangements and known constraints.
- Veterinary zone and official source/date for any movement or market-rule reference.

### B. Herd inventory and flows
Record opening stock, purchases, births, transfers in/out, sales, deaths, missing animals and closing stock by species, sex, age/class and production role. Store event date, source, recorder and confidence.

Required reconciliation:
Opening stock + purchases + births + transfers in − sales − deaths − transfers out − confirmed missing = expected closing stock.

Flag discrepancies; do not silently adjust counts.

### C. Breeding and calf performance
Capture breeding females exposed, bulls used, mating period, pregnancy-test result where professionally obtained, calving events, calf survival, weaning events and weights where measured. Store denominators and dates.

Core measures:
- Calving rate = cows calving / breeding females exposed.
- Calf survival to weaning = calves weaned / calves born alive.
- Weaning rate = calves weaned / breeding females exposed.
- Weaner kg per exposed female = total measured weaning weight / breeding females exposed.

Never display a percentage without showing the numerator, denominator and period. If the source data are incomplete, label the result incomplete.

### D. Animal health and losses
Record observed event, date, class affected, number affected, number dead, suspected cause (user-reported), official/veterinary diagnosis if documented, referral status and evidence attachment. Do not convert a farmer's suspicion into a confirmed diagnosis. Treatment data, if retained, must be user-entered from a veterinarian or authorised product record and handled under the separate AnimalHealth governance rules.

### E. Forage and rangeland observations
- Observation date and season.
- Observer and method.
- Fixed-point photo references.
- Ground cover/bare ground/litter observations.
- Dominant species or functional groups where the observer is competent.
- Bush encroachment/invasive species observations.
- Forage biomass only where a documented method is used.
- Laboratory forage analysis as a separately sourced record.
- Rainfall observation/source and confidence.

Do not infer dry matter, crude protein, carrying capacity or veld condition from an uncalibrated photo or satellite index.

### F. Water and infrastructure
Water source, functionality, seasonal reliability, quality test where available, pumping/energy cost, repairs, livestock access and observed grazing concentration. Infrastructure investment decisions require a separate cost-benefit calculation.

### G. Enterprise economics
Capture revenue and cost events with date, amount, currency, enterprise, class, quantity, unit, source and cash/non-cash distinction. Include labour, feed, supplements, water, fuel, repairs, veterinary services, transport, levies and marketing deductions.

Report gross margin only when revenue and variable costs are sufficiently complete. Show excluded costs and missing records. Keep capital expenditure, depreciation, financing and owner labour distinct so users do not mistake gross margin for net profit.

## 4. Outputs

First release:
1. Herd reconciliation report.
2. Reproduction and calf-survival report.
3. Mortality/missing-animal event summary.
4. Feed and operating-cost summary.
5. Rangeland observation log.
6. Water/infrastructure issue register.
7. Data completeness and confidence statement.
8. CSV/JSON export and printable summary.

Later, after validation:
- Seasonal enterprise comparison.
- Drought scenario worksheet.
- Forage sample tracking and lab-result interpretation by qualified professionals.
- Optional satellite vegetation layers, clearly labelled as screening indicators.
- Benchmarking only with consent, sufficient sample size and comparable ecological/production contexts.

## 5. Decision support: evidence and safety gates

All generated insights must:
- Identify the source record and observation date.
- State what is known, missing and inferred.
- Explain the calculation and units.
- Display uncertainty and data completeness.
- Avoid prescriptive stocking rates unless a qualified range specialist has assessed the site and method.
- Avoid veterinary diagnosis, treatment or medicine instructions.
- Defer notifiable disease, movement restrictions and trade eligibility to the Department of Veterinary Services and current official notices.
- Avoid claims that rotational grazing, high-density grazing, fencing, supplements or breed changes will necessarily improve profit.

## 6. Validation plan

### Stage 0 — Desk validation
Review the evidence register in `docs/research/botswana-ranch-profitability-evidence-review.md`. Check every formula, denominator, source and product boundary. Confirm all current SmartFarm schemas before implementation.

### Stage 1 — Synthetic test data
Create synthetic records covering:
- Complete and incomplete herd reconciliation.
- Zero denominators and missing dates.
- Births, transfers, deaths and sales.
- Different herd classes and seasons.
- Mixed cash/non-cash costs.
- Missing weights and uncertain causes of death.
- Poor connectivity and interrupted data entry.

### Stage 2 — Consent-based farmer discovery
Use the existing AgriSolutions validation process. Seek permission from a small number of farmers across distinct production contexts. Do not collect identifiable herd, farm or supplier records into public GitHub issues. Record only consented, minimised and anonymised findings.

### Stage 3 — Usability and economic validation
Test whether farmers can enter core events on a mobile device offline, reconcile herd counts, understand reports and export their data. Measure time to complete, missingness, correction rate and farmer-reported usefulness. Test willingness to pay separately from product usability.

### Stage 4 — Field validation
A qualified range professional and relevant livestock professionals review the assessment protocol. No public claims of improved profitability or veld condition until longitudinal, appropriately designed evidence supports them.

## 7. Acceptance criteria for an MVP

- Works offline for core data entry.
- Exports user-owned records in an open format.
- No mandatory cloud account or paid API.
- Formula definitions and denominators are visible.
- Incomplete data are labelled; no fabricated values.
- No veterinary diagnosis or prescribing.
- No automated carrying-capacity claim.
- No public storage of private supplier/customer/farm data.
- Test coverage includes reconciliation, missing data, denominator edge cases and export/import.
- The product is described as a record and assessment aid, not a certified professional assessment.

## 8. Implementation sequence

1. Inspect existing SmartFarm schemas and repositories; do not duplicate livestock entities.
2. Map the proposed modules to existing Farm, Livestock Group, Individual Animal, Observation, Expense, Sale, Task and Attachment entities.
3. Add only missing fields and event types after schema review.
4. Implement herd reconciliation and transparent KPI calculations as pure functions with tests.
5. Add offline forms and export.
6. Build a printable assessment report.
7. Conduct farmer usability validation before adding satellite data, predictive features or integrations.

## 9. Portfolio ownership

- **SmartFarm:** operational records, offline capture, calculations, exports and farm-level reports.
- **AgriSage360:** evidence-linked interpretation, advisory methodology and cross-enterprise intelligence.
- **AgriSolutions:** consented on-farm assessments, implementation support and field evidence collection.
- **AnimalHealth:** disease evidence, biosecurity and veterinary escalation only.
- **MOKORO DGE/EOS:** commercial acquisition, shared enterprise governance and reusable commercial workflows; do not duplicate SmartFarm's farm records or create another CRM.

## 10. Explicit non-goals

No automated carrying capacity, universal stocking-rate recommendation, pasture species prescription, animal diagnosis, treatment advice, guaranteed financial outcomes, mandatory sensor hardware, paid API, paid subscription or production deployment in this phase.
