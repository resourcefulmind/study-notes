

## The clue game

Create an object using bracket and dot notation that represents the characters and related data you may find in a game of Clue

- It is a board game
- Pieces in a board
- Different characters, weapons and rooms
- There is a card called confidential. Inside of the card there are three thing...the murderer, the room and the weapon.
- Entire process is to figure out which cards are in the envelope because everyone else has the other cards so you need to figure out who has the other cards to figure out which cards are missing to make a good guess as to what is inside of the envelope

Data

- Characters (you can make up character names if you want, they usually correspond with different colors)
- Weapons
- Rooms (Old school rooms)

<!-- The very first thing you need to do is to create or initialize an empty object -->
let game = {};

<!-- define the murderer property -->
game.murderer = "??";

<!-- define the weapons property. We do that with the bracket notation and the weapon value will be in string form and an array is used instead of an object because this is like a collection of things that are the same. A document is more of a collection of different things. -->
game['weapons'] = ['kitchen knife', 'stuffy pillow', 'pesticide'];

<!-- Better still we can group the weapons as objects in the array for better indexing -->
game['weapons'] = [
    {type: 'kitchen knife', location: 'bedroom'}, 
    {type: 'stuffy pillow', location: 'guest room'}, 
    {type: 'pesticide', location: 'barn'}
];

<!-- next are the characters of the game -->
game.name = [];
game.name[0] = 'Mr Affleck';
game.push('Miss Blossom') //this is wrong because we cannot push things to an object, only to an array, but we can push things to the nested property in an object like so
game.name.push('Miss Blossom');



## DESTRUCTURING
-- Destructuring's major advantage over regular naming is that you do not need to use var or let and also there is some sort of order when you are destructuring as everything on the left or target side takes what is on the right or source side.

-- It is also less verbose too and you will not need to type your head away

-- You use const when you do not want the variable to be reassigned to something else. This is nice as long as you know the rules behind it. For instance, 
a. You cannot rename a const object but you can change the value of the property in the object and also add a new property to the object.

-- For objects, when you create the variable and the order does not matter but the names have to match

-- Whenever you start thinking that objects should have an order, you should be using an array

-- In summary, destructuring just makes getting values out of objects and arrays have less typing as long as it is still readable.

Examples of Destructuring

For an array:
let [name, town] = ["Stephen", "Lagos"];
console.log(name, town);

- We can also swap variables without using temp
let a = 40, b = 42, c = 45
[b, a, c] = [a, c, b];

- Can also be used to advance deep arrays
let [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]]; 
console.log("a:", a, "b:", b, "c:", c, "d:", d);
## NOTE: It is not recommended to do something like the above because you will only get yourself confused and it is not really thoughtful to build your data structure like that.

## LIST TRANSFORMATIONS
List transformations are one of the core things we will be doing in functional utility methods which is take a list or collection of data in different arrangements and then extract data from them similar to how we are using destructuring but also by looping through it and using various logic to get what we need from it. 

Frontend devs are stuck with using APIs that they generally have no control over and the data doesnt always come in the form they want so they will use these functional utility methods to transform these lists into something that is more readable or works better fpr how the UI is arranged.

# NESTING

<!-- Let's set up an empty object called "game" -->
const game = {};
<!-- And then add a property "suspects" which will be an empty array -->
game['suspects'] = [];
<!-- then we push some a new suspect which is an object with their own properties into the empty array we just created -->
game.suspects.push({
    name: "Buhari", 
    sense: 0
});
<!-- When we visualize this data, what we will have at the end of the day is shown below -->
const game = {
    'suspects': [
        {
        name: Buhari, 
        sense: 0
        }
    ]
}
<!-- And if we are adding another suspect, we can do -->
game.suspects[1] = {
    name: "Osinbajo", 
    sense: 2
};
game[suspects] will not log anything onto the console but game["suspects"] will return the array containing the objects. Reason is just the quotes.

# Exercise 1:  Now take the nested array created and loop through it using any type of for loop that you like

SO our original object

const game = {};
game['suspects'] = [];

game.suspects.push(
    {
        name: "Buhari", 
        sense: 0
    }, 
    {
        name: "Osinbajo", 
        sense: 2
    }, 
    {
        name: "Lai Mohammed", 
        sense: -2
    }
);

