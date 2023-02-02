// 메인 슬라이더
function slide(){
    $(".slider").stop().animate({marginLeft : '-100%'}, function(){
        $(".slider li:first").appendTo(".slider");
        $(".slider").css({marginLeft : 0});
    });
}
setInterval (slide, 3000);


// 헤더 상단 도달시 배경색 변경
$(window).scroll(function(){
    let hScroll = $(this).scrollTop();
    console.log(hScroll);
    
    if( hScroll > 300 ){
        $("#header").addClass("header_bg_on");
    }
    else {
        $("#header").removeClass("header_bg_on");
    }
});


// 굽뉴스 마우스 오버 효과
$(".news_wrap > div").hover(function(){
    $(this).children(".news_pic").stop().fadeIn();
}, function(){
    $(this).children(".news_pic").stop().fadeOut();
});



// 굽스터 애니메이션
// function slideSter(){
//     $(".goobster_wrap ul").stop().animate({marginLeft : '-6%'}, 1000, function(){
//         // $(".goobster_wrap ul li:first").appendTo(".goobster_wrap ul");
//         $(".goobster_wrap ul").animate({marginLeft : '-6%'});
//     });
// }
// setInterval (slideSter, 1000);




// 굽튜브 애니메이션
function slideTube(){
    $(".tube_img ul").stop().animate({marginLeft : '-33%'}, 1000, function(){
        $(".tube_img ul li:first").appendTo(".tube_img ul");
        $(".tube_img ul").css({marginLeft : 0});
    });
}
setInterval (slideTube, 3000);
