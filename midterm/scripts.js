// Thirawee Thitiwattanakornsiri 63070088
fetch("questions.json")
    .then(response => response.json())
    .then(data => pushTable(data));
const tbody = document.querySelector("#tbody");
var count = 0;

function pushTable(d) {
    for (let i = 0; i < d.length; i++) {
        var tr = document.createElement("tr");
        var td0 = document.createElement("td");
        td0.innerHTML = ++count;
        var td1 = document.createElement("td");
        td1.innerHTML = d[i].question;
        var td2 = document.createElement("td");
        td2.innerHTML = d[i].answers.a;
        var td3 = document.createElement("td");
        td3.innerHTML = d[i].answers.b;
        var td4 = document.createElement("td");
        td4.innerHTML = d[i].answers.c;
        var td5 = document.createElement("td");
        td5.innerHTML = d[i].answers.correct;

        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        tbody.appendChild(tr);
    }
}

function update() {
    var q = document.querySelector("#question");
    var a1 = document.querySelector("#ans01");
    var a2 = document.querySelector("#ans02");
    var a3 = document.querySelector("#ans03");

    var td5 = document.createElement("td");
    var flag = 0;
    if (document.querySelector("#ans1").checked) {
        td5.innerHTML = "a";
        flag = 1;
    }
    if (document.querySelector("#ans2").checked) {
        td5.innerHTML = "b";
        flag = 1;
    }
    if (document.querySelector("#ans3").checked) {
        td5.innerHTML = "c";
        flag = 1;
    }

    if (q.value == "" || a1.value == "" || a2.value == "" || a3.value == "" || flag == 0) {
        alert("โปรดระบุให้ครบ");
        return false;
    }
    var tr = document.createElement("tr");
    var td0 = document.createElement("td");
    td0.innerHTML = ++count;
    var td1 = document.createElement("td");
    td1.innerHTML = q.value;
    var td2 = document.createElement("td");
    td2.innerHTML = a1.value;
    var td3 = document.createElement("td");
    td3.innerHTML = a2.value;
    var td4 = document.createElement("td");
    td4.innerHTML = a3.value;

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    tbody.appendChild(tr);


    q.value = "";
    a1.value = "";
    a2.value = "";
    a3.value = "";
    document.querySelector("#ans1").checked = false;
    document.querySelector("#ans2").checked = false;
    document.querySelector("#ans3").checked = false;
    return false
}