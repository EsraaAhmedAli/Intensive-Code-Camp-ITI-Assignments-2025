const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const div = document.getElementById("div");


function updateColor() {
  const r = red.value;
  const g = green.value;
  const b = blue.value;

  const color = `rgb(${r}, ${g}, ${b})`;
  div.style.color = color; 
  
}


red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);
