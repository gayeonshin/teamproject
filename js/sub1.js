// 위로슬라이드
function slide() {
    $(".roll_list").animate({ marginTop: -50 }, function () {
        $(".roll_list li:first").appendTo(".roll_list");
        $(".roll_list").css({ marginTop: 0 });
    });
};

setInterval(slide, 3000);
// 위로슬라이드 끝

// $(function () {
//     var page = 0;
//     $(".prev_all").addClass('svg_color');
//     $(".prev_all").click(function () {
//         page--;
//         $(".next_all").removeClass('svg_color');
//         if (page < 0) {
//             page = 0;
//             $(this).addClass('svg_color');
//             return;
//         }
//         $(".all_menu_list").stop().animate({ marginLeft: "-390" * page }, "fast");
//     });

//     $(".next_all").click(function () {
//         page++;
//         $(".prev_all").removeClass('svg_color');
//         if (page > $(".all_menu_list .menu_item").length - 3) {
//             $(this).addClass('svg_color');
//             page = $(".all_menu_list .menu_item").length - 3;
//             return;
//         }
//         $(".all_menu_list").stop().animate({ marginLeft: "-180" * page }, "fast");
//     });
// });

// 세트메뉴
// $(function () {
//     var page = 0;
//     $("#Layer_2").addClass('svg_fill_color');
//     $("#Layer_2").click(function () {
//         page--;
//         $("#Layer_1").removeClass('svg_fill_color');
//         if (page < 0) {
//             page = 0;
//             $(this).addClass('svg_fill_color');
//             return;
//         }
//         $(".set_menu_list").stop().animate({ marginLeft: "-390" * page }, "fast");
//     });

//     $("#Layer_1").click(function () {
//         page++;
//         $("#Layer_2").removeClass('svg_fill_color');
//         if (page > $(".set_menu_list .menu_item").length - 3) {
//             $(this).addClass('svg_fill_color');
//             page = $(".set_menu_list .menu_item").length - 3;
//             return;
//         }
//         $(".set_menu_list").stop().animate({ marginLeft: "-390" * page }, "fast");
//     });
// });

// menu_select

$(function () {
    $(".title_btn_list>button:nth-of-type(1)").click(function () {
        $(this).css("background-color", "#212121").css("color", "#fff");
        $(".title_btn_list>button:nth-of-type(2)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(3)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(4)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(5)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".swiper2").show();
        $(".swiper4").hide();
        // $(".pizza_menu_list").hide();
        $(".swiper5").hide();
        $(".swiper3").hide();
        $(".swiper6").hide();
    });

    $(".title_btn_list>button:nth-of-type(2)").click(function () {
        $(this).css("background-color", "#212121").css("color", "#fff");
        $(".title_btn_list>button:nth-of-type(1)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(3)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(4)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(5)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".swiper2").hide();
        $(".swiper3").show();
        // $(".swiper3").show().css("display", "flex");
        $(".swiper4").hide();
        $(".swiper5").hide();
        $(".swiper6").hide();
    });

    $(".title_btn_list>button:nth-of-type(3)").click(function () {
        $(this).css("background-color", "#212121").css("color", "#fff");
        $(".title_btn_list>button:nth-of-type(2)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(1)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(4)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(5)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".swiper2").hide();
        $(".swiper3").hide();
        // $(".swiper3").show().css("display", "flex");
        $(".swiper4").show();
        $(".swiper5").hide();
        $(".swiper6").hide();
    });

    $(".title_btn_list>button:nth-of-type(4)").click(function () {
        $(this).css("background-color", "#212121").css("color", "#fff");
        $(".title_btn_list>button:nth-of-type(2)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(3)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(1)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(5)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".swiper2").hide();
        $(".swiper3").hide();
        // $(".swiper3").show().css("display", "flex");
        $(".swiper4").hide();
        $(".swiper5").show();
        $(".swiper6").hide();
    });

    $(".title_btn_list>button:nth-of-type(5)").click(function () {
        $(this).css("background-color", "#212121").css("color", "#fff");
        $(".title_btn_list>button:nth-of-type(2)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(3)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(1)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".title_btn_list>button:nth-of-type(4)").css("background-color", "#FBF5F0").css("color", "#212121");
        $(".swiper2").hide();
        $(".swiper3").hide();
        // $(".swiper3").show().css("display", "flex");
        $(".swiper4").hide();
        $(".swiper5").hide();
        $(".swiper6").show();

    });
});

// 반응형
// if(matchMedia("(max-width: 500px)").matches){ 
//     var swiper = new Swiper('.swiper2', {
//         slidesPerView: 1,
//         spaceBetween: 20,
//         direction: getDirection(),
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         on: {
//             resize: function () {
//                 swiper.changeDirection(getDirection());
//             },
//         },
//     })       
// };
