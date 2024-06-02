import IGetCategoryName from "../contracts/i-get-category-name";
import { HardSkillCategory } from "../enums/hard-skill-category";

export default class GetCategoryName implements IGetCategoryName {
    public get(category: HardSkillCategory): string {
        switch (category) {
            case HardSkillCategory.Backend:
                return "Backend";
            
            case HardSkillCategory.Frontend:
                return "Frontend";
            
            case HardSkillCategory.Testing:
                return "Testing";
            
            case HardSkillCategory.Database:
                return "Database";
            
            case HardSkillCategory.DevOps:
                return "DevOps";

            case HardSkillCategory.Architecture:
                return "Architecture";

            case HardSkillCategory.EngineeringConcepts:
                return "Engineering Concepts";
        
            default:
                return "";
        }
    }
}