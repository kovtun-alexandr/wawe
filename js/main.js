$(function () {

  var headerHeight = $('header').outerHeight(),
    headerTop = 0;

  function toggleHeader(e) {
    var scroll_status = $(document).scrollTop();
    if (scroll_status > e)
      $(".header__top").addClass("header__top--fix");
    else
      $(".header__top").removeClass("header__top--fix");
  };

  $('.menu__btn, .menu a').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active')
  });

  $('.menu a').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.blog__itams').slick({
    dots: true,
    arrows: false
  });


  $(document).scroll(function () {
    if ($(window).width() < 992) {
      toggleHeader(headerTop);
    } else {
      toggleHeader(headerHeight);
    }
  });

  var mixer = mixitup('.galery__items');
});