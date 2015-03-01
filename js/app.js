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

  if (currentSlideNumber === 1 && nextSlideNumber === 2) {
    adjustSlide02Text();
    emptySlideOne();
  } else if (currentSlideNumber === 2 && nextSlideNumber === 3) {
    emptySlideTwo();
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
    var nextSlideNumber = 4;
  } else {
    var nextSlideNumber = currentSlideNumber - 1;
  }
  var nextSlideId = "slide-0" + nextSlideNumber.toString();

  if (currentSlideNumber === 1 && nextSlideNumber === 4) {
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
  $('#slide-02 .slide-caption').animate({
    'top': '8%',
    'opacity': 'hide'
  }, 500);
  $('#slide-02 #fact-1').animate({
    'top': '23%',
    'opacity': 'hide'
  }, 500);
  $('#slide-02 #fact-2').animate({
    'top': '23%',
    'opacity': 'hide'
  }, 500);
  $('#slide-02 #fact-3').animate({
    'top': '38%',
    'opacity': 'hide'
  }, 500);
  $('#slide-02 #fact-4').animate({
    'top': '43%',
    'opacity': 'hide'
  }, 500);
  $('#slide-02 #fact-5').animate({
    'top': '43%',
    'opacity': 'hide'
  }, 500);
  $('#slide-02 #fact-6').animate({
    'top': '58%',
    'opacity': 'hide'
  }, 500);
  $('#slide-02 #fact-7').animate({
    'top': '58%',
    'opacity': 'hide'
  }, 500);
  $('#slide-02 button').animate({
    'top': '66%',
    'opacity': 'hide'
  }, 500);
  setTimeout(function() {
  $('#slide-02 #fact-1').css({'top': '25%'});
  $('#slide-02 #fact-2').css({'top': '25%'});
  $('#slide-02 #fact-3').css({'top': '40%'});
  $('#slide-02 #fact-4').css({'top': '45%'});
  $('#slide-02 #fact-5').css({'top': '45%'});
  $('#slide-02 #fact-6').css({'top': '60%'});
  $('#slide-02 #fact-7').css({'top': '60%'});
  $('#slide-02 button').css({'top': '68%'});
  }, 1500);
}


jQuery(document).ready(function() {

  adjustSlidesHeight();
  $(window).on('resize', adjustSlidesHeight);
  $(window).on('resize', adjustSlide02Text);
  $(window).on('resize', adjustSlide04Text);
  $('.arrow-up').on('click', nextSlide);
  $('.arrow-down').on('click', previousSlide);
});
