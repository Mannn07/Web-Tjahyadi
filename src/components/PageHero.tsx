import type { Language } from "../types";

interface PageHeroProps {
  title: string;
  backgroundImage?: string;
  language: Language;
}

export default function PageHero({
  title,
  backgroundImage = "/hero-2.jpg",
}: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[8000ms] hover:scale-110"
        loading="eager"
        decoding="async"
      />

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-[#1b1f6a]/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="container-page">
          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl drop-shadow-lg">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
