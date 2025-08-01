import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [logoUrl, setLogoUrl] = useState(null);
  const router = useRouter();
  const { i18n, t, ready } = useTranslation('common');
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    
    const initialTheme = savedTheme || "light";
    
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    localStorage.setItem("theme", initialTheme);
    setMounted(true);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme');
          if (newTheme && newTheme !== theme) {
            setTheme(newTheme);
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  // Handle theme changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  // --- NEW: Auto-detect language on mount ---
  useEffect(() => {
    if (ready) {
      const savedLng = localStorage.getItem('i18nextLng');
      if (!savedLng) {
        const browserLng = navigator.language || navigator.userLanguage || 'en';
        const shortLng = browserLng.split('-')[0];
        if (['en', 'hi'].includes(shortLng)) {
          i18n.changeLanguage(shortLng).catch(console.error);
          localStorage.setItem('i18nextLng', shortLng);
          console.log(`Auto-detected and switched language to: ${shortLng}`);
        } else {
          i18n.changeLanguage('en').catch(console.error);
          localStorage.setItem('i18nextLng', 'en');
        }
      }
    }
  }, [ready, i18n]);

  // Fetch Logo1 from Strapi
  useEffect(() => {
    fetch(`${strapiUrl}/api/images-sites?filters[name][$eq]=Logo1&populate=*`)
      .then(res => res.json())
      .then(data => {
        const entry = data.data && data.data[0];
        if (entry && entry.Image && entry.Image.url) {
          setLogoUrl(strapiUrl + entry.Image.url);
        }
      })
      .catch(console.error);
  }, [strapiUrl]);

  const changeLanguage = (lng) => {
    if (i18n && i18n.changeLanguage && ready) {
      i18n.changeLanguage(lng).then(() => {
        localStorage.setItem('i18nextLng', lng);
        console.log(`Language changed to: ${lng}`);
      }).catch((error) => {
        console.error('Error changing language:', error);
      });
    } else {
      console.warn('i18n not ready yet');
    }
  };

  // Don't render until mounted and i18n is ready
  if (!mounted || !ready) {
    return (
      <nav className="navbar navbar-expand-lg menu fixed-top menu-light">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <img src={logoUrl} alt="logo" className="navbar-brand-img" />
          </Link>
          <div className="navbar-nav ms-auto">
            <div className="nav-item">Loading...</div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>

      <nav className={`navbar navbar-expand-lg menu fixed-top menu-light`}>
        <div className="container">
          <Link href="/" className="navbar-brand">
            <img src={logoUrl} alt="logo" className="navbar-brand-img" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="#home" className="nav-link">{t('home')}</Link>
              </li>
              <li className="nav-item">
                <Link href="#services" className="nav-link">{t('services')}</Link>
              </li>
              <li className="nav-item">
                <Link href="/careers" className="nav-link">{t('careers')}</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact-page" className="nav-link">{t('contact')}</Link>
              </li>
              <li className="nav-item">
                <Link href="https://blog.hakxcore.io" className="nav-link">{t('blogs')}</Link>
              </li>
            </ul>
            <div className="theme-btn">
              <input
                type="checkbox"
                id="theme-checkbox"
                checked={theme === "dark"}
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
              <label htmlFor="theme-checkbox">
                {theme === "dark" ? <i className="ri-sun-line"></i> : <i className="ri-moon-line"></i>}
              </label>
            </div>
      
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
