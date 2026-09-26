"use client";

import React, { createContext, useContext, useCallback, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getSnapshot(): Theme {
  if (typeof window === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleMedia = (e: MediaQueryListEvent) => {
    if (!localStorage.getItem("theme")) {
      const nextTheme = e.matches ? "dark" : "light";
      applyThemeDOM(nextTheme);
      listeners.forEach((l) => l());
    }
  };
  mediaQuery.addEventListener("change", handleMedia);

  return () => {
    listeners.delete(callback);
    mediaQuery.removeEventListener("change", handleMedia);
  };
}

function applyThemeDOM(newTheme: Theme) {
  if (typeof document === "undefined") return;
  if (newTheme === "light") {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  } else {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    document.documentElement.style.colorScheme = "dark";
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((newTheme: Theme) => {
    applyThemeDOM(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch {}
    listeners.forEach((l) => l());
  }, []);

  const toggleTheme = useCallback(() => {
    const current = getSnapshot();
    const nextTheme: Theme = current === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
