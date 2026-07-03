import { Calendar, Building2, Star, Users, BedDouble } from "lucide-react";
import Counter from "./Counter";

const STATS = [
  { value: 12, suffix: "+", label: "Years of Trust", icon: Calendar, color: "text-primary-400" },
  { value: 500, suffix: "+", label: "Rooms", icon: BedDouble, color: "text-primary-400" },
  { value: 30, suffix: "+", label: "Properties", icon: Building2, color: "text-primary-400" },
  { value: 4.4, suffix: "★", label: "Guest Rating", icon: Star, color: "text-yellow-400", decimals: 1 },
  { value: 50000, suffix: "+", label: "Happy Guests", icon: Users, color: "text-primary-400" },
];

export default function TrustBar() {
  return (
    <section className="bg-stone-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
          {STATS.map(({ value, suffix, label, icon: Icon, color, decimals }) => (
            <div key={label} className="flex flex-col items-center text-center lg:px-6">
              <Icon size={18} className={`${color} mb-2`} />
              <div className="font-bold text-white text-3xl sm:text-4xl leading-none mb-1">
                <Counter value={value} suffix={suffix} decimals={decimals} />
              </div>
              <div className="text-white/40 text-xs font-medium uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
