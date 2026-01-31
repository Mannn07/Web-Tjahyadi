import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import SectionBadge from "../components/SectionBadge";
import FeatureGrid from "../components/FeatureGrid";
import type { LanguageProps } from "../types";

// Icons for features
const FeatureIcons = {
  focus: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  accuracy: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  ),
  confidential: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M9 12l2 2 4-4" />
      <path d="M12 3c2.5 2.2 5.2 3.1 7.5 3.5V13c0 4.2-3 7.4-7.5 8.9C7.5 20.4 4.5 17.2 4.5 13V6.5c2.3-.4 5-1.3 7.5-3.5Z" />
    </svg>
  ),
  efficient: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  upToDate: (
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
  experts: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      <path d="M12 4l1.5 1.5L12 7l-1.5-1.5L12 4z" fill="currentColor" />
    </svg>
  ),
};

export default function Payroll({ language, onLanguageChange }: LanguageProps) {
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
    id: "Halo Tjahyadi Consulting, saya ingin konsultasi mengenai layanan Payroll.",
    en: "Hello Tjahyadi Consulting, I'd like to consult about Payroll services.",
    zh: "你好，我想咨询薪资服务。",
  }[language];
  const whatsAppHref = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(whatsAppMessage)}`;

  const content = {
    heroTitle: { id: "Payroll", en: "Payroll", zh: "薪资" }[language],

    // Outsourcing Section
    outsourcingBadge: { id: "Payroll", en: "Payroll", zh: "薪资" }[language],
    outsourcingTitle: { id: "Payroll", en: "Payroll", zh: "薪资" }[language],
    outsourcingHighlight: { id: "Outsourcing", en: "Outsourcing", zh: "外包" }[
      language
    ],
    outsourcingDesc: {
      id: "Payroll merupakan proses wajib bulanan di setiap perusahaan – dan prosesnya bisa rumit terutama jika dilakukan oleh personil yang kurang berpengalaman. Dengan keahlian dan pengalaman kami, kami memastikan perhitungan dan distribusi gaji Anda akurat dan efisien. Manfaat lain dari outsourcing payroll adalah menghindari kebocoran data sensitif, karena kami menjunjung tinggi kerahasiaan sebagai prioritas utama.",
      en: "Payroll is a mandatory monthly process in any company – and the process can be tricky and complicated especially if it is performed with inexperienced personnel. With our expertise and experience, we will make sure that the calculations and distributions of your payroll are accurate and efficient. The other benefit of payroll outsourcing is also to avoid any sensitive data leak, as we will uphold your confidentiality as our priority.",
      zh: "薪资是每个公司每月必须进行的流程——如果由缺乏经验的人员执行，这个过程可能会很棘手和复杂。凭借我们的专业知识和经验，我们将确保您的薪资计算和分发准确高效。薪资外包的另一个好处是避免敏感数据泄露，因为我们将保密作为首要任务。",
    }[language],

    // Services Section
    servicesBadge: { id: "Payroll", en: "Payroll", zh: "薪资" }[language],
    servicesTitle: { id: "Layanan", en: "Service", zh: "服务" }[language],
    servicesHighlight: {
      id: "Yang Kami Tawarkan",
      en: "That We Offer",
      zh: "内容",
    }[language],
    services: [
      {
        id: "Penyesuaian sistem dasar dan metode perhitungan gaji karyawan di perusahaan",
        en: "Adjustment of basic system and method of calculating salary of employee in company",
        zh: "调整公司员工工资计算的基本系统和方法",
      }[language] as string,
      {
        id: "Menetapkan prosedur dan agenda kerja sesuai dengan deadline pembayaran gaji",
        en: "Establish procedures and work agenda with respect to deadline for salary payments",
        zh: "根据工资支付截止日期建立程序和工作议程",
      }[language] as string,
      {
        id: "Membuat perhitungan payroll, BPJS Sosial dan pajak penghasilan untuk setiap karyawan",
        en: "Make payroll calculations, BPJS Social Security and income tax for each employee",
        zh: "为每位员工进行工资计算、BPJS社会保障和所得税",
      }[language] as string,
      {
        id: "Menyiapkan laporan bulanan gaji dan tunjangan yang akan dibayarkan kepada setiap karyawan",
        en: "Prepare monthly reports of salary and benefits to be paid to each employee",
        zh: "准备每月支付给每位员工的工资和福利报告",
      }[language] as string,
      {
        id: "Membayar gaji kepada setiap karyawan",
        en: "Pay salary to each employee",
        zh: "向每位员工支付工资",
      }[language] as string,
      {
        id: "Menyiapkan laporan pajak bulanan (PPh Pasal 21)",
        en: "Prepare monthly tax report (PPh Article 21)",
        zh: "准备月度税务报告（PPh第21条）",
      }[language] as string,
      {
        id: "Menyiapkan laporan BPJS bulanan",
        en: "Prepare monthly BPJS Social Security report",
        zh: "准备月度BPJS社会保障报告",
      }[language] as string,
    ],

    // Main Points Section
    pointsBadge: { id: "Payroll", en: "Payroll", zh: "薪资" }[language],
    pointsTitle: { id: "Poin", en: "Main", zh: "主要" }[language],
    pointsHighlight: { id: "Utama", en: "Points", zh: "要点" }[language],
    points: [
      {
        icon: FeatureIcons.focus,
        title: { id: "Fokus", en: "Focus", zh: "专注" }[language],
        desc: {
          id: "Fokus pada fungsi utama perusahaan",
          en: "Focus to the main function of the company",
          zh: "专注于公司的主要职能",
        }[language],
      },
      {
        icon: FeatureIcons.accuracy,
        title: { id: "Akurasi", en: "Accuracy", zh: "准确性" }[language],
        desc: {
          id: "Meminimalkan kesalahan",
          en: "Minimize mistake",
          zh: "减少错误",
        }[language],
      },
      {
        icon: FeatureIcons.confidential,
        title: { id: "Kerahasiaan", en: "Confidentially", zh: "保密性" }[
          language
        ],
        desc: {
          id: "Kerahasiaan (dilakukan oleh pihak ketiga)",
          en: "Confidentially (done by a third party)",
          zh: "保密性（由第三方完成）",
        }[language],
      },
      {
        icon: FeatureIcons.efficient,
        title: { id: "Efisien", en: "Efficient", zh: "高效" }[language],
        desc: {
          id: "Mengurangi biaya overhead perusahaan",
          en: "Reduce company overhead costs",
          zh: "降低公司管理费用",
        }[language],
      },
      {
        icon: FeatureIcons.upToDate,
        title: { id: "Terkini", en: "Up To Date", zh: "最新" }[language],
        desc: {
          id: "Program yang mengikuti peraturan terbaru",
          en: "Programs that update with the latest regulations",
          zh: "符合最新法规的程序",
        }[language],
      },
      {
        icon: FeatureIcons.experts,
        title: { id: "Ahli", en: "Experts", zh: "专家" }[language],
        desc: {
          id: "Tim ahli di bidang payroll",
          en: "A team of experts in the field of payroll",
          zh: "薪资领域的专家团队",
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

        {/* Payroll Outsourcing Section */}
        <section className="relative py-20 overflow-hidden bg-white">
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="payroll-dots"
                  x="0"
                  y="0"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1" fill="#1b1f6a" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#payroll-dots)" />
            </svg>
          </div>

          <div className="container-page relative z-10">
            <SectionBadge text={content.outsourcingBadge} className="mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8">
              {content.outsourcingTitle}{" "}
              <span className="text-[#7cb342]">
                {content.outsourcingHighlight}
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
              {content.outsourcingDesc}
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-20 overflow-hidden bg-slate-50">
          <div className="container-page relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionBadge text={content.servicesBadge} className="mb-4" />
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
                  {content.servicesTitle}{" "}
                  <span className="text-[#7cb342]">
                    {content.servicesHighlight}
                  </span>
                </h2>
                <ul className="space-y-4">
                  {content.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1.5">
                        <svg
                          className="h-5 w-5 text-[#7cb342]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 leading-relaxed">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#7cb342]/20 to-[#1b1f6a]/20 rounded-3xl blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/hero-1.jpg"
                    alt="Payroll team"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  {/* Decorative overlay */}
                  <div className="absolute top-4 right-4 w-24 h-24">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full text-[#7cb342]/30"
                    >
                      <circle cx="20" cy="20" r="8" fill="currentColor" />
                      <circle cx="50" cy="20" r="8" fill="currentColor" />
                      <circle cx="80" cy="20" r="8" fill="currentColor" />
                      <circle cx="20" cy="50" r="8" fill="currentColor" />
                      <circle cx="50" cy="50" r="8" fill="currentColor" />
                      <circle cx="80" cy="50" r="8" fill="currentColor" />
                      <circle cx="20" cy="80" r="8" fill="currentColor" />
                      <circle cx="50" cy="80" r="8" fill="currentColor" />
                      <circle cx="80" cy="80" r="8" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Points Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#1b1f6a] via-[#252a7a] to-[#1b1f6a]">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <img
              src="/hero-2.jpg"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="container-page relative z-10">
            <div className="text-center mb-12">
              <SectionBadge
                text={content.pointsBadge}
                className="justify-center mb-4 [&>span]:text-white/70 [&>span:first-child]:bg-[#7cb342]"
              />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                {content.pointsTitle}{" "}
                <span className="text-[#7cb342]">
                  {content.pointsHighlight}
                </span>
              </h2>
            </div>

            <FeatureGrid features={content.points} columns={3} />

            {/* CTA */}
            <div className="mt-16 text-center">
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
