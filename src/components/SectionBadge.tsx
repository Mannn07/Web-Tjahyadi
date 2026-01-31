interface SectionBadgeProps {
  text: string;
  className?: string;
}

export default function SectionBadge({
  text,
  className = "",
}: SectionBadgeProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-3 w-3 rounded-full bg-[#7cb342] animate-pulse" />
      <span className="text-sm font-medium tracking-wide text-slate-500">
        {text}
      </span>
    </div>
  );
}
