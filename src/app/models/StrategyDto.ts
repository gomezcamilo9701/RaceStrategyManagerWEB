import { StintDto } from "./StintDto";

export interface StrategyDto {
    id: number;
    pilotId: number;
    totalLaps: number;
    createdAt: Date;
    averagePerformance: number;
    totalFuelConsumption: number;
    stints: StintDto[];

    isMostEfficient?: boolean;
}