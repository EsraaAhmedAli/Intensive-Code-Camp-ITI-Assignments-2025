function addNumbers() {
    if (arguments.length === 0) {
        throw new Error("Function requires at least one number.");
    }
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number") {
            throw new Error("All parameters must be numbers.");
        }
    }
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

try {
    // console.log(addNumbers(1, 2, 3, 4)); 
    // console.log(addNumbers()); 
    console.log(addNumbers(1, "a", 3)); 
} catch (error) {
    console.error(error.message);
}
