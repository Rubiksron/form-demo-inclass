'use strict';

var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);

var textAreaButton = document.getElementById('textAreaBtn');
textAreaButton.addEventListener('click', handleTextarea);

function handleSubmit(event) {
  event.preventDefault();
  var name = event.target.inputElementName.value;
  var age = event.target.inputElementAge.value;

  alert(`your name is ${name} and you are ${age}`);

  console.log('event.target: ', event.target);
  // console.log('event.target.inputElementAge.value: ', event.target.inputElementAge.value);
  event.target.inputElementAge.value = null;
  event.target.inputElementName.value = null;
}

function handleTextarea(event) {
  event.preventDefault();
  var text = document.getElementById('myTextarea').value;
  // console.log(event.target.textAreaBtn.value, 'event.target.textAreaBtn.value');
  console.log('text: ', text);
}

function removeListener() {

}



