

  document.getElementById('carouselExample').addEventListener('mouseenter', function () {
    // Pause carousel on hover
    carousel.pause();
  });

  document.getElementById('carouselExample').addEventListener('mouseleave', function () {
    // Resume carousel when cursor is removed
    carousel.cycle();
  });


  var carousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
    interval: 3000, // Set your desired interval here
    wrap: true // Allows the carousel to loop infinitely
  });