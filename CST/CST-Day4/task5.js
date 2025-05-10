let radius = parseFloat(prompt("Enter the radius of a circle:"));
//  area = pi r تربيع
let area = Math.PI * Math.pow(radius, 2);
alert(`The area of the circle is: ${area.toFixed(2)}`);

// Calculate the square root of a number
let number = parseFloat(prompt("Enter a number to find its square root:"));
let squareRoot = Math.sqrt(number);
alert(`The square root of ${number} is: ${squareRoot.toFixed(2)}`);

// Calculate the cosine of an angle
let angle = parseFloat(prompt("Enter an angle in degrees to calculate its cosine:"));
let angleInRadians = angle * (Math.PI / 180);
let cosineValue = Math.cos(angleInRadians);
console.log(`The cosine of ${angle}° is: ${cosineValue.toFixed(4)}`);
alert(`The cosine of ${angle}° is: ${cosineValue.toFixed(4)}`);
