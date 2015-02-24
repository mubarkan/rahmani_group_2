function adjustSlidesHeight() {
  var height = $(window).height();
  $('.slides-body').css({
    'height': height-100
  });
  $('#slide-01').css({
    'height': height-100
  });
}

jQuery(document).ready(function() {

  adjustSlidesHeight();
  $(window).on('resize', adjustSlidesHeight);

});
