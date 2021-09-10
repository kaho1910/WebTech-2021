const url = "countries.json";
let request = new XMLHttpRequest();
request.open('GET', url, true);
request.responseType = 'json';
request.send();

request.onload = function() {
    let list = request.response;
    push(list);
}

var info = ["name", "capital", "population", "latlng", "borders", "flag"];

function push(list) {
    const container = document.getElementsByClassName("container")[0];
    for (let i = 0; i < list.length; i++) {
        let card = document.createElement("div");
        card.className = "card mb-3";
        card.style.width = "90%";
        card.setAttribute("id", `${list[i].alpha3Code}`);
        let row = document.createElement("div");
        row.className = "row no-gutters d-flex justify-content-around";
        let div1 = document.createElement("div");
        div1.className = "col-md-5";
        let div2 = document.createElement("div");
        div2.className = "col-md-4 d-flex justify-content-around";
        let cardBody = document.createElement("div");
        cardBody.className = "card-body";


        var h4 = document.createElement("h4");
        h4.innerHTML = `Name: <b>${list[i].name}</b>`;
        cardBody.appendChild(h4);
        h4 = document.createElement("h4");
        h4.innerHTML = `Capital: ${list[i].capital}`;
        cardBody.appendChild(h4);
        h4 = document.createElement("h4");
        h4.innerHTML = `Population: ${list[i].population}`;
        cardBody.appendChild(h4);
        h4 = document.createElement("h4");
        h4.innerHTML = `Region: ${list[i].region}`;
        cardBody.appendChild(h4);
        h4 = document.createElement("h4");
        h4.innerHTML = `Location: ${list[i].latlng[0]} ${list[i].latlng[0]}`;
        cardBody.appendChild(h4);
        h4 = document.createElement("h4");
        var txt = "";
        for (var j = 0; j < list[i].borders.length; j++) {
            txt += `${list[i].borders[j]} `;
        }
        h4.innerHTML = `Borders: ${txt}`;
        cardBody.appendChild(h4);

        var img = document.createElement("img");
        img.src = `${list[i].flag}`;

        div2.appendChild(img);
        div1.appendChild(cardBody);
        row.appendChild(div1);
        row.appendChild(div2);
        card.appendChild(row);
        container.appendChild(card);
    }
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}