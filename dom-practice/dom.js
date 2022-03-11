//to type an item and be able to submit
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//to submit
form.addEventListener('submit', addItem);

//function for adding item
function addItem(e) {
    e.preventDefault(); //to prevent the default action of refreshing when the submit button is clicked

    console.log('Na we be government')
}