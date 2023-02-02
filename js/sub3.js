// 위로슬라이드
function slide(){
    $(".roll_list").animate({marginTop:-50},function(){
        $(".roll_list li:first").appendTo(".roll_list");
        $(".roll_list").css({marginTop:0});
    });
};

setInterval(slide,3000);
// 위로슬라이드 끝

$('#all_first_button').click(
    function(){
        location.reload();
    }
);

if ($('#all_first_button').hasClass('bb')) {

    var page=0;
    $(".prev_all").addClass('svg_color');
    $(".prev_all").click(function(){
        page--;
        $(".next_all").removeClass('svg_color');
        if(page<0){
            page=0;
            $(this).addClass('svg_color');
            return;
        }
        $(".all_menu_list").stop().animate({marginLeft:"-390"*page});
    });

    $(".next_all").click(function(){
        page++;
        $(".prev_all").removeClass('svg_color');
        if(page>$(".all_menu_list .menu_item").length-3){
            $(this).addClass('svg_color');
            page = $(".all_menu_list .menu_item").length-3;              
            return;            
        }       
        $(".all_menu_list").stop().animate({marginLeft:"-390"*page});
    });

}
else if ( $(".title_btn_list > button:nth-of-type(5)").hasClass("bb") ){

// 세트메뉴

    var page=0;
    $("#Layer_2").addClass('svg_fill_color');
    $("#Layer_2").click(function(){
        page--;
        $("#Layer_1").removeClass('svg_fill_color');
        if(page<0){
            page=0;
            $(this).addClass('svg_fill_color');
            return;
        }
        $(".set_menu_list").stop().animate({marginLeft:"-390"*page});
    });

    $("#Layer_1").click(function(){
        page++;
        $("#Layer_2").removeClass('svg_fill_color');
        if(page>$(".set_menu_list .menu_item").length-3){
            $(this).addClass('svg_fill_color');
            page = $(".set_menu_list .menu_item").length-3;           
            return;            
        }
        $(".set_menu_list").stop().animate({marginLeft:"-390"*page});
    });

}
// menu_select

$(function(){
    $(".title_btn_list>button:nth-of-type(1)").click(function(){
        $(this).css("background-color","#212121").css("color","#fff").addClass("bb");
        $(".title_btn_list>button:nth-of-type(2)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".title_btn_list>button:nth-of-type(3)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".title_btn_list>button:nth-of-type(4)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".title_btn_list>button:nth-of-type(5)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".all_menu_list").show();
        $(".next_all").show();
        $(".prev_all").show();
        $(".chicken_menu_list").hide();
        $(".pizza_menu_list").hide();
        $(".side_menu_list").hide();
        $(".set_menu_list").hide();
    });

    $(".title_btn_list>button:nth-of-type(2)").click(function(){
        $(this).css("background-color","#212121").css("color","#fff").addClass("bb");
        $(".title_btn_list>button:nth-of-type(1)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".title_btn_list>button:nth-of-type(3)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".title_btn_list>button:nth-of-type(4)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".title_btn_list>button:nth-of-type(5)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".all_menu_list").hide();
        $(".chicken_menu_list").show().css("display","flex");
        $(".next_all").hide();
        $(".prev_all").hide();
        $(".pizza_menu_list").hide();
        $(".side_menu_list").hide();
        $(".set_menu_list").hide();
    });

    $(".title_btn_list>button:nth-of-type(3)").click(function(){
        $(this).css("background-color","#212121").css("color","#fff").addClass("bb");
        $(".title_btn_list>button:nth-of-type(2)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".title_btn_list>button:nth-of-type(1)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".title_btn_list>button:nth-of-type(4)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".title_btn_list>button:nth-of-type(5)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".all_menu_list").hide();
        $(".chicken_menu_list").hide();       
        $(".pizza_menu_list").show();
        $(".side_menu_list").hide();
        $(".set_menu_list").hide();
        $(".next_all").hide();
        $(".prev_all").hide();
    });

    $(".title_btn_list>button:nth-of-type(4)").click(function(){
        $(this).css("background-color","#212121").css("color","#fff").addClass("bb");
        $(".title_btn_list>button:nth-of-type(2)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".title_btn_list>button:nth-of-type(3)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".title_btn_list>button:nth-of-type(1)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".title_btn_list>button:nth-of-type(5)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".all_menu_list").hide();
        $(".chicken_menu_list").hide();       
        $(".pizza_menu_list").hide();
        $(".side_menu_list").show();
        $(".set_menu_list").hide();
        $(".next_all").hide();
        $(".prev_all").hide();
    });

    $(".title_btn_list>button:nth-of-type(5)").click(function(){
        $(this).css("background-color","#212121").css("color","#fff").addClass("bb");
        $(".title_btn_list>button:nth-of-type(2)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".title_btn_list>button:nth-of-type(3)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".title_btn_list>button:nth-of-type(1)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".title_btn_list>button:nth-of-type(4)").css("background-color","#FBF5F0").css("color","#212121").removeClass("bb");
        $(".all_menu_list").hide();
        $(".chicken_menu_list").hide();       
        $(".pizza_menu_list").hide();
        $(".side_menu_list").hide();
        $(".set_menu_list").show().css("display","flex");
        $(".next_all").show();
        $(".prev_all").show();
    });
});
