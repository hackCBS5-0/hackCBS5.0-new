window.addEventListener('load', function() {
    if(window.innerWidth > 580) {
        new Swiper(".swiper",{
            effect: "carousel",
            grabCursor: true,
            loop: true,
            loopedSlides: 8,
            slidesPerView: 1.8,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination"
            },
            watchSlidesProgress: true,
            centeredSlides: true,
            autoplay: {
                delay: 3000
            }
        });
    }
    else {
        new Swiper(".swiper",{
            effect: "carousel",
            grabCursor: true,
            loop: true,
            loopedSlides: 8,
            slidesPerView: 1.3,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination"
            },
            watchSlidesProgress: true,
            centeredSlides: true,
            autoplay: {
                delay: 3000
            }
        });
    }
});