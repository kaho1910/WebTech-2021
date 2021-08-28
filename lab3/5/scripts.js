const months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]

function color() {
    let x1 = Math.floor(Math.random() * 256);
    let x2 = Math.floor(Math.random() * 256);
    let x3 = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgba(${x1},${x2},${x3},0.5)`;
}

function date() {
    let year = Math.floor(Math.random() * 90) + 2475;
    let month = Math.floor(Math.random() * 12);
    let day = Math.floor(Math.random() * 2) * 15 + 1;
    document.getElementById("date").innerHTML = `งวดประจำวันที่ ${day} ${months[month]} ${year}`;
}

function random() {
    let first = Math.floor(Math.random() * 1000000).toString().padStart(6, 0);
    document.getElementById("first").innerHTML = first;
    let front3 = Math.floor(Math.random() * 1000).toString().padStart(3, 0);
    document.getElementById("front3").innerHTML = front3;
    let back3 = Math.floor(Math.random() * 1000).toString().padStart(3, 0);
    document.getElementById("back3").innerHTML = back3;
    let back2 = Math.floor(Math.random() * 100).toString().padStart(2, 0);
    document.getElementById("back2").innerHTML = back2;
    date();
    color();
}
random()