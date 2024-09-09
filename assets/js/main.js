$(document).ready(function() {
    $('.faq-header').on('click', function() {
      var content = $(this).next('.faq-content');


      $('.faq-content').not(content).slideUp();
      $('.faq-header').not(this).removeClass('active');

  
      content.slideToggle();
      $(this).toggleClass('active');
    });
  });