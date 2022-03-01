## Course Title: Getting Started With Javascript
## Course Author: Kyle Simpson
## Learning Platform: Frontend Masters

- PS, These are my personal notes and understanding from the course. 

# 3 Pillars of Javascript
    - Types/Coercion
    - Scope/Closures
    - this/Prototypes

# Values
- In JS, there is no distinction between numbers that have decimal places in them and numbers that don't.
- Single quotes or double quotes are used to represent strings. Strings are used to put together information in sets.
- True and false are for booleans
- Null and undefined are empty values. Empty values are values that have never been given a value before or have been given a value and no longer have a value.
- The above are primitive values
- Array is an ordered set of list. 
- Objects are another set of lists but contain more detail and key, value pairs.
- Values represent tasks that we want to accomplish.



# Operations
- We have different operators
For example 3 + 4
Operator = +
Operands = 3 and 4
3 and 4 are binary operands 
- We also have "!", "==", "||" and comparison operators like >=

# Variable
- It is a place in memory where bits and pieces of our code
    var name = "Opeyemi Stephen";

- We can also name like so;
    var age;
    age = 39;
- Or like so;
var friends = ["Bode", "Thomas"];

Some variables can also perform operations
    var age = 39;
    age++;

# Expressions and Statements

Consider the regular english sentence "Wizkid is a Nigerian artiste who likes to sing love songs"

"who likes to sing love songs" is a phrase and not a complete sentence.

Expressions are like phrases in programming.

The entire sentence is what we call a statement in programming.

For example;
    var name = "Chadwick Boseman";

In the above, the entire statement will be [var name = "Chadwick Boseman";] and the expression will be ["Chadwick Boseman"], [name], [name = "Chadwick Boseman"] and all of them will come together to make the statement [var name = "Chadwick Boseman" ].

# If & Else Statements

- This is one of the many decision processes in javascript. It has to do with choosing to do one or the other.

var albumTitle = "Twice as Tall";
if (albumTitle == "Twice as Tall") {
    console.log(`${albumTitle} is a Grammy Award winning project by Burna Boy of Nigeria`);
} else {
    "We do not have any record of this album winning a Grammy"
}

If we were to change the value of albumTitle to "A better time", the else statement is what will be executed.

# Loops

We might have to do things multiple times or over and over again. That's what loops are for.

Take for instance that you have a birthday party and you have 20 guests coming around and want to thank them for coming via code.

First you can write a greet function that would say 
const sayHiToGuest = (guest) => {
    return `Hello ${guest.name} and thank you so much for coming to my birthday party. I appreciate your presence`;
}

And then you have a list of guests with the guys and the girls as so;

var guests = ["Peter", "Salome", "Henderson", "Luis", "Sandra", "Lola", "Anna", "Borini", "Maciej", "Hussien", "Gui"];

To write this for loop, 

for (let i = 0; i < guests.length; i++) {
    sayHiToGuests(guests[i]);
};

What we have done in the above loop is as follows;
- for indicates that you will be doing something multiple times
- [let i = 0] will make an i and initialize at 0
- i++ will increment i y 1
- The middle test clause will tell the loop when to stop.

or you can use 

for (let guest of guests) {
    sayHiToGuests( guest );
}

# While Loop
It will check to see if the array still has an item and then do something while it is still there

var students = ["matt", "sarah", "susan"];

while (students.length > 0) {
    let student = students.pop();
    console.log(`you have not submitted your assignment ${student}`);
}

# Functions

- Will ideally be called a procedure.
- Doesn't give anything back unless called or assigned to a variable or printed on the screen.

function yearsRemaining(yearElapsed, endYear) {
    return endYear - yearElapsed;
}

yearsRemaining(28, 100);

var probableYearsLeftToLive = yearsRemaining(28, 100);

In summary, a function is a collection of statements that we want to use in different parts of our code.

## Little Exercise

const addFavoriteBook = (bookName) => {
let favoriteBooks = [];
if (bookName.!includes("Great")) {
    favoriteBooks.push();
}

const printFavoriteBooks = () => {
    console.log(`Favorite Books`)
}
};

const addFavoriteBook = (bookName) => {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
}

const printFavoriteBooks = () => {
  console.log(`Favorite Books: ${favoriteBooks.length}`);
  for (let bookName of favoriteBooks) {
    console.log(bookName);
  }
}

var favoriteBooks = [];

