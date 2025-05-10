// var num1, num2;
// var max = 0, min = 0;
// do {
//     num1 = prompt("Enter your number1");
//     if (num1 == 0) alert("the number 1 is 0")

// } while (!isFinite(num1)) {
//     do {
//         num2 = prompt("Enter your number2");
//     } while (!isFinite(num2)) {
//         num1 = Number(num1);
//         num2 = Number(num2);
        // if (num1 > num2) {
        //     max = num1;
        //     min = num2;
        //     console.log("number 1" + num1);
        //     console.log("number 2" + num2);
        //     //   document.writeln(num1);
        //     //   document.writeln(num2);
        // } else {
        //     max = num2;
        //     min = num1;

        // }

        // max = (num1 > num2) ? num1 : num2;
        // min = (num1 > num2) ? num2 : num1;

        //    console.log(result);
        //    document.writeln(result);

        // document.writeln("Maximum Number is = " + max);
        // document.writeln("Minmum Number is = " + min);

//     }
// }







// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\\


var num1, num2;
do {
    num1 = prompt("Enter your first number:");
    if (num1 === null || num1 === "") {
        alert("Please enter a valid number.");
    }
} while (!isFinite(num1) || num1 === null || num1 === "");

do {
    num2 = prompt("Enter your second number:");
    if (num2 === null || num2 === "") {
        alert("Please enter a valid number.");
    }
} while (!isFinite(num2) || num2 === null || num2 === "");

num1 = Number(num1);
num2 = Number(num2);

var max = (num1 > num2) ? num1 : num2;
var min = (num1 < num2) ? num1 : num2;


document.writeln("Maximum Number is = " + max + "<br>");
document.writeln("Minimum Number is = " + min + "<br>");
console.log("Maximum Number is:", max);
console.log("Minimum Number is:", min);
