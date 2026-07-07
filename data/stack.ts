// data/stack.ts

export interface Tool {
  name: string
  tag?: string
  /** structured technical description */
  what?: string
  how?: string
  howI?: string
}

export interface StackLayer {
  frame: number
  id: string
  label: string
  command: string
  description: string
  variant: 'ink' | 'purple' | 'teal' | 'blue' | 'coral' | 'magenta'
  tools: Tool[]
}

export const stackLayers: StackLayer[] = [
  {
    frame: 0,
    id: 'foundations',
    label: 'Foundations',
    command: './foundations --load-bearing',
    description:
      'Computer Science fundamentals, plus the tools that hold everything else up.  Nobody asks about them in a demo, but everybody notices when they’re missing.',
    variant: 'ink',
    tools: [
      {
        name: 'Data Structures & Algorithms',
        tag: 'load-bearing',
        what: 'The study of how data is organised and processed efficiently.',
        how: 'Every non‑trivial program relies on choosing the right structure – arrays, trees, graphs, hash tables – and the right algorithm to go with it.',
        howI: 'Systematic DSA practice via Striver A2Z, solved 200+ LeetCode problems (mostly Medium), and applied graph traversal in my football player clustering project.',
      },
      {
        name: 'Databases & SQL',
        tag: 'load-bearing',
        what: 'Relational databases store data in tables with enforced relationships, queried via SQL.',
        how: 'The backbone of almost every production system that needs persistent, consistent data.',
        howI: 'Designed a 10‑table normalised schema for NMDC (SQL Server), and a 3‑table schema for the Pet Adoption system (MySQL).  Wrote complex queries with joins, aggregations, and window functions in both projects.',
      },
      {
        name: 'Object-Oriented Design',
        tag: 'core',
        what: 'A programming paradigm based on objects that contain data and behaviour, with principles like SOLID guiding design.',
        how: 'Makes large codebases maintainable by enforcing modularity, separation of concerns, and clear contracts between components.',
        howI: 'Applied SOLID principles during the Gate‑phase rebuild of my personal projects; can point to specific classes where Dependency Inversion or Interface Segregation was deliberately used.',
      },
      {
        name: 'Operating Systems',
        tag: 'coursework',
        what: 'The software that manages hardware resources and provides common services for application programs.',
        how: 'Every program runs on an OS; understanding processes, memory, and scheduling is essential for writing performant and safe code.',
        howI: 'Studied OSTEP in depth, including virtualisation, concurrency, and persistence.  Applied the concepts while debugging thread‑safety issues in a Java desktop app (MeterDown).',
      },
      {
        name: 'Computer Networks',
        tag: 'coursework',
        what: 'The study of how data is transmitted between computers, covering protocols like TCP/IP, HTTP, DNS.',
        how: 'Every networked application – from web servers to real‑time dashboards – depends on a correct understanding of the network layer.',
        howI: 'Studied Kurose & Ross top‑down; applied the knowledge when designing REST APIs for NMDC and the football platform, and when troubleshooting CORS and WebSocket issues.',
      },
      {
        name: 'Git & Version Control',
        tag: 'daily',
        what: 'A distributed version‑control system for tracking changes in source code.',
        how: 'Standard collaboration tool for software teams; also used for solo projects to track history, experiment with branches, and revert mistakes.',
        howI: 'Daily driver since Month 1.  I use feature branches, write meaningful commit messages, and have a 100‑day+ green‑square streak.',
      },
      {
        name: 'Linux & CLI Fluency',
        tag: 'daily',
        what: 'The command‑line interface and operating system that powers most servers and development environments.',
        how: 'Essential for server administration, scripting, and working with cloud infrastructure.',
        howI: 'Live in WSL2/Ubuntu daily.  Use zsh with oh‑my‑zsh, manage files and processes from the terminal, and run all my projects inside the Linux filesystem.',
      },
    ],
  },
  {
    frame: 1,
    id: 'infra-backend',
    label: 'Infra & Backend',
    command: './backend --keep-it-running',
    description:
      'Where the actual job lives.  Systems that stay up at 3 AM when they really should not have to.',
    variant: 'purple',
    tools: [
      {
        name: 'ASP.NET Core',
        tag: 'shipped',
        what: 'A cross‑platform framework for building web apps and APIs with .NET.',
        how: 'Powers enterprise backend systems, often deployed on IIS.',
        howI: 'Built the entire NMDC Event Management System – a role‑based internal tool with 10 tables, auth, file upload, SignalR real‑time notifications, and PDF reporting.',
      },
      {
        name: 'SignalR',
        tag: 'shipped',
        what: 'A library for ASP.NET that adds real‑time web functionality, using WebSockets where available.',
        how: 'Push notifications, live dashboards, chat – any feature that needs the server to update clients instantly.',
        howI: 'Implemented real‑time admin notifications for NMDC – when an operator submits an event, every admin browser gets a push update without a page reload.',
      },
      {
        name: 'SQL Server',
        tag: 'shipped',
        what: 'Microsoft’s relational database engine, used in enterprise environments.',
        how: 'Stores and manages data for applications of all sizes, with strong ACID compliance and integration with .NET.',
        howI: 'Designed the NMDC database schema, wrote EF Core migrations, and created indexes on frequently queried columns for performance.',
      },
      {
        name: 'Java (Swing)',
        tag: 'contributor',
        what: 'Object‑oriented language and GUI toolkit for building desktop applications.',
        how: 'Desktop applications, especially in environments where a web app is not practical.',
        howI: 'Contributor to MeterDown – helped implement booking workflows, improved SQLite database interactions, and refined UI components.',
      },
      {
        name: 'REST API Design',
        tag: 'core',
        what: 'An architectural style for designing networked applications using standard HTTP methods.',
        how: 'The default way to expose a backend service to other systems or frontends.',
        howI: 'Designed REST APIs for NMDC and the Football Impact Rating platform, following conventions for resource naming, status codes, and authentication.',
      },
      {
        name: 'FastAPI',
        tag: 'secondary',
        what: 'A modern Python web framework for building APIs with automatic OpenAPI docs.',
        how: 'High‑performance, async‑ready backend services, especially popular in ML serving.',
        howI: 'Built the backend for my Football ML Platform – serves trained models, handles request validation, and includes structured logging and rate limiting.',
      },
      {
        name: 'IIS / Windows Server',
        tag: 'deployed',
        what: 'Microsoft’s web server and operating system for hosting .NET applications.',
        how: 'Common in government and enterprise environments for on‑premises deployments.',
        howI: 'Deployed the NMDC system on an internal IIS server; configured application pool identity, HTTPS binding, and request filtering for large file uploads.',
      },
      {
        name: 'BCrypt / Auth',
        tag: 'shipped',
        what: 'An adaptive password hashing algorithm designed to be slow and resistant to brute‑force.',
        how: 'The correct way to store user passwords – never in plaintext, never with a fast hash like MD5.',
        howI: 'Implemented cookie‑based authentication in NMDC using BCrypt.Net‑Next; passwords are hashed with a work factor of 12, never stored in plaintext.',
      },
    ],
  },
  {
    frame: 2,
    id: 'data-ml',
    label: 'Data & ML',
    command: './ml --train-and-explain',
    description:
      'Where football and software stopped being two separate interests and became one query‑able habit.',
    variant: 'teal',
    tools: [
      {
        name: 'Python',
        tag: 'core',
        what: 'A high‑level, general‑purpose programming language with a strong ecosystem for data and ML.',
        how: 'The primary language for data analysis, scientific computing, and machine learning.',
        howI: 'Used in every data/ML project – from the football player impact scoring pipeline to the pet adoption analysis.  I write Python daily for backend and data work.',
      },
      {
        name: 'Scikit-learn',
        tag: 'shipped',
        what: 'The standard machine learning library for Python, providing simple interfaces for classic algorithms.',
        how: 'Classification, regression, clustering, and model evaluation in both research and production.',
        howI: 'Built the entire Football Impact Rating pipeline – trained regression and classification models, used K‑Means for player archetypes, and evaluated with proper metrics (Brier score, silhouette score).',
      },
      {
        name: 'XGBoost',
        tag: 'shipped',
        what: 'An optimised gradient boosting library, often the go‑to algorithm for tabular data.',
        how: 'Winning tool in many Kaggle competitions; provides state‑of‑the‑art accuracy with careful tuning.',
        howI: 'Outperformed Random Forest on the football rating task by ~8%, which was the core differentiator of the project.',
      },
      {
        name: 'Pandas / NumPy',
        tag: 'core',
        what: 'The foundational libraries for data manipulation and numerical computing in Python.',
        how: 'Every data project starts with these – they handle loading, cleaning, transforming, and aggregating data at scale.',
        howI: 'Cleaned and engineered features on 500,000+ football event rows; also used NumPy for implementing ML algorithms from scratch (logistic regression, gradient descent).',
      },
      {
        name: 'K-Means Clustering',
        tag: 'shipped',
        what: 'An unsupervised algorithm that groups data points into K clusters based on feature similarity.',
        how: 'Customer segmentation, anomaly detection, and in sports – player style classification.',
        howI: 'Clustered 500 synthetic football players by their statistical profiles; the algorithm correctly grouped defensive midfielders together, including my own “player” in that cluster.',
      },
      {
        name: 'Streamlit',
        tag: 'deployed',
        what: 'A Python framework that turns data scripts into interactive web apps with zero front‑end code.',
        how: 'Rapid prototyping of data dashboards, especially for internal tools or demos.',
        howI: 'Deployed the Football Impact Rating app live on Streamlit Cloud; users can pick a position and player and explore their impact score, radar charts, and archetype.',
      },
      {
        name: 'QuestPDF',
        tag: 'shipped',
        what: 'A C# library for generating PDF documents using a fluent, code‑based layout.',
        how: 'Producing reports, invoices, and any structured document without HTML‑to‑PDF conversion.',
        howI: 'Implemented one‑click PDF report generation in NMDC – site reports and event reports are built entirely in server‑side C#.',
      },
    ],
  },
  {
    frame: 3,
    id: 'product-frontend',
    label: 'Product & Frontend',
    command: './frontend --self-referential',
    description:
      'The user‑facing layer.  Also, coincidentally, the exact stack rendering the page you are reading right now.',
    variant: 'blue',
    tools: [
      {
        name: 'Next.js',
        tag: 'shipped',
        what: 'A React framework for building server‑rendered and statically generated web applications.',
        how: 'The most popular React meta‑framework, especially for sites that need SEO and fast initial loads.',
        howI: 'You are reading this sentence because of this exact framework.  I used it to build this entire neobrutalist portfolio, including the interactive education timeline and the Stack page itself.',
      },
      {
        name: 'React',
        tag: 'core',
        what: 'A JavaScript library for building user interfaces with a component‑based architecture.',
        how: 'The standard front‑end library for modern web applications.',
        howI: 'The foundation of every UI component in this portfolio, from the hero animation to the expanding skill tiles.',
      },
      {
        name: 'Tailwind CSS',
        tag: 'core',
        what: 'A utility‑first CSS framework that lets you style directly in the markup.',
        how: 'Rapidly building consistent, responsive designs without writing custom CSS.',
        howI: 'The entire design system of this portfolio – colours, spacing, borders, shadows – is implemented with Tailwind’s @theme tokens.',
      },
      {
        name: 'TypeScript',
        tag: 'core',
        what: 'A typed superset of JavaScript that compiles to plain JavaScript.',
        how: 'Catches entire classes of bugs at compile time and provides better tooling and documentation.',
        howI: 'Every line of this portfolio is written in strict TypeScript.  I’ve configured zod for runtime validation alongside compile‑time safety.',
      },
      {
        name: 'Framer Motion',
        tag: 'shipped',
        what: 'A declarative animation library for React that handles gesture, layout, and exit animations.',
        how: 'Creating performant, accessible animations that run on the compositor thread.',
        howI: 'The hero letter stagger, the page‑wipe curtain, and all micro‑interactions on this site are built with Framer Motion, gated by useReducedMotion().',
      },
      {
        name: 'Chrome Extension APIs',
        tag: 'contributor',
        what: 'Browser APIs that allow extensions to interact with web page content and browser features.',
        how: 'Building tools that modify, enhance, or analyse web pages for accessibility, productivity, or data extraction.',
        howI: 'Contributed to OpenIris – a Chrome extension that uses SVG feColorMatrix filters to correct colours for users with CVD, applying real‑time image transformations to any webpage.',
      },
      {
        name: 'JavaScript',
        tag: 'contributor',
        what: 'The core language of the web, used for interactive front‑end logic and increasingly for back‑end with Node.js.',
        how: 'Every interactive website relies on JavaScript for DOM manipulation, event handling, and API calls.',
        howI: 'Used in the OpenIris extension to inject colour matrices into active browser tabs, and throughout this portfolio for interactive components.',
      },
    ],
  },
  {
    frame: 4,
    id: 'devops-deployment',
    label: 'DevOps & Deployment',
    command: './deploy --ship-it',
    description:
      'The glue that turns a working local build into a live, monitored, continuously delivered system.',
    variant: 'coral',
    tools: [
      {
        name: 'Docker',
        tag: 'learning',
        what: 'A containerisation platform that packages an app and its dependencies into a single, portable image.',
        how: 'Consistent environments across development, staging, and production; the foundation of modern CI/CD.',
        howI: 'Currently learning – I’ll containerise the Football ML Platform so it runs identically on my machine and in the cloud.',
      },
      {
        name: 'Git (daily)',
        tag: 'daily',
        what: 'The most widely used version control system.',
        how: 'Tracking every change, collaborating, and integrating with CI/CD pipelines.',
        howI: 'I commit meaningful changes almost every day, use feature branches for new components, and my GitHub profile shows a 100+ day green‑square streak.',
      },
      {
        name: 'Vercel',
        tag: 'deployed',
        what: 'A cloud platform for hosting static sites and serverless functions, especially for Next.js.',
        how: 'Automatic deployments from Git, with preview URLs for every PR.',
        howI: 'This portfolio is hosted on Vercel; every push to main triggers a production deployment.',
      },
      {
        name: 'GitHub Actions',
        tag: 'shipped',
        what: 'A CI/CD service integrated with GitHub, running workflows defined in YAML.',
        how: 'Automating testing, linting, building, and deployment on every push.',
        howI: 'I’ve set up CI workflows for this portfolio – CodeQL security analysis, DAST scans, and automated accessibility audits run on every PR.',
      },
      {
        name: 'CI/CD',
        tag: 'core',
        what: 'The practice of continuously integrating code changes and delivering them to production automatically.',
        how: 'Reducing manual error, catching regressions early, and shipping faster.',
        howI: 'All my projects follow a lint‑test‑build‑deploy pipeline; I’ve configured status checks that block merging if any step fails.',
      },
      {
        name: 'SQLite',
        tag: 'shipped',
        what: 'A lightweight, file‑based relational database that requires no server.',
        how: 'Embedded applications, mobile apps, and small‑scale web tools.',
        howI: 'Used in MeterDown for local ride history storage and in the Pet Adoption system for rapid prototyping before switching to MySQL.',
      },
      {
        name: 'AWS (learning)',
        tag: 'learning',
        what: 'Amazon’s cloud computing platform, offering compute, storage, databases, and more.',
        how: 'The most widely adopted cloud provider; knowing core services (EC2, S3, RDS, IAM) is table stakes for backend roles.',
        howI: 'Currently working through AWS Certified Solutions Architect course; I’ll deploy the Football ML Platform on EC2 with proper IAM roles.',
      },
      {
        name: 'Infrastructure as Code (basics)',
        tag: 'learning',
        what: 'Managing cloud infrastructure through machine‑readable configuration files rather than manual clicks.',
        how: 'Repeatable, auditable, and version‑controlled infrastructure.',
        howI: 'Learning the concepts via AWS CloudFormation and Terraform; I’ve already applied the IaC principle in my Vercel configuration (vercel.json).',
      },
    ],
  },
  {
    frame: 5,
    id: 'systems-design',
    label: 'Systems Design',
    command: './design --distributed-and-maintainable',
    description:
      'The theory that turns a collection of services into a reliable, scalable, and understandable system.  Currently studying, but I can already draw on real decisions.',
    variant: 'magenta',
    tools: [
      {
        name: 'CAP Theorem',
        tag: 'conceptual',
        what: 'In a distributed system, you can only guarantee two of Consistency, Availability, and Partition Tolerance at any one time.',
        how: 'Every distributed database choice (CP vs AP) is informed by this trade‑off.',
        howI: 'I can explain which side my NMDC deployment landed on (CP – SQL Server with synchronous replication), and why my football platform would choose eventually consistent caching over strong consistency.',
      },
      {
        name: 'Microservices',
        tag: 'conceptual',
        what: 'An architectural style where an application is composed of small, independent services.',
        how: 'Allows teams to deploy and scale different parts of a system independently, at the cost of added complexity.',
        howI: 'Not used in production yet, but I’m learning the trade‑offs via DDIA and Alex Xu; I’d start with a modular monolith and split only when necessary.',
      },
      {
        name: 'Event‑Driven Architecture',
        tag: 'conceptual',
        what: 'A design where components communicate by producing and consuming events, rather than direct API calls.',
        how: 'Decouples services, improves scalability, and enables real‑time data flows.',
        howI: 'SignalR in NMDC is a form of event‑driven push; I’ve also studied Kafka and message queues conceptually for future projects.',
      },
      {
        name: 'CQRS',
        tag: 'conceptual',
        what: 'Command Query Responsibility Segregation – separating read and write models for different workloads.',
        how: 'Optimises complex domains where reads and writes have very different requirements.',
        howI: 'Not applied directly, but I recognise the pattern in the way NMDC separates audit‑log writes from dashboard reads, and I can discuss when it’s worth the complexity.',
      },
      {
        name: 'Replication & Partitioning',
        tag: 'conceptual',
        what: 'Techniques for distributing data across multiple nodes – replication copies data for availability, partitioning splits data for scale.',
        how: 'The foundation of any distributed database, from leader‑follower replication to consistent hashing.',
        howI: 'I’ve studied these in DDIA; in my football platform, I chose a simple leader‑follower replication model for the analytics database, documented in the project’s ADRs.',
      },
      {
        name: 'Consistency Models',
        tag: 'conceptual',
        what: 'The contract a distributed system provides about the order and visibility of updates.',
        how: 'Determines how stale a read might be – strong (linearisable) to eventual – and influences application design.',
        howI: 'I can articulate the trade‑off between strong and eventual consistency, and why a leaderboard might tolerate staleness while an order‑matching engine absolutely cannot.',
      },
    ],
  },
]

