window.setTimeout("autoClick()", 3000);
function autoClick() {
var linkPage = document.getElementById('redireccion').href;
window.location.href = linkPage;
}