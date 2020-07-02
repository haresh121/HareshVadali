window.onload = (function(){
    setTimeout(function(){
        // $('.start-animation').animate({opacity: "0"}, 1000, function () {
            window.scrollTo(0, 0);
            $('.start-animation').css("display", "none");
            $("html").removeClass("toggle-overflow");
            $("body").removeClass("toggle-overflow");
                // });
    }, 4000);
});
var tl = gsap.timeline({defaults: { duration: 1, stagger: 0.4}});
tl.from('.nav-link', {y: -20, duration:1.5, delay:4, stagger: 0.3, opacity:0})
    .from('.header-h1', {y: 20, opacity: 0, stagger: 0.3, delay: -2})
    .from('.sides-nav', {y:60, opacity:0, delay: 0.1});


$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
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
