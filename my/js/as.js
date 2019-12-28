$(document).ready(function () {
    setInterval('autoScroll("#roll",".cont")',3000);
});
function autoScroll(a,b) {
    $(a).find(b).animate({
            marginTop:"-25px"
        },3000,function () {
            $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
        })
}