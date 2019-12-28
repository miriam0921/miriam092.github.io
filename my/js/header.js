$(document).ready(function () {
    $(".header_middle").find("li").hover(function () {
        $(this).css("opacity","1.0");
        $(this).addClass("animated pulse");
    },function () {
        $(this).css("opacity","0.7");
        $(this).removeClass("pulse");
    })
})