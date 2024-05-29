"use client";
import { Inter } from "next/font/google";
// import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../assets/css/custom_style.css"
import "../assets-website/css/style.css"
import "../assets-website/css/fontawesome.css"
import "../assets-website/css/toggle.css"
import "../assets-website/css/testimonial.css"
import "../assets-website/css/featured.css"
// import "../assets/js/toggle.js"
import Navbar from "@/components-website/Navbar";
import IntroSection from "@/components-website/intro";
import { useEffect } from "react";
import FeaturedSection from "@/components-website/featured";
import ServiceSection from "@/components-website/services";
import TestimonialSection from "@/components-website/Testimonial";
import FaqSection from "@/components-website/faq";
import PortfolioSection from "@/components-website/portfolio";
import ContactSection from "@/components-website/contact";
import FooterSection from "@/components-website/footer";
import BackToTopSection from "@/components-website/backToTop";

import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    // window.$ = window.jQuery = require('jquery')

$(document).ready(function(){
  // Check the theme preference from localStorage
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  // Set initial theme based on the preference
  if (isDarkMode) {
    $('#theme-checkbox').prop('checked', true);
    applyDarkMode(); // Apply dark mode styles
  }

  $('#theme-checkbox').change(function(){
    if($(this).is(':checked')){
      // Perform action when toggle is switched on
      console.log('Toggle switched on');
      applyDarkMode();
      localStorage.setItem('darkMode', 'true'); // Save preference to localStorage
    }
    else {
      // Perform action when toggle is switched off
      console.log('Toggle switched off');
      applyLightMode();
      localStorage.setItem('darkMode', 'false'); // Save preference to localStorage
    }
  });

  function applyDarkMode() {
    $('#theme_change').addClass('ri-sun-line').removeClass('ri-moon-line');
    $('body').addClass('body-dark').removeClass('body-light');
    $('.menu').addClass('menu-dark').removeClass('menu-light');
    // $('.intro-section').addClass('intro-section-dark').removeClass('intro-section-light');
    $('.svg-path-color').addClass('svg-path-color-dark').removeClass('svg-path-color-light');
    // $('.testimonials').addClass('testimonials-dark').removeClass('testimonials-light');
    // $('.testimonials__card').addClass('testimonials-card-dark');
    $('.get-started').addClass('get-started-dark').removeClass('get-started-light');
  }

  function applyLightMode() {
    $('#theme_change').addClass('ri-moon-line').removeClass('ri-sun-line');
    $('body').addClass('body-light').removeClass('body-dark');
    $('.menu').addClass('menu-light').removeClass('menu-dark');
    // $('.intro-section').addClass('intro-section-light').removeClass('intro-section-dark');
    $('.svg-path-color').addClass('svg-path-color-light').removeClass('svg-path-color-dark');
    // $('.testimonials').addClass('testimonials-light').removeClass('testimonials-dark');
    // $('.testimonials__card').removeClass('testimonials-card-dark');
    $('.get-started').addClass('get-started-light').removeClass('get-started-dark');
  }
});


  }, []);

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
        {/* <script src="../assets/js/testimonial.js"></script> */}
      </body>
    </html>
  );
}