 var winWidthPx = $(window).width(); 
 var winTop = $(window).scrollTop();
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
        if(winWidthPx>=1280){ //PC
            $('.headerNav').show();
            var showHidden = true;
            $('.headerMene').bind('click',function(){
                $('.subGnbLayer').each(function(){
                    if($(this).css('display')=='none'){
                        showHidden = true;
                    }else{
                        showHidden = false;
                    }
                });
                if(showHidden){
                    $('.headerGnb>li').eq(1).find('a').first('a').addClass('is_active');                
                    $('.headerGnb>li').eq(1).find('a').first('a').next().stop().slideDown();
                }else{
                    $('.headerGnb>li>a').removeClass('is_active');                
                    $('.headerGnb>li .subGnbLayer').stop().slideUp();
                }
                return false;
            });
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
                if (!$clicked.parents().hasClass("headerNavFlex")){
                    $('.pcType .headerGnb>li>a').removeClass('is_active');
                    $('.pcType .subGnbLayer').slideUp(200);
                }
            });
            return false;
        }else{ // mobile
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
            $('.hambergerBtn').bind('click',function(){
                if(!$('.headerNav').is(':animated')){
                    $('.headerNav .bgLayer').stop().fadeIn();
                    setTimeout(function(){
                        $('.headerNav').css('overflow-y','visible');
                    },300);
                    $('.headerNav').delay(100).stop().animate({'width':'94%'},500);
                    $('.headerNav>.wrapper,.headerNavFlex').stop().animate({'width':'100%'},300);
                }
            });
            var startX,startY, endX,endY;
            $(document).on('touchstart','.headerNav.mobileType',function(event){
                startX = event.originalEvent.changedTouches[0].screenX;
            });
            $(document).on('touchend','.headerNav.mobileType',function(event){
                endX=event.originalEvent.changedTouches[0].screenX;
                if(startX-endX>100){
                    if(!$('.headerNav').is(':animated')){
                        $('.headerNav .bgLayer').stop().fadeOut();
                        $('.headerNav').css('overflow-y','hidden');
                        $('.headerNav').stop().animate({'width':0},300);
                        $('.headerNav>.wrapper,.headerNavFlex').stop().animate({'width':'0'},500);
                    }
                }
            });
            $(document).on('mousedown',function(event){
                startX = event.clientX;                
            });
            $(document).on('mouseup',function(event){
                endX = event.clientX;
                if(startX-endX>100){
                    if(!$('.headerNav').is(':animated')){
                        $('.headerNav .bgLayer').fadeOut();
                        $('.headerNav').css('overflow-y','hidden');
                        $('.headerNav').stop().animate({'width':0},300);
                        $('.headerNav>.wrapper,.headerNavFlex').stop().animate({'width':'0'},500);
                    }
                }
            });
        }
    },
    gnbScroll : function(){
        if(winWidthPx>=1280){
            if($('body').hasClass('sub_1')||$('body').hasClass('sub_2')){
                if(winTop>412){
                    $('.tabType1Flex').addClass('fixed');
                    $('.tabType1Flex').css({
                        'position':'fixed',
                        'z-index':5,
                        'top':0,
                        'left':0,
                        'width':'100%',
                        'height' : '52px'
                    });
                }else{
                    $('.tabType1Flex').removeClass('fixed');
                    $('.tabType1Flex').css({
                        'position':'relative',
                        'height' : '68px'
                    });
                }
            }else{                
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
        }else{
            $('.headerNav').css({
                'position':'absolute'
            });
        }
    },
    rightMenuToggle : function(){
        if($('.sideBox').length>0){
            if($('.sideBox').css('display')=='none'){
                return false;
            }
            $('.sideBoxbtn').bind('click',function(){
                if(!$('.sideBox').hasClass('off')){                
                    $('.sideBox>ul,.sideBox>div').stop().slideUp(300);
                    var hideFn = setTimeout(function(){
                        $('.sideBox').addClass('off').removeClass('on');
                        $('.sideBoxbtn').text('Open').css({
                            'border-radius' : '4px 4px 0 0'
                        });
                    },300);
                }else{
                    $('.sideBox>ul,.sideBox>div').stop().slideDown(300);
                    var hideFn = setTimeout(function(){
                        $('.sideBox').removeClass('off').addClass('on');
                        $('.sideBoxbtn').text('Close').css({
                            'border-radius' : '0 0 4px 4px'
                        });
                    },300);
                }
                return false;
            });
        }
    },
    rightMenuScroll : function(){
        var setToppx = '472px';
        if($('body').hasClass('sub_3')||$('body').hasClass('sub_4')){
            setToppx = '212px'
        }else{
            setToppx = '472px'
        }
        if(winTop>100){
            $('.sideBox').css({
                'top' : winTop+ 112 +'px'
            });
        }else{
            $('.sideBox').css({
                'top' : setToppx
            });
        }
    },
    rightMenuHide : function(){
        if(winWidthPx<=1700){
            $('.sideBox').stop().animate({
                'margin-left' : '500px'
            },300);
            $('.sideBox>ul,.sideBox>div').stop().slideUp(300);
                var hideFn = setTimeout(function(){
                $('.sideBox').addClass('off').removeClass('on');
                $('.sideBoxbtn').text('Open').css({
                    'border-radius' : '4px 4px 0 0'
                });
            },300);
        }else{
            $('.sideBox').stop().animate({
                'margin-left' : '700px'
            },300);
        }
    },
    scrollTopMobile : function(){
        if(winWidthPx<1280){
            if(winTop>100){
                $('.mobileTopBtn').stop().show();
            }else{
                $('.mobileTopBtn').stop().hide();
            }
        }else{
            $('.mobileTopBtn').stop().hide();
        }
    },
    locationFn : function(){
        $('.locationState .posRel>a').bind('click',function(){
            
            if(!$(this).next().is(':animated')){
                if(!$(this).find('.iconText1').hasClass('on')){
                    $('.locationDropdown').stop().slideUp();
                    $(this).next().stop().slideDown();
                    $('.iconText1').removeClass('on');
                    $(this).find('.iconText1').addClass('on');
                }else{
                    $(this).next().stop().slideUp();
                    $(this).find('.iconText1').removeClass('on');
                }                
            }
            return false;
        });
    }
}
// 문서 호출 시
$(document).ready(function(){
    //PC 사이즈
    winWidthPx = $(window).width();
    winTop = $(window).scrollTop();  
    init.setting();
    init.topRightNav(); // 우측상단 네비
    init.gnbNav(); // 상단 네비
    init.gnbScroll(); // 상단 네비 고정
    init.rightMenuToggle(); // 우측 퀵메뉴
    init.rightMenuHide(); // 우측네비 자동
    init.scrollTopMobile(); // 하단 버튼 호출
    init.rightMenuScroll(); // 우측 퀵메뉴
    init.locationFn(); // 로케이션 토글
});
// 리사이즈 시 호출
$(window).on('resize',function(){
    winTop = $(window).scrollTop();
    winWidthPx = $(window).width();
    init.setting();
    init.topRightNav(); // 우측상단 네비
    init.gnbNav(); // 상단 네비
    init.gnbScroll(); // 상단 네비 고정
    init.rightMenuHide(); // 우측네비 자동
    init.scrollTopMobile(); // 하단 버튼 호출
});
// 스크롤 시 호출
$(window).on('scroll',function(){
    winTop = $(window).scrollTop();
    winWidthPx = $(window).width();
    init.gnbScroll(); // 상단 네비 고정
    init.rightMenuScroll(); // 우측 퀵메뉴
    init.scrollTopMobile(); // 하단 버튼 호출
});