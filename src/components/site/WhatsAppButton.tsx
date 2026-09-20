import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function WhatsAppButton() {
  const url = getWhatsAppUrl();
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          {url ? (
            <a href={url} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-30 grid size-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-whatsapp transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Fale conosco pelo WhatsApp">
              <MessageCircle className="size-6" />
            </a>
          ) : (
            <button disabled className="fixed bottom-5 right-5 z-30 grid size-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground opacity-55 shadow-whatsapp" aria-label="WhatsApp aguardando configuração">
              <MessageCircle className="size-6" />
            </button>
          )}
        </TooltipTrigger>
        <TooltipContent side="left">Fale conosco</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}