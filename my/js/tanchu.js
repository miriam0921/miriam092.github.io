$(document).ready(function () {
    $(".menu").hover(function () {
        // $(".menu_down").show();
        $(".menu_down").fadeIn("200")
    },function () {
        // $(".menu_down").hide();
        $(".menu_down").fadeOut("200")
    })
    $(".cwh1").hover(function () {
       $(".cwh2").fadeIn("200");
    },function () {
        $(".cwh2").fadeOut("200");
    })
    $(".wj1").hover(function () {
        $(".wj2").fadeIn("200");
    },function () {
        $(".wj2").fadeOut("200");
    })
    $(".ysy1").hover(function () {
        $(".ysy2").fadeIn("200");
    },function () {
        $(".ysy2").fadeOut("200");
    })

    $(".lyc1").hover(function () {
        $(".lyc2").fadeIn("200");
    },function () {
        $(".lyc2").fadeOut("200");
    })

    $(".ddg1").hover(function () {
        $(".ddg2").fadeIn("200");
    },function () {
        $(".ddg2").fadeOut("200");
    })

    $(".tip").hover(function () {
        $(".menu_down").fadeIn("200");
    },function () {
        $(".menu_down").fadeOut("200");
    })
})
