// Mock data for Siete CX Landing Page

export const siteData = {
  navigation: {
    logo: {
      url: "https://customer-assets.emergentagent.com/job_premium-cx/artifacts/p2reh895_Logo%20Siete%20CX.png",
      alt: "Siete CX Logo"
    },
    links: [
      { id: 'inicio', label: 'Inicio', href: '#hero' },
      { id: 'porque', label: 'Por qué Siete CX', href: '#value-prop' },
      { id: 'como', label: 'Cómo funciona', href: '#process' },
      { id: 'sectores', label: 'Sectores', href: '#sectors' },
      { id: 'demo', label: 'Demo', href: '#cta' }
    ]
  },
  
  hero: {
    headline: "Transformamos la experiencia de tus clientes en decisiones estratégicas",
    subheadline: "Medición del customer journey con clientes incógnito, presencial y digital, en minutos, no días.",
    cta: {
      primary: "Solicitar demo",
      secondary: "Ver cómo funciona"
    },
    image: "https://customer-assets.emergentagent.com/job_premium-cx/artifacts/llrae9ye_freepik__bold-flat-illustration-of-a-black-woman-presenting__81827.png"
  },
  
  valueProp: {
    title: "¿Por qué elegir Siete CX?",
    subtitle: "Convierte cada interacción en insights accionables",
    benefits: [
      {
        id: 1,
        icon: "Zap",
        title: "Insights inmediatos",
        description: "Obtén resultados en tiempo real, no esperes semanas por reportes."
      },
      {
        id: 2,
        icon: "Video",
        title: "Evidencia tangible",
        description: "Video, audio y dashboards que respaldan cada recomendación."
      },
      {
        id: 3,
        icon: "Lightbulb",
        title: "Inteligencia accionable",
        description: "IA + marco McKinsey/Bain para estrategias que funcionan."
      },
      {
        id: 4,
        icon: "Maximize2",
        title: "Flexibilidad total",
        description: "Adaptable a cualquier sector, tamaño y necesidad específica."
      }
    ]
  },
  
  process: {
    title: "Cómo transformamos tu CX en 4 pasos",
    subtitle: "De la estrategia a la ejecución, todo integrado",
    steps: [
      {
        id: 1,
        icon: "Settings",
        title: "Diseño del instrumento",
        description: "Configuramos la medición perfecta para tus objetivos.",
        image: "https://customer-assets.emergentagent.com/job_premium-cx/artifacts/kpalx463_freepik__bold-flat-illustration-of-a-business-analyst-a-mid__81815.png"
      },
      {
        id: 2,
        icon: "Users",
        title: "Gestión de campo",
        description: "Clientes incógnito evalúan cada punto de contacto."
      },
      {
        id: 3,
        icon: "BarChart3",
        title: "Análisis con IA",
        description: "Procesamos datos con algoritmos de última generación.",
        image: "https://customer-assets.emergentagent.com/job_premium-cx/artifacts/cwgnc9kr_freepik__bold-flat-illustration-of-a-business-analyst-an-af__81817.png"
      },
      {
        id: 4,
        icon: "PresentationChart",
        title: "Insights estratégicos",
        description: "Dashboards ejecutivos con recomendaciones accionables."
      }
    ]
  },
  
  sectors: {
    title: "Sectores que transformamos",
    subtitle: "Experiencia especializada en las industrias más exigentes",
    industries: [
      {
        id: 1,
        icon: "Building2",
        title: "Bancos",
        description: "Reduce fricciones y aumenta fidelización.",
        stats: "40% menos abandonos",
        color: "from-blue-600 to-blue-400"
      },
      {
        id: 2,
        icon: "ShoppingBag",
        title: "Retail",
        description: "Optimiza cada punto de contacto.",
        stats: "25% más conversión",
        color: "from-green-600 to-green-400"
      },
      {
        id: 3,
        icon: "Heart",
        title: "Salud",
        description: "Garantiza experiencias consistentes y humanizadas.",
        stats: "90% satisfacción",
        color: "from-red-600 to-red-400"
      }
    ]
  },
  
  testimonial: {
    quote: "Siete CX nos ayudó a identificar puntos críticos que no veíamos. En 3 meses mejoramos nuestro NPS en 40 puntos.",
    author: "María González",
    role: "Head of Customer Experience",
    company: "Banco Nacional",
    avatar: "/api/placeholder/60/60",
    logo: "/api/placeholder/120/40"
  },
  
  finalCta: {
    title: "Convierte la experiencia en tu mayor ventaja competitiva",
    subtitle: "Únete a las empresas líderes que ya transforman su CX con datos reales",
    cta: "Agendar demo ahora",
    features: [
      "Demo personalizada de 30 minutos",
      "Análisis gratuito de tu customer journey",
      "Propuesta de valor específica para tu sector"
    ]
  },
  
  footer: {
    copyright: "© 2024 Siete Inteligencia Creativa. Todos los derechos reservados.",
    links: {
      contact: "contacto@sietecx.com",
      phone: "+52 55 1234 5678",
      linkedin: "#",
      twitter: "#"
    }
  }
};