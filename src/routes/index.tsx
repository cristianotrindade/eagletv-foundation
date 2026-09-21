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
import { FAQ_ITEMS, SITE_URL } from "@/config/site";

const TITLE = "EagleTV — Entretenimento do Seu Jeito";
const DESCRIPTION =
  "Conheça a EagleTV, escolha seu plano e tenha uma experiência de entretenimento com praticidade, tecnologia e diferentes opções de acesso.";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "EagleTV" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "EagleTV",
              url: `${SITE_URL}/`,
              logo: OG_IMAGE,
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              name: "EagleTV",
              url: `${SITE_URL}/`,
              inLanguage: "pt-BR",
              description: DESCRIPTION,
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
          ],
        }),
      },
      {
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
      },
    ],
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
