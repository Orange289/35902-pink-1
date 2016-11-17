var menu_btn = document.querySelector('.page-header__btn');
var menu_list = document.querySelector('.main-nav__list');
var header = document.querySelector('.page-header');
var logo = document.querySelector('.logo--header');


menu_btn.addEventListener('click', function(event) {
	event.preventDefault();
	header.classList.toggle('page-header--open');
	menu_btn.classList.toggle('page-header__btn--close');
	logo.classList.toggle('logo--header-open');
	menu_list.classList.toggle('main-nav__list-show');
});
