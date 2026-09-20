export const SITE_CONFIG = {
  brand: {
    name: "EAGLETV",
    description:
      "Entretenimento com tecnologia, praticidade e qualidade para acompanhar o seu ritmo.",
  },
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Planos", href: "#planos" },
    { label: "Aplicativos", href: "#aplicativos" },
    { label: "Dispositivos", href: "#dispositivos" },
    { label: "Suporte", href: "#suporte" },
  ],
  footerLinks: [
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
    { label: "Política de Privacidade", href: "#privacidade" },
    { label: "Termos de Uso", href: "#termos" },
  ],
  whatsappNumber: "WHATSAPP_NUMBER",
} as const;

export function getWhatsAppUrl() {
  const number = SITE_CONFIG.whatsappNumber.replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}`;
}