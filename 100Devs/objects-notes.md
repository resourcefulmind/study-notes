# Objects in Javascript

- They are not a primitive data type. 

## What are objects used for?

- Objects are used to store keyed collections of various data and more complex entities.

### How do you create an object?

- An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything. 

- Objects can also be empty. Empty objects are created either using **object constructors** or using **object literals**. For example:

```
let user = new Object(); // "object constructor" syntax
```

```
let user = {};  // "object literal" syntax
```

The above is an empty object. Take a look below at an object that actually has properties(as already explained, properties are "key: value" pairs).

```

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
```

### How do you get the value of a property from an object?

- Property values are accessible using the dot notation: 

```
// get property values of the object:
alert( user.name ); // John

```

__It is important to note that the value of a property can be of any type including boolean__

We can add a "true" value to the property like so:

`user.isAdmin = true;`

We can also remove a property using `delete`

`delete user.age`

- We can also use multi-word property names, but then they must be quoted:

`"likes birds": true`

- A trailing comma at the end of each property makes it easier to add or remove a property. 

- Dot notation does not work for multi-word properties, use of Square brackets instead:

```
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];
```

You can name a property and use square brackets to obtain the value like so:

```
let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;
```

- the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility.

For instance:

```

let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")
```

The dot notation cannot be used in a similar way:

```
let user = {
  name: "John",
  age: 30
};

let key = "name";
alert( user.key ) // undefined
```

#### What are computed properties?

This is when we use square brackets in an object literal, when creating an object. For instance: 

```
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"
```

Same as:

```
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;
```

- We can use more complex expressions inside square brackets:

```
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
```

**Square brackets are much more powerful than dot notation. They allow any property names and variables. But they are also more cumbersome to write.**

**So most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets.**

### Property value shorthand

In real code, we often use existing variables as values for property names.

For instance:

```
 function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}
```

```
let user = makeUser("John", 30);
alert(user.name); // John
```
In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.

Instead of `name:name` we can just write `name`, like this:

```
function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}
```

We can use both normal properties and shorthands in the same object:

```
let user = {
  name,  // same as name:name
  age: 30
};
```

### Property names limitations

As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

But for an object property, there’s no such restriction:

```
 // these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6
```

**In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).**

*Other types are automatically converted to strings.*

For instance, a number 0 becomes a string "0" when used as a property key:

```
let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)

```

### Property existence test, “in” operator

A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!

Reading a non-existing property just returns undefined. So we can easily test whether the property exists:

```
let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"
```

There’s also a special operator "in" for that.

The syntax is:

`"key" in object`

For instance:

```
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
```

**Please note that on the left side of in there must be a property name. That’s usually a quoted string.**

If we omit quotes, that means a variable should contain the actual name to be tested. For instance:

```
let user = { age: 30 };

let key = "age";
alert( key in user ); // true, property "age" exists
```

Why does the in operator exist? Isn’t it enough to compare against undefined?

Well, most of the time the comparison with undefined works fine. But there’s a special case when it fails, but "in" works correctly.

It’s when an object property exists, but stores undefined:
```
let obj = {
  test: undefined
};

alert( obj.test ); // it's undefined, so - no such property?

alert( "test" in obj ); // true, the property does exist!
```
In the code above, the property obj.test technically exists. So the in operator works right.

Situations like this happen very rarely, because undefined should not be explicitly assigned. We mostly use null for “unknown” or “empty” values. So the in operator is an exotic guest in the code.

### The “for…in” loop

To walk over all keys of an object, there exists a special form of the loop: `for..in`. This is a completely different thing from the `for(;;)` construct that we studied before.

The syntax:

```
for (key in object) {
  // executes the body for each key among object properties
}
```
For instance, let’s output all properties of user:

```
 let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
```

Note that all “for” constructs allow us to declare the looping variable inside the loop, like let key here.

Also, we could use another variable name here instead of key. For instance, `"for (let prop in obj)"` is also widely used.

### When  looped over, do the objects appear in the same order as they were added?

- The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.

As an example, let’s consider an object with the phone codes:

```
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};
```
```
for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}
```

- But if keys are non-integer, 

```
let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
  alert( prop ); // name, surname, age
}
```

So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough.


Summary

Objects are associative arrays with several special features.

They store properties (key-value pairs), where:

Property keys must be strings or symbols (usually strings).
Values can be of any type.
To access a property, we can use:

The dot notation: obj.property.
Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
Additional operators:

To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop.
What we’ve studied in this chapter is called a “plain object”, or just Object.

There are many other kinds of objects in JavaScript:

Array to store ordered data collections,
Date to store the information about the date and time,
Error to store the information about an error.
…And so on.
They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.

