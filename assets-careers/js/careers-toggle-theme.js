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
  