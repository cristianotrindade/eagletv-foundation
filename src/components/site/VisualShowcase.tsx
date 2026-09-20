import { Play } from "lucide-react";
import { EagleMark } from "@/components/brand/Logo";

export function VisualShowcase() {
  return (
    <section id="dispositivos" className="scroll-mt-20 overflow-hidden border-b border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:px-10">
        <div>
          <p className="section-kicker">Uma marca. Muitas possibilidades.</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-5xl">Sua experiência, em sintonia com você.</h2>
          <p className="mt-5 max-w-lg leading-7 text-muted-foreground">Uma presença visual pensada para acompanhar diferentes telas sem perder clareza, velocidade e personalidade.</p>
          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="h-px w-12 bg-primary" /> TV · Smartphone · Tablet
          </div>
        </div>
        <div className="device-stage relative min-h-[420px] sm:min-h-[520px]" aria-label="Representação conceitual da EagleTV em uma televisão, um tablet e um celular">
          <div className="absolute left-[4%] right-[4%] top-[5%] aspect-video border border-device bg-screen p-2 shadow-device sm:left-[8%] sm:right-[4%]">
            <div className="concept-screen grid h-full place-items-center overflow-hidden">
              <div className="text-center"><EagleMark className="mx-auto h-20 w-24 sm:h-28 sm:w-36" /><p className="mt-4 font-display text-lg font-extrabold tracking-[0.12em] text-foreground sm:text-2xl">EAGLE<span className="text-primary">TV</span></p></div>
            </div>
            <div className="absolute -bottom-6 left-1/2 h-6 w-20 -translate-x-1/2 bg-device sm:w-28" />
            <div className="absolute -bottom-8 left-1/2 h-2 w-36 -translate-x-1/2 bg-device sm:w-48" />
          </div>
          <div className="absolute bottom-[3%] left-[3%] h-[46%] w-[43%] border border-device bg-screen p-2 shadow-device sm:left-[1%] sm:w-[38%]">
            <div className="concept-screen flex h-full flex-col justify-end p-4"><span className="grid size-10 place-items-center bg-primary text-primary-foreground"><Play className="size-4 fill-current" /></span><p className="mt-3 font-display font-bold text-foreground">No seu ritmo.</p></div>
          </div>
          <div className="absolute bottom-0 right-[2%] h-[52%] w-[24%] rounded-[1.6rem] border-[5px] border-device bg-screen p-1.5 shadow-device sm:right-[5%] sm:w-[20%]">
            <div className="concept-screen grid h-full place-items-center rounded-[1rem]"><EagleMark className="h-12 w-14" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}