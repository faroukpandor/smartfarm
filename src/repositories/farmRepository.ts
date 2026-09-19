import { FarmSchema, FieldSchema, type Farm, type Field } from "../domain/farm";
import { db } from "../db/database";

export const farmRepository = {
  async list(): Promise<Farm[]> {
    return db.farms.toArray();
  },
  async get(id: string): Promise<Farm | undefined> {
    return db.farms.get(id);
  },
  async save(input: Farm): Promise<Farm> {
    const farm = FarmSchema.parse(input);
    await db.farms.put(farm);
    return farm;
  },
};

export const fieldRepository = {
  async listByFarm(farmId: string): Promise<Field[]> {
    return db.fields.where("farmId").equals(farmId).toArray();
  },
  async save(input: Field): Promise<Field> {
    const field = FieldSchema.parse(input);
    await db.fields.put(field);
    return field;
  },
};
