import { Logo } from "@/components/brand/Logo";
import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  return (
    <footer id="suporte" className="scroll-mt-20 bg-footer pt-16 sm:pt-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-10">
        <div className="max-w-sm"><Logo /><p className="mt-5 text-sm leading-6 text-muted-foreground">{SITE_CONFIG.brand.description}</p></div>
        <FooterColumn title="Navegação" links={SITE_CONFIG.navigation} />
        <FooterColumn title="Links" links={SITE_CONFIG.footerLinks} />
        <div><h2 className="text-sm font-bold text-foreground">Contato</h2><p className="mt-5 text-sm text-muted-foreground">WhatsApp</p><p className="mt-2 font-mono text-xs text-primary">WHATSAPP_NUMBER</p></div>
      </div>
      <div className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><p>© 2026 EagleTV. Todos os direitos reservados.</p><p>Visão · Velocidade · Liberdade</p></div></div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: ReadonlyArray<{ label: string; href: string }> }) {
  return <div><h2 className="text-sm font-bold text-foreground">{title}</h2><nav className="mt-5 flex flex-col gap-3" aria-label={title}>{links.map((link) => <a key={link.label} href={link.href} className="w-fit text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</a>)}</nav></div>;
}