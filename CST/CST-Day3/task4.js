// var x,y,z;


// function task4 (x , y , z){
//     if(x%y == 0 && x%z != 0){
//         document.writeln( x + 'is divisable by '+ y + " only <br>");

//     }else if ( x%z == 0 && x%y != 0){
//         document.writeln( x + 'is divisable by '+ z +" only <br>");

//     }else if ( x%y == 0 && x%z == 0 && x%0 != 0 ){
//         document.writeln( x + 'is divisable by both  '+ y + "and "+ z +"<br>")

//     }else if (x%0 == 0 && x%y != 0 && x%z != 0){
//         document.writeln( x + 'is divisable by 0 ')
//     }else{
//         document.writeln( x + 'is  not divisable by  both '+ y +'and '+ z+ "<br>");
//     }

// }


// task4(10,2,5);
// task4(10,2,4);
// task4(10,4,5);

//=========================================================================================================

// code After validation 

// var num1 , num2 , num3;

// do {
//     num1 = prompt("Enter your number1");
// } while (!isFinite(num1)) {
//  do {
//         num2 = prompt("Enter your number2");
//      } while (!isFinite(num2)) {
// do{
//    num3 = prompt("Enter your number 3 ");
// } while (!isFinite(num3)) {

// }
//         num1 = Number(num1);
//         num2 = Number(num2);
//         num3 = Number(num3);
        
//         function task4 (x , y , z){
//              if(x%y == 0 && x%z != 0){
//                      document.writeln( x + ' is divisable by '+ y + " only <br>");
            
//                  }else if ( x%z == 0 && x%y != 0){
//                      document.writeln( x + ' is divisable by '+ z +" only <br>");
            
//                  }else if ( x%y == 0 && x%z == 0 && x%0 != 0 ){
//                     document.writeln( x + 'is divisable by both  '+ y + "and "+ z +"<br>")
            
//                 }else if (x%0 == 0 && x%y != 0 && x%z != 0){
//                     document.writeln( x + ' is divisable by 0 ')
//                 }else{
//                    document.writeln( x + ' is  not divisable by  both '+ y +'and '+ z+ "<br>");
//                 }
            
//              }

//              task4 (num1 , num2 , num3);
       

//     }
// }



// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


var num1, num2, num3;
do {
    num1 = prompt("Enter your number1:");
} while (!isFinite(num1) || num1 === null || num1 === "");

do {
    num2 = prompt("Enter your number2:");
} while (!isFinite(num2) || num2 === null || num2 === "");

do {
    num3 = prompt("Enter your number3:");
} while (!isFinite(num3) || num3 === null || num3 === "");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);


// function task4(x, y, z) {
//     if (y === 0 || z === 0) {
//         document.writeln("Error: Cannot divide by zero.<br>");
//         return;
//     }
//     if (x % y === 0 && x % z !== 0) {
//         document.writeln(x + " is divisible by " + y + " only.<br>");
//     } else if (x % z === 0 && x % y !== 0) {
//         document.writeln(x + " is divisible by " + z + " only.<br>");
//     } else if (x % y === 0 && x % z === 0) {
//         document.writeln(x + " is divisible by both " + y + " and " + z + ".<br>");
//     }else {
//         document.writeln(x + " is not divisible by either " + y + " or " + z + ".<br>");
//     }
// }


function task4(x, y, z) {
    if (y === 0 || z === 0) {
        document.writeln("Error: Cannot divide by zero.<br>");
        return;
    }
    if (x % y === 0 && x % z !== 0) {
        document.writeln(x + " is divisible by " + y + " only.<br>");
    } else if (x % z === 0 && x % y !== 0) {
        document.writeln(x + " is divisible by " + z + " only.<br>");
    } else if (x % y === 0 && x % z === 0) {
        document.writeln(x + " is divisible by both " + y + " and " + z + ".<br>");
    }else {
        document.writeln(x + " is not divisible by either " + y + " or " + z + ".<br>");
    }
}


task4(num1, num2, num3);



