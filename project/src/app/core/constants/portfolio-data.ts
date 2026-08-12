import { PersonalInfo } from '../models/contact.model';
import { WorkExperience } from '../models/experience.model';
import { SkillCategory } from '../models/skill.model';
import { Achievement } from '../models/achievement.model';
import { CaseStudy } from '../models/case-study.model';
import { Project } from '../models/project.model';
import { Education } from '../models/education.model';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'RAJITH S',
  title: 'Frontend Developer | Angular Specialist',
  subtitle: 'Angular-focused frontend developer with approximately 2 years of experience building scalable, responsive, and maintainable web applications.',
  email: 'rajithsivaece@gmail.com',
  phone: '+91 9344216679',
  location: 'Nagercoil, Tamil Nadu 629501, India',
  linkedin: 'https://www.linkedin.com/in/rajith-s',
  github: 'https://github.com/rajith-yes',
  availability: 'Immediate Joining',
  languages: [
    { language: 'Tamil', proficiency: 'Native' },
    { language: 'English', proficiency: 'Professional Proficiency' }
  ]
};

export const WORK_EXPERIENCE: WorkExperience = {
  role: 'Angular UI Developer',
  company: 'Yorosis Technologies',
  duration: 'June 2024 – August 2026',
  location: 'India',
  summary: 'Developed scalable, responsive, and maintainable Angular web applications, built reusable custom UI component libraries, integrated REST APIs, and optimized application performance.',
  highlights: [
    'Developed Angular-based web applications with modern Angular practices (Signals, Standalone Components, RxJS).',
    'Designed and maintained custom reusable Angular component libraries (yoro-table, yoro-card, yoro-button) to standardize UI development across projects.',
    'Integrated complex RESTful APIs with RxJS, implementing robust HTTP Interceptors for centralized error handling and authentication headers.',
    'Implemented Angular Route Guards for authorization, protected routes, and permission-based admin access control.',
    'Developed event-driven CRM automations for deals, leads, contacts, projects, tasks, and application payment workflows.',
    'Integrated Facebook Ads and LinkedIn Ads for centralized social media ad management and audience targeting.',
    'Built centralized application usage tracking with organization quotas and admin override controls.',
    'Participated in Angular version migration/upgrade initiatives, ensuring smooth frontend component transitions.',
    'Achieved 40% reduction in application load times and 45% bundle size reduction through lazy loading, code splitting, and tree shaking.',
    'Wrote comprehensive unit and integration tests using Jest, contributing to 85%+ test coverage.',
    'Collaborated closely with backend developers (Spring Boot, Node.js, MySQL) on API contracts, webhooks, and request/response data models.',
    'Followed Agile/Scrum methodologies with active participation in daily stand-ups, sprint planning, grooming, and code reviews.',
    'Mentored 3 junior developers on Angular best practices, TypeScript, RxJS, frontend standards, folder structure, and standardized UI development.'
  ],
  techStack: [
    'Angular 12–Latest', 'TypeScript', 'RxJS', 'Angular Signals', 'Standalone Components',
    'REST APIs', 'HTTP Interceptors', 'Route Guards', 'Bootstrap', 'Jest', 'Git', 'JIRA'
  ],
  customerSupportExperience: {
    description: 'Participated in the company\'s rotating developer-support process, where one UI developer and one backend developer handled customer queries for a scheduled week-long rotation.',
    channels: ['Phone', 'Email', 'WhatsApp', 'Zoom', 'Google Meet', 'In-app Tickets', 'Sales Escalations', 'Support Systems'],
    valueProposition: 'Combining development expertise with direct customer troubleshooting allowed deep understanding of underlying technical causes rather than just addressing symptoms—enabling rapid resolution of UI, API, and application integration issues.'
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Core',
    icon: 'bi-code-slash',
    skills: [
      'Angular 12–Latest', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3',
      'RxJS', 'Angular Signals', 'Standalone Components', 'Angular Router'
    ]
  },
  {
    title: 'UI & Styling',
    icon: 'bi-palette',
    skills: [
      'Bootstrap', 'Tailwind CSS', 'Angular Material', 'Responsive Design',
      'Mobile-First Design', 'CSS Grid', 'Flexbox'
    ]
  },
  {
    title: 'API Integration',
    icon: 'bi-cloud-arrow-down',
    skills: [
      'RESTful APIs', 'HTTP Client', 'JSON', 'Async Programming',
      'Error Handling', 'Retry Mechanisms', 'HTTP Interceptors', 'Route Guards', 'Webhooks'
    ]
  },
  {
    title: 'State Management',
    icon: 'bi-diagram-3',
    skills: [
      'RxJS', 'Subject', 'BehaviorSubject', 'Angular Signals',
      'NgRx', 'Service-based State Management'
    ]
  },
  {
    title: 'Testing & QA',
    icon: 'bi-check-circle',
    skills: [
      'Jest', 'Unit Testing', 'Integration Testing', 'Code Coverage'
    ]
  },
  {
    title: 'Performance',
    icon: 'bi-speedometer2',
    skills: [
      'Lazy Loading', 'Tree Shaking', 'Code Splitting', 'Bundle Size Optimization'
    ]
  },
  {
    title: 'Development Tools',
    icon: 'bi-tools',
    skills: [
      'Git', 'GitHub', 'JIRA', 'Chrome DevTools', 'Visual Studio Code', 'Postman'
    ]
  },
  {
    title: 'CI/CD & DevOps Workflow',
    icon: 'bi-cpu',
    skills: [
      'Docker', 'Jenkins', 'GitHub Actions', 'CI/CD'
    ]
  },
  {
    title: 'Development Practices',
    icon: 'bi-kanban',
    skills: [
      'Agile/Scrum', 'Code Reviews', 'Version Control', 'Debugging', 'Backend Collaboration'
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    metric: '40%',
    label: 'Load Time Reduction',
    description: 'Reduction in application load times achieved through lazy loading, code splitting, and bundle optimization.',
    icon: 'bi-lightning-charge'
  },
  {
    metric: '35%',
    label: 'Dev Time Reduction',
    description: 'Reduction in development time through custom reusable Angular component library architecture.',
    icon: 'bi-clock-history'
  },
  {
    metric: '98%',
    label: 'API Reliability',
    description: 'API integration reliability using RxJS error handling, retry mechanisms, and HTTP interceptors.',
    icon: 'bi-shield-check'
  },
  {
    metric: '20%',
    label: 'Faster Feature Delivery',
    description: 'Accelerated feature delivery by establishing standardized UI component patterns and workflow automation.',
    icon: 'bi-rocket-takeoff'
  },
  {
    metric: '85%+',
    label: 'Unit Test Coverage',
    description: 'Maintained comprehensive unit and integration test coverage across core Angular application modules with Jest.',
    icon: 'bi-patch-check'
  },
  {
    metric: '45%',
    label: 'Bundle Size Reduction',
    description: 'Reduction in total production bundle size through tree shaking and optimized asset loading.',
    icon: 'bi-box-seam'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'crm-automations',
    title: 'CRM Automations Integration',
    category: 'Application Integration & Workflow',
    overview: 'Built dynamic frontend interfaces and event-driven API integrations for enterprise CRM automation pipelines.',
    keyHighlights: [
      'Developed UI controls for Deal, Lead, Contact, Project, and Task automation workflows.',
      'Implemented real-time status updates and payment-related automation interfaces.',
      'Integrated RESTful endpoints with RxJS to handle dynamic user triggers seamlessly.'
    ],
    techStack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'Bootstrap']
  },
  {
    id: 'social-media-ads',
    title: 'Social Media Ads Integration',
    category: 'External Platform Integration',
    overview: 'Integrated multi-platform ad campaign management interfaces for Facebook Ads and LinkedIn Ads into a unified dashboard.',
    keyHighlights: [
      'Built a centralized advertising management interface for cross-platform campaign overview.',
      'Configured frontend analytics view to support audience targeting based on ad metrics.',
      'Ensured consistent error handling and retry mechanisms for third-party API interactions.'
    ],
    techStack: ['Angular', 'RxJS', 'RESTful APIs', 'JSON', 'Bootstrap']
  },
  {
    id: 'app-usage-tracking',
    title: 'Application Usage Tracking & Quotas',
    category: 'Admin UI & Security Architecture',
    overview: 'Designed admin-only quota management interfaces and centralized usage tracking mechanisms across organization accounts.',
    keyHighlights: [
      'Implemented permission-based access using Angular Route Guards for admin control.',
      'Utilized HTTP Interceptors to attach organization headers and monitor quota limits.',
      'Built real-time usage reset controls and limit modification forms.'
    ],
    techStack: ['Angular', 'Route Guards', 'HTTP Interceptors', 'Angular Signals', 'Bootstrap']
  },
  {
    id: 'component-library',
    title: 'Reusable Angular Component Library',
    category: 'Frontend Architecture & Standardization',
    overview: 'Created standardized, reusable UI components (yoro-table, yoro-card, yoro-button) to streamline UI development across projects.',
    keyHighlights: [
      'Developed yoro-table with dynamic sorting, filtering, and pagination inputs.',
      'Standardized yoro-card and yoro-button components to ensure unified design tokens.',
      'Facilitated smooth Angular version migrations by isolating UI presentation from framework upgrades.'
    ],
    componentsMentioned: ['yoro-table', 'yoro-card', 'yoro-button'],
    impact: 'Achieved 35% reduction in development time and simplified Angular version upgrade initiatives.',
    techStack: ['Angular Standalone Components', 'TypeScript', 'CSS3', 'Bootstrap']
  },
  {
    id: 'performance-optimization',
    title: 'Angular Performance Optimization',
    category: 'Frontend Performance',
    overview: 'Executed comprehensive bundle size optimization and lazy loading architecture across the application codebase.',
    keyHighlights: [
      'Restructured routes to enforce feature-level lazy loading and code splitting.',
      'Eliminated dead code and unused dependencies via tree shaking optimization.',
      'Optimized ChangeDetection strategy and RxJS subscription lifecycles.'
    ],
    impact: 'Reduced initial application load times by 40% and total production bundle size by 45%.',
    techStack: ['Angular Router', 'Webpack / Esbuild', 'RxJS', 'Chrome DevTools']
  }
];

