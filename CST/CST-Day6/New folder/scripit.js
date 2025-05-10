// نجيب كل الصور
var marbles = document.getElementsByClassName('marble');

// الصورة الافتراضية واللي هتتحرك
var graySrc = "./images/marble1.jpg";
var orangeSrc = "./images/marble3.jpg";

var index = 0;      // المكان اللي هنحرك فيه
var interval;       // معرف التايمر

function move() {
  // نخلي كل الصور ترجع للصورة الرمادية
  for (var i = 0; i < marbles.length; i++) {
    marbles[i].src = graySrc;
  }

  // نغير الصورة الحالية للبرتقالية
  marbles[index].src = orangeSrc;

  // نروح للكرة اللي بعدها
  index++;
  if (index >= marbles.length) {
    index = 0;
  }
}

// دالة تشغيل الحركة
function start() {
  interval = setInterval(move, 1000);
}

// دالة إيقاف الحركة
function stop() {
  clearInterval(interval);
}

// تبدأ الحركة لما الصفحة تفتح
start();

// لما الماوس يدخل على أي صورة نوقف الحركة
// لما يخرج نرجع نبدأ
// for (var i = 0; i < marbles.length; i++) {
//   marbles[i].addEventListener('mouseenter', stop);
//   marbles[i].addEventListener('mouseleave', start);
// }




// hinit
// اشيل ال add event listener 

