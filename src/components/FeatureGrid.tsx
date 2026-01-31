interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4 | 6;
  className?: string;
}

export default function FeatureGrid({
  features,
  columns = 3,
  className = "",
}: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
    6: "md:grid-cols-3 lg:grid-cols-6",
  };

  return (
    <div className={`grid gap-6 sm:gap-8 ${gridCols[columns]} ${className}`}>
      {features.map((feature, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1b1f6a]/95 to-[#2d3178] p-6 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7cb342]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon */}
          <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center text-[#7cb342]">
            {feature.icon}
          </div>

          {/* Title */}
          <h3 className="relative z-10 text-lg font-bold text-white mb-2">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="relative z-10 text-sm text-white/70 leading-relaxed">
            {feature.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