export const FEATURED_PROJECT: Project = {
  title: 'Task Management System',
  subtitle: 'Full-Featured Personal Task Tracking & Analytics Dashboard',
  description: 'A responsive task management web application built with Angular and Supabase. Features complete authentication, task CRUD operations, priority and status tracking, dynamic charts, advanced search, and real-time filtering, deployed on Vercel.',
  technologies: [
    'Angular', 'TypeScript', 'Supabase', 'Vercel', 'RxJS', 'Bootstrap', 'CSS3'
  ],
  features: [
    'User Registration & Login Authentication',
    'Task Creation, Editing, and Deletion (CRUD)',
    'Task Status & Priority Management (Low, Medium, High)',
    'Analytics Dashboard with Interactive Charts',
    'Instant Keyword Search & Multi-criteria Filtering',
    'Mobile-First Responsive Layout',
    'Supabase Database & Auth Integration',
    'Production Deployment on Vercel'
  ],
  deploymentPlatform: 'Vercel',
  database: 'Supabase',
  liveUrl: 'https://project-rajith2.vercel.app'
};

export const EDUCATION_LIST: Education[] = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Electronics and Communication Engineering',
    institution: 'University College of Engineering, Nagercoil',
    year: '2023',
    note: 'Lateral Entry'
  },
  {
    degree: 'Diploma',
    field: 'Electronics and Communication Engineering',
    institution: 'N.M.S. Kamaraj Polytechnic College',
    year: '2020'
  }
];
