## What is the DOM

- It is short for DOcument Object Model
- It is a tree of nodes/elements creted by the browser
- We can use JS to read/write/manipulate the DOM and her elements.
- It is object oriented which means each node has its own properties and methods that we can use in changing and adding and removing things.
- The DOM model tree consists of the Document itself at the apex of the tree and is followed by the root element which is the html. The html have their children beneath the root which is the head and body element and those have others like titles, attributes and h1s which have their own children like texts.

## Discuss on little projrct built to make learning stick.

- dev tools can be used to see what is happening under the hood.
- Also use console.log or alert to print to the console

# Some common DOM commands;
 - console.dir(document); will show you everything in the document.

 - console.log(document.domain) will give the domain.
 - console.log(document.title) will give the domain.
 - To find out the type of document, use console.log(document.doctype);
 - Want to grab the head of the document? console.log(document.head)
- Grab a specific part of the whole document. Not advisable though because if something is added kater, the index changes.
console.log(document.all[3])



## Selecting Items
- Selecting by ID and putting it in a variable
    To select the id of header title, use document.getElementById('header-title');
    To place it in a variable,
    var headerTitle = document.getElementById('header-title')

- So after selecting and assigning to a variable, we can now manipulate.

- We can change our header text by simply manipulating the DOM this way,

headerTitle.textContent = 'Hello';
OR
headerTitle.innerText = 'Goodbye';

The difference between the two is that innerText responds more to styling. Apart from that, they can be used interchangeably.

- You can put an element inside another element by usind innerHTML. It will not chane the former state ut put the new in the old. eg putting a h3 inside the h2 
headerTitle.innerHTML = '<h3>Holla</h3>'; 

- use camelCase for writing styles in the DOM eg;
headerTitle.style.borderBottom = '3px solid red';

As against 
 
headerTitle.style.border-bottom = '3px solid red';

























