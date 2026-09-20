import { ArrowRight, MessageCircle, Play } from "lucide-react";
import { EagleMark } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/site";

export function Hero() {
  const whatsappUrl = getWhatsAppUrl();
  return (
    <section id="inicio" className="hero-grid relative flex min-h-[min(860px,94vh)] items-center overflow-hidden border-b border-border pt-18">
      <div className="hero-light absolute inset-0" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,.9fr)] lg:px-10 lg:py-24">
        <div className="relative z-10 max-w-3xl animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 border border-primary/30 bg-primary/8 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
            <span className="size-1.5 bg-primary shadow-glow" /> Nova visão de entretenimento
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.02] text-foreground sm:text-[clamp(2.7rem,7vw,5.7rem)] sm:leading-[0.98]">
            Seu entretenimento.<br /><span className="text-primary">Do seu jeito.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Uma nova experiência de entretenimento, com praticidade, tecnologia e qualidade.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="neon" size="xl"><a href="#planos">Conheça os planos <ArrowRight /></a></Button>
            <Button asChild={Boolean(whatsappUrl)} variant="outlineGlow" size="xl" disabled={!whatsappUrl} title={!whatsappUrl ? "Número do WhatsApp pendente de configuração" : undefined}>
              {whatsappUrl ? <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> Falar no WhatsApp</a> : <span><MessageCircle /> Falar no WhatsApp</span>}
            </Button>
          </div>
        </div>
        <div className="relative mx-auto hidden aspect-square w-full max-w-[32rem] lg:block" aria-hidden="true">
          <div className="absolute inset-[8%] rotate-45 border border-primary/15" />
          <div className="absolute inset-[18%] rotate-45 border border-brand-electric/25" />
          <div className="absolute inset-[28%] rotate-45 border border-primary/40 shadow-glow" />
          <div className="absolute inset-0 grid place-items-center">
            <EagleMark className="h-52 w-64 drop-shadow-neon" />
          </div>
          <div className="absolute bottom-[14%] left-0 flex items-center gap-3 border border-border bg-surface/80 px-4 py-3 backdrop-blur-xl">
            <span className="grid size-9 place-items-center bg-primary text-primary-foreground"><Play className="size-4 fill-current" /></span>
            <span><strong className="block text-sm text-foreground">EAGLETV</strong><small className="text-muted-foreground">Aperte o play</small></span>
          </div>
        </div>
      </div>
      <a href="#experiencia" className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary">Explore ↓</a>
    </section>
  );
}