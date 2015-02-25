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
  $('#slide-03').css({
    'height': height-180
  });
  $('#slide-03').css({
    'height': height-180
  });
}
function nextSlide() {
  var currentSlideId = $('.active').attr('id');
  var currentSlideNumber = parseInt(currentSlideId.replace("slide-0", ""));
  if (currentSlideNumber === 4) {
    var nextSlideNumber = 1;
  } else {
    var nextSlideNumber = currentSlideNumber + 1;
  }
  var nextSlideId = "slide-0" + nextSlideNumber.toString();

  if (currentSlideNumber === 1) {
    emptySlideOne();
  } else if (currentSlideNumber === 4 && nextSlideNumber === 1) {
    console.log("hey");
    populateSlideOne();
  }

  setTimeout(function() {
    $('#' + currentSlideId).fadeOut(400);
    $('#' + currentSlideId).removeClass('active');
    $('#' + nextSlideId).fadeIn(400);
    $('#' + nextSlideId).addClass('active');
  }, 800);

}
function previousSlide() {
  var currentSlideId = $('.active').attr('id');
  var currentSlideNumber = parseInt(currentSlideId.replace("slide-0", ""));
  if (currentSlideNumber === 1) {
    var nextSlideNumber = 4;
  } else {
    var nextSlideNumber = currentSlideNumber - 1;
  }
  var nextSlideId = "slide-0" + nextSlideNumber.toString();

  $('#' + currentSlideId).fadeOut(400);
  $('#' + currentSlideId).removeClass('active');
  $('#' + nextSlideId).fadeIn(400);
  $('#' + nextSlideId).addClass('active');
}
function emptySlideOne() {
  $('#slide-01 img').animate({
    'top': '22%',
    'opacity': 'hide'
  }, 500);
}
function populateSlideOne() {
  $('#slide-01 img').css({
    'top': '25%',
    'display': 'block'
  }, 500);
}

jQuery(document).ready(function() {

  adjustSlidesHeight();
  $(window).on('resize', adjustSlidesHeight);
  $('.arrow-up').on('click', nextSlide);
  $('.arrow-down').on('click', previousSlide);
});
