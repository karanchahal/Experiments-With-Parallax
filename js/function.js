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

    var opacity = (windowScroll - $('.large-window').offset().top + 400)/(windowScroll/5);

    $('.window-tint').css({
      'opacity': opacity
    });


  }


  if(windowScroll > $('.blog-posts').offset().top - $(window).height()) {
    var offset = Math.min(0,windowScroll - $('.blog-posts').offset().top +
                ($(window).height()) - 350);

    $('.post-1').css({
      'transform':'translate('+offset+'px,'+Math.abs(offset*0.2)+'px)'
    });

    $('.post-3').css({
      'transform':'translate('+Math.abs(offset)+'px,'+Math.abs(offset*0.2)+'px)'
    });
  }


});
