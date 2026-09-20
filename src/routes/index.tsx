import { createFileRoute } from "@tanstack/react-router";
import { FeatureCards } from "@/components/site/FeatureCards";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { VisualShowcase } from "@/components/site/VisualShowcase";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { AppsSection } from "@/components/site/AppsSection";
import { BenefitsSection } from "@/components/site/BenefitsSection";
import { EntertainmentSection } from "@/components/site/EntertainmentSection";
import { FaqSection } from "@/components/site/FaqSection";
import { FinalCta } from "@/components/site/FinalCta";
import { PlansSection } from "@/components/site/PlansSection";
import { FAQ_ITEMS } from "@/config/site";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "EagleTV — Uma Nova Era do Entretenimento" },
      { name: "description", content: "Conheça a EagleTV, escolha seu plano e descubra uma experiência de entretenimento com praticidade e tecnologia." },
      { property: "og:title", content: "EagleTV — Uma Nova Era do Entretenimento" },
      { property: "og:description", content: "Conheça a EagleTV, escolha seu plano e descubra uma experiência de entretenimento com praticidade e tecnologia." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }),
    }],
  }),
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <PlansSection />
        <BenefitsSection />
        <VisualShowcase />
        <AppsSection />
        <EntertainmentSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
