import { describe, expect, it } from "vitest";
import { PROJECTS } from "@/lib/portfolio-data";
import { filterProjects } from "@/lib/project-filter";

const ids = (r: { id: string }[]) => r.map((p) => p.id);

describe("project search & filter", () => {
  it("searches verified Python projects", () => {
    expect(ids(filterProjects(PROJECTS, "python", null))).toEqual(["debugging", "python-programs"]);
  });
  it("searches verified React technology", () => {
    expect(ids(filterProjects(PROJECTS, "react", null))).toEqual(["reading-list"]);
  });
  it("searches by project name", () => {
    expect(ids(filterProjects(PROJECTS, "reading list", null))).toEqual(["reading-list"]);
  });
  it("searches by technology", () => {
    expect(ids(filterProjects(PROJECTS, "unittest", null))).toEqual(["debugging"]);
  });
  it("searches by description keyword", () => {
    expect(ids(filterProjects(PROJECTS, "fibonacci", null))).toEqual(["python-programs"]);
  });
  it("filters by category", () => {
    expect(ids(filterProjects(PROJECTS, "", "Web Development"))).toEqual([
      "quiz-app",
      "reading-list",
    ]);
  });
  it("combines search and category", () => {
    expect(ids(filterProjects(PROJECTS, "python", "Debugging"))).toEqual(["debugging"]);
  });
  it("returns nothing for no match", () => {
    expect(filterProjects(PROJECTS, "kubernetes", null)).toHaveLength(0);
  });
});
