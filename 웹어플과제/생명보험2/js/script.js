window.onload = function () {
    // 모달창
    let $modal = $('.modal');
    let $modal_close = $('.modal-close');
    let $comment_bt = $('.comment-bt');
    $modal_close.click(function () {
        $('html').css('overflow-y', 'auto');
        $modal.fadeOut(300);
    });
    $comment_bt.click(function () {

        $(this).hide();
        $(this).text('닫기').show(300);
        if ($modal.hasClass('comment-on')) {
            $(this).hide();
            $(this).text('리뷰 및 개선사항').show(300);
        }
        $modal.toggleClass('comment-on');
    });
}