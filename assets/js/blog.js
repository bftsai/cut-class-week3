$(document).ready(function () {
    $('.more-1').click(function (e) { 
        e.preventDefault();
        $('.blogContent').fadeOut(500);
        $('.more1Content').fadeIn(1000);
    });
});