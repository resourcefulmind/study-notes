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
3. knows how to get back that jsx
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

- **node_modules**: this contains all of the project dependencies aka those 1789 or so things that were installed when you did the create-react-app

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
**Every time you return a single JSX line of code, you have to make sure that the RETURN statement and the opening tag are on the same line else you will get an error**

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
**It is important to note that variable types like numbers, strings and even stuff like arrays can be referenced directly in JSX but OBJECTS cannot be referenced directly. Objects can be used as long as it is not text. The dot notation has to be used for such a reference** 

-  Other differences exist that will not stop the app from working but will show up on the console. Checking the console regularly is the best convention for this. **It is best practice to keep the console open to check for errors.**

After JSX, what next? **Communication with props**

# What are the three tenets of React Components

- Component Nesting (making different components to make a real react app and showing a component inside of another component).
- Component Reusability (reusing components throughout the application like buttons and menus and navigation bars/menus and the likes).
- Component Configuration (Giving the same components different configurations)

**A build of a simple comment-section app can be found in the folder and will cement the knowledge for understanding the **three tenets of react components****

# Additional Read: Semantic UI CDN
- Semantic UI is a front-end development framework similar to bootstrap designed for theming. A CSS library actually. It contains pre-built semantic components that helps create beautiful and responsive layouts using human-friendly HTML.

- And it integrates with React, Angular, Meteor, Ember and many other frameworks to help organize UI layer alongside application logic.

- Install via CDN with
```
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css">
```
Full documentation to learn all about semantic UI is here:
https://semantic-ui.com/

- To get started
https://semantic-ui.com/introduction/getting-started.html


# Additional Read: FakerJS library
- A JavaScript library for generating fake data. Fake data is useful when building and testing our application.
- **The library currently no longer exists and is not being maintained.** However, as of today, it still exists in the NPM registry and we are able to install and use it in our projects by specifying the last known good version:
```
npm install faker@5.5.3
```
**faker was used to generate the fake avatar for the comment section project**

- To generate an avatar, you add it by calling {faker.image.avatar()}

- To install additional dependencies you have to stop the dev server first, install your dependency, check package.json to see if it is there and then start up the server again.

- One other thing is that for every refresh, there is a different image and the occasional broken image too

- **Important Notice**: For some reason, faker JS refused to generate the data needed. I do not know if this has to do with the whole developer fracas that was on the news. I tried **falso** but their documentation was not it for me so i settled for **https://via.placeholder.com** which is very easy to use.


## Why do we need reusable components?
Reusable components are a necessity so as not to have to deal with the complexities of very long and cumbersome JSX as well as to write clean and tidy code. It is simply the isolation of duplicated JSX in one place so they can be reused.

## How to Create Reusable and Configurable Component and extract JSX to the new component?

1. Identify the JSX that already appears in the project and is duplicated.

2. What is the purpose of that block of JSX. What does it do? Then provide a descriptive name for what it does. e.g the description of the component being worked on is to provide or display details about a single comment.

3. Then create a new file to house the new component and it should have the same name.
**The naming of react components are always started with uppercase letters**

4. Copy and paste the duplicated JSX to your new component.

5. use React's props system to make sure that the new component is configurable. 

## What exactly are props or the React props system?
- Props allows us to configure how a component behaves or the content it shows. In the comments section project and the CommentDetail component, the author of the comment, the date and the text are hard coded. They will probably be dynamic and change with time and users so props can help with that.

## How do we get a reusable component like CommentDetail.js to show up inside another file like index.js in the project...
- Export the CommentDetail.js file
```
export default CommentDetail
```
- import it to the index.js
```
import CommentDetail from './comments-section-app/src/CommentDetail'
```
[**no .js involved because webpack will look for that for you automatically**]

- Export makes the file available to other parts of the project, import makes it actually usable.

- After linking the files, component nesting is then used to show it

**To actually show the new component, do not use curly braces to display the CommentDetail like it was a variable, use a JSX tag...it is the one exception to that rule so if you want to show one component inside another, you will treat it like it is a JSX tag**

```
<CommentDetail /> as against {CommentDetail}
```

## What are props?

*Means properties*

The app component is the parent component while the CommentDetail are children components to it because it is showing them on the screen

**Props system is a system for passing data from a parent component to a child/nested component. The ultimate goal is to customize what a child components or different child components will show**

- A prop will either customize how the component looks or how the user interacts with it.
- There is no limit to the amount of props that can be passed to a particular component but there are standard react practices though. For example, in the project, different props can be used to pass different names to the "authors"

- A child cannot pass information back to the parents, at least not directly.

