export interface WorkQueueItem {
    icon:string,
    originator: string,
    client: string,
    line: string,
    type: WorkQueueItemType,
    status: WorkQueueItemStatus,
    created: Date
}

export enum WorkQueueItemType {
    Referral,
    Request,
    Email
}

export enum WorkQueueItemStatus {
    New,
    Pending,
    Completed
}