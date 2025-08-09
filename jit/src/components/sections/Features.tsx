import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, ShieldCheck, Layers3 } from "lucide-react";

const FeatureItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <Card className="h-full border-border/70 bg-card/70 transition-colors hover:bg-card shadow-sm hover:shadow-glow">
    <CardHeader>
      <div className="mb-2 inline-flex size-10 items-center justify-center rounded-md border border-border bg-accent/40">
        <Icon className="size-5 text-foreground" />
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-muted-foreground">{description}</CardContent>
  </Card>
);

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">From intent to shipped product</h2>
          <p className="mt-3 text-muted-foreground">
            Agents recursively plan, validate, and execute across domains—shipping cohesive codebases with docs, media, and research.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureItem
            icon={Workflow}
            title="Recursive planning"
            description="Decomposes high‑level goals into tasks, dependencies, and milestones with explicit acceptance criteria."
          />
          <FeatureItem
            icon={ShieldCheck}
            title="Built‑in validation"
            description="Continuous spec checks, unit tests, and linting; agents gate changes behind verifiable constraints."
          />
          <FeatureItem
            icon={Layers3}
            title="Multimodal composition"
            description="Ships code, documentation, media, and research artifacts as one coherent product, end‑to‑end."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
