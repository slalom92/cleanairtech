var winWidthPx = $(window).width();
var init_mobile = {
   gnbNav : function(){
       if(!$('#gnb').length > 0){
           return false;
       }
        // 하위 카테고리 유무
        $('.categoryOne>h5').each(function(){
            if($(this).next('ul').length<1){
                $(this).find('a').addClass('no_category');
            }
        });
        $('.headerGnb>li>a').on('click',function(){
            if($(this).next().css('display')=='none'){
                $('.headerGnb>li>a').removeClass('is_active');
                $(this).addClass("is_active");
                $('.subGnbLayer').stop().slideUp();
                $(this).next('.subGnbLayer').stop().slideDown();
            }else{
                $('.headerGnb>li>a').removeClass('is_active');
                $('.subGnbLayer').stop().slideUp();
            }
            return false;
        });
        $('.headerGnb>li .categoryOne>h5>a').on('click',function(){
            if($(this).parent().next('ul').css('display')=='none'){
                $('.headerGnb>li .categoryOne>h5>a').removeClass('is_active');
                $(this).addClass("is_active");
                $('.headerGnb>li .categoryOne>ul').stop().slideUp();
                $(this).parent().next('ul').stop().slideDown();
            }else{
                $('.headerGnb>li .categoryOne>h5>a').removeClass('is_active');
                $('.headerGnb>li .categoryOne>ul').stop().slideUp();
            }
            return false;
        });
   },
   gnbScroll : function(){
        $('.headerNav').css({
            'position':'absolute'
        });
   }
}
// 문서 호출 시
$(document).ready(function(){
    //PC 사이즈
    winWidthPx = $(window).width();
    if(winWidthPx<1280){
        init_mobile.gnbNav(); // 상단 네비
        init_mobile.gnbScroll(); // 상단 네비 고정
    }else{
        init_mobile.gnbNav().destory(); // 상단 네비
        init_mobile.gnbScroll().destory(); // 상단 네비 고정
        return false;
    }
});
// 리사이즈 시 호출
$(window).on('resize',function(){
    if(winWidthPx<1280){
        winWidthPx = $(window).width();
        init_mobile.gnbNav(); // 상단 네비
        init_mobile.gnbScroll(); // 상단 네비 고정
    }else{
        init_mobile.gnbNav().destory(); // 상단 네비
        init_mobile.gnbScroll().destory(); // 상단 네비 고정
        return false
    }
});