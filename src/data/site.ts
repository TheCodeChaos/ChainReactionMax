export const siteConfig = {
  name: 'Chain Reaction MAX',
  shortName: 'CR MAX',
  tagline: 'Fast rounds. Big reversals. Pure chain-reaction chaos.',
  description:
    'Chain Reaction MAX is a multiplayer strategy game for 2 to 6 players with flexible match rooms, multiple board sizes, and dramatic chain bursts.',
  siteUrl: 'https://chainreactionmax.pages.dev',
  repoUrl: 'https://github.com/Ayaan-7091/Chain-Reaction-MAX',
  issuesUrl: 'https://github.com/Ayaan-7091/Chain-Reaction-MAX/issues',
  releasesUrl: 'https://github.com/Ayaan-7091/Chain-Reaction-MAX/releases',
  searchHint: 'Ctrl+K',
} as const;

export const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/developers', label: 'Developers' },
  { href: '/support', label: 'Support' },
] as const;

export const quickFacts = [
  { label: 'Players', value: '2-6' },
  { label: 'Modes', value: 'Pass & Play + Rooms' },
  { label: 'Boards', value: '6x5 to 12x8' },
  { label: 'Style', value: 'Quick or tactical' },
] as const;

export const featureCards = [
  {
    title: 'Every move changes the map',
    description:
      'Corners pop at two atoms, edges at three, and center cells at four. That shifting critical mass keeps the board readable and tense.',
  },
  {
    title: 'Play around one screen or across a room',
    description:
      'Start a match quickly, invite players into a room, and keep sessions smooth without extra setup friction.',
  },
  {
    title: 'Built for dramatic reversals',
    description:
      'Captured cells immediately flip ownership during a blast, so one perfectly timed burst can erase a lead and change the whole table mood.',
  },
  {
    title: 'Replay the last explosion',
    description:
      'The game records every explosion step and can replay the previous chain sequence so players can study exactly how the board swung.',
  },
] as const;

export const boardPresets = [
  {
    name: 'Sprint',
    size: '6 x 5',
    summary: 'Tight, fast rounds where corners become the opening battleground.',
  },
  {
    name: 'Classic',
    size: '9 x 6',
    summary: 'Balanced pacing for mixed skill groups and the default home-screen preset.',
  },
  {
    name: 'Warzone',
    size: '12 x 8',
    summary: 'Long-form matches with room for alliances, feints, and late-game collapses.',
  },
] as const;

export const supportChecklist = [
  'Confirm which match setup you were using when the issue occurred.',
  'Note the board size and player count that reproduced the issue.',
  'Share whether the problem happened during an explosion replay, a live turn, or room discovery.',
  'Include screenshots or a short screen recording when the bug is visual.',
] as const;

export const faqGroups = [
  {
    title: 'Gameplay',
    items: [
      {
        question: 'How does a chain reaction start?',
        body: [
          'Each cell has a critical limit based on its position. Corners burst at 2 atoms, edges burst at 3, and center cells burst at 4.',
          'When a cell explodes, it sends atoms into adjacent cells and converts them to the active player, which can trigger more bursts immediately.',
        ],
      },
      {
        question: 'How many players can join a match?',
        body: [
          'Chain Reaction MAX currently supports 2 to 6 players.',
          'You can set the player count before launching any match from the home screen.',
        ],
      },
      {
        question: 'What board sizes are available?',
        body: [
          'The app ships with three presets: 6 x 5, 9 x 6, and 12 x 8.',
          'Those presets let you tune the game for fast rounds, balanced sessions, or long tactical battles.',
        ],
      },
      {
        question: 'Can I replay the last blast sequence?',
        body: [
          'Yes. After a move causes explosions, the replay control can step through the recorded chain reaction.',
          'That is helpful both for learning the game and settling table arguments about what just happened.',
        ],
      },
    ],
  },
  {
    title: 'Multiplayer',
    items: [
      {
        question: 'Does the game support internet matchmaking?',
        body: [
          'Not yet. Multiplayer today focuses on nearby room setup and shared-device sessions.',
          'That keeps setup lightweight and avoids relying on a remote backend.',
        ],
      },
      {
        question: 'How does room discovery work?',
        body: [
          'One player hosts, the app advertises the room, and nearby players can discover and join it.',
          'When enough players connect, the host sends the game-start payload with the selected grid and player count.',
        ],
      },
    ],
  },
  {
    title: 'Platform and Privacy',
    items: [
      {
        question: 'Which platforms are targeted by the app?',
        body: [
          'The Flutter project includes Android, iOS, web, macOS, Linux, and Windows targets.',
          'That makes the game a good fit for quick experiments now and broader release packaging later.',
        ],
      },
      {
        question: 'Does Chain Reaction MAX collect analytics or cloud data?',
        body: [
          'The current codebase does not ship a cloud backend or analytics SDK.',
          'Normal matches run directly between participating devices without account tracking.',
        ],
      },
    ],
  },
] as const;

export const developers = [
  {
    id: 'ayaan',
    name: 'Ayaan Shaikh',
    initials: 'AS',
    role: 'Lead Developer',
    summary:
      'Owns the current repo direction and shipped the main Flutter gameplay, lobby setup, and presentation layer.',
    focus: ['Core game loop', 'Room flow', 'Release direction'],
    links: {
      github: 'https://github.com/Ayaan-7091',
    },
  },
  {
    id: 'shravan',
    name: 'Shravan Goswami',
    initials: 'SG',
    role: 'Contributor',
    summary:
      'Contributed early implementation work and helped shape the project foundation reflected in the commit history.',
    focus: ['Project bootstrap', 'Gameplay iteration', 'Product polish'],
    links: {
      github: 'https://github.com/shravanngoswamii',
      website: 'https://shravangoswami.com/',
    },
  },
] as const;

export const authors = {
  ayaan: developers[0],
  shravan: developers[1],
} as const;

export const credits = [
  {
    title: 'App Stack',
    items: [
      'Flutter for cross-platform delivery',
      'Riverpod for state management',
      'Bonsoir for room discovery',
      'shelf_web_socket and web_socket_channel for room communication',
    ],
  },
  {
    title: 'Website Stack',
    items: [
      'Astro for the static site architecture',
      'Pagefind for client-side static search',
      'Lucide icons for the interface system',
      'Markdown content collections for the blog',
    ],
  },
  {
    title: 'Design Notes',
    items: [
      'Brand colors and the orbital motif are adapted from the in-app logo and dark neon game screens.',
      'Support and documentation flow are intentionally lightweight to match the product philosophy.',
    ],
  },
] as const;
