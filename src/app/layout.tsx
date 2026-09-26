import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Satyam Gawali",
    default: "Satyam Gawali — Flutter Developer & Mobile Engineer",
  },
  description: "Portfolio of Satyam Gawali, a Mobile App Developer specializing in Flutter, Dart, Riverpod, Firebase, on-device AI, and open-source developer tooling.",
  keywords: [
    "Satyam Gawali",
    "Flutter Developer",
    "Mobile App Developer",
    "Dart",
    "Riverpod",
    "Firebase Realtime Database",
    "Android Developer",
    "Promptixa",
    "CLVCA",
    "Open Source Flutter Packages"
  ],
  authors: [{ name: "Satyam Gawali" }],
  creator: "Satyam Gawali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://satyamgawali.vercel.app",
    title: "Satyam Gawali — Flutter Developer & Mobile Engineer",
    description: "Portfolio of Satyam Gawali, a Mobile App Developer specializing in Flutter, Dart, Riverpod, Firebase, on-device AI, and open-source developer tooling.",
    siteName: "Satyam Gawali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam Gawali — Flutter Developer & Mobile Engineer",
    description: "Portfolio of Satyam Gawali, a Mobile App Developer specializing in Flutter, Dart, Riverpod, Firebase, on-device AI, and open-source developer tooling.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var isDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (!isDark && stored === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.style.colorScheme = 'dark';
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full bg-brand-bg text-brand-text-primary flex flex-col font-sans selection:bg-brand-violet/25 selection:text-brand-violet-light antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
