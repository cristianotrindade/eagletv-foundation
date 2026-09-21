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
    { label: "Contato", href: "#suporte" },
    { label: "Política de Privacidade", href: "#suporte" },
    { label: "Termos de Uso", href: "#suporte" },
  ],
  whatsappNumber: "+55 11 95114-9375",
  whatsappDefaultMessage: "Olá! Gostaria de conhecer a EagleTV.",
} as const;

export function getWhatsAppUrl(message: string = SITE_CONFIG.whatsappDefaultMessage) {
  const number = SITE_CONFIG.whatsappNumber.replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const FAQ_ITEMS = [
  {
    question: "O que é a EagleTV?",
    answer: "A EagleTV é uma plataforma moderna de entretenimento criada para oferecer uma experiência simples, prática e adaptada a diferentes dispositivos.",
  },
  {
    question: "Quais planos estão disponíveis?",
    answer: "Estão disponíveis os planos Start, Plus, Premium e Family. Cada opção atende a uma quantidade diferente de telas.",
  },
  {
    question: "Quantas telas posso utilizar?",
    answer: "O plano Start inclui 1 tela, o Plus inclui 2 telas, o Premium inclui 3 telas e o Family inclui 4 telas.",
  },
  {
    question: "Quais dispositivos são compatíveis?",
    answer: "A experiência EagleTV está preparada para Samsung Smart TV, LG Smart TV, Fire TV Stick e dispositivos Android.",
  },
  {
    question: "Como faço para contratar?",
    answer: "Escolha um plano nesta página e fale com a EagleTV pelo WhatsApp para continuar o atendimento.",
  },
  {
    question: "Como entro em contato com o suporte?",
    answer: "Você pode entrar em contato pelo WhatsApp disponível nesta página.",
  },
  {
    question: "As informações dos planos podem mudar?",
    answer: "Sim. Valores, condições e disponibilidade podem ser atualizados. Confirme as informações pelo WhatsApp antes de contratar.",
  },
] as const;