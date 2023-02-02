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

// 메인 슬라이더
var i = 0;
function slide(){
    $(".slider").stop().animate({marginLeft : '-100%'}, function(){
        i++;
        if( i >= $(".slide_circle li").length ){
            i = 0;
        }
        $(".slide_circle li").eq(i).addClass("slide_circle_on").siblings().removeClass("slide_circle_on");
        $(".slider li:first").appendTo(".slider");
        $(".slider").css({marginLeft : 0});
    });
}
setInterval (slide, 3000);


// 오븐메뉴 애니메이션
function slideOven(){
    $(".oven_menu ul").stop().animate({marginLeft : '-25%'}, 800, function(){
        $(".oven_menu ul li:first").appendTo(".oven_menu ul");
        $(".oven_menu ul").css({marginLeft : '-2.9%'});
    });
}
setInterval (slideOven, 2500);

// 오븐메뉴 반응형
if(matchMedia("(min-width: 1021px) and (max-width: 1600px)").matches){ 
    function slideOven(){
        $(".oven_menu ul").stop().animate({marginLeft : '-25%'}, 800, function(){
            $(".oven_menu ul li:first").appendTo(".oven_menu ul");
            $(".oven_menu ul").css({marginLeft : '1.8%'});
        });
    }
    setInterval (slideOven, 2500);
  }

if(matchMedia("(min-width: 901px) and (max-width: 1020px)").matches){ 
    function slideOven(){
        $(".oven_menu ul").stop().animate({marginLeft : '-25%'}, 800, function(){
            $(".oven_menu ul li:first").appendTo(".oven_menu ul");
            $(".oven_menu ul").css({marginLeft : '1.8%'});
        });
    }
    setInterval (slideOven, 2500);
  }

  if(matchMedia("(min-width: 601px) and (max-width: 900px)").matches){ 
    function slideOven(){
        $(".oven_menu ul").stop().animate({marginLeft : '-41.5%'}, 800, function(){
            $(".oven_menu ul li:first").appendTo(".oven_menu ul");
            $(".oven_menu ul").css({marginLeft : '2%'});
        });
    }
    setInterval (slideOven, 2500);
  }

  if(matchMedia("(max-width: 600px)").matches){ 
    function slideOven(){
        $(".oven_menu ul").stop().animate({marginLeft : '-73%'}, 800, function(){
            $(".oven_menu ul li:first").appendTo(".oven_menu ul");
            $(".oven_menu ul").css({marginLeft : '2%'});
        });
    }
    setInterval (slideOven, 2500);
  }


// 굽뉴스 마우스 오버 효과
$(".news_wrap > div").hover(function(){
    $(this).children(".news_pic").stop().fadeIn();
}, function(){
    $(this).children(".news_pic").stop().fadeOut();
});



// 굽스터 애니메이션
function slideSter(){
    $(".goobster_wrap ul").stop().animate({marginLeft : '-24%'}, 1000, function(){
        $(".goobster_wrap ul li:first").appendTo(".goobster_wrap ul");
        $(".goobster_wrap ul").css({marginLeft : '-9.6%'});
    });
}
setInterval (slideSter, 2000);

// 굽스터 반응형
if(matchMedia("(min-width: 1021px) and (max-width: 1600px)").matches){ 
    function slideSter(){
        $(".goobster_wrap ul").stop().animate({marginLeft : '-48%'}, 1000, function(){
            $(".goobster_wrap ul li:first").appendTo(".goobster_wrap ul");
            $(".goobster_wrap ul").css({marginLeft : '-20%'});
        });
    }
    // 사이즈 변경시 새로고침
    window.onresize = function () {
        document.location.reload();
    };
    setInterval (slideSter, 2000);
  }

  if(matchMedia("(min-width: 901px) and (max-width: 1020px)").matches){ 
    function slideSter(){
        $(".goobster_wrap ul").stop().animate({marginLeft : '-48%'}, 1000, function(){
            $(".goobster_wrap ul li:first").appendTo(".goobster_wrap ul");
            $(".goobster_wrap ul").css({marginLeft : '-20%'});
        });
    }
    // 사이즈 변경시 새로고침
    window.onresize = function () {
        document.location.reload();
    };
    setInterval (slideSter, 2000);
  }

  if(matchMedia("(min-width: 601px) and (max-width: 900px)").matches){ 
    function slideSter(){
        $(".goobster_wrap ul").stop().animate({marginLeft : '-48%'}, 1000, function(){
            $(".goobster_wrap ul li:first").appendTo(".goobster_wrap ul");
            $(".goobster_wrap ul").css({marginLeft : '-20%'});
        });
    }
    // 사이즈 변경시 새로고침
    window.onresize = function () {
        document.location.reload();
    };
    setInterval (slideSter, 2000);
  }

  if(matchMedia("(max-width: 600px)").matches){ 
    function slideSter(){
        $(".goobster_wrap ul").stop().animate({marginLeft : '-48%'}, 1000, function(){
            $(".goobster_wrap ul li:first").appendTo(".goobster_wrap ul");
            $(".goobster_wrap ul").css({marginLeft : '-20%'});
        });
    }
    setInterval (slideSter, 2000);
  }


// 굽튜브 애니메이션
function slideTube(){
    $(".tube_img ul").stop().animate({marginLeft : '-33%'}, 1000, function(){
        $(".tube_img ul li:first").appendTo(".tube_img ul");
        $(".tube_img ul").css({marginLeft : 0});
    });
}
setInterval (slideTube, 3000);

// 굽튜브 반응형
if(matchMedia("(min-width: 1021px) and (max-width: 1600px)").matches){ 
    function slideTube(){
        $(".tube_img ul").stop().animate({marginLeft : '-50%'}, 1000, function(){
            $(".tube_img ul li:first").appendTo(".tube_img ul");
            $(".tube_img ul").css({marginLeft : 0});
        });
    }
    // 사이즈 변경시 새로고침
    window.onresize = function () {
        document.location.reload();
    };
    setInterval (slideTube, 3000);
  }

  if(matchMedia("(min-width: 901px) and (max-width: 1020px)").matches){ 
    function slideTube(){
        $(".tube_img ul").stop().animate({marginLeft : '-50%'}, 1000, function(){
            $(".tube_img ul li:first").appendTo(".tube_img ul");
            $(".tube_img ul").css({marginLeft : 0});
        });
    }
    // 사이즈 변경시 새로고침
    window.onresize = function () {
        document.location.reload();
    };
    setInterval (slideTube, 3000);
  }

  if(matchMedia("(min-width: 601px) and (max-width: 900px)").matches){ 
    function slideTube(){
        $(".tube_img ul").stop().animate({marginLeft : '-100%'}, 1000, function(){
            $(".tube_img ul li:first").appendTo(".tube_img ul");
            $(".tube_img ul").css({marginLeft : 0});
        });
    }
    // 사이즈 변경시 새로고침
    window.onresize = function () {
        document.location.reload();
    };
    setInterval (slideTube, 3000);
  }

  if(matchMedia("(max-width: 600px)").matches){ 
    function slideTube(){
        $(".tube_img ul").stop().animate({marginLeft : '-100%'}, 1000, function(){
            $(".tube_img ul li:first").appendTo(".tube_img ul");
            $(".tube_img ul").css({marginLeft : 0});
        });
    }
    setInterval (slideTube, 3000);
  }



