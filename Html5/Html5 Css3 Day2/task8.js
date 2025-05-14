
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var recLength = 120;
var recWidth = 40;
var recCount = 10;
var currentrec = 0;
var rotationDirection = 1;
var timer = 0;

function drawRec(rotation) {
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(rotation);
    ctx.fillStyle = "rgba(137, 207, 240, 0.5)";  
    ctx.fillRect(0, -recWidth / 2, recLength, recWidth);
    ctx.restore();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const bladesToDraw = Math.floor(currentrec);

    for (let i = 0; i < bladesToDraw; i++) {
        var angle = (i * 2 * Math.PI) / recCount * rotationDirection;
        drawRec(angle);
    }

    timer++;
    if (timer % 10 === 0) {
        currentrec += 1;

        if (currentrec > recCount) {
            currentrec = 0;
            rotationDirection *= -1;
        }
    }

    requestAnimationFrame(draw);
}

draw();
