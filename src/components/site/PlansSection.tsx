import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/site";
import { cn } from "@/lib/utils";

const plans = [
  { name: "Start", screens: "1 tela", price: "R$ 25", cta: "Quero este plano", featured: false, message: "Olá! Tenho interesse no plano Start da EagleTV." },
  { name: "Plus", screens: "2 telas", price: "R$ 30", cta: "Quero este plano", featured: false, message: "Olá! Tenho interesse no plano Plus da EagleTV." },
  { name: "Premium", screens: "3 telas", price: "R$ 35", cta: "Quero este plano", featured: true, message: "Olá! Tenho interesse no plano Premium da EagleTV." },
  { name: "Family", screens: "4 telas", price: "Consulte", cta: "Consultar plano", featured: false, message: "Olá! Gostaria de consultar o plano Family da EagleTV." },
] as const;

export function PlansSection() {
  return (
    <section id="planos" className="scroll-mt-20 border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="section-kicker">Planos EagleTV</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-5xl">Escolha o plano ideal para você</h2>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Planos pensados para diferentes necessidades, com opções para quem busca praticidade e flexibilidade.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article key={plan.name} className={cn("relative flex min-h-[360px] flex-col border bg-card p-7 transition-colors hover:bg-card-hover", plan.featured ? "border-primary shadow-neon" : "border-border")}>
              {plan.featured && <span className="absolute right-4 top-4 border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-bold uppercase text-primary">Em evidência</span>}
              <p className="font-mono text-xs font-bold uppercase text-primary">Plano</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">{plan.name}</h3>
              <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"><Check className="size-4 text-primary" /><span>{plan.screens}</span></div>
              <p className="mt-8 font-display text-4xl font-extrabold text-foreground">{plan.price}</p>
              <Button asChild variant={plan.featured ? "neon" : "outlineGlow"} size="lg" className="mt-auto w-full">
                <a href={getWhatsAppUrl(plan.message) ?? "#suporte"} target="_blank" rel="noreferrer"><MessageCircle />{plan.cta}</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}