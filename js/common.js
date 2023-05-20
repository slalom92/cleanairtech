var init = {
    winWidth : $(window).width(),
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
    },
    gnbScroll : function(){
        var winTop = $(window).scrollTop();
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
    }
}
// 문서 호출 시
$(document).ready(function(){
    var winHeightPx = $(window).width();
    //PC 사이즈
    if(winHeightPx>1280){
        init.topRightNav(); // 우측상단 네비
        init.gnbNav(); // 상단 네비
        init.gnbScroll(); // 상단 네비 고정
    }
    $(window).resize(function(){
        winHeightPx = $(window).width();
        init.winWidth = winHeightPx;
        console.log(init.winWidth);
        if(winHeightPx>1280){
            init.topRightNav(); // 우측상단 네비
            init.gnbNav(); // 상단 네비
            init.gnbScroll(); // 상단 네비 고정
        }
    });
});