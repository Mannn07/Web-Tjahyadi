import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";
import type { LanguageProps } from "../types";

type AboutProps = LanguageProps;

function About({ language, onLanguageChange }: AboutProps) {
  const [isSolidNav, setIsSolidNav] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const [whyInView, setWhyInView] = useState(false);

  const WHY_DELAY_CLASSES = [
    "delay-[0ms]",
    "delay-[90ms]",
    "delay-[180ms]",
    "delay-[270ms]",
    "delay-[360ms]",
    "delay-[450ms]",
  ] as const;

  // Animated counter hook
  const useCounter = (
    end: number,
    duration: number = 2000,
    isInView: boolean,
  ) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let startTime: number | null = null;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * (end - startValue) + startValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration, isInView]);

    return count;
  };

  const yearsCount = useCounter(10, 2000, statsInView);
  const teamCount = useCounter(30, 2000, statsInView);
  const clientsCount = useCounter(250, 2500, statsInView);
  const projectsCount = useCounter(250, 2500, statsInView);

  useEffect(() => {
    const onScroll = () => {
      setIsSolidNav(window.scrollY > 24);
      setShowScrollTop(window.scrollY > 700);

      // Check if stats section is in view
      const statsSection = document.getElementById("stats");
      if (statsSection && !statsInView) {
        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        if (isVisible) {
          setStatsInView(true);
        }
      }

      // Check if Why Choose Us section is in view
      const whySection = document.getElementById("why-choose-us");
      if (whySection && !whyInView) {
        const rect = whySection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          setWhyInView(true);
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [statsInView, whyInView]);

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
    <div className="min-h-screen">
      <Navbar
        isSolidNav={isSolidNav}
        language={language}
        onLanguageChange={onLanguageChange}
      />

      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
          <img
            src="/hero-2.jpg"
            alt="About Us"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[8000ms] hover:scale-110"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-primary/20" />

          <div className="relative z-10 flex h-full items-center justify-center text-center">
            <div className="container-page">
              <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
                {language === "id"
                  ? "Tentang Kami"
                  : language === "en"
                    ? "About Us"
                    : "关于我们"}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative bg-white py-20 overflow-hidden">
          {/* Diagonal lines pattern */}
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="diagonal-lines"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="20"
                  stroke="#1b1f6a"
                  strokeWidth="2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
          </svg>

          <div className="container-page relative z-10">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="h-3 w-3 rounded-full bg-[#1b1f6a]" />
                  <span className="tracking-wide">
                    {language === "id"
                      ? "Tentang Kami"
                      : language === "en"
                        ? "About Us"
                        : "关于我们"}
                  </span>
                </div>

                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                  <span className="text-[#1b1f6a]">Tjahyadi</span>{" "}
                  {language === "id"
                    ? "Tax & Accounting Service"
                    : language === "en"
                      ? "Tax & Accounting Service"
                      : "税务与会计服务"}
                </h2>

                <div className="mt-6 space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    <span className="float-left mr-3 mt-1 text-6xl font-extrabold leading-none text-[#1b1f6a]">
                      F
                    </span>
                    {language === "id"
                      ? "ounded in November 2012, perusahaan kami hadir dengan visi untuk mendefinisikan ulang keunggulan dalam layanan akuntansi pajak. Dari awal yang sederhana, kami telah berkembang menjadi mitra terpercaya bagi individu dan bisnis yang mencari pemberdayaan finansial. Perjalanan kami berakar pada komitmen terhadap presisi, integritas, dan kepuasan klien."
                      : language === "en"
                        ? "ounded in November 2012, our company emerged with a vision to redefine excellence in tax accounting services. From our humble beginnings, we have evolved into a trusted partner for individuals and businesses seeking financial empowerment. Our journey is rooted in a commitment to precision, integrity, and client satisfaction."
                        : "成立于 2012 年 11 月，我们公司以重新定义税务会计服务卓越的愿景而诞生。从我们卑微的开始，我们已经发展成为寻求财务赋权的个人和企业的值得信赖的合作伙伴。我们的旅程根植于对精确、诚信和客户满意度的承诺。"}
                  </p>

                  <p>
                    {language === "id"
                      ? "Dengan tim profesional berpengalaman, kami menavigasi lanskap dinamis hukum pajak untuk memberikan solusi komprehensif. Tujuan kami bukan hanya memenuhi tetapi melampaui harapan klien, memupuk kesejahteraan finansial melalui strategi personal dan perhatian terhadap detail yang cermat. Saat kami terus berkembang, dedikasi kami terhadap keunggulan tetap tak tergoyahkan, menjadikan kami mercusuar keandalan dalam bidang akuntansi pajak."
                      : language === "en"
                        ? "With a team of seasoned professionals, we navigate the dynamic landscape of tax laws to provide comprehensive solutions. Our goal is not just to meet but exceed client expectations, fostering financial wellness through personalized strategies and meticulous attention to detail. As we continue to grow, our dedication to excellence remains unwavering, making us a beacon of reliability in the realm of tax accounting."
                        : "凭借一支经验丰富的专业团队，我们驾驭税法的动态格局，提供全面的解决方案。我们的目标不仅是满足而是超越客户期望，通过个性化策略和对细节的一丝不苟关注来促进财务健康。随着我们的不断发展，我们对卓越的奉献坚定不移，使我们成为税务会计领域可靠性的灯塔。"}
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl rounded-tr-[120px] bg-slate-100 shadow-2xl min-h-[350px] lg:min-h-[400px] group">
                <img
                  src="/hero-1.jpg"
                  alt="Team"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-8 left-8">
                  <div className="rounded-3xl bg-[#1b1f6a] px-8 py-6 shadow-2xl">
                    <div className="text-2xl font-black leading-tight text-white sm:text-3xl">
                      {language === "id"
                        ? "Kenali Kami"
                        : language === "en"
                          ? "Get To Know"
                          : "了解我们"}
                      <br />
                      {language === "id"
                        ? "Lebih Dekat"
                        : language === "en"
                          ? "Us Better"
                          : "更好"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20">
          <div className="container-page">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 rounded-full bg-[#1b1f6a]/10 px-5 py-2 text-sm font-semibold text-[#1b1f6a]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#1b1f6a]" />
                <span className="tracking-wide">
                  {language === "id"
                    ? "Visi & Misi"
                    : language === "en"
                      ? "Vision & Mission"
                      : "愿景与使命"}
                </span>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Vision Card */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#181a5c] to-primary p-12 text-white shadow-2xl transition hover:-translate-y-2 hover:shadow-3xl">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#1b1f6a]/20 blur-3xl" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                    <svg
                      className="h-8 w-8 text-[#1b1f6a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold uppercase tracking-wide">
                    {language === "id"
                      ? "Visi Kami"
                      : language === "en"
                        ? "Our Vision"
                        : "我们的愿景"}
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed text-white/90">
                    {language === "id"
                      ? "Memberdayakan Masa Depan Finansial, Menginspirasi Kepercayaan"
                      : language === "en"
                        ? "Empowering Financial Futures, Inspiring Confidence"
                        : "赋能财务未来，激发信心"}
                  </p>

                  <div className="mt-8 h-1 w-20 rounded-full bg-[#1b1f6a]" />
                </div>
              </div>

              {/* Mission Card */}
              <div className="group relative overflow-hidden rounded-3xl bg-white p-12 shadow-2xl ring-2 ring-slate-100 transition hover:-translate-y-2 hover:shadow-3xl hover:ring-[#1b1f6a]/20">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#1b1f6a]/5 blur-3xl" />
                <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center rounded-2xl bg-[#1b1f6a]/10 p-4">
                    <svg
                      className="h-8 w-8 text-[#1b1f6a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold uppercase tracking-wide text-slate-900">
                    {language === "id"
                      ? "Misi Kami"
                      : language === "en"
                        ? "Our Mission"
                        : "我们的使命"}
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed text-slate-600">
                    {language === "id"
                      ? "Di Tjahyadi Tax & Accounting Service, misi kami adalah memberdayakan individu dan bisnis untuk menavigasi seluk-beluk keuangan dengan percaya diri. Kami berusaha menjadi katalisator kesuksesan finansial klien kami dengan menyediakan layanan akuntansi pajak ahli yang berakar pada presisi, transparansi, dan solusi personal. Melalui inovasi berkelanjutan dan komitmen terhadap keunggulan, kami bertujuan menjadi mitra terpercaya yang mengubah tantangan menjadi peluang, memastikan masa depan finansial yang aman dan sejahtera bagi semua yang kami layani."
                      : language === "en"
                        ? "At Tjahyadi Tax & Accounting Service, our mission is to empower individuals and businesses to navigate the intricacies of finance with confidence. We strive to be the catalyst for our clients' financial success by providing expert tax accounting services rooted in precision, transparency, and personalized solutions. Through continuous innovation and a commitment to excellence, we aim to be the trusted partner that transforms challenges into opportunities, ensuring a secure and prosperous financial future for all those we serve."
                        : "在 Tjahyadi 税务与会计服务，我们的使命是赋能个人和企业自信地驾驭金融的复杂性。我们努力成为客户财务成功的催化剂，通过提供根植于精确、透明和个性化解决方案的专业税务会计服务。通过持续创新和对卓越的承诺，我们旨在成为将挑战转化为机遇的值得信赖的合作伙伴，确保我们所服务的所有人拥有安全和繁荣的财务未来。"}
                  </p>

                  <div className="mt-8 h-1 w-20 rounded-full bg-[#1b1f6a]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          id="why-choose-us"
          className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-24"
        >
          {/* Decorative Elements */}
          <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1b1f6a]/5 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#1b1f6a]/3 to-primary/3 blur-3xl" />

          <div className="container-page relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-[#1b1f6a]/10 px-5 py-2 text-sm font-semibold text-[#1b1f6a]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#1b1f6a]" />
                <span className="tracking-wide">
                  {language === "id"
                    ? "Mengapa Memilih Kami"
                    : language === "en"
                      ? "Why Choose Us"
                      : "为什么选择我们"}
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                <span className="mr-3 inline-block animate-bounce">🌟</span>
                {language === "id"
                  ? "Mengapa Memilih Kami"
                  : language === "en"
                    ? "Why Choose Us"
                    : "为什么选择我们"}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                {language === "id"
                  ? "Alasan kenapa klien memilih kami sebagai partner keuangan yang aman, rapi, dan responsif."
                  : language === "en"
                    ? "Here’s what makes us a reliable finance partner—secure, precise, and easy to work with."
                    : "让我们成为您可靠的财税伙伴：安全、精准、沟通顺畅。"}
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: {
                    id: "Profesional — Akurasi & Kerahasiaan",
                    en: "Professional — Accuracy & Confidentiality",
                    zh: "专业 — 准确与保密",
                  },
                  body: {
                    id: "Anda dapat mengandalkan kami untuk menangani angka-angka Anda dengan cermat. Tim kami bekerja dengan presisi dan kebijaksanaan, memastikan setiap laporan akurat dan data bisnis Anda tetap terjaga kerahasiaannya.",
                    en: "You can count on us to handle your numbers with care. Our team works with precision and discretion, ensuring every report is accurate and your business data stays strictly confidential.",
                    zh: "您可以放心将数字交给我们处理。我们的团队以精准和谨慎的态度工作，确保每份报告准确无误，您的业务数据严格保密。",
                  },
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  gradient: "from-blue-500 to-indigo-600",
                },
                {
                  title: {
                    id: "Keahlian Pajak Lokal",
                    en: "Local Tax Expertise",
                    zh: "本地税务专业知识",
                  },
                  body: {
                    id: "Aturan pajak Indonesia bisa rumit, tapi di situlah kami hadir. Para ahli pajak lokal kami memahami seluk-beluk peraturan Indonesia dan selalu mengikuti pembaruan terbaru.",
                    en: "Indonesia's tax rules can be tricky, but that's where we come in. Our local tax experts understand Indonesian regulations and keep up with the latest updates.",
                    zh: "印尼的税务规则可能很复杂，但这正是我们的专长。我们的本地税务专家了解印尼法规的来龙去脉，并及时跟进最新更新。",
                  },
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2v20M17 5H10a3 3 0 000 6h4a3 3 0 010 6H6"
                      />
                    </svg>
                  ),
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  title: {
                    id: "Layanan Keuangan Lengkap",
                    en: "End-to-End Financial Services",
                    zh: "端到端财务服务",
                  },
                  body: {
                    id: "Dari pembukuan dan penggajian hingga pelaporan pajak dan administrasi perusahaan — kami menangani semuanya. Fokus kembangkan bisnis Anda, biar kami yang urus dokumen.",
                    en: "From bookkeeping and payroll to tax filing and corporate administration — we handle it all. Focus on growing your business while we take care of the paperwork.",
                    zh: "从簿记和工资单到税务申报和公司管理——我们全部处理。专注于发展您的业务，我们在幕后处理文书工作。",
                  },
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4M7 6h10M7 18h10M5 4h14v16H5z"
                      />
                    </svg>
                  ),
                  gradient: "from-violet-500 to-purple-600",
                },
                {
                  title: {
                    id: "Dukungan Perusahaan Asing (PMA)",
                    en: "Support for Foreign Companies (PMA)",
                    zh: "外资公司（PMA）支持",
                  },
                  body: {
                    id: "Mendirikan atau menjalankan bisnis asing di Indonesia? Tim kami berpengalaman membantu perusahaan PMA menavigasi aturan lokal dan kepatuhan dengan lancar.",
                    en: "Setting up or running a foreign-owned business in Indonesia? Our team has years of experience helping PMA companies navigate local rules smoothly.",
                    zh: "在印尼设立或经营外资企业？我们的团队拥有多年帮助PMA公司顺利应对当地规则和合规事务的经验。",
                  },
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  ),
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  title: {
                    id: "Dukungan Tiga Bahasa",
                    en: "Trilingual Support",
                    zh: "三语支持服务",
                  },
                  body: {
                    id: "Komunikasi yang jelas membuat segalanya lebih mudah. Tim trilingual kami berbicara dalam Bahasa Inggris, Bahasa Indonesia, dan Mandarin.",
                    en: "Clear communication makes everything easier. Our trilingual team speaks English, Bahasa Indonesia, and Mandarin, bridging any language gaps.",
                    zh: "清晰的沟通让一切变得更容易。我们的三语团队精通英语、印尼语和普通话，帮助消除语言障碍。",
                  },
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  ),
                  gradient: "from-pink-500 to-rose-600",
                },
                {
                  title: {
                    id: "Harga Terjangkau & Transparan",
                    en: "Affordable & Transparent Pricing",
                    zh: "价格实惠且透明",
                  },
                  body: {
                    id: "Tanpa biaya tersembunyi, tanpa kejutan — hanya harga yang jujur dan transparan. Kami menjaga semuanya tetap sederhana dan terjangkau.",
                    en: "No hidden fees, no surprises — just honest and upfront pricing. We keep things simple and affordable, so you know exactly what you're paying for.",
                    zh: "没有隐藏费用，没有惊喜——只有诚实透明的定价。我们保持简单实惠，让您始终清楚地知道您所支付的费用。",
                  },
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  gradient: "from-cyan-500 to-blue-600",
                },
              ].map((item, index) => {
                const delayClass = WHY_DELAY_CLASSES[index] ?? "delay-[0ms]";

                return (
                  <div
                    key={item.title.en}
                    className={
                      "group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200/50 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:ring-[#1b1f6a]/20 " +
                      delayClass +
                      " " +
                      (whyInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8")
                    }
                  >
                    {/* Gradient Background on Hover */}
                    <div
                      className={
                        "absolute inset-0 bg-gradient-to-br " +
                        item.gradient +
                        " opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]"
                      }
                    />

                    {/* Decorative Blur */}
                    <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-[#1b1f6a]/10 to-primary/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
                    <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-gradient-to-tr from-primary/5 to-[#1b1f6a]/5 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-50" />

                    <div className="relative z-10">
                      {/* Icon and Number */}
                      <div className="mb-6 flex items-center gap-4">
                        <div
                          className={
                            "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br " +
                            item.gradient +
                            " text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                          }
                        >
                          {item.icon}
                        </div>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-black text-white shadow-md">
                          {index + 1}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-extrabold leading-tight text-slate-900 transition-colors group-hover:text-[#1b1f6a]">
                        {item.title[language]}
                      </h3>

                      {/* Body */}
                      <p className="mt-4 leading-relaxed text-slate-600">
                        {item.body[language]}
                      </p>

                      {/* Bottom Accent Line */}
                      <div className="mt-6 flex items-center gap-2">
                        <div
                          className={
                            "h-1 w-12 rounded-full bg-gradient-to-r " +
                            item.gradient +
                            " opacity-60 transition-all duration-300 group-hover:w-20 group-hover:opacity-100"
                          }
                        />
                        <div className="h-1 w-2 rounded-full bg-slate-300 transition-all duration-300 group-hover:bg-[#1b1f6a]/50" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nilai Kami Section with Parallax Background */}
        <section id="stats" className="relative overflow-hidden py-32">
          {/* Parallax Background Image */}
          <div className="about-values-parallax absolute inset-0" />
          <div className="absolute inset-0 bg-slate-900/75" />

          {/* Content */}
          <div className="container-page relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 text-sm text-white/70">
                <span className="h-3 w-3 rounded-full bg-[#1b1f6a]" />
                <span className="tracking-wide uppercase">
                  {language === "id"
                    ? "Nilai Kami"
                    : language === "en"
                      ? "Our Values"
                      : "我们的价值观"}
                </span>
              </div>
              <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                {language === "id"
                  ? "Nilai Kami"
                  : language === "en"
                    ? "Our Values"
                    : "我们的价值观"}
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-20">
              <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-8 shadow-xl transition hover:-translate-y-2 hover:bg-white/15 border border-white/20">
                <div className="text-6xl font-black text-[#1b1f6a] transition group-hover:scale-110">
                  {yearsCount}+
                </div>
                <div className="mt-3 text-lg font-semibold text-white">
                  {language === "id"
                    ? "Tahun Pengalaman"
                    : language === "en"
                      ? "Years Experience"
                      : "年经验"}
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-8 shadow-xl transition hover:-translate-y-2 hover:bg-white/15 border border-white/20">
                <div className="text-6xl font-black text-[#1b1f6a] transition group-hover:scale-110">
                  {teamCount}+
                </div>
                <div className="mt-3 text-lg font-semibold text-white">
                  {language === "id"
                    ? "Tim Profesional"
                    : language === "en"
                      ? "Professional Team"
                      : "专业团队"}
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-8 shadow-xl transition hover:-translate-y-2 hover:bg-white/15 border border-white/20">
                <div className="text-6xl font-black text-[#1b1f6a] transition group-hover:scale-110">
                  {clientsCount}+
                </div>
                <div className="mt-3 text-lg font-semibold text-white">
                  {language === "id"
                    ? "Klien Puas"
                    : language === "en"
                      ? "Satisfied Clients"
                      : "满意客户"}
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-8 shadow-xl transition hover:-translate-y-2 hover:bg-white/15 border border-white/20">
                <div className="text-6xl font-black text-[#1b1f6a] transition group-hover:scale-110">
                  {projectsCount}+
                </div>
                <div className="mt-3 text-lg font-semibold text-white">
                  {language === "id"
                    ? "Proyek Berhasil"
                    : language === "en"
                      ? "Successful Projects"
                      : "成功项目"}
                </div>
              </div>
            </div>

            {/* Values Content */}
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md p-10 shadow-xl transition hover:-translate-y-2 hover:bg-white/15 border border-white/20">
                <div className="inline-flex items-center justify-center rounded-xl bg-[#1b1f6a]/20 p-3 mb-6">
                  <svg
                    className="h-8 w-8 text-[#1b1f6a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  {language === "id"
                    ? "Kepercayaan"
                    : language === "en"
                      ? "Trust"
                      : "信任"}
                </h3>
                <p className="mt-4 leading-relaxed text-white/80">
                  {language === "id"
                    ? "Kepercayaan selalu menjadi visi kami untuk menjadi mitra terpercaya dan dapat diandalkan dalam bisnis anda. Jim Blasingame: 'Trust is a good business practice'"
                    : language === "en"
                      ? "Trust has always been our vision to be a reliable and dependable partner in your business. Jim Blasingame: 'Trust is a good business practice'"
                      : "信任一直是我们成为您业务可靠合作伙伴的愿景"}
                </p>
                <div className="mt-6 h-1 w-16 rounded-full bg-[#1b1f6a]" />
              </div>

              <div className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md p-10 shadow-xl transition hover:-translate-y-2 hover:bg-white/15 border border-white/20">
                <div className="inline-flex items-center justify-center rounded-xl bg-[#1b1f6a]/20 p-3 mb-6">
                  <svg
                    className="h-8 w-8 text-[#1b1f6a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  {language === "id"
                    ? "Kualitas"
                    : language === "en"
                      ? "Quality"
                      : "质量"}
                </h3>
                <p className="mt-4 leading-relaxed text-white/80">
                  {language === "id"
                    ? "Kami berkomitmen untuk menyediakan layanan dengan kualitas terbaik untuk klien kami. John Lasseter: 'Quality is the best business plan'"
                    : language === "en"
                      ? "We are committed to providing the highest quality services to our clients. John Lasseter: 'Quality is the best business plan'"
                      : "我们致力于为客户提供最优质的服务。"}
                </p>
                <div className="mt-6 h-1 w-16 rounded-full bg-[#1b1f6a]" />
              </div>

              <div className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md p-10 shadow-xl transition hover:-translate-y-2 hover:bg-white/15 border border-white/20">
                <div className="inline-flex items-center justify-center rounded-xl bg-[#1b1f6a]/20 p-3 mb-6">
                  <svg
                    className="h-8 w-8 text-[#1b1f6a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  {language === "id"
                    ? "Komitmen"
                    : language === "en"
                      ? "Commitment"
                      : "承诺"}
                </h3>
                <p className="mt-4 leading-relaxed text-white/80">
                  {language === "id"
                    ? "Kami terlibat dan berkomitmen untuk pertumbuhan klien kami dan kami selalu menepati apa yang kami janjikan. Jean-Paul Sartre: 'Commitment is an ACT, not a word'"
                    : language === "en"
                      ? "We are engaged and committed to our clients' growth and we always keep our promises. Jean-Paul Sartre: 'Commitment is an ACT, not a word'"
                      : "我们致力于客户的成长，始终信守承诺"}
                </p>
                <div className="mt-6 h-1 w-16 rounded-full bg-[#1b1f6a]" />
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="bg-white py-20">
          <div className="container-page">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span className="h-3 w-3 rounded-full bg-[#1b1f6a]" />
                <span className="tracking-wide">
                  {language === "id"
                    ? "Our Partners"
                    : language === "en"
                      ? "Our Partners"
                      : "合作伙伴"}
                </span>
              </div>
              <h2 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
                {language === "id"
                  ? "Profesional yang berpengalaman dan mandiri siap membantu Anda mengembangkan bisnis Anda"
                  : language === "en"
                    ? "Experienced and independent professionals ready to help you grow your business"
                    : "经验丰富的独立专业人士随时准备帮助您发展业务"}
              </h2>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Leonardo, S.E., BKP",
                  title: "Partner",
                  img: "/Picture1.jpg",
                },
                {
                  name: "Alvin Kurniawan, S.E., M.M., BKP",
                  title: "Partner",
                  img: "/Picture2.jpg",
                },
                {
                  name: "Edwin Setiadi, S.E., M.B.A., BKP",
                  title: "Partner",
                  img: "/Picture3.png",
                },
              ].map((partner) => (
                <div
                  key={partner.name}
                  className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                    <img
                      src={partner.img}
                      alt={partner.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="bg-white p-6">
                    <div className="text-lg font-extrabold text-slate-900">
                      {partner.name}
                    </div>
                    <div className="mt-1 text-sm font-bold text-[#1b1f6a]">
                      {partner.title}
                    </div>
                    <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-[#1b1f6a]">
                      <span className="h-2 w-2 rounded-full bg-[#1b1f6a]" />
                      {language === "id"
                        ? "LIHAT PROFIL"
                        : language === "en"
                          ? "VIEW PROFILE"
                          : "查看资料"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-[#181a5c] to-primary py-16 text-white">
          <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                {language === "id"
                  ? "Konsultasi Sekarang"
                  : language === "en"
                    ? "Consult Now"
                    : "立即咨询"}
              </div>
              <div className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
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
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-extrabold tracking-wide text-[#181a5c] shadow-lg transition hover:scale-105 hover:bg-white/95"
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

export default About;
