"use client";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets-website/css/style.css";
import "../../assets-website/css/fontawesome.css";
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
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <IntroSection />
        <FeaturedSection />
        <ServiceSection />
        <TestimonialSection />
        <FaqSection />
        <PortfolioSection />
        <ContactSection />
        <FooterSection />
        <BackToTopSection />
        {children}
      </body>
    </html>
  );
}
