export interface Communication {
    title: string,
    body: string,
    name: string,
    sent: Date,
    attachmentsCount?: number,
    status?: CommunicationStatus
}

export enum CommunicationStatus {
    New = 1,
    Responded = 2
}