// Remove the old `CertificateEntry` and replace it with this:
export interface CertificateEntry {
  title: string
  issuer: string
  file: string
  type: 'image' | 'pdf'
  color: 'teal' | 'yellow' | 'coral' | 'purple' | 'blue' | 'magenta'   // ← new
}

export const certificates: CertificateEntry[] = [
  { title: 'Astral Web Hackathon',   issuer: 'Astral',              file: '/certificates/Astral Web Hackathon.png',     type: 'image', color: 'teal' },
  { title: 'DSA – Abdul Bari',       issuer: 'Udemy',               file: '/certificates/DSA_Abdul Bari.jpg',            type: 'image', color: 'yellow' },
  { title: 'Full Stack – Angela Yu', issuer: 'Udemy',               file: '/certificates/Full Stack_Angela Yu.jpg',      type: 'image', color: 'coral' },
  { title: 'Hack The Cosmos Hackathon', issuer: 'Hack The Cosmos',  file: '/certificates/Hack The Cosmos Hackethom.png', type: 'image', color: 'purple' },
  { title: 'HackerRank Java',        issuer: 'HackerRank',          file: '/certificates/Hacker Rank_Java.png',          type: 'image', color: 'blue' },
  { title: 'HackerRank Python',      issuer: 'HackerRank',          file: '/certificates/Hacker Rank_Python.png',        type: 'image', color: 'magenta' },
  { title: 'HackerRank R',           issuer: 'HackerRank',          file: '/certificates/Hacker Rank_R.png',             type: 'image', color: 'teal' },        // second cycle
  { title: 'IEEE HIZE 2026',         issuer: 'IEEE',                file: '/certificates/IEEE HIZE 2026.jpeg',           type: 'image', color: 'yellow' },
  { title: 'NPTEL – Programming in Java', issuer: 'NPTEL / IIT Kharagpur', file: '/certificates/Aditya Jha_NPTEL_JAVA.pdf', type: 'pdf', color: 'coral' },
  { title: 'NPTEL – Database Management System', issuer: 'NPTEL / IIT Kharagpur', file: '/certificates/Aditya Jha_NPTEL_DBMS.pdf', type: 'pdf', color: 'purple' },
]

