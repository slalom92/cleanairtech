 var winWidthPx = $(window).width();
 var init = {
    setting : function(){
        if(winWidthPx>=1280){
            $('.headerNav').removeClass('mobileType').addClass('pcType');
        }else{
            $('.headerNav').removeClass('pcType').addClass('mobileType');
        }
    },
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
        if(winWidthPx>=1280){
            $(document).on('mouseover','.pcType .headerGnb>li>a',function(){
                $('.pcType .headerGnb>li>a').removeClass('is_active');
                $(this).addClass('is_active');
                if($(this).next().css('display')=='block'){
                    return false;
                }
                $('.pcType .subGnbLayer').slideUp(200);
                $(this).next().stop().slideDown();
            });
            $(document).on('mouseover', function(e) {
                var $clicked = $(e.target);
                if (!$clicked.parents().hasClass("headerGnb")){
                    $('.pcType .headerGnb>li>a').removeClass('is_active');
                    $('.pcType .subGnbLayer').slideUp(200);
                }
            });
            return false;
        }else{
            // 하위 카테고리 유무
            $('.categoryOne>h5').each(function(){
                if($(this).next('ul').length<1){
                    $(this).find('a').addClass('no_category');
                }
            });
            $(document).on('click','.mobileType .headerGnb>li>a',function(){
                if(!$('.mobileType .subGnbLayer').is(':animated')){
                    $('.mobileType .headerGnb>li>a').removeClass('is_active');
                    $(this).addClass("is_active");
                    $('.mobileType .subGnbLayer').stop().slideUp();
                    $(this).next('.mobileType .subGnbLayer').stop().slideDown();
                }
                return false;
            });
            $(document).on('click','.mobileType .headerGnb>li>a.is_active',function(){
                if(!$('.mobileType .subGnbLayer').is(':animated')){
                    $('.mobileType .headerGnb>li>a').removeClass('is_active');
                    $('.mobileType .subGnbLayer').stop().slideUp();
                }
                return false;
            });
            $(document).on('click','.mobileType .headerGnb>li .categoryOne>h5>a',function(){
                if(!$('.mobileType .headerGnb>li .categoryOne>ul').is(':animated')){
                    $('.mobileType .headerGnb>li .categoryOne>h5>a').removeClass('is_active');
                    $(this).addClass("is_active");
                    $('.mobileType .headerGnb>li .categoryOne>ul').stop().slideUp();
                    $(this).parent().next('ul').stop().slideDown();
                }
                return false;
            });
            $(document).on('click','.mobileType .headerGnb>li .categoryOne>h5>a.is_active',function(){
                if(!$('.mobileType .headerGnb>li .categoryOne>ul').is(':animated')){
                    $('.mobileType .headerGnb>li .categoryOne>h5>a').removeClass('is_active');
                    $('.mobileType .headerGnb>li .categoryOne>ul').stop().slideUp();
                }
                return false;
            });
        }
    },
    gnbScroll : function(){
        var winTop = $(window).scrollTop();
        if(winWidthPx>=1280){
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
    init.setting();
    init.topRightNav(); // 우측상단 네비
    init.gnbNav(); // 상단 네비
    init.gnbScroll(); // 상단 네비 고정
});
// 리사이즈 시 호출
$(window).on('resize',function(){
    winWidthPx = $(window).width();
    init.setting();
    init.topRightNav(); // 우측상단 네비
    init.gnbNav(); // 상단 네비
    init.gnbScroll(); // 상단 네비 고정
});