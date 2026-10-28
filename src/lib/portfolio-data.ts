export const LINKS = {
  github: "https://github.com/utkarsh25bcon2341-ship-it",
  email: "utkarsh.25bcon2341@jecrcu.edu.in",
};

export const PROFILE = {
  name: "Utkarsh",
  role: "Computer Science Engineering Student",
  focus: "Aspiring Cybersecurity Professional",
  intro:
    "I'm a Computer Science engineering student interested in cybersecurity, Python, and building reliable software. I enjoy exploring how applications work, solving programming problems, debugging code, and learning how to make digital systems more secure.",
  bio: [
    "I am a Computer Science engineering student with a strong passion for cybersecurity, software fundamentals, and secure coding practices.",
    "My learning journey centers on understanding how digital systems function beneath the surface — from writing clean Python applications and interactive web interfaces to inspecting software vulnerabilities and eliminating logic flaws through rigorous debugging.",
    "I believe that building secure software begins with curiosity, technical discipline, and defensive design. Through hands-on practice, automated testing, and ongoing projects, I continually work to expand my practical skills in programming, systems, and digital safety.",
  ],
  approach:
    "Security is a mindset, not an afterthought: understand the threat boundary, validate inputs, verify edge cases, and test code before trusting it.",
};

export type Category = "Python" | "Web Development" | "Debugging" | "Algorithms";
export const CATEGORIES: Category[] = ["Python", "Web Development", "Debugging", "Algorithms"];

export type Project = {
  id: string;
  index: string;
  title: string;
  label: string;
  description: string;
  tech: string[];
  categories: Category[];
  repo?: string;
  live?: string;
  deployment?: string;
  caseStudy: { objective: string; implementation: string; outcome: string };
};

export const PROJECTS: Project[] = [
  {
    id: "quiz-app",
    index: "01",
    title: "Interactive Quiz Application",
    label: "WEB APPLICATION · JAVASCRIPT",
    description:
      "An interactive quiz application built to practise programming and application development concepts. Explore the quiz interface, answer questions, and interact with the application through its available features.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    categories: ["Web Development"],
    repo: "https://github.com/utkarsh25bcon2341-ship-it/interactive_quiz",
    live: "https://interactivequiz-sigma.vercel.app/",
    caseStudy: {
      objective:
        "Build a responsive and interactive browser quiz application to practise core web technologies, state tracking, and user feedback mechanisms.",
      implementation:
        "Engineered with clean vanilla JavaScript, HTML5, and CSS3 without framework overhead. Features include displaying one question at a time with four choices, dynamic score and question progress tracking, instant visual feedback highlighting correct answers, a lock mechanism preventing questions from being answered more than once, light and dark theme toggling, and quiz restart capability.",
      outcome:
        "A complete, responsive web application testing core computer science topics (AI concepts, Git commit conventions, unit testing, and CSS organization). Demonstrates sound client-side interaction design and state control.",
    },
  },
  {
    id: "reading-list",
    index: "02",
    title: "Reading List App",
    label: "REACT · TYPESCRIPT · STORAGE",
    description:
      "A reading list application designed to organize books, manage reading status, and make it easier to maintain a personal reading list.",
    tech: ["React", "TypeScript", "Vite", "CSS", "Browser Storage"],
    categories: ["Web Development"],
    repo: "https://github.com/utkarsh25bcon2341-ship-it/reading_list_app",
    caseStudy: {
      objective:
        "Design and implement a responsive personal reading list tracker to help students organize books and track their reading progress with browser persistence.",
      implementation:
        "Built using React and TypeScript with Vite. Provides book entry with title and optional author, three distinct reading statuses ('Want to Read', 'Reading', 'Finished'), live category filtering with badge count indicators, input validation rejecting empty inputs and enforcing a 60-character title maximum, duplicate-title checking via an isDuplicate utility, book deletion, and automatic localStorage synchronization.",
      outcome:
        "A reliable, responsive client-side web application with proactive input validation, defensive state handling, and persistent shelf storage without requiring cloud database infrastructure.",
    },
  },
  {
    id: "debugging",
    index: "03",
    title: "Student Marks Utilities and Debugging",
    label: "PYTHON · DEBUGGING · UNITTEST",
    description:
      "A Python programming and debugging project focused on identifying and fixing logic errors, improving function behavior, and validating student marks calculations.",
    tech: ["Python", "unittest"],
    categories: ["Python", "Debugging"],
    repo: "https://github.com/utkarsh25bcon2341-ship-it/bug-fixing-student",
    caseStudy: {
      objective:
        "Diagnose, isolate, and fix logic bugs in student marks utility functions using systematic testing and the RED → FIX → GREEN cycle.",
      implementation:
        "Applied Python's standard unittest framework to write reproducible tests for calculating averages, verifying pass/fail status, and determining letter grades. Identified and resolved an off-by-one division error in calculate_average, a boundary bug where exactly 40 marks failed the pass threshold in is_passing, and an inverted conditional sequence in get_grade where high marks received incorrect classifications.",
      outcome:
        "Documented red (failing) and green (passing) test run logs validating that all boundary cases and calculation paths behave predictably. Emphasizes the importance of debugging and regression prevention in writing reliable, secure software.",
    },
  },
  {
    id: "python-programs",
    index: "04",
    title: "Python Programs Collection",
    label: "PYTHON · FUNDAMENTALS · ALGORITHMS",
    description:
      "A collection of Python programs and practice exercises that demonstrate programming fundamentals, logical thinking, and problem-solving through small implementations, including iterative Fibonacci sequence calculation.",
    tech: ["Python", "Jupyter Notebook"],
    categories: ["Python", "Algorithms"],
    repo: "https://github.com/utkarsh25bcon2341-ship-it/python_collection",
    caseStudy: {
      objective:
        "Practise foundational programming concepts, variable manipulation, and iterative sequence generation in Python.",
      implementation:
        "Implemented clear, documented programs including Fibonacci sequence generation using iterative variable reassignment (a, b = b, a + b) within a for-loop. Avoids recursion overhead and maintains clean state transitions across iterations.",
      outcome:
        "Demonstrated step-by-step arithmetic operations and state tracking, producing the first 10 Fibonacci terms (0, 1, 1, 2, 3, 5, 8, 13, 21, 34) with documented code explanation and reproducible execution.",
    },
  },
];

