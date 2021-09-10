const url = "members.json";
let request = new XMLHttpRequest();
request.open('GET', url, true);
request.responseType = 'json';
request.send();

request.onload = function() {
    let members = request.response;
    pushTable(members);
    pushData(members);
}

function pushTable(members) {
    var tbody = document.querySelector("#tbody");
    var td, th;
    for (let i = 0; i < members.length; i++) {
        tr = document.createElement("tr");
        th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.innerHTML = members[i].id;
        for (j in members[i]) {
            td = document.createElement("td");
            td.innerHTML = members[i][j];
            if (j == "id") {
                td.style.textAlign = "center";
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

function pushData(m) {
    var container = document.querySelector("#container");
    for (var i = 0; i < m.length; i++) {
        var h4 = document.createElement("h4");
        h4.innerHTML = `${m[i].id} <b>${m[i].firstName} ${m[i].lastName}</b> (${m[i].gender}) is a ${m[i].position}, ${m[i].address})`;
        container.appendChild(h4);
    }
}

var counter = 1;

function slide() {
    if (counter == 0) {
        document.getElementsByClassName("spare")[0].style.display = "none";
        document.getElementsByClassName("table")[0].style.display = "";
        counter++;
    } else {
        counter = 0;
        document.getElementsByClassName("spare")[0].style.display = "";
        document.getElementsByClassName("table")[0].style.display = "none";
    }
}
slide()