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

