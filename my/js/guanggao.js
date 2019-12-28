$(document).ready(function () {
    $("#right").find("a").click(function () {
        $("#right").hide();
    })
     $(window).scroll(function () {
         var v=$(this).scrollTop()+300;
         $("#right").css("top",v);
     })
    $("#right").addClass("animated rollIn Specials");
    $(".logo").addClass("animated tada infinite");
    $(".h_top_left").addClass("animated fadeInLeft");
})
function xunhuan(a) {
    $(a).addClass("animated rubberBand");
}