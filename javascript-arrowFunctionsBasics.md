## Why do you want to use Arrow functions in the first place?
- It has very simple and concise syntax for creating functions that is better than function expressions.

It looks like this

```
let func = (arg1, arg2, ..., argN) => expression;
```
*What was created above?*
A function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.

It is simply the shorter version of 
```
let func = function(arg1, arg2, ..., argN) {
  return expression;
};
```

Real life example;
```
let sum = (a, b, c) => a + b + c;

console.log(sum(3, 4, 5));
```
<!-- Result will be 12 -->

- If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

```
let triple = x => x * 3;

console.log(triple(6));
```

- If there are no arguments, parentheses will be empty (but they should be present)

```
let myName = () => alert("Opeyemi!");
```

- Can be used to create dynamic functions like function expressions
```
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome();
```
# Multiline Arrow Functions

- Used for writing arrow functions that cannot sit on one line.
- **Curly braces should be used when writing multiline arrow functions and then a normal return must be used.**


