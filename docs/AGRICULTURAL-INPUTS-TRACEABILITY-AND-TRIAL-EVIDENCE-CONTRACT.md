# Agricultural Inputs, Batch Traceability and Trial Evidence Contract

**Status:** Proposed operational data contract for architecture review; not an implemented schema, regulatory approval, product dossier or live integration.  
**Repository:** SmartFarm  
**Scope:** Product/input identity, batch and lot traceability, storage/handling observations, application events, field-trial evidence and optional equipment/telemetry observations.  
**Portfolio boundaries:** SmartFarm records farm operations; AgriSage360/AGRISAGE owns source-linked intelligence and evidence interpretation; TerraNexa owns restricted product-development, formulation, manufacturing and quality dossiers; AgriSolutions coordinates consent-based field services and trials.

## 1. Purpose and design rule

Provide a vendor-neutral, offline-first way to record what agricultural input was used, from which batch, under what documented instructions, on which production unit, by whom, when, and with what subsequent observations and outputs.

The system must support independent products and suppliers. It must not hard-code Grow More, R16, a single manufacturer, a proprietary tracking API or one biological product category into the domain model.

**Core rule:** record observed operational facts and evidence provenance. Do not turn unverified supplier claims, GPS events, user-entered estimates or early crop observations into verified efficacy, microbial viability, certification or regulatory conclusions.

This contract is additive to the proposed universal entity model. It does not authorise a database migration or change to the current Dexie schema.

## 2. Portfolio responsibility boundaries

| Concern | System of record / owner | SmartFarm responsibility |
|---|---|---|
| Approved product/input identity | AgriSage360 intelligence catalogue, linked to TerraNexa product dossier where relevant | Reference stable product ID and user-facing approved label metadata |
| Supplier/manufacturer verification | AGRISAGE evidence register | Reference supplier/product IDs; do not expose confidential supplier terms |
| Formulation, strain, manufacturing process and trade secrets | TerraNexa restricted product dossier | Do not store or publish confidential formulation detail |
| Batch, lot, expiry and COA reference | Product quality/batch dossier; farm's received stock record | Record received batch identity, quantity, date, expiry and evidence reference |
| Regulatory classification/registration/licence | AGRISAGE source-linked regulatory register | Display jurisdiction/status and source date; never infer approval |
| Farm, field, production unit and cycle | SmartFarm | Own operational context and stable IDs |
| Application and treatment events | SmartFarm | Record actual activity and input use |
| Trial protocol and interpretation | AgriSage360 with qualified research partner; AgriSolutions operationally coordinates | Capture protocol ID, observations and outputs without claiming causation |
| Vehicle telematics | External provider/device | Import optional, timestamped vehicle observations through an adapter |
| Temperature/humidity | Separate calibrated logger/sensor | Record sensor observations, calibration and linkage to shipment/storage/batch |
| Farmer consent and personal data | SmartFarm / responsible data controller | Apply purpose limitation, access control, export and deletion policies |

## 3. Conceptual records

These are domain concepts, not a prescription to create one database table per noun. Reuse existing universal entities and introduce typed records only after the schema audit, taxonomy approval and migration plan.

### 3.1 Product or input reference

Minimum conceptual attributes:
- stable product ID and product-version ID;
- product category and intended-use classification;
- trade name and formulation type;
- supplier, legal manufacturer and registration holder as distinct relationships where known;
- country/jurisdiction and regulatory status;
- approved label/specification reference and version/date;
- permitted crops/uses and label directions only where verified;
- evidence status (verified, supplier claim, secondary lead, not verified, superseded);
- source URL/document reference, reviewer and review date.

A product being listed in a catalogue does not mean it is registered, approved, certified organic, safe for every crop or effective. The interface must distinguish these statuses.

### 3.2 Batch or lot

Minimum conceptual attributes:
- batch/lot ID and linked product version;
- manufacturer batch code;
- manufacture and expiry dates, where supplied;
- quantity, unit and package identity;
- received date, supplier and receiving location;
- label, COA, SDS and other evidence references;
- release/quarantine/rejected status and reason;
- source, actor, timestamp and audit history.

