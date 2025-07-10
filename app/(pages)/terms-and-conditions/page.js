'use client'
import Navbar from '../../../components-careers/Navbar';
import Footer from '../../../components-website/footer';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const [theme, setTheme] = useState('light');
  const { t } = useTranslation('terms');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setTheme(document.documentElement.getAttribute('data-theme'));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar />
      <main className={`flex-grow w-full px-4 py-8 mt-20 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className={`mb-12 p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'} border-l-4 border-blue-500`}>
            <h1 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`}>
              {t('hero_title')}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className={`mb-12 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <p className={`mb-4 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('intro_welcome')}
              </p>
              <div className={`p-4 rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-blue-50 border-blue-200'} border-l-4`}>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('intro_notice')}
                </p>
              </div>
            </section>

            {/* 1 */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                {t('section1_title')}
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('section1_content')}
              </p>
            </section>

            {/* 2 */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                {t('section2_title')}
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('section2_intro')}
              </p>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t('section2_service_1')}</li>
                <li className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t('section2_service_2')}</li>
                <li className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t('section2_service_3')}</li>
                <li className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t('section2_service_4')}</li>
                <li className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t('section2_service_5')}</li>
                <li className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t('section2_service_6')}</li>
              </ul>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('section2_outro')}
              </p>
            </section>

            {/* 3 */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                {t('section3_title')}
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('section3_intro')}
              </p>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>{t('section3_point_1')}</li>
                <li>{t('section3_point_2')}</li>
                <li>{t('section3_point_3')}</li>
              </ul>
            </section>

            {/* 4 */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                {t('section4_title')}
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section4_registration')}</p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section4_security')}</p>
            </section>

            {/* 5 */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                {t('section5_title')}
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section5_fees')}</p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mt-2`}>{t('section5_payment_terms')}</p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mt-2`}>{t('section5_refund')}</p>
            </section>

            {/* 6 */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                {t('section6_title')}
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section6_content_1')}</p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section6_content_2')}</p>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>{t('section6_content_3')}</li>
                <li>{t('section6_content_4')}</li>
                <li>{t('section6_content_5')}</li>
                <li>{t('section6_content_6')}</li>
              </ul>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section6_content_7')}</p>
            </section>

            {/* 7 */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                {t('section7_title')}
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section7_part1')}</p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mt-2`}>{t('section7_part2')}</p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mt-2`}>{t('section7_part3')}</p>
            </section>

            {/* 8 */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                {t('section8_title')}
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section8_content')}</p>
            </section>

            {/* 9 */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                {t('section9_title')}
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section9_modifications')}</p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mt-2`}>{t('section9_availability')}</p>
            </section>

            {/* 10 */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                {t('section10_title')}
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section10_intro')}</p>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>{t('section10_point_1')}</li>
                <li>{t('section10_point_2')}</li>
                <li>{t('section10_point_3')}</li>
              </ul>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section10_limit')}</p>
            </section>

            {/* 11 */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                {t('section11_title')}
              </h2>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>{t('section11_point_1')}</li>
                <li>{t('section11_point_2')}</li>
                <li>{t('section11_point_3')}</li>
              </ul>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section11_disclaimer')}</p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mt-2`}>{t('section11_technical')}</p>
            </section>

            {/* 12 */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                {t('section12_title')}
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section12_by_user')}</p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mt-2`}>{t('section12_by_us')}</p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mt-2`}>{t('section12_effect')}</p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mt-2`}>{t('section12_disclaimer')}</p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mt-2`}>{t('section12_surveys')}</p>
            </section>

            {/* 13 */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                {t('section13_title')}
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section13_content')}</p>
            </section>

            {/* 14 */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                {t('section14_title')}
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section14_content')}</p>
            </section>

            {/* 15 */}
            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>
                {t('section15_title')}
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('section15_intro')}</p>
              <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50'} mt-4 p-4 rounded`}>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} font-bold`}>
                  {t('section15_contact_name')}
                </p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span className="font-bold">{t('section15_contact_email')}</span>
                </p>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mt-4`}>
                {t('section15_jurisdiction')}
              </p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
                {t('section15_disclaimer_acceptance')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
