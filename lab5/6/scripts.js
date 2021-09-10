fetch("music.json")
    .then(response => response.json())
    .then(data => pushTable(data));

function pushTable(d) {
    const BOX = document.querySelector(".box");
    for (let i = 0; i < d.length; i++) {
        let card = document.createElement("div");
        card.className = "card";
        let img = document.createElement("img");
        img.alt = d[i].song;
        img.src = d[i].image;
        card.appendChild(img);
        let body = document.createElement("div");
        body.className = "card-body";
        let h4 = document.createElement("h4");
        h4.className = "card-text";
        h4.innerHTML = `<span>${d[i].song}</span>`;
        body.appendChild(h4);
        let p = document.createElement("p");
        p.className = "card-text text-muted";
        p.innerHTML = `<span>${d[i].artist}</span>`;
        body.appendChild(p);
        card.appendChild(body);
        BOX.appendChild(card);
    }
}