A COA reference is not proof that the COA is authentic, batch-matched or independently verified. Record issuing laboratory, report number, sample identity, method, date and accreditation/scope where available. Preserve the original document securely; do not place confidential or copyrighted documents in a public repository.

### 3.3 Storage and handling observation

Record the observed condition, not an assumed condition:
- observation type (temperature, humidity, light exposure, package integrity, storage location, handling event);
- value and unit, or categorical observation;
- observedAt timestamp and timezone;
- sensor/logger ID, make/model and calibration status where instrument-derived;
- measurement method and quality flags;
- linked batch, shipment, store or container;
- source, actor and attachment.

Manual entries must be labelled manual. Missing data remains missing. Do not infer temperature or microbial viability from vehicle GPS, ACC, geofence or vibration events.

### 3.4 Dispatch, delivery and chain of custody

Record:
- shipment/delivery ID;
- linked batch/lot and quantity;
- dispatch and receipt timestamps;
- origin/destination references with access controls;
- carrier/vehicle asset reference;
- custody handover and receiving confirmation;
- optional telematics event references;
- separate environmental sensor/logger references;
- discrepancy, damage, delay or excursion record.

R16 or another tracker may contribute vehicle location, movement, ignition/ACC and supported alerts only after exact model/platform capabilities are verified. It is not a temperature, humidity, CFU, soil or application-rate sensor. A separate calibrated device is required for environmental measurements.

### 3.5 Application event

Minimum conceptual attributes:
- application event ID;
- product and batch IDs;
- farm, enterprise, production arrangement, production unit and cycle IDs where known;
- date/time and timezone;
- actual quantity applied and unit;
- treated area/volume/number of units with explicit denominator and unit;
- application method and equipment;
- operator/recording actor;
- label/protocol reference and version;
- weather/soil/context observations where available;
- deviations, adverse events and supporting evidence.

Do not recommend or calculate an application rate unless it comes from a verified applicable label or a qualified, approved trial protocol. Preserve the difference between planned rate and actual recorded rate.

### 3.6 Trial protocol, treatment and observations

A trial record must identify:
- protocol/version and responsible qualified reviewer;
- research permission/authorisation where required;
- trial objective and pre-defined primary/secondary outcomes;
- treatment, comparator and untreated/control allocation;
- experimental unit, plot/unit identifiers, replication and randomisation method where applicable;
- baseline measurements and dates;
- application and management records;
- observation method, unit, instrument and observer;
- weather, irrigation, soil and relevant confounders;
- harvest/output quantity, quality grade and measurement basis;
- direct costs, labour and selling price where consented;
- deviations, missingness, adverse events and protocol changes.

A field observation or before/after comparison alone does not establish causation. Reports must state design limitations, sample size, uncertainty and whether results are exploratory or independently validated.

### 3.7 Quality complaint, adverse event and recall

Provide a traceable record linked to product, batch, supplier, farm, application and affected quantity. Include complaint date, reporter, description, severity, immediate containment, evidence, investigation owner, disposition, corrective action and recall/notification status. Do not overwrite original records; maintain an auditable event history.

## 4. Evidence and data-quality rules

Every material claim or measurement should carry, where applicable:
- source and source type;
- observed/issued date and capture date;
- responsible actor or instrument;
- method and units;
- jurisdiction and product/batch/version context;
- verification status and reviewer;
- confidence or quality flag;
- corrections and supersession history.

Use explicit states such as measured, manual, imported, estimated, supplier_claim, independently_verified and unknown. Never silently convert unknown to zero or estimated to measured.

Do not combine incompatible units, denominators, product versions, crop cycles or measurement methods. Calculations must publish formula, units, denominator, date range and calculation version.

## 5. Regulatory and safety gates

This data contract does not determine legal classification. For Botswana, AGRISAGE must maintain source-linked interpretation of the Agrochemicals Act, Chapter 35:09 and subsidiary regulations, while TerraNexa obtains written product/activity-specific direction from the Registrar/Division of Plant Protection.

