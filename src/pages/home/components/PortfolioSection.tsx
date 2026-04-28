import { useEffect, useRef } from 'react';
import { portfolio } from '@/mocks/portfolio';

export default function PortfolioSection() {
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

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-navy-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
                PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                주요 프로젝트 실적
              </h2>
              <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                엄격한 NDA(비밀유지계약)를 준수하며 고객사의 신원을 보호합니다.
                아래는 프로젝트 유형별 대표 사례입니다.
              </p>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
            {/* Left Large Card */}
            <div className="lg:col-span-2 reveal opacity-0 translate-y-6 transition-all duration-700 delay-100">
              <div className="group relative h-full bg-navy-800 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-300">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={portfolio[0].image}
                    alt={portfolio[0].category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/50 to-transparent" />
                  <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {portfolio[0].tag}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {portfolio[0].category}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    {portfolio[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Stacked Cards */}
            <div className="lg:col-span-3 space-y-6 md:space-y-8">
              {portfolio.slice(1).map((item, index) => (
                <div
                  key={item.id}
                  className={`reveal opacity-0 translate-y-6 transition-all duration-700 delay-${(index + 2) * 100} group relative bg-navy-800 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-300`}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-48 md:h-auto overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.category}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-800/80 md:block hidden" />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <span className="inline-block bg-amber-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4 w-fit">
                        {item.tag}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                        {item.category}
                      </h3>
                      <p className="text-white/60 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badge */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-500 mt-16 md:mt-20">
            <div className="bg-navy-800/50 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                <i className="ri-shield-check-line text-amber-500 text-2xl" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-white font-bold text-lg mb-2">
                  NDA 기반 기밀 유지
                </h4>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  모든 프로젝트는 엄격한 비밀유지계약 하에 진행됩니다. 고객사의
                  신원과 프로젝트 세부 정보를 철저히 보호하며, 이는 Highbarcode의
                  핵심 가치입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}