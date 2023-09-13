  const burger = document.querySelector('#hamburger');
  burger.addEventListener('click', function(){
    burger.classList.toggle('is-active');
  });

   $(document).ready(function(){
    $('.first-screen').slick({
      infinite :true,
      dots: true,
      appendArrows: '.first-screen-nav'
    });
    $('.first-screen').append($('.first-screen-nav'));
  })

  mobileOnlySlider("#advantages-slider", true, false, 992);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    dots: $dots,
    arrows: $arrows,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick"
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
} // Mobile Only Slider
