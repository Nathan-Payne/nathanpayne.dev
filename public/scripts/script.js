//NAV MENU TOGGLE
const menu = document.querySelector('#nav-items');
const menuIcon = document.querySelector('#menu-icon');
const hamSvg = document.querySelector('#ham');
const cross = document.querySelector('#cross');
const navItems = document.querySelectorAll('#nav-items ul li');

let isOpen = false;
menuIcon.addEventListener('click', () => {
	isOpen = !isOpen;
	if (isOpen) {
		menu.classList.remove('hidden');
		cross.classList.remove('hidden');
		menu.classList.add('block');
		setTimeout(() => {
			navItems.forEach((item) => {
				item.classList.add('opacity-100', '-translate-x-px');
			});
		}, 30);
		hamSvg.classList.add('hidden');
	} else {
		navItems.forEach((item) => {
			item.classList.remove('opacity-100', '-translate-x-px');
		});
		setTimeout(() => {
			menu.classList.remove('block');
			hamSvg.classList.remove('hidden');
			menu.classList.add('hidden');
			cross.classList.add('hidden');
		}, 400);
	}
});
// NAV MENU END
