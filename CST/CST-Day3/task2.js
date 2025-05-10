// task2

//   ده كويس

// var sum = 0;
// var num = 1;   // تعيين قيمة مبدئية لضمان دخول الحلقة
// while (num !== 0 && sum < 100) {
//     num = prompt("Enter a number (enter 0 to stop):");
//     if (isFinite(num)) {
//         num = Number(num);
//         if (num !== 0) {
//             sum += num;
//         }
//     } else {
//         alert("Please enter a valid number.");
//         num = 1;
//     }
// }

// console.log("Sum:", sum);
// document.writeln("Sum: " + sum + "<br>");

// if (sum >= 100) {
//     alert("The result is greater than or equal to 100");
// }
























var sum = 0;
var num = 1; 

while (num !== 0 && sum < 100) {
    num = prompt("Enter a number (enter 0 to stop):");
    if (num !== null && num !== "") {
        num = Number(num);
        // document.writeln(typeof(num));
         console.log(num);
        if (isFinite(num)) {
            if (num !== 0) {
                if (sum + num < 100) {
                    sum += num;
                } else {
                    sum = 100; 
                    num = 0; 
                }
            }
        } else {
            alert("Please enter a valid number.");
            num = 1; 
        }
    } else {
        alert("Input cannot be empty or cancelled. Please enter a valid number.");
        num = 1; 
    }
}

console.log("Sum:", sum);
document.writeln("Sum: " + sum + "<br>");

if (sum >= 100) {
    alert("The result is greater than or equal to 100");
}

