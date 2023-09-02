let number = 0;

function addNumber() {
  const counterNumber = document.querySelector('.counter');

  if(number < 100) {
    number = number + 1;
    counterNumber.innerHTML = number;
  } else if(number >= 100 & number <= 300) {
    if (document.querySelector('.upgrades1').classList.contains('js-upgrade1')) {
    number = number + 3;
    counterNumber.innerHTML = number;
    } else {
      number = number + 1;
      counterNumber.innerHTML = number;
    }
  } else if(number >= 300 & number <= 900) {
    if (document.querySelector('.upgrades2').classList.contains('js-upgrade2')) {
      number = number + 7;
      counterNumber.innerHTML = number;
      } else {
        number = number + 3;
        counterNumber.innerHTML = number;
      }
  } else if(number >= 900 & number <= 2700) {
    if (document.querySelector('.upgrades3').classList.contains('js-upgrade3')) {
      number = number + 15;
      counterNumber.innerHTML = number;
      } else {
        number = number + 7;
        counterNumber.innerHTML = number;
      }
  } else if(number >= 2700 & number <= 6750) {
    if (document.querySelector('.upgrades4').classList.contains('js-upgrade4')) {
      number = number + 31;
      counterNumber.innerHTML = number;
      } else {
        number = number + 15;
        counterNumber.innerHTML = number;
      }
  } else {
    if (document.querySelector('.upgrades5').classList.contains('js-upgrade5')) {
      number = number + 67;
      counterNumber.innerHTML = number;
      } else {
        number = number + 31;
        counterNumber.innerHTML = number;
      }
  }

}