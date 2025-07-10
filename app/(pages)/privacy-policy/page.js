'use client'
import Navbar from '../../../components-careers/Navbar';
import Footer from '../../../components-website/footer';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const [theme, setTheme] = useState('light');
  const { t } = useTranslation('privacy-policy');

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
          <div className={`mb-12 p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'} border-l-4 border-blue-500`}>
            <h1 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`}>{t('title')}</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className={`mb-12 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <p className={`mb-4 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('intro')}</p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>{t('info_we_collect_title')}</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>{t('info_intro')}</p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>{t('personal_info')}</p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>{t('technical_data')}</p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>{t('usage_data')}</p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>{t('cookies_tracking')}</p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>{t('sso_data')}</p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>{t('how_we_use_title')}</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('how_we_use_intro')}</p>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="mb-2">{t('service_provision')}</li>
                <li className="mb-2">{t('communication')}</li>
                <li className="mb-2">{t('improvement')}</li>
                <li className="mb-2">{t('security')}</li>
                <li className="mb-2">{t('legal_compliance')}</li>
                <li className="mb-2">{t('refund')}</li>
              </ul>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>{t('sharing_info_title')}</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('sharing_intro')}</p>
              <p className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t('with_providers')}</p>
              <p className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t('legal_reasons')}</p>
              <p className={`mb-2 font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t('business_transfer')}</p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>{t('security_title')}</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('security_body_1')}</p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('security_body_2')}</p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>{t('privacy_rights_title')}</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('privacy_rights_intro')}</p>
              <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="mb-2">{t('access')}</li>
                <li className="mb-2">{t('correction')}</li>
                <li className="mb-2">{t('deletion')}</li>
                <li className="mb-2">{t('objection')}</li>
                <li className="mb-2">{t('portability')}</li>
              </ul>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>{t('data_retention_title')}</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('data_retention')}</p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>{t('children_privacy_title')}</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('children_privacy')}</p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>{t('intl_data_title')}</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('intl_data')}</p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>{t('changes_title')}</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('changes_body')}</p>
            </section>

            <section className={`mb-10 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <h2 className={`text-2xl font-semibold mb-4 pb-2 border-b ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-500'}`}>{t('contact_us_title')}</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('contact_us_body')}</p>
              <div className={`mt-4 p-4 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50'}`}>
                <p className={`mb-1 font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t('company')}</p>
                <p className={`mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}><span className="font-bold">{t('email_label')}</span> {t('email_value')}</p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}