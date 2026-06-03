import type { LocalizedText } from "@/data/localized";
import { text } from "@/data/localized";

export type Project = {
  slug: string;
  title: string;
  type: LocalizedText;
  year: string;
  role: LocalizedText;
  status: LocalizedText;
  statusTone?: "success" | "warning";
  summary: LocalizedText;
  tags: LocalizedText[];
  mockupUrlLabel: string;
  image?: string;
  url?: string;
  cardBadge?: LocalizedText;
  context: LocalizedText;
  whatIDid: LocalizedText[];
  result: LocalizedText;
  hideResultSection?: boolean;
  gallery: {
    label: LocalizedText;
    aspectRatio: string;
    hasBrowserBar?: boolean;
    image?: string;
    video?: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "malla-estudio",
    title: "Malla Estudio",
    type: text("Website / digital product / 3D and AR experience", "Sitio web / producto digital / experiencia 3D y AR"),
    year: "2026",
    role: text("Web design, development and digital experience", "Diseño web, desarrollo y experiencia digital"),
    status: text("Final Product", "Producto final"),
    statusTone: "success",
    summary: text(
      "A digital experience for design, furniture and art brands that transforms traditional catalogs into more visual, interactive and understandable pieces.",
      "Una experiencia digital para marcas de diseño, muebles y arte que convierte catálogos tradicionales en piezas más visuales, interactivas y fáciles de entender."
    ),
    tags: [
      text("Institutional website", "Web institucional"),
      text("3D", "3D"),
      text("AR", "AR"),
      text("Digital catalogs", "Catálogos digitales"),
    ],
    mockupUrlLabel: "mallaestudio.com",
    image: "/assets/projects/malla-estudio.png",
    url: "https://www.mallaestudio.com.uy/",
    context: text(
      "Brands with physical products need to show form, scale, materiality and use before someone can make a decision. Malla Estudio expands the traditional catalog with richer visual tools.",
      "Las marcas con productos físicos necesitan mostrar forma, escala, materialidad y uso antes de que una persona pueda tomar una decisión. Malla Estudio nace para ampliar el catálogo tradicional con herramientas visuales más completas."
    ),
    whatIDid: [
      text("Designed and developed the digital presence for Malla Estudio.", "Diseñé y desarrollé la presencia digital de Malla Estudio."),
      text("Created a product visualization system based on 3D and augmented reality.", "Creé un sistema de visualización de producto basado en 3D y realidad aumentada."),
      text("Built interactive pages to present products with more clarity, scale and context.", "Construí páginas interactivas para presentar productos con más claridad, escala y contexto."),
      text("Defined the experience direction between visual design, web navigation and commercial storytelling.", "Definí la dirección de experiencia entre diseño visual, navegación web y storytelling comercial."),
      text("Prepared the platform to scale into future catalogs, clients and product experiences.", "Preparé la plataforma para escalar hacia futuros catálogos, clientes y experiencias de producto."),
    ],
    result: text(
      "A project that shows how a brand can present physical pieces with more context, better visual clarity and a more useful digital experience for buyers, interior designers or studios.",
      "Un proyecto que muestra cómo una marca puede presentar piezas físicas con más contexto, mejor lectura visual y una experiencia digital más útil para compradores, interioristas o estudios."
    ),
    gallery: [
      {
        label: text("capture - institutional home", "captura - home institucional"),
        aspectRatio: "16 / 8",
        hasBrowserBar: true,
        video: "/assets/projects/malla-estudio-loop.mp4",
      },
      { label: text("detail - 3D visualization", "detalle - visualización 3D"), aspectRatio: "4 / 3" },
      { label: text("detail - AR catalog", "detalle - catálogo AR"), aspectRatio: "4 / 3" },
    ],
  },
  {
    slug: "cuando-vuelve",
    title: "Cuando Vuelve",
    type: text("Digital product / restock alert app", "Producto digital / app de alertas de re-stock"),
    year: "2026",
    role: text("Product, backend, automation and web development", "Producto, backend, automatización y desarrollo web"),
    status: text("In development", "En desarrollo"),
    statusTone: "warning",
    summary: text(
      "A simple app that lets people create alerts for out-of-stock products and receive an automatic notification when they return.",
      "Una app simple para crear alertas sobre productos agotados y recibir un aviso automático cuando vuelven a estar disponibles."
    ),
    tags: [
      text("Digital product", "Producto digital"),
      text("Alerts", "Alertas"),
      text("Automation", "Automatización"),
      text("Backend", "Backend"),
    ],
    mockupUrlLabel: "cuandovuelve.com",
    image: "/assets/projects/cuando-vuelve.png",
    url: "https://www.cuandovuelve.com/",
    context: text(
      "When someone finds an out-of-stock product, they usually have to keep checking the store themselves. This product solves that moment with a simple flow: paste a link, leave a contact and wait for the alert.",
      "Cuando una persona encuentra un producto agotado, normalmente tiene que volver a revisar la tienda por su cuenta. El producto busca resolver ese momento con un flujo simple: pegar un link, dejar un contacto y esperar el aviso."
    ),
    whatIDid: [
      text("Designed and developed a restock alert platform.", "Diseñé y desarrollé una plataforma de alertas de reposición."),
      text("Created a simple flow to track unavailable products through a product link.", "Creé un flujo simple para seguir productos no disponibles a través de un link."),
      text("Built a dashboard to manage active, resolved and broken alerts.", "Construí un dashboard para gestionar alertas activas, resueltas y rotas."),
      text("Defined the notification system for product availability updates.", "Definí el sistema de notificaciones para actualizaciones de disponibilidad."),
      text("Prepared the platform to scale across different stores, categories and alert channels.", "Preparé la plataforma para escalar en distintas tiendas, categorías y canales de alerta."),
    ],
    result: text(
      "A clear and scalable MVP that turns a common frustration into a concrete tool, with a light interface and automation working behind the scenes.",
      "Un MVP claro y escalable que transforma una frustración cotidiana en una herramienta concreta, con una interfaz liviana y una automatización trabajando por detrás."
    ),
    gallery: [
      {
        label: text("capture - alerts dashboard", "captura - panel de alertas"),
        aspectRatio: "16 / 8",
        hasBrowserBar: true,
        image: "/assets/projects/cuando-vuelve-detail.png",
      },
      { label: text("detail - alerts dashboard", "detalle - panel de alertas"), aspectRatio: "4 / 3" },
      { label: text("detail - automatic notification", "detalle - aviso automático"), aspectRatio: "4 / 3" },
    ],
  },
  {
    slug: "pimienta",
    title: "Pimienta Studio",
    type: text("Website / brand / creative studio", "Sitio web / marca / estudio creativo"),
    year: "2026",
    role: text("Web design and front-end development", "Diseño web y desarrollo front-end"),
    status: text("Final Product", "Producto final"),
    statusTone: "success",
    summary: text(
      "A website for a creative studio focused on social media, branding, graphic design, marketing strategy and web development.",
      "Sitio para un estudio creativo enfocado en social media, branding, diseño gráfico, estrategia de marketing y desarrollo web."
    ),
    tags: [
      text("Institutional website", "Web institucional"),
      text("Branding", "Branding"),
      text("Services", "Servicios"),
      text("Contact", "Contacto"),
    ],
    mockupUrlLabel: "pimientastudio.com",
    image: "/assets/projects/pimienta.png",
    url: "https://www.pimienta.com.uy/",
    context: text(
      "Pimienta needed a clear digital presence to present its identity, organize its services and make business contact easier without losing its creative character.",
      "Pimienta necesitaba una presencia digital clara para presentar su identidad, ordenar sus servicios y facilitar el contacto comercial sin perder su carácter creativo."
    ),
    whatIDid: [
      text("Co-Design and Development of the web.", "Co-diseño y desarrollo de la web."),
    ],
    result: text(
      "A website conceived as a business card: visual, clear and useful for a creative brand to show what it does and start commercial conversations.",
      "Un sitio pensado como carta de presentación: visual, claro y útil para que una marca creativa pueda mostrar qué hace y abrir conversaciones comerciales."
    ),
    hideResultSection: true,
    gallery: [],
  },
  {
    slug: "precio-real",
    title: "Precio Real",
    type: text("Price comparison / digital product", "Comparador de precios / producto digital"),
    year: "2026",
    role: text("Product, data, scraping and backend", "Producto, datos, scraping y backend"),
    status: text("In development", "En desarrollo"),
    statusTone: "warning",
    summary: text(
      "A platform designed to compare technology prices in Uruguay, detect differences between stores and follow buying opportunities.",
      "Una plataforma para comparar precios de tecnología en Uruguay, detectar diferencias entre tiendas y seguir oportunidades de compra."
    ),
    tags: [
      text("Comparison", "Comparador"),
      text("Data", "Datos"),
      text("Search", "Búsqueda"),
      text("Alerts", "Alertas"),
    ],
    mockupUrlLabel: "precioreal.uy",
    image: "/assets/projects/precio-real-home.png",
    url: "https://price-comparator-snowy.vercel.app/",
    cardBadge: text("Building", "Construyéndose"),
    context: text(
      "Buying tech usually means checking several stores, comparing discounts and understanding whether an offer is actually good. Precio Real organizes that information so the decision becomes simpler.",
      "Comprar tecnología suele exigir revisar varias tiendas, comparar descuentos y entender si una oferta realmente conviene. Precio Real ordena esa información para que la decisión sea más simple."
    ),
    whatIDid: [
      text("Designed and developed the digital product for Precio Real.", "Diseñé y desarrollé el producto digital para Precio Real."),
      text("Created a structure to compare technology prices across different stores.", "Creé una estructura para comparar precios de tecnología entre distintas tiendas."),
      text("Built a user experience focused on finding the best real price.", "Construí una experiencia enfocada en encontrar el mejor precio real."),
      text("Defined the alert system for price drops and relevant deals.", "Definí el sistema de alertas para bajas de precio y ofertas relevantes."),
      text("Prepared the platform to scale into new categories, stores and automated updates.", "Preparé la plataforma para escalar hacia nuevas categorías, tiendas y actualizaciones automáticas."),
    ],
    result: text(
      "A consumer-oriented functional concept where the value lies in turning scattered data into a simple and actionable reading.",
      "Un concepto funcional orientado al consumidor, donde el valor está en convertir datos dispersos en una lectura simple y accionable."
    ),
    gallery: [
      {
        label: text("capture - main search", "captura - buscador principal"),
        aspectRatio: "16 / 8",
        hasBrowserBar: true,
        image: "/assets/projects/precio-real.png",
      },
      { label: text("detail - price ranking", "detalle - ranking de precios"), aspectRatio: "4 / 3" },
      { label: text("detail - product page", "detalle - ficha de producto"), aspectRatio: "4 / 3" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
