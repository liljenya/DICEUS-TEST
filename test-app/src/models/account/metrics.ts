import { Winnability } from "../winnability";

export interface Metrics {
    winnability: Winnability,
    ratioActual: number,
    ratioTarget: number,
    growthIncrease: number,
    growthActual: number,
    growthTarget: number,
    distribution: Distribution[]
}

interface Distribution {
    name: string,
    value: number
}