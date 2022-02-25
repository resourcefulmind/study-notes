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



