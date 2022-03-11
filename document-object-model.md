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


Summary:
- Target styles first
- Assign them to a variable
- Manipulate.

# Targeting Elements by classname

It is for targeting a list of items with the same class. In our code we can do something like changing the color and text of the list items

var items = document.getElementsByClassName('list-group-item')
List items can then be treated as an array and accessed via index.
items[1].style.color = 'green';
items[3].style.background = 'gray';


items.style.fontSize = '40px';
This won't wotk because the items are a html colection treated like an aray and need to loop through the items

for (let i = 0; i < items.length; i++) {
    items[i].style.fontSize = '40px';
}

## Targeting Elements By Tag Name eg h1 or li

- It does the same thing as getting the elements by class name. The only difference is that in the class, when you add a new item to join the old ones, it doesn't have any effect or take on any of the styles or manipulations of the old set.
If you do it by tag name though, there will be an inheritance from the old ones and it will have their style


## Query Selector
- used for one item and even if they are more thn one on the page, it will grab only the first one
You can select anything as long as you use the right syntax.
For instance changing the backgrounf of the header using query selector wil go like this

var changeHeader = document.querySelector('#main');
changeHeader.style.background = 'red';

- when there is a list and you use query selector, it will only give the first the application. If you want to apply to another member of the list usihg query selector, you can use the "nth-child" or "last-child" css selectors.

var secondItem = document.querySelector('.list-group-item:nth-child(2)')

secondItem.style.background = 'brown';

## QuerySelectorAll
- Will select everything with the same class or element or  or attriute, etc

var titles = document.querySelectorAll('.title')
titles[0].textContent= 'Dubbu dubbu'

- Can also be used to give different styles to say an even or odd collection on a list

var odd = document.querySelector('li:nth-child(odd)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'white';
}

## TRAVERSING THE DOM
- Simply means the different realtionships that can exist between the parent node, child nodes and sibling nodes.
- Parent containers can be styled if the children are known and targeted. For instance, if we check for the parent of the list, we can style the parent of that list using parentNode. parentNode and parentElement function the same way on a large scale.

var itemList = document.querySelector('#items');
itemList.parentNode.style.backgroundColor = '#f4f4f4';

- Child nodes also exist. No one suggests using them. Instead use children. The children will be a HTML collection and DOM manipulation can be performed on them using the indexing method.

- firstElementChild and firstElement are two operations that can be performed just like childNodes and will be done on the first child of the element. Same as lastElementChild.

- And like the above, nextSibling will include the text nodes so use nextElementSibling. previousElementSibling can be used as well.

- For simple DOM manipulation, you do not need jQuery.

## Creating Elements and Inserting Them Into The DOM

- To create an entirely new div and add stuff to it. 
<!-- - Create containing div first -->
var newDiv = document.createElement('div');
<!-- maybe give it a class and an id -->
newDiv.className = 'hello';
newDiv.id = 'hello-there';
<!-- Add an attribute -->
newDiv.setAttribute('title', 'Hey Div');
<!-- create text node -->
var newDivText = document.createTextNode('My name is Opeyemi');
<!-- Add the text created to the div -->
newDiv.appendChild(newDivText);
<!-- place the div right below the header with the clss container -->
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

<!-- And just like that a new div was created and we can add different things to it like change the way it looks -->
newDiv.fontSize = '40px';

container.insertBefore(newDiv, h1);

## Events & Event Listeners
Event listeners are used to listen for when actions are taken on the computer like a click or a hover, etc. For example

var button = document.getElementById('button');

button.addEventListener('click', buttonCLick);

function buttonCLick() {
    alert('My name is Opeyemi and when I was younger I wanted to be an astronaut')
}

<!-- Can also be written like this -->
var button = document.getElementById('button').addEventListener('click', buttonClick);

- Multiple actions can also be performed

- the event button (e) when fired will give all the events happening in that particular place it was fired from.





