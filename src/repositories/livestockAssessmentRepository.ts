import { LivestockAssessmentSchema, type LivestockAssessment } from "../domain/livestockPerformance";
import { db } from "../db/database";

export const livestockAssessmentRepository = {
  async listByFarm(farmId: string): Promise<LivestockAssessment[]> {
    return db.livestockAssessments.where("farmId").equals(farmId).toArray().then((items) => items.sort((a, b) => b.periodEnd.localeCompare(a.periodEnd)));
  },
  async save(input: LivestockAssessment): Promise<LivestockAssessment> {
    const assessment = LivestockAssessmentSchema.parse(input);
    await db.livestockAssessments.put(assessment);
    return assessment;
  },
};
