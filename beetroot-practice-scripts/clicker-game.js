let number = 0;

function addNumber() {
  const counterNumber = document.querySelector('.counter');

  if(number < 100) {
    number = number + 1;
    counterNumber.innerHTML = number;
  } else if(number >= 100 & number <= 400) {
    number = number + 3;
    counterNumber.innerHTML = number;
  } else if(number >= 400 & number <= 1600) {
    number = number + 7;
    counterNumber.innerHTML = number;
  } else if(number >= 1600 & number <= 4800) {
    number = number + 15;
    counterNumber.innerHTML = number;
  } else if(number >= 4800 & number <= 10000) {
    number = number + 31;
    counterNumber.innerHTML = number;
  } else {
    number = number + 67;
    counterNumber.innerHTML = number;
  }

}