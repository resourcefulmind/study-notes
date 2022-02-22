## What is Javascript?
- It is a high level, interpreted programming language, meaning that you do not have to do things like memory management. It is interpreted because you do not need a compiler.
- Conforms to ECMAScript specifications
- Runs both on browser and server.
- You can write javascript in many different ways, OOP or FP.

## var, let and const
- var is globally scoped and let allows you to reassign values. If you are not reassigning, use const.

## Data Types
- Primitive(Data is directly assigned to memory)
    - Strings, Numbers, Boolean, Null, undefined, symbols.

## Concatenation 
It is a way of joining javascript variables with normal statements. For example;
const name = 'Opeyemi';
const job = "frontend developer";
const years = 2;

console.log('My name is ' + name + ', I am a  ' + job + 'and I have been coding for ' + years + ' years.');

or just use template literals.

## Document Object Model (DOM)
There are two types of DOM selectors
- Single Element Selectors (To select one thing)
    Always uses document to select things from the DOM 
    e.g document.getElementById('my-form'); or document.querySelector('.container');

- Multiple Element selectors (To select more than one thing in the DOM)
    e.g document.querySelectorAll('.item');
    The above can also work for elements and tags. 

    Older multiples also exist like getElementsByClassNames and getElementsByTagNames