## Using the code in the link below as an understudy, the following pertinent questions should help my knowledge of react go from say 0 to 0.1

[https://codesandbox.io/s/react-forked-himpej?file=/src/index.js]

# What is the 'App' function inside of the app.js file that has the return stuff?

- It is called a React component because it is a plain JS function that returns some JSX.

# What are the two functions of a React component?
- React components like the app function have two jobs
    1. They produce JSX which tells React what we want to show on the screen to the user.
    2. They handle user events such as clicking a button or typing into an input.
- All components created in React WILL BE FUNCTIONS THAT RETURN JSX

# WHat is JSX? What does it do? Is JSX similar to HTML?
- JSX is that thing that looks like html in the return statement. 
- They are really a set of instructions to tell React exactly what content we want to show on the screen at any given time. For example, in the code, the jsx was trying to tell react that it wanted to show a div with some content inside of it.
- JSX has many similar rules as html, closing element tags and self closing tags behave the same way as normal html.
- We make use of JSX elements to tell React that we want to create a normal HTML element like a div, span, h1, table, input, hr, etc
- We can also make use of JSX to tell React that we want to SHOW another component as seen in the app component with the "field", "languages" and "translate" components.

# What does React do with all the JSX?
- Referencing the app component, whenever the JSX is returned from a component, React is going to iterate over every element in the JSX block by asking itself "IS THIS A DOM ELEMENT?". If it is then it shows that element on the screen to the user. 
- If the element has children like a div to other components that might be inside the field, React will check them too and when it asks itself "IS THIS A DOM ELEMENT?", the answer will be NO, IT IS A COMPONENT and then React will CALL THAT COMPONENT function(this means that it will look for the definition of that component, i.e where it was created) and inspect all the JSX which that one will also give back by asking itself that same question and doing the same iteration.

For context, in the translator app, the app component returned a div and that div had field, languages and translate in it which are components created in the src -> components folder.  

# How does React display content on the screen?
- When you type in for instance a url for a website using react or even use a localhost or liveserver, whatever you used will make a HTTP REQUEST to wherever your react app is hosted or being housed.
- From that request, the browser will load up an index.html file and parse all the html and script tags that are inside there.
- One of the script tags will tell the browser or localhost to make another request and get some javascript files. In this our react case, the js file is te BUNDLE.JS file.
- The bundle.js file will combine all the different js files that are inside the project (in this case, app, field, languages and translate). 
- The platform housing your code will then send the bundle.js file back to the browser or localhost and all the js inside it will be executed.


# What is the key line of code to know when trying to understand how react initially boots up our application and get everything running from the get-go?
- The first js file that will be automatically executed when the bundle.js is executed is the INDEX.JS file.
It is the file that boots up our react application and gets everything running.

# How does it do that?
ReactDOM.render(<App />, document.getElementById("root"));

The first argument to "ReactDOM.render" is the App component. React will call the app function and return all the JSX and turn it into html.

The second argument to "ReactDOM.render" is a reference to where we want to show our react project inside of the index.html file. In this case it is a "div" with an id of root. Div can be seen in the index.html file.

THE ABOVE IS HOW THE APP FIRST GETS STARTED UP. WE FIRST TURN OUR APP COMPONENT INTO HTML AND THEN TELL REACT WHERE WE WANT ALL THAT HTML TO BE DISPLAYED.


# Why are there two React libraries inside the index.js file?

There is React and React DOM. These are the two separate libraries anyone building a react application will be working with.

- The **React** library is called a **reconciler** because it has a bunch of code inside it that
1. knows how to get a bunch of different components to work together
2. knows how to call a component function
3. knows how to et back that jsx
4. knows how to essentially iterate over those elements and know whether to create an html element or call some other component function.

- The **ReactDOM** library is called a **renderer** because it knows how to take a set of instructions that is needed to create html and ACTUALLY CREATE HTML OUT OF IT. 
- It is the one responsible for actually taking the jsx, turning it into html and inputting that html into the DOM and shows it to the user.


# useState seems confusing...what is it for?
- In the app function, useState was used a few times
- It is a function used to work with the state system in react.
- The state system is all about managing data inside of your application, particularly data that changes over time.
- In the code, the language and the text inputted can be changed over time as different entries will be made, the useState helps to manage the entries to store those data.
- In general, the state system is used anytime **to make React update the HTML or content on the screen**

# To Generate a new React app on local machine
- Install/update your Node JS (Google is the best tool for learning how to do it.)
- Install create-react-app
The recommended method for generating a project is now:

```
npx create-react-app my-app
```

If you get any errors about missing templates or how a global Create React App install is no longer supported, try clearing your npx cache:
```
npx clear-npx-cache
```
If you still are met with errors referencing a globally installed Create React App you likely need to remove the global package from your system:
```
npm uninstall -g create-react-app
```
- Generate a project
- Build Project
# Why do we have so many packages installed just to run a simple react project?
- The react project has a tonne of dependencies like
    1. Webpack
    2. Babel
    3. Dev Server 
**Babel** - A command line tool that makes the life of a developer easy by taking in any version of js and spitting out an ES5 version that can be understood and can be executed by most or all browsers.

# A Deep Dive Into The create-react-app just made

- **Src**: this is the directory/folder where all of the source code that we write will live. There are autogenerated src files that are usually deleted and won't be worked with when you are building your own project from the scratch.

- **public**: contains static files eg html files, images, audio files, et al

- **node_modules**: this contains all of the project dependencies aka those 1789 or so things that were installed when you 

- **package.json**: lists out all the project dependencies that the project will have and also their configuration. Updates can be made to this as progress is made during the project.

- **package-lock.json**: This contains the exact version of all of the dependencies installed into the project.

- **README.md**: It has directions in it to tell you how to run the project

- **gitignore**: It is a reference to the git version control system and lists out the files and folders which git should ignore when we make changes or push to our repositories.

## How to get a React app started and how to stop it?
- First of all, it is important to know that you cannot start a react app without navigating into the react project directory so ALWAYS MAKE SURE YOU ARE IN YOUR PROJECT FOLDER BEFORE STARTING UP THE PROJECT.

- To start a react application once you are in your project folder, input the following command in the command line

```
npm start
```
For the current version of node, it might change on your terminal to **react-script start** but let it do its thing.

The above will initialize your application and a new tab will open in your browser with the url **localhost:3000** or on your network **http://192.168.0.193:3000** The latter can be used if the localhost doesn't work.

- If the above port is in use, the project can be started on a different port.

- To stop a react application, type the command 
```
Ctrl/Cmd + C
```
More Questions?
# Getting a deeper understanding into how JSX works


## Why do devs delete all files in the src. Why?
This is simply because the files in there are mostly pre-loaded files for the react template and the only one really needed in the src folder at the start is the index.js file. So make sure to create only that file after deleting all files in the src folder.

## Why do we name the file index.js


## What happens after the delete when you delete the files in the src folder?
The react template stops displaying and you only see a white screen such as you see when you are just starting to build with your regular html.

## How do we get content to appear on the screen again with React?
There are three steps that would guide you through the process of getting things to show up on React again.

# What are the three steps needed to display a simple content on the screen?
1. Import the React and ReactDOM libraries.
2. Create a React component.
3. Take the react component and show it on the screen.

### 1. Import the React and ReactDOM libraries.

# Explain the import statements and why we are importing stuff from stuff.
Any code that is written in a react project is not going to be automatically shared with the rest of the project or files.
To get access to other files within the current file you are working from, **the import statement gets that done**

In this case, importing React and ReactDOM should look like this;
```
import React from 'react';
import ReactDOM from 'react';
```
Syntax explanation would be:
- **import** - tells the JS system that we want to reach out to a dependency or another file inside our project. Dependencies such as react can be imported or regular files created by the dev.

- **React** - can be any other variable and will be the assignee of any code that is taken from the dependency or file.

- **from** - no one should need an explanation for this.

- **react** - this is the name of the dependency or path to the file which we are importing the code from. What happens is that when javascript comes to this, it wil go and find the react folder from the node modules and pull the code from there.

# what is the difference between an 'import' and a 'require'statement?
- The import statement is used for ES2015 modules while the 'require' statement makes use of the CommonJS modules.

### 2. Create a React component.

# What is a react component.
- Can either be a function or a class
- purpose of a component that is a function or a class is to produce HTML to show the user using JSX.
- Secondary purpose is to handle feedback from the user using Event Handlers.

# How to create a functional react component?
```
const App = function() {
    return <div>My name is Opeyemi</div>
};
```
Can also be re-written using ES6 as so;
```
const App = () => {
    return <div>My name is Opeyemi</div>
};
```

### 3. Take the react component and show it on the screen.
- This is done by rendering the reactDOM with the component as the first argument and the reference to the index.html where the function will be put in the div of the index file as the second argument.
```
ReactDOM.render(
    <App />, document.querySelector('#root');
)
```

## How do you spot errors in your react application?
If something isn't right, system will likely show you errors in the following ways;

1. Some errors will show a blank white screen and ONLY print to the browser console.
2. Some other errors print to the screen, console, and terminal.
3. Linter warnings will ONLY print to the terminal.


## Understanding JSX
- Babel usually is used to convert ES2015 modules to ES2005 so most browsers can be supported. But it also helps to process JSX.
- No browser natively understands what JSX is, so JSX is converted to normal javascript before it is fed to the browser. 
- A tool on babeljs.io is available for this conversion.
- JSX is written just for simplicity sake and converted back to plain JS by Babel before being fed to the browser.
- In summary, JSX is not HTML, tools will turn written JSX back into vanilla JS and JSX is similar to HTML.
**Every time you return a JSX line of code, you have to make sure that the RETURN statement and the opening tag are on the same line else you will get an error**

**Better still, if it is a multiline code that is being returned, open with a parentheses and make sure the beginning of the parentheses is on the same line as the return statement and the closing parentheses is below the closing tag of the code**

## Are there differences between HTML and JSX? What are these differences?
```
const App = () => {
    return (
        <div>
            <h3>This is a sample form</h3>
            <label for='name' class='label'>Username:</label>
            <input id='name' type='text'/>
            <label for='password' class='label'>Password:</label>
            <input id='password' type='text'/>
            <button style="background-color: black; color: white;">Login</button>
        </div>
    )
};
```
- The above code will throw an error because there are differences in HTML and JSX styling

1. Instead of the quotes that will follow the **"equal to"** sign, two **curly brackets** are going to be used, one signifying a **javascript variable** and the other signifying that it is a **javascript object.**
2. when compound styles like `background-color` exist in HTML and have to be styled in JSX, use camelCase. In other words, correct syntax will be `backgroundColor` and the value will be in single quotes. 
3. Styles are separated with a comma and not semi-colons.
4. With JSX, it is a convention to use double quotes for JSX properties and single quotes everywhere else. **Using it otherwise will not change anything but it is nice to follow convention**
5. Instead of using **class** to style, in JSX **className** is used. This is to avoid confusions with the javascript class which is used often in JSX and React.
6. JS variables are easily referenced with JSX but HTML doesn't have such power. 



Re-writing the code with the appropriate style will give;
```
const buttonText = 'Order Now!';

const App = () => {
    return (
        <div style={{ border: '1px solid red', padding: '0px 10px 30px 30px' }}>
            <h3>This is a sample form</h3>
            <label for="name" className="label">Username:</label>
            <input id="name" type="text"/>
            <label for="password" className="label">Password:</label>
            <input id="password" type="text"/>
            <button style={{ backgroundColor: 'black', color: 'white', marginLeft: '20px' }}>{buttonText}</button>
        </div>
    )
};
```
PS: I added a few styles more because I love that I am actually able to write JSX with a full understanding. 

# Seems like JSX can do everything, what can't it do then?
**It is important to note that variable types like numbers, strings and even stuff like arrays can be referenced directly in JSX but OBJECTS cannot be referenced directly. The dot notation has to be used for such a reference** 





