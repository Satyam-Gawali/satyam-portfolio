import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectVisualProps {
  project: Project;
  variant?: "hero" | "featured" | "detail";
  className?: string;
}

function Screen({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[1.4rem] ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1080}
        height={1920}
        sizes="(max-width: 767px) 70vw, (max-width: 1023px) 38vw, 22vw"
        className="block h-auto w-full object-contain drop-shadow-2xl"
        unoptimized
      />
    </div>
  );
}

export function ProjectVisual({ project, variant = "featured", className = "" }: ProjectVisualProps) {
  const screens = project.screenshots ?? [];

  // ─── CLVCA (FLAGSHIP) ──────────────────────────────────────────────────────
if (project.slug === "clvca") {
  const primaryPhone =
    screens.find((s) => s.src.includes("cover")) ?? {
      src: "/images/projects/clvca/cover.png",
      alt: "CLVCA UI",
    };

  const secondaryPhone =
    screens.find((s) => s.src.includes("p2p-chat")) ?? primaryPhone;

  if (variant === "hero") {
    return (
      <div
        className={`relative w-full flex items-center justify-center mx-auto ${className}`}
      >
        <div className="w-full max-w-[15rem]">
          <Screen
            src={primaryPhone.src}
            alt={primaryPhone.alt}
            className="w-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full flex items-center justify-center mx-auto ${className}`}
    >
      <div
        className="relative w-full max-w-[20rem]"
        style={{ paddingBottom: "3.5rem" }}
      >
        <Screen
          src={primaryPhone.src}
          alt={primaryPhone.alt}
          className="relative z-10 w-[70%]"
        />

        <div className="absolute top-[8%] right-0 w-[56%] rotate-[5deg] z-0">
          <Screen
            src={secondaryPhone.src}
            alt={secondaryPhone.alt}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

  // ─── WHO KNOWS SAGAR ───────────────────────────────────────────────────────
  if (project.slug === "who-knows-sagar") {
    const webCover = {
      src: "/images/projects/who-knows-sagar/cover.png",
      alt: "Who Knows Sagar quiz screen",
    };

    return (
      <div
        className={`relative w-full flex items-center justify-center mx-auto ${className}`}
      >
        <div className="w-full max-w-[14rem] overflow-hidden rounded-xl bg-transparent">
          {/* Fake browser chrome */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-brand-surface/80 backdrop-blur border-b border-brand-border/40 rounded-t-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>

          <Image
            src={webCover.src}
            alt={webCover.alt}
            width={1920}
            height={1080}
            sizes="(max-width: 767px) 70vw, (max-width: 1023px) 30vw, 18vw"
            className="block w-full h-auto object-contain drop-shadow-2xl mx-auto"
            unoptimized
          />
        </div>
      </div>
    );
  }

  // ─── EXPENSE TRACKER ───────────────────────────────────────────────────────
  const primaryPhone = {
    src: "/images/projects/expense-tracker/cover.png",
    alt: "Expense Tracker dashboard",
  };

  const secondaryPhone =
    screens.find((s) => s.src.includes("add_transaction")) ?? null;

  if (!secondaryPhone) {
    return (
      <div
        className={`relative w-full flex items-center justify-center mx-auto ${className}`}
      >
        <div className="w-full max-w-[14rem]">
          <Screen
            src={primaryPhone.src}
            alt={primaryPhone.alt}
            className="w-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full flex items-center justify-center mx-auto ${className}`}
    >
      <div
        className="relative w-full max-w-[18rem]"
        style={{ paddingBottom: "3.5rem" }}
      >
        <Screen
          src={primaryPhone.src}
          alt={primaryPhone.alt}
          className="relative z-10 w-[70%]"
        />

        <div className="absolute top-[12%] right-0 w-[54%] rotate-[5deg] z-0">
          <Screen
            src={secondaryPhone.src}
            alt={secondaryPhone.alt}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}