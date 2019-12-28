$(document).ready(function () {
    var ims=document.getElementsByClassName("ig");
    var index=0;
    var len=ims.length;
    $(".tb").eq(0).css("color","orange").siblings().css("color","green")
    $(".ig").eq(0).show().siblings().hide();
    setInterval(function(){
        index=++index==len?0:index;
        $(".ig").eq(index).show().siblings().hide();
        // $(".ig").eq(index).fadeIn().sibling().fadeTo();
        // $(".ig").eq(index).addClass("animated fadeIn").sibling().removeClass("fadeIn");
        $(".tb").eq(index).css("color","orange").siblings().css("color","green")
    },2000);
    $(".tb").hover(function () {
        index=$(this).index();
        $(".ig").eq(index).show().siblings().hide();
        // $(".ig").eq(index).fadeIn().sibling().fadeTo();
        // $(".ig").eq(index).addClass("animated fadeIn").sibling().removeClass("fadeIn");
        $(".tb").eq(index).css("color","orange").siblings().css("color","green")
    },function () {
    })
})
// $(document).ready(function () {
//     var ims=document.getElementsByClassName("ig");
//     var index=0;
//     var len=ims.length;
//     $(".tb").eq(0).css("color","orange").siblings().css("color","green")
//     setInterval(function(){
//         ims[index].style.display="none";
//         index=++index==len?0:index;
//         ims[index].style.display="inline";
//         $(".tb").eq(index).css("color","orange").siblings().css("color","green")
//     },2000);
//     $(".tb").hover(function () {
//         index=$(this).index();
//         $(".ig").eq(index).show().siblings().hide();
//         $(".tb").eq(index).css("color","orange").siblings().css("color","green")
//     },function () {
//     })
// })