import { HardSkillCategory } from "../enums/hard-skill-category";
import { HardSkill } from "../models/hard-skill";

export const hardSkills: HardSkill[] = [
    { name: 'Vue', category: HardSkillCategory.Frontend },
    { name: 'Angular', category: HardSkillCategory.Frontend },
    { name: 'jQuery', category: HardSkillCategory.Frontend },
    { name: 'JavaScript', category: HardSkillCategory.Frontend },
    { name: 'TypeScript', category: HardSkillCategory.Frontend },

    { name: 'C#', category: HardSkillCategory.Backend },
    { name: '.NET', category: HardSkillCategory.Backend },
    { name: 'PHP', category: HardSkillCategory.Backend },
    { name: 'Laravel', category: HardSkillCategory.Backend },
    { name: 'Python', category: HardSkillCategory.Backend },

    { name: 'SQL', category: HardSkillCategory.Database },
    { name: 'NoSQL', category: HardSkillCategory.Database },
    { name: 'MySQL', category: HardSkillCategory.Database },
    { name: 'PostgreSQL', category: HardSkillCategory.Database },
    { name: 'CosmosDB', category: HardSkillCategory.Database },
    { name: 'MongoDB', category: HardSkillCategory.Database },
    
    { name: 'Azure', category: HardSkillCategory.DevOps },
    { name: 'AWS', category: HardSkillCategory.DevOps },
    { name: 'Cloud Computing', category: HardSkillCategory.DevOps },
    { name: 'Git', category: HardSkillCategory.DevOps },
    { name: 'Docker', category: HardSkillCategory.DevOps },
    { name: 'CI/CD', category: HardSkillCategory.DevOps },
    { name: 'Terraform', category: HardSkillCategory.DevOps },
    { name: 'Kubernetes', category: HardSkillCategory.DevOps },
    { name: 'Azure Functions', category: HardSkillCategory.DevOps },

    { name: 'NUnit', category: HardSkillCategory.Testing },
    { name: 'XUnit', category: HardSkillCategory.Testing },
    { name: 'MSTest', category: HardSkillCategory.Testing },
    { name: 'Jest', category: HardSkillCategory.Testing },
    { name: 'Specflow', category: HardSkillCategory.Testing },
    { name: 'Unit Testing', category: HardSkillCategory.Testing },
    
    { name: 'OOP', category: HardSkillCategory.EngineerConcepts },
    { name: 'SOLID', category: HardSkillCategory.EngineerConcepts },
    { name: 'TDD', category: HardSkillCategory.EngineerConcepts },
    { name: 'BDD', category: HardSkillCategory.EngineerConcepts },
    { name: 'DDD', category: HardSkillCategory.EngineerConcepts },
    
    { name: 'Microservices', category: HardSkillCategory.Architecture },
    { name: 'Monolith', category: HardSkillCategory.Architecture },
    { name: 'Modular Monolith', category: HardSkillCategory.Architecture },
  ];