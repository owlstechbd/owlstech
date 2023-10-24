document.addEventListener('DOMContentLoaded', function() {
    const leftSwiper = new Swiper('.left-slider', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false, 
        },
        speed: 9000,          //add
        slidesPerView: 4,
    });

    const rightSwiper = new Swiper('.right-slider', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false, 
        },
        speed: 9000,          //add
        slidesPerView: 4,
    });
});





