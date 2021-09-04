AOS.init();

function jump(h) {
    window.removeEventListener("scroll", check);
    window.removeEventListener("click", check);
    var url = location.href;
    location.href = "#" + h.data;
    history.replaceState(null, null, url);
    setTimeout(function() {
        window.addEventListener("scroll", check);
        window.addEventListener("click", check);
    }, 300)

}
window.parent.addEventListener("message", jump, false);

function isViewport(e) {
    var rect = e.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function check() {
    var msg;
    if (isViewport(document.getElementById("profile"))) {
        msg = "profile";
    } else if (isViewport(document.getElementById("education"))) {
        msg = "education";
    } else if (isViewport(document.getElementById("works"))) {
        msg = "works";
    } else if (isViewport(document.getElementById("contact"))) {
        msg = "contact";
    }
    parent.window.postMessage(msg, "*");
}
window.addEventListener("scroll", check);
window.addEventListener("click", check);