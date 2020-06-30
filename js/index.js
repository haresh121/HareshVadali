$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });
});
var lastScrollTop = window.pageYOffset;
window.onscroll = function() {
    var nav = $("navbar");
    if (window.pageYOffset > 20) {
        nav.addClass('sticky');
        $('#main-nav').animate({
            height: "45px"
        }, {
            duration: 0.4
        });
        st = $(window).scrollTop();
        if (st > lastScrollTop && st > 150) {
            $('#main-nav').animate({
                top: "-60px"
            }, {
                duration: 0.2
            });
        } else {
            $('#main-nav').animate({
                top: "0"
            }, {
                duration: 0.2
            });
        }
        lastScrollTop = st;
    } else {
        nav.removeClass('sticky');
        $('#main-nav').animate({
            height: "55px"
        }, {
            duration: 0.4
        });
    }
}

$('.extab').click(function (){
    $('.active').removeClass('active');
    $(this).addClass('active');
    var data = $('.active').attr('data-target');
    $(".data").toggleClass("notactive");
});
