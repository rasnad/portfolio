import { text } from "@/data/localized";

export const navCopy = {
  home: text("Home", "Inicio"),
  mainNavigation: text("Main navigation", "Navegación principal"),
  languageSwitch: text("Language switch", "Selector de idioma"),
  work: text("Work", "Trabajos"),
  about: text("About", "Sobre mí"),
  services: text("Services", "Servicios"),
  contact: text("Contact", "Contacto"),
  contactCta: text("Get in touch", "Contactarme"),
  openMenu: text("Open menu", "Abrir menú"),
};

export const heroCopy = {
  title: text(
    'I build digital products that solve problems and elevate how <span class="em">your brand</span> is perceived.',
    'Construyo productos digitales que resuelven problemas y elevan la percepción de <span class="em">tu marca</span>.'
  ),
  workCta: text("View work", "Ver trabajos"),
  contactCta: text("Get in touch", "Contactarme"),
  aboutCta: text("About me", "Sobre mí"),
  marquee: {
    en: ["Digital catalogs", "Websites", "E-commerce", "Automations", "Integrations", "Landing pages"],
    es: ["Catálogos digitales", "Sitios web", "E-Commerce", "Automatizaciones", "Integraciones", "Páginas de aterrizaje"],
  },
};

export const featuredProjectsCopy = {
  kicker: text("Selected work", "Trabajos seleccionados"),
  title: text("My Featured Projects:", "Mis Proyectos destacados:"),
  viewProject: text("View project", "Ver proyecto"),
  viewProjectCard: (projectName: string) => text(`View ${projectName}`, `Ver ${projectName}`),
};

export const aboutCopy = {
  kicker: text("About", "Sobre mí"),
  title: text(
    "I'm Lucas Espinosa, a developer with experience in <b>digital products, backend systems and web development.</b>",
    "Soy Lucas Espinosa, desarrollador con experiencia en <b>productos digitales, backend y desarrollo web.</b>"
  ),
  body: text(
    "I build websites, platforms and tools that combine technical judgment, clear design and a real focus on solving problems. I care about products that are easy to understand, easy to use and useful for the business behind them.",
    "Trabajo creando sitios, plataformas y herramientas que combinan criterio técnico, diseño claro y foco en resolver problemas reales. Me interesa que cada proyecto sea fácil de entender, fácil de usar y útil para el negocio que lo necesita."
  ),
  stats: [
    { value: text("Web & product", "Web & producto"), label: text("Work focus", "Foco de trabajo") },
    { value: text("Backend", "Backend"), label: text("Automations & integrations", "Automatizaciones e integraciones") },
    { value: text("Tailored", "A medida"), label: text("Built around each case", "Soluciones según cada caso") },
  ],
};

export const servicesCopy = {
  kicker: text("What I do", "Qué puedo hacer"),
  title: text("Clear digital solutions built to scale.", "Soluciones digitales claras, útiles y fáciles de escalar."),
  lead: text(
    "From an institutional website to an internal tool or a digital product of your own.",
    "Desde una web institucional hasta una herramienta interna o producto digital propio."
  ),
};

export const contactCopy = {
  kicker: text("Contact", "Contacto"),
  title: text(
    "Your product can also have a stronger digital presence. Let's build it together.",
    "Tu producto también puede tener una mejor presencia digital. Construyámoslo juntos."
  ),
  lead: text("Tell me what you're thinking.", "Contame qué estás pensando"),
  emailLabel: text("Email", "Email"),
  socialLabel: text("Social", "Social"),
  baseLabel: text("Base", "Base"),
  linkedin: text("LinkedIn", "LinkedIn"),
  form: {
    name: text("Name", "Nombre"),
    email: text("Email", "Email"),
    message: text("Message", "Mensaje"),
    namePlaceholder: text("What's your name?", "¿Cómo te llamás?"),
    emailPlaceholder: text("you@email.com", "tu@email.com"),
    messagePlaceholder: text("Tell me about your project", "Contame sobre tu proyecto"),
    submit: text("Send message", "Enviar mensaje"),
    success: text(
      "Thanks{name}. Your message was sent. I'll get back to you soon.",
      "Gracias{name}. Tu mensaje fue enviado. Te respondo a la brevedad."
    ),
    errors: {
      name: text("Enter your name.", "Ingresá tu nombre."),
      email: text("Enter a valid email.", "Ingresá un email válido."),
      message: text("Tell me a bit more (minimum 8 characters).", "Contame un poco más (mín. 8 caracteres)."),
    },
  },
};

export const detailCopy = {
  back: text("Back to work", "Volver a trabajos"),
  metaType: text("Type", "Tipo"),
  metaYear: text("Year", "Año"),
  metaRole: text("Role", "Rol"),
  metaStatus: text("Status", "Estado"),
  context: text("Context", "El contexto"),
  whatIDid: text("What I did", "Qué hice"),
  result: text("Result / value", "Resultado / valor"),
  nextProject: text("Next project", "Siguiente proyecto"),
  visitProject: (projectName: string) => text(`Visit ${projectName}'s website`, `Visitá la web de ${projectName}`),
};
