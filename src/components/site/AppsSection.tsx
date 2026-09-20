import { Flame, MonitorSmartphone, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const apps = [
  { icon: MonitorSmartphone, title: "Smart TV", href: "#dispositivos" },
  { icon: Flame, title: "Fire TV Stick", href: "#dispositivos" },
  { icon: Smartphone, title: "Android", href: "#dispositivos" },
] as const;

export function AppsSection() {
  return (
    <section id="aplicativos" className="scroll-mt-20 border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="section-kicker">Acesso do seu jeito</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-5xl">Aplicativos e dispositivos</h2>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Encontre a melhor forma de acessar sua experiência EagleTV de acordo com o dispositivo que você utiliza.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {apps.map(({ icon: Icon, title, href }) => (
            <article key={title} className="flex min-h-64 flex-col border border-border bg-card p-7 transition-colors hover:bg-card-hover">
              <Icon className="size-8 text-primary" />
              <h3 className="mt-10 font-display text-xl font-bold text-foreground">{title}</h3>
              <Button asChild variant="outlineGlow" className="mt-auto w-fit"><a href={href}>Saiba mais</a></Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}