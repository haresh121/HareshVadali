$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 110
      }, 1000);
        return false;
      }
    }
  });
});

window.onscroll = function () {
    var nav = $("navbar");
    if(window.pageYOffset > 20){
        nav.addClass('sticky');
        $('#main-nav').animate({height: "45px"}, {duration: 0.4});
    }
    else{
        nav.removeClass('sticky');
        $('#main-nav').animate({height: "55px"}, {duration: 0.4});
    }
}
