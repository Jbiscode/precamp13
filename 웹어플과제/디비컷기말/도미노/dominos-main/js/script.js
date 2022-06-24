window.onload = function () {
    let modal_close = $('.modal-close');
    let modal_close_2 = $('.modal-close-2');
    let modal = $('.modal');
    let modal_review = $('.modal-review');
    let modal_review_bt = $('.modal-review-bt');

    modal_close.click(function(){
        modal.hide();
    });
    modal_close_2.click(function(){
        modal.hide();
    });
    modal_review_bt.click(function(){
        modal_review.show();
    });
    // 상단 슬라이드
    let sw_slide = new Swiper('.sw-slide', {
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
    let sw_slide_pause = $('.sw-slide-pause');
    sw_slide_pause.click(function () {

        let temp = $(this).hasClass('sw-slide-pause-active');

        if (temp != true) {
            $(this).addClass('sw-slide-pause-active');
            sw_slide.autoplay.stop();
        } else {
            $(this).removeClass('sw-slide-pause-active');
            sw_slide.autoplay.start();
        }
    });
    let sw_benefit = new Swiper('.sw-benefit', {
        slidesPerView: 3.5,
        spaceBetween: 1,
        navigation: {
            nextEl: '.sw-benefit-next',
            prevEl: '.sw-benefit-prev',
        },
    });
    let sw_article = new Swiper('.sw-article', {
        slidesPerView: 3,
        loop: true,
        navigation: {
            nextEl: '.sw-article-next',
            prevEl: '.sw-article-prev',
        },
    });
    let menu_more = $('.menu-more');
    let moremenu = $('.moremenu');
    let more_arrow = $('.more-arrow');
    menu_more.click(function(event){
        let temp = moremenu.hasClass('moremenu-active');
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

    let header_bottom = $('.header-bottom');

    $(window).scroll(function () {
        // 스크롤 바가 이동한 거리 체크
        let sc = $(window).scrollTop();
        if (sc >= 55) {
            header_bottom.addClass('header-bottom-active');
            $('.contents').css('padding-top', 55);
        } else {
            header_bottom.removeClass('header-bottom-active');
            $('.contents').css('padding-top', 0);
        }
    });
};