function awonOde() {
    for (let i = 0; i < game.suspects.length; i++) {
        console.log(game.suspects[i]);
}

awonOde();

<!-- In the above, we initialized a function awonOde and defined where the start variable is (let i = 0) and then we are giving it a condition and while the condition is met. they increment by 1-->

QUESTION: why do we use this kind of loop with an array? and would you use it with an object?

Ans: Arrays have numerical values associated with them so they would map well unto the way the above iterates. A for-in loop 

## Exercise 2: Loop through all the properties of the suspect objects in the suspects array. Mark them if you think they are guilty


function awonOdeMetaLoop() {
    for (let i = 0; i < game.suspects.length; i++) {
        console.log('outer loop!')
        for (let key in game.suspects[i]) {
            console.log('inner loop')
            if (game.suspects[i][key] === "Buhari") {
                console.log("Look at this mumu man!")
            } else {
                console.log("we still get good leaders!!!");
            }
        }
    }
}

If you notice, the first "for" loop(the outer loop) will run for each suspect object. That means it will run three times because we have three objects there.

The second "for" loop(the inner loop) will then run for each key in each object. We have three objects and two keys in both of them which means it would run 6 times.

The inner loop will run in this order

<!-- 'outer loop!' -->
<!-- 'inner loop!' -->
<!-- 'inner loop!' -->
<!-- 'inner loop!' -->
<!-- 'Look at this mumu man!' -->
After it has been met, we go back to outer loop because we have not


## EXERCISE 3: Destructure this nested data structure into two variables with the strings 'clueless' and 'powerless'

let suspects = [
    {
        name: "Buhari", 
        superpower: "clueless"
    }, {
        name: "Osinbajo", 
        superpower: "powerless"
    }
]

let [corrupt1, corrupt2] = [suspects[0].superpower, suspects[1].superpower];

OR

let [{superpower: corrupt1}, {superpower: corrupt2}] = suspects

## .forEach() Function

Take a look at the function below;

function CreateSuspectObjects(name) {
    return {
        name: name, 
        superpower: name.split(' ')[1], 
        speak: function () {
            console.log(`I deceived a lot of Nigerians just so i could get into power with my cronies and squeeze the nation dry. My name is ${this.name}`);
        }
    };
};

let suspects = ['Buhari Clueless', 'Osinbajo Powerless', 'Lai Liar'];

<!-- The above function CreateSuspectObjects will return an object as you can see with the curly brackets which takes in a name argument which is also a property and we have three properties....the function returns the name and gets the suspects superpowers by splitting the name property at the space and taking the second one and then there is a speak function(a method) which tells you what they do and who their names are -->

<!-- Take note that this is also just an object and it's just because before we have to initialize an empty object and add things as we go but now, the details are just put in there right from the start-->

function CreateSuspectObjects(name) {
    return {
        name: name, 
        superpower: name.split(' ')[1], 
        speak() {
            console.log(`I deceived a lot of Nigerians just so i could get into power with my cronies and squeeze the nation dry. My name is ${this.name}`);
        }
    };
};

let suspects = ['Buhari Clueless', 'Osinbajo Powerless', 'Lai Liar'];

Same as the first function but the syntax just changed.

Now let's initialize an empty suspects list

let suspectsList [];

Then we can hydrate the data by taking the data and turning it into a data structure or a class. check Bianca's class Data Structures and Algorithms course to understand the "This" keyword

So we want to have a suspectsList which needs to be a list of objects created from the CreateSuspectObjects() function 

We loop through our list

for(let i = 0; i < suspects.length; i++) {
    let primeSuspect = CreateSuspectObjects(suspects[i])
    suspectsList.push(primeSuspect);
}
<!-- So in the above we are starting at zero and going all the way to the length of the suspects, we increment each time, first line of the for loop and then on the next line, we reassign the value of the CreateSuspectObjects with suspects at i to primeSuspect and then push the value of primeSuspect into the suspectsList  -->

In summary, we are looping through a collection of data, hydrating it(creating instances of these suspects objects)

## FOR EACH or Looping with _.each

_.each takes two arguments, first thing is the list and second thing is a callback function also called an iterator function because it works for things that can be looped.

For instance, 

function CreateSuspectObjects(name) {
    return {
        name: name, 
        superpower: name.split(' ')[1], 
        speak() {
            console.log(`I deceived a lot of Nigerians just so i could get into power with my cronies and squeeze the nation dry. My name is ${this.name}`);
        }
    };
};

let suspects = ['Buhari Clueless', 'Osinbajo Powerless', 'Lai Liar'];

_.each(suspects, function(name) {
    let primeSuspect = CreateSuspectObjects(name);
    suspectsList.push(primeSuspect);
});

<!-- We can infer that;
suspects = iteratee = list that must be looped through.
function(name) = iterator = callback function -->

The callback function is going to be called on each item in the list.

-The reason we use the for each is because it makes the code more readable and it prevents errors

If we were to use the regular `for each` to loop through the array, you would have something like this

 ['Buhari Clueless', 'Osinbajo Powerless', 'Lai Liar'].forEach(function(value, index, list){...});

 In summary, each is good for looping through lists. It can also loop through objects.

 The underscore there is a library called underscore library.

## What is the following going to log?
let peopleSpoilingNigeria = ['The Nigerian Senate', 'The Nigerian Police', 'The presidential spokespeople' ];

let bastards = function(val) {
    console.log(val);
};

_.each(peopleSpoilingNigeria, bastards);

NOTE: The _.each function takes two arguments, the list and the callback and is going to iterate each item in that list and call that callback with the values in that list one at a time.

## Exercise
Complete the rest of this function so that it works as described in the previous slide

_.each = function(list, callback) {

}

## Solution
We will implement the internals of an each function

<!-- So we start by making the underscore an object -->

const _ = {};

<!-- Then we say -->

_.each = function(list, callback) {
    <!-- first, check if the list is an array -->
    if (Array.isArray(list)) {
        <!-- loop through array -->
        for (let i = 0; i < list.length; i++) {
            <!-- For each loop, call the callback with a list item and you will have access to the value, list[i], the index i and the list-->
            callback(list[i], i, list);
        }
    } else {
        <!-- loop through object -->
        for(let key in list) {
            <!-- For each loop, call the callback with a list item -->
            callback(list[key], key, list)

        }        
    }
<!-- For each loop, call the callback with a list item
             Then we need to make sure that it works with both objects and arrays...for arrays, use a for loop because it works well with the numerical indices and for objects you can use the for-in loop -->
}

let peopleSpoilingNigeria = ['The Nigerian Senate', 'The Nigerian Police', 'The presidential spokespeople' ];


_.each(peopleSpoilingNigeria, function(name, i, list) {
    if (list[i + 1]) {
        console.log(name, 'is younger than', list[i + 1])
    } else {
        console.log(name, 'is the oldest')
    }
});


### _.map() OR .map()

You can write it out just the same way you would write a ._each() 
The behavior is different with the key difference being that "each" function does not return anything even if you want to return something in your callback function. "map" on the other hand returns an array every time. We use it to take lists and transform them into an array. Like copying an array and stuff.

_.map([1, 2, 3], function(v, i, list) {console.log(v)});

- produces a new array of values by mapping each value in list through a transformation function(iterator). 
- Each invocation of iterator is called with three arguments:(element, index, list). If list is a Javascript object, iterator's arguments will be (value, key, list).

## Exercise

Let's assume an array of weapons that consists of a shotgun, a machete and a grenade and also a function 'makeDangerous' that returns a statement that says 'dangerous (name of weapon)' by pre-pending the weapon with the word 'dangerous'.

const weapons = ['shot gun', 'machete', 'grenade'];

const makeDangerous = function(item){
    return `broken ${item}`;
};

_.map(weapons, function())

## _.map vs _.each
Consider the _.each example we used before with the corrupt politicians

function CreateSuspectObjects(name) {
    return {
        name: name, 
        superpower: name.split(' ')[1], 
        speak() {
            console.log(`I deceived a lot of Nigerians just so i could get into power with my cronies and squeeze the nation dry. My name is ${this.name}`);
        }
    };
};

let suspects = ['Buhari Clueless', 'Osinbajo Powerless', 'Lai Liar'];

<!-- Instead of looping through the list with the _.each like we did the other time, we use _.map like so: -->

_.map(suspects, CreateSuspectObjects); 

<!-- the above will loop through the suspects list and create an array of objects. -->

<!-- Then we can assign the results to the suspectsList variable like below -->

suspectsList = _.map(suspects, CreateSuspectObjects);

<!-- and then  -->

_.each(suspectsList, function(suspect) {
    suspect.speak();
})

## Now Let's implement map just like we implemented each with the callback

## Solution
We will implement the internals of a map function

<!-- So we start by making the underscore an object -->

const _ = {};

<!-- Then we say -->

_.map = function(list, callback) {
    <!-- first, create an empty array to store items to be pushed later-->
    let storage = [];
    <!-- We do not need to check if an array is an array because that's sorta done already -->
    <!-- looping through -->
    for (let i = 0; i < list.length; i++) {
    <!-- callback(element) -->
        <!-- push it to the array -->
        storage.push(callback(list[i], i, list));
    }
        <!-- return [] -->
        return storage;
}

_.map([1, 2, 3], function(val) {return val + 2});


If we were to use the _.each instead of the for loop to loop through the array, we would have something like this

_.map = function(list, callback) {
    <!-- first, create an empty array to store items to be pushed later-->
    let storage = [];
    <!-- We do not need to check if an array is an array because that's sorta done already -->
    _.each(list, function(v, i, list) {
        storage.push(callback(v, i, list))
    })
        <!-- return [] -->
        return storage;
}

_.map([1, 2, 3], function(val) {return val + 2});


Knowing what happens in the internals like this will help you structure your code in your mind even though it might seem like you are using more brain power. It will also help you know right from your mind when your code is getting too complicated and hence when you should simplify.


    if (Array.isArray(list)) {
        <!-- loop through array -->
        for (let i = 0; i < list.length; i++) {
            <!-- For each loop, call the callback with a list item and you will have access to the value, list[i], the index i and the list-->
            callback(list[i], i, list);
        }
    } else {
        <!-- loop through object -->
        for(let key in list) {
            <!-- For each loop, call the callback with a list item -->
            callback(list[key], key, list)

        }        
    }
<!-- For each loop, call the callback with a list item
             Then we need to make sure that it works with both objects and arrays...for arrays, use a for loop because it works well with the numerical indices and for objects you can use the for-in loop -->
}

