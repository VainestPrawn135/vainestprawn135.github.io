$('.js-scroll-trigger').click(function(e){
  e.preventDefault();
  var offset = $($(this).attr('href')).offset().top;
  $('html, body').animate({scrollTop:offset}, 1000);
  return false;
});
