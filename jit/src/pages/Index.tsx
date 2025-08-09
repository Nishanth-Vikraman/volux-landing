import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import heroOg from "@/assets/jitcode-hero.jpg";

const Index = () => {
  const title = "JITCode — Multi‑agent framework for prompt‑to‑product";
  const description =
    "JITCode plans, validates, and composes full‑stack, multimodal products from a single sentence prompt.";
  const url = typeof window !== "undefined" ? window.location.href : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "JITCode",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    url,
    description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={heroOg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={heroOg} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <section id="cta" className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-semibold">Get early access to JITCode</h3>
            <p className="mt-2 text-muted-foreground">Tell us what you want to build—we’ll invite you as we scale access.</p>
            <div className="mt-6">
              <a
                className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-sm hover:bg-accent/40"
                href="mailto:hello@jitcode.ai?subject=Early%20access%20request"
              >
                Email hello@jitcode.ai
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
