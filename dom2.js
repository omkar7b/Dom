// *parentElement

var header = document.querySelector('#main-header');
console.log(header.parentElement);

var title = document.querySelector('.title');
console.log(title.parentElement);
 //title.parentElement.style.background = 'black'
console.log(title.parentElement.parentElement.parentElement);
//console.log(title.parentNode.parentNode.parentNode)

//*lastElementChild

var items = document.querySelector('#items');
console.log(items);
console.log(items.lastElementChild);
//items.lastElementChild.style.color = 'red';

//*lastChild
console.log(items.lastChild);
//items.lastChild.textContent = 'hello'



// *firstElementChild
console.log(items.firstElementChild);
//items.firstElementChild.style.background = 'red';
 
// *firstChild
console.log(items.firstChild);
//items.firstElementChild.style.background = 'red';

//*nextSibling
console.log(items.nextSibling);

//*nextElementSibling
console.log(items.nextElementSibling);
console.log(header.nextElementSibling);
//header.nextElementSibling.style.background = 'green'

//*previousSibling
console.log(items.previousSibling);

//*previousElementSibling
console.log(items.previousElementSibling);
//items.previousElementSibling.style.background = 'blue'

//Create Element 
//Create a div

var newDiv = document.createElement('div');

//create a Class
newDiv.className = 'hello';

//Create an id
newDiv.id = 'hello1';

//Add Attribute
newDiv.setAttribute('title', 'Hello Div');

//Add Text Node
var newDviText = document.createTextNode('Hello')

//Add text tp Div
newDiv.appendChild(newDviText);

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')
container.insertBefore(newDiv, h1)

newDiv.style.fontSize = '40px';

console.log(newDiv)

//Adding Hello before item 1
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello Div');
var newDviText = document.createTextNode('Hello')
newDiv.appendChild(newDviText);
var list = document.querySelector('#items');
var item = document.querySelector('.list-group-item:nth-child(1)');
list.insertBefore(newDiv,item);