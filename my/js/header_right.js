$(document).ready(function () {
    // $(".li_6").hover(function () {
    //     $(this).addClass("animated tada");
    // },function () {
    //     $(this).removeClass("tada");
    // })
    $(".li_6").hover(function () {
        $(".menu").fadeIn("500");
    },function () {
        $(".menu").fadeOut("500");
    })
    $(".li_7").hover(function () {
        $(this).addClass("animated tada");
    },function () {
        $(this).removeClass("tada");
    })
    $("#cont li").hover(function () {
        $(this).addClass("animated flip");
    },function () {
        $(this).removeClass("flip");
    })
})