Before any import, possession, manufacture, advertising, distribution, sale, commercial use or trial involving a regulated product/material, establish the applicable registration, licence, research permit and other approvals. Do not assume that a biological, microbial, organic or compost-related product is exempt.

The product workflow must be able to represent:
- jurisdiction and responsible authority;
- product classification and intended use;
- registration number, holder, scope, conditions and expiry;
- operator/import/manufacture/distribution licence where applicable;
- research/experimental permit and its scope/conditions;
- approved label and advertisement status;
- storage, handling, worker safety and disposal requirements;
- regulatory source, decision date and review date.

If classification or permission is unclear, show pending written regulatory clarification and block the relevant commercial workflow. This is a control requirement, not a claim that SmartFarm itself grants legal permission.

## 6. Privacy, ownership and interoperability

- Farm coordinates, farmer identities, supplier identities, prices, contracts and trial data are controlled information.
- Capture consent and purpose before using identifiable farm records for research, supplier reporting or publication.
- Use role-based access, data minimisation, export and deletion controls.
- Never commit private farm, customer, supplier, batch or personal data to public Git.
- Use stable IDs and documented, versioned import/export formats.
- Keep the operational core usable offline; integrations must fail safely and remain optional.
- Do not send farm or supplier data to a vendor API without documented rights, security review and explicit approval.

## 7. Integration and implementation sequence

1. Approve the SmartFarm universal entity/taxonomy contract and additive migration plan.
2. Map these concepts against existing schemas, the livestock feature branch and AgriSage360 catalogues; identify reuse before adding entities.
3. Define stable cross-system identifiers and a versioned, documented exchange format.
4. Build a synthetic-data prototype for one vertical slice: product reference → batch received → application event → harvest/output and cost record.
5. Add optional shipment/telematics references only after the R16 model, platform, API/data rights, cost and privacy/security are verified.
6. Add temperature/humidity observations only through separately calibrated sensor/logger integrations.
7. Test offline capture, duplicate imports, clock/timezone handling, unit validation, missing data, corrections, exports and populated-database migrations.
8. Conduct consent-based field validation only after regulatory and trial permissions are confirmed.

**No database schema, migration, API integration, paid service or production workflow is authorised by this document.** Implementation requires the architecture gate in FAR-182 and the relevant commercial/regulatory gates in FAR-184, FAR-187 and FAR-188.

## 8. Acceptance criteria for a future vertical slice

- Product, supplier and regulatory statuses are visibly distinct.
- Batch/lot records retain evidence provenance and expiry.
- Application records link to the correct production unit and cycle.
- Planned and actual quantities/rates are separate and unit-safe.
- GPS/vehicle events cannot be misrepresented as environmental or agronomic measurements.
- Sensor observations include device, timestamp, units and calibration status.
- Trial records distinguish treatment, control, baseline and outcome.
- Unknown, estimated, supplier-claimed and independently verified values remain distinguishable.
- Offline capture, export, audit history and consent controls work.
- Existing Farm/Field and livestock records remain intact.
- No legal, efficacy, organic or carbon claim is generated without the relevant independent evidence and approval.

## 9. Primary references

- Botswana, Agrochemicals Act, Chapter 35:09: https://www.gov.bw/sites/default/files/2020-03/Agrochemicals%20Act%20CHAPTER%2035%2009_0.pdf
- Botswana, Agrochemicals Regulations, Chapter 35:09: https://www.botswanatradeportal.org.bw/kcfinder/upload/files/CHAPTER%2035_09%20AGROCHEMICALS%20-%20SUBSIDIARY%20LEGISLATION.pdf
- Government of Botswana, agrochemical licensing guidance: https://www.gov.bw/agrochemicals/license-sell-import-distribute-manufacture-or-commercially-use-agrochemical
- Tadesse Mawcha et al. (2025), overview of biopesticide regulatory frameworks in selected Southern African countries: https://doi.org/10.3389/fsufs.2025.1522526

Review source currency and current legal amendments before operational use.
