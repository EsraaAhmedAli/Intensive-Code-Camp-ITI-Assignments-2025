// code before validation 

// var num1,num2;
// var sum =0;

// function task5 (num1 , num2){

//     for (var i = num1 ; i <=num2 ; i++){
//         if (i%3==0 && i%5 !=0){
//             document.writeln(i +"<br>");
//              sum +=i;


//         }else if (i%5 ==0  && i%3!=0){
//             document.writeln(i +"<br>");
//             sum += i ;
//         }else if (i%3== 0 && i%5 == 0){
//             document.writeln(i +"<br>");
//             sum += i;
//         }
//     }
//     document.writeln( " total sum is "+ sum);

// }


// task5(1,15);



// 



// code After validation 

var num1, num2;
var sum =0;

do {
    num1 = prompt("Enter your number1:");
} while (!isFinite(num1) || num1 === null || num1 === "");

do {
    num2 = prompt("Enter your number2:");
} while (!isFinite(num2) || num2 === null || num2 === "");

        num1 = Number(num1);
        num2 = Number(num2);

        function task5(num1, num2) {

            for (var i = num1; i <= num2; i++) {
                if (i % 3 == 0 && i % 5 != 0) {
                    document.writeln(i + "<br>");
                    sum += i;
                } else if (i % 5 == 0 && i % 3 != 0) {
                    document.writeln(i + "<br>");
                    sum += i;
                } else if (i % 3 == 0 && i % 5 == 0) {
                    document.writeln(i + "<br>");
                    sum += i;
                }
            }
            document.writeln(" total sum is " + sum);

        }



        task5(num1, num2);





// ||||||||||||||||||||||||||||


// var num1, num2;

// // إدخال القيم والتحقق من صحتها
// do {
//     num1 = prompt("Enter your first number:");
// } while (!isFinite(num1) || num1 === null || num1 === "");

// do {
//     num2 = prompt("Enter your second number:");
// } while (!isFinite(num2) || num2 === null || num2 === "");

// // تحويل القيم إلى أرقام
// num1 = Number(num1);
// num2 = Number(num2);

// // دالة لحساب المضاعفات والمجموع بدون استخدام مصفوفات أو slice
// function task5(start, end) {
//     var sum = 0;
//     var first3 = true;
//     var first5 = true;

//     document.writeln("Numbers multiple of 3: ");
//     for (var i = start; i <= end; i++) {
//         if (i % 3 === 0 && i % 5 !== 0) {
//             if (!first3) document.writeln(", ");
//             document.writeln(i);
//             sum += i;
//             first3 = false;
//         }
//     }
//     document.writeln("<br>");

//     document.writeln("Numbers multiple of 5: ");
//     for (var i = start; i <= end; i++) {
//         if (i % 5 === 0 && i % 3 !== 0) {
//             if (!first5) document.writeln(", ");
//             document.writeln(i);
//             sum += i;
//             first5 = false;
//         }
//     }
//     document.writeln("<br>");

//     document.writeln("Total sum is: " + sum + "<br>");
// }

// // استدعاء الدالة
// task5(num1, num2);