- In props, it's a 2 stage process:
1. On one hand we provide information
2. On the other hand we consume the information

- The syntax is very similar to using the attributes in normal JSX and HTML. 

*Providing information:*
```
<CommentDetail author= "Nader Dabit" />
```
where author = the name of the prop
"Nader Dabit" could have also been referenced as a JS variable.

- Props are unique and even though they might have the same attribute, they will not have the same values when set differently.

*Consuming the information*
- Pass props as a parameter inside the Component/reusable function
- reference `props.key` to access what is to be updated in the hard coded place in JSX.

## Creating upvote, downvote and approval cards and using them as reusable components

- Two ways to go about it. Write more JSX or use props by creating an approval card component and passing the CommentDetail as a prop so other stuff can also be shown using the approval card as well.

- Use semantic UI > views > cards to make the Approval card component and import it to the index.js file

-  To get the approval card to show the comment detail without hard coding, 
1. Insert the `CommentDetail` into the Approval Card as a children property of the Approval Card in the `index.js` file. 
2. Pass props to the `ApprovalCard.js` component
3. Reference the `CommentDetail.js` component in the div where you want it to show in the `ApprovalCard.js` file using `props.children`.

**When we want to make truly reusable component or show some component or custom content inside of a component, wrap it with a parent component and it is always going to show up in the `props.children` property. Then you can take that property and reference it anywhere inside of our JSX.**

**You can pass in plain text or multiple elements using the method above but the key thing is to pass props.children in the component otherwise it will not work**



## What are the differences between Functional Components and Class Components.

Functional components can:
- produce JSX to show content to the user
- use Hooks to run code at specific points in time
- Use Hooks to update content on the screen to the user.

WHILE 

Class components can:
- produce JSX to show content to the user
- use the lifecycle method system to run code at specific points in time
- use the 'state' system to update content on the screen to the user.


## PS, a developer has to know both.
Easy to learn Class components -> Learn Hooks --> Learn redux

# Advantages of using Class components
- Easier code organization.
- Get access to the 'state' system
- Easier to handle user input
- Understands lifecycle events
- Easier to do things when your app first loads up

## To learn how to use state and class based components, take a look at the second app I will be building in the coding section called Seasons App

- This app will be called the **Seasons app** and will show the weather at the location of a person.

To implement this, a few things need to be done;
1. Location of user must be determined
2. The current month.
3. Styling and wordings need to change based on whatever is selected

- Two main components will be required for this;
1. The App Component which will have the code to determine location + month and will pass it as a prop to the SeasonDisplay.
2. The SeasonDisplay which will show different text/icons based on the props.

- To determine the physical location of the user, the geolocation API can be used. The following notes have been taken from the mozilla mdn docs because I have never previously worked with the geolocation API.

## Geo-location API
- It allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.
- The Geo-location API is accessed via a call to `navigator.geolocation`; this will cause the user's browser to ask them for permission to access their location data. If they accept, then the browser will use the best available functionality on the device to access this information (for example, GPS).

