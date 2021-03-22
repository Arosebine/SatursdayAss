let div1 = document.getElementById('firstDiv');
let div2 = document.getElementsByTagName('div')[0];
let div3 = document.querySelector('#firstDiv');
let myOptions = document.getElementById('theOptions');
div1.setAttribute('style', 'background-color:blue');
console.log(div1.getAttribute('class'));

let theBody = document.getElementById('body');
let newDiv = document.createElement('div');
let divContent = document.createTextNode(
  'Hello World here comes the baddest JS Developer'
);
newDiv.appendChild(divContent);
div1.insertBefore(newDiv, myOptions);
