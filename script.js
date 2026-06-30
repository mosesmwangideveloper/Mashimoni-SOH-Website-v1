var navLinks = document.getElementById("navLinks");
var overlay = document.getElementById("overlay");

function showMenu(){
    navLinks.style.right = "0";
    overlay.classList.add("active");
}

function hideMenu(){
    navLinks.style.right = "-280px";
    overlay.classList.remove("active");
}

