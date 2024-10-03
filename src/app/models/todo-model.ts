import { StatusType } from "./status-enum";

export class TodoModel {
    id?: string;
    dateCreate: string;
    dateComplete: string;
    shortDescription?: string;
    description?: string;
    status?: StatusType;

    constructor() {
        this.dateCreate = "2024-09-03T12:13:14.000000Z";
        this.dateComplete = "2024-09-03T12:13:14.000000Z";
    }
}