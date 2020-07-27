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

//COLLAPSE ON PROJECT DETAILS ('technical details')
const projectContent = document.querySelectorAll('.project-content');
const expandButtons = document.querySelectorAll('.expand-detail');

const calculateButtonExpanders = () => {
	let contentHeight = [];
	expandButtons.forEach((button, i) => {
		contentHeight.push(projectContent[i].scrollHeight); //use to find height of html elements
	});
	return contentHeight;
};

const applyButtonExpanders = () => {
	expandButtons.forEach((button, i) => {
		button.addEventListener('click', () => {
			const vals = calculateButtonExpanders();
			if (button.innerText === 'More details...') {
				projectContent[i].style.maxHeight = vals[i] + 'px';
				button.innerText = 'Less details...';
			} else if (button.innerText === 'Less details...') {
				projectContent[i].style.maxHeight = 110 + 'px';
				button.innerText = 'More details...';
			}
		});
	});
};

applyButtonExpanders();

//COLLAPSE END
