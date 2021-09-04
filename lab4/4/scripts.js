const x = document.getElementById("num");
const table = document.getElementById("table");


function generate() {
    for (let i = 0; i < 8; i++) {
        var row = document.createElement("tr");
        table.appendChild(row);
        for (let j = 0; j < 8; j++) {
            var data = document.createElement("td");
            data.style.backgroundColor = ((j + i) % 2) == 0 ? "#000" : "#eee";
            row.appendChild(data);
        }
    }
}


function draw(z) {
    var a = document.querySelectorAll("td");
    for (let i = 0; i < a.length; i++) {
        if (i < z) {
            a[i].style.display = "table-cell";
        } else {
            a[i].style.display = "none";
        }
    }
    return false;
}

function main() {
    var z = Math.min(x.value == "" ? 0 : x.value);
    return draw(z)
}
generate();
draw(Math.floor(Math.random() * 64));