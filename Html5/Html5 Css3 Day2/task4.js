var canvas = document.getElementById("c3");
var ctx = canvas.getContext("2d");
var img = new Image();
img.src = "./images/task4.jpg";

img.onload = function () {
    ctx.strokeStyle = "white";
    ctx.drawImage(img, 0, 0,canvas.width, canvas.height);


    ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 8;
    ctx.font = " bold 35px 'Impact";
    ctx.fillStyle = "white";
    ctx.fillText("its gonna be ok sweetheart", 10, 350);
  
}    


