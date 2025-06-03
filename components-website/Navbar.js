import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg menu fixed-top menu-${theme}`}>
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
  );
};

export default Navbar;