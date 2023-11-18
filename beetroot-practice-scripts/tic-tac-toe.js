
const boxes = document.querySelectorAll('.box')
let symbol = 'o'
let arr =[]
function addButtons(number) {
const element = document.querySelector(`.icon${number}`)
if(document.getElementById('playButton').classList.contains('game-on')) {
  if(!element.classList.contains('symbol-on')) {
    if (symbol === 'o') {
      element.classList.remove('fa-regular', 'fa-circle'); 
      element.classList.add('fa-solid', 'fa-x');
      element.classList.add('symbol-on');
      symbol = 'x'
    }else if (symbol === 'x'){
      element.classList.remove('fa-solid', 'fa-x');
      element.classList.add('fa-regular', 'fa-circle'); 
      element.classList.add('symbol-on')
      symbol = 'o'
    }
    arr.push(symbol)
    console.log(arr)
  }
}} 
