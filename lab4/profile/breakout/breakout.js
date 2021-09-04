var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d"); //2D render context
var bgm = document.getElementById("bgm")
bgm.volume = 0;

//color pool
const colorNormal = ["rgb(31, 194, 242)", "rgb(31, 134, 188)", "rgb(31, 149, 226)", "rgb(31, 93, 194)"]
const colorExtra = ["#77ad2d", "#007c00"]

//ball coordinate and radius
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 0;
var dy = 0;
var ballRadius = 10;
var acceleration = 0.05;
//pad
var padH = 10;
var padW = 100;
var padZ = (canvas.width - padW) / 2;
//pad control
var pressR = false;
var pressL = false;
//brick
var brickRowCount = 6;
var brickColCount = 8;
var brickW = 60;
var brickH = 30;
var brickPad = 10;
var brickOffsetTop = 40;
var brickOffsetLeft = (960 - (brickColCount * (brickW + brickPad)) + brickPad) / 2;
var brickN = 5;
//score
var score = 0;
var scoreToWin = 0;
//life
var lives = 3;

//draw score
function drawScore() {
    ctx.font = "bold 26px PixelSplitter";
    ctx.fillStyle = "rgb(253, 255, 46)";
    ctx.fillText("Score " + score, 30, 50);
}

//draw life
function drawLife() {
    ctx.font = "bold 26px PixelSplitter";
    ctx.fillStyle = "rgb(253, 255, 46)";
    ctx.fillText("Lives " + lives, canvas.width - 130, 50);
}

//mouse control

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        padZ = relativeX - padW / 2;
    }
}

//pad control
document.addEventListener("keydown", keyDownHandler, false); // -start control
document.addEventListener("keyup", keyUpHandler, false); // -stop control

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        pressR = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        pressL = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        pressR = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        pressL = false;
    }
}

//ball accelaration
function accel() {
    if (dx > 0) {
        dx += acceleration;
    } else {
        dx -= acceleration;
    }
    if (dy > 0) {
        dy += acceleration;
    } else {
        dy -= acceleration;
    }
}

//collide detection
function collisionDetector() {
    for (var col = 0; col < brickColCount; col++) {
        for (var row = 0; row < brickRowCount; row++) {
            var b = bricks[col][row];
            if (b.hitt != 0) {
                if (x + ballRadius > b.x && x - ballRadius < b.x + brickW && y + ballRadius > b.y && y - ballRadius < b.y + brickH) {
                    switch (Math.min(Math.abs((y - ballRadius) - (b.y + brickH)), Math.abs((x + ballRadius) - b.x),
                        Math.abs(b.y - (y + ballRadius)), Math.abs((x - ballRadius) - (b.x + brickW)))) {
                        case Math.abs((y - ballRadius) - (b.y + brickH)):
                            dy = -dy;
                            break;
                        case Math.abs((x + ballRadius) - b.x):
                            dx = -dx;
                            break;
                        case Math.abs(b.y - (y + ballRadius)):
                            dy = -dy;
                            break;
                        case Math.abs((x - ballRadius) - (b.x + brickW)):
                            dx = -dx;
                            break;
                    }
                    b.hitt--;
                    score++;
                    accel();
                    if (b.chance) {
                        lives++;
                    }
                    if (score == scoreToWin) {
                        dx = 0;
                        dy = 0;
                        swal("You Win!!").then(function() {
                            score = 0;
                            scoreToWin = 0;
                            lives = 3;
                            x = canvas.width / 2;
                            y = canvas.height - 30;
                            dx = 3;
                            dy = -3;
                            brickGen();
                        });
                    }
                }
            }
        }
    }
}

//draw ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(253, 255, 46)";
    ctx.fill();
    ctx.closePath();
}

//draw pad
function drawPad() {
    ctx.beginPath();
    ctx.rect(padZ, canvas.height - padH, padW, padH);
    ctx.fillStyle = "rgb(71, 100, 141)";
    ctx.fill();
    ctx.closePath();
}

//generate brick
var bricks = [];

function brickGen() {
    for (var col = 0; col < brickColCount; col++) {
        bricks[col] = [];
        for (var row = 0; row < brickRowCount; row++) {
            var extraRandomizer = Math.floor(Math.random() * 26);
            var numRandomizer = Math.floor(Math.random() * brickN);
            if ((!extraRandomizer) && numRandomizer != 0) {
                extraCheck = 1;
                if (numRandomizer % 2 == 0) {
                    numRandomizer = 2;
                } else if (numRandomizer != 0) {
                    numRandomizer = 1;
                } else {
                    numRandomizer = 0;
                }
            } else {
                extraCheck = 0
            }
            scoreToWin += numRandomizer;
            bricks[col][row] = { x: 0, y: 0, hitt: numRandomizer, chance: extraCheck };
        }
    }
}
brickGen();
//alert(scoreToWin);

//draw brick
function drawBricks() {
    for (var col = 0; col < brickColCount; col++) {
        for (var row = 0; row < brickRowCount; row++) {
            if (bricks[col][row].hitt != 0) {
                var brickX = (col * (brickW + brickPad)) + brickOffsetLeft;
                var brickY = (row * (brickH + brickPad)) + brickOffsetTop;
                bricks[col][row].x = brickX;
                bricks[col][row].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickW, brickH);
                ctx.fillStyle = colorNormal[bricks[col][row].hitt - 1];
                if (bricks[col][row].chance) {
                    ctx.fillStyle = colorExtra[bricks[col][row].hitt - 1];
                }
                ctx.fill();
                if (bricks[col][row].chance != 0) {
                    ctx.fillStyle = "rgb(253, 255, 46)";
                    ctx.font = "16px PixelSplitter";
                    ctx.fillText("life", brickX + 10, brickY + brickH / 2 + 7);
                }
                //ctx.fillStyle = "black";
                //ctx.fillText(bricks[col][row].hitt, brickX + brickW / 2 - 4, brickY + brickH / 2 + 6);
                ctx.closePath();
            }
        }
    }
}

//draw
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPad();
    drawScore();
    drawLife();
    collisionDetector();
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
        accel();
    }
    if (y + dy < ballRadius) {
        dy = -dy;
        accel();
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > padZ && x - ballRadius < padZ + padW && y + ballRadius > padH) {
            dy = -dy;
            accel();
        } else {
            //life
            lives--;
            if (!(lives)) {
                dx = 0;
                dy = 0;
                swal("Game Over").then(function() {
                    score = 0;
                    scoreToWin = 0;
                    lives = 3;
                    x = canvas.width / 2;
                    y = canvas.height - 30;
                    dx = 3;
                    dy = -3;
                    brickGen();
                });
            } else {
                x = canvas.width / 2;
                y = canvas.height - 30;
                dx = 3;
                dy = -3;
                padZ = (canvas.width - padW) / 2;
            }
        }
    }
    //pad
    if (pressR) {
        padZ += 4;
        if (padZ + padW > canvas.width) {
            padZ = canvas.width - padW;
        }
    } else if (pressL) {
        padZ -= 4;
        if (padZ < 0) {
            padZ = 0;
        }
    }
    //ball movement
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

draw();
swal("Game Start").then(function() {
    dx = 3;
    dy = -3;
    document.addEventListener("mousemove", mouseMoveHandler, false);
    bgm.volume = 0.15;
});