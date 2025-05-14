
// task 1
const numbers = new Set([1, 2, 3, 4, 5, 3, 2]);   

console.log('Has 3:', numbers.has(3)); // true

numbers.delete(2);

const arrayFromSet = Array.from(numbers);

console.log('Array from Set:', arrayFromSet);
console.log('Using forEach:');
numbers.forEach(value => {
    console.log(value);
});
console.log('Using for...of:');
for (const value of numbers) {
    console.log(value);
}

console.log("///////////////////////////////////////// task 2 ///////////////////////")


// task 2



const studentScores = new Map([
    ["Alice", 85],
    ["Bob", 90],
    ["Charlie", 78]
]);

console.log("Bob's score:", studentScores.get("Bob")); // 90

studentScores.set("Charlie", 88);

console.log("Has David?", studentScores.has("David")); // false

console.log("Using forEach:");
studentScores.forEach((score, student) => {
    console.log(`${student}: ${score}`);
});

console.log("Using for...of:");
for (const [student, score] of studentScores) {
    console.log(`${student}: ${score}`);
}



console.log("///////////////////////////////////////// task 3 /////////////////////")

const countryPopulations = new Map([
    ["USA", 331],
    ["India", 1380],
    ["China", 1441]
]);


const objFromMap = Object.fromEntries(countryPopulations);
console.log("Object from Map:", objFromMap);


const mapFromObj = new Map(Object.entries(objFromMap));
console.log("Map from Object:", mapFromObj);


const countrySet = new Set(countryPopulations.keys());
console.log("Set of country names:", countrySet);


const countryArray = Array.from(countrySet);
console.log("Array from Set:", countryArray);




console.log("///////////////////////////////////////// task 4 /////////////////")
//task 4

class Employee {
    constructor(id, salary, department) {
        this.id = id;
        this.salary = salary;
        this.department = department;
    }

    getDetails() {
        return `ID: ${this.id}, Salary: $${this.salary}, Department: ${this.department}`;
    }
}

class Manager extends Employee {
    constructor(id, salary, department, teamSize) {
        super(id, salary, department);
        this.teamSize = teamSize;
    }

    getDetails() {
        return `${super.getDetails()}, Team Size: ${this.teamSize}`;
    }
}

const manager = new Manager(1, 5000, "Engineering", 10);

console.log(manager.getDetails());

manager.id = 2;

console.log(manager.getDetails());



console.log("///////////////////////////////////////// task 5 ///////////////")

// task 5 


class Temperature {
    // Private 
    #celsius;

    constructor(initialTemp) {
        this.celsius = initialTemp; // Use setter for validation
    }

    // Getter
    get celsius() {
        return this.#celsius;
    }

    // Setter with validation
    set celsius(value) {
        if (value < -273.15) {
            throw new Error("Temperature cannot be below absolute zero (-273.15°C)");
        }
        this.#celsius = value;
    }
}

// Test the Temperature 
try {
    const temp = new Temperature(25);
    console.log("Initial temperature:", temp.celsius); // 25

    temp.celsius = 0; // Update with a valid value
    console.log("Updated temperature:", temp.celsius); // 0

    temp.celsius = -300; // Try to set an invalid value
} catch (error) {
    console.error("Error:", error.message);
}


console.log("/////////////// task 6 ///////////////////////")
//   task 6


class MathUtils {

    static PI = 3.14;
    static calculateCircumference(radius) {
        return 2 * this.PI * radius;
    }
}


const radius = 5;
const circumference = MathUtils.calculateCircumference(radius);
console.log(`Circumference of circle with radius ${radius}:`, circumference); 



console.log("/////////////// task 8 /////////////////////////////////////")




const firstUniqueChar = (str) => {
    return str.split('').find(char => str.split('').filter(c => c === char).length === 1) || null;
  };
  

  console.log(firstUniqueChar("abacbd")); // "c"
  console.log(firstUniqueChar("aabbcc")); // null
  
