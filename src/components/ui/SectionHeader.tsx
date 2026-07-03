import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  dark?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
  dark = false,
}: SectionHeaderProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <div className={cn("flex flex-col gap-4", alignClass, className)}>
      {eyebrow && (
        <div className="flex items-center gap-3">
          {align !== "right" && (
            <div className="h-px w-8 bg-primary-500 rounded-full" />
          )}
          <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
            {eyebrow}
          </span>
          {align !== "left" && (
            <div className="h-px w-8 bg-primary-500 rounded-full" />
          )}
        </div>
      )}

      <h2
        className={cn(
          "font-display font-bold leading-tight",
          "text-3xl sm:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-dark",
          titleClassName
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "max-w-2xl text-base sm:text-lg leading-relaxed",
            dark ? "text-white/70" : "text-dark-500",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
