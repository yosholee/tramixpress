import {
  Plane,
  Package,
  Container,
  Home,
  CheckCircle,
} from "lucide-react";

export const content = {
  en: {
    navbar: {
      features: "Services",
      howItWorks: "How it Works",
      testimonials: "Testimonials",
      faq: "FAQ",
      login: "Log in",
      getStarted: "Get Started",
    },
    hero: {
      badge: "The #1 Shipping Service to Cuba",
      title: "Fast, Reliable Shipping to",
      titleHighlight: "Cuba",
      subtitle: "Send packages, food, and essentials to your loved ones in Cuba with the most deeper trustworthy logistics network.",
      placeholder: "Enter tracking number...",
      track: "Track Package",
      try: "Try entering a tracking number to see real-time updates.",
      trust: {
        fast: "Fast Delivery",
        fastDesc: "7-10 days to Havana",
        secure: "100% Secure",
        secureDesc: "Full insurance included",
        support: "24/7 Support",
        supportDesc: "Dedicated customer team",
      },
    },
    features: {
      badge: "Our Services",
      title: "Everything you need for Cuba",
      subtitle: "From package delivery to travel arrangements, we have you covered with reliable and secure services.",
      items: [
        {
          title: "Air Shipping",
          description: "Fast delivery (3-7 days) for urgent packages and documents.",
          icon: Plane,
        },
        {
          title: "Sea Shipping",
          description: "Economical solution for large boxes and heavy cargo. (3-5 weeks)",
          icon: Container,
        },
        {
          title: "Food & Medicine",
          description: "Specialized handling for combos of food, medicine and hygiene products.",
          icon: Package,
        },
        {
          title: "Door to Door",
          description: "Guaranteed delivery directly to your recipient's home address anywhere in Cuba.",
          icon: Home,
        },
      ],
      cta: "Explore Shipping Options",
    },
    pricing: {
      badge: "Transparent Pricing",
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the perfect shipping option for your needs. No hidden fees.",
      perLb: "Per Pound",
      perLbPrice: "$1.79",
      perLbUnit: "/ lb",
      smallBox: "Small Box",
      smallBoxPrice: "$32",
      smallBoxUnit: "/ flat rate",
      largeBox: "Large Box",
      largeBoxPrice: "$57",
      largeBoxUnit: "/ flat rate",
      features: {
        weight: "Flexible Weight",
        dims12: "12x12x12 Inches",
        dims16: "16x16x16 Inches",
        delivery: "Door to Door Delivery",
        tracking: "Real-time Tracking",
        insurance: "Basic Insurance Included",
        customs: "Customs Handling",
      },
      cta: "Start Shipping",
      popular: "Most Popular",
    },
    faq: {
      badge: "Help Center",
      title: "Frequently Asked Questions",
      subtitle: "Get quick answers to your most pressing questions about our services.",
      contactSupport: "Contact Support",
      knowledgeBase: "Browse Knowledge Base",
      items: [
        {
          question: "How long does shipping to Cuba take?",
          answer: "Air shipments typically take 3-7 days, while sea shipments take 3-5 weeks depending on the destination province.",
        },
        {
          question: "Can I send food and medicine?",
          answer: "Yes, you can send 'combos' of food, medicine, and hygiene products. We comply with all customs regulations.",
        },
        {
          question: "Is there insurance for my package?",
          answer: "Yes, all shipments include basic insurance coverage. Additional coverage is available for high-value items.",
        },
        {
          question: "How do I track my package?",
          answer: "Use the tracking number provided on your receipt in the 'Track Package' section at the top of our website.",
        },
      ],
    },
    cta: {
      title: "Ready to start shipping?",
      subtitle: "Join thousands of satisfied customers who trust TramiXpress.",
      createAccount: "Create Free Account",
      contactSales: "Contact Sales",
    },
    newsletter: {
      badge: "Stay Connected",
      title: "Never Miss a Departure",
      subtitle: "Stay updated with our latest offers, promotions, and shipping schedules.",
      placeholder: "your@email.com",
      button: "Subscribe",
      spam: "No spam, unsubscribe anytime.",
      weekly: {
        title: "Weekly Schedules",
        desc: "Flight and sea departure times",
      },
      resources: {
        title: "Customs Updates",
        desc: "New regulations and guides",
      },
      early: {
        title: "Exclusive Offers",
        desc: "Discounts for subscribers",
      },
      joined: "Join 12,000+ customers already subscribed",
    },
    contact: {
      phone: "(941) 278-2357",
      email: "tramixpress2.llc@gmail.com",
      address: "1201 9th ST W, Bradenton, FL",
    },
    footer: {
      about: "Beautifully designed logistics solutions built for speed and reliability.",
      newsletterTitle: "Subscribe to our newsletter",
      newsletterDesc: "The latest updates, articles and resources sent to your inbox.",
      subscribe: "Subscribe",
      product: "Services",
      company: "Company",
      resources: "Resources",
      legal: "Legal",
      links: {
        features: "Services",
        pricing: "Pricing",
        about: "About Us",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
    terms: {
      title: "Terms and Conditions",
      lastUpdated: "Last updated: December 30, 2025",
      intro: {
        title: "1. Introduction",
        content: "Welcome to TramiXpress. These terms and conditions govern the use of our international shipping services to Cuba, including our website, mobile apps, and all related services. By using our services, you accept these terms and conditions in full. If you do not agree with these terms in full or in part, you must not use our services."
      },
      services: {
        title: "2. Shipping Services",
        content: "TramiXpress offers international logistics services, specializing in air and sea freight to Cuba. We are committed to delivering your packages to your recipient's door in Cuba, subject to applicable customs regulations and restrictions. Delivery times are estimates and may vary due to external factors such as weather conditions, customs procedures, and situations beyond our control."
      },
      rates: {
        title: "3. Rates and Payments",
        content: "Shipping rates are calculated based on weight and/or volume and the selected shipping method (sea or air). All prices are subject to change without notice, although we strive to maintain the most competitive rates in the market. Payment must be made in full before the shipment is processed. We accept multiple payment methods detailed in our checkout process."
      },
      prohibited: {
        title: "4. Prohibited Items",
        content: "Certain items are prohibited for shipping to Cuba due to international regulations and Cuban laws. These include, but are not limited to: Weapons, explosives, and ammunition; Illegal drugs and narcotics; Pornographic material; Perishable products without proper packaging; Live animals; Cash; Items violating embargo laws. The sender is responsible for ensuring that the package content and provided information do not violate US and Cuban laws. TramiXpress reserves the right to inspect packages to verify their contents."
      },
      tracking: {
        title: "5. Tracking and Delivery",
        content: "We provide a tracking number for each shipment allowing you to track the status and location of your package via our website or by contacting customer service. Delivery will be made to the address provided by the sender. It is the sender's responsibility to provide accurate and complete contact and address information. In case delivery cannot be made due to incorrect or incomplete information, additional redelivery charges will apply."
      },
      insurance: {
        title: "6. Insurance and Liability",
        content: "We offer insurance options to protect your shipments against loss or damage. We recommend insuring all valuable shipments. Without additional insurance, our liability for loss or damage is limited as established by international transport conventions. TramiXpress shall not be liable for delays caused by customs procedures, weather conditions, or any other circumstance beyond our reasonable control."
      },
      claims: {
        title: "7. Claims",
        content: "Claims for damage or loss must be submitted within 30 days of the scheduled delivery date. To process a claim, the tracking number, proof of value, and supporting documentation will be required. Claims will be evaluated on a case-by-case basis and compensation determined according to our insurance and liability policies."
      },
      privacy: {
        title: "8. Data Privacy",
        content: "We collect and process personal information necessary to provide our shipping services, in accordance with our Privacy Policy. By using our services, you consent to the collection and use of your information as described in our Privacy Policy."
      },
      modifications: {
        title: "9. Modifications",
        content: "TramiXpress reserves the right to modify these terms and conditions at any time. Modifications will be effective immediately upon posting on our website. It is the user's responsibility to periodically review these terms to be aware of any changes."
      },
      law: {
        title: "10. Applicable Law",
        content: "These terms and conditions shall be governed and interpreted in accordance with the laws of the United States and the State of Florida, without regard to its conflict of law provisions. Any dispute arising in relation to these terms shall be submitted to the exclusive jurisdiction of the courts of Miami-Dade County, Florida."
      },
      contactSection: {
        title: "11. Contact",
        content: "If you have any questions about these terms and conditions, please contact us:",
        address: "1201 9th ST W, Bradenton, FL",
        phone: "Phone: (941) 278-2357",
        email: "Email: tramixpress2.llc@gmail.com"
      }
    },
  },
  es: {
    navbar: {
      features: "Servicios",
      howItWorks: "Cómo Funciona",
      testimonials: "Testimonios",
      faq: "Preguntas",
      login: "Iniciar Sesión",
      getStarted: "Comenzar",
    },
    hero: {
      badge: "El Servicio #1 de Envíos a Cuba",
      title: "Envíos Rápidos y Seguros a",
      titleHighlight: "Cuba",
      subtitle: "Envía paquetes, alimentos y artículos esenciales a tus seres queridos en Cuba con la red logística más confiable.",
      placeholder: "Número de rastreo...",
      track: "Rastrear Paquete",
      try: "Ingresa un número de rastreo para ver actualizaciones en tiempo real.",
      trust: {
        fast: "Entrega Rápida",
        fastDesc: "7-10 días a La Habana",
        secure: "100% Seguro",
        secureDesc: "Seguro completo incluido",
        support: "Soporte 24/7",
        supportDesc: "Equipo dedicado",
      },
    },
    features: {
      badge: "Nuestros Servicios",
      title: "Todo lo que necesitas para Cuba",
      subtitle: "Desde envío de paquetes hasta trámites de viaje, te cubrimos con servicios confiables y seguros.",
      items: [
        {
          title: "Envíos Aéreos",
          description: "Entrega rápida (3-7 días) para paquetes urgentes y documentos.",
          icon: Plane,
        },
        {
          title: "Envíos Marítimos",
          description: "Solución económica para cajas grandes y carga pesada. (3-5 semanas)",
          icon: Package,
        },
        {
          title: "Alimentos y Medicinas",
          description: "Manejo especializado para combos de comida, medicinas y productos de aseo.",
          icon: Package,
        },
        {
          title: "Puerta a Puerta",
          description: "Entrega garantizada directamente en la dirección de tu destinatario en cualquier lugar de Cuba.",
          icon: Package,
        },
      ],
      cta: "Ver Opciones de Envío",
    },
    pricing: {
      badge: "Precios Transparentes",
      title: "Precios Simples y Claros",
      subtitle: "Elige la opción de envío perfecta para ti. Sin cargos ocultos.",
      perLb: "Por Libra",
      perLbPrice: "$1.79",
      perLbUnit: "/ lb",
      smallBox: "Caja Pequeña",
      smallBoxPrice: "$32",
      smallBoxUnit: "/ tarifa fija",
      largeBox: "Caja Grande",
      largeBoxPrice: "$57",
      largeBoxUnit: "/ tarifa fija",
      features: {
        weight: "Peso Flexible",
        dims12: "12x12x12 Pulgadas",
        dims16: "16x16x16 Pulgadas",
        delivery: "Entrega Puerta a Puerta",
        tracking: "Rastreo en Tiempo Real",
        insurance: "Seguro Básico Incluido",
        customs: "Gestión Aduanal",
      },
      cta: "Comenzar Envío",
      popular: "Más Popular",
    },
    faq: {
      badge: "Centro de Ayuda",
      title: "Preguntas Frecuentes",
      subtitle: "Obtén respuestas rápidas a tus preguntas más importantes sobre nuestros servicios.",
      contactSupport: "Contactar Soporte",
      knowledgeBase: "Base de Conocimiento",
      items: [
        {
          question: "¿Cuánto tiempo tardan los envíos a Cuba?",
          answer: "Los envíos aéreos suelen tardar de 3 a 7 días, mientras que los marítimos toman de 3 a 5 semanas dependiendo de la provincia.",
        },
        {
          question: "¿Puedo enviar comida y medicina?",
          answer: "Sí, puedes enviar 'combos' de alimentos, medicinas y productos de aseo. Cumplimos con todas las regulaciones aduanales.",
        },
        {
          question: "¿Mis paquetes incluyen seguro?",
          answer: "Sí, todos los envíos incluyen cobertura de seguro básico. Cobertura adicional está disponible para artículos de alto valor.",
        },
        {
          question: "¿Cómo rastreo mi paquete?",
          answer: "Usa el número de rastreo proporcionado en tu recibo en la sección 'Rastrear Paquete' en la parte superior de nuestro sitio.",
        },
      ],
    },
    cta: {
      title: "¿Listo para comenzar?",
      subtitle: "Únete a miles de clientes satisfechos que confían en TramiXpress.",
      createAccount: "Crear Cuenta Gratis",
      contactSales: "Contactar Ventas",
    },
    newsletter: {
      badge: "Mantente Conectado",
      title: "Ofertas y Promociones",
      subtitle: "Mantente actualizado con nuestras ofertas, promociones y horarios de vuelos.",
      placeholder: "tu@email.com",
      button: "Suscribirse",
      spam: "Sin spam, cancela cuando quieras.",
      weekly: {
        title: "Horarios Semanales",
        desc: "Salidas aéreas y marítimas",
      },
      resources: {
        title: "Noticias de Aduana",
        desc: "Nuevas regulaciones y guías",
      },
      early: {
        title: "Descuentos Exclusivos",
        desc: "Solo para suscriptores",
      },
      joined: "Únete a 12,000+ clientes ya suscritos",
    },
    contact: {
      phone: "(941) 278-2357",
      email: "tramixpress2.llc@gmail.com",
      address: "1201 9th ST W, Bradenton, FL",
    },
    footer: {
      about: "Soluciones logísticas diseñadas para la velocidad y la fiabilidad.",
      newsletterTitle: "Suscríbete a nuestro boletín",
      newsletterDesc: "Las últimas actualizaciones y recursos enviados a tu bandeja de entrada.",
      subscribe: "Suscribirse",
      product: "Servicios",
      company: "Empresa",
      resources: "Recursos",
      legal: "Legal",
      links: {
        features: "Servicios",
        pricing: "Precios",
        about: "Nosotros",
        contact: "Contacto",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
      },
    },
    terms: {
      title: "Términos y Condiciones",
      lastUpdated: "Última actualización: 30 de Diciembre, 2025",
      intro: {
        title: "1. Introducción",
        content: "Bienvenido a TramiXpress. Estos términos y condiciones rigen el uso de nuestros servicios de envío internacional a Cuba, incluyendo nuestro sitio web, aplicaciones móviles y todos los servicios relacionados. Al utilizar nuestros servicios, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo en su totalidad con estos términos y condiciones o cualquier parte de los mismos, no debe utilizar nuestros servicios."
      },
      services: {
        title: "2. Servicios de Envío",
        content: "TramiXpress ofrece servicios de logística internacional, especializados en envíos de cargas marítimas y aéreas a toda Cuba. Nos comprometemos a entregar sus paquetes hasta la puerta de su destinatario en Cuba, sujeto a las regulaciones aduaneras y restricciones aplicables. Los tiempos de entrega son estimados y pueden variar según factores externos como condiciones climáticas, procedimientos aduaneros, y situaciones fuera de nuestro control."
      },
      rates: {
        title: "3. Tarifas y Pagos",
        content: "Las tarifas de envío se calculan según el peso y/o volumen del paquete y el método de envío seleccionado (marítimo o aéreo). Todos los precios están sujetos a cambios sin previo aviso, aunque nos esforzamos por mantener las tarifas más competitivas del mercado. El pago debe realizarse por completo antes de que se procese el envío. Aceptamos múltiples métodos de pago que se detallan en nuestro proceso de checkout."
      },
      prohibited: {
        title: "4. Artículos Prohibidos",
        content: "Ciertos artículos están prohibidos para el envío a Cuba debido a regulaciones internacionales y leyes cubanas. Estos incluyen, pero no se limitan a: Armas, explosivos y municiones; Drogas ilegales y narcóticos; Material pornográfico; Productos perecederos sin el embalaje adecuado; Animales vivos; Dinero en efectivo; Artículos que violen las leyes de embargo. El remitente es responsable de asegurar que el contenido del paquete, asi como la información brindada, no infringen las leyes de los Estados Unidos y Cuba. TramiXpress se reserva el derecho de inspeccionar los paquetes para verificar su contenido."
      },
      tracking: {
        title: "5. Seguimiento y Entrega",
        content: "Proporcionamos un número de seguimiento para cada envío que permite rastrear el estado y ubicación de su paquete a través de nuestro sitio web o contactando a nuestro servicio al cliente. La entrega se realizará a la dirección proporcionada por el remitente. Es responsabilidad del remitente proporcionar información de contacto y dirección precisa y completa. En caso de que no se pueda realizar la entrega debido a información incorrecta o incompleta, se aplicarán cargos adicionales por reintento de entrega."
      },
      insurance: {
        title: "6. Seguro y Responsabilidad",
        content: "Ofrecemos opciones de seguro para proteger sus envíos contra pérdida o daño. Recomendamos asegurar todos los envíos de valor. Sin seguro adicional, nuestra responsabilidad por pérdida o daño está limitada según lo establecido por las convenciones internacionales de transporte. TramiXpress no será responsable por retrasos causados por procedimientos aduaneros, condiciones climáticas, o cualquier otra circunstancia fuera de nuestro control razonable."
      },
      claims: {
        title: "7. Reclamaciones",
        content: "Las reclamaciones por daños o pérdidas deben presentarse dentro de los 30 días posteriores a la fecha de entrega programada. Para procesar una reclamación, se requerirá el número de seguimiento, prueba de valor y documentación que respalde la reclamación. Las reclamaciones serán evaluadas caso por caso y la compensación se determinará según nuestras políticas de seguro y responsabilidad."
      },
      privacy: {
        title: "8. Privacidad de Datos",
        content: "Recopilamos y procesamos información personal necesaria para proporcionar nuestros servicios de envío, de acuerdo con nuestra Política de Privacidad. Al utilizar nuestros servicios, usted consiente la recopilación y uso de su información según lo descrito en nuestra Política de Privacidad."
      },
      modifications: {
        title: "9. Modificaciones",
        content: "TramiXpress se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. Es responsabilidad del usuario revisar periódicamente estos términos y condiciones para estar al tanto de cualquier cambio."
      },
      law: {
        title: "10. Ley Aplicable",
        content: "Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos y el Estado de Florida, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa que surja en relación con estos términos será sometida a la jurisdicción exclusiva de los tribunales del Condado de Miami-Dade, Florida."
      },
      contactSection: {
        title: "11. Contacto",
        content: "Si tiene alguna pregunta sobre estos términos y condiciones, por favor contáctenos:",
        address: "1201 9th ST W, Bradenton, FL",
        phone: "Teléfono: (941) 278-2357",
        email: "Email: tramixpress2.llc@gmail.com"
      }
    },

  },
};
