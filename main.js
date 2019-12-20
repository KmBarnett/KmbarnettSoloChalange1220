var navButtons = document.querySelectorAll('.nav-items-js');
var navBar = document.querySelector('.nav-bar')
var pages = document.querySelectorAll('.stuff-js')

for (var i = 0; i < navButtons.length; i++) {
  navButtons[i].value = i
}

function navBarClickHandler(event) {
  if (event.target.classList.contains('nav-items-js')){
    showSelection()
    showContent(event)
  }
}

function showContent(event) {
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.add('hidden')
  }
  pages[event.target.value].classList.remove('hidden')
}

function showSelection() {
  for (var i = 0; i < navButtons.length; i++) {
    navButtons[i].classList.remove('nav-selected')
  }
  event.target.classList.add('nav-selected')
}

navBar.addEventListener('click', navBarClickHandler)
