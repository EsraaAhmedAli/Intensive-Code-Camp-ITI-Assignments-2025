function acceptTwoParams(param1, param2) {
    if (arguments.length !== 2) {
        throw new Error("Function accepts exactly two parameters.");
    }
    console.log("Parameters accepted:", param1, param2);
}

try {
    // acceptTwoParams(3,20);
    // acceptTwoParams(5); 
    acceptTwoParams(5, 10, 15); 
} catch (error) {
    console.error(error.message);
}
