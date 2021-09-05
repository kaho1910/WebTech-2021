var food = [0, 0, 0]

function addToCart(e) {
    var id = e.getAttribute("id");
    var cart = document.getElementById("cart");
    console.log(food)
    if (food[parseInt(id[4]) - 1] == 0) {
        var node = document.createElement("li");
        node.className = "list-group-item d-flex justify-content-between ml-5 mr-5";
        var div = document.createElement("div"),
            div2 = document.createElement("div");;
        div.innerHTML = `เมนูอาหารกลางวันเซ็ตที่ ${id[4]}`;
        node.appendChild(div);
        div2.innerHTML = "x 1";
        div2.setAttribute("id", id[4]);
        node.appendChild(div2);
        cart.appendChild(node);
        food[parseInt(id[4]) - 1] = food[parseInt(id[4]) - 1] + 1
    } else {
        var check = document.getElementById(id[4]);
        food[parseInt(id[4]) - 1] = food[parseInt(id[4]) - 1] + 1
        check.innerHTML = `x ${food[parseInt(id[4]) - 1]}`;
    }
}

function copy() {
    clearOrder();
    var cart = document.getElementById("cart");
    document.getElementById("order").appendChild(cart.cloneNode(true));
}

function clearOrder() {
    var order = document.getElementById("order");
    while (order.firstChild) {
        order.removeChild(order.firstChild);
    }
}

function purchase() {
    clearOrder();
    var cart = document.getElementById("cart");
    while (cart.firstChild) {
        cart.removeChild(cart.firstChild);
    }
    food = [0, 0, 0];
}