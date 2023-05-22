 var winWidthPx = $(window).width();
 var init = {
    topRightNav : function(){
        if(!$('.showNav').length > 0){
            return false;
        }
        $('.showNav').on('mouseover',function(){
            $('.showNav').removeClass('is_active');
            $(this).addClass('is_active');
            $('.topMenuToggle').css({
                'display':'flex'
            });
        });
        $(document).bind('mouseover', function(e) {
            var $clicked = $(e.target);
            if (!$clicked.parents().hasClass("topMenuToggleWrap"))
            $(".topMenuToggle").hide();
        });
        return false;
    },
    gnbNav : function(){
        if(!$('#gnb').length > 0){
            return false;
        }
        if(winWidthPx>1280){
            $('.headerGnb>li>a').on('mouseover',function(){
                $('.headerGnb>li>a').removeClass('is_active');
                $(this).addClass('is_active');
                if($(this).next().css('display')=='block'){
                    return false;
                }
                $('.subGnbLayer').slideUp(200);
                $(this).next().stop().slideDown();
            });
            $(document).bind('mouseover', function(e) {
                var $clicked = $(e.target);
                if (!$clicked.parents().hasClass("headerGnb")){
                    $('.headerGnb>li>a').removeClass('is_active');
                    $('.subGnbLayer').slideUp(200);
                }
            });
        }else{
            $('.headerGnb>li>a').off('mouseover');
            $(document).off('mouseover');
            $(document).on('click','.headerGnb>li>a',function(){
                if($(this).next().css('display')=='none'){
                    $('.headerGnb>li>a').removeClass('is_active');
                    $(this).toggleClass("is_active");
                    $('.subGnbLayer').stop().slideUp();
                    $(this).next('.subGnbLayer').stop().slideDown();
                }else{
                    $('.headerGnb>li>a').removeClass('is_active');
                    $('.subGnbLayer').stop().slideUp();
                }
                return false;
            });
            $(document).on('click','.headerGnb>li .categoryOne>h5>a',function(){
                if($(this).parent().next('ul').css('display')=='none'){
                    $('.headerGnb>li .categoryOne>h5>a').removeClass('is_active');
                    $(this).toggleClass("is_active");
                    $('.headerGnb>li .categoryOne>ul').stop().slideUp();
                    $(this).parent().next('ul').stop().slideDown();
                }else{
                    $('.headerGnb>li .categoryOne>h5>a').removeClass('is_active');
                    $('.headerGnb>li .categoryOne>ul').stop().slideUp();
                }
                return false;
            });
        }
    },
    gnbScroll : function(){
        var winTop = $(window).scrollTop();
        if(winWidthPx>1280){
            if(winTop>100){
                $('.headerNav').css({
                    'position':'fixed',
                    'top':0,
                    'left':0
                });
            }else{
                $('.headerNav').css({
                    'position':'relative'
                });
            }
        }else{
            $('.headerNav').css({
                'position':'absolute'
            });
        }
    }
}
// 문서 호출 시
$(document).ready(function(){
    //PC 사이즈
    winWidthPx = $(window).width();  
    init.topRightNav(); // 우측상단 네비
    init.gnbNav(); // 상단 네비
    init.gnbScroll(); // 상단 네비 고정
});
// 리사이즈 시 호출
$(window).on('resize',function(){
    winWidthPx = $(window).width();
    init.topRightNav(); // 우측상단 네비
    init.gnbNav(); // 상단 네비
    init.gnbScroll(); // 상단 네비 고정
});