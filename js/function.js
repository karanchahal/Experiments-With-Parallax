$(window).scroll(function() {
  var windowScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px,'+windowScroll/2+'%)'
  });

  $('.back-bird').css({
    'transform' : 'translate(0px,'+ windowScroll/2+'%)'
  });

  $('.fore-bird').css({
    'transform' : 'translate(0px,'+ -windowScroll/40+'%)'
  });

  if(windowScroll > $('.clothes-pics').offset().top - $(window).height()/1.2) {
    $('.clothes-pics figure').each(function(i){
      setTimeout(function() {
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }

  if(windowScroll > $('.large-window').offset().top - $(window).height()) {

    $('.large-window').css({
      'background-position':'center '+ (windowScroll - $('.large-window').offset().top) +'px'
    });
  }

});
