import type { Language } from "../types";

interface ScrollToTopProps {
  show: boolean;
  language: Language;
}

export default function ScrollToTop({ show, language }: ScrollToTopProps) {
  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={
        language === "id"
          ? "Kembali ke atas"
          : language === "en"
            ? "Back to top"
            : "返回顶部"
      }
      title={
        language === "id"
          ? "Kembali ke atas"
          : language === "en"
            ? "Back to top"
            : "返回顶部"
      }
      className="fixed bottom-6 right-6 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#181a5c] text-white shadow-lg transition hover:scale-105 hover:bg-[#181a5c]/90 focus:outline-none focus:ring-2 focus:ring-[#181a5c]/50 focus:ring-offset-2"
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        aria-hidden="true"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 14l6-6 6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
