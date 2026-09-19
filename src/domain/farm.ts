import { z } from "zod";

export const FarmSchema = z.object({
  id: z.string().min(1),
  name: z.string().trim().min(1),
  ownerName: z.string().trim().min(1),
  location: z.string().trim().min(1),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const FieldSchema = z.object({
  id: z.string().min(1),
  farmId: z.string().min(1),
  name: z.string().trim().min(1),
  areaHa: z.number().positive(),
  enterprise: z.enum(["crop", "livestock", "mixed", "other"]),
});

export type Farm = z.infer<typeof FarmSchema>;
export type Field = z.infer<typeof FieldSchema>;
