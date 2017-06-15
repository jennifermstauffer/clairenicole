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

// request sticker form

$(function(){
  // Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});
})
