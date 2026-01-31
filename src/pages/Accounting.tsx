import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import SectionBadge from "../components/SectionBadge";
import type { LanguageProps } from "../types";

// Icons for benefits
const BenefitIcons = {
  budgeting: (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  cashManagement: (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  ),
  performance: (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 3v18h18" />
      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
  ),
  efficiency: (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
};

interface BenefitCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  isExpanded?: boolean;
  onToggle?: () => void;
}

function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b1f6a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex gap-6">
        {icon && (
          <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-xl bg-[#1b1f6a]/10 text-[#1b1f6a] group-hover:bg-[#1b1f6a] group-hover:text-white transition-all duration-300">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#1b1f6a] transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Accounting({
  language,
  onLanguageChange,
}: LanguageProps) {
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
    id: "Halo Tjahyadi Consulting, saya ingin konsultasi mengenai layanan Accounting.",
    en: "Hello Tjahyadi Consulting, I'd like to consult about Accounting services.",
    zh: "你好，我想咨询会计服务。",
  }[language];
  const whatsAppHref = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(whatsAppMessage)}`;

  const content = {
    heroTitle: { id: "Accounting", en: "Accounting", zh: "会计" }[language],

    // Partner Section
    partnerBadge: { id: "Accounting", en: "Accounting", zh: "会计" }[language],
    partnerTitle: { id: "Authorized", en: "Authorized", zh: "授权" }[language],
    partnerHighlight: { id: "Partner", en: "Partner", zh: "合作伙伴" }[
      language
    ],
    partnerDesc: {
      id: "Kami berpengalaman dalam berbagai sistem akuntansi dan merupakan authorized partner dari salah satu software akuntansi terkemuka di Indonesia (Jurnal.id) dan software akuntansi terkemuka dunia (Xero.id).",
      en: "We are experienced in various accounting systems and are in fact an authorized partner in one of the leading accounting Software in Indonesia (Jurnal.id) and leading accounting software worldwide (Xero.id).",
      zh: "我们在各种会计系统方面经验丰富，实际上是印度尼西亚领先的会计软件（Jurnal.id）和全球领先的会计软件（Xero.id）的授权合作伙伴。",
    }[language],

    // Bookkeeping Section
    bookkeepingBadge: { id: "Accounting", en: "Accounting", zh: "会计" }[
      language
    ],
    bookkeepingTitle: { id: "Bookkeeping", en: "Bookkeeping", zh: "簿记" }[
      language
    ],
    bookkeepingHighlight: { id: "Accounting", en: "Accounting", zh: "会计" }[
      language
    ],
    bookkeepingSubtitle: {
      id: "Pentingnya Bookkeeping Accounting untuk Usaha Kecil dan Menengah",
      en: "The Importance of Bookkeeping Accounting for Small to Medium Businesses",
      zh: "簿记会计对中小企业的重要性",
    }[language],
    bookkeepingDesc: {
      id: "Kami memahami bahwa pembukuan dan akuntansi mungkin terlihat membuang waktu bagi sebagian besar pemilik usaha kecil menengah, tetapi sebenarnya ini adalah faktor penting yang dapat menentukan keberhasilan atau kegagalan bisnis Anda. Berikut manfaat memiliki kami sebagai akuntan dan pembukuan Anda serta memiliki laporan keuangan yang tepat waktu dan akurat.",
      en: "We understand that bookkeeping and accounting may look like a time waster to most small to medium business owners, but it is a silent factor that can either make or break your business. Here are the benefits of having us as your bookkeeper and accountants and to have timely and accurate financial statements.",
      zh: "我们理解，对于大多数中小企业主来说，簿记和会计可能看起来是浪费时间，但这是一个可以成就或毁掉您业务的重要因素。以下是让我们成为您的簿记员和会计师，并获得及时准确的财务报表的好处。",
    }[language],

    benefits: [
      {
        icon: BenefitIcons.budgeting,
        title: { id: "Penganggaran", en: "Budgeting", zh: "预算" }[language],
        desc: {
          id: "Penganggaran dan peramalan bisnis Anda hampir tidak mungkin tanpa pembukuan dan akuntansi. Pembukuan dan akuntansi akan membantu Anda membuat rencana untuk bisnis, seperti pembelian di masa depan, pengeluaran, dan bahkan ekspansi.",
          en: "Budgeting and forecasting your business is almost impossible without bookkeeping and accounting. Bookkeeping and accounting will help you make plan for your business, such as future purchases, expenses and even expansions.",
          zh: "没有簿记和会计，预算和预测您的业务几乎是不可能的。簿记和会计将帮助您为业务制定计划，如未来的购买、支出甚至扩张。",
        }[language],
      },
      {
        icon: BenefitIcons.cashManagement,
        title: {
          id: "Manajemen Kas yang Tepat",
          en: "Proper Cash Management",
          zh: "适当的现金管理",
        }[language],
        desc: {
          id: "Kita semua tahu pentingnya memiliki catatan yang tepat waktu dan akurat untuk mendukung pembayaran, terutama yang berkaitan dengan pajak. Kelalaian dalam hal ini dapat menimbulkan ancaman finansial yang signifikan bagi bisnis. Pembukuan dan akuntansi juga akan membantu Anda dalam merencanakan arus kas dan mengelola pembayaran seperti pajak, tagihan, pinjaman, dan sebagainya.",
          en: "We all know the importance of having a timely and accurate record to support payment, especially tax related. Any negligence of doing so may impose significant financial threat to the business. Bookkeeping and accounting will also help you in planning your cash flow and manage your future payments such as taxes, bills, loans, and so on.",
          zh: "我们都知道拥有及时准确的记录来支持付款的重要性，特别是与税务相关的。任何疏忽都可能对业务造成重大财务威胁。簿记和会计还将帮助您规划现金流并管理未来的付款，如税款、账单、贷款等。",
        }[language],
      },
      {
        icon: BenefitIcons.performance,
        title: {
          id: "Pemantauan Kinerja dan Penetapan Tujuan",
          en: "Performance Monitoring And Goal",
          zh: "绩效监控和目标设定",
        }[language],
        desc: {
          id: "Pembukuan dan akuntansi yang teratur akan menghasilkan laporan yang akan membantu Anda menganalisis apakah bisnis Anda stagnan, menurun, atau berkembang. Ini juga akan membantu Anda menetapkan tujuan jangka pendek dan jangka panjang.",
          en: "Regular bookkeeping and accounting will produce reports that will help you to analyze whether your business is stagnant, depreciating or growing. It will also help you to set both your short- and long-term goals.",
          zh: "定期的簿记和会计将产生报告，帮助您分析业务是停滞、贬值还是增长。这也将帮助您设定短期和长期目标。",
        }[language],
      },
      {
        icon: BenefitIcons.efficiency,
        title: {
          id: "Efektivitas dan Efisiensi",
          en: "Effectiveness And Efficiency",
          zh: "有效性和效率",
        }[language],
        desc: {
          id: "Akan lebih efektif dan efisien dalam mencatat transaksi seiring berjalannya waktu, daripada terburu-buru dan mengacak-acak dokumen saat musim pajak. Kami percaya bahwa kami dapat membantu Anda menyediakan laporan yang andal secara tepat waktu.",
          en: "It will be more effective and efficient in recording transactions as you go, instead of rushing in and scrambling documents during the tax season. We believe that we can help you to provide reliable reports in this timely manner.",
          zh: "随时记录交易会更有效和高效，而不是在税季匆忙整理文件。我们相信我们可以帮助您及时提供可靠的报告。",
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

        {/* Authorized Partner Section */}
        <section className="relative py-20 overflow-hidden bg-white">
          <div className="container-page relative z-10">
            <SectionBadge text={content.partnerBadge} className="mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8">
              <span className="text-[#7cb342]">{content.partnerTitle}</span>{" "}
              {content.partnerHighlight}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mb-12">
              {content.partnerDesc}
            </p>

            {/* Partner Logos */}
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                  jurnal
                </div>
                <div className="bg-[#7cb342] text-white px-3 py-1.5 rounded-lg text-sm font-semibold">
                  Authorized
                  <br />
                  Partner
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
                <div className="bg-[#13B5EA] text-white px-4 py-2 rounded-lg font-bold text-lg">
                  xero
                </div>
                <div className="bg-[#13B5EA] text-white px-3 py-1.5 rounded-lg text-sm font-semibold">
                  CERTIFIED
                  <br />
                  ADVISOR
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bookkeeping Section - Parallax Style */}
        <section className="relative overflow-hidden bg-slate-50">
          <div className="container-page relative z-10">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left Content - Sticky */}
              <div className="lg:col-span-2 lg:py-20">
                <div className="lg:sticky lg:top-28 lg:h-fit">
                  <SectionBadge
                    text={content.bookkeepingBadge}
                    className="mb-4"
                  />
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                    {content.bookkeepingTitle}{" "}
                    <span className="text-[#7cb342]">
                      {content.bookkeepingHighlight}
                    </span>
                  </h2>
                  <h3 className="text-xl font-semibold text-slate-700 mb-6">
                    {content.bookkeepingSubtitle}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {content.bookkeepingDesc}
                  </p>

                  {/* Arrow indicator for scroll */}
                  <div className="hidden lg:flex mt-8 items-center gap-2 text-[#7cb342]">
                    <svg
                      className="h-6 w-6 animate-bounce rotate-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                    <span className="text-sm font-medium">
                      {
                        {
                          id: "Scroll untuk lihat manfaatnya",
                          en: "Scroll to see the benefits",
                          zh: "滚动查看好处",
                        }[language]
                      }
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Benefits - Scrollable Cards */}
              <div className="lg:col-span-3 py-20">
                <div className="space-y-8">
                  {content.benefits.map((benefit, index) => (
                    <BenefitCard
                      key={index}
                      title={benefit.title}
                      description={benefit.desc}
                      icon={benefit.icon}
                    />
                  ))}
                </div>
              </div>
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
                  id: "Siap Untuk Mulai?",
                  en: "Ready To Start?",
                  zh: "准备开始了吗？",
                }[language]
              }
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {
                {
                  id: "Hubungi kami sekarang untuk konsultasi gratis tentang kebutuhan akuntansi bisnis Anda.",
                  en: "Contact us now for a free consultation about your business accounting needs.",
                  zh: "立即联系我们，免费咨询您的企业会计需求。",
                }[language]
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white hover:bg-white hover:text-[#1b1f6a] transition-all duration-300"
              >
                {
                  { id: "Hubungi Kami", en: "Contact Us", zh: "联系我们" }[
                    language
                  ]
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