let peopleSpoilingNigeria = ['The Nigerian Senate', 'The Nigerian Police', 'The presidential spokespeople' ];


_.each(peopleSpoilingNigeria, function(name, i, list) {
    if (list[i + 1]) {
        console.log(name, 'is younger than', list[i + 1])
    } else {
        console.log(name, 'is the oldest')
    }
});


## _.filter()

- It is a function that takes in an array and a callback and it will return a new array just like map but that new array will only contain the values that return TRUE from the callback. The callback has to return a boolean of either true or false. If it returns true then we are going to save it to the array. If not, NOPE.

So the difference between map and filter is that with map, we return an array of the original length but filter array can be shorter depending on whether the items in the array return true or false to the condition set in the callback.

## To implement the internal workings of the filter function

const _ = {};

_.filter = function(arr, cb) {
    <!-- create new array -->
    const storage = [];
    <!-- loop through the array using a for loop-->
    for (let i = 0; i < arr.length; i++) {
        <!-- check if the callback returns true -->
        if(cb(arr[i], i, arr) === true) {
            <!-- if true, push into the new array -->
            storage.push(arr[i]);
        }
    }
    <!-- return new array -->
    return storage;
}

## An each function can also be used
const _ = {};

_.filter = function(arr, cb) {
    <!-- create new array -->
    const storage = [];
    <!-- loop through the array using a for loop-->
    _.each(arr, function(value, i, list) {
        <!-- check if the callback returns true -->
        if(cb(value, i, list) === true) {
            <!-- if true, push into the new array -->
            storage.push(value);
        }
    })
    <!-- return new array -->
    return storage;
}

