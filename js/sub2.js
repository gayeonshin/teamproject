$(function(){
    //popup
    $('.popmenu ul li:nth-of-type(1)').click(function(){
        $('.div1').fadeIn();
        $('.div2').hide();
        $('.div3').hide();
    });
    $('.popmenu ul li:nth-of-type(2)').click(function(){
        $('.div2').fadeIn();
        $('.div1').hide();
        $('.div3').hide();
    });
    $('.popmenu ul li:nth-of-type(3)').click(function(){
        $('.div3').fadeIn();
        $('.div1').hide();
        $('.div2').hide();
    });

    document.getElementById('popup').style.display="none";

    document.getElementsByClassName('btn')[0].onclick=function(){
        document.getElementById('popup').style.display="block";
    }
    document.getElementsByClassName('close')[0].onclick=function(){
        document.getElementById('popup').style.display="none";
    }

    // 수량+/-버튼

    var price_sum=17000;
    var sum=price_sum;
    var total_sum1;
    var total_sum2;
        
    $('.plus').click(function(){
        $(".number").val(parseInt($(".number").val())+1);
        sum=parseInt($(".number").val()*price_sum);
        $(".price_sum").html(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
    });
    $('.minus').click(function(){
        $(".number").val(parseInt($(".number").val())-1);
        sum=parseInt($(".number").val()*price_sum);
        $(".price_sum").html(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
    });
    $(".number").keyup(function(){
        if(isNaN($(".number").val())){
            alert("숫자를 입력하세요.");
            $(".number").val(1);
        }else if(($(".number").val()*10)%10!=0){
            alert("정수를 입력하세요.");
            $(".number").val(1);
        }
        sum=parseInt($(".number").val()*price_sum);
        $(".price_sum").html(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
    });

    //필수선택
    $('.item1:first-child').addClass('active1');
    $('.item1').click(function () {  
        total_sum1 = sum;

        $(this).addClass('active1').siblings().removeClass('active1');
        if ($(this).hasClass('active1')) {
            $('.list dl:nth-child(2)').remove();
            $('<dl>').appendTo('.list');
            var basic = $(this).text();   
            $('<dt>').prependTo('.list dl:last-child').text('+'+basic);
            var basic_value = $(this).attr('data-value');
            $('<dd>').appendTo('.list dl:last-child').text(basic_value + "원");
            
            total_sum1 = total_sum1 + parseInt(basic_value);
            $(".price_sum").html(total_sum1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
        }
    })
   
    //추가선택 active
    $('.item2').click(function () {
        total_sum2 = sum;

        $(this).toggleClass('active2');
        if ($(this).hasClass('active2')) {
            $('<dl>').appendTo('.addlist');
            var choice = $(this).text();
            $('<dt>').prependTo('.addlist dl:last-child').text('+'+choice);
            var choice_value = $(this).attr('data-value');
            $('<dd>').appendTo('.addlist dl:last-child').text(choice_value + "원");

            sum = total_sum2 + parseInt(choice_value);
            $(".price_sum").html(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
        }else{
            let click_text= '+'+$(this).text();
            let rm_value = $(this).attr('data-value');
            
            for (let i=0; i<$('.addlist dt').length; i++){
                let rm_text = $('.addlist dt').eq(i).text();
                
                if(click_text == rm_text){
                    $('.addlist dl').eq(i).remove();
                    total_sum2 = total_sum2 - rm_value;
                    console.log(total_sum2)
                    $(".price_sum").html(total_sum2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
                    sum= total_sum2;
                }
            }
        }
        
    })
});

