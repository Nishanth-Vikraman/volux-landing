import { useRef } from "react";
import heroImage from "@/assets/jitcode-hero.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  return (
    <section
      id="hero"
      className="relative surface-hero interactive-spotlight"
      onMouseMove={onMouseMove}
      ref={ref}
      aria-label="JITCode hero section"
    >
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs text-muted-foreground shadow-sm">
            Multi‑agent planning • Validation • Full‑stack composition
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            <span className="text-gradient-brand">JITCode</span> turns prompts into products
          </h1>
          <p className="mt-5 text-lg text-muted-foreground md:text-xl">
            A multi‑agent framework that plans, validates, and composes fully scoped projects from a single sentence—code, docs, media, and research included.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a href="#cta">Request early access</a>
            </Button>
            <Button asChild variant="subtle" size="xl">
              <a href="#features">See how it works</a>
            </Button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">No spam. We’re building the company‑on‑demand system.</p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-border bg-card/60 shadow-glow">
          <img
            src={heroImage}
            alt="Abstract multi-agent system with glowing nodes and connections"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
