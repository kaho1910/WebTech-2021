var chat = "";

function messageButton(e) {
    if (chat == "") {
        // Toggle ON
        $(e).button('toggle');
        chat = e.getAttribute("id");
    } else if (chat != e.getAttribute("id")) {
        // Toggle OFF and other ON
        $(`#${chat}`).button('toggle');
        $(e).button('toggle');
        chat = e.getAttribute("id");
    } else {
        // Toggle OFF
        $(`#${chat}`).button('toggle');
        chat = "";
    }
    inputGate();
}

function inputGate() {
    var input = $("#targetInput")[0];
    var btn, btn2, bbg;
    if (chat == "") {
        input.value = "";
        input.disabled = true;
        input.placeholder = "Please select question";
        btn = "#e05d5d", btn2 = "rgb(224 93 93 / 50%", bbg = "#e4ddda";
    } else {
        input.disabled = false;
        input.placeholder = `Input message here (question${chat[1]} has been selected)`;
        btn = "#62955e", btn2 = "rgb(98 149 94 / 50%", bbg = "#f6f8f6";
    }
    document.documentElement.style.setProperty("--bstbtninput", btn);
    document.documentElement.style.setProperty("--bstbtninput2", btn2);
    document.documentElement.style.setProperty("--buttonbg", bbg);
}
inputGate();

function sendMessage() {
    var input = $("#targetInput")[0];
    var target = $(".message-box")[parseInt(chat[1]) - 1];
    var node = document.createElement("div");
    node.className = "message";
    var msg = input.value.trim();
    if (msg == "" || input.disabled) {
        return;
    }
    node.innerHTML = msg;
    target.insertBefore(node, target.firstChild)
    input.value = "";
    $(`#${chat}`).button('toggle');
    chat = "";
    msgArrange(target);
    inputGate();
}

function msgArrange(t) { //parameter = target section
    var num = t.childElementCount;
    if (num == 2) {
        t.firstChild.className = "message first"
        t.childNodes[1].className = "message last"
    } else if (num >= 3) {
        t.firstChild.className = "message first"
        t.childNodes[1].className = "message middle"
        t.lastChild.className = "message last"
    }
}

var enter = document.getElementById("targetInput");
enter.addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        sendMessage();
    }
});