addFavoriteBook("The Great Gatsby");
addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("Crime and Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("Mad Men and Specialists");

printFavoriteBooks();
favoriteBooks;

- Read Chapter 1 of his book on Github to cement knowledge

## Three Pillars of Javascript

- Types/Coercion
- Scope/Closures
- this/Prototypes

## Types/Coercion

- 3 subtopics
    1. Primitive Types
    2. Converting Types
    3. Checking Equality
- Alot of people do not try to deeply understand it and it is quite important to do so.

# Primitive Types

Everything is not an object in javascript.
Primitive types include
1. undefined
2. string
3. number
4. boolean
5. object
6. symbol (recently added)
- Variables do not have types, values do. In javascript, variables can hold anything, just the values that have types.

Whether the value has been declared and not assigned a value or even not being declared at all, javascript returns "undefined" on both.

When you assign null to a variable, it returns a type of Object.

Functions will return a type of function

Array will return a type of object

- Values with special behaviors
1. NaN value
    This value pops up when you try to do something for instance like dividing a sentence by a number eg;
    var carabao = 'Liverpool play Chelsea this weekend'
    var result = carabao / 2;

    result will return NaN


## Type Coercion (Conversion of a Type)

the "new" keyword is used to make new instances of things like objects, array, function, date, regexp, error

We do not use new for strings, numbers and booleans

var today = new Date("February 25, 2022");
typeof today will be object so use new when trying to instantiate objects

today.toUTCString();

var myheartBeat = String(72);

All languages always convert from one type to another

Think about the code below

var statement1 = "We have ";
var numFootballers = 4;
var statement2 = " GOATs in football right now. Pele, Maradona, Ronaldo and Messi";

console.log(statement1 + numFootballers + statement2);

Now imagine the code 
var numStudents = 25;

console.log(
    `There are ${numStudents+""} students`
)

Those double quotes in the literal will convert the numStudents to a string.

When a string is an operand of the + operator, Javascript instead of converting the string to a Number, converts the number to a string.

If only one side is a string then everything else will be converted to a string. The plus operator will only convert to number if both values are numbers

Number + Number = Number
Number + String = String
String + Number = String
String + String = String

For Booleans, there are two values falsy and truthy. This means that which values when we convert them will become false (falsy) and which values when we convert them will become true (truthy)?

Falsy values are 0, -0, null, NaN, false, undefined.
Truthy values include strings like "foo", numbers like 23, objects, arrays, true, functions, etc

The expression you pass to an if statement has to result in a boolean and if it doesn't, JS will invoke a boolean conversion.

## Coercion Best Practices
- A quality JS program embraces coercions, making sure the types involved in every operation are clear. If you make your types obvious in your programmes, a vast majority of corner case issues go away.

## Equality

- GENERAL CONVENTION
== will check value (loose)
=== will check value and type (strict)
It isn't actually true because the difference is whether coercion is allowed.

== allows coercion when the types are different but === disallows coercion when the types are different.

When the types are already the same, the == and === do the same thing.

It's only when the types are different that they have a different behavior.  For example

    var workshop1 = { topic: null };
    var workshop2 = {};

    if {
        {workshop1.topic === null || workshop1.topic === undefined} && 
        {workshop2.topic === null || workshop2.topic === undefined} &&
    } {
        <!--  -->
    }

    if {
        workshop1.topic == null &&
        workshop2.topic == null
    } {
        <!--  -->
    }

- Javascript has a dynamic type system, which uses various forms of coercion for value type conversion, including equality comparisons. You simply cannot write good javascript code without knowing what the types are.

## Scope
- Summarily, scope means where the javascript engine looks for things.
e.g x = 42; 
Te scope will be figuring out where to find x in memory.

Imagine the example;

var name = "Opeyemi";

function otherClass() {
    name = "Stephen";
    occupation = "Software engineer";
    console.log("This is what I do for a living");
}

otherClass();

In the above, a variable name is assigned a value of Opeyemi and that same name is assigned stephen inside the otherClass() function body.

BEcause there is no declaration for teacher inside the otherClass, the rules of scope tell us that it will find the variable in the outer scope. 
Scope is the rule for figuring out where to set the variables.
 As for occupation, when you create a variable that has not been declared before in the local scope such as the function otherClass, that variable will be created in the global scope.

## Undefined vs Undeclared

First and foremost, they are not the same. Undeclared means it has never been declared. Undefined is a variable that has been declared but doesn't have a value.

## Function Expressions
It is a function that is assigned as a value somewhere.They can be passed as arguments or assigned to variable or returned as a value.

An example will be

var clickHandler = function() {
    <!--  -->
}

The above is called an anonymous function expression

var keyHandler = function keyHandler() {
    <!--  -->
}

The above is called "named" function expression

Reasons to be aware of their differences are;

Consider these two;
var ids = people.map(person => person.id);

var ids = people.map(function getId(persom)){
    return person.id;
}

- A named function will most likely tell you what the function does from the name


## IIFEs Immediately Invoked Function Expressions

They are used to write blocks of code which you wnt to protect from encroachment and outer/global scope. IIFEs executes immediately.
The main advantage is that we get a new block of scope and if a variable is declared inside that function, it doesn't affect other parts of the outside scope.

## Closure
This is when a function "remembers" the variables outside of it, even if you pass that function elsewhere be it as a falback or as a value or something.

Two Parts: 
a. The function remembers variables declared outside of it like in some outer scope.
b. It's only closure if we pass it somewhere else.

function ask(question) {
    setTimeout(function waitASec() {
        console.log(question);
    }, 100);
}

ask("What is closure?");

Over here, the waitASec() has closure over the question variable.

## #rd Pillar Of Javascript (this/prototypes)

The most important thing here is how the function was called. That's what tell us what the "this" does.

A function's "this" keyword references the execution context for that call, determined entirely by how the function was called.

A this-aware function can thus have a different context each time it's called, which makes it more flexible & reusable.

For example;

var workshop = {
    
}
