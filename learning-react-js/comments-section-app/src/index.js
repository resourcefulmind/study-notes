import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail author="Nader Dabit" timeStamp="3/18/22 at 4:30PM" comment="I remember when I was first learning Git, the phrase 'pull request' made no sense to me and confused me so much, now I am 100% comfortable using Git but still think that phrase makes no sense at all." image="https://via.placeholder.com/150"/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Bianca Gandolfo" timeStamp="2/1/22 at 6:09PM" comment="Wanted to shoutout @1Marc and the @FrontendMasters team for always believing in me even when I didn't believe in myself. Do you have someone who has believed in you and changed your life? Let them know." image="https://via.placeholder.com/150"/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Guillaume Bibeau" timeStamp="3/19/22 at 3:39AM" comment="All my life I've worked at half my capacity. Feeling unchallenged and bored by almost everything. Now I can't stop opening my work @vercel I just have so much fun pushing myself to make the web fast. It's like a drug." image="https://via.placeholder.com/150"/>
            </ApprovalCard>
        </div>
    )
};


ReactDOM.render(<App />, document.querySelector('#root'))