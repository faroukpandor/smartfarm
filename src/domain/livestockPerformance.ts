import { z } from "zod";

export const LivestockAssessmentSchema = z.object({
  id: z.string().min(1),
  farmId: z.string().min(1),
  periodStart: z.string().date(),
  periodEnd: z.string().date(),
  breedingFemalesExposed: z.number().int().nonnegative(),
  femalesCalved: z.number().int().nonnegative(),
  calvesBornAlive: z.number().int().nonnegative(),
  calvesWeaned: z.number().int().nonnegative(),
  totalWeaningWeightKg: z.number().finite().nonnegative().optional(),
  notes: z.string().max(2000).optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
}).superRefine((record, ctx) => {
  if (record.periodEnd < record.periodStart) {
    ctx.addIssue({ code: "custom", path: ["periodEnd"], message: "Period end must be on or after period start." });
  }
  if (record.femalesCalved > record.breedingFemalesExposed) {
    ctx.addIssue({ code: "custom", path: ["femalesCalved"], message: "Females calved cannot exceed breeding females exposed." });
  }
  if (record.calvesWeaned > record.calvesBornAlive) {
    ctx.addIssue({ code: "custom", path: ["calvesWeaned"], message: "Calves weaned cannot exceed calves born alive." });
  }
});

export type LivestockAssessment = z.infer<typeof LivestockAssessmentSchema>;

export interface HerdPerformanceMetrics {
  calvingRatePercent?: number;
  calfSurvivalToWeaningPercent?: number;
  weaningRatePercent?: number;
  kgWeanedPerExposedFemale?: number;
}

export function calculateHerdPerformance(record: Pick<LivestockAssessment,
  "breedingFemalesExposed" | "femalesCalved" | "calvesBornAlive" | "calvesWeaned" | "totalWeaningWeightKg"
>): HerdPerformanceMetrics {
  const exposed = record.breedingFemalesExposed;
  return {
    calvingRatePercent: exposed > 0 ? (record.femalesCalved / exposed) * 100 : undefined,
    calfSurvivalToWeaningPercent: record.calvesBornAlive > 0 ? (record.calvesWeaned / record.calvesBornAlive) * 100 : undefined,
    weaningRatePercent: exposed > 0 ? (record.calvesWeaned / exposed) * 100 : undefined,
    kgWeanedPerExposedFemale: exposed > 0 && record.totalWeaningWeightKg !== undefined
      ? record.totalWeaningWeightKg / exposed
      : undefined,
  };
}
