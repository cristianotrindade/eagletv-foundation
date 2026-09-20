import { createFileRoute } from "@tanstack/react-router";
import { FeatureCards } from "@/components/site/FeatureCards";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { VisualShowcase } from "@/components/site/VisualShowcase";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "EagleTV — Entretenimento do Seu Jeito" },
      { name: "description", content: "Conheça a EagleTV e descubra uma nova experiência de entretenimento com tecnologia, praticidade e qualidade." },
      { property: "og:title", content: "EagleTV — Entretenimento do Seu Jeito" },
      { property: "og:description", content: "Conheça a EagleTV e descubra uma nova experiência de entretenimento com tecnologia, praticidade e qualidade." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Header />
      <main>
        <Hero />
        <div id="planos" className="scroll-mt-20"><FeatureCards /></div>
        <div id="aplicativos" className="scroll-mt-20"><VisualShowcase /></div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
