let count = 0;
const x1 = [1, 3, 4, 2];
const x2 = [2, 1, 3, 4];
const x3 = [3, 4, 2, 1];
const x4 = [4, 2, 1, 3];

function swap() {
    var img = document.querySelectorAll("img")
    img[0].src = `img/${x1[count % 4]}.png`;
    img[1].src = `img/${x2[count % 4]}.png`;
    img[2].src = `img/${x3[count % 4]}.png`;
    img[3].src = `img/${x4[count % 4]}.png`;
    count++;
}
swap();