Objects in JavaScript are very powerful. Here we’ve just scratched the surface of a topic that is really huge. We’ll be closely working with objects and learning more about them in further parts of the tutorial.

let user = new Object();

user.name = "John";
user.surname = "Smith";

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let wages = {
    Opeyemi: 4500, 
    Steve: 10000, 
    Omodara: 20000
}

function sum(a, b, c) {
    return a + b + c;
}

sum(wages.Opeyemi, wages.Steve, wages.Omodara);

let sum = wages.Opeyemi + wages.Steve + wages.Omodara

console.log(sum)

let menu = {
    width: 200, 
    height: 300, 
    title: "My menu"
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] = number) {
            obj[key] = obj[key] * 2
        }
    }
}

multiplyNumeric(menu);

### Object references and copying

A key difference between objects and primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

Take a look at these primitives:

```
let message = "hello";
let phrase = "message";
```

The result of the above is two independent variables, each one storing the string "Hello!".

MEANWHILE A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

Take a look

```
let user = {
  name: "John"
};
```

The object is stored somewhere in memory while the "user" variable has a "reference" to it.

Think of an object variable (user in this case) as something that tells you the location of the object.

When we perform actions with the object, e.g. take a property `user.name`, the JavaScript engine looks at what’s at that location and performs the operation on the actual object.

Now here’s why it’s important.

When an object variable is copied, the reference is copied, but the object itself is not duplicated as in the case of primitive variables.

For instance

```
let user = {
    name: "John"
}

let admin = user;
```

The two variables `user` and `admin` are storing a reference to the same object. It's one object and two references by two variables which is different from what was seen in the other where both primitive variables held a copy of the value each.

Either object variable can still be used to access the object and modify its contents like so:

```
let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference
```

It’s as if we had a cabinet with two keys and used one of them (admin) to get into it and make changes. Then, if we later use another key (user), we are still opening the same cabinet and can access the changed contents.

### Object Comparisons by reference

- Two objects are equal only if they are the same object. That is to say, only if they reference the same object.

```
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

```

That automatically means that two independent objects might contain the same object value and look alike but will never be equal because they do not reference the same object.

```
let Toyota = {
    doors: 4
}

let Tesla = {
    doors: 4  //two independent objects
}

alert (a == b); //false
```
For "greater than" comparisons or "object vs primitives" comparisons, objects have to first be converted to primitives. These are usually very rarely needed unless there are programming mistakes.

### How do we clone and merge an Object?

- There are two ways to duplicate an object.

- One way to do this is by using the `Object.assign` syntax below;

`Object.assign(dest, [src1, src2, src3...])`

Where:

1. The first argument `dest` is a target object.
2. Further arguments src1, ..., srcN (can be as many as needed) are source objects.
3. It copies the properties of all source objects src1, ..., srcN into the target dest. In other words, properties of all arguments starting from the second are copied into the first object.
4. The call will return `dest`.

**An important use of this is that it can be used to merge several objects into one**

```
let electoralCandidate = { name: "Peter Obi" };

let qualities1 = { isCredible: true };
let qualities2 = { isWasteful: false };

// copies all properties from qualities1 and qualities2 into electoralCandidate

Object.assign(electoralCandidate, qualities1, qualities2);

console.log(electoralCandidate); // { name: "Peter Obi", isCredible: true, isWasteful: false }
```

- If the copied property name already exists, it gets overwritten:

```
let president2023 = { name: "Bola Ahmed Tinubu" };

Object.assign(president2023, { name: "Peter Obi" });

console.log(president2023.name); // now president2023 = { name: "Peter Obi" }

```
We also can use Object.assign to replace for..in loop for simple cloning:

```
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user); //It copies all properties of user into the empty object and returns it.
```

- We can also create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.

Like so;

```

let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( user.name ); // still John in the original object
```

### How do we achieve Nested cloning?

Properties do not only have to reference primitives. They can also reference other objects and when cloned, they will share the nested objects being referenced will be one and the same and not two different copies.

take a look:

```
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width++;       // change a property from one place
alert(clone.sizes.width); // 51, get the result from the other one
```

- To fix that and make user and clone truly separate objects, we should use a cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. That is called a “deep cloning”.

We can use recursion to implement it. Or, to not reinvent the wheel, take an existing implementation, for instance _.cloneDeep(obj) from the JavaScript library lodash.

NOTE:

Take a look at the code below, 

```
const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete
```

It might seem that the line (*) would cause an error, but it does not. The value of user is constant, it must always reference the same object, but properties of that object are free to change.

In other words, the const user gives an error only if we try to set user=... as a whole.