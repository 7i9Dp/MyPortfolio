// Single source of truth for all portfolio content.
// Update text, links and projects here — components only render this data.

export interface NavItem { id: string; label: string; }
export interface SocialLink { label: string; icon: string; url: string; }
export interface SkillGroup { title: string; icon: string; accent: 'teal' | 'orange' | 'blue'; items: string[]; }
export interface Service { title: string; icon: string; summary: string; capabilities: string[]; }
export interface ProcessStep { title: string; text: string; }
export interface TimelineItem { period: string; role: string; org: string; text: string; }
export type ProjectCategory = 'Professional' | 'Freelance' | 'Personal';
export interface Project {
  title: string;
  category: ProjectCategory;
  context: string;
  summary: string;
  features: string[];
  tags: string[];
  details?: string;
  github?: string;
  live?: string;
  /** Highlighted in the "Live Demo" banner above the project grid. */
  featured?: boolean;
  /** Live client project whose link can't be shared publicly. */
  confidential?: boolean;
}

export const PROJECTS_PERMISSION_NOTE =
  'We only showcase projects we have permission to display — private client work is listed without links. The demo store below is live, built and managed by me — open it on any device and try the full shopping and payment flow.';

export const BRAND = {
  name: 'growthforgedev',
  tagline: 'Code • Build • Grow • Together',
  logo: 'assets/growthforgedev-logo.jpg',   // full circular badge (optimised from GFD.png)
  mark: 'assets/gfd-mark.png',              // GFD letters only — navbar & footer
};

export const PROFILE = {
  // name: 'Jignesh Parmar',  // personal name — hidden for now
  name: 'Ansh Parmar',
  role: 'Senior Full Stack Developer',
  experience: '4+',
  // email: 'jignesh.parmar.201098@gmail.com',  // personal email — hidden for now
  // email: 'growthforgedev@gmail.com',  // previous brand email
  email: 'growthforgedevelopement@gmail.com',
  phone: '+91 8780818623',
  phoneHref: 'tel:+918780818623',
  whatsapp: 'https://wa.me/918780818623?text=Hi%20growthforgedev%2C%20I%20would%20like%20to%20discuss%20a%20project.',
  location: 'Nadiad, Gujarat, India',
  // Personal photo — not shown for now (see commented <img> blocks in home & about templates).
  // photo: 'assets/jignesh-profile.jpg',
  heroImage: 'assets/developer-illustration.svg',
  typedRoles: ['Full Stack Developer', 'Business Software Builder', 'Reports & Dashboard Expert', '.NET Core API Specialist', 'Angular & React Developer'],
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  // { id: 'about', label: 'About' },  // About section hidden for now — re-enable with <app-about-me> in app.component.html
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

// Add your Facebook / LinkedIn / GitHub URLs here — empty links are hidden automatically.
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Facebook', icon: 'bxl-facebook', url: '' },
  { label: 'LinkedIn', icon: 'bxl-linkedin', url: '' },
  { label: 'GitHub', icon: 'bxl-github', url: '' },
  { label: 'WhatsApp', icon: 'bxl-whatsapp', url: PROFILE.whatsapp },
  { label: 'Email', icon: 'bx-envelope', url: `mailto:${PROFILE.email}` },
].filter(link => !!link.url);

export const HERO_STATS = [
  { value: '4+', label: 'Years Experience' },
  { value: '12+', label: 'Projects Delivered' },
  // { value: '33', label: 'Providers Integrated' },  // company project stat — hidden for now
  { value: '24h', label: 'Response Time' },
];

export const TIMELINE: TimelineItem[] = [
  /* Company experience — hidden for now, not to be disclosed.
  {
    period: 'Dec 2022 — Present',
    role: 'Full Stack Developer',
    org: 'Ace Infoway',
    text: 'Building and maintaining live enterprise products with Angular, .NET Core Web API and MS SQL Server — including Inteserra, i360, the Daikin Complaint Tracker and Zoho-integrated reporting tools.',
  },
  */
  {
    period: 'Ongoing',
    role: 'Freelance Web Developer',
    org: 'Independent',
    text: 'Delivering e-commerce and certification platforms for small businesses, from requirements to live deployment and SEO.',
  },
  /*
  {
    period: '2022 · 6 months',
    role: 'Full Stack Developer Intern',
    org: 'Ace Infoway',
    text: 'Built a Recruitment Management System with role-based access, interview workflows and hiring analytics.',
  },
  */
];

