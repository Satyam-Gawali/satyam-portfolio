export interface ExperienceEntry {
  company: string;
  position: string;
  duration: string;
  technologies: string[];
  achievements: string[];
  logo?: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Levesque Private Limited",
    position: "Flutter Mobile Application Developer Intern",
    duration: "May 2026 – Present",
    technologies: ["Flutter", "Dart", "REST APIs", "UI/UX"],
    achievements: [
      "Working as a Flutter Mobile Application Developer Intern on the YoDoctor healthcare platform, contributing to the end-to-end design and development of its cross-platform mobile application",
      "Designed and developed the mobile application from scratch using Flutter and Dart",
      "Created the complete mobile UI/UX based on product requirements and web platform references",
      "Built responsive, reusable, and user-friendly UI components",
      "Integrated REST APIs and backend services",
      "Implemented core application features and end-to-end user workflows",
      "Collaborated with backend and product teams for feature development and integration",
      "Tested, debugged, and optimized the application for performance and stability"
    ]
  },
  {
    company: "Hrzworkz Private Limited (HERTZWORKZ)",
    position: "Flutter Developer Intern",
    duration: "Feb 2026 – Mar 2026",
    technologies: ["Flutter", "Dart", "REST APIs", "Postman API"],
    achievements: [
      "Flutter Developer Intern at HRZWORKZ, contributing to the HRSM portal development",
      "Designed and developed new features using Flutter",
      "Integrated REST APIs for seamless backend communication",
      "Identified and resolved bugs to improve app performance and stability",
      "Enhanced UI/UX by building responsive and reusable components",
      "Collaborated in a remote team environment following real-world development practices",
      "Gained hands-on experience in building scalable Flutter applications and solving real-world problems"
    ]
  }
];