## After understanding the above, let us apply it to our real life scenario of corrupt politicians in Nigeria using the following data, we want to filter out whose health records make them unfit to lead

const _ = {};

_.filter = function(arr, cb) {
    <!-- create new array -->
    const storage = [];
    <!-- loop through the array using a for loop-->
    for (let i = 0; i < arr.length; i++) {
        <!-- check if the callback returns true -->
        if(cb(arr[i], i, arr) === true) {
            <!-- if true, push into the new array -->
            storage.push(arr[i]);
        }
    }
    <!-- return new array -->
    return storage;
}



const bioData = [
    {
        name: "Muhammad Buhari", 
        politician: true, 
        hospitalVisitsKnownToPublic: [
            {2016: true}, 
            {2017: true}, 
            {2018: true}, 
            {2019: true}, 
            {2020: false}, 
            {2021: true}, 
        ]
    }, 
    {
        name: "Yemi Osinbajo", 
        politician: true, 
        hospitalVisitsKnownToPublic: [
            {2016: false}, 
            {2017: false}, 
            {2018: false}, 
            {2019: false}, 
            {2021: true}, 
        ]
    }, 
    {
        name: "Atiku Abubakar", 
        politician: true, 
        hospitalVisitsKnownToPublic: [
            {2016: false}, 
            {2017: false}, 
            {2018: false}, 
            {2019: false}, 
            {2021: false}, 
        ]
    }, 
    {
        name: "Kingsley Moghalu", 
        politician: true, 
        hospitalVisitsKnownToPublic: [
            {2016: false}, 
            {2017: false}, 
            {2018: false}, 
            {2019: false}, 
            {2021: false}, 
        ]
    }
];

_.filter(bioData, function(suspectObject) {
    return suspectObject.politician;
})



### What are some of the most important things to know about JavaScript

- Do not mutate shared data. You can either change data or share it but don't do both.

- Always know how to read the documentation.

- Always practice.

- Know what can go wrong because things are definitely going to go wrong so it helps to understand those things that can go wrong.

### ANATOMY OF A FUNCTION

- When you define a function, it is not going to run until you invoke it

- The parameters are variables and they do not hold a value until the function is called. The arguments are what you pass to the function when you call the function and they have an actual value.

- Return values are anything that is exclusively returned with a "return" statement(in ES5 at least).

- Side Effects are things that are happening other than returning the value that affect something outside of that function. An example is "console.log"

- Anything on the DOM is gonna be a side effect.

### Arrow Function

- Some of the differences between an ES5 and ES6 function

- The arrow replaces the "function" keyword. 
- We do not have to wrap our parameters in a parentheses if there is only one.
- If the function is one line you do not have to wrap ES6 in curly brackets like in ES5
- The main difference is that arrow functions do not have their own values for "this". They reach up and take that value (inherit) from the parent scope. Replaces the need for ".bind"
- It also doesn't have its own value for the "arguments" keyword
- If you have to return something in ES6, write an explicit "return" statement instead of letting it auto-return.
- You can use template strings in ES6 and interpolate with the ${} and reference a variable as against the quotations and plus signs in ES5.

### PROJECTING EXERCISE

- Projecting is basically just when you take a value out of a data structure and turn it into another data structure.

-Previously we filtered the array and now we want to map them into a new array

- We want to take the names out of the objects in the array returned from the filter and then just take out the names





<!-- declare a variable that will be assigned the value of the filter function from the last exercise -->

const corruptPoliticians = _.filter(bioData, function(suspectObject) {
    return suspectObject.politician;
})

