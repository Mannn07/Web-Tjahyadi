import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import SectionBadge from "../components/SectionBadge";
import type { LanguageProps } from "../types";

// Icons for tax services
const TaxIcons = {
  monthly: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 2v4M16 2v4" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  ),
  corporate: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
    </svg>
  ),
  individual: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      <path d="M15 11l2 2 4-4" />
    </svg>
  ),
  advisory: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
      <path d="M12 2a10 10 0 0 1 10 10" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  review: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  audit: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
      <path d="M8 11h6M11 8v6" />
    </svg>
  ),
  litigation: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

export default function Tax({ language, onLanguageChange }: LanguageProps) {
  const [isSolidNav, setIsSolidNav] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSolidNav(window.scrollY > 24);
      setShowScrollTop(window.scrollY > 700);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsAppNumber = "6287808630658";
  const whatsAppMessage = {
    id: "Halo Tjahyadi Consulting, saya ingin konsultasi mengenai layanan Tax.",
    en: "Hello Tjahyadi Consulting, I'd like to consult about Tax services.",
    zh: "你好，我想咨询税务服务。",
  }[language];
  const whatsAppHref = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(whatsAppMessage)}`;

  const content = {
    heroTitle: { id: "Tax", en: "Tax", zh: "税务" }[language],
    badge: { id: "Layanan Pajak", en: "Tax Service", zh: "税务服务" }[language],
    mainTitle: {
      id: "Percayakan Kepada Kami",
      en: "Trust Us With",
      zh: "信赖我们处理",
    }[language],
    mainTitleHighlight: {
      id: "Semua Kebutuhan Pajak Anda",
      en: "All Your Tax Needs",
      zh: "您所有的税务需求",
    }[language],
    description: {
      id: "Kami menyediakan layanan perpajakan lengkap untuk membantu bisnis Anda tetap patuh terhadap peraturan perpajakan Indonesia. Tim ahli kami siap membantu dari perencanaan hingga pelaporan.",
      en: "We provide comprehensive tax services to help your business stay compliant with Indonesian tax regulations. Our expert team is ready to assist from planning to reporting.",
      zh: "我们提供全面的税务服务，帮助您的企业遵守印度尼西亚的税务法规。我们的专家团队随时准备从规划到申报为您提供帮助。",
    }[language],
    services: [
      {
        key: "monthly",
        title: {
          id: "Kepatuhan Pajak Bulanan",
          en: "Monthly Tax Compliance",
          zh: "每月税务合规",
        }[language],
        desc: {
          id: "Penanganan kewajiban pajak bulanan termasuk PPN, PPh 21, PPh 23, dan PPh 4(2). Pelaporan tepat waktu dan akurat.",
          en: "Handling monthly tax obligations including VAT, Income Tax 21, 23, and 4(2). Timely and accurate reporting.",
          zh: "处理月度税务义务，包括增值税、所得税21、23和4(2)。及时准确的申报。",
        }[language],
      },
      {
        key: "corporate",
        title: {
          id: "Pajak Penghasilan Badan",
          en: "Corporate Income Tax",
          zh: "企业所得税",
        }[language],
        desc: {
          id: "Perhitungan dan pelaporan SPT Tahunan Badan. Optimalisasi posisi pajak sesuai regulasi yang berlaku.",
          en: "Calculation and reporting of Annual Corporate Tax Return. Tax position optimization according to applicable regulations.",
          zh: "年度企业纳税申报表的计算和申报。根据适用法规优化税务状况。",
        }[language],
      },
      {
        key: "individual",
        title: {
          id: "Pajak Penghasilan Pribadi",
          en: "Individual Income Tax",
          zh: "个人所得税",
        }[language],
        desc: {
          id: "Penyusunan dan pelaporan SPT Tahunan Orang Pribadi. Konsultasi perencanaan pajak personal.",
          en: "Preparation and reporting of Individual Annual Tax Return. Personal tax planning consultation.",
          zh: "个人年度纳税申报表的准备和申报。个人税务规划咨询。",
        }[language],
      },
      {
        key: "advisory",
        title: {
          id: "Konsultasi Pajak",
          en: "Tax Advisory",
          zh: "税务咨询",
        }[language],
        desc: {
          id: "Konsultasi strategis untuk optimasi pajak dan kepatuhan. Analisis dampak perpajakan pada transaksi bisnis.",
          en: "Strategic consultation for tax optimization and compliance. Analysis of tax impact on business transactions.",
          zh: "税务优化和合规的战略咨询。分析税务对商业交易的影响。",
        }[language],
      },
      {
        key: "review",
        title: {
          id: "Review Pajak",
          en: "Tax Review",
          zh: "税务审查",
        }[language],
        desc: {
          id: "Evaluasi menyeluruh atas kewajiban perpajakan perusahaan. Identifikasi risiko dan peluang penghematan pajak.",
          en: "Comprehensive evaluation of company tax obligations. Identification of risks and tax saving opportunities.",
          zh: "全面评估公司税务义务。识别风险和节税机会。",
        }[language],
      },
      {
        key: "audit",
        title: {
          id: "Pendampingan Pemeriksaan & Restitusi",
          en: "Assistance on Tax Audit and Tax Refund",
          zh: "税务审计和退税协助",
        }[language],
        desc: {
          id: "Pendampingan profesional selama pemeriksaan pajak. Pengurusan proses restitusi pajak hingga selesai.",
          en: "Professional assistance during tax audits. Handling of tax refund process until completion.",
          zh: "税务审计期间的专业协助。处理退税流程直至完成。",
        }[language],
      },
      {
        key: "litigation",
        title: {
          id: "Sengketa Pajak",
          en: "Tax Litigation",
          zh: "税务诉讼",
        }[language],
        desc: {
          id: "Penanganan keberatan pajak, banding, dan gugatan. Representasi di Pengadilan Pajak dengan strategi yang tepat.",
          en: "Handling tax objections, appeals, and lawsuits. Representation at Tax Court with proper strategy.",
          zh: "处理税务异议、上诉和诉讼。在税务法院以适当策略进行代理。",
        }[language],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        isSolidNav={isSolidNav}
        language={language}
        onLanguageChange={onLanguageChange}
      />

      <main>
        <PageHero
          title={content.heroTitle}
          language={language}
          backgroundImage="/hero-2.jpg"
        />

        {/* Services Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="tax-grid"
                  x="0"
                  y="0"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 60 0 L 0 0 0 60"
                    fill="none"
                    stroke="#1b1f6a"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#tax-grid)" />
            </svg>
          </div>

          <div className="container-page relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <SectionBadge
                text={content.badge}
                className="justify-center mb-4"
              />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                {content.mainTitle}{" "}
                <span className="text-[#7cb342]">
                  {content.mainTitleHighlight}
                </span>
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                {content.description}
              </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {content.services.map((service) => (
                <ServiceCard
                  key={service.key}
                  title={service.title}
                  description={service.desc}
                  icon={TaxIcons[service.key as keyof typeof TaxIcons]}
                  variant="default"
                />
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#7cb342] px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-[#6a9a38] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {
                    {
                      id: "Konsultasi Sekarang",
                      en: "Consult Now",
                      zh: "立即咨询",
                    }[language]
                  }
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1b1f6a] px-8 py-4 text-lg font-bold text-[#1b1f6a] hover:bg-[#1b1f6a] hover:text-white transition-all duration-300"
                >
                  {
                    { id: "Hubungi Kami", en: "Contact Us", zh: "联系我们" }[
                      language
                    ]
                  }
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
      <WhatsAppButton language={language} />
      <ScrollToTop show={showScrollTop} language={language} />
    </div>
  );
}
