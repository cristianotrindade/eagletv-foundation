import { Cpu, Layers3, MonitorSmartphone } from "lucide-react";

const features = [
  { icon: Cpu, title: "Tecnologia", description: "Uma experiência moderna e fácil de utilizar." },
  { icon: Layers3, title: "Praticidade", description: "Acesse seus conteúdos de forma simples e organizada." },
  { icon: MonitorSmartphone, title: "Compatibilidade", description: "Prepare sua experiência para diferentes dispositivos." },
] as const;

export function FeatureCards() {
  return (
    <section id="experiencia" className="scroll-mt-20 border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="section-kicker">Feito para acompanhar você</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-5xl">Uma experiência criada para você</h2>
          <p className="mt-5 max-w-xl leading-7 text-muted-foreground">Tenha uma experiência de entretenimento simples, moderna e adaptada aos dispositivos que você já utiliza.</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="group min-h-64 bg-card p-7 transition-colors hover:bg-card-hover sm:p-9">
              <div className="mb-12 flex items-start justify-between">
                <span className="grid size-12 place-items-center border border-primary/30 bg-primary/8 text-primary"><Icon className="size-5" /></span>
                <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 max-w-xs leading-7 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}