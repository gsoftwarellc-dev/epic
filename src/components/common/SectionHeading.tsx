import { clsx } from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "epic" | "terminator";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "epic",
}: SectionHeadingProps) {
  return (
    <div className={clsx("mx-auto max-w-3xl", align === "center" ? "text-center" : "mx-0 text-left")}>
      {eyebrow ? (
        <p
          className={clsx(
            "mb-3 text-sm font-black uppercase",
            tone === "terminator" ? "text-red-300" : "text-epicPink",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={clsx(
          "text-3xl font-black leading-tight sm:text-4xl lg:text-5xl",
          tone === "terminator" ? "text-white" : "text-slate-950",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={clsx("mt-4 text-lg", tone === "terminator" ? "text-stone-200" : "text-slate-600")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
