import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches direct case-study addresses", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/projects/quiz-app").at(-1)?.routeId).toBe("/projects/$projectId");
    expect(router.matchRoutes("/projects/reading-list").at(-1)?.routeId).toBe(
      "/projects/$projectId",
    );
    expect(router.matchRoutes("/projects/debugging").at(-1)?.routeId).toBe("/projects/$projectId");
    expect(router.matchRoutes("/projects/python-programs").at(-1)?.routeId).toBe(
      "/projects/$projectId",
    );
  });
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
