function openOverlay() {
  document.querySelector('.overlay').classList.add('overlay-on')
  document.querySelector('.close-overlay').classList.add('close-overlay-on')
}

function closeOverlay() {
  if (document.querySelector('.overlay').classList.contains('overlay-on') && document.querySelector('.close-overlay').classList.contains('close-overlay-on')) {
    document.querySelector('.overlay').classList.remove('overlay-on')
    document.querySelector('.close-overlay').classList.remove('close-overlay-on')
  }
}

function openMenu() {
  if (document.querySelector('.menu-button').classList.contains('menu-button')) {
    document.querySelector('.menu-items-1').classList.add('menu-items-on-1')
    document.querySelector('.menu-items-2').classList.add('menu-items-on-2')
    document.querySelector('.menu-items-3').classList.add('menu-items-on-3')  
    document.querySelector('.menu-button').classList.add('menu-button-off')
  } 
  if (document.querySelector('.menu-button').classList.contains('menu-button-off') && document.querySelector('.menu-button').classList.contains('menu-button')) {
    document.querySelector('.menu-items-1').classList.remove('menu-items-on-1')
    document.querySelector('.menu-items-2').classList.remove('menu-items-on-2')
    document.querySelector('.menu-items-3').classList.remove('menu-items-on-3')  
    document.querySelector('.menu-button').classList.remove('menu-button-off')
  }
}