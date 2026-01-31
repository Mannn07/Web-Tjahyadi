import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import SectionBadge from "../components/SectionBadge";
import ServiceCard from "../components/ServiceCard";
import type { LanguageProps } from "../types";

// Icons for legal services
const LegalIcons = {
  establishment: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
    </svg>
  ),
  licensing: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h10M7 12h6" />
      <path d="M14 16l2 2 4-4" />
    </svg>
  ),
  amendment: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  compliance: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  drafting: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8M16 17H8M10 9H8" />
    </svg>
  ),
  pma: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  visa: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <circle cx="8" cy="12" r="3" />
      <path d="M22 8H16M22 12H16M22 16H16" />
    </svg>
  ),
  dissolution: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 6h18M8 6V4h8v2" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  ),
};

export default function Legal({ language, onLanguageChange }: LanguageProps) {
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
    id: "Halo Tjahyadi Consulting, saya ingin konsultasi mengenai layanan Legal.",
    en: "Hello Tjahyadi Consulting, I'd like to consult about Legal services.",
    zh: "你好，我想咨询法律服务。",
  }[language];
  const whatsAppHref = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(whatsAppMessage)}`;

  const content = {
    heroTitle: { id: "Legal", en: "Legal", zh: "法律" }[language],

    // Intro Section
    introBadge: { id: "Layanan Legal", en: "Legal Services", zh: "法律服务" }[
      language
    ],
    introTitle: { id: "Legal &", en: "Legal &", zh: "法律与" }[language],
    introHighlight: {
      id: "Corporate Administration",
      en: "Corporate Administration",
      zh: "公司行政",
    }[language],
    introDesc: {
      id: "Selain angka, kami juga mendukung bisnis Anda melalui layanan legal dan kepatuhan perusahaan. Untuk investor asing dan perusahaan PMA, kami memastikan dokumen serta proses selaras dengan regulasi Indonesia.",
      en: "Beyond numbers, we also support your business with essential legal and corporate compliance services. For foreign investors and PMA companies, we make sure all legal documents and processes align with Indonesian regulations.",
      zh: "除了数字，我们还通过基本的法律和公司合规服务支持您的业务。对于外国投资者和PMA公司，我们确保所有法律文件和流程符合印度尼西亚法规。",
    }[language],

    // Services
    servicesBadge: { id: "Layanan Kami", en: "Our Services", zh: "我们的服务" }[
      language
    ],
    servicesTitle: { id: "Layanan", en: "Our", zh: "我们的" }[language],
    servicesHighlight: {
      id: "Yang Kami Tawarkan",
      en: "Legal Services",
      zh: "法律服务",
    }[language],
    services: [
      {
        key: "establishment",
        title: {
          id: "Pendirian Perusahaan",
          en: "Company Establishment",
          zh: "公司设立",
        }[language],
        desc: {
          id: "Pendirian PT, CV, dan bentuk badan usaha lainnya sesuai hukum Indonesia. Termasuk pengurusan akta pendirian dan SK Kemenkumham.",
          en: "Establishment of PT, CV, and other business entities according to Indonesian law. Including deed of establishment and Ministry of Law approval.",
          zh: "根据印度尼西亚法律设立PT、CV和其他商业实体。包括设立契约和法律部批准。",
        }[language],
      },
      {
        key: "licensing",
        title: {
          id: "Perizinan Usaha",
          en: "Business Licensing",
          zh: "商业许可",
        }[language],
        desc: {
          id: "Pengurusan NIB, izin usaha melalui OSS, dan perizinan khusus sesuai bidang usaha Anda.",
          en: "Processing of NIB, business permits through OSS, and special permits according to your business field.",
          zh: "通过OSS处理NIB、营业执照和根据您的业务领域的特殊许可证。",
        }[language],
      },
      {
        key: "amendment",
        title: {
          id: "Perubahan Anggaran Dasar",
          en: "Amendment of Articles",
          zh: "章程修订",
        }[language],
        desc: {
          id: "Perubahan struktur perusahaan, pengurus, pemegang saham, dan modal. Termasuk notifikasi ke instansi terkait.",
          en: "Changes in company structure, management, shareholders, and capital. Including notification to relevant authorities.",
          zh: "公司结构、管理层、股东和资本的变更。包括向相关部门通知。",
        }[language],
      },
      {
        key: "compliance",
        title: {
          id: "Kepatuhan Perusahaan",
          en: "Corporate Compliance",
          zh: "公司合规",
        }[language],
        desc: {
          id: "LKPM, laporan tahunan, dan pelaporan kepatuhan lainnya ke instansi pemerintah terkait.",
          en: "LKPM, annual reports, and other compliance reporting to relevant government agencies.",
          zh: "LKPM、年度报告和向相关政府机构的其他合规报告。",
        }[language],
      },
      {
        key: "drafting",
        title: {
          id: "Penyusunan Dokumen",
          en: "Document Drafting",
          zh: "文件起草",
        }[language],
        desc: {
          id: "Penyusunan kontrak, perjanjian kerja, dan dokumen legal lainnya sesuai kebutuhan bisnis.",
          en: "Drafting contracts, employment agreements, and other legal documents according to business needs.",
          zh: "根据业务需求起草合同、雇佣协议和其他法律文件。",
        }[language],
      },
      {
        key: "pma",
        title: {
          id: "Pendirian PMA",
          en: "PMA Establishment",
          zh: "PMA设立",
        }[language],
        desc: {
          id: "Layanan khusus untuk investor asing dalam mendirikan dan mengelola perusahaan PMA di Indonesia.",
          en: "Special services for foreign investors in establishing and managing PMA companies in Indonesia.",
          zh: "为外国投资者在印度尼西亚设立和管理PMA公司提供的特殊服务。",
        }[language],
      },
      {
        key: "visa",
        title: {
          id: "Visa & KITAS",
          en: "Visa & KITAS",
          zh: "签证和KITAS",
        }[language],
        desc: {
          id: "Pengurusan visa kerja, KITAS, dan izin tinggal lainnya untuk tenaga kerja asing.",
          en: "Processing work visas, KITAS, and other stay permits for foreign workers.",
          zh: "处理外国工人的工作签证、KITAS和其他居留许可。",
        }[language],
      },
      {
        key: "dissolution",
        title: {
          id: "Pembubaran Perusahaan",
          en: "Company Dissolution",
          zh: "公司解散",
        }[language],
        desc: {
          id: "Proses likuidasi dan pembubaran perusahaan sesuai prosedur hukum yang berlaku.",
          en: "Liquidation and dissolution process according to applicable legal procedures.",
          zh: "根据适用的法律程序进行清算和解散流程。",
        }[language],
      },
    ],

    // Why Choose Us
    whyBadge: { id: "Keunggulan", en: "Advantage", zh: "优势" }[language],
    whyTitle: { id: "Mengapa", en: "Why", zh: "为什么" }[language],
    whyHighlight: { id: "Memilih Kami", en: "Choose Us", zh: "选择我们" }[
      language
    ],
    whyItems: [
      {
        title: {
          id: "Tim Berpengalaman",
          en: "Experienced Team",
          zh: "经验丰富的团队",
        }[language],
        desc: {
          id: "Tim legal kami memiliki pengalaman luas dalam menangani berbagai jenis korporasi dan kepatuhan bisnis.",
          en: "Our legal team has extensive experience handling various types of corporations and business compliance.",
          zh: "我们的法律团队在处理各种类型的公司和业务合规方面拥有丰富的经验。",
        }[language],
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="h-12 w-12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
      {
        title: {
          id: "Layanan Terintegrasi",
          en: "Integrated Services",
          zh: "综合服务",
        }[language],
        desc: {
          id: "Layanan legal kami terintegrasi dengan layanan pajak dan akuntansi untuk solusi bisnis yang komprehensif.",
          en: "Our legal services are integrated with tax and accounting services for comprehensive business solutions.",
          zh: "我们的法律服务与税务和会计服务相结合，提供全面的业务解决方案。",
        }[language],
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="h-12 w-12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: {
          id: "Dukungan Trilingual",
          en: "Trilingual Support",
          zh: "三语支持",
        }[language],
        desc: {
          id: "Komunikasi dalam Bahasa Indonesia, Inggris, dan Mandarin untuk memudahkan klien internasional.",
          en: "Communication in Indonesian, English, and Mandarin to facilitate international clients.",
          zh: "使用印尼语、英语和中文进行沟通，方便国际客户。",
        }[language],
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="h-12 w-12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
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

        {/* Intro Section */}
        <section className="relative py-20 overflow-hidden bg-white">
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="legal-pattern"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M40 0L0 40M0 0L40 40"
                    stroke="#1b1f6a"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#legal-pattern)" />
            </svg>
          </div>

          <div className="container-page relative z-10">
            <div className="max-w-4xl">
              <SectionBadge text={content.introBadge} className="mb-4" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8">
                {content.introTitle}{" "}
                <span className="text-[#7cb342]">{content.introHighlight}</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {content.introDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-20 overflow-hidden bg-slate-50">
          <div className="container-page relative z-10">
            <div className="text-center mb-16">
              <SectionBadge
                text={content.servicesBadge}
                className="justify-center mb-4"
              />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                {content.servicesTitle}{" "}
                <span className="text-[#7cb342]">
                  {content.servicesHighlight}
                </span>
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {content.services.map((service) => (
                <ServiceCard
                  key={service.key}
                  title={service.title}
                  description={service.desc}
                  icon={LegalIcons[service.key as keyof typeof LegalIcons]}
                  variant="default"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-20 overflow-hidden bg-white">
          <div className="container-page relative z-10">
            <div className="text-center mb-16">
              <SectionBadge
                text={content.whyBadge}
                className="justify-center mb-4"
              />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                {content.whyTitle}{" "}
                <span className="text-[#7cb342]">{content.whyHighlight}</span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {content.whyItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7cb342]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />

                  <div className="relative z-10">
                    <div className="mb-6 text-[#7cb342] group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#1b1f6a] via-[#252a7a] to-[#1b1f6a]">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/hero-2.jpg"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="container-page relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              {
                {
                  id: "Stay compliant, stay confident",
                  en: "Stay compliant, stay confident",
                  zh: "保持合规，保持信心",
                }[language]
              }
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {
                {
                  id: "Kami urus paperwork-nya, Anda fokus pada bisnis Anda.",
                  en: "We'll handle the paperwork, you focus on your business.",
                  zh: "我们处理文书工作，您专注于您的业务。",
                }[language]
              }
            </p>
            <a
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#7cb342] px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-[#6a9a38] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
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
          </div>
        </section>
      </main>

      <Footer language={language} />
      <WhatsAppButton language={language} />
      <ScrollToTop show={showScrollTop} language={language} />
    </div>
  );
}
