# SmartFarm Data Model

## Identity
Farm: id, name, location, owner/contact reference, farm type, units, notes.

## Production
Field: id, farmId, name, area, areaUnit, soilNotes, irrigationSource.
CropCycle: id, fieldId, crop, variety, season, startDate, expectedHarvestDate, status, area.
LivestockGroup: id, farmId, species, breed/type, count, productionPurpose.
Animal: id, groupId, tag, sex, birthDate, status.

## Operations
Task, LabourRecord, InputItem, InventoryTransaction, IrrigationEvent, Observation, Harvest.

## Commerce
Expense, Sale, Customer, Supplier.

## Evidence
Attachment, SourceRecord, AdvisoryNote.

All externally sourced recommendations should retain source/provenance metadata where applicable.
