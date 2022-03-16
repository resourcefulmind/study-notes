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

