
function addTwoNums(a,b) {

    if(arguments.length !=2 || typeof(a) !== 'number' || typeof(b) !== 'number') {
        throw new Error("expected 2 arguments (numbers)");
        
    }
    return a+b

}

// addTwoNums('1','2')
// addTwoNums(1,2,3)
// addTwoNums(1)
// addTwoNums()
// addTwoNums('1',2)
// console.log(
//     addTwoNums(1,2)
// );

function adding(){
    if(arguments.length <=1){
        throw new Error("expected 2 arguments at least");
        
    }
    let sum =0
    for(let i=0 ; i <arguments.length ;i++){
        if(typeof arguments[i] !== 'number' ) {
            throw new Error("arguments should be numbers");
            
        }
        sum += arguments[i]


    }
    
    console.log(sum);
    
}

// adding()
// adding('3','5')
// adding(1,2,3,4,5)