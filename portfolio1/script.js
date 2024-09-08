// -------------------skills and education--------------------
const tablinks = document.getElementsByClassName("tablinks");
const tabcontents = document.getElementsByClassName("tabcontents");
const skillselect = document.getElementById('skills'); 
const eduselect = document.getElementById('education');

function opentabskill() {
    skillselect.style.display = "inline";
    eduselect.style.display = "none";
}
function opentabedu() {
    eduselect.style.display = "inline";
    skillselect.style.display = "none";
}
// ---------------sidemenu---------------------------------------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

