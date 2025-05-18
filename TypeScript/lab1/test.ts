// task 1 


interface User {
    name: string;
    age: number;
  }
  
  
  let user: Pick<User, "name"> = {
    name: "Esraa"
  };
  console.log(user.name);
  console.log(user);


// task 2 


interface Profile {
    username?: string;  
    email?: string;     
  }
  
  
  type RequiredProfile = Required<Profile>;
  
  
  let profile: RequiredProfile = {
    username: "esraa ahmed",  
    email: "esraa_ahmed@gmail.com" 
  };
  
  console.log(profile);
  
  
  
  // task 3

let colors: Record<"red" | "green" | "blue", string> = {
    red: "#FF0000",      
    green: "#00FF00",    
    blue: "#0000FF"     
  };
  
  
  console.log(colors.red); 
  

  // task4

  interface Person1 {
    name: string;
    age: number;
    email: string;
  }
  type NameAndEmail = Pick<Person, "name" | "email">;
  
  let Person1: NameAndEmail = {
    name: "Esraa",
    email: "esraa_ahmed@gmail.com"
  };
  console.log(Person1.name);
  console.log(Person1.email);
  console.log(Person1);  

  // task5

  interface Person {
    name: string;
    age: number;
    email: string;
  }
  type NameAndEmailOnly = Omit<Person, "age">;

  let person: NameAndEmailOnly = {
    name: "Esraa",
    email: "esraa@example.com"
  };

  console.log(person);


  //task 6


type Colors = "red" | "green" | "blue" | "yellow";


type ColorsWithoutYellow = Exclude<Colors, "yellow">;


let colo: ColorsWithoutYellow = "blue";  
console.log(colo);  

// let invalidColor: ColorsWithoutYellow = "yellow";  

    
//task 7


type Color = "red" | "green" | "blue" | "yellow";
type RedAndBlue = "red" | "blue";
let color: RedAndBlue = "red"; 
console.log(color);  
// let invalidColor: RedAndBlue = "green";  
// let invalidColor2: RedAndBlue = "yellow"; 


//task 8



type MaybeString = string | null | undefined;
type OnlyString = Exclude<MaybeString, null | undefined>;
let myString: OnlyString = "Hello, World!";  
console.log(myString);  
// let invalidString: OnlyString = null;      
// let anotherInvalid: OnlyString = undefined; 

