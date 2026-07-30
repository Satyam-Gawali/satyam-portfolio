import { links } from "@/config/links";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  imageUrl: string;
  coverImages?: string[]; // Multiple cover images sathi stacked effect saathi
  screenshots?: { src: string; alt: string }[];
  githubUrl: string | null;
  liveUrl: string | null;
  hasCaseStudy: boolean;
  problem?: string | null;
  solution?: string | null;
  challenges?: string | null;
  outcome?: string | null;
  badges?: string[];
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "clvca",
    title: "CLVCA",
    subtitle: "Cross‑Language Voice Chat",
    description: "A privacy‑first Flutter app that enables real‑time voice communication across languages using on‑device translation, speech‑to‑text, and text‑to‑speech pipelines.",
    technologies: ["Flutter", "Dart", "Google ML Kit", "Bluetooth", "WiFi", "P2P"],
    features: [
      "Offline‑first architecture",
      "On‑device speech processing",
      "Cross‑language voice translation",
      "Peer‑to‑peer connectivity via Bluetooth & Wi‑Fi",
      "Single‑device and device‑to‑device conversation modes",
      "Privacy‑first design with no cloud dependence",
      "Integrated ML Kit translation, Speech‑to‑Text, Text‑to‑Speech"
    ],
    imageUrl: "/images/projects/clvca/cover.png",
    coverImages: [
      "/images/projects/clvca/cover.png",
      "/images/projects/clvca/conversation-mode.png",
      "/images/projects/clvca/p2p-chat.png"
    ],
    screenshots: [
      { src: "/images/projects/clvca/conversation-mode.png", alt: "Conversation mode UI" },
      { src: "/images/projects/clvca/p2p-chat.png", alt: "Peer‑to‑peer chat view" },
      { src: "/images/projects/clvca/p2p-connect.png", alt: "Nearby peer discovery" },
      { src: "/images/projects/clvca/offline-languages.png", alt: "Offline language management" },
      { src: "/images/projects/clvca/translation-history.png", alt: "Translation history" },
      { src: "/images/projects/clvca/settings.png", alt: "Settings panel" },
      { src: "/images/projects/clvca/splash.png", alt: "Splash screen" }
    ],
    githubUrl: null,
    liveUrl: links.clvcaPlayStore,
    hasCaseStudy: true,
    problem: "Language barriers prevent seamless voice communication when participants do not share a common language.",
    solution: "Implemented on‑device translation combined with speech‑to‑text and text‑to‑speech pipelines, delivered through a peer‑to‑peer Flutter architecture.",
    challenges: "Integrating ML Kit services without network latency and synchronising audio streams over Bluetooth and Wi‑Fi while preserving privacy.",
    outcome: "A functional, privacy‑preserving voice chat app published on Google Play, demonstrating offline cross‑language conversation.",
    badges: ["Flagship Project", "Offline Support"],
    metrics: [{ label: "Platform", value: "Android" }]
  },
  {
    slug: "who-knows-sagar",
    title: "Who Knows Sagar?",
    subtitle: "Live Interactive Quiz",
    description: "A Flutter Web quiz for live events, powered by Firebase Realtime Database and Hosting, enabling participants to join via QR code and compete in real‑time.",
    technologies: ["Flutter Web", "Dart", "Firebase Realtime Database", "Firebase Hosting"],
    features: [
      "QR‑based instant access through mobile browsers",
      "Real‑time quiz state synchronization",
      "Bilingual Marathi/English interface",
      "Admin‑controlled quiz progression",
      "Live leaderboard with ranking",
      "Responsive event‑themed UI"
    ],
    imageUrl: "/images/projects/who-knows-sagar/cover.png",
    coverImages: [
      "/images/projects/who-knows-sagar/cover.png",
      "/images/projects/who-knows-sagar/welcome-screen.jpg",
      "/images/projects/who-knows-sagar/waiting-lobby.jpg"
    ],
    screenshots: [
      { src: "/images/projects/who-knows-sagar/welcome-screen.jpg", alt: "Welcome screen" },
      { src: "/images/projects/who-knows-sagar/waiting-lobby.jpg", alt: "Waiting lobby" },
      { src: "/images/projects/who-knows-sagar/quiz-question-screen.jpg", alt: "Quiz question screen" },
      { src: "/images/projects/who-knows-sagar/result-waiting-screen.jpg", alt: "Result waiting screen" },
      { src: "/images/projects/who-knows-sagar/final-leaderboard.jpg", alt: "Final leaderboard" }
    ],
    githubUrl: links.whoKnowsSagarRepo,
    liveUrl: null,
    hasCaseStudy: true,
    problem: "Creating an engaging, real‑time digital quiz for a family Haldi celebration.",
    solution: "Developed a Flutter Web application backed by Firebase Realtime Database, allowing guests to join via QR code, answer questions, and view live rankings.",
    challenges: "Ensuring state consistency across browsers, supporting admin controls, and delivering a responsive UI on mobile devices.",
    outcome: "Successfully hosted a live event with 75–80 participants, providing real‑time results and a shared leaderboard.",
    badges: ["Live Event", "Real‑time Data"],
    metrics: [{ label: "Participants", value: "75–80" }]
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    subtitle: "Personal Finance Mobile App",
    description: "A Flutter finance app demonstrating clean architecture, reactive state management with Provider, and local persistence via Hive.",
    technologies: ["Flutter", "Dart", "Provider", "Hive", "Material 3"],
    features: [
      "Expense logging and categorisation",
      "Local data storage with Hive",
      "Reactive UI updates via Provider",
      "Material 3 design system",
      "Clean, responsive layout"
    ],
    imageUrl: "/images/projects/expense-tracker/cover.png",
    coverImages: [
      "/images/projects/expense-tracker/cover.png",
      "/images/projects/expense-tracker/home_transactions.png",
      "/images/projects/expense-tracker/add_transaction.png"
    ],
    screenshots: [
      { src: "/images/projects/expense-tracker/home_transactions.png", alt: "Home transactions view" },
      { src: "/images/projects/expense-tracker/add_transaction.png", alt: "Add transaction form" },
      { src: "/images/projects/expense-tracker/home_empty.png", alt: "Empty home screen state" }
    ],
    githubUrl: links.expenseTrackerRepo,
    liveUrl: null,
    hasCaseStudy: true,
    badges: ["Local Data Handling"]
  }
];

export const experiments = [
  {
    title: "BMI Calculator",
    description: "A simple Flutter BMI calculator demonstrating input validation, unit conversion, and responsive UI.",
    technologies: ["Flutter", "Dart"],
    githubUrl: links.bmiCalculatorRepo,
    imageUrl: "/images/projects/bmi-calculator/screenshot.png"
  }
];