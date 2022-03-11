//to type an item and be able to submit
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//to Add Items
form.addEventListener('submit', addItem);
//to remove items
itemList.addEventListener('click', removeItem)

//function for adding item
function addItem(e) {
    e.preventDefault(); //to prevent the default action of refreshing when the submit button is clicked

    //extract input value of whatever was typed
    var itemValue = document.getElementById('item').value;

    //after grabbing value, create new list item
    var li = document.createElement('li');
    //give the list item a class same as the other ones, so it takes on the beauty of the rest of its mates
    li.className = 'list-group-item'
    //attach the value of the text entered into the input to a textnode
    li.appendChild(document.createTextNode(itemValue));
    //create the delete button on thr right 
    var deleteItem = document.createElement('button');
    //Add the classes of the other delete buttons so they can look alike
    deleteItem.className = 'btn btn-danger btn-sm float-sm-end delete';
    //Create a textnode for the deleteItem so it can be used
    deleteItem.appendChild(document.createTextNode('X'));
    //attach the deleteItem textnode to the list
    li.appendChild(deleteItem);
    //then lastly attach that li textnode to the list
    itemList.appendChild(li);
    //
}


//create function to remove item
function removeItem(e) {
    //set a conditional statement that ensures that the function will only execute when the box marked X is clicked
    if (e.target.classList.contains('delete')) {
        if(confirm('Are you sure you want to delete?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}