- Information can then be accessed in a couple of ways and taking up to three arguments (the compulsory success callback, an optional error callback and optional object which provides options for retrieval of the position data. The two ways are;

1. `Geolocation.getCurrentPosition()`: Retrieves the device's current location.
2. `Geolocation.watchPosition()`: Registers a handler function that will be called automatically each time the position of the device changes, returning the updated location

More info here 
[Link](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

**From the position object, the latitude is gotten and will give the ability to decide which hemisphere the user is**

- To reset the geo-location process and make it always request permission...change the setting on the local host.

- When the geo-location API is called, rendering happens before a result is even gotten. The component is already rendered and the details are shown while the API call is still "processing".

This is where **Class Based Components** come in. It is the first step towards solving the problem.

- Class Based components will help with telling the app to re-render itself when it has gotten the results from calling the geo-location API.

- So new app flow will be
1. JS file is loaded by browser
2. App component gets created
3. Geo-location service API is called
4. App returns JSX, gets rendered to the page as HTML

5. We get result of geolocation.
6. Tell the component to rerender itself with this new information.

**So we use a class based component instead of a functional component so that we can use React's state system**

## To use Class based components, the following rules have to be observed;
1. Create a javascript class (mandatory)
2. Must extend React.component
3. Must define a 'render' method that will return some JSX.

- Reason for using extends React.Component is that it allows for pulling other methods into the class based component.

# Using the state system in React.
- This is the second part of the solution that will solve the seeming delay in getting our geo-location value back and re-rendering the app to update itself.

## THE RULES OF THE STATE SYSTEM IN REACT
1. It is only usable with class components (this is not 100% true in recent times as state can technically be used with functional components via the "hooks" system)

2. IT IS NORMAL TO CONFUSE PROPS WITH STATE. Most fresh react devs do this.

3. 'State' is a javascript object that contains data relevant to a component. In our app component, the piece of state that we need is the latitude.

4. *Updating 'state' on a component causes the component to almost instantly rerender.* If you want to get a single component to update itself, you must update its state.

5. State must be initialized when a component is created.

6. **State can only be updated using the function 'setState'** Most important rule of all as everyone makes an error when doing this early on.

# How then do we initialize state? By using constructors.
- Constructors are not required by react as the render method is. It is not specific to react.

- It is the first function that is going to be called anytime an instance of the App component is created and shown on the screen. It makes it a very suitable place to initialize state. 

*It is not the only way to initialize state*

- Constructors are automatically called with the props object when defined.

- super(props) is mandated to be called with the props passed in. This is necessary to make sure that the React.Component constructor function gets called. It is a reference to the parent constructor function.

 *To initialize the state*
`this.state = { lat: null }`  
The above will contain the relevant pieces of data

-  To update the state property, use the setState method and then just reference it using javascript.

**Do nt use direct assignments to set your states. The only exception is when we initialize the state in the constructor function**


## The entire flow of the Seasons project from the beginning up to this point where the latitude shows up on the screen has been:

1. JS file loaded by browser
2. Instance of App component is created
3. App components 'constructor' function gets called
4. State object is created and assigned to the 'this.state' property
5. Geolocation service is called
6. React calls the component render method
7. App returns JSX, gets rendered to page as HTML

8. Geolocation result comes in
9. state object is updated with a call to 'this.setState'
10. React sees that the state of the component has been updated
11. React calls the render method a second time
12. Render method returns some (updated) JSX

## How to handle the second callback from the position function, the error callback.

- This is done by adding a new state, like an error message and updating the state.

*There's only one problem, app should always be user-centric and with the error just showing like that, the user begins to think there is actually an error so it is best to only show it when it is needed...i.e conditionally..this means certain thing should show at certain times(such as when the callback returns a success,when the latitude isn't entered and it has to return an error message and when both are entered and it is loading)* 
If statements would do the trick here....check the code for more.

The method above is called conditional rendering and used for returning different types of JSX depending on whether the conditions are met or not. It is quite simple and straightforward but there are other nicer ways.

**setState is a very good way of initializing state but there is an alternative way. To understand that, component lifecycle methods need to be understood first.**

# What is/are component lifecycle methods?
- It is a function that can be optionally defined inside of class based components.
- If the methods are implemented, they will be called automatically by React, at different points during a component's life cycle.
- Lifecycle here simply means the period from which the component is created, rendered on the screen, updated, all through when it is removed.


The lifecycle of components are typically as follows:

1. Constructor
2 Render (is called and JSX is returned and shown on the screen)
3. `componentDidMount` is called immediately after the content shows up on the screen. It has to be invoked verbatim. After it is called, the component will sit and wait for an update via setState and the app is rerendered and updated with the new stuff.
4. Each time the app rerenders, another method called `componentDidUpdate` will be called automatically. After this, the component will sit and wait again until another update is coming up and it will do the same thing for "n" number of times.
5. If we decide to no longer show te component, then `componentWillUnmount` will be called. 

**anytime didUpdate is called, render will be called before it**

## What is the need to use lifecycle methods? Use cases?

1. *Constructor* is a good spot to do your initial setup like setState. Pretty good for one time set up too according to react docs but very unconventional to do data loading as code won't be clean.

2. *render* shouldn't do anything besides returning JSX

3. `componentDidMount` is the best place to do initial data loading eg making network/API requests or geolocation or kicking off a one-time process like getting a user's physical location. In light of this, the geolocation code to get the physical location of the user will be shifted to `componentDidMount`.

4. `componentDidUpdate` gets called every single time a component is updated(could be state/props change). Data loading for every single time a component is updated should be done here. eg making network requests every time a user clicks on a button or when a user enters text into an input or new props.

5. `componentWillUnmount` is a good place to do clean up, especially non-react stuff eg using google maps ina  react application. It doesn't get used often.

# Other component life cycle methods are:
1. shouldComponentUpdate
2. getDerivedStateFromProps
3. getSnapshotBeforeUpdate

They are rarely used.

- Moving the geolocation to the `componentDidMount` makes it possible to use the alternate method of state initialization which does not involve using a constructor. state initialization will look like;

`state = { lat: null, errorMessage: '' }`

It will render without the constructor because Babel will do the constructor implementation on its own and the code will work just fine.

- To show the current season, you have to import the `SeasonDisplay` into your `index.js` file and then show it instead of the latitude.

## Passing State As Props

- The `SeasonDisplay` component will have props passed through it to display what we want it to display

- props are used to get the value of the latitude from the state to the `SeasonDisplay` component. This is where the two systems of props and state gets a little confusing.  

- To clear things up...**We can take state from one component and pass it down as a prop to the child of that component which in this case the parent is "App" and the child is the "SeasonDisplay"**

- Anytime `setState` is called in the "App" component, the app updates itself and causes the `SeasonDisplay` to be updated as well as re-rendered. 

Summarily, anytime `setState` is called, the component re-renders itself but also re-renders the children in it.

## To Determine The Season now, first figure out the current month of the year and then use the latitude to determine what season it is.

- To get the current month of the year, use 
`new Date().getMonth()`
- Keep in mind that the result of the above is indexed so if the console prints "5" as the result, then it is April and so on. See code for more.
- From geography lessons, There are two hemispheres which are the Nothern and Southern hemispheres but there's different climates.

- In Europe and the americas, which is the nothern hemisphere, there are four seasons

1. Summer (June – August) [This means indexes 5 to 7 ]
2. Autumn (September – November) [This means indexes 8 to 10 ]
3. Winter (December – February) [This means indexes 11 to 1 ]
4. Spring (March – May) [This means indexes 2 to 4 ]


- And in Africa, which is the southern hemisphere, there are:

1. Dry Season (Jan - March) [This means indexes 0 to 2 ]
2. Rainy Season (Apr - Sept) [This means indexes 3 to 8 ]~
3. Dry Season + Harmattan (Oct - Dec) [This means indexes 9 to 11 ]

- End goal has always been to get the app to tell whether the season. A function with Conditionals/te should be able to do the rest. See code for more.


- To add styling to the `SeasonDisplay` component and add weather icons to the screen, use semantic-ui icon cdn and the icon code should look like this

```
<i class="(icon action) (icon name) icon"></i>
```
The above is what was used in the course upon which I am building this knowledge. As seen in the code, I used FontAwesome instead and to set that all up, use the following instructions in these doc links

[Setting it up](https://fontawesome.com/docs/web/use-with/react/)

[To add icons](https://fontawesome.com/docs/web/use-with/react/add-icons) 

- style project by opening up css file in src folder
- name of css stylesheet should be the same as component to be styled.


- Default props can be specified as a fallback in case a prop is omitted by error or forgetfulness. This can be done in the component itself like so;

```
Loader.defaultProps = {
    message: 'Loading...'
}
```
- Helper functions help greatly to avoid conditional statements when rendering and when a constant rule, say a border has to be shown regardless of whatever conditional statement is triggered.

### Dealing with User Events, Fetching data and handling lists.

- To properly hone this skill, build a soccer app that either displays the biography of a player when you search for them or displays their profile or something like that.

# Thought Process
- User has to search for a term and app needs to get that search term from the user.
- After getting that search item, app needs to use search item to make request to an outside API and fetch data.
- App needs to take fetched data and show them on the screen in a list and in tiles.

**As at the time of building this app, React v18 was just released but for some reason, I could not create a new react app without it displaying the following error**

```
Installing template dependencies using npm...
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: soccer-profile@0.1.0
npm ERR! Found: react@18.0.0
npm ERR! node_modules/react
npm ERR!   react@"^18.0.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"<18.0.0" from @testing-library/react@12.1.5
npm ERR! node_modules/@testing-library/react
npm ERR!   @testing-library/react@"^12.0.0" from the root project        
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See C:\Users\Engr. Omodara\AppData\Local\npm-cache\eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Engr. Omodara\AppData\Local\npm-cache\_logs\2022-04-12T12_27_16_236Z-debug-0.log4-12T12_27_16_236Z-debug-0.log                                          g-library/react@^12.0.0 @testing-library/user-event@^13.2.1 web-vitals@^2.1.0` failed
`npm install --no-audit --save @testing-library/jest-dom@^5.14.1 @testing-library/react@^12.0.0 @testing-library/user-event@^13.2.1 web-vitals@^eact-js (master)2.1.0` failed
```

**If this is still happening, here is a fix I got from Stack overflow**

1. delete the "node_modules" folder and "package-lock.json"
2. open "package.json" and change "react": "^18.0.0" & "react-dom": "^18.0.0" to an earlier version e.g. "react": "^17.0.2" & "react-dom": "^17.0.2"
3. run `"npm i web-vitals --save-dev"`
4. run `npm start`

