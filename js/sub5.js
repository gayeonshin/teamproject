function slide() {
    $('.roll_list').animate({ marginTop: -50 }, 'fast', function () {
        $('.roll_list li:first').appendTo('.roll_list');
        $(".roll_list").css({ marginTop: 0 },);
    });
};
setInterval(slide, 3000);