//  "this is a javascript string demo"
// Function to find the longest word in a string
function findLongestWord(str) {
    let words = str.split(" "); // Convert string to an array of words
    console.log(words);
    let longestWord = words[0] || ""; // Initialize with first word if exists
    // / هفترض ان اطول كلمه هي اول كلمه
    //  this ==> 4 > 4  no   i =1
    //  is  ==> 2 >4     no   i =2
    //  a   ==> 1 >4     no   i =3
    //  javascript ==> 10 > 4  yes logest = javascript
    let i = 1;
    while (i < words.length) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
        i++;
    }
    return longestWord;
}

// Find and display the longest word
let longestWord = findLongestWord("this is a  mmmmmmmmmm javascript string demo  esraaahmedaliahmedmmmmmmmmmmmmmmmmmmmmmmmmm ");


alert("The longest word is: " + longestWord);
