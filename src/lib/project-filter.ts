import type { Category, Project } from "./portfolio-data";

/** Matches query against title, tech and description; category must match when set. */
export function filterProjects(projects: Project[], query: string, category: Category | null) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return projects.filter((p) => {
    if (category && !p.categories.includes(category)) return false;
    if (terms.length === 0) return true;
    const hay = [p.title, p.description, p.label, ...p.tech, ...p.categories]
      .join(" ")
      .toLowerCase();
    return terms.every((t) => hay.includes(t));
  });
}
