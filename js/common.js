 var winWidthPx = innerWidth; 
 var winTop = $(window).scrollTop();
 var init = {
    setting : function(){
        if(winWidthPx>=1280){
            $('.headerNav').removeClass('mobileType').addClass('pcType');
        }else{
            $('.headerNav').removeClass('pcType').addClass('mobileType');
        }
        var subString = $('body').attr('class');
        var subNum = parseInt(subString.replace("sub_",""))-2;
        if(subNum<0){
            return false;
        }else{
            $('.headerGnb>li').eq(subNum).find('a').first('a').addClass('nowMenu');   
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
        $('.topMenuToggle a').on('mouseover',function(){
            var thisIdx = $(this).parentsUntil('ul').parent().index();
            $('.showNav').removeClass('is_active').eq(thisIdx).addClass('is_active');
        });
        $('.headerSubnav li:nth-child(3),.headerSubnav li:nth-child(4)').on('mouseover',function(){
            $('.showNav').removeClass('is_active');
            $('.topMenuToggle').css({
                'display':'none'
            });
        });
        $(window).on('mouseover', function(e) {
            // alert(1);
            var $clicked = $(e.target);
            if (!$clicked.parents().hasClass("topMenuToggleWrap")){
                $(".topMenuToggle").hide();
                $('.showNav').removeClass('is_active');
            }
        });
        return false;
    },
    gnbNav : function(){
        var showHidden = 'hidden';
        if(!$('#gnb').length > 0){
            return false;
        }
        // console.log(winWidthPx);
        var pcGnbFn = function(){
            $('.headerNav').show();
            $('.headerMene').bind('click',function(){
                if(!$('.subGnbLayer').is(':animated')){
                    $('.headerGnb>li .subGnbLayer').stop().hide();
                    $('.dimmed').stop().hide();
                    $('.sideBox').css('z-index',5);
                }
                if(!$('.showAllLayer').is(':animated')){
                    if($('.showAllLayer').css('display')!='none'){
                        $(this).next().stop().hide();
                        $('.dimmed2').stop().hide();
                        $(this).removeClass('active');
                        $('.sideBox').css('z-index',5);
                    }else{
                        $(this).next().stop().show();
                        $('.dimmed2').stop().show();
                        $(this).addClass('active');
                        $('.sideBox').css('z-index',1);
                    }

                    // $('.subGnbLayer').each(function(){
                    //     if(!$(this).css('display')=='none'){
                    //         showHidden = 'show';
                    //         return false;
                    //     }
                    // });
                    // if(showHidden=='hidden'){
                    //     $('.headerGnb>li').eq(1).find('a').first('a').addClass('is_active');                
                    //     // $('.headerGnb>li').eq(1).find('a').first('a').next().css('height','auto').stop().slideDown();
                    //     $('.headerGnb>li').eq(1).find('a').first('a').next().css('height','auto').stop().show();
                    //     // $('.dimmed').fadeIn();
                    //     $('.dimmed').show();
                    //     showHidden = 'show';
                    // }else{
                    //     $('.headerGnb>li>a').removeClass('is_active');                
                    //     // $('.headerGnb>li .subGnbLayer').stop().slideUp(200);
                    //     $('.headerGnb>li .subGnbLayer').stop().hide();
                    //     // $('.dimmed').stop().fadeOut(200);
                    //     $('.dimmed').stop().hide();
                    //     showHidden = 'hidden';
                    // }
                }
                return false;
            });
            // 바깥 클릭시 닫기
            $('.dimmed2').bind('click',function(){
                $('.showAllLayer,.dimmed2').stop().hide();
                $('.headerMene').removeClass('active');
            });
            $(document).on('mouseover','.headerGnb>li>a',function(){
                // if(!$('.subGnbLayer').is(':animated')){
                    $('.showAllLayer,.dimmed2').stop().hide();
                    $('.headerMene').removeClass('active');
                    $('.headerGnb>li>a').removeClass('is_active');
                    $(this).addClass('is_active');
                    $('.sideBox').css('z-index',1);
                    // if($(this).next().css('display')=='block'){
                        // return false;
                    // }
                    // $('.subGnbLayer').slideUp(200);
                    $('.subGnbLayer').hide();
                    // $(this).next().stop().slideDown();
                    $(this).next().stop().show();
                    // $('.dimmed').fadeIn();
                    $('.dimmed').show();
                    showHidden = 'show';
                // }
            });
            $(document).on('mouseover', function(e) {
                // if(!$('.subGnbLayer').is(':animated')){
                    if($('.showAllLayer').css('display')=='block'){
                        return false;
                    }
                    var $clicked = $(e.target);
                    if (!$clicked.parents().hasClass("headerNavFlex")){
                    }
                    if (!$clicked.parents().hasClass("headerNavFlex")){
                        
                        $('.sideBox').css('z-index',5);
                        $('.headerGnb>li>a').removeClass('is_active');
                        // $('.subGnbLayer').stop().slideUp(200);
                        $('.subGnbLayer').stop().hide();
                        // $('.dimmed').stop().fadeOut(200);
                        $('.dimmed').stop().hide();
                        // showHidden = 'hidden';
                        showHidden = 'hidden';
                    }
                // }
            });
            $('.headerNav').removeAttr('overflow-y','visible');
            $('.headerNav').stop().animate({'width':'100%'},0);
            $('.headerNav>.wrapper,.headerNavFlex').stop().animate({'width':'1280px'},0);
        }
        var mobileGnbFn = function(){
            $('.subGnbLayer').css('height','auto');
            $(document).on('mouseover','.headerGnb>li>a',function(){
                // console.log(showHidden);
                return
            });
            // 하위 카테고리 유무
            $('.categoryOne>h5').each(function(){
                if($(this).next('ul').length<1){
                    $(this).find('a').addClass('no_category');
                }
            });
            $(document).on('click','.headerGnb>li>a',function(){
                if(!$('.subGnbLayer').is(':animated')){
                    $('.headerGnb>li>a').removeClass('is_active');
                    $(this).addClass("is_active");
                    $('.subGnbLayer').stop().slideUp(200).css('height','auto');
                    $(this).next('.subGnbLayer').stop().slideDown();
                }
                return false;
            });
            $(document).on('click','.headerGnb>li>a.is_active',function(){
                if(!$('.subGnbLayer').is(':animated') && !$('.headerGnb>li .categoryOne>ul').is(':animated')){
                    $('.headerGnb>li>a').removeClass('is_active');
                    $('.subGnbLayer').stop().slideUp(200).css('height','auto');
                }
                return false;
            });
            $(document).on('click','.headerGnb>li .categoryOne>h5>a',function(){
                if(!$('.headerGnb>li .categoryOne>ul').is(':animated')){
                    if($(this).hasClass('is_active')){
                        $('.headerGnb>li .categoryOne>h5>a').removeClass('is_active');
                        $('.headerGnb>li .categoryOne>ul').stop().slideUp(200);
                        $('.subGnbLayer').css('height','auto');
                        return false;
                    }else{
                        $('.headerGnb>li .categoryOne>h5>a').removeClass('is_active');
                        $(this).addClass("is_active");
                        $('.headerGnb>li .categoryOne>ul').stop().slideUp(200);
                        $('.subGnbLayer').css('height','auto');
                        $(this).parent().next('ul').stop().slideDown();
                        return false;
                    }
                }
            });
            $('.hambergerBtn').bind('click',function(){
                if(!$('.headerNav').is(':animated')){
                    if(!$('.subGnbLayer').is(':animated')){
                        $('.headerGnb>li>a').removeClass('is_active');
                        $('.subGnbLayer').stop().slideUp();
                    }
                    if(!$('.headerGnb>li .categoryOne>ul').is(':animated')){
                        $('.headerGnb>li .categoryOne>h5>a').removeClass('is_active');
                        $('.headerGnb>li .categoryOne>ul').stop().slideUp();
                    }
                    $('.headerNav .bgLayer').stop().fadeIn();
                    setTimeout(function(){
                        $('.headerNav').css('overflow-y','visible');
                    },300);
                    $('.headerNav').delay(100).stop().animate({'width':'280px'},500);
                    $('.headerNav>.wrapper,.headerNavFlex').stop().animate({'width':'280px'},300);
                }
            });
            $('.headerNav .bgLayer').hide();
            // $('.headerNav').css('overflow-y','hidden');
            $('.headerNav').stop().animate({'width':0},0);
            $('.headerNav>.wrapper,.headerNavFlex').stop().animate({'width':'0'},0);
            var startX,startY, endX,endY;
            $(document).on('touchstart','.headerNav',function(event){
                startX = event.originalEvent.changedTouches[0].screenX;
            });
            $(document).on('touchend','.headerNav',function(event){
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
            $(document).on('click', function(e) {
                var $clicked = $(e.target);
                if (!$clicked.parents().hasClass("headerNavFlex")){
                    if(!$('.headerNav').is(':animated')){
                        $('.headerNav .bgLayer').fadeOut();
                        $('.headerNav').css('overflow-y','hidden');
                        $('.headerNav').stop().animate({'width':0},300);
                        $('.headerNav>.wrapper,.headerNavFlex').stop().animate({'width':'0'},500);
                    }
                }
            });
        }
        if(winWidthPx>=1280){ //PC
            $(document).off(mobileGnbFn());
            pcGnbFn();
            return false;
        }else{ // mobile
            $(document).off(pcGnbFn());
            mobileGnbFn();
            return false;
        }
    },
    gnbScroll : function(){
        if(winWidthPx>=1280){
            $('.headerFlex').css({
                'padding-bottom' : 0,
                'margin-bottom' : 0,
                'border-bottom':'none'});
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
                    if($('.showAllLayer').css('display')!='none'){
                        $('.showAllLayer').stop().hide();
                        $('.dimmed2').stop().hide();
                        $('.headerMene').removeClass('active');
                        $('.sideBox').css('z-index',5);
                    }
                }else{
                    $('.tabType1Flex').removeClass('fixed');
                    $('.tabType1Flex').css({
                        'position':'relative',
                        'height' : '68px',
                        'z-index':1,
                    });
                }
            }else{                
                if(winTop>100){
                    $('.headerNav').css({
                        'position':'fixed',
                        'top':0,
                        'left':0
                    });                    
                    if($('.showAllLayer').css('display')!='none'){
                        $('.showAllLayer').stop().hide();
                        $('.dimmed2').stop().hide();
                        $('.headerMene').removeClass('active');
                        $('.sideBox').css('z-index',5);
                    }
                    $('.pcTopBtn').stop().show();
                }else{
                    $('.headerNav').css({
                        'position':'relative'
                    });
                    $('.pcTopBtn').stop().hide();
                }
            }
            $('.pcTopBtn').bind('mouseover',function(){
                $('.pcTopBtn span').eq(0).stop().animate({
                    'top':'-48px'
                },100,'linear');
                $('.pcTopBtn span').eq(1).stop().animate({
                    'top':'0'
                },100,'linear');
            });
            $('.pcTopBtn').bind('mouseout',function(){
                $('.pcTopBtn span').eq(0).stop().animate({
                    'top':'0'
                },100,'linear');
                $('.pcTopBtn span').eq(1).stop().animate({
                    'top':'48px'
                },100,'linear');
            });
        }else{
            $('.headerNav').css({
                'position':'absolute'
            });
            if(winTop>70){
                $('.headerFlex .search').hide();
                $('.headerFlex').css({
                    'padding-bottom' : 0,
                    'margin-bottom' : 0,
                    'border-bottom':'1px solid #E2E5EB'});
            }else{
                $('.headerFlex .search').show();
                $('.headerFlex').css({
                    'padding-bottom' : '18px',
                    'margin-bottom' : '20px',
                    'border-bottom':'none'});
            }
        }
    },
    rightMenuToggle : function(){
        if($('.sideBox').length>0){
            if($('.sideBox').css('display')=='none'){
                return false;
            }
            $('.sideBoxbtn').bind('click',function(){
                if(!$('.sideBox>ul,.sideBox>div').is(':animated')){
                    if(!$('.sideBox').hasClass('off')){   
                        $('.sideBox').css('z-index',5);
                        $('.sideBox>ul,.sideBox>div').stop().slideUp(300);
                        var hideFn = setTimeout(function(){
                            $('.sideBox').addClass('off').removeClass('on');
                            $('.sideBoxbtn').text('Open').css({
                                'border-radius' : '4px 4px 0 0'
                            });
                        },300);
                    }else{
                        $('.sideBox').css('z-index',2);
                        $('.sideBox>ul,.sideBox>div').stop().slideDown(300);
                        var hideFn = setTimeout(function(){
                            $('.sideBox').removeClass('off').addClass('on');
                            $('.sideBoxbtn').text('Close').css({
                                'border-radius' : '0 0 4px 4px'
                            });
                        },300);
                    }
                }
                return false;
            });
        }
    },
    rightMenuScroll : function(){
        var setToppx = '472px';
        if($('body').hasClass('sub_3')||$('body').hasClass('sub_4')){
            setToppx = '212px'
            if(winTop>100){
                $('.sideBox').stop().animate({
                    'top' : winTop+ 112 +'px'
                },0);
            }else{
                $('.sideBox').stop().animate({
                    'top' : setToppx
                },0);
            }
        }else{
            setToppx = 471;
            if(winTop<100){
                $('.sideBox').stop().animate({
                    'top' :'472px'
                },0);
            }else if(winTop<308){
                $('.sideBox').stop().animate({
                    'top' : '420px'
                },0);
            }else{                
                $('.sideBox').stop().animate({
                    'top' : winTop+ 111 +'px'
                },0);
            }
        }
    },
    rightMenuHide : function(){
        if(!$('.sideBox>ul,.sideBox>div').is(':animated')){
            if(winWidthPx<=1800){
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
        }
    },
    scrollTopMobile : function(){
        if(winWidthPx<760){
            if(winTop>100){
                $('.mobileTopBtn').show().delay(3000).hide();
            }else{
                $('.mobileTopBtn').stop().hide();
            }
        }else{
            $('.mobileTopBtn').stop().hide();
        }
    },
    locationFn : function(){
        $('.locationState .posRel>a').bind('mouseover',function(){
            
            if(!$(this).next().is(':animated')){
                // if(!$(this).find('.iconText1').hasClass('on')){
                    $('.locationDropdown').stop().slideUp();
                    $(this).next().stop().slideDown();
                    $('.iconText1').removeClass('on');
                    $(this).find('.iconText1').addClass('on');
                // }else{
                    // $(this).next().stop().slideUp();
                    // $(this).find('.iconText1').removeClass('on');
                // }                
            }            
            return false;
        });
        $(document).on('mouseover', function(e) {
            var $clicked = $(e.target);
            if (!$clicked.parents().hasClass("locationState")){
                if(!$('.locationDropdown').next().is(':animated')){
                    $('.locationDropdown').stop().slideUp();
                    $('.locationState .posRel').find('.iconText1').removeClass('on');
                }
            }
        });
        
    }
}
// 문서 호출 시
$(document).ready(function(){
    //PC 사이즈
    winWidthPx = innerWidth;
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
    winWidthPx = innerWidth;
    init.setting();
    init.topRightNav(); // 우측상단 네비
    init.gnbNav(); // 상단 네비
    init.gnbScroll(); // 상단 네비 고정
    init.rightMenuHide(); // 우측네비 자동
    init.scrollTopMobile(); // 하단 버튼 호출
    init.locationFn(); // 로케이션 토글
});
// 스크롤 시 호출
$(window).on('scroll',function(){
    init.setting();
    winTop = $(window).scrollTop();
    winWidthPx = innerWidth;
    init.gnbScroll(); // 상단 네비 고정
    init.rightMenuScroll(); // 우측 퀵메뉴
    init.scrollTopMobile(); // 하단 버튼 호출
    init.locationFn(); // 로케이션 토글
});