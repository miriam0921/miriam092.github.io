$(document).ready(function () {
    $("#ad").hide();
    $(window).scroll(function () {
        var v=$(this).scrollTop()+550;
        $("#ad").css("top",v);
        if (v>700) {
            $("#ad").addClass("animated bounceInRight");
            $("#ad").show();
        }
         else {
            $("#ad").removeClass("bounceInRight");
            $("#ad").hide();
        }

    })
    // $('.ad').hover(function () {
    //     $(this).addClass("animated tada")
    // },function () {
    //     $(this).removeClass("tada")
    // })
});