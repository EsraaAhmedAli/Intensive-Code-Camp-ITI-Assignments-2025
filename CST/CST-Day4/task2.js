// Prompt user for input string
let inputString = prompt("Enter a string:");

// Ask user if case sensitivity should be considered
let caseSensitive = confirm("Do you want to consider letter case? (OK for Yes, Cancel for No)");

// Remove non-alphanumeric characters and spaces
let processedString = inputString.replace(/[^a-zA-Z0-9]/g, "");

// Convert to lowercase if case sensitivity is not considered
if (!caseSensitive) {
    processedString = processedString.toLowerCase();
}

// Check if the string is a palindrome using a while loop
let left = 0;
let right = processedString.length - 1;
let isPalindrome = true;
// moom
// 0 < 4 
// m = m
//  

while (left < right && isPalindrome) {
    if (processedString[left] !== processedString[right]) {
        isPalindrome = false;
    }
    left++;
    right--;
}

// Display result
alert(isPalindrome ? "The entered string is a palindrome!" : "The entered string is NOT a palindrome.");