export interface ProjectMini {
  name: string
  description: string
  stack: string[]
  link?: string
}

export const projectMinis: ProjectMini[] = [
  {
    name: 'NMDC Event Management',
    description: 'Internal tool for India’s largest iron ore producer – replaced WhatsApp groups and spreadsheets.',
    stack: ['ASP.NET Core', 'SignalR', 'SQL Server', 'QuestPDF', 'IIS'],
    link: '/work/nmdc',
  },
  {
    name: 'Football Impact Rating',
    description: 'ML pipeline that scores players from event data, with clustering and a live Streamlit app.',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Streamlit'],
    link: 'https://football-impact-rating.streamlit.app',
  },
  {
    name: 'MeterDown',
    description: 'Java Swing ride aggregator for Chennai, with SQLite, fare comparison, and admin analytics.',
    stack: ['Java Swing', 'SQLite', 'JFreeChart', 'Google APIs'],
    link: '/work/meterdown',
  },
  {
    name: 'OpenIris',
    description: 'Chrome extension for colour‑blind accessibility – real‑time SVG colour matrices.',
    stack: ['JavaScript', 'Chrome Extension APIs', 'SVG Filters'],
    link: '/work/openiris',
  },
  {
    name: 'Pet Adoption System',
    description: 'MySQL‑backed web app for animal shelters, with role‑based dashboards and analytics.',
    stack: ['Next.js', 'MySQL', 'TypeScript', 'Recharts'],
    link: '/work/pet-adoption',
  },
  {
    name: 'Cosmotales',
    description: 'Interactive space education site with a clickable solar system, quizzes, and a Pygame simulation.',
    stack: ['HTML/CSS', 'JavaScript', 'Python (Pygame)'],
    link: '/work/cosmotales',
  },
]

