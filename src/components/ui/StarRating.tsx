import { cn } from "@/lib/utils";
import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  reviewCount?: number;
  className?: string;
}

const sizes = {
  sm: { icon: 12, text: "text-xs" },
  md: { icon: 14, text: "text-sm" },
  lg: { icon: 18, text: "text-base" },
};

export default function StarRating({
  rating,
  maxStars = 5,
  size = "md",
  showValue = false,
  reviewCount,
  className,
}: StarRatingProps) {
  const { icon, text } = sizes[size];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            size={icon}
            className="fill-accent-500 text-accent-500"
          />
        ))}
        {hasHalf && (
          <StarHalf
            size={icon}
            className="fill-accent-500 text-accent-500"
          />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            size={icon}
            className="text-dark-200 fill-none"
          />
        ))}
      </div>
      {showValue && (
        <span className={cn("font-semibold text-dark", text)}>{rating.toFixed(1)}</span>
      )}
      {reviewCount !== undefined && (
        <span className={cn("text-dark-500", text)}>({reviewCount.toLocaleString()})</span>
      )}
    </div>
  );
}
