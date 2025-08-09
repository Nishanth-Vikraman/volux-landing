import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">FAQ</h2>
          <p className="mt-3 text-muted-foreground">Answers to common questions about JITCode.</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-border bg-card p-2 sm:p-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="q1">
              <AccordionTrigger>What makes JITCode different from a co‑pilot?</AccordionTrigger>
              <AccordionContent>
                Co‑pilots assist with edits; JITCode plans, validates, and composes complete, multi‑modal products from intent—code, docs, media, and research.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Can it validate output before shipping?</AccordionTrigger>
              <AccordionContent>
                Yes. Agents generate and run tests, enforce specs, and gate merges with automated checks and human‑in‑the‑loop reviews when needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>How do I get access?</AccordionTrigger>
              <AccordionContent>
                Request early access below. We’re onboarding teams in waves while we scale infrastructure and feedback loops.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
