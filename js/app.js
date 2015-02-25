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
function adjustSlide02Text() {
  var width = $(window).width();
  var height = $('.slides-body').height();
  var lineHeight1 = (30*height/700).toString() + "px";
  var lineHeight2 = (28*height/700).toString() + "px";
  var lineHeight3 = (26*height/700).toString() + "px";
  console.log("inside adjustSlide02Text");
  console.log(height);
  $('.rg-facts').css({
    'font-size': (40*width/1680)
  });
  $('#fact-1 p').css({
    'font-size': (25*width/1680),
    'line-height': lineHeight1
  });
  $('#fact-1').css({
    'padding': (15*width/1680)
  });
  $('#fact-3 p').css({
    'font-size': (26*width/1680),
    'line-height': lineHeight1
  });
  $('#fact-5 p').css({
    'font-size': (25*width/1680),
    'line-height': lineHeight3,
    'margin-bottom': (5*width/1680)
  });
  $('#fact-6 p').css({
    'font-size': (25*width/1680)
  });
  $('#fact-6').css({
    'padding': (15*width/1680)
  });
  $('#fact-4').css({
    'background-size': (150*width/1680)
  });
  $('#fact-7').css({
    'background-size': (180*width/1680)
  });
  $('#slide-02 button').css({
    'font-size': (21*width/1680)
  });
}
function nextSlide() {
  adjustSlide02Text();
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
  adjustSlide02Text();
  var currentSlideId = $('.active').attr('id');
  var currentSlideNumber = parseInt(currentSlideId.replace("slide-0", ""));
  if (currentSlideNumber === 1) {
    var nextSlideNumber = 4;
  } else {
    var nextSlideNumber = currentSlideNumber - 1;
  }
  var nextSlideId = "slide-0" + nextSlideNumber.toString();

  if (currentSlideNumber === 1) {

  } else if (currentSlideNumber === 2 && nextSlideNumber === 1) {
    populateSlideOne();
  }

  $('#' + currentSlideId).fadeOut(400);
  $('#' + currentSlideId).removeClass('active');
  $('#' + nextSlideId).fadeIn(400);
  $('#' + nextSlideId).addClass('active');
}
function emptySlideOne() {
  $('#slide-01 img').animate({
    'top': '18%',
    'opacity': 'hide'
  }, 500);
}
function populateSlideOne() {
  $('#slide-01 img').css({
    'top': '20%',
    'display': 'block'
  }, 500);
}

jQuery(document).ready(function() {

  adjustSlidesHeight();
  $(window).on('resize', adjustSlidesHeight);
  $(window).on('resize', adjustSlide02Text);
  $('.arrow-up').on('click', nextSlide);
  $('.arrow-down').on('click', previousSlide);
});
