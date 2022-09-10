window.onload = function () {
    var popup_open = $('#viewPop');
    var popup_close = $('#pop-close');
    var popup = $('#popup');

    //처음에 켰을때 팝업숨기기
    popup.hide();

    $(function(){
        popup_open.on("click",function(){
            popup.show();
        })
    })

    $(function(){
        popup_close.on("click",function(){
            popup.hide();
        })
    })
}