//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [];
nums[0] = 50;
nums[1] = 100;
nums[2] = "150";
nums[3] = 200;
nums[4] = 250;

let sum = nums.reduce( (acc, x) => acc + Number(x), 0 );

alert(sum); // 750
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let numArr = [];
numArr.push(2, 4, 6, 8);
let numsSquared = numArr.map( n => n * n )
console.log(numsSquared); // [4, 16, 36, 64]

or

let numArray = [];
numArray[0] = 50;
numArray[1] = 100;
numArray[2] = 150;
numArray[3] = 200;
numArray[4] = 250;

function numsSquared(arr) {
    return arr.map( n => n * n )
}
numsSquared(numArray);
numsSquared([2, 4, 6, 8]); 

//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(string) {
    return string.split("").reverse().join("");
}

reverseString("Howdy")

//Create a function that takes in a string
//Alert if the string is a palindrome or not

// const palindromeChecker = str => str === str.split("").reverse().join("") ? alert('Yes') : alert('No');

Or 

function palindromeChecker(string) {
    let reverseString = string.split("").reverse().join("");
    if (str === reverseString) {
        alert('Yes')
    } else {
        alert(No)
    }
}