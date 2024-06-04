import { IGetEducationTypeName } from "../contracts/i-get-education-type-name";
import { EducationType } from "../enums/education-type";

export default class GetEducationTypeName implements IGetEducationTypeName {
    get(type: EducationType): string {
        switch (type) {
            case EducationType.Bachelor:
                return "Bachelor";
            
            case EducationType.PostGraduation:
                return "Post Graduation";
        
            default:
                return "";
        }
    }
}