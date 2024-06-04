import { EducationType } from "../enums/education-type";

export interface IGetEducationTypeName {
    get(type: EducationType): string;
}