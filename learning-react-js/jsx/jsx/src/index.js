//import
import React from 'react';
import ReactDOM from 'react-dom';

//create react component
const App = () => {
    const buttonText = 'Order Now!';

    return (
        <div style={{ border: '1px solid red', padding: '0px 10px 30px 30px' }}>
            <h3>This is a sample form</h3>
            <label htmlFor="name" className="label">Username:</label>
            <input id="name" type="text"/>
            <label htmlFor="password" className="label">Password:</label>
            <input id="password" type="text"/>
            <button style={{ backgroundColor: 'black', color: 'white', marginLeft: '20px' }}>
                {buttonText}
            </button>
        </div>
    )
};

//display component 
ReactDOM.render(
    <App />, document.querySelector('#root')
)
