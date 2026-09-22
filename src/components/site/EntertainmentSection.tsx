import { Clapperboard, Play, Radio, Sparkles } from "lucide-react";
import { EagleMark } from "@/components/brand/Logo";

export function EntertainmentSection() {
  return (
    <section className="hero-grid overflow-hidden border-b border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-10">
        <div className="max-w-xl">
          <p className="section-kicker">Uma Nova Era Começou</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-5xl">Entretenimento para todos os momentos</h2>
          <p className="mt-5 leading-7 text-muted-foreground">Uma experiência visual criada para acompanhar diferentes momentos, com organização, personalidade e a identidade tecnológica da EagleTV.</p>
        </div>
        <div className="relative grid min-h-[380px] place-items-center border border-border bg-card p-6 sm:min-h-[460px]">
          <div className="absolute inset-6 border border-primary/15 sm:inset-10" />
          <div className="absolute left-8 top-8 flex items-center gap-2 text-xs uppercase text-muted-foreground"><Radio className="size-4 text-primary" />EagleTV</div>
          <div className="relative z-10 text-center"><EagleMark className="mx-auto h-28 w-28 drop-shadow-neon sm:h-36 sm:w-36" /><p className="mt-6 font-display text-xl font-bold text-foreground">Uma Nova Era Começou</p></div>
          <div className="absolute bottom-8 left-8 grid size-12 place-items-center bg-primary text-primary-foreground shadow-neon"><Play className="size-5 fill-current" /></div>
          <Clapperboard className="absolute bottom-9 right-9 size-7 text-brand-electric" />
          <Sparkles className="absolute right-10 top-10 size-6 text-primary" />
        </div>
      </div>
    </section>
  );
}