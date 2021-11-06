let navClass = document.getElementById("nav-3").getAttribute("class");
let activeNav = "h-full flex items-center cursor-pointer text-gray-800 rounded-t-xl bg-white transition";

function topFunction() {
    document.getElementById("body").scrollTop = 0;
}

function navClick(num) {
    if (num == "0") {
        document.getElementById("navLogo").setAttribute("fill", "#000");
        document.getElementById("navLogo2").setAttribute("fill", "#06B6D4");
    } else {
        document.getElementById("navLogo").setAttribute("fill", "#fff");
        document.getElementById("navLogo2").setAttribute("fill", "#fff");
    }
    for (let i = 0; i <= 3; i++) {
        if (i != parseInt(num)) {
            document.getElementById(`nav-${i}`).setAttribute("class", navClass);
            document.getElementById(`page-${i}`).style.display = "none";
        } else {
            document.getElementById(`nav-${i}`).setAttribute("class", activeNav);
            document.getElementById(`page-${i}`).style.display = "block";
        }
    }
    topFunction();
}

function Init() {
    navClick("0");
}
Init();