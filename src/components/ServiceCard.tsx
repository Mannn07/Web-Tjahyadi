interface ServiceCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "compact";
}

export default function ServiceCard({
  title,
  description,
  icon,
  onClick,
  className = "",
  variant = "default",
}: ServiceCardProps) {
  const baseStyles =
    "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-slate-200/50";

  if (variant === "compact") {
    return (
      <div className={`${baseStyles} p-6 ${className}`} onClick={onClick}>
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b1f6a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {icon && (
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1b1f6a]/10 text-[#1b1f6a] group-hover:bg-[#1b1f6a] group-hover:text-white transition-all duration-300">
              {icon}
            </div>
          )}
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#1b1f6a] transition-colors">
            {title}
          </h3>
          {description && (
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${baseStyles} min-h-[280px] flex flex-col ${className}`}
      onClick={onClick}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="card-dots"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#1b1f6a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#card-dots)" />
        </svg>
      </div>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b1f6a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon area - top half */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-8">
        {icon && (
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#1b1f6a]/10 text-[#1b1f6a] group-hover:bg-[#1b1f6a] group-hover:text-white transition-all duration-300 group-hover:scale-110">
            {icon}
          </div>
        )}
      </div>

      {/* Content area - bottom half */}
      <div className="relative z-10 p-6 pt-0 text-center">
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#1b1f6a] transition-colors">
          {title}
        </h3>

        {/* Click indicator */}
        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7cb342] group-hover:text-[#1b1f6a] transition-colors">
          <span className="uppercase tracking-wider">Click Here</span>
          <svg
            className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
