import { links } from "@/config/links";

export interface FlutterPackage {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  pubUrl: string | null;
  githubUrl: string | null;
  imageUrl?: string;
}

export const packages: FlutterPackage[] = [
  {
    title: "Chroma Kit",
    description: "Professional Flutter toolkit for dynamic color manipulation, WCAG contrast verification, and blending.",
    technologies: ["Flutter", "Dart"],
    features: [
      "Robust HEX parsing",
      "Dynamic color manipulation",
      "WCAG contrast analysis",
      "Smart color blending"
    ],
    pubUrl: links.chromaKitPub,
    githubUrl: links.chromaKitRepo
  },
  {
    title: "Chroma Theme",
    description: "Material 3 dynamic theming engine for Flutter, enabling adaptive color scheme generation from seeds.",
    technologies: ["Flutter", "Dart", "Material 3"],
    features: [
      "Seed-based color schemes",
      "Tonal palette mapping",
      "Full Material 3 integration",
      "Accessibility modes"
    ],
    pubUrl: links.chromaThemePub,
    githubUrl: links.chromaThemeRepo,
    imageUrl: "/images/packages/chroma-theme/logo.png"
  }
];