<!-- We need the names of the corrupt politicians from this list so we can declare a variable and assign it the map function -->

const corruptPoliticiansNames = _.map(corruptPoliticians, politician => {
    return corruptPoliticians.name;
})

### The Spread Operator

It will gather all the extra arguments at the end and put it in a little array

const createTuple = (a, b, c, ...d) => {
    return [[a, c], [b, d]];
}

createTuple('It', 'be', 'could', 'anyone', 'no one');
<!-- Will log ['It', 'could']  ['be', ['anyone', 'no one']] -->

### The Arguments Keyword
It references all the arguments as a pseudo-array. And a pseudo array is an object that looks like an array but just an object and this means that we wouldn't have access to our normal array methods.

The reason that we use the arguments keyword is when we do not know the amount of arguments to expect or return. 

Arguments only care about what is being passed into the function.

const createTuple = (a, b, c, d) => {
    console.log(arguments);

    return [[a, c], [b, d]];
}

createTuple('It', 'be', 'could', 'anyone', 'no one');

## Default Parameter

They are those values where if you do not pass a value, it gets set to them.

Rewrite this function in ES5;

const add = function(a, b = 2) {
    console.log(arguments);
    return a + b;
}
add(3);

## solution
const add = function(a, b = 2) {
    b = b || 2
    console.log(arguments);
    return a + b;
}
add(3);

## ARRAY-LIKE OBJECT

const constructArr = function() {
    const arr = Array.prototype.slice.call(arguments);
    arr.push('the billiards room?');
    return arr.join(' ');
};

constructArr('was', 'it', 'in');

Interpretation: 
- First we declare a constant constructArr and assign it a function.
- Then we call constructArr and pass the arguments ('was', 'it', 'in')
- Then we move into the body of the array
    - we declare a const arr and assigning it a value that takes the arguments that look like an array and turns them into an array
    - then we push the strings with billiards to that same arr array
    - then we return the joined array that combines the indices of everything in the array

## Array.from
It will do the same as the above, turn the argument into an array and with less characters from your keyboard. It turns the pseudo array into a real array so we can access the array methods like join and push. It takes iterables and gives them access to array methods.

const constructArr = function() {
    const arr = Array.from(arguments);
    arr.push('the billiards room?');
    return arr.join(' ');
};

constructArr('was', 'it', 'in');

## Implement the _.from method

const from = arr => {
    return Array.prototype.slice.call(arr);
}

always be reminded that functions are also objects

const add = function(a, b) {
    return a + b;
}
add.example = 'testing 123';


## SCOPE

- What is a scope?
    Scope is the area where a variable has access to some value. There are  variables and local variables. 

- What is the difference between a global variable and a local variable?
    The scope of a global variable is to be available throughout the entire codebase. It is declared usually by not putting a var in front of the variable or you can attach it directly to the windows object.
    WHILE
    Local variables are inside of functions or inside of code blocks.
- What is a function scope?
    It means that variables that are inside of a function only have access to the values defined there or in the parent function. If scope was a heirarchy, you can only look up...inside of a function, you can only reach for values in the outer upper scope.

- Function scope means that variables that were inside of a function only had access to the values that were defined there or in the parent function.

## Rules about function scopes

Let us have a global variable called MOTOR

    var MOTOR;

    beforeEach(function () {
        ACTUAL = null;
    });

- A function has access to its own local scope variables which means to variables in the same function block
    var car = function() {
        let name = 'Porsche Cayenne';
        MOTOR = name;
    }
    car();
    <!-- over here, you can be sure that MOTOR === 'Porsche Cayenne' will return a value of true -->

- Inputs to a function are treated as local scope variables. 
    var car = function(name) {
        ACTUAL = name;
    };
    car('Toyota Camry 2012');
    <!-- expect the certainty of the value of ACTUAL being 'Toyota Camry 2012' when it is passed in as an argument to be equal to true -->

- Blocks scope can be created with let.
    var car = function() {
        var petrolEngine = 'Volkswagen'
        {
            let petrolEngine = 'Toyota Sequoia'
        }
        ACTUAL = petrolEngine;
    };
<!-- Over here, expect the certainty of ACTUAL === Volkswagen because 'Toyota Sequoia' will be out of the scope as it is inside its own block with let. But if we change the "let" to "var" then ACTUAL === 'Toyota Sequoia' because then it would no longer be a block and we would just be renaming the variable  -->

- A function has access to the variables contained within the same scope that function was created in
    var raceDriver = 'Lewis Hamilton';
    var mercedesChiefDriver = function () {
        ACTUAL = raceDriver;
    }
    mercedesChiefDriver();
<!-- In the above, expect ACTUAL === 'Lewis Hamilton' to be true because ACTUAL does not see raceDriver in its normal scope so it looks up to grab it -->

- A function's local scope variables are not available anywhere outside that function
    var bestCar = function () {
        var myBestCar = 'Prado Landcruiser'; 
    };
    bestCar();
    function() {
        ACTUAL = myBestCar;
    }
<!-- expect ACTUAL === null here because the variable it is trying to access is not available to its own scope  -->

