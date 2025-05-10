let isMoving = false;
let directionX = 1; 
let directionY = 1; 
let speed = 3; 
let interval;
let leftImg = document.getElementById("leftImg");
let rightImg = document.getElementById("rightImg");
let bottomImg = document.getElementById("bottomImg");


document.getElementById("toggleBtn").addEventListener("click", function () {
    if (isMoving) return; 
    isMoving = true;
    interval = setInterval(moveImages, 20); 
});



function moveImages() {
 
    let container = document.querySelector(".imgHolder");
    let leftStyle = window.getComputedStyle(leftImg);
    let rightStyle = window.getComputedStyle(rightImg);
    let bottomStyle = window.getComputedStyle(bottomImg);
    let containerStyle = window.getComputedStyle(container);
    let containerWidth = parseInt(containerStyle.width);
    let containerHeight = parseInt(containerStyle.height);
    // استخراج مواقع الصور داخل الحاوية
    let leftPos = parseInt(leftStyle.left);
    let rightPos = parseInt(rightStyle.right);
    let bottomPos = parseInt(bottomStyle.bottom);
    let imgWidth = leftImg.offsetWidth;
    let imgHeight = bottomImg.offsetHeight;

    // التحقق من الاصطدام بحواف الحاوية وعكس الاتجاه

    if (leftPos + imgWidth >= containerWidth || leftPos <= 0) {
        directionX *= -1;
    }

    if (bottomPos + imgHeight >= containerHeight || bottomPos <= 0) {
        directionY *= -1;
    }
    // تحديث مواقع الصور وتحريكها
    leftImg.style.left = (leftPos + speed * directionX) + "px";
    rightImg.style.right = (rightPos + speed * directionX) + "px";
    bottomImg.style.bottom = (bottomPos + speed * directionY) + "px";


}

document.getElementById('stopBtn').addEventListener('click',function(){
    clearInterval(interval)
    isMoving = false;

})

document.getElementById("resetBtn").addEventListener("click", function () {
    clearInterval(interval);
    isMoving = false;



    leftImg.style.left = "5px";
    rightImg.style.right = "5px";
    bottomImg.style.bottom = "5px";
    bottomImg.style.top = "auto";

    directionX = 1; 
    directionY = 1; 
});