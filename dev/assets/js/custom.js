
 const burger = document.querySelector('#hamburger');
  burger.addEventListener('click', function() {
      burger.classList.toggle('is-active');
  });
  document.getElementById('fileInput').onchange = function() {


      // document.getElementById('file-name').innerHTML = this.files[0].name;


      document.getElementById('file-name').innerHTML = this.value;
  };


  const checkButtons = document.querySelectorAll('.input-box.check')
  console.log(checkButtons);

  checkButtons.forEach(item => {
      const colParent = item.closest('.col-lg-6');
      colParent ? colParent.classList.add('padding-top') : null;

  })





















  $(document).ready(function() {
      $('.first-screen').slick({
          infinite: true,
          dots: true,
          appendArrows: '.first-screen-nav',
          responsive: [{
              breakpoint: 991,
              settings: {
                  arrows: false,
              }
          }]
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
          responsive: [{
              breakpoint: $breakpoint,
              settings: "unslick"
          }]
      };

      slider.slick(settings);

      $(window).on("resize", function() {
          if ($(window).width() > $breakpoint) {
              return;
          }
          if (!slider.hasClass("slick-initialized")) {
              return slider.slick(settings);
          }
      });
  } 

  $('.carousel-template').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,


  });



// $('.carousel-template').each(function () {
//     var slider = $(this);

//     slider.slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,

//     prevArrov: slider.closest('.container').find('.slick-prev'),
//     nextArrow: slider.closest('.container').find('.slick-next'),
//     });
// });

// $('.carousel-template').each(function () {
//     var slider = $(this);

//     slider.slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,

//     prevArrov: '<img src="assets/img/ar.gray1.svg">',
//     nextArrow:'<img src="assets/img/ar.gray2.svg">',
//     });
// });







// $(document).ready(function() {
//     $('.carousel-template').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         appendArrows: '.carousel-template-nav',
        
        
//     });
//     $('.carousel-template').append($('.carousel-template-nav'));
// })