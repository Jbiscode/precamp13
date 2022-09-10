var slider = $('#slider')
var banners = slider.find('#banners')
var banner = banners.find('li')
var bannerCount = banner.length
var startIndex = 0;
var bannerWidth = 100;
var bannerMargin = 20;
var viewBanner = 3;

var clickMove;  
var newBanner;

banners.append(banner.clone().addClass('clone'))
banners.prepend(banner.clone().addClass('clone'))



// 배너 사이즈, 슬라이더너비 를 설정하는 함수
function bannerLayout(bw,bm){
    newBanner = $('#banners li');
    clickMove = bw + bm;
    $('#banners').css({width:(bannerWidth+bannerMargin)*bannerCount*3+'px'});
    $('#slider').css({width:(bannerWidth+bannerMargin)*viewBanner+'px'});
    $('#banners li').css({marginRight:bannerMargin+'px'});

    newBanner.each(function(idx){
        $(this).css({left:clickMove * idx+'px',width:bw+'px'});
    });
}
bannerLayout(bannerWidth,bannerMargin);



// 클론하기전 원래 위치값으로 이동시켜주기
function setBannerPosition(){
    var slidePosition = -clickMove * bannerCount +'px'
    banners.css({transform:'translateX('+slidePosition+')'});
}
setBannerPosition()





$(function(){
    $("#leftBtn").click(function(){
        slideBanner(startIndex + 1);
});
    $("#rightBtn").on('click',function(){
        slideBanner(startIndex - 1);
    });
})


// 배너 이동시키기 margin으로
function slideBanner(num){
    banners.animate({marginLeft:clickMove * -num +'px'},200,function(){
        if(startIndex == bannerCount || startIndex == -bannerCount){
            banners.css({marginLeft:'0px'});
            startIndex=0;
        }
    });
    startIndex = num;
    console.log(startIndex,bannerCount);
    
    }

