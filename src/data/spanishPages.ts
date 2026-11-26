import type { PhotoKey } from './photos';

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
  photo?: PhotoKey;
  sections: SpanishPageSection[];
  ctaLabel: string;
  ctaHref: string;
}

export const spanishPages: Record<string, SpanishPage> = {
  horarios: {
    title: 'Horarios de entrenamiento | Puerto Viejo Volleyball Academy',
    description: 'Horario general de entrenamiento de Puerto Viejo Volleyball Academy en Playa Cocles: de lunes a sábado, entre las 3:00 y las 5:30 p. m.',
    eyebrow: 'Entrenamientos / Playa Cocles',
    heading: 'Haz espacio para la próxima repetición.',
    intro: 'Las sesiones generalmente se realizan de lunes a sábado por la tarde en Playa Cocles.',
    number: '04',
    photo: 'settingPractice',
    sections: [
      {
        title: 'Horario general de entrenamiento',
        paragraphs: [
          'Las sesiones generalmente se realizan de lunes a sábado, entre las 3:00 y las 5:30 p. m. Contacta a PVVA para confirmar la disponibilidad actual y el horario de tu sesión.',
          'Zona de entrenamiento: Playa Cocles, Puerto Viejo. Zona horaria: hora de Costa Rica, UTC−6.',
        ],
      },
      {
        title: '¿Es tu primer entrenamiento?',
        paragraphs: ['Completa el proceso para unirte y confirma tu programa antes de asistir. Los atletas deben registrarse primero.'],
      },
    ],
    ctaLabel: 'Confirmar tu horario por WhatsApp',
    ctaHref: 'https://wa.me/50660196290?text=Hola%20PVVA%2C%20%C2%BFme%20pueden%20confirmar%20la%20disponibilidad%20y%20el%20horario%20de%20entrenamiento%3F',
  },
  torneos: {
    title: 'Torneos de voleibol de playa | Puerto Viejo Volleyball Academy',
    description: 'Consulta los torneos organizados por Puerto Viejo Volleyball Academy. Fechas, categorías, cuotas e inscripción se publicarán al confirmarse.',
    eyebrow: 'Competencia / Eventos PVVA',
    heading: 'Gana cada punto.',
    intro: 'Los torneos de PVVA reúnen a atletas para competir, aprender y hacer crecer el voleibol en el Caribe de Costa Rica.',
    number: '06',
    photo: 'rallySpike',
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
    ctaHref: 'https://wa.me/50660196290?text=Hola%20PVVA%2C%20av%C3%ADsenme%20cuando%20anuncien%20el%20pr%C3%B3ximo%20torneo.',
  },
  eventos: {
    title: 'Eventos y noticias | Puerto Viejo Volleyball Academy',
    description: 'Noticias y próximos eventos de Puerto Viejo Volleyball Academy: campamentos, torneos, clínicas y novedades de la academia.',
    eyebrow: 'Actualidad / PVVA',
    heading: 'En la arena y alrededor del juego.',
    intro: 'Sigue las clínicas, campamentos, torneos, logros de atletas e historias de la comunidad PVVA.',
    number: '07',
    photo: 'gatherShore',
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
  contacto: {
    title: 'Contacto | Puerto Viejo Volleyball Academy',
    description: 'Contacta a Puerto Viejo Volleyball Academy en Playa Cocles, Puerto Viejo, Limón, Costa Rica por correo electrónico o WhatsApp.',
    eyebrow: 'Contacto / Puerto Viejo',
    heading: 'Hablemos de voleibol.',
    intro: '¿Tienes preguntas sobre entrenamientos, campamentos, torneos o una visita de equipo a Puerto Viejo? Escribe a PVVA.',
    number: '09',
    photo: 'coastTeam',
    sections: [
      {
        title: 'Puerto Viejo Volleyball Academy',
        paragraphs: ['Correo: pvvolleyballacademy@gmail.com', 'WhatsApp: +506 6019 6290', 'Instagram: @pv_volleyballclub', 'Pagos: SINPE Móvil o depósito bancario directo al +506 6019 6290', 'Zona de entrenamiento: Playa Cocles, Puerto Viejo, Limón, Costa Rica.'],
      },
      {
        title: 'Cómo llegar',
        paragraphs: ['El pin y las indicaciones de la cancha exacta están pendientes. Confirma el punto de encuentro con PVVA antes de viajar a una sesión.'],
        items: ['Mapa general: Playa Cocles, Puerto Viejo de Talamanca, Limón, Costa Rica.'],
      },
    ],
    ctaLabel: 'Escribir por WhatsApp',
    ctaHref: 'https://wa.me/50660196290',
  },
  privacidad: {
    title: 'Privacidad | Puerto Viejo Volleyball Academy',
    description: 'Información de privacidad para las personas que contactan a Puerto Viejo Volleyball Academy por medio de su sitio web.',
    eyebrow: 'Información del sitio web',
    heading: 'Tu privacidad importa.',
    intro: 'Este sitio utiliza herramientas de analítica de Google para entender cómo se usa. No recibe formularios.',
    number: '10',
    sections: [
      {
        title: 'Al contactar a PVVA',
        paragraphs: ['Si contactas a la academia por correo electrónico o WhatsApp, la información que decidas compartir será gestionada por esos servicios y por PVVA. Evita enviar información personal sensible en el primer mensaje.'],
      },
      {
        title: 'Donaciones',
        paragraphs: ['Las donaciones se realizan a través de PayPal, fuera de este sitio. PayPal gestiona los datos de pago según su propia política de privacidad.'],
      },
      {
        title: 'Analítica',
        paragraphs: ['Este sitio utiliza Google Tag Manager para cargar herramientas de medición de Google, como Google Analytics. Estas herramientas usan cookies y tecnologías similares para recopilar información como las páginas que visitas, el tiempo que permaneces, el tipo de dispositivo y navegador, y tu ubicación aproximada. PVVA utiliza esta información solo para entender cómo se usa el sitio y mejorarlo. Google procesa estos datos según su propia política de privacidad (policies.google.com/privacy). Puedes bloquear estas cookies desde la configuración de tu navegador o usar el complemento de inhabilitación de Google Analytics (tools.google.com/dlpage/gaoptout).'],
      },
      {
        title: 'Datos del sitio',
        paragraphs: ['Este sitio no incluye formularios, píxeles publicitarios ni registro de cuentas. El proveedor de alojamiento puede procesar registros técnicos estándar para entregar y proteger el sitio.'],
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