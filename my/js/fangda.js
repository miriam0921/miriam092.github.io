$(document).ready(function () {
    // $(".book_left img").mouseover(function () {
    //     $(this).css("width","110%");//在jquery中更改
    // })
    // $(".book_left img").mouseout(function () {
    //     $(this).css("width","90%");//在jquery中更改
    // })
    // $("#main .tiezi_i_1").mouseover(function () {
    //     $(this).css("width","120%");
    // })
    // $("#main .tiezi_i_1").mouseout(function () {
    //     $(this).css("width","70%");
    // })
    $(".tiezi_i_1").mouseover(function () {
        // $(this).css("width","120%");
        $(this).addClass("animated flip");
    })
    $(".tiezi_i_1").mouseout(function () {
        // $(this).css("width","70%");
        $(this).removeClass("flip");
    })

});