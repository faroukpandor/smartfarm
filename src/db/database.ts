import Dexie, { type Table } from "dexie";
import type { Farm, Field } from "../domain/farm";
import type { LivestockAssessment } from "../domain/livestockPerformance";

export class SmartFarmDatabase extends Dexie {
  farms!: Table<Farm, string>;
  fields!: Table<Field, string>;
  livestockAssessments!: Table<LivestockAssessment, string>;

  constructor() {
    super("smartfarm");
    this.version(1).stores({
      farms: "id, name, location, updatedAt",
      fields: "id, farmId, name, enterprise",
    });
    this.version(2).stores({
      farms: "id, name, location, updatedAt",
      fields: "id, farmId, name, enterprise",
      livestockAssessments: "id, farmId, periodStart, periodEnd, updatedAt",
    });
  }
}

export const db = new SmartFarmDatabase();