- A function's local scope variables are not available anywhere outside that function regardless of the context it's called in.
    var firstCar = function() {
        var coolFirstCar = 'Mini Cooper';

        secondCar();
    };
    var secondCar = function() {
        ACTUAL = coolFirstCar;
    }
    firstCar();
<!-- Expect secondCar() to throw an error as it is does not have access to the variable in firstCar() even if it is declared over there. Also firstCar() will also throw an error since it has it is also calling secondCar() and that has no influence over its scope access rules -->

## Scope Walkthrough Part 2

- A function's local scope variables are not available anywhere outside tha function, regardless of the context it is called in. 
    var firstFn = function () {
        var localToFirstFn = 'first';
        <!-- You might think that it is right that secondFn(which mentions the localToFirstFn variable), should have access to the localToFirstFn variable, since it is being called inside this function from within the scope where the localToFirstFn variable is declared -->
        secondFn();
    };
    var secondFn = function () {
        ACTUAL = localToFirstFn;
    }

<!-- secondFn() to throw an error because it doesn't have access to the localToFirstFn variable even though it was called inside it. Also expect firstFn() to also throw an error because it will assign the variable and then go on to execute secondFn() which will throw an error as it does not have access and ultimately cause firstFn() to throw an error too -->

-  If an inner and an outer variable share the same name, and the name is referenced in the inner scope, the inner scope variable masks the variable from thr outer scope with the same name. This renders the outer scope variables inaccessible from anywhere within the inner function block.
    var sameName = 'outer';
    var fn = function () {
        var sameName = 'inner';
        ACTUAL = sameName;
    };
    fn();
    <!-- Expect ACTUAL to be equal to 'inner' because the variable will take the value that's in the in the function block over that which is outside. -->

    BUTTTT!!! 

    If an inner and an outer variable share the same name, and the name is referenced in the outer scope, the outer value binding will be used, that is, the variable will take the value of the outer scope

    var sameName = 'outer';
    var fn = function () {
        var sameName = 'inner';
    }
    fn();
    ACTUAL = sameName;
    <!-- Expect ACTUAL to be equal to outer  -->

- A new variable scope is created for every call to a function, as exemplified with a counter
    var fn = function () {
        var innerCounter = innerCounter || 10;
        innerCounter = innerCounter + 1;
        ACTUAL = innerCounter;
    }
    fn();
    <!-- Expect innerCounter to be equal to 11 -->
    fn();
    <!-- Still expect innerCounter to be equal to 11 because each time you call a function, it will create a brand new function scop every time. They do not co-exist, they are separate each time they are called  -->

