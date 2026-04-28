import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('https://readdy.ai/api/form/d7ng027u2vahpmebfkug', {
      method: 'POST',
      body: new URLSearchParams(formData as never),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true);
          setError(false);
          form.reset();
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-warm-50"
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Info */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
                CONTACT
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
                지금 바로
                <br />
                상담하세요
              </h2>
              <p className="text-navy-600 text-base md:text-lg leading-relaxed mb-10">
                전문가와 직접 소통하여 귀사에 최적의 바코드 솔루션을 찾아보세요.
                현장 경험으로 쌓은 풍부한 노하우로 기술적 문제를 현실적이고
                직접적인 방식으로 해결해 드립니다.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-warm-200">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <i className="ri-mail-line text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-semibold text-sm mb-1">이메일</h4>
                    <p className="text-navy-600 text-sm">contact@highbarcode.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-warm-200">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <i className="ri-phone-line text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-semibold text-sm mb-1">전화</h4>
                    <p className="text-navy-600 text-sm">02-1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-warm-200">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <i className="ri-time-line text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-semibold text-sm mb-1">업무 시간</h4>
                    <p className="text-navy-600 text-sm">평일 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-warm-200 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-check-line text-green-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      {t('common:send_success')}
                    </h3>
                    <p className="text-navy-600 text-sm">
                      빠른 시일 내에 담당자가 연락드리겠습니다.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-amber-500 hover:text-amber-600 font-medium text-sm transition-colors cursor-pointer"
                    >
                      새 문의 작성하기
                    </button>
                  </div>
                ) : (
                  <form
                    id="highbarcode-contact"
                    data-readdy-form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600 text-sm">
                        {t('common:send_error')}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-navy-900 font-medium text-sm mb-2">
                          {t('common:name')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-navy-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                          placeholder="성함을 입력해주세요"
                        />
                      </div>
                      <div>
                        <label className="block text-navy-900 font-medium text-sm mb-2">
                          {t('common:company')}
                        </label>
                        <input
                          type="text"
                          name="company"
                          className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-navy-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                          placeholder="회사명을 입력해주세요"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-navy-900 font-medium text-sm mb-2">
                          {t('common:email')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-navy-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-navy-900 font-medium text-sm mb-2">
                          {t('common:phone')}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-navy-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                          placeholder="010-0000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-navy-900 font-medium text-sm mb-2">
                        {t('common:message')} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        maxLength={500}
                        className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-navy-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                        placeholder="문의 내용을 입력해주세요 (최대 500자)"
                      />
                      <p className="text-navy-400 text-xs mt-1 text-right">
                        최대 500자
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base whitespace-nowrap cursor-pointer"
                    >
                      {t('common:submit')}
                      <i className="ri-send-plane-line" />
                    </button>
                  </form>
                )}
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