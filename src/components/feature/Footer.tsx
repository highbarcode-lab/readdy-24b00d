import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto py-12 md:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#hero" onClick={() => scrollTo('#hero')} className="flex items-center gap-3 mb-4">
                <img
                  src="https://static.readdy.ai/image/24bb14c1d4e3d6d52685c73a70a1ff0d/26b101026ea801bc8c9dd064786afe6e.png"
                  alt="Highbarcode"
                  className="h-8 w-auto"
                />
                <span className="text-white font-bold text-lg">Highbarcode</span>
              </a>
              <p className="text-white/50 text-sm leading-relaxed">
                산업용 바코드 프린터 전문 유지보수 및 맞춤형 라벨 소프트웨어 개발 기업
              </p>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-4">
                서비스
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    프린터 유지보수
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    맞춤형 소프트웨어
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    엔터프라이즈 지원
                  </button>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-4">
                회사
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollTo('#portfolio')}
                    className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    포트폴리오
                  </button>
                </li>
                <li>
                  <a
                    href="https://highbarcode.com/shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    쇼핑몰
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-4">
                지원
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    문의하기
                  </button>
                </li>
                <li>
                  <span className="text-white/60 text-sm">
                    contact@highbarcode.com
                  </span>
                </li>
                <li>
                  <span className="text-white/60 text-sm">
                    02-1234-5678
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              {t('common:copyright')}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@highbarcode.com"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <i className="ri-mail-line text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}