export const EDUCATION: TimelineItem[] = [
  { period: 'Postgraduate', role: "Master's Degree", org: 'CHARUSAT University, Changa', text: '' },
  { period: 'Undergraduate', role: "Bachelor's Degree", org: 'C.P. Patel & F.H. Shah College, Anand', text: '' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend', icon: 'bx-code-alt', accent: 'teal',
    items: ['Angular (14 – 19)', 'React / Next.js', 'TypeScript / JavaScript', 'HTML5 / CSS3 / Bootstrap', 'Responsive UI/UX Implementation'],
  },
  {
    title: 'Backend', icon: 'bx-server', accent: 'orange',
    items: ['.NET Core Web API / C#', 'ASP.NET MVC / Entity Framework', 'Hangfire Background Jobs & Scheduling', 'Node.js / WebSockets', 'RESTful APIs / JWT Authentication', 'MS SQL Server / Database Design'],
  },
  {
    title: 'Data, Reports & Documents', icon: 'bx-bar-chart-square', accent: 'blue',
    items: ['Charts & Dashboards with Date-Range Filters', 'PDF & Certificate Generation', 'Excel / CSV Import & Export', 'Thermal Printer (ESC/POS) Ticket Printing', 'Accurate Data Tracking & Audit Logs'],
  },
  {
    title: 'Integrations & Payments', icon: 'bx-plug', accent: 'teal',
    items: ['Payment Gateway Integration', 'Biometric Attendance Machine APIs', 'E-Commerce Solutions', 'Third-Party REST APIs', 'Zoho Sprints / Zoho People', 'Email & Real-Time Notifications'],
  },
  {
    title: 'Cloud, DevOps & SEO', icon: 'bx-cloud', accent: 'orange',
    items: ['AWS / Vercel Hosting & Deployment', 'Git / GitHub / GitLab / Bitbucket', 'Jenkins / CI/CD Pipelines', 'Technical SEO & SSR', 'Core Web Vitals & Lighthouse Optimization'],
  },
  {
    title: 'Security & Quality', icon: 'bx-check-shield', accent: 'blue',
    items: ['JWT Authentication & Role-Based Access', 'Secure Coding Practices (OWASP)', 'Input Validation & Error Handling', 'API Testing with Postman / Swagger', 'Code Reviews & Documentation'],
  },
  /* Replaced by "Security & Quality" — soft skills are covered in the "Why Clients Choose" block.
  {
    title: 'Soft Skills', icon: 'bx-group', accent: 'blue',
    items: ['Problem-Solving', 'Clear Communication', 'Team Collaboration', 'Project Ownership', 'Mentoring & Leadership'],
  },
  */
];

export const SERVICES: Service[] = [
  {
    title: 'Web Development', icon: 'bx-laptop',
    summary: 'Powerful, scalable websites and web applications tailored to your business needs.',
    capabilities: ['Responsive & modern design', 'Full-stack solutions', 'E-commerce platforms', 'Performance optimization', 'Secure, scalable architecture', 'Post-launch support'],
  },
  {
    title: 'Custom Business Software', icon: 'bx-customize',
    summary: 'Admin panels and internal tools built around how your business actually works — usable on desktop, tablet and mobile.',
    capabilities: ['Role-based access & secure login', 'Attendance & biometric device integration', 'Workflow & approval automation', 'Inventory, sales & billing modules', 'Excel / CSV bulk import & export', 'Scheduled background jobs (Hangfire)', 'Audit logs & activity tracking'],
  },
  {
    title: 'Reports & Data Dashboards', icon: 'bx-bar-chart-alt-2',
    summary: 'See your whole business at a glance — accurate numbers, clear charts and reports you can trust.',
    capabilities: ['Interactive charts & KPI cards', 'Date-range filters & comparisons', 'PDF, Excel & CSV report export', 'Accurate, validated data tracking', 'Sales, stock & performance insights', 'Scheduled email reports'],
  },
  {
    title: 'Ticketing, PDF & Certificates', icon: 'bx-receipt',
    summary: 'Automate the paperwork — from counter tickets on a thermal printer to hundreds of certificates in one click.',
    capabilities: ['Ticket management system', 'Thermal printer ticket & receipt printing', 'Bulk certificate generation', 'Unique ID / QR code verification', 'PDF invoices, bills & documents', 'Daily sales & collection reports'],
  },
  {
    title: 'SEO & Search Ranking', icon: 'bx-search-alt',
    summary: 'Get your business found on Google with proven strategies that grow organic traffic.',
    capabilities: ['Keyword research & strategy', 'On-page optimization', 'Technical SEO', 'Content strategy', 'Backlink building', 'Monthly performance tracking'],
  },
  {
    title: 'Social Media Advertising', icon: 'bx-trending-up',
    summary: 'Targeted Facebook & Instagram campaigns that drive qualified leads and sales.',
    capabilities: ['Campaign strategy & setup', 'Audience targeting', 'Ad creative production', 'Performance monitoring', 'ROI optimization', 'Monthly reporting'],
  },
];

