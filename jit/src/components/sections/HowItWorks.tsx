const HowItWorks = () => {
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">How it works</h2>
          <p className="mt-3 text-muted-foreground">
            From a single sentence, agents coordinate to plan, validate, and compose a production‑ready project.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-medium">1. Plan</p>
            <p className="mt-2 text-sm text-muted-foreground">Derive specs, tasks, and interfaces; create milestones with acceptance criteria.</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-medium">2. Validate</p>
            <p className="mt-2 text-sm text-muted-foreground">Run tests and linting; challenge assumptions; patch regressions before merge.</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-medium">3. Compose</p>
            <p className="mt-2 text-sm text-muted-foreground">Ship code, docs, media, and research as one cohesive, traceable deliverable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
