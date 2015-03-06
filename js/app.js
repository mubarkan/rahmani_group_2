function adjustSlidesHeight() {
  var height = $(window).height();
  var width = $(window).width();
  console.log(height);
  if (width <= 767) {
     $('.slides-body').css({
      'height': height-80
    });
    $('#slide-01').css({
      'height': height-80
    });
    $('#slide-02').css({
      'height': height-80
    });
    $('#slide-03').css({
      'height': height-80
    });
    $('#slide-04').css({
      'height': height-80
    });
    $('#slide-05').css({
      'height': height-80
    });
  } else {
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
}
function adjustSlide02Text() {
  var width = $(window).width();
  var height = $('.slides-body').height();
  var lineHeight1 = (30*height/700).toString() + "px";
  var lineHeight2 = (28*height/700).toString() + "px";
  var lineHeight3 = (22*height/700).toString() + "px";
  var lineHeight4 = (20*height/700).toString() + "px";
  var lineHeight5 = (24*height/700).toString() + "px";
  var lineHeight6 = (55*height/700).toString() + "px";
  var lineHeight7 = (50*height/700).toString() + "px";
  var margin1 = (20*height/700).toString() + "px";
  var margin2 = (10*height/700).toString() + "px";
  var margin3 = (5*height/700).toString() + "px";
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
  $('#fact-2 p:nth-of-type(1)').css({
    'line-height': lineHeight2,
    'margin-top': margin1,
    'margin-bottom': margin2,
    'font-size': (45*width/1680)
  });
  $('#fact-2 p:nth-of-type(2)').css({
    'line-height': lineHeight2,
    'margin-top': margin2,
    'margin-bottom': margin1,
    'font-size': (35*width/1680)
  });
  $('#fact-3 p').css({
    'font-size': (26*width/1680),
    'line-height': lineHeight1
  });
  $('#fact-4 p:nth-of-type(1)').css({
    'line-height': lineHeight5,
    'font-size': (25*width/1680)
  });
  $('#fact-4 p:nth-of-type(2)').css({
    'line-height': lineHeight6,
    'font-size': (60*width/1680)
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
  $('#fact-7 p:nth-of-type(1)').css({
    'line-height': lineHeight7,
    'font-size': (60*width/1680)
  });
  $('#fact-7 p:nth-of-type(2)').css({
    'line-height': lineHeight5,
    'font-size': (29*width/1680),
    'margin-top': margin3,
    'margin-bottom': margin3
  });
  $('#fact-7 p:nth-of-type(3)').css({
    'line-height': lineHeight5,
    'font-size': (27*width/1680)
  });
  $('#slide-02 button').css({
    'font-size': (21*width/1680)
  });
}
function adjustSlide03Text() {
  var width = $(window).width();
  var height = $('.slides-body').height();
  var width1a = height*0.58;
  var width1b = width1a.toString() + "px";
  var width2a = width1a*0.60;
  var width2b = width2a.toString() + "px";
  var width3a = width1a*0.195;
  var width3b = width3a.toString() + "px";
  var width4a = width1a*0.145;
  var width4b = width4a.toString() + "px";
  var width5a = width1a*0.30;
  var width5b = width5a.toString() + "px";
  var width6a = width1a*0.38;
  var width6b = width6a.toString() + "px";
  var width7a = width1a*0.32;
  var width7b = width7a.toString() + "px";
  var left1 = ((((width - width1a)/2)/width)*100).toString() + "%";
  var left2 = (((((width/2) - width2a) - width1a*0.32)/width)*100).toString() + "%";
  var left3 = (((((width/2) - width3a) - width1a*0.07)/width)*100).toString() + "%";
  var left4 = (((((width/2) - width4a) + width1a*0.278)/width)*100).toString() + "%";
  var left5 = (((((width/2) - width5a) + width1a*0.469)/width)*100).toString() + "%";
  var left6 = (((((width/2) - width6a) + width1a*0.574)/width)*100).toString() + "%";
  var left7 = (((((width/2) - width7a) + width1a*0.524)/width)*100).toString() + "%";
  var left8 = ((((width - (width1a*0.5))/2)/width)*100).toString() + "%";
  var lineHeight1 = (48*height/700).toString() + "px";
  console.log("inside adjustSlide03Text");
  $('#slide-03 .group-structure-heading').css({
    'width': (width1a*0.5),
    'left': left8
  });
  $('#slide-03 .group-structure-heading p').css({
    'font-size': (width1a*0.08),
    'line-height': lineHeight1
  });
  $('#slide-03 img[src="images/group_structure_wheel(1).png"]').css({
    'width': width1b,
    'left': left1
  });
  $('#slide-03 img[src="images/line_01.png"]').css({
    'width': width2b,
    'left': left2
  });
  $('#slide-03 img[src="images/line_02.png"]').css({
    'width': width3b,
    'left': left3
  });
  $('#slide-03 img[src="images/line_03.png"]').css({
    'width': width4b,
    'left': left4
  });
  $('#slide-03 img[src="images/line_04.png"]').css({
    'width': width5b,
    'left': left5
  });
  $('#slide-03 img[src="images/line_05.png"]').css({
    'width': width6b,
    'left': left6
  });
  $('#slide-03 img[src="images/line_06.png"]').css({
    'width': width7b,
    'left': left7
  });
  $('#slide-03 #seventy-six-percent').css({
    'top': (height*0.086 + width1a),
    'font-size': width1a*0.108,
    'left': (width/2) - width1a*1.05
  });
  $('#slide-03 #seventy-six-percent-one').css({
    'top': (height*0.099 + width1a),
    'font-size': width1a*0.045,
    'left': (width/2) - width1a*0.81
  });
  $('#slide-03 #seventy-six-percent-two').css({
    'top': (height*0.125 + width1a),
    'font-size': width1a*0.045,
    'left': (width/2) - width1a*0.81
  });
  $('#slide-03 #seventeen-percent').css({
    'top': (height*0.29 + width1a),
    'font-size': width1a*0.108,
    'left': (width/2) - width1a*0.52
  });
  $('#slide-03 #seventeen-percent-one').css({
    'top': (height*0.302 + width1a),
    'font-size': width1a*0.045,
    'left': (width/2) - width1a*0.28
  });
  $('#slide-03 #seventeen-percent-two').css({
    'top': (height*0.329 + width1a),
    'font-size': width1a*0.045,
    'left': (width/2) - width1a*0.28
  });
  $('#slide-03 #two-four-percent').css({
    'top': (height*0.29 + width1a),
    'font-size': width1a*0.108,
    'left': (width/2) + width1a*0.232
  });
  $('#slide-03 #two-four-percent-one').css({
    'top': (height*0.315 + width1a),
    'font-size': width1a*0.045,
    'left': (width/2) + width1a*0.5
  });
  $('#slide-03 #two-four-2-percent').css({
    'top': (height*0.18 + width1a),
    'font-size': width1a*0.108,
    'left': (width/2) + width1a*0.48
  });
  $('#slide-03 #two-four-2-percent-one').css({
    'top': (height*0.193 + width1a),
    'font-size': width1a*0.045,
    'left': (width/2) + width1a*0.75
  });
  $('#slide-03 #two-four-2-percent-two').css({
    'top': (height*0.22 + width1a),
    'font-size': width1a*0.045,
    'left': (width/2) + width1a*0.75
  });
  $('#slide-03 #one-two-percent').css({
    'top': (height*0.063 + width1a),
    'font-size': width1a*0.108,
    'left': (width/2) + width1a*0.58
  });
  $('#slide-03 #one-two-percent-one').css({
    'top': (height*0.076 + width1a),
    'font-size': width1a*0.045,
    'left': (width/2) + width1a*0.85
  });
  $('#slide-03 #one-two-percent-two').css({
    'top': (height*0.102 + width1a),
    'font-size': width1a*0.045,
    'left': (width/2) + width1a*0.85
  });
  $('#slide-03 #one-percent').css({
    'top': (width1a - height*0.08),
    'font-size': width1a*0.108,
    'left': (width/2) + width1a*0.48
  });
  $('#slide-03 #one-percent-one').css({
    'top': (width1a - height*0.067),
    'font-size': width1a*0.045,
    'left': (width/2) + width1a*0.75
  });
  $('#slide-03 #one-percent-two').css({
    'top': (width1a - height*0.04),
    'font-size': width1a*0.045,
    'left': (width/2) + width1a*0.75
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
function adjustSlide05Text() {
  var width = $(window).width();
  var height = $('.slides-body').height();
  var width1a = height*0.72;
  var width1b = width1a.toString() + "px";
  var left1 = ((((width - width1a)/2)/width)*100).toString() + "%";
  var lineHeight1 = (30*height/700).toString() + "px";
  var margin1 = (20*height/700).toString() + "px";
  console.log("inside adjustSlide05Text");
  $('#slide-05 img[src="images/contracts-projects(1).png"]').css({
    'width': width1b,
    'left': left1
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
    emptySlideOne();
    adjustSlide02Text();
  } else if (currentSlideNumber === 2 && nextSlideNumber === 3) {
    emptySlideTwo();
    adjustSlide03Text();
  } else if (currentSlideNumber === 3 && nextSlideNumber === 4) {
    emptySlideThree();
    adjustSlide04Text();
  } else if (currentSlideNumber === 4 && nextSlideNumber === 5) {
    emptySlideFour();
    adjustSlide05Text();
  } else if (currentSlideNumber === 5 && nextSlideNumber === 1) {
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
    setTimeout(function() {
      populateSlideTwo();
    }, 300);  //it appears adjustSlide03Text funtion needs 200ms to finish, hence this delay is needed for populateSlideThree function to work properly
  } else if (currentSlideNumber === 2 && nextSlideNumber === 3) {
    setTimeout(function() {
      populateSlideThree();
    }, 300);  //it appears adjustSlide03Text funtion needs 200ms to finish, hence this delay is needed for populateSlideThree function to work properly
  } else if (currentSlideNumber === 3 && nextSlideNumber === 4) {
    setTimeout(function() {
      populateSlideFour();
    }, 300);  //precaution to make sure adjust function got chance to finish executing
  } else if (currentSlideNumber === 4 && nextSlideNumber === 5) {
  } else if (currentSlideNumber === 5 && nextSlideNumber === 1) {
    populateSlideOne();
  }
}
function previousSlide() {
  var currentSlideId = $('.active').attr('id');
  var currentSlideNumber = parseInt(currentSlideId.replace("slide-0", ""));
  if (currentSlideNumber === 1) {
    var nextSlideNumber = 5;
  } else {
    var nextSlideNumber = currentSlideNumber - 1;
  }
  var nextSlideId = "slide-0" + nextSlideNumber.toString();

  if (currentSlideNumber === 1 && nextSlideNumber === 5) {
    emptySlideOne();
    adjustSlide05Text();
  } else if (currentSlideNumber === 2 && nextSlideNumber === 1) {
    emptySlideTwo();
  } else if (currentSlideNumber === 3 && nextSlideNumber === 2) {
    emptySlideThree();
    adjustSlide02Text();
  } else if (currentSlideNumber === 4 && nextSlideNumber === 3) {
    emptySlideFour();
    adjustSlide03Text();
  } else if (currentSlideNumber === 5 && nextSlideNumber === 4) {
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

  if (currentSlideNumber === 1 && nextSlideNumber === 4) {

  } else if (currentSlideNumber === 2 && nextSlideNumber === 1) {
    populateSlideOne();
  } else if (currentSlideNumber === 3 && nextSlideNumber === 2) {
    populateSlideTwo();
  } else if (currentSlideNumber === 4 && nextSlideNumber === 3) {
    setTimeout(function() {
      populateSlideThree();
    }, 300);  //it appears adjustSlide03Text funtion needs 200ms to finish, hence this delay is needed for populateSlideThree function to work properly
  } else if (currentSlideNumber === 5 && nextSlideNumber === 4) {
    setTimeout(function() {
      populateSlideFour();
    }, 300);  //precation
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
function populateSlideThree() {
  $('#slide-03 .group-structure-heading').animate({
    'top': '33%',
    'opacity': 'show'
  }, 1500);
  setTimeout(function() {
    $('#slide-03 img[src="images/group_structure_wheel(1).png"]').fadeIn(1000);
  }, 1000);
  setTimeout(function() {
    $('#slide-03 img[src="images/line_01.png"]').slideDown(1000);
  }, 1200);
  setTimeout(function() {
    $('#slide-03 #seventy-six-percent').fadeIn(1000);
  }, 1300);
  setTimeout(function() {
    $('#slide-03 #seventy-six-percent-one').fadeIn(1000);
    $('#slide-03 #seventy-six-percent-two').fadeIn(1000);
  }, 1400);
  setTimeout(function() {
    $('#slide-03 img[src="images/line_02.png"]').slideDown(1000);
  }, 1500);
  setTimeout(function() {
    $('#slide-03 #seventeen-percent').fadeIn(1000);
  }, 1600);
  setTimeout(function() {
    $('#slide-03 #seventeen-percent-one').fadeIn(1000);
    $('#slide-03 #seventeen-percent-two').fadeIn(1000);
  }, 1700);
  setTimeout(function() {
    $('#slide-03 img[src="images/line_03.png"]').slideDown(1000);
  }, 1800);
  setTimeout(function() {
    $('#slide-03 #two-four-percent').fadeIn(1000);
  }, 1900);
  setTimeout(function() {
    $('#slide-03 #two-four-percent-one').fadeIn(1000);
  }, 2000);
  setTimeout(function() {
    $('#slide-03 img[src="images/line_04.png"]').slideDown(1000);
  }, 2100);
  setTimeout(function() {
    $('#slide-03 #two-four-2-percent').fadeIn(1000);
  }, 2200);
  setTimeout(function() {
    $('#slide-03 #two-four-2-percent-one').fadeIn(1000);
    $('#slide-03 #two-four-2-percent-two').fadeIn(1000);
  }, 2300);
  setTimeout(function() {
    $('#slide-03 img[src="images/line_05.png"]').slideDown(1000);
  }, 2400);
  setTimeout(function() {
    $('#slide-03 #one-two-percent').fadeIn(1000);
  }, 2500);
  setTimeout(function() {
    $('#slide-03 #one-two-percent-one').fadeIn(1000);
    $('#slide-03 #one-two-percent-two').fadeIn(1000);
  }, 2600);
  setTimeout(function() {
    $('#slide-03 img[src="images/line_06.png"]').slideDown(1000);
  }, 2700);
  setTimeout(function() {
    $('#slide-03 #one-percent').fadeIn(1000);
  }, 2800);
  setTimeout(function() {
    $('#slide-03 #one-percent-one').fadeIn(1000);
    $('#slide-03 #one-percent-two').fadeIn(1000);
  }, 2900);
}
function emptySlideThree() {
  $('#slide-03 .group-structure-heading').fadeOut(1000);
  setTimeout(function() {
    $('#slide-03 .group-structure-heading').css({'top': '10%'});
  }, 1100);
  $('#slide-03 img[src="images/group_structure_wheel(1).png"]').fadeOut(1000);
  $('#slide-03 img[src="images/line_01.png"]').fadeOut(1000);
  $('#slide-03 #seventy-six-percent').fadeOut(1000);
  $('#slide-03 #seventy-six-percent-one').fadeOut(1000);
  $('#slide-03 #seventy-six-percent-two').fadeOut(1000);
  $('#slide-03 img[src="images/line_02.png"]').fadeOut(1000);
  $('#slide-03 #seventeen-percent').fadeOut(1000);
  $('#slide-03 #seventeen-percent-one').fadeOut(1000);
  $('#slide-03 #seventeen-percent-two').fadeOut(1000);
  $('#slide-03 img[src="images/line_03.png"]').fadeOut(1000);
  $('#slide-03 #two-four-percent').fadeOut(1000);
  $('#slide-03 #two-four-percent-one').fadeOut(1000);
  $('#slide-03 img[src="images/line_04.png"]').fadeOut(1000);
  $('#slide-03 #two-four-2-percent').fadeOut(1000);
  $('#slide-03 #two-four-2-percent-one').fadeOut(1000);
  $('#slide-03 #two-four-2-percent-two').fadeOut(1000);
  $('#slide-03 img[src="images/line_05.png"]').fadeOut(1000);
  $('#slide-03 #one-two-percent').fadeOut(1000);
  $('#slide-03 #one-two-percent-one').fadeOut(1000);
  $('#slide-03 #one-two-percent-two').fadeOut(1000);
  $('#slide-03 img[src="images/line_06.png"]').fadeOut(1000);
  $('#slide-03 #one-percent').fadeOut(1000);
  $('#slide-03 #one-percent-one').fadeOut(1000);
  $('#slide-03 #one-percent-two').fadeOut(1000);
}
function populateSlideFour() {
  $('#slide-04 .slide-caption').animate({
    'top': '10%',
    'opacity': 'show'
  }, 1500);
  setTimeout(function() {
    $('#slide-04 #year-2013-trans').fadeIn(1000);
    $('#slide-04 #tfp-1').fadeIn(1000);
  }, 1400);
  setTimeout(function() {
    $('#slide-04 #year-2013-fuel').fadeIn(1000);
    $('#slide-04 #tfp-2').fadeIn(1000);
  }, 1600);
  setTimeout(function() {
    $('#slide-04 #year-2014-trans').fadeIn(1000);
    $('#slide-04 #tfp-3').fadeIn(1000);
  }, 1800);
  setTimeout(function() {
    $('#slide-04 #year-2014-fuel').fadeIn(1000);
    $('#slide-04 #tfp-4').fadeIn(1000);
  }, 2000);
  setTimeout(function() {
    $('#slide-04 #year-2013').fadeIn(1000);
    $('#slide-04 #year-2014').fadeIn(1000);
  }, 2200);
}
function emptySlideFour() {
  $('#slide-04 .slide-caption').fadeOut(1000);
  setTimeout(function() {
    $('#slide-04 .slide-caption').css({'top': '1%'});
  }, 1100);
  $('#slide-04 #year-2013-trans').fadeOut(1000);
  $('#slide-04 #tfp-1').fadeOut(1000);
  $('#slide-04 #year-2013-fuel').fadeOut(1000);
  $('#slide-04 #tfp-2').fadeOut(1000);
  $('#slide-04 #year-2014-trans').fadeOut(1000);
  $('#slide-04 #tfp-3').fadeOut(1000);
  $('#slide-04 #year-2014-fuel').fadeOut(1000);
  $('#slide-04 #tfp-4').fadeOut(1000);
  $('#slide-04 #year-2013').fadeOut(1000);
  $('#slide-04 #year-2014').fadeOut(1000);
}
jQuery(document).ready(function() {

  adjustSlidesHeight();
  $(window).on('resize', adjustSlidesHeight);
  $(window).on('resize', adjustSlide02Text);
  $(window).on('resize', adjustSlide03Text);
  $(window).on('resize', adjustSlide04Text);
  $(window).on('resize', adjustSlide05Text);
  $('.arrow-up').on('click', nextSlide);
  $('.arrow-down').on('click', previousSlide);
});
