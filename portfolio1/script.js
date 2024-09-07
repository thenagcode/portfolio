// -------------------skills and education--------------------
var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");
function opentab(tabname) {
    for(let tablink of tablinks){
        tablink.classList.remove("activelink");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("activetab");
    }
    // Event.currentTarget.classList.add("nextlink");
    // document.getElementsById(tabname).classList.add("nexttab");
    for(let tablink of tablinks){
        tablink.classList.add("nextlink");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.add("nexttab");
    }
}

// ---------------sidemenu---------------------------------------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

