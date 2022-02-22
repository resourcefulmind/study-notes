// JUST PLAYING AROUND WITH COMMANDS AND CODE IN THE DOM
// //target unordered list in the html
// const ul = document.querySelector('.items');

// //The way i understand it, to change the text content of the ul
// ul.firstElementChild.textContent = 'Register?'
// ul.children[1].innerText = 'Login?'
// ul.lastElementChild.innerHTML = '<h3>Forgot Password, Please Click Here</h3>'

// //target things like the button
// // const btn = document.querySelector('.btn');
// // btn.style.background = 'gold';

// //target the button again and listen for events
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     //to prevent the button from refreshing always after being clicked
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'blue';
//     //add a class that will change the background of the body
//     document.querySelector('body').classList.add('bg-dark');
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


//listen for a submit event
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all fields correctly';

        setTimeout(() => {
            msg.remove()    
        }, 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear the fields after submit
        nameInput.value = '';
        emailInput.value = '';
    }
}



