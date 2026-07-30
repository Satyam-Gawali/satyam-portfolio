import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Satyam Gawali",
    default: "Satyam Gawali | Mobile App & Flutter Developer",
  },
  description: "Portfolio of Satyam Gawali, a Mobile App Developer specializing in Flutter, Dart, Firebase, REST APIs, real-time applications, and open-source Flutter packages.",
  keywords: [
    "Satyam Gawali",
    "Flutter Developer",
    "Mobile App Developer",
    "Dart",
    "Riverpod",
    "Firebase Realtime Database",
    "Android Developer",
    "Open Source Flutter Packages"
  ],
  authors: [{ name: "Satyam Gawali" }],
  creator: "Satyam Gawali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://satyamgawali.dev", // Configured placeholder
    title: "Satyam Gawali | Mobile App & Flutter Developer",
    description: "Portfolio of Satyam Gawali, a Mobile App Developer specializing in Flutter, Dart, Firebase, REST APIs, real-time applications, and open-source Flutter packages.",
    siteName: "Satyam Gawali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam Gawali | Mobile App & Flutter Developer",
    description: "Portfolio of Satyam Gawali, a Mobile App Developer specializing in Flutter, Dart, Firebase, REST APIs, real-time applications, and open-source Flutter packages.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full bg-brand-bg text-brand-text-primary flex flex-col font-sans selection:bg-brand-cyan/20 selection:text-brand-cyan">
        {children}
      </body>
    </html>
  );
}
