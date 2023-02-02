// 헤더 햄버거 메뉴 클릭 이벤트 
$(function () {
    $(".sub_menu").click(function () {
        $("#aside").css({ "display": "block" });
        $("#side_menu_area").animate({ 'right': '0%' }, 100); 
        $("#side_bg").show();
        $(window).scrollTop(0);
      
        $('#side_bg').on('scroll touchmove mousewheel', function (event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    });

    $(".close_btn").click(function () {
        $("#side_menu_area").animate({ right: '-50rem' }, 100, function () {
            $("#aside").css({ "display": "none" });
        });
        $("#side_bg").hide();
    });
});

// 햄버거 메뉴 리스트 시작
$(function () {
    $(".scroll_list>li").click(function () {
        $(".list_li").stop().slideUp();
        $(this).find(".list_li").stop().slideToggle();
    });
});

// 화살표 바뀌는 코드
$(function () {
    $(".scroll_list>li>a").click(function () {
        if ($(this).children().attr('src') == 'img/down-arrow.svg') {
            $(this).children().attr('src', 'img/up-arrow.svg');
            $(this).parent().siblings().find("img").attr('src', 'img/down-arrow.svg');
        }
        else {
            $(this).children().attr('src', 'img/down-arrow.svg');
        }
    });
    
});
// 화살표 끝
// 햄버거 메뉴 리스트 끝

// 헤더 상단 도달시 배경색 변경
$(window).scroll(function(){
    let hScroll = $(this).scrollTop();
    
    if( hScroll > 300 ){
        $("#header").addClass("header_bg_on");
    }
    else {
        $("#header").removeClass("header_bg_on");
    }
});
