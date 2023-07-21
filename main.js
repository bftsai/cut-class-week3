import './assets/scss/all.scss';

console.log("Hello world!");

$(document).ready(function () {
    $('.allProduct').click(function (e) { 
        e.preventDefault();
        $('.index-content').fadeToggle(500);
        $('.allProduct-content').delay(300).fadeToggle(500);
    });
});