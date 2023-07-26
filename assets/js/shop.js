$(document).ready(function () {
    $('.taipeiDetail-1').click(function (e) { 
        e.preventDefault();
        $('.shop').fadeOut(500);
        $('.shopLocate .taipeiDetail-1').fadeIn(1000);
    });
});