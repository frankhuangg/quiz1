function change() {
    var header = document.getElementById("cgu");
    header.innerHTML = "CSIE@CGU";
    var para = document.getElementById("bump");
    para.innerHTML = "«ç»ò¨º»ò´Î!!";
}
function newbutton() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "CLICK¡@ME";
    document.body.appendChild(btn);
    btn.addEventListener('click', change);
}