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
import ContactSection from "@/components-website/contact";
import FooterSection from "@/components-website/footer";
import BackToTopSection from "@/components-website/backToTop";
import useJQuery from "./useJQuery";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Intercom from '@intercom/messenger-js-sdk';

Intercom({
  app_id: 'asbm4t30',
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    // Dynamically import jQuery and Bootstrap JS
    const loadScripts = async () => {
      const jQuery = (await import('jquery')).default;
      window.$ = window.jQuery = jQuery;

      // Import Bootstrap JS and attach it to window
      const { Carousel } = await import('bootstrap');
      window.bootstrap = { Carousel };

      // Initialize Bootstrap Carousel
      const carouselElement = document.getElementById('carouselExampleCaptions');
      if (carouselElement) {
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
    };

    loadScripts();
  }, []);

  useJQuery(($) => {
    $(document).ready(function () {
      const isDarkMode = localStorage.getItem('darkMode') === 'true';

      if (isDarkMode) {
        $('#theme-checkbox').prop('checked', true);
        applyDarkMode();
      }

      $('#theme-checkbox').change(function () {
        if ($(this).is(':checked')) {
          applyDarkMode();
          localStorage.setItem('darkMode', 'true');
        } else {
          applyLightMode();
          localStorage.setItem('darkMode', 'false');
        }
      });

      function applyDarkMode() {
        $('#theme_change').addClass('ri-sun-line').removeClass('ri-moon-line');
        $('body').addClass('body-dark').removeClass('body-light');
        $('.menu').addClass('menu-dark').removeClass('menu-light');
        $('.svg-path-color').addClass('svg-path-color-dark').removeClass('svg-path-color-light');
        $('.get-started').addClass('get-started-dark').removeClass('get-started-light');
      }

      function applyLightMode() {
        $('#theme_change').addClass('ri-moon-line').removeClass('ri-sun-line');
        $('body').addClass('body-light').removeClass('body-dark');
        $('.menu').addClass('menu-light').removeClass('menu-dark');
        $('.svg-path-color').addClass('svg-path-color-light').removeClass('svg-path-color-dark');
        $('.get-started').addClass('get-started-light').removeClass('get-started-dark');
      }
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
