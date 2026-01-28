import type { Language } from "../types";

interface WhatsAppButtonProps {
  language: Language;
}

export default function WhatsAppButton({ language }: WhatsAppButtonProps) {
  const whatsAppNumber = "6287808630658";
  const whatsAppMessage = {
    id: "Halo Tjahyadi Consulting, saya ingin konsultasi.",
    en: "Hello Tjahyadi Consulting, I'd like to consult.",
    zh: "你好，我想咨询税务/会计服务。",
  }[language];
  const whatsAppHref = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
    whatsAppMessage,
  )}`;

  return (
    <a
      href={whatsAppHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      title="WhatsApp"
      className="fixed bottom-6 left-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366]/60 focus:ring-offset-2"
    >
      <svg
        viewBox="0 0 32 32"
        width="26"
        height="26"
        aria-hidden="true"
        className="fill-white"
      >
        <path d="M19.11 17.44c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.18-1.34-.8-.72-1.34-1.61-1.5-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.97 2.64 1.11 2.82c.14.18 1.9 2.9 4.6 4.07.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.59-.65 1.81-1.29.22-.64.22-1.18.16-1.29-.07-.11-.25-.18-.52-.32z" />
        <path d="M16 3C8.82 3 3 8.82 3 16c0 2.28.6 4.52 1.75 6.5L3 29l6.69-1.71A12.9 12.9 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.45c-2.01 0-3.97-.55-5.67-1.58l-.41-.24-3.97 1.02 1.06-3.86-.27-.39A10.93 10.93 0 0 1 5.07 16C5.07 9.96 9.96 5.07 16 5.07S26.93 9.96 26.93 16 22.04 26.45 16 26.45z" />
      </svg>
    </a>
  );
}
