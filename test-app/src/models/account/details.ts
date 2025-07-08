import { Winnability } from "../winnability";

export interface Details {
    score: number,
    winnability: Winnability,
    marketAvg: number,
    competitor: number,
    increasing: WinnabilityChange[],
    decreasing: WinnabilityChange[],
    recommendations: Recommendations[]
}

interface WinnabilityChange {
    name: string,
    value: number,
    change: number
}

interface Recommendations {
    title: string,
    description: string
}