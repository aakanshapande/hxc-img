"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import Navbar from "@/components-careers/Navbar";
import "../../assets-careers/css/careers.css";
import "../../assets-careers/css/careers-toggle-theme.css";
// import "../../assets-careers/css/custom_style.css";
// import "../assets/js/careers-toggle-theme.js";
import IntroSection from "@/components-careers/intro";
import InternshipProgram from "@/components-careers/internship";
import InternshipButtonSection from "@/components-careers/internshipButton";
import InternshipDomain from "@/components-careers/internshipDomain";
import AttackSection from "@/components-careers/attacks";
import FooterSection from "@/components-careers/footer";

import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    // window.$ = window.jQuery = require('jquery')

$(document).ready(function(){

  // Check localStorage for theme preference and apply it
  var darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'true') {
      applyDarkMode();
      $('#theme-checkbox').prop('checked', false); // Update the toggle state
  } else {
      applyLightMode();
      $('#theme-checkbox').prop('checked', true); // Update the toggle state
  }

  // Toggle theme when checkbox changes
  $('#theme-checkbox').change(function(){
      if($(this).is(':checked')){
          // Perform action when toggle is switched on
          console.log('apply light mode');
          applyLightMode();
          localStorage.setItem('darkMode', 'false'); // Save preference to localStorage
      } else {
          // Perform action when toggle is switched off
          console.log('apply dark mode');
          applyDarkMode();
          localStorage.setItem('darkMode', 'true'); // Save preference to localStorage
      }
  });

  function applyDarkMode() {
      $('#theme_change').addClass('ri-sun-line').removeClass('ri-moon-line');
      $('body').removeClass('light');
      $('.menu').removeClass('menu-light');
      $('.highlighted-text').addClass('blue-text').removeClass('white-text');
      $('.alert-container').removeClass('alert-container-light');
  }

  function applyLightMode() {
      $('#theme_change').addClass('ri-moon-line').removeClass('ri-sun-line');
      $('body').addClass('light');
      $('.menu').addClass('menu-light');
      $('.highlighted-text').addClass('white-text').removeClass('blue-text');
      $('.alert-container').addClass('alert-container-light');
  }
});

  }, []);

  return (
    <html lang="en">
    <head>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
    </head>
      <body className="light vsc-intialized">
        <Navbar />
        <IntroSection />
        <InternshipProgram />
        <InternshipButtonSection />
        <InternshipDomain />
        <AttackSection />
        <FooterSection />
        {children}
       </body>
     </html>
  );
}
