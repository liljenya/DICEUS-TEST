import { Winnability } from "../winnability";

export interface AccountItem {
    name: string,
    type: string,
    line: string,
    broker: string,
    renewal: Date,
    premium: number,
    rated: number,
    ratio: number,
    appetite: AccountItemAppetite,
    status: AccountItemStatus,
    triage: number,
    winnability: Winnability
}

export enum AccountItemAppetite {
    High,
    Medium,
    Cautious
}

export enum AccountItemStatus {
    Active,
    Review
}

