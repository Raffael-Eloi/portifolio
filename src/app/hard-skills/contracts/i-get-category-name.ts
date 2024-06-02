import { HardSkillCategory } from "../enums/hard-skill-category";

export default interface IGetCategoryName {
    get(category: HardSkillCategory): string;
}