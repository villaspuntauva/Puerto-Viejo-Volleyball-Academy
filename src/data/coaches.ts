import type { Text } from './roster';

export interface Coach {
  slug: string;
  name: string;
  title: Text;
  /** File name in /public/images/coaches/. */
  photo?: string;
  email?: string;
  /** Displayed as written; the digits are used for tel: and WhatsApp links. */
  phone?: string;
  hometown?: Text;
  bio: { en: string[]; es: string[] };
}

export const coaches: Coach[] = [
  {
    slug: 'yulius-brown-rudolf',
    name: 'Yulius Brown Rudolf',
    title: { en: 'Founder and Head Coach', es: 'Fundador y entrenador principal' },
    photo: 'yulius-brown-rudolf-pvva-head-coach.webp',
    email: 'pvvolleyballacademy@gmail.com',
    phone: '+506 6019-6290',
    hometown: { en: 'Puerto Viejo, Talamanca, Costa Rica', es: 'Puerto Viejo, Talamanca, Costa Rica' },
    bio: {
      en: [
        'Yulius Brown Rudolf is the founder and head coach of Puerto Viejo Volleyball Academy (PVVA), established in 2026 in his hometown of Puerto Viejo, Talamanca, Costa Rica. A Costa Rican international volleyball athlete and former NCAA Division I player, Brown Rudolf brings experience in indoor and beach volleyball to an academy built around personal growth, competitive development, and opportunity.',
        'Brown Rudolf began coaching at sixteen and served as the boys’ head coach at Caribe before founding PVVA. During the 2025 and 2026 seasons, he helped athletes achieve national and international success, including gold at Volleyball Canada Beach Nationals, tournament titles in Colombia, and victories across several age divisions in Costa Rica’s national competitions. His work with these athletes has continued through their development at Caribe and PVVA.',
        'As a player, Brown Rudolf competed for Merrimack College during the spring 2024 season as an outside hitter while studying Exercise Science. He made his international debut representing Costa Rica at the Central American U21 Beach Volleyball Championship in November 2022. Since then, he has continued to grow and expand his international competition experience each year, competing at World Championships, indoor and beach NORCECA events, and the 2026 NORCECA pre-Olympic beach volleyball qualifier in Puerto Rico, where he finished fifth. His individual honors include Best Opposite at the 2023 U19 NORCECA Championship.',
        'Based in Costa Rica, Brown Rudolf’s development has been shaped by his training at home and additional training experiences in Canada, the United States, and Germany. He has also coached in Canada and learned from coaches from Canada, Cuba, Brazil, the United States, Costa Rica, and Germany. These experiences have introduced him to a variety of technical approaches, communication styles, and training methods, which he adapts to the needs of his athletes.',
        'Personal development is central to his philosophy. Brown Rudolf places athletes’ character and well-being at the heart of his work, emphasizing respect, discipline, communication, accountability, and care for others. He wants players to develop skills that help them navigate challenges, build meaningful relationships, and improve throughout their lives. For those pursuing competitive careers, that foundation supports their ambitions to reach the international and professional levels.',
        'Brown Rudolf founded PVVA in response to the limited structured opportunities available to young people in Puerto Viejo and the undiscovered talent he saw within the community. His goal is to provide a positive environment where athletes can develop their abilities, build healthy habits, and pursue opportunities through sport. His long-term vision includes regularly welcoming international players and coaches for training camps and clinics, strengthening local volleyball, and creating pathways for PVVA athletes to compete internationally and professionally.',
      ],
      es: [
        'Yulius Brown Rudolf es el fundador y entrenador principal de Puerto Viejo Volleyball Academy (PVVA), creada en 2026 en su comunidad natal de Puerto Viejo, Talamanca, Costa Rica. Atleta internacional de voleibol de Costa Rica y exjugador de la División I de la NCAA, Brown Rudolf aporta experiencia en voleibol de sala y de playa a una academia centrada en el crecimiento personal, el desarrollo competitivo y la oportunidad.',
        'Brown Rudolf comenzó a entrenar a los dieciséis años y fue entrenador principal del equipo masculino de Caribe antes de fundar PVVA. Durante las temporadas 2025 y 2026 ayudó a sus atletas a alcanzar éxitos nacionales e internacionales, entre ellos el oro en el Campeonato Nacional de Voleibol de Playa de Volleyball Canada, títulos de torneos en Colombia y victorias en varias categorías de edad en las competencias nacionales de Costa Rica. Su trabajo con estos atletas ha continuado a lo largo de su desarrollo en Caribe y en PVVA.',
        'Como jugador, Brown Rudolf compitió con Merrimack College durante la temporada de primavera de 2024 como atacante externo mientras estudiaba Ciencias del Ejercicio. Debutó internacionalmente representando a Costa Rica en el Campeonato Centroamericano Sub-21 de Voleibol de Playa en noviembre de 2022. Desde entonces ha seguido creciendo y ampliando su experiencia competitiva internacional cada año, compitiendo en Campeonatos Mundiales, en eventos NORCECA de sala y de playa, y en el clasificatorio preolímpico NORCECA de voleibol de playa 2026 en Puerto Rico, donde terminó en quinto lugar. Entre sus reconocimientos individuales destaca el de Mejor Opuesto en el Campeonato NORCECA Sub-19 de 2023.',
        'Con base en Costa Rica, el desarrollo de Brown Rudolf se ha formado a través de su entrenamiento en el país y de experiencias adicionales en Canadá, Estados Unidos y Alemania. También ha sido entrenador en Canadá y ha aprendido de entrenadores de Canadá, Cuba, Brasil, Estados Unidos, Costa Rica y Alemania. Estas experiencias le han dado a conocer distintos enfoques técnicos, estilos de comunicación y métodos de entrenamiento, que adapta a las necesidades de sus atletas.',
        'El desarrollo personal es el centro de su filosofía. Brown Rudolf pone el carácter y el bienestar de los atletas en el corazón de su trabajo, y promueve el respeto, la disciplina, la comunicación, la responsabilidad y el cuidado de los demás. Quiere que los jugadores desarrollen habilidades que les ayuden a enfrentar desafíos, construir relaciones significativas y seguir mejorando a lo largo de su vida. Para quienes buscan una carrera competitiva, esa base respalda su ambición de llegar a los niveles internacional y profesional.',
        'Brown Rudolf fundó PVVA ante las limitadas oportunidades estructuradas disponibles para los jóvenes de Puerto Viejo y el talento por descubrir que veía en la comunidad. Su objetivo es ofrecer un entorno positivo donde los atletas puedan desarrollar sus capacidades, formar hábitos saludables y aprovechar las oportunidades que brinda el deporte. Su visión a largo plazo incluye recibir con regularidad a jugadores y entrenadores internacionales para campamentos de entrenamiento y clínicas, fortalecer el voleibol local y crear caminos para que los atletas de PVVA compitan a nivel internacional y profesional.',
      ],
    },
  },
];

