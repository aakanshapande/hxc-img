import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const IntroSection = () => {
    const { t } = useTranslation('careers');
    const [introImg, setIntroImg] = useState(null);
    useEffect(() => {
      fetch(`${strapiUrl}/api/images-sites?filters[name][$eq]=career-image1&populate=*`)
        .then(res => res.json())
        .then(data => {
          const entry = data.data && data.data[0];
          if (entry && entry.Image && entry.Image.url) {
            setIntroImg(strapiUrl + entry.Image.url);
          }
        })
        .catch(console.error);
    }, []);
    return (
        <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.hakxcore.io/" />
        <meta property="og:title" content={t('intro_og_title', 'Securing Your Digital Future')} />
        <meta property="og:description" content={t('intro_og_description', 'We are a leading cybersecurity company Simplifying Access, Strengthening Security – Global Leaders in SSO and IAM.')} />
        <meta property="og:image" content="https://www.hakxcore.io/images/og-image.jpg" />
        <meta property="og:url" content="https://www.hakxcore.io/" />
        <meta property="og:type" content="website" />
        {/* Favicon and Apple Touch Icons */}
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/images/apple-touch-icon-167x167.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon-180x180.png" />
        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hakxcore",
            "url": "https://www.hakxcore.io/",
            "logo": "https://www.hakxcore.io/images/logo.png",
            "description": t('intro_og_description', 'We are a leading cybersecurity company Simplifying Access, Strengthening Security – Global Leaders in SSO and IAM.'),
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "https://www.hakxcore.io/#contact",
              "contactType": "customer service"
            }],
            "sameAs": [
              "https://www.twitter.com/hakxcore",
              "https://github.com/hakxcore",
              "https://instagram.com/hakxcore",
              "https://www.linkedin.com/company/hakxcore"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Balewadi High Street",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "postalCode": "411045",
              "addressCountry": "IN"
            }
          })}
        </script>
        <link rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/Security" />
        <link rel="noopener noreferrer" href="https://owasp.org/www-project-top-ten/" />
        <link rel="noopener noreferrer" href="https://www.cisa.gov/" />
      </Head>
      <section id="home" className="intro-section intro-section-light">
        <header className="header">
          <div className="container py-20" style={{ minHeight: '350px' }}>
            <div className="row align-items-center text-white">
              <div className="col-md-6 intros text-start">
                <h1 className="display-2">
                  <span className="display-2--intro">{t('intro_heading')}</span>
                </h1>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                  <Link href="/contact-page">
                    <button type="button" className="rounded-pill btn-rounded">
                      {t('apply_now')}<span><i className="fas fa-arrow-right"></i></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 intros text-end d-flex justify-content-end align-items-center">
                {introImg && typeof introImg === 'string' && (
                  <Image
                    src={introImg}
                    alt={t('intro_img_alt', 'Careers Hero Illustration')}
                    width={350}
                    height={280}
                    className="img-fluid"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              className="svg-path-color"
              d="M0,96L48,80C96,64,192,32,288,48C384,64,480,128,576,133.3C672,139,768,85,864,80C960,75,1056,117,1152,128C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          </header>
      </section>
    </>
    );
};

export default IntroSection;