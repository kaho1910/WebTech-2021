const hist = document.getElementById("history");
const input = document.getElementsByTagName("input");


function onePlusTwo(c) {
    var a = Number.isNaN(parseInt(input[0].value)) ? 0 : parseInt(input[0].value);
    var b = Number.isNaN(parseInt(input[1].value)) ? 0 : parseInt(input[1].value);
    var x = a + b;
    if (c) {
        history(a, b, x);
    }
    document.getElementById("result").innerHTML = `= ${x}`;
}

function history(a, b, x) {
    var nodeTr = document.createElement("tr");
    var nodeTd = document.createElement("td");
    nodeTd.innerHTML = `${a} + ${b} = ${x}`;
    var btn = document.createElement("btn");
    btn.innerHTML = "recall";
    btn.className = "btn btn-info";
    btn.style.transform = "scale(0.8)";
    btn.setAttribute("a", a);
    btn.setAttribute("b", b);
    btn.onclick = function() { recall(this) };
    nodeTr.appendChild(nodeTd);
    nodeTr.appendChild(btn);
    hist.insertBefore(nodeTr, hist.firstChild);
}

function recall(e) {
    input[0].value = e.getAttribute("a");
    input[1].value = e.getAttribute("b");
    onePlusTwo(false);
}