PROJECTS.sort((a, b) => a.index.localeCompare(b.index));

export const SKILL_GROUPS = [
  {
    category: "Programming & Development",
    tag: "Practical Implementation",
    skills: [
      { name: "Python", status: "Hands-on projects & practice" },
      { name: "JavaScript", status: "Interactive quiz application" },
      { name: "TypeScript & React", status: "Reading list application" },
      { name: "HTML5 & CSS3", status: "Responsive layout & styling" },
    ],
  },
  {
    category: "Cybersecurity Learning",
    tag: "Active Study & Exploration",
    skills: [
      { name: "Cybersecurity Fundamentals", status: "Core concepts & threat awareness" },
      { name: "Secure Coding Principles", status: "Input validation & boundary checks" },
      { name: "Web Application Security Concepts", status: "OWASP Top 10 study" },
      { name: "Security Awareness & Responsible Testing", status: "Ethical & defensive mindset" },
    ],
  },
  {
    category: "Development Practices",
    tag: "Methodology",
    skills: [
      { name: "Debugging & Problem-Solving", status: "Root-cause diagnosis & edge cases" },
      { name: "Unit Testing with unittest", status: "RED → FIX → GREEN workflow" },
      { name: "Application Development", status: "Component & state architecture" },
      { name: "Git & GitHub", status: "Version control & repository management" },
    ],
  },
];

