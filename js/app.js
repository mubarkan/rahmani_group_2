function adjustSlidesHeight() {
  var height = $(window).height();
  console.log(height);
  $('.slides-body').css({
    'height': height-265
  });
  $('#slide-01').css({
    'height': height-265
  });
  $('#slide-02').css({
    'height': height-265
  });
  $('#slide-03').css({
    'height': height-265
  });
  $('#slide-04').css({
    'height': height-265
  });
  $('#slide-05').css({
    'height': height-265
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
  $('.slide-caption').css({
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
function adjustSlide04Text() {
  var width = $(window).width();
  var height = $('.slides-body').height();
  var lineHeight1 = (25*height/700).toString() + "px";
  var lineHeight2 = (44*height/700).toString() + "px";
  console.log("inside adjustSlide04Text");
  console.log(height);
  $('.slide-caption').css({
    'font-size': (40*width/1680)
  });
  $('#slide-04 .year p').css({
    'font-size': (18*width/1680),
    'line-height': lineHeight1
  });
  $('#slide-04 .year').css({
    'padding-top': (3*height/700)
  });
  $('#slide-04 .num-millions').css({
    'font-size': (50*width/1680),
    'margin-top': (8*height/700),
    'line-height': lineHeight2
  });
  $('#slide-04 .million').css({
    'font-size': (20*width/1680)
  });
  $('#slide-04 .trans-fuel-projects p').css({
    'font-size': (12*width/1680)
  });
  $('#year-2013-trans p, #year-2013-fuel p, #year-2014-trans p, #year-2014-fuel p').css({
    'font-size': (13*width/1680)
  });
}
function nextSlide() {

  var currentSlideId = $('.active').attr('id');
  var currentSlideNumber = parseInt(currentSlideId.replace("slide-0", ""));
  if (currentSlideNumber === 5) {
    var nextSlideNumber = 1;
  } else {
    var nextSlideNumber = currentSlideNumber + 1;
  }
  var nextSlideId = "slide-0" + nextSlideNumber.toString();

  if (currentSlideNumber === 1 && nextSlideNumber === 2) {
    adjustSlide02Text();
    emptySlideOne();
  } else if (currentSlideNumber === 2 && nextSlideNumber === 3) {
    emptySlideTwo();
  } else if (currentSlideNumber === 3 && nextSlideNumber === 4) {
    adjustSlide04Text();
  }

  setTimeout(function() {
    $('#' + currentSlideId).fadeOut(400);
    $('#' + currentSlideId).removeClass('active');
    setTimeout(function() {
      $('#' + nextSlideId).fadeIn(400);
      $('#' + nextSlideId).addClass('active');
    }, 400);

  }, 800);

  if (currentSlideNumber === 1 && nextSlideNumber === 2) {
    populateSlideTwo();
  } else if (currentSlideNumber === 4 && nextSlideNumber === 1) {
    populateSlideOne();
  }

}
function previousSlide() {
  adjustSlide02Text();
  var currentSlideId = $('.active').attr('id');
  var currentSlideNumber = parseInt(currentSlideId.replace("slide-0", ""));
  if (currentSlideNumber === 1) {
    var nextSlideNumber = 5;
  } else {
    var nextSlideNumber = currentSlideNumber - 1;
  }
  var nextSlideId = "slide-0" + nextSlideNumber.toString();

  if (currentSlideNumber === 1 && nextSlideNumber === 4) {
    adjustSlide04Text();
    emptySlideOne();
  } else if (currentSlideNumber === 2 && nextSlideNumber === 1) {
    emptySlideTwo();
  } else if (currentSlideNumber === 3 && nextSlideNumber === 2) {
  }

  setTimeout(function() {
    $('#' + currentSlideId).fadeOut(400);
    $('#' + currentSlideId).removeClass('active');
    setTimeout(function() {
      $('#' + nextSlideId).fadeIn(400);
      $('#' + nextSlideId).addClass('active');
    }, 400);

  }, 800);

  if (currentSlideNumber === 1 && nextSlideNumber === 4) {

  } else if (currentSlideNumber === 2 && nextSlideNumber === 1) {
    populateSlideOne();
  } else if (currentSlideNumber === 3 && nextSlideNumber === 2) {
    populateSlideTwo();
  }

}
function populateSlideOne() {
  $('#slide-01 img').css({
    'display': 'block'
  }, 500);
}
function emptySlideOne() {
  $('#slide-01 img').animate({
    'top': '27%',
    'opacity': 'hide'
  }, 500);
  setTimeout(function() {
    $('#slide-01 img').css({'top': '30%'});
  }, 1500);
}
function populateSlideTwo() {

  $('#slide-02 .slide-caption').fadeIn(3000);

  setTimeout(function() {
    $('#slide-02 #fact-1').fadeIn(1000);
  }, 1000);
  setTimeout(function() {
    $('#slide-02 #fact-4').fadeIn(1000);
  }, 1200);
  setTimeout(function() {
    $('#slide-02 #fact-2').fadeIn(1000);
  }, 1400);
  setTimeout(function() {
    $('#slide-02 #fact-5').fadeIn(1000);
  }, 1600);
  setTimeout(function() {
    $('#slide-02 #fact-3').fadeIn(1000);
  }, 1800);
  setTimeout(function() {
    $('#slide-02 #fact-6').fadeIn(1000);
  }, 2000);
  setTimeout(function() {
    $('#slide-02 #fact-7').fadeIn(1000);
  }, 2200);
  setTimeout(function() {
    $('#slide-02 button').fadeIn(1000);
  }, 2400);
}
function emptySlideTwo() {
  $('#slide-02 .slide-caption').fadeOut();
  $('#slide-02 #fact-1').fadeOut();
  $('#slide-02 #fact-2').fadeOut();
  $('#slide-02 #fact-3').fadeOut();
  $('#slide-02 #fact-4').fadeOut();
  $('#slide-02 #fact-5').fadeOut();
  $('#slide-02 #fact-6').fadeOut();
  $('#slide-02 #fact-7').fadeOut();
  $('#slide-02 button').fadeOut();
}


jQuery(document).ready(function() {

  adjustSlidesHeight();
  $(window).on('resize', adjustSlidesHeight);
  $(window).on('resize', adjustSlide02Text);
  $(window).on('resize', adjustSlide04Text);
  $('.arrow-up').on('click', nextSlide);
  $('.arrow-down').on('click', previousSlide);
});
