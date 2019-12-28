function a() {
    $(".load").hide();
    $(".register").fadeIn(1000);

}

function b() {
    $(".register").hide();
    $(".load").slideDown("slow");
}

function formCheck(){
    var pwd1 = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById("pwd2").value;
    if(pwd1!=pwd2){
        window.alert("两次输入的密码不一致！");
        return false;
    }
    return true;
}