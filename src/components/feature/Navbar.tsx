import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('common:home'), href: '#hero' },
    { label: t('common:services'), href: '#services' },
    { label: t('common:portfolio'), href: '#portfolio' },
    { label: t('common:contact'), href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" onClick={() => scrollTo('#hero')} className="flex items-center gap-3">
            <img
              src="https://static.readdy.ai/image/24bb14c1d4e3d6d52685c73a70a1ff0d/26b101026ea801bc8c9dd064786afe6e.png"
              alt="Highbarcode"
              className="h-8 md:h-10 w-auto"
            />
            <span className="text-white font-bold text-lg md:text-xl tracking-tight hidden sm:block">
              Highbarcode
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Shop Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://highbarcode.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap"
            >
              {t('common:shop')}
              <i className="ri-arrow-right-line" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              <i className={`ri-${mobileOpen ? 'close' : 'menu'}-line text-2xl`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="block w-full text-left text-white/80 hover:text-white text-base font-medium py-2 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://highbarcode.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full mt-2"
            >
              {t('common:nav_shop')}
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}