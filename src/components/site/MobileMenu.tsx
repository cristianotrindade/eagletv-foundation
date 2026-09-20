import { X } from "lucide-react";
import { useEffect } from "react";
import { SITE_CONFIG } from "@/config/site";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";

type MobileMenuProps = { open: boolean; onClose: () => void };

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div className={open ? "fixed inset-0 z-50 lg:hidden" : "pointer-events-none fixed inset-0 z-50 invisible lg:hidden"} aria-hidden={!open}>
      <button className="absolute inset-0 bg-overlay backdrop-blur-sm" onClick={onClose} aria-label="Fechar menu" tabIndex={open ? 0 : -1} />
      <div className={open ? "absolute right-0 top-0 flex h-full w-[min(88vw,24rem)] translate-x-0 flex-col border-l border-border bg-surface p-6 transition-transform duration-300" : "absolute right-0 top-0 flex h-full w-[min(88vw,24rem)] translate-x-full flex-col border-l border-border bg-surface p-6 transition-transform duration-300"} role="dialog" aria-modal="true" aria-label="Menu principal">
        <div className="flex items-center justify-between">
          <Logo />
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Fechar menu">
            <X className="size-5" />
          </Button>
        </div>
        <nav className="mt-12 flex flex-col" aria-label="Navegação móvel">
          {SITE_CONFIG.navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={onClose} className="border-b border-border py-4 text-lg font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild variant="neon" size="lg" className="mt-8 w-full">
          <a href="#planos" onClick={onClose}>Assine agora</a>
        </Button>
        <p className="mt-auto text-xs text-muted-foreground">Entretenimento no seu ritmo.</p>
      </div>
    </div>
  );
}