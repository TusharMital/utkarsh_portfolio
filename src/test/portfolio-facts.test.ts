import { describe, expect, it } from "vitest";
import {
  CYBERSECURITY_PILLARS,
  LINKS,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
} from "@/lib/portfolio-data";

describe("verified portfolio constraints for Utkarsh", () => {
  it("contains exactly the four verified projects for Utkarsh", () => {
    expect(PROJECTS).toHaveLength(4);
    const ids = PROJECTS.map((p) => p.id);
    expect(ids).toEqual(["quiz-app", "reading-list", "debugging", "python-programs"]);
  });

  it("does not include old or invented projects like cursor-debugging", () => {
    const cursor = PROJECTS.find((p) => p.id === "cursor-debugging");
    expect(cursor).toBeUndefined();
  });

  it("points all project repositories to Utkarsh's GitHub organization", () => {
    for (const project of PROJECTS) {
      expect(project.repo).toBeDefined();
      expect(project.repo).toContain("https://github.com/utkarsh25bcon2341-ship-it/");
    }
  });

  it("has the verified live demo for the interactive quiz application", () => {
    const quiz = PROJECTS.find((p) => p.id === "quiz-app");
    expect(quiz?.live).toBe("https://interactivequiz-sigma.vercel.app/");
  });

  it("omits deployment and live demo links for reading-list", () => {
    const readingList = PROJECTS.find((p) => p.id === "reading-list");
    expect(readingList?.deployment).toBeUndefined();
    expect(readingList?.live).toBeUndefined();
  });

  it("points the main GitHub link to Utkarsh's profile", () => {
    expect(LINKS.github).toBe("https://github.com/utkarsh25bcon2341-ship-it");
  });

  it("configures Utkarsh's official email address", () => {
    expect(LINKS.email).toBe("utkarsh.25bcon2341@jecrcu.edu.in");
  });

  it("defines the primary cybersecurity focus and skills", () => {
    expect(PROFILE.focus).toBe("Aspiring Cybersecurity Professional");
    expect(CYBERSECURITY_PILLARS.length).toBeGreaterThanOrEqual(4);
    expect(SKILL_GROUPS.length).toBeGreaterThanOrEqual(3);
  });
});
