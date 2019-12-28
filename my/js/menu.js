$(document).ready(function () {
    //在jquery中获取和操作元素的方法
    //$(选择器).事件(函数);
    $("#menu").hover(function () {
        $("#dd_menu_top_down").fadeIn("500");//淡入淡出
        //$("#dd_menu_top_down").slideDown(); //下拉展开
    },function () {
        $("#dd_menu_top_down").fadeOut("500");
        //$("#dd_menu_top_down").slideUp();
    })
})