- The above was for numbers and is also the same for strings. A new variable scope is created for every call to a function, as exemplified with uninitialized string variables.
    var fn = function () {
        var localVariable;
        if (localVariable === undefined) {
            ACTUAL = 'alpha';
        } else if (localVariable === 'initialized') {
            ACTUAL = 'omega';
        }
        localVariable = 'initialized';
    }
    fn();
    <!-- In the above we are declaring a  variable and assigning it a function fn, the function is invoked and then we go into the body and declare a variable 'localVariable' without assigning it a value(It's value is undefined). We then run the if statement to check if local variable is undefined and since it is, we assign ACTUAL a value of alpha, come out of the if block and assign localVariable a value of 'initialized' -->
    fn();
    <!-- Expect the same value because a new variable scope is always created for each new invocation of the function -->

- An inner function can access both its local scope variables and variables in its containing scope, provided the variables have different names.
    var outerName = 'outer';
    var fn = function () {
        var innerName = 'inner';
        ACTUAL = innerName + outerName;
    };
    fn();
    <!-- Expect ACTUAL to be equal to 'innerouter'. -->

    So you see...from all we have worked on so far, the outer function cannot access the value of the variable in an inner function. Also, if they share the same variable name and the name is referenced in the outer scope, the outer one will be chosen nd vice versa. 

- Between calls to an inner function, that inner function retains access to a variable in an outer scope. Modifying these variables has a lasting effect between calls to the inner function. 
    var outerCounter = 10;

    var fn = function () {
        outerCounter = outerCounter + 1;
        ACTUAL = outerCounter;
    };
    fn();
    <!-- Expect ACTUAL to be equal to 11 -->
    fn();
    <!-- When the function is called again, expect actual to be equal to 12 because in the first invocation of the function, the value of ACTUAL and consequently outerCOunter was 11 but that value was stored in outerCounter which is in a parent scope. That means when the function scope is reset due to invocation, everything starts again but the value of outerCounter is brought in from the putside to continue as it was in the previous invocation -->

- The rule about retaining access to variables from an outer scope still applies, even after the outer function call that created the outer scope has returned
    var outerFn = function () {
        var counterInOuterScope = 10;

        var innerIncrementingFn = function () {
            counterInOuterScope = counterInOuterScope + 1;
            ACTUAL = counterInOuterScope;
        };
        
        innerIncrementingFn();
    <!-- Expect ACTUAL to be equal to 11 -->
        innerIncrementingFn()
    <!-- Expect ACTUAL to be equal to 12 -->

    window.retainedInnerFn = innerIncrementingFn;

    }
<!-- Expect (window.retainedInnerFn) to be undefined -->
outerFn();
<!-- Expect (window.retainedInnerFn) to be a function -->
window.retainedInnerFn();
After executing the above line, it will come back straight down back to where it was called from
    <!-- Expect ACTUAL to be equal to 13 because the last saved value from innerIncrementFn is still stored in a the variable countInOuterScope  -->

- NB: The appropriate time to use let is when you want to scope your variable inside of a block that's not a function. Alot of people use let and const all the time though. As long as you know how your code runs then it is fine.

### HIGHER ORDER FUNCTIONS AND CALLBACKS

- In javascript, it is what enables us to do functional programming techniques because a function in javascript is data because you can perform operations around them like passing them around, returning them et al

- They are just functions that we pass to functions

- HOF can take a function as an input (argument) eg addEventListener as shown below

    element.addEventListener("change", () => {
        console.log("This is who we are...superstar developers");
    });

- We can also return a function as an output eg
    const newShoe = (name) => {
        const length = name.length;

        return (weapon) => {
            let shoe = length + weapon.length;
            return !!( clue % 1 )
        }
    }

- A function can also be passed as an argument. When you pass arguments, it will take the place of the parameter like so;

<!-- We initialize a variable and attach it an increment function -->
    var increment = function(n) {
        return n + 1;
    };
<!-- We initialize a variable and attach it a square function -->
    var square = function(n) {
        return n * n;
    };
<!-- Then we have a function that takes in "n" as a parameter and a callback function and returns the function with n passed to it-->
var solveMathForMe = function(n, func) {
    return func(n);
};
solveMathForMe(5, square); //will log 25
solveMathForMe(4, increment); //will log 5

## Exercise
Translate into ES6

- ES5
var increment = function(n){
    return n + 1;
};
- ES6
const increment = n => { return n + 1; }

- ES5
var square = function(n){
    return n * n;
};
- ES6
const square = n => { return n * n; }

- ES5
var solveMathForMe = function(n, func){
    return func(n);
};
- ES6
const solveMathForMe = (n, func) => { return func(n) };


## Passing Arguments along with the function
- You can pass arguments as parameters with a function

const ifElse = (condition,isTrue, isFalse, param) => {
    return condition ? isTrue(param) : isFalse(param);
}
ifElse(true, fn1, fn2, 'HI');

## The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
const ifElse = (condition, isTrue, isFalse, ...args) => {
    return condition ? isTrue(...args) : isFalse(...args);
}
ifElse(true, fn1, fn2, 'HI', 'BYE', 'HOWDY');

## Passing arguments one at a time was done using the apply function method before ES6.


## Reduce Method
Reduce is one of those core methods of Functional Programming like map and filter.

    _.reduce(collection, [iteratee=_.identity], [accumulator]);

- It takes a collection, a callback function 
- Always loops through the collection, calling the callback function and then returning one value based on whatever the callback returns after invocation. This value will be passed on back and will then be accumulated.
- The callback will always be called with the past value of the return of that function and the next value in the loop. So it's not like your regular function that calls with the current value.

An Example of Reduce
    _.reduce([1, 2], function(sum, n) {
    return sum + n;
    }, 0);

<!-- The initial value is passed as an argument, you add them together to give 1 and it is passed again, n is now 2 and then you hav 1 + 2 to give 3  -->

A complex example

_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});

- Over here the initial value is an empty object.
- Starting with that, we enter the function body and say if result.value exists, push the key of that value to an empty array. But it doesn't exist so we go to the other side of the "or" operator and initialize the empty array, then push the key of that result value which we do not have with the empty object so far.
- Then we go to the next result.value which is 1. It exists so we push the key "a" to the empty array.
- Next result.value will be 2 and since it exists, we push the key 'b' to the array.
- The next result.value is 1 again and that exists so we push the key 'c' to join 'a' in the array.
- In summary, what the function is doing is collecting all of the keys that match a value.

 <!-- => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed) -->

## Reduce Exercise - Implementing _.reduce()

- Remember that reduce takes a list, a callback and/or an initial value as arguments

const reduce = function(list, cb, initial) {
    <!-- we loop through the list first -->
    let accumulatedValue = initial || list[0];
    for (let i = 0; i <list.length; i++) {
<!-- We call the callback with the value of the array at the index arr[i] and the previous/initial value -->
    cb(list[i], accumulatedValue);
    }
<!-- save the return value of the callback function for the next loop -->
    accumulatedValue = cb(list[i], accumulatedValue);
<!-- return the result -->
    return accumulatedValue;
}

reduce([1, 2, 3], (v, sum) => v + sum, 0);

## But when we do not have an initial value

const reduce = function(list, cb, initial) {
    <!-- we loop through the list first -->
    let accumulatedValue = initial;
    for (let i = 0; i <list.length; i++) {
        if (i === 0 && accumulatedValue === undefined) {
            accumulatedValue = list[0];
        } else {
            accumulatedValue = cb(list[i], accumulatedValue)
        }
    }
    return accumulatedValue;
}

