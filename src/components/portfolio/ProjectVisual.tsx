/** Purpose-built abstract visuals for Utkarsh's verified projects. */
export function ProjectVisual({ id }: { id: string }) {
  if (id === "python-programs") {
    const fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    return (
      <div className="grid-lines relative flex h-full items-end gap-2 p-8">
        {fib.map((n, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <span className="label-mono text-muted-foreground">{n}</span>
            <div
              className="w-full rounded-sm bg-foreground/80 transition-all duration-700 group-hover:bg-primary"
              style={{ height: `${8 + n * 5}px`, transitionDelay: `${i * 40}ms` }}
            />
          </div>
        ))}
        <span className="label-mono absolute left-8 top-6 text-primary font-mono font-semibold">
          a, b = b, a + b
        </span>
      </div>
    );
  }

  if (id === "quiz-app") {
    return (
      <div className="grid-lines flex h-full flex-col justify-center gap-3 p-8">
        <div className="label-mono text-primary flex items-center justify-between">
          <span>Q 03 / 05</span>
          <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] text-primary">
            Interactive State
          </span>
        </div>
        <div className="display mb-2 text-2xl md:text-3xl">
          What ensures code correctness before deployment?
        </div>
        {[
          "A. Syntax check only",
          "B. Unit tests & edge cases",
          "C. Manual guesswork",
          "D. Post-release bug reports",
        ].map((label, i) => (
          <div
            key={label}
            className={`flex items-center justify-between rounded border px-4 py-2.5 text-xs font-mono transition-colors duration-500 ${
              i === 1
                ? "border-primary bg-primary/10 text-primary font-semibold"
                : "border-hairline text-muted-foreground"
            }`}
          >
            <span>{label}</span>
            <span className="text-[10px]">{i === 1 ? "✓ Correct" : ""}</span>
          </div>
        ))}
      </div>
    );
  }

  if (id === "debugging") {
    return (
      <div className="grid-lines flex h-full flex-col justify-center gap-5 p-6 md:p-8">
        <div className="flex items-center justify-between">
          <p className="label-mono text-primary font-semibold">student_utils.py · unittest</p>
          <span className="label-mono rounded bg-signal/10 px-2 py-0.5 text-[10px] text-signal font-bold">
            9 Tests Passing
          </span>
        </div>
        <p className="display text-3xl md:text-4xl">Reproduce. Correct. Verify.</p>
        <div className="border-t border-border pt-5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs rounded bg-destructive/20 text-destructive px-2 py-0.5 line-through">
              FAIL
            </span>
            <span className="text-muted-foreground font-mono text-xs">→</span>
            <span className="font-mono text-xs rounded bg-signal/20 text-signal px-2 py-0.5 font-bold">
              PASS (GREEN)
            </span>
          </div>
          <p className="mt-3 text-xs md:text-sm font-mono text-muted-foreground">
            calculate_average · is_passing (40 boundary) · get_grade order
          </p>
        </div>
      </div>
    );
  }

  // reading-list
  const books = [
    { h: 78, s: "Finished" },
    { h: 92, s: "Reading" },
    { h: 64, s: "Want" },
    { h: 86, s: "Finished" },
    { h: 70, s: "Want" },
    { h: 96, s: "Reading" },
  ];
  return (
    <div className="grid-lines relative flex h-full items-end gap-2 p-8">
      <div className="absolute top-6 left-8 right-8 flex items-center justify-between text-xs font-mono">
        <span className="text-primary font-semibold">Reading Shelf State</span>
        <span className="text-muted-foreground">Max 60 chars · No duplicates</span>
      </div>
      {books.map((b, i) => (
        <div
          key={i}
          className={`relative flex-1 rounded-t-sm border border-border transition-transform duration-500 group-hover:-translate-y-2 ${
            b.s === "Reading"
              ? "bg-primary/80"
              : b.s === "Finished"
                ? "bg-foreground/80"
                : "bg-card"
          }`}
          style={{ height: `${b.h * 0.75}%`, transitionDelay: `${i * 50}ms` }}
        >
          <span className="label-mono absolute bottom-3 left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap text-[9px] text-background mix-blend-difference font-bold">
            {b.s}
          </span>
        </div>
      ))}
    </div>
  );
}
