import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { i18n, t, ready } = useTranslation('common');

  // Force light theme on initial mount
  useEffect(() => {
    localStorage.removeItem("theme");
    setTheme("light");
    document.documentElement.setAttribute("data-theme", "light");
    setMounted(true);
  }, []);

  // Handle theme changes after initial mount
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  // Handle system theme changes
  useEffect(() => {
    if (mounted) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
          setTheme(mediaQuery.matches ? "dark" : "light");
        }
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [mounted]);

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
            <img src="https://blob.hakxcore.io/images/logo.webp" alt="logo" className="navbar-brand-img" />
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
      <Script id="theme-script" strategy="beforeInteractive">
        {`
          (function() {
            try {
              localStorage.removeItem("theme");
              document.documentElement.setAttribute("data-theme", "light");
              document.documentElement.classList.add("light-theme");
              document.documentElement.classList.remove("dark-theme");
            } catch (e) {
              console.error("Error setting initial theme:", e);
            }
          })();
        `}
      </Script>
      <nav className={`navbar navbar-expand-lg menu fixed-top menu-light`}>
        <div className="container">
          <Link href="/" className="navbar-brand">
            <img src="https://blob.hakxcore.io/images/logo.webp" alt="logo" className="navbar-brand-img" />
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
                <Link href="#testimonials" className="nav-link">{t('testimonials')}</Link>
              </li>
              <li className="nav-item">
                <Link href="#faq" className="nav-link">{t('faq')}</Link>
              </li>
              <li className="nav-item">
                <Link href="#portfolio" className="nav-link">{t('portfolio')}</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact-page" className="nav-link">{t('contact')}</Link>
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
