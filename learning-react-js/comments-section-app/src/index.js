import React from 'react';
import ReactDOM from 'react-dom';
//import faker
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className='avatar'>
                    <img src={faker.image.avatar()} alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className='author'>Nader Dabit</a>
                    <div className="metadata">
                        <span className="date">3/18/22 at 4:30PM</span>
                    </div>
                    <div className="text">I remember when I was first learning Git, the phrase "pull request" made no sense to me and confused me so much, now I am 100% comfortable using Git but still think that phrase makes no sense at all.</div>
                </div>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))