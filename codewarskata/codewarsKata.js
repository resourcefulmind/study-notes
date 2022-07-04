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

// Kata for 26th April, 2Convert number to reversed array of digits

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


// Kata for 28th April, 2Convert number to reversed array of digits

//first task
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//First we declare the function countSheeps and pass arrayOfSheep into it
function countSheeps(arrayOfSheep) {
  // There is a number of sheep and there cannot be negative sheep so initial number should start from zero
  var num = 0;
  //loop through the array of sheep and check which is true and if true, increment until the loop is complete
    for(var i = 0; i < arrayOfSheep.length; i++)
    {  
      if (arrayOfSheep[i]==true) { 
        num++; 
      }
    }
    return num;
}

//second task
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
// Use the replace method and the regular expression, /T/g that will globally, replace every instance of T and replace it with U.
return dna.replace(/T/g, "U");
}

// Kata for 9th May,2022 Sum Arrays

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0


  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    if (arr = []) {
      return 0
    } else {
      return arr.reduce((acc, x) => acc + Number(x), 0);
    }
  }
}

sumArray([2, 4, 6, 8]);
sumArray([[1, 5.2, 4, 0, -1]])

// my solution was wrong as i oversimplified the problem by adding lines 230-232
// solution would be 
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    return arr.reduce((acc, x) => acc + Number(x), 0);
  }
}

//second task
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingNumbers(num) {
  let result = num.toString().split('').sort((a, b) => b - a).join('')
  return parseInt(result);
}

descendingNumbers(123456789)

//third task
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greetingStatement(name) {
  return `Hello, ${name} how are you doing today?`;
}

greetingStatement("Opeyemi");

// Kata for 10th May,2022 

//First kata Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
//The values passed will be strictly converted to a number by the "Number" syntax
function sumMix(x) {
  let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      return arr.reduce((acc, x) => acc + Number(x), 0);
    }
}

// Second task
// You Can't Code Under Pressure #1
//Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

// Third Task
//Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++
    }
  }
  return vowelsCount;
}

getCount("abracadabra");

//Fourth task
// The highest profit wins!

//Story

// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task

// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]; 
}

minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]

// Kata for 6th June,2022 
// First Task
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
  //return true or false
  return /^(\d{4}|\d{6})$/.test(pin);

}

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// Second Task - Ones and Zeros

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.


const binaryArrayToNumber = arr => {
  // your code
  //first join the values of the array indexes together
  let conversion = arr.join('');
  //convert to integer
  return parseInt(conversion, 2);
};

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11


// Third Task - Volume of a Cuboid

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
    return length * width * height
  }
}


// Fourth Task - Will there be enough space?

// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.



function enough(cap, on, wait) {
  // your code here
  return Math.max(wait + on - cap, 0)
}

enough(10, 5, 5);
// 0, He can fit all 5 passengers
enough(100, 60, 50);
// 10, He can't fit 10 out of 50 waiting


//Fifth Task - Century From Year

// Introduction

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task

// Given a year, return the century it is in.
function century(year) {
  // Finish this :)
  let result = 0;
  // loop over the year
  for (let i = 0; i < year; i++) {
    if (i % 100 === 0) {
      result++;
    }
  }
  return result;
}

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20


