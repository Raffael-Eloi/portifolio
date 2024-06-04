import { EducationType } from "../enums/education-type";
import { Education } from "../models/education";

export const educations: Education[] = [
    {
        type: EducationType.Bachelor,
        subject: "Computer Science",
        institution: "ULBRA Palmas",
        institutionLink: "https://ulbra-to.br/",
        startDate: new Date(2018, 0, 1),
        finishDate: new Date(2023, 5, 1)
    },
    {
        type: EducationType.PostGraduation,
        subject: "Software Architecture",
        institution: "FIAP",
        institutionLink: "https://www.fiap.com.br/",
        startDate: new Date(2023, 9, 1),
        finishDate: new Date(2024, 5, 1)
    }
];