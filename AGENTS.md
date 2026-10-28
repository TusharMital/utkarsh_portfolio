<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

## Project rules

- Portfolio content (projects, skills, milestones, links) lives only in `src/lib/portfolio-data.ts`; UI and the AI assistant's knowledge both read from it so facts never drift.
- The assistant calls Lovable AI only from the server route `src/routes/api/chat.ts` (`src/lib/chat.server.ts`); the key never reaches the browser.
- Theme: dark is default on `:root`; light mode is the `.light` class on `<html>`.

- Case studies use the dynamic `/projects/$projectId` route and shared project data so refresh and browser history preserve the selected study.
- The home page intentionally remains a long scrolling portfolio; navigation hashes point to its named sections.
