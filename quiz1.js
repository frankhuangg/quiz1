function change() {
    /*  var header = document.getElementById("cgu");
    header.innerHTML = "CSIE@CGU";*/
    $("#cgu").html("CSIE@CGU");
    $("#bump").html("«ç»ò¨º»ò´Î!!");
}
function newbutton() {
    /*var btn = document.createElement("BUTTON");
    btn.innerHTML = "CLICK?@ME";
    document.body.appendChild(btn);
    btn.addEventListener('click', change);*/
    var btnn="<button id='change'>CLICK ME </button>";
    $("body").append(btnn);
    $("#change").click(change);
}
$("#btn").click(newbutton);