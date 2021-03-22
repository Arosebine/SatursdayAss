let questionParagraphy = document.getElementById('question');
let questionNo = Functions.randNo(0, history.length - 1);

questionParagraphy.innerHTML = history[questionNo].question;

let myUl = document.getElementById('theOptions');
let myLi, myInput, mySpan;
for (let index = 0; index < history[questionNo].options.length; index++) {
  //input li
  myLi = document.createElement('li');

  //create input
  myInput = document.createElement('input');
  myInput.setAttribute('class', 'an-option');
  myInput.setAttribute('type', 'radio');
  myInput.setAttribute('value', history[questionNo].answer);

  //span
  mySpan = document.createElement('span');
  mySpan.setAttribute('class', 'option-value');
  mySpan.appendChild(
    document.createTextNode(history[questionNo].options[index])
  );

  //add span and input to li
  myLi.appendChild(myInput);
  myLi.appendChild(mySpan);

  //add li to ul
  myUl.appendChild(myLi);
}
