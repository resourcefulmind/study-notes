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
    showMyName("Warisi");


function myDreams(coFounder, company) {
  	console.log(`I hope to be working for ${coFounder} to build ${company} soon. It would be a dream come true and a huge step in my career.`)
}

myDreams("Gui", "GameBitAvax");