export const CYBERSECURITY_PILLARS = [
  {
    code: "SEC-01",
    title: "Secure Coding & Input Validation",
    description:
      "Understanding that untrusted input is the primary source of vulnerabilities. Emphasizing strict boundary verification, type checks, and duplicate rejection in application logic.",
    practicalLink:
      "Demonstrated through boundary checks in bug-fixing-student and input sanitization in reading_list_app.",
  },
  {
    code: "SEC-02",
    title: "Web Application Security Concepts",
    description:
      "Studying how common web vulnerabilities emerge — such as injection flaws, cross-site scripting (XSS), and insecure client-side state — and learning defensive mitigation strategies.",
    practicalLink:
      "Active exploration of defensive web design and client-server security boundaries.",
  },
  {
    code: "SEC-03",
    title: "Defensive Debugging & Code Analysis",
    description:
      "Approaching software inspection with a security mindset: verifying edge conditions, understanding why failures occur before modifying code, and guarding against logic regressions.",
    practicalLink:
      "Practised via unittest suites and edge-case testing in student utility functions.",
  },
  {
    code: "SEC-04",
    title: "Systems, Networks & Digital Safety",
    description:
      "Building a solid foundation in computer architecture, operating systems behavior, and network protocols to comprehend how data moves and where security controls belong.",
    practicalLink:
      "Theoretical study in computer science engineering and network communication principles.",
  },
];

export const LEARNING_ROADMAP = [
  {
    stage: "01",
    area: "Foundational Security",
    title: "Cybersecurity Fundamentals & Network Protocols",
    description:
      "Deepening understanding of network layers, TCP/IP, DNS, SSL/TLS handshakes, and packet analysis principles.",
    status: "Active Study",
  },
  {
    stage: "02",
    area: "Application Defense",
    title: "OWASP Top 10 & Web Vulnerability Mitigation",
    description:
      "Investigating common web application risks in controlled practice environments to master defensive countermeasures.",
    status: "Learning Goal",
  },
  {
    stage: "03",
    area: "Systematic Verification",
    title: "Automated Testing & Security Code Review",
    description:
      "Learning static analysis techniques, vulnerability scanning workflows, and comprehensive automated test coverage.",
    status: "In Progress",
  },
  {
    stage: "04",
    area: "Architectural Resilience",
    title: "Secure Software Architecture & Cryptography Basics",
    description:
      "Studying authentication protocols, session security, secret handling, and cryptographic hashing standards.",
    status: "Future Learning Direction",
  },
];

/** Knowledge given to the AI assistant. Grounded strictly in authentic facts. */
export function buildAssistantKnowledge() {
  const projects = PROJECTS.map(
    (p) =>
      `- ${p.title} (${p.categories.join(", ")}; tech: ${p.tech.join(", ")}). ${p.description} Objective: ${p.caseStudy.objective} Implementation: ${p.caseStudy.implementation} Outcomes & Lessons: ${p.caseStudy.outcome} ${p.repo ? `Repo: ${p.repo}` : ""}${p.live ? ` Live Demo: ${p.live}` : ""}${p.deployment ? ` Deployment Link: ${p.deployment}` : ""}`,
  ).join("\n");

  return `You are "Ask Utkarsh's Portfolio", a helpful and concise assistant on Utkarsh's personal portfolio website.
Answer questions in 1-3 clear paragraphs or a short bulleted list in plain text.
Include full URLs when referencing Utkarsh's projects or GitHub profile.
Use ONLY the verified facts below. If asked about something not mentioned (such as work experience, certifications, bug bounties, or grades), state honestly that you do not have that information and suggest contacting Utkarsh.
Never invent employment, certifications, CTF rankings, or unverified claims.

IDENTITY: Utkarsh is a Computer Science engineering student whose primary interest and passion is cybersecurity, alongside Python programming, software development, debugging, and secure coding.

ABOUT: ${PROFILE.intro}
${PROFILE.bio.join(" ")}
Approach: ${PROFILE.approach}

PROJECTS:
${projects}

CYBERSECURITY PILLARS:
${CYBERSECURITY_PILLARS.map((p) => `- ${p.title} (${p.code}): ${p.description}`).join("\n")}

LEARNING ROADMAP:
${LEARNING_ROADMAP.map((r) => `- ${r.title} (${r.status}): ${r.description}`).join("\n")}

SKILLS:
${SKILL_GROUPS.map((g) => `${g.category}: ${g.skills.map((s) => s.name).join(", ")}`).join("\n")}

CONTACT & LINKS:
GitHub: ${LINKS.github}
Email: ${LINKS.email}`;
}
