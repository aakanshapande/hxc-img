"use client";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets-website/css/style.css";
import "../../assets-website/css/toggle.css";
import "../../assets-website/css/testimonial.css";
import "../../assets-website/css/featured.css";
import Navbar from "@/components-website/Navbar";
import IntroSection from "@/components-website/intro";
import FeaturedSection from "@/components-website/featured";
import ServiceSection from "@/components-website/services";
import TestimonialSection from "@/components-website/Testimonial";
import FaqSection from "@/components-website/faq";
import PortfolioSection from "@/components-website/portfolio";
import FooterSection from "@/components-website/footer";
import BackToTopSection from "@/components-website/backToTop";
import useJQuery from "./useJQuery";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Intercom from '@intercom/messenger-js-sdk';
// Import the I18n Provider
import I18nProvider from "@/components/I18nProvider";

Intercom({
  app_id: 'asbm4t30',
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // Apply theme classes when theme changes
  useEffect(() => {
    const applyThemeClasses = () => {
      const theme = document.documentElement.getAttribute('data-theme') || 'light';
      const body = document.body;
      const menu = document.querySelector('.menu');
      const svgPaths = document.querySelectorAll('.svg-path-color');
      const getStartedSections = document.querySelectorAll('.get-started');
      const themeChangeIcon = document.getElementById('theme_change');

      if (theme === 'dark') {
        body.classList.add('body-dark');
        body.classList.remove('body-light');
        menu?.classList.add('menu-dark');
        menu?.classList.remove('menu-light');
        svgPaths.forEach(el => {
          el.classList.add('svg-path-color-dark');
          el.classList.remove('svg-path-color-light');
        });
        getStartedSections.forEach(el => {
          el.classList.add('get-started-dark');
          el.classList.remove('get-started-light');
        });
        if (themeChangeIcon) {
          themeChangeIcon.className = 'ri-sun-line';
        }
      } else {
        body.classList.add('body-light');
        body.classList.remove('body-dark');
        menu?.classList.add('menu-light');
        menu?.classList.remove('menu-dark');
        svgPaths.forEach(el => {
          el.classList.add('svg-path-color-light');
          el.classList.remove('svg-path-color-dark');
        });
        getStartedSections.forEach(el => {
          el.classList.add('get-started-light');
          el.classList.remove('get-started-dark');
        });
        if (themeChangeIcon) {
          themeChangeIcon.className = 'ri-moon-line';
        }
      }
    };

    // Initial theme application
    applyThemeClasses();

    // Set up mutation observer to watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          applyThemeClasses();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Clean up
    return () => observer.disconnect();
  }, []);

  // Load jQuery and Bootstrap JS for carousel functionality only
  useEffect(() => {
    const loadScripts = async () => {
      try {
        // Only load jQuery if not already loaded
        if (!window.jQuery) {
          const jQuery = (await import('jquery')).default;
          window.$ = window.jQuery = jQuery;
        }

        // Import Bootstrap JS and attach it to window
        const { Carousel } = await import('bootstrap');
        window.bootstrap = window.bootstrap || { Carousel };

        // Initialize Bootstrap Carousel if element exists
        const carouselElement = document.getElementById('carouselExampleCaptions');
        if (carouselElement && window.bootstrap.Carousel) {
          const carousel = new window.bootstrap.Carousel(carouselElement, {
            interval: 3000,
            wrap: true,
          });

          carouselElement.addEventListener('mouseenter', () => {
            carousel.pause();
          });

          carouselElement.addEventListener('mouseleave', () => {
            carousel.cycle();
          });
        }
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();
  }, []);

  useJQuery(($) => {
    $(document).ready(function () {
      const isDarkMode = localStorage.getItem('darkMode') === 'true';

      if (isDarkMode) {
        $('#theme-checkbox').prop('checked', true);
      }

      $('#theme-checkbox').change(function () {
        if ($(this).is(':checked')) {
          localStorage.setItem('darkMode', 'true');
        } else {
          localStorage.setItem('darkMode', 'false');
        }
      });
    });
  });

  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="SSO, SAML, OIDC, SAML 2.0, OAuth, OAuth2.0, openid, OpenID Connect, Hakxcore, Hakxcore SSO, Security Assertion Markup Language, Single Sign-On"/>
        <meta name="description" content="Hakxcore SSO and IAM security services, powered by commercial and open-source tech"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hakxcore home page</title>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={inter.className}>
        <I18nProvider>
          <Navbar />
          <IntroSection />
          <FeaturedSection />
          <ServiceSection />
          <TestimonialSection />
          <FaqSection />
          <PortfolioSection />
          <FooterSection />
          <BackToTopSection />
          {children}
        </I18nProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}