export interface PolicyEntry {
    id: number,
    name: string,
    icon: string,
    effDate?: Date,
    expDate?: Date,
    expTech: number,
    expPremium: number,
    status: PolicyEntryStatus,
    renewalToTech: number,
    renewalTech: number,
    renewalPremium: number,
    rate?: number,
    loss?: number
}

export enum PolicyEntryStatus {
    Active,
    Pending
}

