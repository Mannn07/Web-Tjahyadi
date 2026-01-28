import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";
import type { LanguageProps } from "../types";

interface AppProps extends LanguageProps {}

function App({ language, onLanguageChange }: AppProps) {
  const [isSolidNav, setIsSolidNav] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const ServiceIcon = ({ kind }: { kind: string }) => {
    const baseProps = {
      viewBox: "0 0 24 24",
      width: 22,
      height: 22,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "text-[#2563eb]",
      "aria-hidden": true as const,
    };

    switch (kind) {
      case "tax":
        return (
          <svg {...baseProps}>
            <path
              d="M7 7h10M7 11h10M7 15h6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M7.5 3.5h6.2l2.8 2.8V20a1.5 1.5 0 0 1-1.5 1.5H7.5A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "accounting":
        return (
          <svg {...baseProps}>
            <path
              d="M6.5 4.5h11A2.5 2.5 0 0 1 20 7v10a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17V7a2.5 2.5 0 0 1 2.5-2.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 9.5h4m-4 3h9m-9 3h7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "payroll":
        return (
          <svg {...baseProps}>
            <path
              d="M7.5 7.5h9A2.5 2.5 0 0 1 19 10v9A2.5 2.5 0 0 1 16.5 21.5h-9A2.5 2.5 0 0 1 5 19v-9A2.5 2.5 0 0 1 7.5 7.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M8 3.5v4m8-4v4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M8.5 12.5h3m-3 3h7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "legal":
        return (
          <svg {...baseProps}>
            <path
              d="M12 3.5c2.5 2.2 5.2 3.1 7.5 3.5V13c0 4.2-3 7.4-7.5 8.9C7.5 20.4 4.5 17.2 4.5 13V7c2.3-.4 5-1.3 7.5-3.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 12.5h5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M10.5 10.5h3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const slides = useMemo(
    () => [
      { src: "/hero-1.jpg", alt: "Team meeting" },
      { src: "/hero-2.jpg", alt: "Office workspace" },
      { src: "/hero-3.jpg", alt: "Business desk" },
    ],
    [],
  );

  useEffect(() => {
    const onScroll = () => {
      setIsSolidNav(window.scrollY > 24);
      setShowScrollTop(window.scrollY > 700);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((s) => (s + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const serviceLabels = {
    tax: { id: "TAX", en: "TAX", zh: "税务" }[language],
    accounting: { id: "ACCOUNTING", en: "ACCOUNTING", zh: "会计" }[language],
    payroll: { id: "PAYROLL", en: "PAYROLL", zh: "薪资" }[language],
    legal: { id: "LEGAL", en: "LEGAL", zh: "法律" }[language],
  };

  const aboutContent = {
    badge: { id: "Tentang Kami", en: "About Us", zh: "关于我们" }[language],
    titlePrefix: { id: "Tentang", en: "About", zh: "关于" }[language],
    titleBrand: "TJAHYADI CONSULTING",
    paragraphs: {
      id: [
        "Di Tjahyadi Consulting, kami membantu bisnis di Indonesia tetap patuh, rapi, dan percaya diri secara finansial. Berbasis di Serpong, kami menyediakan layanan pajak, akuntansi, payroll, dan legal yang andal untuk perusahaan lokal maupun perusahaan asing (PMA).",
        "Tim kami yang berpengalaman dan trilingual — fasih berbahasa Inggris, Bahasa Indonesia, dan Mandarin — memadukan keahlian pajak lokal dengan perspektif global untuk memberikan dukungan finansial yang jelas, akurat, dan transparan.",
        "Kami lebih dari sekadar konsultan — kami adalah mitra terpercaya Anda untuk membangun fondasi keuangan yang kuat demi kesuksesan jangka panjang.",
      ],
      en: [
        "At Tjahyadi Consulting, we help businesses in Indonesia stay compliant, organized, and financially confident. Based in Serpong, we provide reliable tax, accounting, payroll, and legal services for both local and foreign-owned companies (PMA).",
        "Our experienced, trilingual team — fluent in English, Bahasa Indonesia, and Mandarin — combines local tax expertise with a global mindset to deliver clear, accurate, and transparent financial support.",
        "We are more than consultants — we are your trusted partner in building a strong financial foundation for lasting success.",
      ],
      zh: [
        "在 Tjahyadi Consulting，我们帮助印度尼西亚的企业保持合规、流程有序，并对财务更有信心。我们位于 Serpong，为本地及外资企业（PMA）提供可靠的税务、会计、薪资与法律服务。",
        "我们的资深三语团队——精通英语、印尼语和中文——将本地税务专业知识与全球化视角结合，提供清晰、准确、透明的财务支持。",
        "我们不仅是顾问——更是您值得信赖的合作伙伴，助您建立稳固的财务基础，实现长期成功。",
      ],
    }[language],
    button: { id: "SELENGKAPNYA", en: "MORE ABOUT US", zh: "了解更多" }[
      language
    ],
    imageAlt: {
      id: "Tim Tjahyadi Consulting",
      en: "Tjahyadi Consulting team",
      zh: "Tjahyadi Consulting 团队",
    }[language],
  };

  const whatsAppNumber = "6287808630658";
  const whatsAppMessage = {
    id: "Halo Tjahyadi Consulting, saya ingin konsultasi.",
    en: "Hello Tjahyadi Consulting, I'd like to consult.",
    zh: "你好，我想咨询税务/会计服务。",
  }[language];
  const whatsAppHref = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
    whatsAppMessage,
  )}`;

  const officialPartners = [
    {
      name: "IKPI",
      src: "/logo_ikpi.png",
      alt: "IKPI",
    },
    {
      name: "Zahir",
      src: "/zahir.png",
      alt: "Zahir",
    },
  ];

  const portfolioContent = {
    badge: { id: "Portofolio", en: "Portfolio", zh: "客户案例" }[language],
    titleA: { id: "Portofolio", en: "Portfolio", zh: "客户" }[language],
    titleB: { id: "Klien", en: "Clients", zh: "组合" }[language],
    subtitle: {
      id: "Beberapa contoh klien (placeholder) — logo dapat diganti sesuai data resmi.",
      en: "Sample client list (placeholders) — replace with your official client logos anytime.",
      zh: "以下为示例占位（可随时替换为正式客户标识）。",
    }[language],
  };

  const partnerContent = {
    badge: { id: "Mitra", en: "Partners", zh: "合作伙伴" }[language],
    titleA: { id: "Mitra", en: "Official", zh: "官方" }[language],
    titleB: { id: "Resmi", en: "Partners", zh: "合作伙伴" }[language],
    subtitle: {
      id: "Kami bekerja dengan mitra profesional untuk mendukung layanan Anda.",
      en: "We collaborate with professional partners to support your needs.",
      zh: "我们与专业伙伴合作，为您提供更完善的服务支持。",
    }[language],
  };

  const testimonialsContent = {
    badge: { id: "Testimoni Klien", en: "Client Testimonials", zh: "客户评价" }[
      language
    ],
    titleA: { id: "Apa yang", en: "What", zh: "他们" }[language],
    titleB: { id: "Mereka", en: "Clients", zh: "怎么" }[language],
    titleC: { id: "Katakan", en: "Say", zh: "说" }[language],
    subtitle: {
      id: "Cuplikan testimoni (placeholder) — dapat diganti dengan testimoni resmi Anda.",
      en: "Sample testimonials (placeholders) — replace with your official testimonials anytime.",
      zh: "以下为示例占位（可替换为您的正式评价内容）。",
    }[language],
  };

  const testimonials = {
    id: [
      {
        company: "PT Nusantara Prima",
        name: "Finance Manager",
        quote:
          "Pelayanan rapi, respons cepat, dan penjelasannya sangat jelas. Kami jadi jauh lebih percaya diri dalam kepatuhan pajak.",
      },
      {
        company: "PMA Growth Asia",
        name: "Director",
        quote:
          "Tim trilingual membantu koordinasi lintas negara dengan sangat baik. Laporan akurat dan transparan.",
      },
      {
        company: "Startup Serpong",
        name: "Founder",
        quote:
          "Pembukuan dan payroll kami jadi lebih terstruktur. Sangat membantu untuk scaling tanpa khawatir compliance.",
      },
    ],
    en: [
      {
        company: "PT Nusantara Prima",
        name: "Finance Manager",
        quote:
          "Organized work, fast response, and very clear explanations. We feel much more confident about tax compliance.",
      },
      {
        company: "PMA Growth Asia",
        name: "Director",
        quote:
          "Their trilingual team makes cross-border coordination easy. Reports are accurate and transparent.",
      },
      {
        company: "Serpong Startup",
        name: "Founder",
        quote:
          "Our bookkeeping and payroll are much more structured now—great support for scaling while staying compliant.",
      },
    ],
    zh: [
      {
        company: "PT Nusantara Prima",
        name: "财务经理",
        quote:
          "工作非常有条理，响应迅速，解释也很清晰。我们的税务合规更安心了。",
      },
      {
        company: "PMA Growth Asia",
        name: "董事",
        quote: "三语团队让跨境沟通非常顺畅。报表准确透明，值得信赖。",
      },
      {
        company: "Serpong 创业公司",
        name: "创始人",
        quote: "记账与薪资流程更规范，帮助我们在扩张时依然保持合规。",
      },
    ],
  }[language];

  const portfolioLogos = [
    { label: "GALDERMA", tone: "from-slate-100 to-white" },
    { label: "ARCELIA", tone: "from-slate-100 to-white" },
    { label: "PERUMNAS", tone: "from-slate-100 to-white" },
    { label: "TRIPUTRA GROUP", tone: "from-slate-100 to-white" },
    { label: "AGRICORE", tone: "from-slate-100 to-white" },
    { label: "NAYAM", tone: "from-slate-100 to-white" },
    { label: "REALTY", tone: "from-slate-100 to-white" },
    { label: "ADVANTIS", tone: "from-slate-100 to-white" },
  ];

  const marqueeItems = [...portfolioLogos, ...portfolioLogos];

  useEffect(() => {
    const id = window.setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 7500);
    return () => window.clearInterval(id);
  }, [testimonials.length]);

  const onPrevTestimonial = () =>
    setTestimonialIndex(
      (i) => (i - 1 + testimonials.length) % testimonials.length,
    );

  const onNextTestimonial = () =>
    setTestimonialIndex((i) => (i + 1) % testimonials.length);

  const currentTestimonial = testimonials[testimonialIndex];

  return (
    <div className="min-h-screen">
      <Navbar
        isSolidNav={isSolidNav}
        language={language}
        onLanguageChange={onLanguageChange}
      />

      {/* Hero Slider */}
      <main id="home" className="relative">
        <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
          {slides.map((s, idx) => (
            <div
              key={s.src}
              className={
                "absolute inset-0 transition-opacity duration-700 " +
                (idx === slideIndex ? "opacity-100" : "opacity-0")
              }
              hidden={idx !== slideIndex}
            >
              <img
                src={s.src}
                alt={s.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-primary/12" />
            </div>
          ))}

          <div className="relative z-10 flex h-full items-center justify-center text-center">
            <div className="container-page">
              <div className="mx-auto max-w-4xl px-4">
                {/* Brand Logo */}
                <div className="flex justify-center mb-6">
                  <img
                    src="/logo1.png"
                    alt="TJAHYADI CONSULTING"
                    className="h-16 sm:h-20 md:h-24 w-auto"
                    decoding="async"
                    loading="eager"
                  />
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
                  Registered Tax Consultant
                  <span className="block mt-2">Member of</span>
                </h1>

                {/* IKPI Logo */}
                <div className="mt-4 flex justify-center">
                  <img
                    src="/logo_ikpi.png"
                    alt="IKPI"
                    className="h-12 sm:h-14 md:h-16 w-auto rounded bg-white p-2 shadow-lg"
                    decoding="async"
                    loading="eager"
                  />
                </div>

                {/* Service Buttons - Grid 2x2 on mobile */}
                <div className="mt-10 sm:mt-12 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 max-w-md sm:max-w-none mx-auto">
                  <a
                    href="#tax"
                    className="flex items-center justify-center rounded-full bg-[#60a5fa] hover:bg-[#3b82f6] text-white text-sm sm:text-base font-bold px-6 py-3 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {serviceLabels.tax}
                  </a>
                  <a
                    href="#payroll"
                    className="flex items-center justify-center rounded-full bg-[#60a5fa] hover:bg-[#3b82f6] text-white text-sm sm:text-base font-bold px-6 py-3 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {serviceLabels.payroll}
                  </a>
                  <a
                    href="#accounting"
                    className="flex items-center justify-center rounded-full bg-[#60a5fa] hover:bg-[#3b82f6] text-white text-sm sm:text-base font-bold px-6 py-3 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {serviceLabels.accounting}
                  </a>
                  <a
                    href="#legal"
                    className="flex items-center justify-center rounded-full bg-[#60a5fa] hover:bg-[#3b82f6] text-white text-sm sm:text-base font-bold px-6 py-3 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {serviceLabels.legal}
                  </a>
                </div>

                {/* Slide Indicators */}
                <div className="mt-10 flex justify-center gap-3">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSlideIndex(idx)}
                      className={
                        "h-2.5 w-2.5 rounded-full transition " +
                        (idx === slideIndex
                          ? "bg-white"
                          : "bg-white/35 hover:bg-white/60")
                      }
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services quick section (below logo/hero) */}
        <section id="services" className="bg-white py-14">
          <div className="container-page">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  id: "tax",
                  title: serviceLabels.tax,
                  desc: {
                    id: "Perencanaan, kepatuhan, dan pendampingan pajak yang rapi.",
                    en: "Tax planning, compliance, and structured advisory.",
                    zh: "税务规划、合规与专业顾问服务。",
                  }[language],
                },
                {
                  id: "accounting",
                  title: serviceLabels.accounting,
                  desc: {
                    id: "Pembukuan akurat untuk keputusan bisnis yang lebih cepat.",
                    en: "Accurate bookkeeping for faster business decisions.",
                    zh: "精准记账，助力更快的商业决策。",
                  }[language],
                },
                {
                  id: "payroll",
                  title: serviceLabels.payroll,
                  desc: {
                    id: "Payroll yang tepat waktu, aman, dan sesuai regulasi.",
                    en: "On-time, secure, and compliant payroll operations.",
                    zh: "准时、安全、合规的薪资管理。",
                  }[language],
                },
                {
                  id: "legal",
                  title: serviceLabels.legal,
                  desc: {
                    id: "Dukungan legal untuk operasional dan pertumbuhan perusahaan.",
                    en: "Legal support for operations and company growth.",
                    zh: "为企业运营与增长提供法律支持。",
                  }[language],
                },
              ].map((card) => (
                <a
                  key={card.id}
                  id={card.id}
                  href={`#${card.id}`}
                  className="group relative block scroll-mt-28 rounded-2xl bg-gradient-to-br from-[#2563eb]/25 via-slate-200 to-[#2563eb]/10 p-[1px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/40 focus-visible:ring-offset-2"
                >
                  <div className="rounded-2xl bg-white p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563eb]/10 ring-1 ring-[#2563eb]/15 transition duration-300 group-hover:bg-[#2563eb]/15 group-hover:ring-[#2563eb]/25">
                          <span className="transition duration-300 group-hover:scale-110 group-hover:-rotate-3">
                            <ServiceIcon kind={card.id} />
                          </span>
                        </div>
                        <div className="text-xs font-black tracking-[0.25em] text-[#2563eb]">
                          SERVICE
                        </div>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 ring-1 ring-slate-200 transition duration-300 group-hover:bg-[#2563eb]/5 group-hover:ring-[#2563eb]/20">
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          aria-hidden="true"
                          className="text-slate-500 transition duration-300 group-hover:translate-x-0.5 group-hover:text-[#2563eb]"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="mt-4 text-lg font-extrabold text-slate-900 transition duration-300 group-hover:text-[#2563eb]">
                      {card.title}
                    </div>

                    <div className="mt-2 text-sm leading-relaxed text-slate-600">
                      {card.desc}
                    </div>

                    <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent transition duration-300 group-hover:via-[#2563eb]/25" />

                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition duration-300 group-hover:text-[#2563eb]">
                      <span>
                        {
                          {
                            id: "Lihat detail",
                            en: "View details",
                            zh: "查看详情",
                          }[language]
                        }
                      </span>
                      <span className="transition duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-20">
          <div className="container-page">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl rounded-br-[84px] bg-slate-100 shadow-sm">
                <img
                  src="/hero-1.jpg"
                  alt={aboutContent.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-[#2563eb]" />
                  <span className="tracking-wide">{aboutContent.badge}</span>
                </div>

                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                  {aboutContent.titlePrefix}{" "}
                  <span className="text-[#2563eb]">
                    {aboutContent.titleBrand}
                  </span>
                </h2>

                <div className="mt-6 space-y-6 text-slate-600">
                  <p className="leading-relaxed">
                    <span className="float-left mr-3 mt-1 text-5xl font-extrabold leading-none text-[#2563eb]">
                      {aboutContent.paragraphs[0].slice(0, 1)}
                    </span>
                    {aboutContent.paragraphs[0].slice(1)}
                  </p>
                  <p className="leading-relaxed">
                    {aboutContent.paragraphs[1]}
                  </p>
                  <p className="leading-relaxed">
                    {aboutContent.paragraphs[2]}
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-6 py-3 text-sm font-extrabold tracking-wide text-white shadow-sm transition hover:bg-[#2563eb]/90"
                  >
                    {aboutContent.button}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Official Partners */}
        <section id="partners" className="bg-white py-16">
          <div className="container-page">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span className="h-2 w-2 rounded-full bg-[#2563eb]" />
                <span className="tracking-wide">{partnerContent.badge}</span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {partnerContent.titleA}{" "}
                <span className="text-[#2563eb]">{partnerContent.titleB}</span>
              </h2>
              <p className="mt-4 max-w-3xl text-slate-600">
                {partnerContent.subtitle}
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {officialPartners.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 shadow-sm"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="max-h-20 w-auto sm:max-h-24"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Portfolio (Marquee) */}
        <section id="portfolio" className="bg-white py-16">
          <div className="container-page">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span className="h-2 w-2 rounded-full bg-[#2563eb]" />
                <span className="tracking-wide">{portfolioContent.badge}</span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {portfolioContent.titleA}{" "}
                <span className="text-[#2563eb]">
                  {portfolioContent.titleB}
                </span>
              </h2>
              <p className="mt-4 max-w-3xl text-slate-600">
                {portfolioContent.subtitle}
              </p>
            </div>

            <div className="mt-10 marquee">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
              <div className="marquee-track py-2">
                {marqueeItems.map((c, idx) => (
                  <div
                    key={`${c.label}-${idx}`}
                    className={`flex h-20 w-48 items-center justify-center rounded-2xl bg-gradient-to-b ${c.tone} ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:ring-[#2563eb]/25 hover:shadow-md`}
                  >
                    <div className="text-center">
                      <div className="text-xs font-black tracking-[0.35em] text-slate-500">
                        {language === "zh" ? "客户" : "CLIENT"}
                      </div>
                      <div className="mt-1 text-sm font-extrabold text-slate-900">
                        {c.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-[#1e3a8a] py-20 text-white">
          <div className="container-page">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <span className="h-2 w-2 rounded-full bg-[#2563eb]" />
                <span className="tracking-wide">
                  {testimonialsContent.badge}
                </span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                {testimonialsContent.titleA}{" "}
                <span className="text-[#60a5fa]">
                  {testimonialsContent.titleB}
                </span>{" "}
                {testimonialsContent.titleC}
              </h2>
              <p className="mt-4 max-w-3xl text-white/75">
                {testimonialsContent.subtitle}
              </p>
            </div>

            <div className="mt-12 relative mx-auto max-w-5xl">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-0" />

              <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-lg backdrop-blur sm:px-10">
                <div className="mx-auto flex max-w-4xl flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 ring-4 ring-[#2563eb]/50">
                    <div className="text-xl font-black text-[#1e3a8a]">
                      {currentTestimonial.company.slice(0, 1).toUpperCase()}
                    </div>
                  </div>

                  <p className="mt-8 text-center text-lg italic leading-relaxed text-white/90 sm:text-xl">
                    “{currentTestimonial.quote}”
                  </p>

                  <div className="mt-8 text-center">
                    <div className="text-[#60a5fa] text-lg font-extrabold">
                      {currentTestimonial.company}
                    </div>
                    <div className="mt-1 text-sm text-white/70">
                      {currentTestimonial.name}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onPrevTestimonial}
                  aria-label={
                    language === "id"
                      ? "Sebelumnya"
                      : language === "en"
                        ? "Previous"
                        : "上一条"
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/5 p-3 text-white/80 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
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
                      d="M15 6l-6 6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={onNextTestimonial}
                  aria-label={
                    language === "id"
                      ? "Berikutnya"
                      : language === "en"
                        ? "Next"
                        : "下一条"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/5 p-3 text-white/80 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
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
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={
                      "h-2.5 w-2.5 rounded-full transition " +
                      (idx === testimonialIndex
                        ? "bg-white"
                        : "bg-white/30 hover:bg-white/55")
                    }
                    aria-label={`${language === "id" ? "Testimoni" : language === "en" ? "Testimonial" : "评价"} ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white py-16">
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-[#2563eb]" />
                  <span className="tracking-wide">
                    {language === "id"
                      ? "Kontak"
                      : language === "en"
                        ? "Contact"
                        : "联系我们"}
                  </span>
                </div>
                <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  {language === "id"
                    ? "Hubungi"
                    : language === "en"
                      ? "Get in"
                      : "与我们"}{" "}
                  <span className="text-[#2563eb]">
                    {language === "id"
                      ? "Kami"
                      : language === "en"
                        ? "Touch"
                        : "联系"}
                  </span>
                </h2>
                <p className="mt-4 max-w-xl text-slate-600">
                  {language === "id"
                    ? "Butuh konsultasi pajak, akuntansi, payroll, atau legal? Kirim pesan via WhatsApp dan tim kami akan membantu."
                    : language === "en"
                      ? "Need tax, accounting, payroll, or legal support? Message us on WhatsApp and our team will help."
                      : "需要税务、会计、薪资或法律支持？欢迎通过 WhatsApp 联系我们。"}
                </p>

                <div className="mt-6 grid gap-3 text-sm text-slate-700">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="text-xs font-black tracking-[0.25em] text-[#2563eb]">
                      {language === "id"
                        ? "LOKASI"
                        : language === "en"
                          ? "LOCATION"
                          : "地点"}
                    </div>
                    <div className="mt-2 font-semibold">
                      Ruko Aniva Grande Blok GG No. 12
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Jl. Diponegoro, Gading Serpong
                      <br />
                      Tangerang 15334, Indonesia
                    </div>
                  </div>

                  <a
                    href={whatsAppHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/40 focus-visible:ring-offset-2"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-black tracking-[0.25em] text-[#2563eb]">
                          WHATSAPP
                        </div>
                        <div className="mt-2 font-semibold">
                          +62 878-0863-0658
                        </div>
                        <div className="mt-1 text-sm text-slate-600">
                          {language === "id"
                            ? "Klik untuk chat sekarang"
                            : language === "en"
                              ? "Click to chat now"
                              : "点击立即咨询"}
                        </div>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb]/10 text-[#2563eb] transition group-hover:bg-[#2563eb]/15">
                        →
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <div className="text-xs font-black tracking-[0.25em] text-[#2563eb]">
                  {language === "id"
                    ? "JAM OPERASIONAL"
                    : language === "en"
                      ? "BUSINESS HOURS"
                      : "营业时间"}
                </div>
                <div className="mt-3 text-sm text-slate-700">
                  {language === "id"
                    ? "Senin – Jumat, 08.00 – 17.00 WIB"
                    : language === "en"
                      ? "Monday – Friday, 08.00 – 17.00 WIB"
                      : "周一至周五，08.00 – 17.00（WIB）"}
                </div>
                <div className="mt-6 text-xs text-slate-500">
                  {language === "id"
                    ? "(Email & sosial media bisa ditambahkan kapan saja.)"
                    : language === "en"
                      ? "(Email & social media links can be added anytime.)"
                      : "（邮箱与社媒链接可随时补充。）"}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-[#1e3a8a] to-primary py-16 text-white">
          <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                {language === "id"
                  ? "Konsultasi Sekarang"
                  : language === "en"
                    ? "Consult Now"
                    : "立即咨询"}
              </div>
              <div className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
                {language === "id"
                  ? "Butuh bantuan pajak, akuntansi, payroll, atau legal? Hubungi kami untuk konsultasi."
                  : language === "en"
                    ? "Need help with tax, accounting, payroll, or legal? Contact us for a consultation."
                    : "需要税务、会计、薪资或法律支持？欢迎联系我们咨询。"}
              </div>
            </div>
            <a
              href={whatsAppHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-extrabold tracking-wide text-[#2563eb] shadow-lg transition hover:scale-105 hover:bg-white/95"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
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
              {language === "id"
                ? "KONTAK KAMI"
                : language === "en"
                  ? "CONTACT US"
                  : "联系我们"}
            </a>
          </div>
        </section>

        <Footer language={language} />
      </main>

      <WhatsAppButton language={language} />
      <ScrollToTop show={showScrollTop} language={language} />
    </div>
  );
}

export default App;
