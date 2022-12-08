$(document).ready(function () {
   $(".slider").slick({
      arrows: true,
      spaceBetween: 25,
   dots: true,
   infinite: true,
   speed: 500,
   easing: "easy",
   slidesToShow: 3,
   adaptiveHeight: true,
   slidesToScroll: 1,
   autoplay: false,
   autoplaySpeed: 1500,
   pauseOnFocus: true,
   pauseOnHover: true,
   pauseOnDotsColor: true,
   // draggable: false,
   swipe: true,
   // touchTrashhold: 10
   mateForAnimate: false,
   centerMode: true,
   variableWidth: false,
   });
})