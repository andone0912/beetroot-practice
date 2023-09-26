
function addButtons(number) {
const element = document.querySelector(`.icon${number}`)
if(!element.classList.contains('symbol-on')) {
element.classList.remove('fa-regular', 'fa-circle'); 
element.classList.add('fa-solid', 'fa-x');
element.classList.add('symbol-on');
} else {
  element.classList.remove('symbol-on')
  element.classList.remove('fa-solid', 'fa-x');
  element.classList.add('fa-regular', 'fa-circle'); 
}

}
