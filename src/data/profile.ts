export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TimelineItem {
  year?: string;
  title: string;
  description: string;
}

export interface EngineeringValue {
  title: string;
  description: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  headline: string;
  bio: string;
  aboutText: string;
  skills: SkillCategory[];
  timeline: TimelineItem[];
  values: EngineeringValue[];
}

export const profile: Profile = {
  name: "Satyam Gawali",
  firstName: "Satyam",
  lastName: "Gawali",
  role: "Mobile App Developer / Flutter Developer",
  headline: "Building mobile experiences that solve real problems.",
  bio: "Satyam builds practical Flutter applications involving APIs, real-time systems, offline capabilities, Firebase, and reusable developer tooling.",
  aboutText: "I am a Mobile App Developer focused on building practical applications with Flutter. I enjoy working on projects involving APIs, real-time systems, offline capabilities, application architecture, and developer tooling. With a background in Computer Engineering, I prioritize clean code, state management, and responsive UI development.",
  skills: [
    {
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "Android"]
    },
    {
      title: "Architecture & State",
      skills: ["Riverpod", "State Management", "Clean Architecture concepts"]
    },
    {
      title: "Backend & Integration",
      skills: ["REST APIs", "Firebase", "Firebase Authentication", "Firebase Realtime Database"]
    },
    {
      title: "Storage",
      skills: ["SQLite", "Hive"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman"]
    },
    {
      title: "Other Technologies",
      skills: ["Google ML Kit"]
    }
  ],
  timeline: [
    {
      year: "Education",
      title: "Computer Engineering",
      description: "Acquired core software engineering principles, algorithms, database systems, and computer network foundations."
    },
    {
      year: "Focus Area",
      title: "Flutter & Mobile Development",
      description: "Focused on Flutter development, Riverpod and state management, responsive UI development, and application architecture."
    },
    {
      year: "Practical Experience",
      title: "Real-world Projects",
      description: "Built practical projects involving offline storage, real-time synchronization, API integration, and client-server communication."
    },
    {
      year: "Community",
      title: "Open Source Flutter Packages",
      description: "Authored and published reusable Flutter packages for color system customization and material theming."
    }
  ],
  values: [
    {
      title: "Build for Real Users",
      description: "Focus on creating practical, functional mobile applications that address concrete user needs and work reliably under real conditions."
    },
    {
      title: "Keep Architecture Maintainable",
      description: "Design apps using clean structural separation, modular logic, and readable state management (like Riverpod) to ensure long-term stability."
    },
    {
      title: "Care About User Experience",
      description: "Deliver smooth interactions, fluid animations, proper accessibility, responsive layouts, and clean visual typography."
    },
    {
      title: "Create Reusable Solutions",
      description: "Abstract common problems into modular open-source packages, contributing back to the Flutter ecosystem to help other developers build faster."
    }
  ]
};
