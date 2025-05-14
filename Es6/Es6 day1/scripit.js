
// task1

let arr = [4,5,6,8,9,10 ,60,70];
let ascexpression = [...arr].sort(function(a, b) {
    return a - b;
  });


  
let asc = [...arr].sort((a , b) => a-b);

let desexpression = [...arr].sort(function(a, b) {
    return b - a;
  });
  
let des = [...arr].sort((a,b) => b-a) ;

let filter  = arr.filter(n => n> 50)
let max = Math.max(...arr);
let min = Math.min(...arr);

console.log(arr);
console.log( "the ascending is " +asc);
console.log("the  descending is "+des);
console.log( "the number is greater than 50  = "+filter);
console.log( "the minmum number is "+min)
console.log( "the maxmum number is "+max)



// task2


function calculate(operation , ...arr){
let result ;
switch (operation) {
    case "sum":
        result = arr.reduce((acc, val) => acc + val, 0);
        break;
    case "subtract":
        result = arr.reduce((acc, val) => acc - val);
        break;
    case "multiply":
        result = arr.reduce((acc, val) => acc * val, 1);
        break;
    case "divide":
        result = arr.reduce((acc, val) => acc / val);
        break;
    default:
        return { error: "Invalid operation" };

    }

    return {
        operation: operation,
        input: arr,
        result: result
    };


}

let result = calculate("sum" ,3 , 2 ,4 ,6 ,8);
console.log(`Result of ${result.operation} operation for ${result.input.join(",")} is ${result.result}`);




//task3

let projectId = prompt("Enter your project id");
let projectName  = prompt("Enter Your project Name");
let duration  = prompt("Enter your duration");

const printdata = {
    projectId:projectId ,
    projectName : projectName ,
    duration : duration ,
    printdata : function (){
console.log("the project id = "+ `${this.projectId}`  + "\nThe project Name = "+ `${this.projectName}` +"\nthe duration is "+`${this.duration}`)
    }
}

printdata.printdata()


// task 4


let arr1 = [50,60,70,80,7,25]
let arr2 = [10,60,0,9,12,15]
let merg = [...arr1 , ...arr2]
let NotDublicated = [...new Set(merg)];
console.log(merg)
console.log(NotDublicated);
let sortarray = NotDublicated.sort((a,b)=> a-b);
console.log(sortarray);

// task 5

const user = {
    name: "Esraa Ahmed",
    age: 30,
    address: {
        city: "Giza",
        country: "Egypt"
    },
    hobbies: ["Reading", "Traveling", "Swimming"]
};

const { name, age, address: { city, country }, hobbies } = user;

console.log(` User Name is : ${name}`);
console.log(`Age is: ${age}`);
console.log(`City is: ${city}`);
console.log(`Country is: ${country}`);
console.log(`Hobbies is: ${hobbies.join(", ")}`);
