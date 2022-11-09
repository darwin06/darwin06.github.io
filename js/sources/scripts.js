$(document).ready( function () {
  // * Change Year in footer
  var d = new Date();
  var n = d.getFullYear('Y');
  var ftYear = document.getElementById('year');
  ftYear.innerText = n;

  // * Years Experience
  var experienceStart = 2009;
	var currentYear = d.getFullYear('Y');
  var expYear = document.getElementById('yearsExperience');
  expYear.innerText = currentYear - experienceStart;

  // * Smooth scroll
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  // * Scroll top
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });

});
