import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "accent" | "success" | "error" | "muted" | "luxury" | "outline";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

const variants: Record<BadgeVariant, string> = {
  primary: "bg-primary-100 text-primary-700",
  accent: "bg-accent-100 text-accent-700",
  success: "bg-success/10 text-success",
  error: "bg-error/10 text-error",
  muted: "bg-dark-100 text-dark-500",
  luxury: "bg-dark text-white",
  outline: "border border-current text-dark-600",
};

const sizes: Record<BadgeSize, string> = {
  sm: "text-xs px-2 py-0.5",
  md: "text-xs px-2.5 py-1",
  lg: "text-sm px-3 py-1",
};

export default function Badge({
  variant = "primary",
  size = "md",
  children,
  className,
  dot = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full",
            variant === "primary" && "bg-primary-500",
            variant === "success" && "bg-success",
            variant === "error" && "bg-error",
            variant === "accent" && "bg-accent-600",
            variant === "muted" && "bg-dark-400",
            variant === "luxury" && "bg-white",
            variant === "outline" && "bg-dark-600"
          )}
        />
      )}
      {children}
    </span>
  );
}
