let header__burger = document.querySelector('.header__burger')
let header_menu = document.querySelector('.menu__body')
let back = document.querySelector('body')
let header__list = document.querySelector('.menu__list')

header__burger.onclick = function () {
	header__burger.classList.toggle('active')
	header_menu.classList.toggle('active')
	back.classList.toggle('lock')
}