reduce([2, 3, 5], (v, sum) => v + sum);

## Reduce Exercise

Find the room that nobody claimed to be in from the list of array below

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

- Required: get through the data structure and determine which room no one was in

<!-- Create a variable to store the function that determines those that were not in the room. This is going to be our callback -->

const notInRoom = (suspect, memo) => {
    <!-- we first need to go into the rooms and return those rooms that each individual did not go to..in other words, returning an array of all the room falses for each of the suspects  -->
    const emptyRoomsNobodyVisited = [];
    emptyRoomsNobodyVisited = reduce(suspect.rooms, (room, memo) => {
        if (room === false)
        memo.push(room)
        return memo
    }, [])

    return emptyRoomsNobodyVisited;
};

notInRooms = _.map(newDevelopment, notInRoom)

<!-- According to the docs, the reduce method will be effective for looping through the data structure and then returning the rooms no one was in. I have to admit I also thought about using filter -->

reduce(newDevelopment, notInRoom, []);
<!-- this will give a list of the rooms each person didnt enter any room -->
 <!-- return an array of rooms no one went into -->

## Currying and COmposition

- Currying is a functional utility method. It is when you create a function that can later be called multiple times with different arguments. Curry will allow you to call a function up to n number of times with n number of values.
    _.curry(func, [arity=func.length])

    var abc = function(a, b, c) {
        return [a, b, c];
    };

    var curried = _.curry(abc);

    curried (1)(2)(3);
    <!-- [1, 2, 3] -->

    curried(1, 2)(3);
        <!-- [1, 2, 3] -->

Curry allows you to break up arguments passed by the number of arguments.

Currying doesn't return anything but waits until it has all the arguments and then runs the function. Keep in mind that everytime you run a curried function and it hasn't gotten all the arguments, it returns a function.

- Composing is when you take two functions and combine them

Let's assume we have a first function consider that takes in an argument "name" and returns a template literal as shown below

    const consider = (name) => {
        return `I think it could be... ${name}`;
    };

Let's consider another function exclaim that takes in an argument "statement" and returns a template literal with a method that changes the statement passed to uppercase.

    const exclaim = (statement) => {
        return `${statement.toUpperCase()}!`
    }

Then we can have a function "blame" that will compose "consider" and "exclaim" by going into the exclaim function to turn the argument into an uppercase first and then go into consider and pass the argument into it also so it will look like the below;

    const blame = _.compose(consider, exclaim);

    blame('opeyemi');
    <!-- 'I think it could be... OPEYEMI!' -->

Order matters alot in composing and which function to start with but it's just a matter of how you write the internals of your functions.


## ADVANCED SCOPE

- Closure

    const myAlert = () => {
        const x = "Help! I think Nigeria is choking the dreams of her youth!";
        const alerter = () => {
            alert(x);
        };
        alerter();
    }

    myAlert();

- In the above, alert will pop up on your window but only if you aren't masking it. Rename it so it does not give you an error.

    const myAlert = () => {
        const x = "Help! I think Nigeria is choking the dreams of her youth!";
        const alerter = () => {
            alert(x);
        };
        
        setTimeout(alerter, 1000)
        console.log('what happens first? This log or the alert?')
    };

    myAlert();

- In the above, the log would be called first because alerter won't be called for another 1000s as it is asynchronous but it doesn't stop the log from being called.


const myAlert = () => {
    const x = "Help! I think Nigeria is choking the dreams of her youth!";
    let count = 0;
    const alerter = () => {
        alert(`${x} ${++count}`);
    };

    return alerter;
};

const funcAlert = myAlert(); //first instance of myAlert
const funcAlert2 = myAlert(); //second instance of myAlert
funcAlert();

In the above, whatever the first instance of myAlert returns is saved into the funcAlert variable and whatever the second instance of myAlert returns is saved in the funcAlert2 variable but all this isn't done yet because we need to go into the body of the myAlert function first since it was invoked.

Now moving into the body of the myAlert function, we define a variable x and assign the value of  "Help! I think Nigeria is choking the dreams of her youth!"; and then we initialize a counter and set a function to "alerter" and then return whatever value is held in alerter which is the body of the function which will be funcAlert.

And funcAlert2 will do everything again in a new instance

funcAlert() will call the body of alerter because that's what myAlert references(the function body of alerter). If you call funcAlert() multiple times then the count increments because we retain the count in alerter and do not need to call the parent myAlert.

## Key Points about Closure

- A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

- It is when a function is inside a function and you can take advantage of that by returning a function that retains access to its parent function even after it has been executed.

- The closure has three scope chains:
    - it has access to its own scope — variables defined between its curly brackets
    - it has access to the outer function’s variables
    - it has access to the global variables

- 

For more understanding, refer to the medium article in your bookmarks.

https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4#:~:text=A%20closure%20is%20a%20feature,to%20the%20outer%20function's%20variables





