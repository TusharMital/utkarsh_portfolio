import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
  type CSSProperties,
} from "react";

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

export function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="label-mono flex items-center gap-3 text-muted-foreground">
      <span className="text-primary">{n}</span>
      <span className="h-px w-10 bg-border" />
      <span>{children}</span>
    </div>
  );
}
