$(document).ready(function () {
  $(window).on('scroll', function () {
    var scroll = $(this).scrollTop();
    if (scroll >= 1) {
      $('.arrow').addClass('fade');
    } else {
      $('.arrow').removeClass('fade');
    }
  });
});
