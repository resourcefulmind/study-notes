//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let nums = [20, 30, 40, 50, 60]

let sum = nums.reduce( (acc, x) => acc + x, 0 );
//The 0 above  is the initialValue i.e. the value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used.
//If the array is empty and no initialValue is provided, an error will be thrown. So it is safer to provide an initial value such as 0 if you're performing addition, and 1 if you're performing multiplication.

alert(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
