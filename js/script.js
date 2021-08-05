$(function(){
  $(".js-hamburger").on( 'click', function() {
      $(this).toggleClass('-active');
      $('.nav-wrap').toggleClass('-active');
  });
});
