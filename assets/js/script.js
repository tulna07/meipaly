// Slick carousel for services section
$(document).ready(function () {
  $(".services-carousel").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
  });
});

// Fancybox image gallery for
// porfolio section
$('[data-fancybox="gallery"]').fancybox({
  loop: true,
});

// Counter up for statistics section
$(".counter").countUp();
