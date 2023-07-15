/*console.dir(document)
console.log(document.domain)
console.log(document.URL)
console.log(document.head)
console.log(document.h2)
console.log(document.title)
//document.title = "javascript" ; 
console.log(document.doctype)
console.log(document.body);
console.log(document.all);
console.log(document.all[12]);
console.log(document.all[25]);
console.log(document.all[17]);
console.log(document.all[10]);
document.all[10].textContent= 'Hello'
console.log(document.forms[0]);
console.log(document.links)


// getElementById
console.log(document.getElementById('header-title'));

var headerTitle =  document.getElementById('header-title');
console.log(headerTitle)
//headerTitle.textContent = 'omkar'
//headerTitle.innerText = 'omkar'
headerTitle.textContent = 'Item Lister'

var header = document.getElementById('main-header');
header.style.background = 'blue'
console.log(header);

header.style.border = 'solid 3px #000' */
//headerTitle.innerHTML = '<h3>Hello</h3>'

//var main = document.getElementById('main')
//main.style.background = 'black'



/*console.log(document.getElementsByClassName('title'))

var title = document.getElementsByClassName('title')

title.innertext = 'title'
//console.log(main[1]);
console.log(title)
console.log(title[0]);

title[0].style.color = 'green'
title[0].style.fontWeight = 'bold'
title.innertext = 'title'*/

/*var items = document.getElementsByClassName('list-group-item')
console.log(items[2]);

items[2].style.background = 'green'

for(let i=0;i< items.length;i++){
    items[i].style.fontWeight = 'bold';
}
console.log(document.getElementsByClassName('title'))
*/

var li = document.getElementsByTagName('li');
console.log(li);
for(let i=0;i< li.length;i++){
    li[i].style.fontWeight = 'bold';
}

