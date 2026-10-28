# Utkarsh — Computer Science & Cybersecurity Portfolio

A modern, technical personal portfolio for **Utkarsh**, a Computer Science engineering student whose primary passion and focus is cybersecurity, alongside Python programming, software development, debugging, and secure application design.

## Features

- **Technical Cybersecurity Visual Identity:** Deep graphite / midnight charcoal theme (`oklch`) with restrained electric cyan accents, subtle terminal motifs, security indicator badges, accessible contrast, and persistent light/dark mode.
- **Authentic Engineering Biography:** Highlights his CS engineering studies, curiosity about software vulnerabilities, defensive design, problem-solving, and continuous learning journey.
- **Categorized Technical Skills:** Distinctly separates practical development tools (Python, JavaScript, TypeScript, React, HTML5/CSS3, Git) from cybersecurity topics actively being explored (cybersecurity fundamentals, secure coding principles, OWASP Top 10 concepts, security awareness).
- **Four Verified Projects:**
  1. **Interactive Quiz Application:** Responsive browser-based quiz in vanilla JavaScript, HTML5, and CSS3 featuring state tracking, progress indicator, instant feedback, multiple-choice lock, and light/dark theme. [Live Demo](https://interactivequiz-sigma.vercel.app/) · [GitHub](https://github.com/utkarsh25bcon2341-ship-it/interactive_quiz)
  2. **Reading List App:** Personal book tracker in React, TypeScript, and Vite with three reading statuses, category filtering with count badges, input validation (max 60 chars, duplicate prevention), and browser localStorage persistence. [GitHub](https://github.com/utkarsh25bcon2341-ship-it/reading_list_app)
  3. **Student Marks Utilities and Debugging:** Python debugging and test-driven development project using Python's `unittest` framework to execute the RED → FIX → GREEN cycle, resolving boundary pass marks, average calculations, and letter grade classifications. [GitHub](https://github.com/utkarsh25bcon2341-ship-it/bug-fixing-student)
  4. **Python Programs Collection:** Algorithmic Python implementation of iterative sequence generation (Fibonacci series using iterative state reassignments) demonstrating core loop logic and computational thinking. [GitHub](https://github.com/utkarsh25bcon2341-ship-it/python_collection)
- **Dedicated Cybersecurity Section:**
  - Four Core Defensive Pillars: Secure Coding & Input Validation, Web Application Security Concepts, Defensive Debugging, and Systems & Network Awareness.
  - Transparent Learning Roadmap: Framed strictly as learning goals and active areas of study (network protocols, OWASP Top 10, automated testing, secure architectures).
- **Grounded AI Assistant:** Floating chat assistant powered by server-side Lovable AI / AI SDK, restricted strictly to verified portfolio facts.
- **Case Study Routing:** Dedicated `/projects/$projectId` routes for deep-dive case studies with full browser history and direct navigation support.
- **Verified Contact Section:** Working links to Utkarsh's GitHub profile and editable email placeholder.

## Tech Stack & Architecture

- **Frontend:** React 19, TypeScript, TanStack Start, TanStack Router, Vite, Tailwind CSS v4, Radix UI.
- **Data Architecture:** Single source of truth in `src/lib/portfolio-data.ts` shared across UI, routing, and the server-side AI assistant knowledge base.
- **Testing:** Vitest with tests covering portfolio factual constraints, project search/filter logic, and router path matching.

```text
src/
├── lib/
│   ├── portfolio-data.ts          # Central verified facts, projects, skills & assistant knowledge
│   ├── project-filter.ts          # Project search and category filtering logic
│   └── chat.server.ts             # Server-side streaming AI assistant handler
├── routes/
│   ├── __root.tsx                 # Root layout, metadata, font imports, and favicon
│   ├── index.tsx                  # Long-scrolling home portfolio
│   ├── projects.$projectId.tsx    # Dynamic project case study routes
│   └── api/chat.ts                # Server endpoint for the portfolio assistant
├── components/
│   └── portfolio/                 # Hero, About, Skills, Work, Process (Cybersecurity), Nav, Contact, ChatAssistant
└── styles.css                     # Semantic OKLCH design tokens (dark midnight default & clean light theme)
```

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run automated tests
npm test

# Build for production
npm run build
```

## GitHub & Profile Links

- **GitHub Profile:** [utkarsh25bcon2341-ship-it](https://github.com/utkarsh25bcon2341-ship-it)
- **Interactive Quiz:** [Repository](https://github.com/utkarsh25bcon2341-ship-it/interactive_quiz) · [Live Demo](https://interactivequiz-sigma.vercel.app/)
- **Reading List App:** [Repository](https://github.com/utkarsh25bcon2341-ship-it/reading_list_app)
- **Student Marks Utilities:** [Repository](https://github.com/utkarsh25bcon2341-ship-it/bug-fixing-student)
- **Python Programs Collection:** [Repository](https://github.com/utkarsh25bcon2341-ship-it/python_collection)