export const systemPreferences = [
  'Doom Emacs',
  'Ubuntu (WSL2)',
  'Notion',
  'Anki',
  'Youtube Music',
  'Brave',
  'Git',
]

export const stackMarqueeItems = [
  'Backend First', 'ML Second', 'ASP.NET Core', 'Python', 'Next.js', 'SignalR', 'Scikit-learn', 'TypeScript', 'SQL Server', 'Tailwind CSS', 'Framer Motion', 'Git — Daily Driver',
]

export interface LearningItem {
  label: string
  detail: string
  status: 'in progress' | 'starting soon' | 'planned' | 'completed'
}

export const learningItems: LearningItem[] = [
  {
    label: 'Implementation Fluency',
    detail: 'Daily timed rebuilds of past projects, Python Crash Course exercises, and NMDC documentation.',
    status: 'in progress',
  },
  {
    label: 'OOP & Software Design',
    detail: 'Working through Clean Code; applying SOLID to real code during rebuilds.',
    status: 'starting soon',
  },
  {
    label: 'Linux & CLI Fluency',
    detail: 'Using WSL2 daily; working through MIT’s Missing Semester.',
    status: 'in progress',
  },
  {
    label: 'DSA (Striver A2Z)',
    detail: 'Pattern‑based progression in C++; currently 100+ problems solved.',
    status: 'in progress',
  },
  {
    label: 'SQL & Databases',
    detail: 'Learning SQL (3rd Ed) and Database System Concepts; exercises run against PostgreSQL.',
    status: 'starting soon',
  },
  {
    label: 'Operating Systems',
    detail: 'OSTEP Part I – virtualisation, processes, scheduling.',
    status: 'planned',
  },
  {
    label: 'System Design',
    detail: 'DDIA and Alex Xu, starting after SQL is solid.',
    status: 'planned',
  },
]

export interface ReadingItem {
  title: string
  author: string
  status: 'in progress' | 'queued' | 'completed'
}

export const readingItems: ReadingItem[] = [
  { title: 'Python Crash Course', author: 'Eric Matthes', status: 'in progress' },
  { title: 'Clean Code', author: 'Robert C. Martin', status: 'queued' },
  { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', status: 'queued' },
  { title: 'Hands-On Machine Learning', author: 'Aurélien Géron', status: 'queued' },
  { title: 'C++ Concurrency in Action', author: 'Anthony Williams', status: 'queued' },
  { title: 'The Missing Semester', author: 'MIT', status: 'in progress' },
  { title: 'OSTEP', author: 'Remzi Arpaci-Dusseau', status: 'queued' },
  { title: 'Computer Networking: A Top-Down Approach', author: 'Kurose & Ross', status: 'queued' },
]