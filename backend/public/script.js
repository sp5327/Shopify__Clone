 /* swiper js code */


  var mySwiper = new Swiper('.mySwiper', {
    loop: true, // Set to true to enable infinite loop sliding
    autoplay: {
      delay: 5000, // delay between slides in millisec
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });