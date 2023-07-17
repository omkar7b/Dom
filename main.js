
var form = document.getElementById('addForm');

var itemList = document.getElementById('items')

// Form submit event
form.addEventListener('submit', addItem);

//Delete Event
itemList.addEventListener('click', removeItem);


// Add item
function addItem(e){
  e.preventDefault();
//console.log(1);

//Get input value;
var newItem = document.getElementById('item').value;

//create new li element
var li = document.createElement('li');

//Add Class
li.className = 'list-group-item'

//Add TextNode
li.appendChild(document.createTextNode(newItem));

//Add delete button 
var deleteBtn = document.createElement('button');

//Add Class 
deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

//Add TextNode 
deleteBtn.appendChild(document.createTextNode('X'));

//Append Buttn to li
li.appendChild(deleteBtn);

//Append li to itemList
itemList.appendChild(li);
}


// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }

