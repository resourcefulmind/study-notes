## Functions

- Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

# How To Name a Function
 1. First you write the `function` keyword
 2. Then a list of parameters separated by parentheses.
 3. Open up a curly bracket.
 4. Then you write the code of the function between the curly brackets

 For example 
    function name(para1, para2, para3, ..., paraN) {
        ...function body...
    }
For example again, 
    function showMyName() {
        console.log('My name is Opeyemi');
    }
    showMyName();

- One of the main purposes of a function is to avoid code duplication.

# Local Variable
A variable declared inside a function is only visible inside that function. (Very important to know this). For example, 

function showMyName() {
        let prompt = 'My name is Opeyemi'; 
        console.log( prompt );
    }
    showMyName();

    console.log( prompt );

# Outer Variables
A function can access an outer variable in its body.

let name = "Opeyemi";

function showMyName() {
        let prompt = `My name is ${name}`; 
        console.log( prompt );
    }
    showMyName();

- Function can also modify outer variable. The outer variable is only used if there’s no local one.

let name = "Opeyemi";

function showMyName() {
        name = 'Chukwuemeka';

        let prompt = `My name is ${name}`; 
        console.log( prompt );
    }
    showMyName();

- If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored but WHEN YOU TRY TO ACCESS THE VALUE OF NAME INDEPENDENTLY, IT RETURNS THE VALUE OF THE OUTER VARIABLE.

let name = "Opeyemi";

function showMyName() {
       let name = 'Chukwuemeka';

        let prompt = `My name is ${name}`; 
        console.log( prompt );
    }
    showMyName();

# Key Points:
- Variables declared outside of any function, such as the outer `name` in the code above, are called **global**.
- Global variables are visible from any function (unless shadowed by locals).
- **It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.**

# Parameters
Parameters are what we use to pass arbitrary/random data to our functions. They are always contained in the parentheses after the function name.

function showMyName(name) {

        let prompt = `My name is ${name}`; 
        console.log( prompt );
    }
    showMyName("Opeyemi");


function myDreams(coFounder, company) {
  	console.log(`I hope to be working for ${coFounder} to build ${company} soon. It would be a dream come true and a huge step in my career.`)
}

myDreams("Gui", "GameBitAvax");

<!-- In the above, the given values are copied to local variables from and text. Then the function uses them. -->

In the next example, we declare a variable `coFounder` and pass it to the function. 

Please note: **the function changes coFounder, but the change is not seen outside, because a function always gets a copy of the value:**

function myDreams(coFounder, company) {
    coFounder = `"brilliant" ${coFounder}`;

    console.log(`I hope to be working for ${coFounder} to build ${company} soon. It would be a dream come true and a huge step in my career.`) 
}

let coFounder = "Gui";

myDreams(coFounder, "GameBitAvax");

# Key Points

When a value is passed as a function parameter, it’s also called an argument.

In other words, to put these terms straight:

1. A parameter is the **variable** listed inside the parentheses in the function declaration (it’s a declaration time term)
2. An argument is the **value** that is passed to the function when it is called (it’s a call time term).
**We declare functions listing their parameters, then call them passing arguments.**


# Default Values
If a function is called, but an argument is not provided, then the corresponding value becomes undefined. This value can also be set to even more complex expressions that will only be invoked and/or assigned if the specified function parameter is missing.

- Sometimes it makes sense to assign default values for parameters not in the function declaration, but at a later stage.

We can check if the parameter is passed during the function execution, by comparing it with undefined
I feel like this can help with debugging code when we are not getting the required results

function showMyName(name) {

        if (name === undefined) {
            name = 'there is a problem';
        }
        console.log(name);
    }
    showMyName();

# Returning a Value
- A function can return a value back into the calling code as the result.

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);

- The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above) but it will not print or display unless it is told to do so.

- It is possible to use return without a value. That causes the function to exit immediately.

- If a function does not return a value, it is the same as if it returns undefined:
    function doNothing() {

    }
- An empty return is also the same as return undefined:
    function doNothing() {
        return;
    }

- Even if the expression you want to return is long, never put it on a new line as JS assumes a semi-colon and will treat that code you put on a new line as a new line of code instead of part of the return value. Rather, start the return expression on the same line and then continue or put a parentheses after the return and then you can type on the next line.

# How To Name A Function

- Should usually start with a verb since functions are actions.
- Should be brief and accurate and describe what it does.
Example;

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc

- A function should do exactly what is suggested by its name, no more. One function, one action. Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two.

- Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it’s definitely a good thing.
