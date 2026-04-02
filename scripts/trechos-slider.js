const trechosSlider = new Swiper('.trechos-slider', {
    loop: false,
    navigation: {
        nextEl: '.trechos-slider-next',
        prevEl: '.trechos-slider-prev',
    },
    pagination: {
        el: '.trechos-slider-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {  
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30,
        },
        '993': { 
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 54,
        },
    },
});