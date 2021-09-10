const url = "person.json";
let request = new XMLHttpRequest();
request.open('GET', url, true);
request.responseType = 'json';
request.send();

request.onload = function() {
    let person = request.response;
    console.log(person[0].phoneNumber[0]);
    for (let i = 0; i < person.length; i++) {
        var card = document.createElement("div");
        card.className = "card";
        card.style.width = "20rem";
        var body = document.createElement("div");
        body.className = "card-body";
        var text = `${person[i].firstName} ${person[i].lastName}, ${person[i].gender.type} ${person[i].age} years old.<br>${person[i].address.streetAddress} ${person[i].address.city} ${person[i].address.state}<br>${person[i].address.postalCode}`;
        for (let j = 0; j < person[i].phoneNumber.length; j++) {
            text += `<br>${person[i].phoneNumber[j].type} : ${person[i].phoneNumber[j].number}`
        }
        body.innerHTML = text;

        card.appendChild(body);
        document.getElementById("container").appendChild(card);
    }
}