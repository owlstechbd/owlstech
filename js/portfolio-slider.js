const swiper3 = new Swiper('.portfolio-slider', {
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false, 
    },
    speed: 3000,          
    slidesPerView: 3, 
    spaceBetween: 10,  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
  });