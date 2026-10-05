export interface SpanishPageSection {
  title: string;
  paragraphs: string[];
  items?: string[];
}

export interface SpanishPage {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  number: string;
  sections: SpanishPageSection[];
  ctaLabel: string;
  ctaHref: string;
}

export const spanishPages: Record<string, SpanishPage> = {
  academia: {
    title: 'La academia | Puerto Viejo Volleyball Academy',
    description: 'Conoce el enfoque de desarrollo de Puerto Viejo Volleyball Academy y sus programas de voleibol de playa en Limón, Costa Rica.',
    eyebrow: 'La academia / Puerto Viejo, Costa Rica',
    heading: 'Desarrolla tu juego. Construye el equipo.',
    intro: 'PVVA es una academia de voleibol de playa en el Caribe de Costa Rica. Desarrollamos atletas mediante entrenamientos estructurados, competencia y un fuerte sentido de equipo.',
    number: '01',
    sections: [
      {
        title: 'Nuestra misión',
        paragraphs: [
          'Estamos construyendo un entorno de voleibol de playa para atletas de Puerto Viejo y las comunidades caribeñas cercanas, con oportunidades para aprender, entrenar y competir.',
          'La academia busca conectar el desarrollo individual con el trabajo en equipo y el crecimiento de una comunidad local de voleibol.',
        ],
      },
      {
        title: 'Programas de entrenamiento',
        paragraphs: ['Los programas de PVVA están pensados para atletas en distintas etapas. Los horarios, edades, tarifas y disponibilidad se confirman directamente con la academia.'],
        items: [
          'Future: fundamentos para atletas jóvenes y en desarrollo.',
          'Premier: una ruta competitiva para atletas con objetivos de mayor rendimiento.',
          'Entrenamiento individual: trabajo personalizado según las metas del atleta.',
          'Sesiones especializadas: bloqueo, defensa, saque, ataque y preparación física; disponibilidad por confirmar.',
        ],
      },
      {
        title: 'Entrenar para competir',
        paragraphs: [
          'El entrenamiento busca desarrollar habilidades técnicas, confianza y preparación para la competencia. Los torneos, campamentos y sesiones especiales se anunciarán cuando sus detalles estén confirmados.',
          'PVVA da la bienvenida a atletas de distintos niveles que quieran crecer dentro de un entorno comprometido y colaborativo.',
        ],
      },
    ],
    ctaLabel: 'Consultar cómo unirme',
    ctaHref: '/es/inscripcion/',
  },
  atletas: {
    title: 'Atletas | Puerto Viejo Volleyball Academy',
    description: 'Conoce las rutas de desarrollo Future y Premier de Puerto Viejo Volleyball Academy. Los perfiles se publicarán con autorización de cada atleta.',
    eyebrow: 'Atletas / PVVA',
    heading: 'Cada atleta tiene un próximo paso.',
    intro: 'PVVA reúne a atletas de voleibol de playa en desarrollo y competencia de Puerto Viejo y la región.',
    number: '02',
    sections: [
      {
        title: 'Premier',
        paragraphs: ['La ruta Premier es para atletas que entrenan con objetivos competitivos de mayor nivel. El roster se encuentra en desarrollo; los perfiles se publicarán con autorización del atleta y, cuando corresponda, de su madre, padre o persona encargada.'],
      },
      {
        title: 'Future',
        paragraphs: ['Future acompaña a atletas jóvenes y en desarrollo mientras construyen sus habilidades, confianza y gusto por el juego. Consulta directamente con PVVA sobre grupos y disponibilidad.'],
      },
    ],
    ctaLabel: 'Preguntar por los programas',
    ctaHref: '/es/contacto/',
  },
  entrenadores: {
    title: 'Entrenadores y equipo | Puerto Viejo Volleyball Academy',
    description: 'Conoce al equipo de Puerto Viejo Volleyball Academy. La experiencia y las certificaciones se publicarán cuando estén confirmadas por la academia.',
    eyebrow: 'Entrenadores y equipo / PVVA',
    heading: 'Las personas detrás del progreso.',
    intro: 'Conoce a las personas que están creando más oportunidades para el voleibol de playa en Puerto Viejo y el Caribe de Costa Rica.',
    number: '03',
    sections: [
      {
        title: 'Yulius Brown Rudolf',
        paragraphs: [
          'Fundador y entrenador principal de Puerto Viejo Volleyball Academy.',
          'La biografía completa, trayectoria como jugador y entrenador, experiencia y certificaciones se añadirán cuando PVVA confirme esos detalles.',
        ],
      },
      {
        title: 'Un equipo en crecimiento',
        paragraphs: ['Esta sección también podrá presentar a entrenadores asistentes, invitados, especialistas en fuerza y acondicionamiento, y entrenadores visitantes cuando se integren a PVVA.'],
      },
    ],
    ctaLabel: 'Contactar a PVVA',
    ctaHref: '/es/contacto/',
  },
  horarios: {
    title: 'Horarios de entrenamiento | Puerto Viejo Volleyball Academy',
    description: 'Consulta cómo confirmar los horarios actuales de Puerto Viejo Volleyball Academy en Playa Cocles, Puerto Viejo, Costa Rica.',
    eyebrow: 'Entrenamientos / Playa Cocles',
    heading: 'Haz espacio para la próxima repetición.',
    intro: 'Aquí compartiremos información general de los grupos. El calendario detallado y actualizado se consulta directamente con la academia.',
    number: '04',
    sections: [
      {
        title: 'Confirma antes de ir a la cancha',
        paragraphs: ['Los días, horas y punto exacto de entrenamiento están por confirmar. Escribe a PVVA antes de desplazarte para verificar el horario vigente y la ubicación de la cancha.'],
        items: ['Zona de entrenamiento: Playa Cocles, Puerto Viejo.', 'Zona horaria: hora de Costa Rica, UTC−6.', 'Calendario detallado: disponible a través de PVVA.'],
      },
      {
        title: '¿Es tu primer entrenamiento?',
        paragraphs: ['Completa el proceso para unirte y confirma tu programa antes de asistir. Los atletas deben registrarse primero.'],
      },
    ],
    ctaLabel: 'Pedir el horario actual por WhatsApp',
    ctaHref: 'https://wa.me/50664880471?text=Hola%20PVVA%2C%20%C2%BFme%20pueden%20compartir%20el%20horario%20actual%20y%20la%20ubicaci%C3%B3n%20de%20la%20cancha%3F',
  },
  campamentos: {
    title: 'Campamentos de voleibol de playa | Puerto Viejo Volleyball Academy',
    description: 'Entrena en el Caribe con Puerto Viejo Volleyball Academy. Fechas, edades, entrenadores, costos e inscripción se publicarán al confirmarse.',
    eyebrow: 'Campamentos PVVA / Costa Rica',
    heading: 'Entrena en el Caribe.',
    intro: 'Desarrollo enfocado en voleibol de playa en Puerto Viejo, con la costa caribeña como escenario de entrenamiento.',
    number: '05',
    sections: [
      {
        title: 'Voleibol en primer lugar. El Caribe, siempre.',
        paragraphs: ['PVVA está desarrollando campamentos para atletas y equipos que buscan entrenar seriamente en un entorno costero único.'],
        items: ['Fechas: por anunciar.', 'Edades y nivel: por confirmar.', 'Entrenadores: por anunciar.', 'Costo e inclusiones: por confirmar.', 'Alojamiento y transporte: detalles pendientes.'],
      },
      {
        title: '¿Quieres traer a tu equipo?',
        paragraphs: ['Contacta a PVVA para conversar sobre una visita de entrenamiento, un campamento grupal o una experiencia para equipos. Los viajes y el alojamiento no forman parte de la oferta confirmada actualmente.'],
      },
    ],
    ctaLabel: 'Consultar por campamentos',
    ctaHref: 'https://wa.me/50664880471?text=Hola%20PVVA%2C%20me%20interesan%20las%20fechas%20y%20la%20inscripci%C3%B3n%20de%20los%20campamentos.',
  },
  torneos: {
    title: 'Torneos de voleibol de playa | Puerto Viejo Volleyball Academy',
    description: 'Consulta los torneos organizados por Puerto Viejo Volleyball Academy. Fechas, categorías, cuotas e inscripción se publicarán al confirmarse.',
    eyebrow: 'Competencia / Eventos PVVA',
    heading: 'Gana cada punto.',
    intro: 'Los torneos de PVVA reúnen a atletas para competir, aprender y hacer crecer el voleibol en el Caribe de Costa Rica.',
    number: '06',
    sections: [
      {
        title: 'Próximos torneos',
        paragraphs: ['Todavía no hay fechas anunciadas. Las categorías, el formato, la cuota de inscripción, el plazo y las instrucciones se publicarán cuando estén confirmados.'],
      },
      {
        title: '¿Quieres competir?',
        paragraphs: ['Pregunta por las oportunidades actuales de entrenamiento y cómo prepararte para futuras competencias.'],
      },
    ],
    ctaLabel: 'Consultar por torneos',
    ctaHref: 'https://wa.me/50664880471?text=Hola%20PVVA%2C%20av%C3%ADsenme%20cuando%20anuncien%20el%20pr%C3%B3ximo%20torneo.',
  },
  eventos: {
    title: 'Eventos y noticias | Puerto Viejo Volleyball Academy',
    description: 'Noticias y próximos eventos de Puerto Viejo Volleyball Academy: campamentos, torneos, clínicas y novedades de la academia.',
    eyebrow: 'Actualidad / PVVA',
    heading: 'En la arena y alrededor del juego.',
    intro: 'Sigue las clínicas, campamentos, torneos, logros de atletas e historias de la comunidad PVVA.',
    number: '07',
    sections: [
      {
        title: 'Eventos y noticias',
        paragraphs: ['Las novedades aparecerán aquí conforme se confirmen los eventos y se realicen las actividades de la academia.'],
        items: ['Clínicas y sesiones especiales.', 'Campamentos y torneos.', 'Logros y perfiles de atletas.', 'Historias y novedades de la comunidad.'],
      },
    ],
    ctaLabel: 'Ver información de campamentos',
    ctaHref: '/es/campamentos/',
  },
  inscripcion: {
    title: 'Únete a PVVA | Puerto Viejo Volleyball Academy',
    description: 'Inicia el proceso para unirte a Puerto Viejo Volleyball Academy. Contacta a PVVA para conversar sobre edad, experiencia, metas y programa.',
    eyebrow: 'Primer paso / Inscripción de atletas',
    heading: 'Da el siguiente paso.',
    intro: 'Formar parte de PVVA implica un compromiso con la academia y el programa de entrenamiento. Empecemos con una conversación para conocer tus metas.',
    number: '08',
    sections: [
      {
        title: 'Regístrate antes de tu primera sesión',
        paragraphs: ['No asistas a entrenar antes de completar el proceso de inscripción y confirmar tu programa con PVVA. Esta web no recopila datos personales; contacta directamente a la academia para recibir los pasos adecuados.'],
        items: ['Edad y experiencia del atleta.', 'Interés en programas y metas.', 'Disponibilidad para entrenar.', 'Participación de madre, padre o persona encargada si el atleta es menor de edad.', 'Próximos pasos y formularios necesarios.'],
      },
      {
        title: 'Inscripciones para eventos',
        paragraphs: ['Los campamentos, torneos y clínicas tendrán procesos de inscripción separados cuando sus detalles estén confirmados. No hay eventos abiertos para inscripción en este momento.'],
      },
    ],
    ctaLabel: 'Iniciar por WhatsApp',
    ctaHref: 'https://wa.me/50664880471?text=Hola%20PVVA%2C%20quiero%20iniciar%20el%20proceso%20de%20inscripci%C3%B3n%20de%20un%20atleta.',
  },
  contacto: {
    title: 'Contacto | Puerto Viejo Volleyball Academy',
    description: 'Contacta a Puerto Viejo Volleyball Academy en Playa Cocles, Puerto Viejo, Limón, Costa Rica por correo electrónico o WhatsApp.',
    eyebrow: 'Contacto / Puerto Viejo',
    heading: 'Hablemos de voleibol.',
    intro: '¿Tienes preguntas sobre entrenamientos, campamentos, torneos o una visita de equipo a Puerto Viejo? Escribe a PVVA.',
    number: '09',
    sections: [
      {
        title: 'Puerto Viejo Volleyball Academy',
        paragraphs: ['Correo: pvvolleyballacademy@gmail.com', 'WhatsApp: +506 6488 0471', 'Zona de entrenamiento: Playa Cocles, Puerto Viejo, Limón, Costa Rica.'],
      },
      {
        title: 'Cómo llegar',
        paragraphs: ['El pin y las indicaciones de la cancha exacta están pendientes. Confirma el punto de encuentro con PVVA antes de viajar a una sesión.'],
        items: ['Instagram: el perfil oficial está por confirmar.', 'Mapa general: Playa Cocles, Puerto Viejo de Talamanca, Limón, Costa Rica.'],
      },
    ],
    ctaLabel: 'Escribir por WhatsApp',
    ctaHref: 'https://wa.me/50664880471',
  },
  privacidad: {
    title: 'Privacidad | Puerto Viejo Volleyball Academy',
    description: 'Información de privacidad para las personas que contactan a Puerto Viejo Volleyball Academy por medio de su sitio web.',
    eyebrow: 'Información del sitio web',
    heading: 'Tu privacidad importa.',
    intro: 'Esta versión del sitio no utiliza analítica ni recibe formularios de inscripción.',
    number: '10',
    sections: [
      {
        title: 'Al contactar a PVVA',
        paragraphs: ['Si contactas a la academia por correo electrónico o WhatsApp, la información que decidas compartir será gestionada por esos servicios y por PVVA. Evita enviar información personal sensible en el primer mensaje.'],
      },
      {
        title: 'Datos del sitio',
        paragraphs: ['Esta versión no incluye formularios, analítica, píxeles publicitarios ni registro de cuentas. El proveedor de alojamiento puede procesar registros técnicos estándar para entregar y proteger el sitio.'],
      },
      {
        title: 'Antes del lanzamiento',
        paragraphs: ['PVVA debe revisar y actualizar este aviso para describir el proceso real de inscripción, la conservación de datos, el proveedor de alojamiento y cualquier herramienta de terceros del sitio final.', 'Consultas: pvvolleyballacademy@gmail.com.'],
      },
    ],
    ctaLabel: 'Contactar a PVVA',
    ctaHref: 'mailto:pvvolleyballacademy@gmail.com',
  },
};