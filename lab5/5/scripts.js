fetch("tutor.json")
    .then(response => response.json())
    .then(data => pushData(data));

function pushData(d) {
    var pool = document.querySelector("#target");
    for (var i = 0; i < d.length; i++) {
        // anchor
        var anchor = document.querySelector("#anchor");
        let li = document.createElement("li");
        li.className = "list-group-item";
        let a = document.createElement("a");
        a.innerHTML = `${d[i].firstname} ${d[i].lastname}`;
        a.href = `#${d[i].id}`;
        li.append(a);
        anchor.appendChild(li);
        // head
        let card = document.createElement("div");
        card.className = "card";
        card.setAttribute("id", d[i].id);
        let head = document.createElement("div");
        head.className = "card-header";
        head.innerHTML = `<h3>${d[i].firstname} ${d[i].lastname}</h3>`;
        card.appendChild(head);
        // body
        let body = document.createElement("div");
        body.className = "card-body";
        let h5 = document.createElement("h5");
        h5.innerHTML = `Age: ${d[i].age}`;
        body.appendChild(h5);
        h5 = document.createElement("h5");
        h5.innerHTML = `Tel: ${d[i].tel}`;
        body.appendChild(h5);
        h5 = document.createElement("h5");
        h5.innerHTML = "Subject: ";
        let list = document.createElement("ul");
        for (var j = 0; j < d[i].subject.length; j++) {
            let li = document.createElement("li");
            li.innerHTML = d[i].subject[j];
            list.appendChild(li);
        }
        h5.appendChild(list);
        body.appendChild(h5);
        card.appendChild(body);
        pool.appendChild(card);
    }
}