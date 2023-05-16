var init = {
    topRightNav : function(){
        if(!$('.showNav').length > 0){
            return false;
        }
        $('.showNav').bind('mouseover',function(){
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
    },
    gnbNav : function(){
        if(!$('#gnb').length > 0){
            return false;
        }        
        $('.headerGnb>li>a').bind('mouseover',function(){
            $('.subGnbLayer').stop().slideUp();
            $(this).next().stop().slideDown();
        });
        $(document).bind('mouseover', function(e) {
            var $clicked = $(e.target);
            if (!$clicked.parents().hasClass("headerGnb"))
            $('.subGnbLayer').stop().slideUp();
        });
    }
}
$(document).ready(function(){
    init.topRightNav(); // 우측상단 네비
    init.gnbNav(); // 상단 네비
});