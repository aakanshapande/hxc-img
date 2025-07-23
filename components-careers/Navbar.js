import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const [logoUrl, setLogoUrl] = useState(null);
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    // Update body classes
    if (newTheme === 'dark') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      document.querySelector('.menu')?.classList.remove('menu-light');
      document.querySelectorAll('.highlighted-text').forEach(el => {
        el.classList.add('blue-text');
        el.classList.remove('white-text');
      });
      document.querySelector('.alert-container')?.classList.remove('alert-container-light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      document.querySelector('.menu')?.classList.add('menu-light');
      document.querySelectorAll('.highlighted-text').forEach(el => {
        el.classList.add('white-text');
        el.classList.remove('blue-text');
      });
      document.querySelector('.alert-container')?.classList.add('alert-container-light');
    }
  };

  useEffect(() => {
    // Initial theme setup
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    
    // Set initial classes
    if (theme === 'dark') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      document.querySelector('.menu')?.classList.remove('menu-light');
      document.querySelectorAll('.highlighted-text').forEach(el => {
        el.classList.add('blue-text');
        el.classList.remove('white-text');
      });
      document.querySelector('.alert-container')?.classList.remove('alert-container-light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      document.querySelector('.menu')?.classList.add('menu-light');
      document.querySelectorAll('.highlighted-text').forEach(el => {
        el.classList.add('white-text');
        el.classList.remove('blue-text');
      });
      document.querySelector('.alert-container')?.classList.add('alert-container-light');
    }
    // Fetch Logo1 from Strapi
    fetch(`${strapiUrl}/api/images-sites?filters[name][$eq]=Logo1&populate=*`)
      .then(res => res.json())
      .then(data => {
        const entry = data.data && data.data[0];
        if (entry && entry.Image && entry.Image.url) {
          setLogoUrl(strapiUrl + entry.Image.url);
        }
      })
      .catch(console.error);
  }, [theme, strapiUrl]);

  return (
    <nav className={`navbar navbar-expand-lg menu fixed-top menu-${theme}`}>
      <div className="container">
        <Link href="/" className="navbar-brand">
          <img src={logoUrl || "https://blob.hakxcore.io/images/logo.webp"} alt="logo" className="navbar-brand-img" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link href="/#home" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link href="/#services" className="nav-link">Services</Link></li>
            <li className="nav-item"><Link href="/#testimonials" className="nav-link">Testimonials</Link></li>
            <li className="nav-item"><Link href="/#faq" className="nav-link">FAQ</Link></li>
            <li className="nav-item"><Link href="/#portfolio" className="nav-link">Portfolio</Link></li>
            <li className="nav-item"><Link href="/contact-page" className="nav-link">Contact</Link></li>
          </ul>
          <div className="theme-btn">
            <input
              type="checkbox"
              id="theme-checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
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
