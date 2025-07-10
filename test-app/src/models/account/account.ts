import { Metrics } from "./metrics";
import { Policies } from "./policies";
import { Status } from "./status";
import { Document } from "./document";
import { Details } from "./details";
import { Communication } from "./communication";
import { PolicyEntry } from "./policy-entry";

export interface Account {
    name: string,
    location: string,
    existingAccount: number,
    broker: string,
    underwriter: string,
    metrics: Metrics,
    policies: Policies,
    status: Status,
    document: Document,
    details: Details,
    communications: Communication[],
    policyEntries: PolicyEntry[]
}

