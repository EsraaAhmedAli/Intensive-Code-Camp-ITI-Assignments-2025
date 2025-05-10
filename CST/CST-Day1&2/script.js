var num1 , num2 ;
var max =0 ,min =0 ;
    do{
        num1 = prompt("Enter your number1"); 
        if (num1 == 0)   alert("the number 1 is 0")
       
       }while(!isFinite(num1)){
       do{
         num2 = prompt("Enter your number2");   
       }while(!isFinite(num2)){
           num1 = Number(num1);
           num2 = Number(num2);
          if(num1 > num2){
              max = num1 ;
              min = num2;
              console.log("number 1"+num1);
              console.log("number 2"+num2);
            //   document.writeln(num1);
            //   document.writeln(num2);
          }else{
            max = num2;
            min = num1;

          } 
        

           
        //    console.log(result);
        //    document.writeln(result);

        document.writeln("Maximum Number is = "+ max);
        document.writeln("Minmum Number is = "+ min);
       
       }
       }



// var sum = 0;
// var num = 1;
// while (num !== 0 && sum <100 ) {
//     num = prompt("Enter a number (enter 0 to stop):");
//     if (isFinite(num)) {
//         num = Number(num);
//         if (num !== 0) {
//         sum += num;
//         }
//     } else {
//         alert("Please enter a valid number.");
//         num = 1;
//     }
//     if (sum >= 100) {
//         alert("The result is greater than or equal to 100");
//     }
// }

// console.log("Sum:", sum);
// document.writeln("Sum: " + sum + "<br>");

// // التحقق من المجموع
// if (sum >= 100) {
//     alert("The result is greater than or equal to 100");
// }

