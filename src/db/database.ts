import Dexie, { type Table } from "dexie";
import type { Farm, Field } from "../domain/farm";

export class SmartFarmDatabase extends Dexie {
  farms!: Table<Farm, string>;
  fields!: Table<Field, string>;

  constructor() {
    super("smartfarm");
    this.version(1).stores({
      farms: "id, name, location, updatedAt",
      fields: "id, farmId, name, enterprise",
    });
  }
}

export const db = new SmartFarmDatabase();