export const coachText = {
  en: {
    eyebrow: 'Coaches & staff / PVVA',
    title: 'The people behind the progress.',
    intro: 'Meet the people building beach volleyball opportunities in Puerto Viejo and the Caribbean of Costa Rica.',
    titleLabel: 'Title',
    email: 'Email',
    phone: 'Phone',
    hometown: 'Hometown',
    biography: 'Biography',
    growingEyebrow: 'Growing the team',
    growingTitle: 'Coaches, specialists, and visiting talent.',
    growingText: 'This page can grow to include assistant coaches, guest coaches, strength and conditioning staff, and visiting coaches as they join PVVA.',
  },
  es: {
    eyebrow: 'Entrenadores y equipo / PVVA',
    title: 'Las personas detrás del progreso.',
    intro: 'Conoce a las personas que están creando más oportunidades para el voleibol de playa en Puerto Viejo y el Caribe de Costa Rica.',
    titleLabel: 'Cargo',
    email: 'Correo',
    phone: 'Teléfono',
    hometown: 'Lugar de origen',
    biography: 'Biografía',
    growingEyebrow: 'Un equipo en crecimiento',
    growingTitle: 'Entrenadores, especialistas y talento invitado.',
    growingText: 'Esta sección también podrá presentar a entrenadores asistentes, invitados, especialistas en fuerza y acondicionamiento, y entrenadores visitantes cuando se integren a PVVA.',
  },
};
