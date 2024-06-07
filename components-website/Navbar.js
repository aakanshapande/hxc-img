import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top menu-light">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <img src="/images/logo.png" alt="logo image" className="navbar-brand-img"  />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mb-sm-4 mb-lg-0">
            <li className="nav-item">
              <Link href="#home" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#testimonials" className="nav-link">
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#faq" className="nav-link">
                Faqs
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="theme-btn">
              <input type="checkbox" name="theme-checkbox" id="theme-checkbox" className="theme-checkbox" />
              <label htmlFor="theme-checkbox" className="theme-label">
                  <i className="ri-moon-line" id="theme_change"></i>
              </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;