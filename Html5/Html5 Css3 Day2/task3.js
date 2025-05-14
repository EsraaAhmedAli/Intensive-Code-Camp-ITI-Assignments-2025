var canvas = document.getElementById("c2");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(0, 0);

let x = 0;
let y = 0;
let step = 5;

let timeout = setInterval(function () {
    x += step;
    y += step;
    ctx.lineTo(x, y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();
    if (x >= canvas.width || y >= canvas.height) {
        clearInterval(timeout);
        alert("enimation end !");
    }
}, 200);

