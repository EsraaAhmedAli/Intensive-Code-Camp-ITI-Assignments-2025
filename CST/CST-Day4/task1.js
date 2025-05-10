// Prompt user for input string
let inputString = prompt("Enter a string:");

// Prompt user for the character to count
let charToCount = prompt("Enter the character to count:");
console.log(!charToCount);

// Validate character input

// هنا بهندل ان لو مدخلتش حرف او لو دخلت اكتر من حرف 
if (!charToCount || charToCount.length !== 1) {
    alert("Please enter a single character to count.");
} else {
    // طب لو دخل وكلو تمام  هقولو انتو عايزو sensitive ولا لا 
    let caseSensitive = confirm("Do you want to consider letter case? (OK for Yes, Cancel for No)");
    
    
    if (!caseSensitive) {
        inputString = inputString.toLowerCase();
        charToCount = charToCount.toLowerCase();
    }
    
    
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === charToCount) {
            count++;
        }
    }
    
    // Display result
    alert(`The character '${charToCount}' appears ${count} times in the given string.`);
}
