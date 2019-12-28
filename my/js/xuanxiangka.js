$(document).ready(function () {
    $(".book_right ul").eq(0).css("display","block").siblings("ul").hide();
    $(".book_right ol li").mouseover(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var index=$(this).index();
        $(".book_right ul").eq(index).show().siblings("ul").hide();
    })

    $(".list_img a").mouseover(function () {
        $(this).css("color","red");
    })
    $(".list_img a").mouseout(function () {
        $(this).css("color","blue");
    })
    $(".list_img a").hover(function () {
        $(this).find("div").show();
    },function () {
        $(this).find("div").hide();
    })
})