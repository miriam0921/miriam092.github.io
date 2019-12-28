function checkPW() {
    var p1 = document.getElementById("p1").value
    var p2 = document.getElementById("p2").value;
    if (p1 != p2) {
        // document.getElementById("warning").innerHTML="两次密码的输入不一致";
        alert("两次输入的密码不一致，请重新输入！");
        return false;
    }
    else{
        // document.getElementById("warning").innerHTML="";
        return true;
    }
}