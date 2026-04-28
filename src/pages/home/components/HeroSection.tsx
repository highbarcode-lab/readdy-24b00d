import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />

      {/* Floating Accent Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 py-20 md:py-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Label */}
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100">
                <span className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full text-white/80 text-sm font-medium">
                  <i className="ri-barcode-line text-amber-400" />
                  산업용 바코드 전문가
                </span>
              </div>

              {/* Main Headline */}
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  산업용 바코드 시스템의
                  <br />
                  <span className="text-amber-400">완벽한 통합 솔루션</span>
                </h1>
              </div>

              {/* Subheadline */}
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300">
                <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
                  Zebra, Honeywell, Bixolon, TSC 프린터 전문 유지보수 및
                  맞춤형 라벨 소프트웨어 개발. 현장 경험으로 쌓은 전문성으로
                  귀사의 기술 워크플로우를 효율적으로 최적화합니다.
                </p>
              </div>

              {/* CTA Buttons }
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-400 flex flex-wrap gap-4">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base whitespace-nowrap cursor-pointer"
                >
                  {t('common:cta_consult')}
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="ri-arrow-right-line text-sm" />
                  </span>
                </button>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center gap-3 border border-white/40 hover:border-white/70 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-base whitespace-nowrap cursor-pointer"
                >
                  {t('common:cta_explore')}
                </button>
              </div>*/}

              {/* Shop Link */}
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-500">
                <a
                  href="https://highbarcode.co.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors duration-300"
                >
                  <i className="ri-store-2-line" />
                  쇼핑몰에서 제품 둘러보기
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Main Logo Display */}
                <div className="relative w-80 h-80 xl:w-96 xl:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl" />
                  <div className="absolute inset-4 bg-navy-800/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center">
                    <img
                      src="https://static.readdy.ai/image/24bb14c1d4e3d6d52685c73a70a1ff0d/26b101026ea801bc8c9dd064786afe6e.png"
                      alt="Highbarcode"
                      className="w-48 h-48 object-contain"
                    />
                  </div>

                  {/* Floating Cards */}
                  <div className="absolute -top-4 -right-4 bg-navy-700/90 backdrop-blur-sm border border-white/10 rounded-xl p-3 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                        <i className="ri-printer-line text-amber-400 text-sm" />
                      </div>
                      <span className="text-white text-xs font-medium">프린터 유지보수</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-navy-700/90 backdrop-blur-sm border border-white/10 rounded-xl p-3 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                        <i className="ri-code-box-line text-amber-400 text-sm" />
                      </div>
                      <span className="text-white text-xs font-medium">맞춤 소프트웨어</span>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -right-8 bg-navy-700/90 backdrop-blur-sm border border-white/10 rounded-xl p-3 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                        <i className="ri-shield-check-line text-amber-400 text-sm" />
                      </div>
                      <span className="text-white text-xs font-medium">엔터프라이즈 지원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
