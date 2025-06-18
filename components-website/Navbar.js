import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Force light theme on initial mount
  useEffect(() => {
    // Clear any existing theme from localStorage
    localStorage.removeItem("theme");
    // Set light theme
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

  return (
    <>
      <Script id="theme-script" strategy="beforeInteractive">
        {`
          (function() {
            try {
              // Force light theme on initial load
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
              <li className="nav-item"><Link href="#home" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link href="#services" className="nav-link">Services</Link></li>
              <li className="nav-item"><Link href="#testimonials" className="nav-link">Testimonials</Link></li>
              <li className="nav-item"><Link href="#faq" className="nav-link">FAQ</Link></li>
              <li className="nav-item"><Link href="#portfolio" className="nav-link">Portfolio</Link></li>
              <li className="nav-item"><Link href="#contact" className="nav-link">Contact</Link></li>
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
