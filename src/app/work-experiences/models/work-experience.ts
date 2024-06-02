import { WorkMode } from "../enums/work-mode";

export interface WorkExperience {
    companyName: string,
    position: string,
    workMode: WorkMode,
    activitiesDescription: string[];
    startDate: Date;
    finishDate?: Date;
}