function update(e) {
    document.getElementById(`${e.id}Card`).innerHTML = e.value == "" ? e.placeholder : e.value;
}

function clearValue() {
    var input = document.querySelectorAll("input");
    for (let i = 0; i < input.length; i++) {
        input[i].value = "";
        update(input[i]);
    }
}