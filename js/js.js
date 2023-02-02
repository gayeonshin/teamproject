// 햄버거 나오게 
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
// 햄버거 나오게 끝

// 햄버거 메뉴 리스트 시작
$(function () {
    $(".scroll_list>li").click(function () {
        $(".list_li").stop().slideUp();
        $(this).find(".list_li").stop().slideToggle();
    });
});

// 화살표바뀌는 코드
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
    
    // $('#aside').on('scroll touchmove mousewheel', function (event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     return false;
    // });

    // $('#side_menu_area').off('scroll touchmove mousewheel');
});
// 화살표 끝

// 햄버거 메뉴 리스트 끝