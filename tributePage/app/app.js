$(document).ready(function() {
    var NavY = $('.nav-menu').offset().top;

    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();

        if (ScrollY > NavY) {
            $('.nav-menu').addClass('sticky');
        } else {
            $('.nav-menu').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});