var menu_btn = document.querySelector('.page-header__btn');
var menu_list = document.querySelector('.main-nav__list');
var header = document.querySelector('.page-header');
menu_btn.addEventListener('click', function(event)) {
	event.preventDefault();
	header.classList.toggle('page-header__menu-open');
	menu_list.classList.toggle('main-nav__list-show');
});
