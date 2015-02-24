function adjustSlidesHeight() {
  var height = $(window).height();
  console.log(height);
  $('.slides-body').css({
    'height': height-180
  });
  $('#slide-01').css({
    'height': height-180
  });
}
function adjustImgDimensions() {
  var imgUrl = $('.slides-body').find('.active').css('background-image').replace("file:///Users/Ilja/Documents/090_FREELANCE/010_CUSTOMERS/001_BILL_CARNEY/CODE/rahmani_group_2/", "").replace(/url\(|\)$/ig, "").replace(/'/ig, "");
  console.log(imgUrl);
  var img = new Image();
  img.src = imgUrl;
  var slideHeight = $(window).height();
  var slideWidth = $(window).width();
  var bgImgWidth = img.width;
  var bgImgHeight = img.height;
  console.log("bgImgWidth: " + bgImgWidth);
  console.log("bgImgHeight: " + bgImgHeight);
  console.log("slideWidth: " + slideWidth);
  console.log("slideHeight: " + slideHeight);
  if (slideWidth/slideHeight >= bgImgWidth/bgImgHeight) {
    console.log("height");
  } else {
    console.log("width");
  }
}

jQuery(document).ready(function() {

  adjustSlidesHeight();
  adjustImgDimensions();
  $(window).on('resize', adjustSlidesHeight);
  $(window).on('resize', adjustImgDimensions);
});
