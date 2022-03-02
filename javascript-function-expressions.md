## Understanding function declarations & expressions

If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.

If the function is created as a part of an expression, it’s called a “Function Expression”.

There's a difference between

<!-- first function -->
function sayHobby() {
    console.log("Opeyemi sometimes loves to cook");
}

console.log(sayHobby);

**AND**

<!-- second function -->
let sayHobby = function() {
        console.log("Opeyemi sometimes loves to cook");
}

console.log(sayHobby);

"First function" is making a "function declaration" and "second function" is assigning a variable sayHobby, the value of a new function that prints "Opeyemi sometimes loves to cook" to the console.

- As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.

- **there’s no name after the function keyword. Omitting a name is allowed for Function Expressions.**

The function is immediately assigned to the variable, so the meaning of these code samples is the same: "create a function and put it into the variable sayHobby".

- A function will always be a value no matter how it is created. Thus, we can work with it like with other kinds of values.

## Function Manipulation as a Value

- Since a function is a value, it can be copied into another variable and then invoke/call that variable like a function too.

function sayHobby() {
    console.log("Opeyemi sometimes loves to cook");
}

let firstHobby = sayHobby;

firstHobby will be equal to the function body of sayHobby and if firstHobby is invoked like a function, it gives the value of the execution of the function body of sayHobby.

- sayHobby can also be declared in the very first line of code.

## Callback Functions

Imagine a function named `ask` which takes in three parameters, the first parameter is a question and the other two are functions which are going to be run if the question or condition in the first parameter is met or failed. e.g

function ask(question, yes, no) {
    if (question) {
        yes();
    } else {
        no();
    }
};

function sayYes() {
    console.log("You have vouched that Opeyemi is a great chef when it comes to kitchen duties");
}

function sayNo() {
    console.log("You just refuted the claim that Opeyemi knows how to cook");
}

<!-- Now let's pass in our arguments as we call the function -->
ask("Is Opeyemi a great cook?", sayYes, sayNo);

**The arguments sayYes and sayNo of ask are called callback functions or just callbacks.**

The idea is that we pass a function and expect it to be “called back” later if necessary. In our case, sayYes becomes the callback for “yes” answer, and sayNo for “no” answer.

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You have vouched that Opeyemi is a great chef when it comes to kitchen duties"); },
  function() { alert("You just refuted the claim that Opeyemi knows how to cook"); }
);

Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.

Such code appears in our scripts very naturally, it’s in the spirit of JavaScript.

# Key points

**A function is a value representing an “action”Regular values like strings or numbers represent the data.**

**A function can be perceived as an action.**
**We can pass it between variables and run when we want**


## How do you know the difference between function declarations and function expressions?

1. SYNTAX:
- Function Declaration: declared as a separate statement, in the main code flow.
    function sayHobby() {
    console.log("Opeyemi sometimes loves to cook");
}

- Function Expression: Created inside an expression or inside another syntax construct. Here, the function is created at the right side of the “assignment expression” =:

let hobby = function() {
    console.log("Opeyemi sometimes loves to cook");
}

2. JAVASCRIPT ENGINE EXECUTION

- Function Declaration: It will be called earlier and by earlier i mean at the initialization stage when the javascript engine is loading all the scripts. It will load all the function declarations and create all the functions. So no matter where the function is called, it would have been loaded first

sayHobby("Opeyemi")

function sayHobby(name) {
    console.log(`${name} sometimes loves to cook`);
}

- Function Expression: It is created when the execution reaches it and is usable only from that moment. This means that if we run the same code for the above but using a function declaration, it will give an error because the function is being called when it has not been loaded yet. It isn't loaded yet because it is not treated as a declaration and so will only load when the variable is declared and it reaches the assignment point.

sayHobby("Opeyemi")

let sayHobby = function(name) {
    console.log(`${name} sometimes loves to cook`);
}

3. BLOCK SCOPE
- When a function declaration is within a code block, it’s visible everywhere inside that block. But not outside of it. 
To make it visible outside of the code block, it is advisable to use a function expression and assign the function to a variable which can then be also invoked as a function like so;

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

- A Function Declaration is preferable, because it is visible prior to the declaration itself. That gives more flexibility in code organization, and is usually more readable.

-Use a Function Expression only when a Function Declaration is not fit for the task. 