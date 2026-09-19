# SmartFarm Product Specification

## Problem
Many farms do not need a complicated ERP first. They need a dependable record of what was planted or stocked, what was used, what work was done, what it cost, what was harvested or sold, and what needs attention next.

SmartFarm therefore prioritises operational truth before automation.

## Primary users
- Smallholder and emerging farmers
- Mixed crop-livestock farms
- Farm managers and field officers
- Agricultural graduates providing field services
- Producer groups/cooperatives
- Agribusinesses requiring lightweight farm records

## Core entities
Farm, Production Unit, Field, Crop Cycle, Livestock Group, Individual Animal, Input Item, Inventory Transaction, Task, Labour Record, Irrigation Event, Observation, Expense, Sale, Customer, Supplier, Attachment, Advisory Note.

## MVP workflows
### Farm setup
Create a farm, production units, fields, livestock enterprises, water sources and baseline operating costs.

### Crop cycle
Record crop, variety, planting date, area, seed/planting material, irrigation, input applications, labour, observations, harvest and sales.

### Livestock
Record species, herd/flock, identification, births, purchases, movements, weights, treatments, mortalities, feed and sales. Health records must remain records, not automated diagnoses.

### Inventory
Track opening stock, purchases, use, adjustments, wastage and closing stock.

### Finance
Capture cash and non-cash farm costs and sales, then calculate simple gross margins by enterprise.

### Tasks
Create recurring and one-off work with due dates, status, responsible person and evidence.

## Non-goals for MVP
- Autonomous irrigation control
- Automated veterinary diagnosis
- Financial lending or credit decisions
- Unverified pesticide prescriptions
- Mandatory cloud accounts
- Hardware dependency

## Success criteria
A farmer should be able to operate the core record system for a production cycle with no internet connection, then export/share the data when connectivity becomes available.
