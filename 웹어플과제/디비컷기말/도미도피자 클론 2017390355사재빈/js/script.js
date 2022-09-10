// https://songsong.dev/entry/swiperjs-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94-%EA%B8%B0%EB%B3%B8-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0  
window.onload = function () {

    // 상단 슬라이드
    var sw_slide = new Swiper('.sw-slide', {
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 500,
        loop: true,
        navigation: {
            nextEl: '.sw-slide-next',
            prevEl: '.sw-slide-prev',
        },
        pagination: {
            el: '.sw-slide-pg',
            type: 'fraction',
        },
    });
    var sw_slide_pause = $('.sw-slide-pause');
    sw_slide_pause.click(function () {

        var temp = $(this).hasClass('sw-slide-pause-active');

        if (temp != true) {
            $(this).addClass('sw-slide-pause-active');
            sw_slide.autoplay.stop();
        } else {
            $(this).removeClass('sw-slide-pause-active');
            sw_slide.autoplay.start();
        }
    });
    var sw_benefit = new Swiper('.sw-benefit', {
        slidesPerView: 3.5,
        spaceBetween: 1,
        navigation: {
            nextEl: '.sw-benefit-next',
            prevEl: '.sw-benefit-prev',
        },
    });
    var sw_article = new Swiper('.sw-article', {
        slidesPerView: 3,
        loop: true,
        navigation: {
            nextEl: '.sw-article-next',
            prevEl: '.sw-article-prev',
        },
    });
    var menu_more = $('.menu-more');
    var moremenu = $('.moremenu');
    var more_arrow = $('.more-arrow');

    menu_more.click(function(event){
        var temp = moremenu.hasClass('moremenu-active');
        if (temp != true) {
            event.preventDefault();
            moremenu.addClass('moremenu-active');
            more_arrow.addClass('active');
        } else {
            event.preventDefault();
            moremenu.removeClass('moremenu-active');
            more_arrow.removeClass('active');
        }
    });
};