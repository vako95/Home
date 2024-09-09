//________________OWL CAROUSEL___________________________////
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        "<i class='fi fi-ts-angle-small-left'></i>", // Исправленные кавычки
        "<i class='fi fi-ts-angle-small-right'></i>", // Исправленные кавычки
       
    ],
    autoplay: false,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});
///////////////FAQ JS//////////////////

  $(document).ready(function() {
    $('.faq-header').on('click', function() {
      var content = $(this).next('.faq-content');

      // Закрываем все открытые
      $('.faq-content').not(content).slideUp();
      $('.faq-header').not(this).removeClass('active');

      // Открываем или закрываем выбранный
      content.slideToggle();
      $(this).toggleClass('active');
    });
  });
///////////////FAQ JS//////////////////


