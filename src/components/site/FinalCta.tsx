import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-b border-border py-20 sm:py-28">
      <div className="hero-light absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
        <p className="section-kicker">Comece agora</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold text-foreground sm:text-5xl">Pronto para conhecer a EagleTV?</h2>
        <p className="mt-5 text-lg text-muted-foreground">Escolha seu plano e fale conosco para começar.</p>
        <Button asChild variant="neon" size="xl" className="mt-8"><a href={getWhatsAppUrl() ?? "#suporte"} target="_blank" rel="noreferrer"><MessageCircle />Falar com a EagleTV</a></Button>
      </div>
    </section>
  );
}