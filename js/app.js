function adjustSlidesHeight() {
  var height = $(window).height();
  console.log(height);
  $('.slides-body').css({
    'height': height-180
  });
  $('#slide-01').css({
    'height': height-180
  });
  $('#slide-02').css({
    'height': height-180
  });
}
function nextSlide() {
  var currentSlideId = $('.active').attr('id');
  var currentSlideNumber = parseInt(currentSlideId.replace("slide-0", ""));
  if (currentSlideNumber === 2) {
    var nextSlideNumber = 1;
  } else {
    var nextSlideNumber = currentSlideNumber + 1;
  }
  var nextSlideId = "slide-0" + nextSlideNumber.toString();
  console.log(currentSlideId);
  console.log(nextSlideId);
  $('#' + currentSlideId).fadeOut(400);
  $('#' + currentSlideId).removeClass('active');
  $('#' + nextSlideId).fadeIn(400);
  $('#' + nextSlideId).addClass('active');
}

jQuery(document).ready(function() {

  adjustSlidesHeight();
  $(window).on('resize', adjustSlidesHeight);
  $('.arrow-down').on('click', nextSlide);
});
