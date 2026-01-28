import type { Language } from "../types";

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
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
    <footer className="relative overflow-hidden py-14 text-white">
      <img
        src="/hero-2.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07102a]/95 via-[#0f123e]/90 to-primary/90" />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative container-page">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/logo1.png"
                alt="TJAHYADI CONSULTING"
                className="h-12 w-auto"
                loading="lazy"
                decoding="async"
              />
              <div className="text-sm font-extrabold tracking-[0.25em] text-white/85">
                TJAHYADI
                <br />
                CONSULTING
              </div>
            </div>

            <div className="mt-5 text-sm leading-relaxed text-white/75">
              {language === "id"
                ? "Konsultan pajak & bisnis berbasis di Serpong. Layanan pajak, akuntansi, payroll, dan legal untuk perusahaan lokal & PMA."
                : language === "en"
                  ? "Tax & business consulting based in Serpong. Tax, accounting, payroll, and legal services for local & foreign-owned companies (PMA)."
                  : "我们位于 Serpong，为本地及外资企业（PMA）提供税务、会计、薪资与法律服务。"}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-2xl font-extrabold tracking-tight">
              {language === "id"
                ? "Kontak"
                : language === "en"
                  ? "Contact"
                  : "联系方式"}
            </div>
            <div className="mt-5 grid gap-3 text-sm text-white/80">
              <div className="flex gap-3">
                <div className="mt-0.5 text-white/85" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="text-white/85">
                  Ruko Aniva Grande Blok GG No. 12
                  <br />
                  Jl. Diponegoro, Gading Serpong
                  <br />
                  Tangerang 15334, Indonesia
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-0.5 text-white/85" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 7v5l3 2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  {language === "id"
                    ? "08.00 – 17.00 WIB"
                    : language === "en"
                      ? "08.00 – 17.00 WIB"
                      : "08.00 – 17.00（WIB）"}
                </div>
              </div>

              <a
                className="flex items-center gap-3 hover:text-white"
                href="tel:02129000962"
              >
                <span className="text-white/85" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 3.5h2L10 7l-1.5 1.5c1 2 2.5 3.5 4.5 4.5L14.5 11 18 12.5v2c0 .8-.6 1.5-1.4 1.6-6.2.7-11.4-4.5-10.7-10.7.1-.8.8-1.4 1.6-1.4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>021 29 000 962</span>
              </a>
              <a
                className="flex items-center gap-3 hover:text-white"
                href="tel:0818151411"
              >
                <span className="text-white/85" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 3.5h7A2.5 2.5 0 0 1 18 6v12a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 18V6A2.5 2.5 0 0 1 8.5 3.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 18h4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span>0818 15 1411</span>
              </a>
              <a
                className="flex items-center gap-3 hover:text-white"
                href="tel:087808630658"
              >
                <span className="text-white/85" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 3.5h7A2.5 2.5 0 0 1 18 6v12a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 18V6A2.5 2.5 0 0 1 8.5 3.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 18h4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span>0878 0863 0658</span>
              </a>
              <a
                className="flex items-center gap-3 hover:text-white"
                href="mailto:info@tjahyadiconsultant.com"
              >
                <span className="text-white/85" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 7.5h15v10h-15v-10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m5.5 8.5 6.5 5 6.5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>info@tjahyadiconsultant.com</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-2xl font-extrabold tracking-tight">
              {language === "id"
                ? "Tautan"
                : language === "en"
                  ? "Links"
                  : "链接"}
            </div>
            <div className="mt-5 grid gap-3 text-sm text-white/80">
              <a
                className="flex items-center gap-2 hover:text-white"
                href="/#tax"
              >
                <span className="text-white/60" aria-hidden="true">
                  ▸
                </span>
                {language === "id"
                  ? "Pajak"
                  : language === "en"
                    ? "Tax"
                    : "税务"}
              </a>
              <a
                className="flex items-center gap-2 hover:text-white"
                href="/#payroll"
              >
                <span className="text-white/60" aria-hidden="true">
                  ▸
                </span>
                {language === "id"
                  ? "Payroll"
                  : language === "en"
                    ? "Payroll"
                    : "薪资"}
              </a>
              <a
                className="flex items-center gap-2 hover:text-white"
                href="/#accounting"
              >
                <span className="text-white/60" aria-hidden="true">
                  ▸
                </span>
                {language === "id"
                  ? "Akuntansi"
                  : language === "en"
                    ? "Accounting"
                    : "会计"}
              </a>
              <a
                className="flex items-center gap-2 hover:text-white"
                href="/#legal"
              >
                <span className="text-white/60" aria-hidden="true">
                  ▸
                </span>
                {language === "id"
                  ? "Legal"
                  : language === "en"
                    ? "Legal"
                    : "法律"}
              </a>
              <a
                className="flex items-center gap-2 hover:text-white"
                href="/#portfolio"
              >
                <span className="text-white/60" aria-hidden="true">
                  ▸
                </span>
                {language === "id"
                  ? "Portofolio"
                  : language === "en"
                    ? "Portfolio"
                    : "客户案例"}
              </a>
              <a
                className="flex items-center gap-2 hover:text-white"
                href="/#contact"
              >
                <span className="text-white/60" aria-hidden="true">
                  ▸
                </span>
                {language === "id"
                  ? "Kontak"
                  : language === "en"
                    ? "Contact"
                    : "联系"}
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <div className="text-2xl font-extrabold tracking-tight">
              {language === "id"
                ? "Ikuti Kami"
                : language === "en"
                  ? "Follow Us"
                  : "关注我们"}
            </div>
            <div className="mt-5 grid gap-3 text-sm text-white/80">
              <a
                className="flex items-center gap-3 hover:text-white"
                href={whatsAppHref}
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-white/85" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 12a8 8 0 1 1-3-6.3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 7v5h-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>WhatsApp</span>
              </a>
              <a
                className="flex items-center gap-3 hover:text-white"
                href="mailto:info@tjahyadiconsultant.com"
              >
                <span className="text-white/85" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 7.5h15v10h-15v-10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m5.5 8.5 6.5 5 6.5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Email</span>
              </a>
              <div className="text-xs text-white/55">
                {language === "id"
                  ? "(Tautan sosial media bisa ditambahkan kapan saja.)"
                  : language === "en"
                    ? "(Social media links can be added anytime.)"
                    : "（社媒链接可随时补充。）"}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-white/10" />
        <div className="mt-6 flex flex-col gap-2 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Tjahyadi Consulting. All rights
            reserved.
          </div>
          <div>
            {language === "id"
              ? "Dibangun dengan React + Tailwind"
              : language === "en"
                ? "Built with React + Tailwind"
                : "使用 React + Tailwind 构建"}
          </div>
        </div>
      </div>
    </footer>
  );
}
