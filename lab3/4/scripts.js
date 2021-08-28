var color_pool = [];
const subject = ["Math", "Thai", "English", "Science", "Social"];

function colorRand() {
    let x1 = Math.floor(Math.random() * 255);
    let x2 = Math.floor(Math.random() * 255);
    let x3 = Math.floor(Math.random() * 255);
    var x = `rgb(${x1},${x2},${x3})`;
    if (color_pool.length >= 16581375) {
        color_pool = [];
    }
    if (x in color_pool) {
        return colorRand()
    }
    color_pool.push(x);
    return [x, [x1, x2, x3]];
}

function score() {
    let box = document.querySelectorAll(".box");
    for (let i = 0; i < box.length; i++) {
        let score = Math.floor(Math.random() * 100);
        box[i].innerHTML = `${subject[i]} ${score}%`;
        box[i].style.width = `${score}%`;
        let color = colorRand();
        if (color[1][0] + color[1][1] + color[1][2] > (255 * 3 / 2) || score < 15) {
            box[i].style.color = "black";
        } else {
            box[i].style.color = "white";
        }
        box[i].style.backgroundColor = color[0];
    }
    document.body.style.backgroundColor = colorRand()[0];
}
document.body.style.backgroundColor = colorRand()[0];