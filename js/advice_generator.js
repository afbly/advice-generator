const id = document.querySelector('#id');
const text = document.querySelector('#text');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
  get_advice();
})

window.onload = () => {
  get_advice();
}

function get_advice() {
  fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
  }).then(advice_data => {
    const ADVICE_OBJ = advice_data.slip;
    text.innerHTML = ADVICE_OBJ.advice;
    id.innerHTML = ADVICE_OBJ.id;
  }).catch(error => {
    console.log(error);
  })
}