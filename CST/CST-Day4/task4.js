console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');


// Function to validate name (only characters, no numbers)
function validateName(name) {
    return /^[A-Za-z]+$/.test(name);
}

// Function to validate phone number (exactly 8 digits)
function validatePhoneNumber(phone) {
    return /^\d{8}$/.test(phone);
}

// Function to validate mobile number (11 digits, starts with 010, 011, or 012)
function validateMobileNumber(mobile) {
    return /^(010|011|012)\d{8}$/.test(mobile);
}

// Function to validate email format
function validateEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

//  Get user inputs
let name = prompt("Enter your name:");
while (!validateName(name)) {
    name = prompt("Invalid name. Please enter a valid name (letters only):");
}

let phoneNumber = prompt("Enter your phone number (8 digits):");
while (!validatePhoneNumber(phoneNumber)) {
    phoneNumber = prompt("Invalid phone number. Please enter exactly 8 digits:");
}

let mobileNumber = prompt("Enter your mobile number (11 digits, starts with 010, 011, or 012):");
while (!validateMobileNumber(mobileNumber)) {
    mobileNumber = prompt("Invalid mobile number. Please enter a valid number (starts with 010, 011, or 012 and is 11 digits long):");
}

let email = prompt("Enter your email:");
while (!validateEmail(email)) {
    email = prompt("Invalid email. Please enter a valid email address:");
}

// Get user's choice of color
let colorChoice = prompt("Choose a text color: red, green, or blue:").toLowerCase();
while (!["red", "green", "blue"].includes(colorChoice)) {
    colorChoice = prompt("Invalid choice. Please choose either red, green, or blue:").toLowerCase();
}
// console.log( name +"\n" + phoneNumber+"\n" + mobileNumber + "\n" + email + "\n" + colorChoice + "\n");

// // console.log ("%c name " + "\n"+ "%c phoneNumber " + "\n" + mobilNumber + "\n" + email + "\n" + colorChoice ' , 'color : colorChoice  ' )


console.log( `%c ${name} \n ${phoneNumber} \n ${mobileNumber} \n ${email} \n ${colorChoice}`, `color:${colorChoice}`);