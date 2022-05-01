
//------------ throttle----------------

const coofdsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;
//Без підключення бібліотеки lodash:

// window.addEventListener('mousemove', onMousemove);

// function onMousemove(event) {
//   mouseMoveCbInvocationCounter += 1; 

// coofdsOutputRef.textContent = `
// Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
// X: ${event.clientX},
// Y: ${event.clientY} `;
// }//Де знах-ся мишка по Х і по У на екрані

// З бібліотекою lodash:

const throttledOnMouseMove = _?.throttle(onMousemove, 500);//Заторможений MousMove з заторможенням в 500мс

window.addEventListener('mousemove', throttledOnMouseMove);
function onMousemove(event) {
    mouseMoveCbInvocationCounter += 1; 
  
  coofdsOutputRef.textContent = `
  Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
  X: ${event.clientX},
  Y: ${event.clientY} `;
  }//Де знах-ся мишка по Х і по У на екрані
  
//--------------debounce -------------
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');

let inputCbInvocationCounter = 0;

//---без debounce --------

// inputRef.addEventListener('input', onInputChange);

// function onInputChange(event) {
//   inputCbInvocationCounter += 1;

//   outputRef.textContent = `
//   Кількість викликів onInputChange: ${inputCbInvocationCounter},
//   Значення: ${event.target.value}`;
// }

//-------з debounce--------------
// inputRef.addEventListener('input', _.debounce(onInputChange, 2000));//чекатиме 2000мс після того, як ти зупиниш ввід

function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
  Кількість викликів onInputChange: ${inputCbInvocationCounter},
  Значення: ${event.target.value}`;
}