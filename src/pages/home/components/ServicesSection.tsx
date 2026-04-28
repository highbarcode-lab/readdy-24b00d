import { useEffect, useRef } from 'react';
import { services } from '@/mocks/services';

export default function ServicesSection() {
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
      id="services"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-warm-50"
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-20">
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
                SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 leading-tight">
                전문 기술 서비스
              </h2>
            </div>
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 flex items-end">
              <p className="text-base md:text-lg text-navy-600 leading-relaxed">
                엄격한 NDA(비밀유지계약)를 준수하며 대형 에너지 기업, 대학 병원,
                국제 의료 기관 등 주요 고객사에 최고 수준의 시스템 통합을 제공합니다.
                현장에서 쌓은 풍부한 경험으로 기술적 문제를 현실적이고 직접적인 방식으로
                해결합니다.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`reveal opacity-0 translate-y-6 transition-all duration-700 delay-${(index + 1) * 100} group bg-white rounded-2xl p-6 md:p-8 border border-warm-200 hover:border-amber-500/30 hover:shadow-lg transition-all duration-300`}
              >
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <i className={`${service.icon} text-amber-500 text-2xl md:text-3xl`} />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-navy-600 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-2 text-sm text-navy-600"
                    >
                      <i className="ri-check-line text-amber-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <button className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 font-medium text-sm transition-colors duration-300 cursor-pointer">
                  자세히 보기
                  <i className="ri-arrow-right-line" />
                </button>
              </div>
            ))}
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