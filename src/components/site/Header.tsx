import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { MobileMenu } from "@/components/site/MobileMenu";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <header className={scrolled ? "fixed inset-x-0 top-0 z-40 border-b border-border bg-header/95 shadow-header backdrop-blur-xl transition-all" : "fixed inset-x-0 top-0 z-40 border-b border-transparent bg-transparent transition-all"}>
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Logo />
          <div className="hidden items-center gap-7 lg:flex">
            <nav className="flex items-center gap-6" aria-label="Navegação principal">
              {SITE_CONFIG.navigation.map((item) => (
                <a key={item.label} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {item.label}
                </a>
              ))}
            </nav>
            <Button asChild variant="neon"><a href="#planos">Assine agora</a></Button>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Abrir menu" aria-expanded={menuOpen}>
            <Menu className="size-6" />
          </Button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}