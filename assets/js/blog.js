$(document).ready(function () {
    $('.more-1').click(function (e) { 
        e.preventDefault();
        $('.blog').fadeOut(500);
        $('.more1Content').fadeIn(1000);
    });
    $('.ellipsisAfter-more.item1').click(function (e) { 
        e.preventDefault();
        $('.blog').fadeOut(500);
        $('.more1Content').fadeIn(1000);
    });
    $('.blogContent .item1 h2,img').click(function (e) { 
        e.preventDefault();
        $('.blog').fadeOut(500);
        $('.more1Content').fadeIn(1000);
    });
});