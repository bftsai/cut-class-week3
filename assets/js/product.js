$(document).ready(function () {
    $('.optical').click(function (e) { 
        e.preventDefault();
        $('.sunglass').fadeOut(500);
        $('.func').fadeOut(500);
        $('.classic').fadeIn(1000);
    });
    $('.sunglasses').click(function (e) { 
        e.preventDefault();
        $('.classic').fadeOut(500);
        $('.func').fadeOut(500);
        $('.sunglass').fadeIn(1000);
    });
    $('.function').click(function (e) { 
        e.preventDefault();
        $('.classic').fadeOut(500);
        $('.sunglass').fadeOut(500);
        $('.func').fadeIn(1000);
    });
});