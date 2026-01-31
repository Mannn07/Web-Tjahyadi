import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";
import type { LanguageProps } from "../types";

type AppProps = LanguageProps;

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
      className: "text-[#1b1f6a]",
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

  const heroContent = {
    headline: {
      id: "Konsultan Pajak Terdaftar",
      en: "Registered Tax Consultant",
      zh: "注册税务顾问",
    }[language],
    memberOf: {
      id: "Anggota",
      en: "Member of",
      zh: "会员",
    }[language],
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

  const servicesContent = {
    badge: { id: "Layanan Kami", en: "Our Services", zh: "我们的服务" }[
      language
    ],
    titleA: { id: "Layanan", en: "Our", zh: "我们的" }[language],
    titleB: { id: "Kami", en: "Services", zh: "服务" }[language],
    subtitle: {
      id: "Layanan pajak, akuntansi, payroll, dan legal yang rapi, akurat, serta sesuai regulasi Indonesia.",
      en: "Reliable tax, accounting, payroll, and legal support—accurate, organized, and compliant with Indonesian regulations.",
      zh: "提供可靠的税务、会计、薪资与法律支持——精准有序，并符合印尼法规。",
    }[language],
    ctaPrefix: { id: "➡️", en: "➡️", zh: "➡️" }[language],
    details: [
      {
        key: "tax",
        title: { id: "Tax Services", en: "Tax Services", zh: "税务服务" }[
          language
        ],
        paragraphs: {
          id: [
            "Kami membantu Anda tetap patuh terhadap kewajiban pajak — akurat dan tepat waktu. Tim kami menangani perhitungan, pelaporan, dan pelaporan pajak sesuai ketentuan perpajakan Indonesia.",
            "Mulai dari PPN bulanan, PPh Badan, hingga SPT Tahunan, kami pastikan semuanya disampaikan dengan benar dan efisien.",
            "Kami juga membantu tax planning, pendampingan pemeriksaan, serta penyelesaian sengketa pajak untuk meminimalkan risiko dan mengoptimalkan posisi pajak Anda.",
          ],
          en: [
            "We help you stay on top of your tax obligations — accurately and on time. Our team handles tax calculation, filing, and reporting in compliance with Indonesian tax laws.",
            "Whether it is monthly VAT, corporate income tax, or annual tax returns, we make sure everything is filed correctly and efficiently.",
            "We also assist with tax planning, audits, and dispute resolution, helping you minimize risks and optimize your tax position.",
          ],
          zh: [
            "我们协助您准确、准时地完成各项税务义务。团队负责税款计算、申报与报表提交，确保符合印尼税法要求。",
            "无论是每月增值税（VAT）、企业所得税，还是年度申报，我们都确保流程正确且高效。",
            "同时，我们提供税务筹划、税务稽核协助与争议处理，帮助您降低风险并优化税务结构。",
          ],
        }[language],
        tagline: {
          id: "Fokus pada pertumbuhan bisnis Anda, biarkan kami yang mengurus kompleksitas pajak.",
          en: "Focus on your business growth, and let us deal with the tax complexity.",
          zh: "专注业务增长，把税务复杂性交给我们。",
        }[language],
      },
      {
        key: "accounting",
        title: {
          id: "Accounting Services",
          en: "Accounting Services",
          zh: "会计服务",
        }[language],
        paragraphs: {
          id: [
            "Keputusan yang baik dimulai dari angka yang baik. Tim akuntansi kami memastikan pencatatan keuangan Anda akurat, rapi, dan sesuai standar akuntansi di Indonesia.",
            "Kami menyediakan layanan pembukuan, laporan keuangan, management accounts, dan persiapan audit untuk bisnis dari berbagai skala.",
            "Baik Anda startup maupun perusahaan yang sedang bertumbuh, kami memberikan insight keuangan yang jelas agar Anda bisa merencanakan langkah berikutnya dengan percaya diri.",
          ],
          en: [
            "Good decisions start with good numbers. Our accounting team ensures your financial records are accurate, organized, and compliant with Indonesian accounting standards.",
            "We provide bookkeeping, financial reporting, management accounts, and audit preparation services for businesses of all sizes.",
            "Whether you’re a startup or a growing company, we deliver clear financial insights that help you plan ahead with confidence.",
          ],
          zh: [
            "好的决策，来自可靠的数据。我们的会计团队确保您的财务记录准确、有序，并符合印尼会计准则。",
            "我们提供记账、财务报表、管理报表以及审计准备服务，适用于各规模企业。",
            "无论您是初创公司还是成长型企业，我们都会提供清晰的财务洞察，帮助您更自信地做规划。",
          ],
        }[language],
        tagline: {
          id: "Pembukuan akurat. Laporan jelas. Keputusan lebih baik.",
          en: "Accurate books. Clear reports. Better decisions.",
          zh: "账目准确，报表清晰，决策更稳。",
        }[language],
      },
      {
        key: "payroll",
        title: {
          id: "Payroll Services",
          en: "Payroll Services",
          zh: "薪资服务",
        }[language],
        paragraphs: {
          id: [
            "Mengelola payroll bisa menyita waktu — apalagi dengan perubahan regulasi pajak dan ketenagakerjaan. Kami menangani perhitungan gaji, pemotongan PPh 21, pelaporan BPJS, serta distribusi payslip dengan data yang aman dan rahasia.",
            "Tujuan kami membuat payroll Anda lebih smooth, tepat waktu, dan 100% patuh aturan, sehingga karyawan dibayar benar setiap bulan tanpa repot.",
          ],
          en: [
            "Managing payroll can be time-consuming — especially with changing tax and manpower regulations. We take care of salary calculations, tax deductions (PPh 21), BPJS reporting, and payslip distribution, all while keeping your employee data secure and confidential.",
            "Our goal is to make payroll smooth, timely, and fully compliant, so your employees get paid correctly every month without the hassle.",
          ],
          zh: [
            "薪资管理非常耗时——尤其在税务与人力法规频繁变化的情况下。我们负责工资计算、个人所得税（PPh 21）扣缴情、BPJS 申报与工资单发放，并严格保护员工数据安全与机密。",
            "我们的目标是让薪资流程稳定、准时、完全合规，让员工每月都能正确领薪，企业零负担。",
          ],
        }[language],
        tagline: {
          id: "Payroll andal, karyawan senang, zero stress.",
          en: "Reliable payroll, happy employees, zero stress.",
          zh: "薪资稳定，员工满意，省心无忧。",
        }[language],
      },
      {
        key: "legal",
        title: {
          id: "Legal & Corporate Administration",
          en: "Legal & Corporate Administration",
          zh: "法律与公司行政",
        }[language],
        paragraphs: {
          id: [
            "Selain angka, kami juga mendukung bisnis Anda melalui layanan legal dan kepatuhan perusahaan. Termasuk pendirian perusahaan, perizinan usaha, perubahan struktur perusahaan, drafting dokumen, hingga pelaporan kepatuhan ke instansi terkait.",
            "Untuk investor asing dan perusahaan PMA, kami memastikan dokumen serta proses selaras dengan regulasi Indonesia.",
          ],
          en: [
            "Beyond numbers, we also support your business with essential legal and corporate compliance services. This includes company registration, business licenses, changes in company structure, document drafting, and compliance filings with local authorities.",
            "For foreign investors and PMA companies, we make sure all legal documents and processes align with Indonesian regulations.",
          ],
          zh: [
            "除财务外，我们也提供关键的法律与公司合规支持，包括公司设立、营业许可、公司结构变更、文件起草以及向相关机构提交合规申报。",
            "针对外资投资人与 PMA 公司，我们确保所有文件与流程符合印尼法规要求。",
          ],
        }[language],
        tagline: {
          id: "Stay compliant, stay confident — kami urus paperwork-nya.",
          en: "Stay compliant, stay confident — we’ll handle the paperwork.",
          zh: "合规更安心，文件流程交给我们。",
        }[language],
      },
    ],
  };

  const advantageContent = {
    badge: { id: "KEUNGGULAN", en: "ADVANTAGE", zh: "优势" }[language],
    titleA: {
      id: "KENAPA",
      en: "WHY",
      zh: "为什么选择",
    }[language],
    titleB: "TJAHYADI CONSULTING",
    subtitle: {
      id: "Alasan mengapa klien mempercayakan kepatuhan dan administrasi keuangan kepada kami.",
      en: "Why clients trust us for financial compliance and administration.",
      zh: "客户选择我们的原因：合规、可靠、沟通清晰。",
    }[language],
    items: [
      {
        title: {
          id: "Professional — Accuracy & Confidentiality",
          en: "Professional — Accuracy & Confidentiality",
          zh: "专业 — 准确与保密",
        }[language],
        desc: {
          id: "Anda dapat mengandalkan kami untuk menangani angka dengan teliti dan penuh kerahasiaan. Setiap laporan dikerjakan presisi, dan data bisnis Anda dijaga dengan standar keamanan yang tinggi.",
          en: "Count on us to handle your numbers with care. We work with precision and discretion, keeping your reports accurate and your business data strictly confidential.",
          zh: "我们以严谨与谨慎处理您的数据：报表准确，信息严格保密，并以高标准保障安全。",
        }[language],
      },
      {
        title: {
          id: "Local Tax Expertise",
          en: "Local Tax Expertise",
          zh: "本地税务专业能力",
        }[language],
        desc: {
          id: "Peraturan pajak Indonesia kompleks dan terus berubah. Tim ahli pajak kami selalu mengikuti update terbaru agar bisnis Anda tetap patuh dan siap menghadapi masa pelaporan.",
          en: "Indonesia’s tax rules can be tricky and change often. Our local experts stay up-to-date so your company remains compliant and stress-free.",
          zh: "印尼税务规则复杂且更新频繁。我们的本地专家持续跟进最新政策，让企业合规更轻松。",
        }[language],
      },
      {
        title: {
          id: "End-to-End Financial Services",
          en: "End-to-End Financial Services",
          zh: "一站式财务服务",
        }[language],
        desc: {
          id: "Dari pembukuan, payroll, hingga pajak dan administrasi perusahaan — kami tangani semuanya. Anda fokus mengembangkan bisnis, kami yang urus proses di belakang layar.",
          en: "From bookkeeping and payroll to tax filing and corporate administration — we handle it all. Focus on growth while we take care of the back office.",
          zh: "从记账、薪资到税务与公司行政，我们都能覆盖，让您专注增长，我们负责后台。",
        }[language],
      },
      {
        title: {
          id: "Support for Foreign-Owned Companies (PMA)",
          en: "Support for Foreign-Owned Companies (PMA)",
          zh: "外资公司（PMA）支持",
        }[language],
        desc: {
          id: "Menjalankan perusahaan PMA di Indonesia butuh pemahaman aturan lokal. Kami berpengalaman mendampingi perusahaan asing agar proses compliance berjalan lancar dan tepat.",
          en: "Running a PMA business in Indonesia requires local compliance know-how. We guide foreign-owned companies through processes smoothly and correctly.",
          zh: "在印尼经营 PMA 需要熟悉当地合规流程。我们具备经验，帮助外资企业顺利落地与运营。",
        }[language],
      },
      {
        title: {
          id: "Trilingual Support — English, Bahasa Indonesia, Mandarin",
          en: "Trilingual Support — English, Bahasa Indonesia, Mandarin",
          zh: "三语支持 — 英语、印尼语、中文",
        }[language],
        desc: {
          id: "Komunikasi yang jelas membuat semuanya lebih mudah. Tim kami trilingual sehingga Anda bisa berkomunikasi nyaman tanpa miskomunikasi.",
          en: "Clear communication makes everything easier. Our trilingual team helps bridge language gaps so nothing gets lost in translation.",
          zh: "清晰沟通让流程更顺畅。我们的三语团队可有效减少语言误差，让合作更安心。",
        }[language],
      },
      {
        title: {
          id: "Affordable & Transparent Pricing",
          en: "Affordable & Transparent Pricing",
          zh: "价格透明且可负担",
        }[language],
        desc: {
          id: "Tanpa biaya tersembunyi. Harga jelas sejak awal — sederhana, terjangkau, dan transparan, sehingga Anda selalu tahu apa yang Anda bayar.",
          en: "No hidden fees, no surprises — just honest and upfront pricing. You always know what you’re paying for.",
          zh: "无隐藏费用、无意外加价。收费清晰透明，让您始终清楚支出内容。",
        }[language],
      },
    ],
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
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1b1f6a]/30 via-transparent to-[#1b1f6a]/20" />
            </div>
          ))}

          <div className="relative z-10 flex h-full items-center justify-center text-center animate-fade-in">
            <div className="container-page">
              <div className="mx-auto max-w-4xl px-4">
                {/* Company Name */}
                <h1 className="text-base sm:text-lg lg:text-xl font-semibold leading-tight text-white mb-4">
                  TJAHYADI CONSULTING
                </h1>

                {/* Main Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white mb-2">
                  {heroContent.headline}
                </h2>

                {/* Member of IKPI */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
                    {heroContent.memberOf}
                  </span>
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
                    className="flex items-center justify-center rounded-full bg-[#1b1f6a] hover:bg-[#141648] text-white text-sm sm:text-base font-bold px-6 py-3 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {serviceLabels.tax}
                  </a>
                  <a
                    href="#payroll"
                    className="flex items-center justify-center rounded-full bg-[#1b1f6a] hover:bg-[#141648] text-white text-sm sm:text-base font-bold px-6 py-3 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {serviceLabels.payroll}
                  </a>
                  <a
                    href="#accounting"
                    className="flex items-center justify-center rounded-full bg-[#1b1f6a] hover:bg-[#141648] text-white text-sm sm:text-base font-bold px-6 py-3 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {serviceLabels.accounting}
                  </a>
                  <a
                    href="#legal"
                    className="flex items-center justify-center rounded-full bg-[#1b1f6a] hover:bg-[#141648] text-white text-sm sm:text-base font-bold px-6 py-3 transition-all duration-300 hover:scale-105 shadow-lg"
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

        {/* About (after Hero) */}
        <section id="about" className="relative bg-white py-20">
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#1b1f6a]/5 blur-3xl" />
          <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-[#1b1f6a]/5 blur-3xl" />
          <div className="container-page relative">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="group overflow-hidden rounded-2xl rounded-br-[84px] bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg ring-1 ring-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                <img
                  src="/hero-1.jpg"
                  alt={aboutContent.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-[#1b1f6a]" />
                  <span className="tracking-wide">{aboutContent.badge}</span>
                </div>

                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                  {aboutContent.titlePrefix}{" "}
                  <span className="text-[#1b1f6a]">
                    {aboutContent.titleBrand}
                  </span>
                </h2>

                <div className="mt-6 space-y-6 text-slate-600">
                  <p className="leading-relaxed">
                    <span className="float-left mr-3 mt-1 text-5xl font-extrabold leading-none text-[#1b1f6a]">
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
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1b1f6a] px-8 py-3.5 text-sm font-extrabold tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-[#141648] hover:shadow-xl hover:shadow-[#1b1f6a]/30 hover:scale-105"
                  >
                    {aboutContent.button}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services (after About) */}
        <section
          id="services"
          className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(27,31,106,0.03),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(27,31,106,0.03),transparent_50%)]" />
          <div className="container-page relative">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span className="h-2 w-2 rounded-full bg-[#1b1f6a]" />
                <span className="tracking-wide">
                  💼 {servicesContent.badge}
                </span>
              </div>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {servicesContent.titleA}{" "}
                <span className="text-[#1b1f6a]">{servicesContent.titleB}</span>
              </h2>
              <p className="mt-4 max-w-3xl text-slate-600">
                {servicesContent.subtitle}
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  id: "tax",
                  title: serviceLabels.tax,
                  desc: {
                    id: "Kepatuhan, pelaporan, perencanaan, audit, dan sengketa.",
                    en: "Compliance, filing, planning, audits, and disputes.",
                    zh: "合规、申报、筹划、稽核与争议处理。",
                  }[language],
                },
                {
                  id: "accounting",
                  title: serviceLabels.accounting,
                  desc: {
                    id: "Pembukuan, laporan, management accounts, persiapan audit.",
                    en: "Bookkeeping, reporting, management accounts, audit prep.",
                    zh: "记账、报表、管理报表与审计准备。",
                  }[language],
                },
                {
                  id: "payroll",
                  title: serviceLabels.payroll,
                  desc: {
                    id: "Penggajian, PPh 21, BPJS, payslip, data aman.",
                    en: "Payroll, PPh 21, BPJS, payslips, secure data.",
                    zh: "薪资、PPh 21、BPJS、工资单与数据安全。",
                  }[language],
                },
                {
                  id: "legal",
                  title: serviceLabels.legal,
                  desc: {
                    id: "Pendirian, perizinan, dokumen, perubahan struktur, compliance.",
                    en: "Registration, licensing, documents, changes, compliance.",
                    zh: "设立、许可、文件、变更与合规申报。",
                  }[language],
                },
              ].map((card) => (
                <a
                  key={card.id}
                  href={`#${card.id}`}
                  className="group relative block rounded-2xl bg-gradient-to-br from-[#1b1f6a]/25 via-[#1b1f6a]/10 to-transparent p-[2px] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1b1f6a]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1f6a]/40 focus-visible:ring-offset-2"
                >
                  <div className="rounded-2xl bg-white p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1b1f6a]/15 to-[#1b1f6a]/5 ring-2 ring-[#1b1f6a]/20 shadow-sm transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#1b1f6a] group-hover:to-[#2f36b0] group-hover:ring-[#1b1f6a]/40 group-hover:shadow-md group-hover:scale-110">
                          <span className="transition-all duration-500 group-hover:scale-100 group-hover:text-white">
                            <ServiceIcon kind={card.id} />
                          </span>
                        </div>
                        <div className="text-xs font-black tracking-[0.25em] text-[#1b1f6a]">
                          SERVICE
                        </div>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 ring-1 ring-slate-200 transition duration-300 group-hover:bg-[#1b1f6a]/5 group-hover:ring-[#1b1f6a]/20">
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          aria-hidden="true"
                          className="text-slate-500 transition duration-300 group-hover:translate-x-0.5 group-hover:text-[#1b1f6a]"
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

                    <div className="mt-4 text-lg font-extrabold text-slate-900 transition duration-300 group-hover:text-[#1b1f6a]">
                      {card.title}
                    </div>

                    <div className="mt-2 text-sm leading-relaxed text-slate-600">
                      {card.desc}
                    </div>

                    <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent transition duration-300 group-hover:via-[#1b1f6a]/25" />

                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition duration-300 group-hover:text-[#1b1f6a]">
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

            <div className="mt-12 grid gap-6">
              {servicesContent.details.map((s) => (
                <section
                  key={s.key}
                  id={s.key}
                  className="group scroll-mt-28 relative rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-500 hover:shadow-xl hover:shadow-[#1b1f6a]/5 hover:border-[#1b1f6a]/20"
                >
                  <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-[#1b1f6a] via-[#1b1f6a]/50 to-transparent rounded-r-full transition-all duration-500 group-hover:w-1.5" />
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-3 text-sm text-slate-500">
                        <span className="h-2 w-2 rounded-full bg-[#1b1f6a]" />
                        <span className="font-black tracking-[0.25em] text-[#1b1f6a]">
                          {s.title}
                        </span>
                      </div>
                      <div className="mt-4 space-y-4 text-slate-700">
                        {s.paragraphs.map((p) => (
                          <p key={p} className="leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                      <div className="mt-5 rounded-2xl bg-[#1b1f6a]/5 p-4 text-sm font-semibold text-[#1b1f6a]">
                        {servicesContent.ctaPrefix} {s.tagline}
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center justify-start lg:justify-end">
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1b1f6a] to-[#2f36b0] px-7 py-3.5 text-sm font-extrabold tracking-wide text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#1b1f6a]/40 hover:scale-105"
                      >
                        {language === "id"
                          ? "KONSULTASI"
                          : language === "en"
                            ? "CONSULT"
                            : "咨询"}
                      </a>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        {/* Advantage / Why Choose Us */}
        <section
          id="advantage"
          className="relative bg-gradient-to-b from-white via-slate-50/30 to-white py-16 sm:py-20 overflow-hidden"
        >
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#1b1f6a]/5 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-[#1b1f6a]/5 blur-3xl" />
          <div className="container-page relative">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span className="h-2 w-2 rounded-full bg-[#1b1f6a]" />
                <span className="tracking-wide">
                  🌟 {advantageContent.badge}
                </span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {advantageContent.titleA}{" "}
                <span className="text-[#1b1f6a]">
                  {advantageContent.titleB}
                </span>
              </h2>
              <p className="mt-4 max-w-3xl text-slate-600">
                {advantageContent.subtitle}
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {advantageContent.items.map((item, idx) => (
                <div
                  key={item.title}
                  className="group relative rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/50 to-white p-8 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1b1f6a]/10 hover:border-[#1b1f6a]/30"
                >
                  <div className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1b1f6a]/10 to-[#1b1f6a]/5 text-4xl font-black text-[#1b1f6a]/20 ring-4 ring-white transition-all duration-500 group-hover:from-[#1b1f6a]/20 group-hover:to-[#1b1f6a]/10 group-hover:text-[#1b1f6a]/30 group-hover:scale-110">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="text-xs font-black tracking-[0.25em] text-[#1b1f6a]">
                    {language === "id"
                      ? "ALASAN"
                      : language === "en"
                        ? "WHY"
                        : "理由"}
                  </div>
                  <div className="mt-3 text-lg font-extrabold text-slate-900">
                    {item.title}
                  </div>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Official Partners */}
        <section id="partners" className="bg-white py-16">
          <div className="container-page">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span className="h-2 w-2 rounded-full bg-[#1b1f6a]" />
                <span className="tracking-wide">{partnerContent.badge}</span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {partnerContent.titleA}{" "}
                <span className="text-[#1b1f6a]">{partnerContent.titleB}</span>
              </h2>
              <p className="mt-4 max-w-3xl text-slate-600">
                {partnerContent.subtitle}
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {officialPartners.map((p) => (
                <div
                  key={p.name}
                  className="group flex items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 shadow-md transition-all duration-500 hover:shadow-xl hover:shadow-[#1b1f6a]/5 hover:border-[#1b1f6a]/20 hover:-translate-y-1"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="max-h-20 w-auto sm:max-h-24 transition-all duration-500 group-hover:scale-110"
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
                <span className="h-2 w-2 rounded-full bg-[#1b1f6a]" />
                <span className="tracking-wide">{portfolioContent.badge}</span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {portfolioContent.titleA}{" "}
                <span className="text-[#1b1f6a]">
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
                    className={`group flex h-24 w-52 items-center justify-center rounded-2xl bg-gradient-to-br ${c.tone} ring-1 ring-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:ring-[#1b1f6a]/30 hover:shadow-lg`}
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
        <section
          id="testimonials"
          className="relative bg-gradient-to-br from-[#1b1f6a] via-[#1b1f6a] to-[#2f36b0] py-20 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="container-page relative">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <span className="h-2 w-2 rounded-full bg-white" />
                <span className="tracking-wide">
                  {testimonialsContent.badge}
                </span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                {testimonialsContent.titleA}{" "}
                <span className="text-white">{testimonialsContent.titleB}</span>{" "}
                {testimonialsContent.titleC}
              </h2>
              <p className="mt-4 max-w-3xl text-white/75">
                {testimonialsContent.subtitle}
              </p>
            </div>

            <div className="mt-12 relative mx-auto max-w-5xl">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-white/15 via-white/5 to-transparent blur-xl" />

              <div className="rounded-3xl border border-white/20 bg-white/10 px-6 py-10 shadow-2xl backdrop-blur-sm sm:px-10 ring-1 ring-white/10">
                <div className="mx-auto flex max-w-4xl flex-col items-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-white to-slate-50 ring-4 ring-white/30 shadow-xl">
                    <div className="text-xl font-black text-[#1b1f6a]">
                      {currentTestimonial.company.slice(0, 1).toUpperCase()}
                    </div>
                  </div>

                  <p className="mt-8 text-center text-lg italic leading-relaxed text-white/90 sm:text-xl">
                    “{currentTestimonial.quote}”
                  </p>

                  <div className="mt-8 text-center">
                    <div className="text-white text-lg font-extrabold">
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
                  <span className="h-2 w-2 rounded-full bg-[#1b1f6a]" />
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
                  <span className="text-[#1b1f6a]">
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
                  <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/50 p-5 shadow-sm ring-1 ring-slate-100">
                    <div className="text-xs font-black tracking-[0.25em] text-[#1b1f6a]">
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
                    className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/50 p-5 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1b1f6a]/10 hover:border-[#1b1f6a]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1f6a]/40 focus-visible:ring-offset-2"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-black tracking-[0.25em] text-[#1b1f6a]">
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
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#1b1f6a]/10 to-[#1b1f6a]/5 text-[#1b1f6a] ring-1 ring-[#1b1f6a]/20 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#1b1f6a] group-hover:to-[#2f36b0] group-hover:text-white group-hover:scale-110 group-hover:shadow-md">
                        →
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-md ring-1 ring-slate-100">
                <div className="text-xs font-black tracking-[0.25em] text-[#1b1f6a]">
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
        <section className="relative bg-gradient-to-r from-[#1b1f6a] via-[#1b1f6a] to-[#2f36b0] py-16 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
          <div className="container-page relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
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
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-extrabold tracking-wide text-[#1b1f6a] shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-105 hover:bg-white/95 hover:shadow-2xl hover:shadow-white/30"
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
