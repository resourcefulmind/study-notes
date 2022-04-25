//Kata for 12th April, 2022

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//First declare the function
function DNAStrand(dna){
    //first split the string of the array into an array of substrings using the split method
    let arr = dna.split('');
    //then loop through arr and reassign the individual substrings to the new values
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'A') {
            arr[i] = 'T'
        } else if (arr[i] === 'T') {
            arr[i] = 'A'
        } else if (arr[i] === 'G') {
            arr[i] = 'C'
        } else if (arr[i] === 'C') {
            arr[i] = 'G'
        } else {
            return 'Hey there extra terrestrial life-form. How goes it in Mars?'
        }
    }
    //then return the concatenated version all the elements in arr with the join() method
    return arr.join('');
  }

// Kata for 19th April, 2022
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// To solve this, the .endswith() method comes into play


// first task
function solution(str, ending){
    // TODO: complete
    if (str.endsWith(ending)) {
      return true
    } else {
      return false
    }
  }

solution("Bastian", "n");
solution("Congratulation", "on");
solution("Walking on water and developing software from a specification are easy if both are frozen", "specification");

//second task
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// A solution to this would be to first break up the input words into small substrings
String.prototype.toJadenCase = function () {
    var words = input.split(' '); 
//Then declare a variable with an empty array value to accommodate the words that will be capitalized
    var CapitalizedWords = []; 
//Make a for loop to iterate through the words and push a concatenation of the first letter of the word converted to uppercase and a slice of the rest of the words
words.forEach(element => {  
    CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
}); 
//Then join the words back together
return CapitalizedWords.join(' ');  
};

// OR YOU CAN DO THE BELOW
String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

// Kata for 20th April, 2022
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.

//Approach would be to first declare the function
function addBinary(a,b) { 
//Then declare a variable which will hold the result of the addition of the two numbers
var result = a + b;
//and then return the binary value of that result using the toString method
return result.toString(2);
}

//second task
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// A solution to this would be a simple for loop
var summation = function (num) {
  // Code here
  var result = 0;
  for (let i = 0; i <= num; i++) {
    result += i
  }
  return result;
}

// Kata for 20th April, 2Convert number to reversed array of digits

//first task
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order
//my thought process here would be to push that number into a new array, split up the array, reverse it and then join it all back together again
function digitize(n) {
  //first use the split method to split the number and put them into an array
  var arr = (""+n).split('');
  //declare an empty array which the reversed numbers are going to be passed into
  var reversedArr = [];
  //reverse the array with a for loop that starts at the index of the arr length less than 1 and decreases by 1 and use a parse int to change the stringlike back numbers into real numbers
  for (var i = arr.length - 1; i >= 0; i--) {
  reversedArr[i] = parseInt(arr.shift(), 10);
	}
	return reversedArr;
}

console.log(digitize(32245));
console.log(digitize(455646636337373));

//second task
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// Solution an be achieved using a for loop and rounding down for each year
function nbYear(p0, percent, aug, p) {
    
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return years
}

nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10