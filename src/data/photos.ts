export type Orientation = 'horizontal' | 'vertical';

export interface Photo {
  /** SEO-friendly filename in /public/images (without the .webp extension). */
  name: string;
  orientation: Orientation;
  alt: { en: string; es: string };
  /** Optional CSS object-position used when the photo is cropped (e.g. on phones). */
  focus?: string;
}

/** Dimensions of every optimized export. */
export const photoSize = {
  horizontal: { width: 1672, height: 941 },
  vertical: { width: 941, height: 1672 },
} as const;

const h = (name: string, en: string, es: string): Photo => ({ name, orientation: 'horizontal', alt: { en, es } });
const withFocus = (focus: string, photo: Photo): Photo => ({ ...photo, focus });
const v = (name: string, en: string, es: string): Photo => ({ name, orientation: 'vertical', alt: { en, es } });

export const photos = {
  // ── Horizontal ────────────────────────────────────────────────
  heroAttack: h('pvva-beach-volleyball-attack-playa-cocles-costa-rica',
    'PVVA athlete jumps to attack the ball at the net during beach volleyball training on Playa Cocles, Costa Rica',
    'Atleta de PVVA salta para atacar el balón en la red durante un entrenamiento de voleibol de playa en Playa Cocles, Costa Rica'),
  teamTalk: h('pvva-coach-team-talk-beach-volleyball-court',
    'PVVA founder and head coach Yulius Brown Rudolf talks with a line of athletes on the beach volleyball court',
    'El fundador y entrenador principal de PVVA, Yulius Brown Rudolf, habla con una fila de atletas en la cancha de voleibol de playa'),
  teamLineupWide: h('pvva-team-lineup-coach-beach-court-wide',
    'PVVA athletes line up at the net as the coach leads a session on the beach court',
    'Atletas de PVVA en fila junto a la red mientras el entrenador dirige una sesión en la cancha de playa'),
  coachInstructs: h('pvva-coach-instructs-team-net-playa-cocles',
    'PVVA coach holding a ball gives instructions to athletes lined up at the net on Playa Cocles',
    'Entrenador de PVVA con un balón da instrucciones a los atletas en fila junto a la red en Playa Cocles'),
  coachBriefing: withFocus('22% center', h('pvva-coach-briefing-athletes-playa-cocles',
    'PVVA coach gives instructions to a group of athletes on the sand at Playa Cocles',
    'Entrenador de PVVA da instrucciones a un grupo de atletas en la arena de Playa Cocles')),
  coachMeeting: h('pvva-coach-team-meeting-net-playa-cocles',
    'PVVA coach and athletes meet at the net before a drill',
    'Entrenador y atletas de PVVA se reúnen junto a la red antes de un ejercicio'),
  coachDemo: h('pvva-coach-demonstrates-technique-beach',
    'PVVA coach demonstrates technique to an athlete on the beach',
    'Entrenador de PVVA demuestra la técnica a un atleta en la playa'),
  teamHuddle: h('pvva-team-huddle-coach-volleyballs-sand',
    'PVVA athletes gather around the coach with volleyballs on the sand',
    'Atletas de PVVA se reúnen alrededor del entrenador con balones sobre la arena'),
  coastTeam: h('pvva-coach-athletes-caribbean-beach-puerto-viejo',
    'PVVA coach and athletes talk on the beach in Puerto Viejo with the Caribbean Sea behind them',
    'Entrenador y atletas de PVVA conversan en la playa de Puerto Viejo con el mar Caribe al fondo'),
  caribbeanCourt: h('beach-volleyball-court-caribbean-coast-puerto-viejo',
    'Beach volleyball court on the Caribbean coast of Puerto Viejo with horseback riders passing along the shore',
    'Cancha de voleibol de playa en la costa caribeña de Puerto Viejo con jinetes a caballo pasando por la orilla'),
  gatherShore: h('pvva-athletes-gather-volleyballs-caribbean-shore',
    'PVVA athletes gather volleyballs at the net with horses riding along the Caribbean shore',
    'Atletas de PVVA recogen balones junto a la red mientras pasan caballos por la orilla del Caribe'),
  agilityDrill: h('pvva-athletes-agility-drill-ocean-beach',
    'PVVA athletes run an agility drill on the beach beside the Caribbean Sea',
    'Atletas de PVVA hacen un ejercicio de agilidad en la playa junto al mar Caribe'),
  jumpFootwork: h('pvva-athlete-jump-footwork-drill-beach',
    'PVVA athlete leaps high during a footwork drill on the beach',
    'Atleta de PVVA salta alto durante un ejercicio de desplazamiento en la playa'),
  athletesJump: h('pvva-athletes-jump-training-caribbean-beach',
    'PVVA athletes jump and sprint through a footwork drill on the Caribbean beach',
    'Atletas de PVVA saltan y corren en un ejercicio de desplazamiento en la playa caribeña'),
  approachJumps: h('pvva-athletes-approach-jump-drill-sand',
    'PVVA athletes practise approach jumps on the sand by the sea',
    'Atletas de PVVA practican saltos de aproximación en la arena junto al mar'),
  rallySpike: h('beach-volleyball-rally-spike-pvva-match-play',
    'Beach volleyball player spikes the ball over the net during PVVA match play',
    'Jugador de voleibol de playa remata el balón sobre la red durante un partido de PVVA'),
  attackJungle: h('pvva-athlete-attack-net-jungle-court',
    'PVVA athlete attacks the ball at the net with the jungle behind the beach court',
    'Atleta de PVVA ataca el balón en la red con la selva detrás de la cancha de playa'),
  blockJump: h('pvva-athlete-block-jump-net',
    'PVVA athlete jumps to block at the net during practice',
    'Atleta de PVVA salta a bloquear en la red durante la práctica'),
  rallyDrill: h('pvva-beach-volleyball-rally-drill-playa-cocles',
    'PVVA athletes play out a rally drill across the beach volleyball court at Playa Cocles',
    'Atletas de PVVA juegan un ejercicio de rally en la cancha de voleibol de playa de Playa Cocles'),
  practiceGame: h('pvva-beach-volleyball-practice-game-tropical-court',
    'PVVA athletes play a practice game on the tropical beach volleyball court',
    'Atletas de PVVA juegan un partido de práctica en la cancha tropical de voleibol de playa'),
  digDrill: h('pvva-beach-volleyball-dig-drill',
    'PVVA athlete lunges low to dig the ball during a beach volleyball drill',
    'Atleta de PVVA se lanza bajo para defender el balón durante un ejercicio de voleibol de playa'),
  digPalms: h('pvva-athlete-dig-tropical-court',
    'PVVA athlete drops to dig the ball under the palms at the beach court',
    'Atleta de PVVA se agacha para defender el balón bajo las palmeras de la cancha de playa'),
  diveDrill: h('pvva-athlete-dives-for-ball-beach-court',
    'PVVA athlete dives toward the ball during a beach volleyball drill',
    'Atleta de PVVA se lanza hacia el balón durante un ejercicio de voleibol de playa'),
  forearmPass: h('pvva-athlete-forearm-pass-beach-court',
    'PVVA athlete makes a forearm pass on the beach volleyball court',
    'Atleta de PVVA hace un pase de antebrazo en la cancha de voleibol de playa'),
  passingDrill: h('pvva-athletes-passing-drill-beach-court',
    'PVVA athletes work through a passing drill on the beach volleyball court',
    'Atletas de PVVA trabajan un ejercicio de recepción en la cancha de voleibol de playa'),
  settingPractice: h('pvva-athlete-setting-practice-beach-court',
    'PVVA athlete practises an overhead set on the beach volleyball court',
    'Atleta de PVVA practica un pase de colocación en la cancha de voleibol de playa'),
  settingDrill: h('pvva-beach-volleyball-setting-drill-ocean',
    'PVVA athletes practise setting at the net with the ocean behind them',
    'Atletas de PVVA practican la colocación en la red con el mar al fondo'),
  shadeBreak: h('pvva-athletes-break-shade-playa-cocles',
    'PVVA athletes take a break in the shade of the trees at Playa Cocles',
    'Atletas de PVVA toman un descanso a la sombra de los árboles en Playa Cocles'),
  shadeRelax: h('pvva-athletes-relax-shade-after-training',
    'PVVA athletes relax in the shade after training',
    'Atletas de PVVA se relajan a la sombra después del entrenamiento'),
  teamBreakBall: h('pvva-volleyball-sand-team-break-net',
    'PVVA volleyball in the sand with the team taking a break at the net',
    'Balón de PVVA en la arena con el equipo descansando junto a la red'),
  sunsetBall: h('pvva-volleyball-sunset-playa-cocles',
    'PVVA volleyball in the sand at sunset with athletes relaxing by the net at Playa Cocles',
    'Balón de PVVA en la arena al atardecer con atletas descansando junto a la red en Playa Cocles'),

  // ── Vertical ──────────────────────────────────────────────────
  netCaribbean: v('beach-volleyball-net-caribbean-sea-puerto-viejo',
    'Beach volleyball net on the sand with the Caribbean Sea behind it in Puerto Viejo, Costa Rica',
    'Red de voleibol de playa sobre la arena con el mar Caribe al fondo en Puerto Viejo, Costa Rica'),
  defenseDrill: v('pvva-athlete-beach-volleyball-defense-drill',
    'PVVA athletes laughing during a beach volleyball defense drill at the net',
    'Atletas de PVVA se ríen durante un ejercicio de defensa de voleibol de playa junto a la red'),
  warmUp: v('pvva-athlete-warm-up-beach-training',
    'PVVA athlete stretches in a deep lunge during a beach training warm-up',
    'Atleta de PVVA estira en una zancada profunda durante el calentamiento en la playa'),
  stretch: v('pvva-athlete-dynamic-stretch-warm-up',
    'Smiling PVVA athlete in a dynamic stretch during the team warm-up',
    'Atleta de PVVA sonríe durante un estiramiento dinámico en el calentamiento del equipo'),
  courtside: v('pvva-athletes-courtside-beach-volleyball',
    'Two PVVA athletes stand courtside under the trees with a beach volleyball at their feet',
    'Dos atletas de PVVA junto a la cancha bajo los árboles con un balón de voleibol de playa a sus pies'),
  restHydrate: v('pvva-athletes-rest-hydrate-beach-training',
    'Two PVVA athletes rest and drink water on the sand between training sessions',
    'Dos atletas de PVVA descansan y toman agua en la arena entre sesiones de entrenamiento'),
  playaCocles: v('playa-cocles-beach-puerto-viejo-limon-costa-rica',
    'Playa Cocles beach and volleyball court under a blue sky in Puerto Viejo, Limón, Costa Rica',
    'Playa Cocles y su cancha de voleibol bajo un cielo azul en Puerto Viejo, Limón, Costa Rica'),
  pvvaBall: v('pvva-beach-volleyball-ball-playa-cocles',
    'PVVA beach volleyball resting in the sand with athletes gathered at the net behind it',
    'Balón de voleibol de playa de PVVA sobre la arena con atletas reunidos junto a la red al fondo'),
  ballTeamNet: v('pvva-volleyball-sand-athletes-net',
    'PVVA volleyball in the sand with athletes resting by the net in the background',
    'Balón de PVVA en la arena con atletas descansando junto a la red al fondo'),
  tropicalBall: v('pvva-volleyball-sand-tropical-court',
    'PVVA volleyball in the sand with the tropical beach court blurred behind it',
    'Balón de PVVA en la arena con la cancha tropical desenfocada al fondo'),
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

export const allPhotoKeys = Object.keys(photos) as PhotoKey[];
export const verticalPhotoKeys = allPhotoKeys.filter((key) => photos[key].orientation === 'vertical');

/** src/size attributes for an optimized photo. */
export function photoAttrs(key: PhotoKey) {
  const photo: Photo = photos[key];
  const size = photoSize[photo.orientation];
  return {
    src: `/images/${photo.name}.webp`,
    width: size.width,
    height: size.height,
    orientation: photo.orientation,
  };
}
