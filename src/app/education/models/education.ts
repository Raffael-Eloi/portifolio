import { EducationType } from "../enums/education-type";

export interface Education {
    type: EducationType,
    subject: string,
    institution: string,
    institutionLink: string,
    startDate: Date,
    finishDate: Date
}