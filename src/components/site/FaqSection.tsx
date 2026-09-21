import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_ITEMS, getWhatsAppUrl } from "@/config/site";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:px-10">
        <div>
          <p className="section-kicker">Informações claras</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-5xl">Perguntas frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="border-t border-border">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="py-6 text-left font-display text-base font-semibold text-foreground hover:text-primary hover:no-underline sm:text-lg">{item.question}</AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">
                {item.question === "Como faço para contratar?" ? <>Escolha um plano nesta página e fale com a EagleTV pelo <a href={getWhatsAppUrl() ?? "#suporte"} target="_blank" rel="noreferrer" className="font-semibold text-primary hover:text-brand-electric">WhatsApp</a> para continuar o atendimento.</> : item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}