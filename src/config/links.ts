export interface ExternalLinks {
  github: string | null;
  linkedin: string | null;
  email: string | null;
  resume: string | null;
  startupFortune: string | null;
  
  // ChromaKit Links
  chromaKitRepo: string | null;
  chromaKitPub: string | null;
  
  // Chroma Theme Links
  chromaThemeRepo: string | null;
  chromaThemePub: string | null;
  
  // CLVCA Links
  clvcaWeb: string | null;
  clvcaPlayStore: string | null;

  // Other Projects
  expenseTrackerRepo: string | null;
  whoKnowsSagarRepo: string | null;
  bmiCalculatorRepo: string | null;
}

export const links: ExternalLinks = {
  // Main Profile Links
  github: "https://github.com/Satyam-Gawali",
  linkedin: "https://www.linkedin.com/in/satyam-gawali-b4623b268",
  email: "satyamgawali.sg@gmail.com",
  resume: "/images/resume/satyam-gawali-resume.pdf",
  startupFortune: "https://startupfortune.com/satyam-built-clvca-to-make-voice-translation-work-without-the-cloud/",
  
  // ChromaKit
  chromaKitRepo: "https://github.com/Satyam-Gawali/chroma_kit",
  chromaKitPub: "https://pub.dev/packages/chroma_kit",
  
  // Chroma Theme
  chromaThemeRepo: "https://github.com/Satyam-Gawali/chroma_theme",
  chromaThemePub: "https://pub.dev/packages/chroma_theme",
  
  // CLVCA
  clvcaWeb: "https://satyam-gawali.github.io/clvca",
  clvcaPlayStore: "https://play.google.com/store/apps/details?id=com.satyamstudios.clvca",

  // Other Projects
  expenseTrackerRepo: "https://github.com/Satyam-Gawali/expense-tracker-flutter", // Tuzi exact expense tracker repo link asel tr update kru shaktoes
  whoKnowsSagarRepo: "https://github.com/Satyam-Gawali/who-knows-sagar",
  bmiCalculatorRepo: "https://github.com/Satyam-Gawali/bmi-calculator",
};