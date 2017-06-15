/* ===============
services
  /*==============*/
$(function() {
  new WOW().init();
});

/* ===============
navigation
  /*==============*/
// show/hide transparent black navigation
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() < 50) {
      //hide nav
      $("nav").removeClass("claire-top-nav");
      $("#back-to-top").fadeOut();

    } else {
      // show nav
      $("nav").addClass("claire-top-nav");
      $("#back-to-top").fadeIn();
    }
  });
});


// smooth scrolling
$(function(){
  $("a.smooth-scroll").click(function(event){
    event.preventDefault();
// get/return id like #about
    var section = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(section).offset().top -64
    }, 1250, "easeInOutExpo");
  });
});

// close mobile menu on click
$(function(){
  $(".navbar-collapse ul li a").on("click touch" , function(){
    $(".navbar-toggle").click();
  })
})