// "Why clients choose growthforgedev" — commitments shown in the Services section.
export const TRUST_POINTS: { icon: string; title: string; text: string }[] = [
  { icon: 'bx-medal', title: 'Senior-Level Experience', text: '4+ years building live production web apps, APIs and databases — real systems, not just templates.' },
  { icon: 'bx-code-block', title: 'Clean Code You Own', text: 'Well-structured, documented code — full source code is handed over once the final payment is complete.' },
  { icon: 'bx-lock-alt', title: 'Secure & Confidential', text: 'Encrypted passwords, JWT authentication and role-based permissions. Your data and project details are kept private.' },
  { icon: 'bx-check-double', title: 'Accurate Data & Reports', text: 'Validated inputs, tested calculations and audit logs, so every number in your dashboard can be trusted.' },
  { icon: 'bx-calendar-check', title: 'Transparent Milestones', text: 'Clear scope, milestone-based delivery and regular progress updates on WhatsApp or email — no surprises.' },
  { icon: 'bx-support', title: 'Launch & Ongoing Support', text: 'Deployment, hosting setup, backups and post-launch support to keep your system running smoothly.' },
];

export const PROCESS: ProcessStep[] = [
  { title: 'Discovery', text: 'Understand your goals, audience and unique needs.' },
  { title: 'Strategy', text: 'Build a clear roadmap aligned with your objectives.' },
  { title: 'Execution', text: 'Design, develop and deploy with attention to detail.' },
  { title: 'Growth', text: 'Monitor, analyze and keep optimizing for results.' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Shlokayurveda — E-Commerce Website', category: 'Freelance', context: 'Live demo · Payment integration', featured: true,
    live: 'https://www.shlokayurveda.com/',
    summary: 'A complete online store for an Ayurvedic brand — customers browse products, add to cart and pay securely online, while the owner gets instant order alerts to confirm and dispatch.',
    features: ['Product catalogue, cart & checkout', 'Secure online payment gateway integration', 'Instant order email notifications', 'SEO-optimised, mobile-friendly storefront'],
    tags: ['E-Commerce', 'Payment Gateway', 'Email Automation', 'SEO'],
    details: 'Built end to end: product management, cart and checkout flow, an integrated payment gateway for secure online payments, automated order notifications for the admin, and on-page SEO so the store is easy to find and converts visitors into buyers.',
  },
  {
    title: 'Attendance Management System', category: 'Freelance', context: 'Client project · Live', confidential: true,
    summary: 'A live attendance system for a client that pulls punch-in / punch-out data straight from biometric scanners — accurate, up-to-date attendance for HR with no manual entry.',
    features: ['Biometric scanner machine integration via device API', 'Automatic punch-log sync with Hangfire background jobs', 'Accurate daily attendance records', 'Attendance reports with date-range filters'],
    tags: ['.NET Core', 'Hangfire', 'Biometric Device API', 'MS SQL'],
    details: 'The system connects to the client’s biometric attendance machines through their API. Hangfire recurring jobs fetch and process punch logs in the background on a schedule, with automatic retries if a device is temporarily unreachable — so attendance data stays complete and in sync without anyone exporting logs by hand.',
  },
  /* ---- Company (professional) projects — hidden for now, not to be disclosed. Uncomment to show again. ----
  {
    title: 'Inteserra', category: 'Professional', context: 'Telecom compliance · Live',
    summary: 'Lets subscribers enroll in government-funded phone, internet and tablet programs and switch between 33 service providers without friction.',
    features: ['33 service-provider integrations', 'Seamless provider-to-provider transfers', 'Regulatory compliance workflows'],
    tags: ['Angular', '.NET Core', 'MS SQL'],
    details: 'Inteserra provides telecommunications business and regulatory advisory services, training, project management and compliance reporting. I worked across the provider integrations so users could register once and move between providers as easily as switching an ISP.',
  },
  {
    title: 'i360', category: 'Professional', context: 'Market intelligence · Live',
    summary: 'Gives teams market-entry analysis, briefings and price-quote estimates in one product, with activity tracking across the whole system.',
    features: ['Market-entry & briefing modules', 'Price-quote estimation', 'System-wide activity tracking'],
    tags: ['Angular', '.NET Core API', 'MS SQL'],
    details: 'A large product-based platform with many interconnected modules designed to streamline workflows and give decision-makers comprehensive insights from a single dashboard.',
  },
  {
    title: 'Complaint Tracker', category: 'Professional', context: 'Daikin · Live',
    summary: 'Centralises customer complaints for Daikin so service teams can log, assign and resolve issues faster.',
    features: ['Centralised complaint logging', 'Status tracking to resolution', 'Built on Angular 19'],
    tags: ['Angular 19', 'TypeScript', 'REST APIs'],
  },
  {
    title: 'RBZ — Zoho Integration', category: 'Professional', context: 'Internal productivity',
    summary: 'Connects Zoho Sprints and Zoho People to the internal product so managers measure KPIs and share reports without manual data entry.',
    features: ['Automatic ticket & time-log sync', 'KPI evaluation from logged work', 'Date-range project reports'],
    tags: ['Angular', '.NET Core', 'Zoho APIs'],
    details: 'Project managers select a date range to generate reports showing project status, completed tasks, pending items and upcoming deliverables — keeping every team aligned and accountable.',
  },
  {
    title: 'Recruitment Management System', category: 'Professional', context: 'HR tech',
    summary: 'Moves candidates from job posting to final decision with one shared workflow for HR, interviewers and technical panels.',
    features: ['Role-based access control', 'Interview feedback & status pipeline', 'Hiring analytics dashboard'],
    tags: ['Angular', '.NET Core', 'MS SQL', 'Charts'],
    details: 'HR creates job postings, applications route to interviewers for screening and technical rounds, and feedback drives candidate status. Includes interview notifications, activity tracking and permission-based data access.',
  },
  {
    title: 'Rotary Ticket', category: 'Professional', context: 'Rotary Dolls Museum',
    summary: 'Speeds up museum counter sales with receipt-style printed tickets, live sales reports and inventory tracking.',
    features: ['Bulk ticket creation & printing', 'Dynamic sales & visitor reports', 'Stock, purchase & sales records'],
    tags: ['Angular', '.NET', 'MS SQL'],
  },
  {
    title: 'Skill Evaluation', category: 'Professional', context: 'Employee assessment',
    summary: 'Turns an Excel sheet of questions into an online test, with automated code evaluation for practical rounds.',
    features: ['Bulk question upload via Excel', 'Automated scoring for admins', 'Practical round via ZIP / Git link'],
    tags: ['Angular', '.NET Core', 'Third-party API'],
  },
  {
    title: 'Project Tracker', category: 'Professional', context: 'DevOps tooling',
    summary: 'Keeps local, staging and live servers visible in one place and alerts the team the moment something changes.',
    features: ['Local / staging / live overview', 'Real-time status notifications'],
    tags: ['Angular', '.NET Core', 'Notifications'],
  },
  ---- end of hidden company projects ---- */
  {
    title: 'CNCVMCV — Certificate Generation Platform', category: 'Freelance', context: 'Client project · Live', confidential: true,
    summary: 'Certificate platform for a training institute — create certificate templates for each course, select students by name and generate all their certificates in one click, each verifiable online with a unique ID.',
    features: ['Predefined certificate templates for different courses', 'Select students by name → certificates generated instantly', 'Bulk generation for an entire batch in one click', 'Student name & course details auto-filled', 'Online verification by unique certificate ID'],
    tags: ['Certificate Generation', 'PDF / Image Generation', 'Admin Panel'],
    details: 'The admin sets up a predefined certificate design for each course and manages student records. After choosing a course and selecting students by name, the system automatically places each student’s name and course details onto the right template and generates the certificates — for one student or a whole batch at once. Every certificate gets a unique ID, so anyone can verify it online.',
  },
  {
    title: 'Real-Time Chat App', category: 'Personal', context: 'Side project',
    summary: 'Anonymous WhatsApp-style chat — join the same room name and talk in real time, no sign-up needed.',
    features: ['Room-based real-time messaging', 'Join notifications', 'No account required'],
    tags: ['Node.js', 'WebSocket', 'Angular 16'],
  },
  {
    title: 'growthforgedev Website', category: 'Personal', context: 'This site',
    summary: 'A fully responsive, accessible single-page portfolio for the growthforgedev brand, built with Angular.',
    features: ['Mobile-first responsive layout', 'Scroll reveal & typing animations', 'SEO-ready metadata'],
    tags: ['Angular', 'TypeScript', 'CSS3'],
  },
];
