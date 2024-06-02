import { WorkMode } from "../enums/work-mode";
import { WorkExperience } from "../models/work-experience";

export const workExperiences: WorkExperience[] = [
    {
      companyName: 'Siteware',
      position: 'Software Engineer',
      workMode: WorkMode.Remote,
      activitiesDescription: [
        'Development of solutions for monitoring a business management system to monitor corporate performance using the technologies of Azure, C#, .NET, SQL Server.',
        'Maintenance in the legacy codebase responsible for the corporate performance module.',
        'Participation in the architectural decisions about the modules and implementation of migration to microservices and modular monolith.',
        'Build a business initiatives module to help the companies to manage ideas and solutions to reduce costs, innovate and generate value using the latest technologies C#, .NET, CosmosDB as a backend and also using TypeScript, Vue with web components as a frontend.',
        'Use of core practices like TDD for daily development practice and pair programming.',
        'Use of BDD to build high-quality software that meets user expectations and delivers value to your business or organization.',
        'Continuous Integration/Deployment Pipeline Integration, pull requests, unit/integration/e2e testing.'
      ],
      startDate: new Date('2022-11-01'),
      finishDate: undefined
    },
    {
      companyName: 'Rehagro',
      position: 'Software Developer Trainee',
      workMode: WorkMode.Remote,
      activitiesDescription: [
        'Development and maintenance of solutions conducted for soil, water, chemistry, NIRS and process analysis software, report issuance and laboratory management through a web system using PHP, Laravel as a Backend, JavaScript, Vue as a Frontend and PostgreSQL as the main database.'
      ],
      startDate: new Date('2022-06-01'),
      finishDate: new Date('2022-11-01')
    },
    {
      companyName: 'Rehagro',
      position: 'Software Developer Intern',
      workMode: WorkMode.Remote,
      activitiesDescription: [
        'Complete creation from scratch of a service desk system for the internal use of the company\'s employees using PHP, Laravel as a Backend, JavaScript, React as a Frontend and MYSQL as the main database.'
      ],
      startDate: new Date('2021-11-01'),
      finishDate: new Date('2022-06-01')
    },
    {
      companyName: 'AgroSB',
      position: 'Infrastructure IT Intern',
      workMode: WorkMode.InPerson,
      activitiesDescription: [
        'Performed support activities for users in person and remotely through TeamViewer software, management of company assets through SysAid Software, maintenance on notebooks and computers, purchase or service requests and queries in Senior ERP and service calls through SysAid.'
      ],
      startDate: new Date('2021-05-01'),
      finishDate: new Date('2021-11-01')
    }
  ];