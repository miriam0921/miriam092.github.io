window.onload=function(){
    var bkimgs=["img/scroll_01.jpg","img/scroll_02.jpg","img/scroll_03.jpg","img/scroll_04.jpg","img/scroll_05.jpg","img/scroll_06.jpg"];
    var bki=1;
    setInterval(function(){
        var body=document.getElementsByTagName("body")[0]
        body.style.backgroundImage="url("+bkimgs[bki]+")";
        // body.style.backgroundSize="cover";
        // body.style.backgroundrepeat="no-repeat";
        bki=(bki+1)%bkimgs.length;
    },3000);
}

$(document).ready(function () {
    $(".pom-agile_txt").hover(function () {
        $(".pom-agile_txt_ts").slideDown();
    },function () {
        $(".pom-agile_txt_ts").slideUp();
    })

    $(".pom-agile_pwd").hover(function () {
        $(".pom-agile_pwd_ts").slideDown();
    },function () {
        $(".pom-agile_pwd_ts").slideUp();
    })

    $(".zhuce_1").hover(function () {
        $(".zhuce_1_ts").slideDown();
    },function () {
        $(".zhuce_1_ts").slideUp();
    })

    $(".zhuce_2").hover(function () {
        $(".zhuce_2_ts").slideDown();
    },function () {
        $(".zhuce_2_ts").slideUp();
    })

    $(".zhuce_3").hover(function () {
        $(".zhuce_3_ts").slideDown();
    },function () {
        $(".zhuce_3_ts").slideUp();
    })

    $(".zhuce_4").hover(function () {
        $(".zhuce_4_ts").slideDown();
    },function () {
        $(".zhuce_4_ts").slideUp();
    })

    $(".zhuce_5").hover(function () {
        $(".zhuce_5_ts").slideDown();
    },function () {
        $(".zhuce_5_ts").slideUp();
    })
})

$(document).ready(function () {

    $(".header-w3l").addClass("animated pulse")
    $(".sub-main-w3 h2,h4").addClass("animated flash")


})
