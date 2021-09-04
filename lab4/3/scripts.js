var count = 0;
const input = document.getElementsByTagName("input");
const table = document.getElementById("target");

function send() {
    if (input[0].value == "" || input[1].value == "" || input[2].value == "") {
        swal("Error", "Please fill the blank", "error");
        return false;
    }
    var nodeTr = document.createElement("tr");
    var node = document.createElement("th");
    node.setAttribute("scope", "col");
    node.style.textAlign = "center";
    node.innerHTML = ++count;
    nodeTr.appendChild(node);
    for (let i = 0; i < 3; i++) {
        node = document.createElement("td");
        node.innerHTML = input[i].value;
        input[i].value = "";
        nodeTr.appendChild(node);
    }
    table.appendChild(nodeTr);
    return false
}