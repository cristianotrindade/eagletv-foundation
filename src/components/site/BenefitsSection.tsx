import { Blocks, CircleGauge, Layers3, Sparkles } from "lucide-react";

const benefits = [
  { icon: CircleGauge, title: "Praticidade", description: "Uma experiência simples e fácil de utilizar." },
  { icon: Layers3, title: "Flexibilidade", description: "Opções pensadas para diferentes necessidades." },
  { icon: Blocks, title: "Compatibilidade", description: "Experiência preparada para diferentes dispositivos." },
  { icon: Sparkles, title: "Experiência", description: "Uma interface moderna e intuitiva." },
] as const;

export function BenefitsSection() {
  return (
    <section className="border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="section-kicker">Escolha com confiança</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold text-foreground sm:text-5xl">Por que escolher a EagleTV?</h2>
        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article key={title} className="min-h-56 bg-card p-7 transition-colors hover:bg-card-hover">
              <span className="grid size-11 place-items-center border border-primary/30 bg-primary/8 text-primary"><Icon className="size-5" /></span>
              <h3 className="mt-8 font-display text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}