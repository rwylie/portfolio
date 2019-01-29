bubbly({
    colorStart: "#fff",
    colorStop: "#fff",
    blur: 1,
    compose: "source-over",
    bubbleFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .2)`
});

$(document).ready(function() {

    $(window).scroll(function() {

        var height = $('.first-container').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 40) {
            $('.nav-container').addClass('solid-nav', 'logo');
        } else {
            $('.nav-container').removeClass('solid-nav');
        }

    });

    $(window).scroll(function() {
      if ($(window).scrollTop() > 0) {
        $('#logo').fadeOut();
      }
      else {
        $('#logo').fadeIn();
      }
    });
});

$(function() {
    $('body').removeClass('fade-out');
});
