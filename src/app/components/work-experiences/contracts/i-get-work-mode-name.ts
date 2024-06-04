import { WorkMode } from "../enums/work-mode";

export interface IGetWorkModeName {
    get(workMode: WorkMode): string;
}