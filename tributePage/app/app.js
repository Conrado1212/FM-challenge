$(document).ready(function() {
    var NavY = $('.nav-menu').offset().top;

    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();
        ScrollY > NavY ?  $('.nav-menu').addClass('sticky') : $('.nav-menu').removeClass('sticky');
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});



const scrollToBtn = $('#scrollBtn');
const scrollToEl = $('#header1');
scrollToBtn.click(() => {
  $('html').animate(
    {
      scrollTop: scrollToEl.offset().top,
    },
    800 //speed
  );
});
