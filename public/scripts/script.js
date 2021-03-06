//DETECT FIREFOX - DISABLE SVG ANIMATION - PERFORMANCE ON FIREFOX
let isFirefox = typeof InstallTrigger !== 'undefined';
if (isFirefox) {
	document.querySelectorAll('#Whangaehu path').forEach((path, i) => {
		if (i % 2 === 0 || i % 3 === 0) {
			path.style.animation = 'none';
			path.classList.add('hidden');
		}
		if (i % 5 === 0 || i % 7 === 0) {
			path.style.animation = 'none';
			path.classList.add('hidden');
		}
	});
}

//NAV MENU TOGGLE - remove menu after click
const menu = document.querySelector('#nav-items');
const menuIcon = document.querySelector('#menu-icon');
const hamSvg = document.querySelector('#ham');
const cross = document.querySelector('#cross');
const navItems = document.querySelectorAll('#nav-items ul li');

let isOpen = false;

const closeMenu = () => {
	if (document.body.clientWidth < 640) {
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
};

const openMenu = () => {
	menu.classList.remove('hidden');
	cross.classList.remove('hidden');
	menu.classList.add('block');
	setTimeout(() => {
		navItems.forEach((item) => {
			item.classList.add('opacity-100', '-translate-x-px');
		});
	}, 30);
	hamSvg.classList.add('hidden');
};

menuIcon.addEventListener('click', () => {
	isOpen = !isOpen;
	isOpen ? openMenu() : closeMenu();
});

navItems.forEach((item) => {
	item.addEventListener('click', () => {
		isOpen = !isOpen;
		closeMenu();
	});
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

//SHRINK HEADER NAV ON SCROLL
const header = document.querySelector('header');
const logoText = document.querySelector('header #logo a');

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 30) {
		//user not at top
		header.classList.add('sm:h-16');
		header.classList.remove('sm:h-24');

		logoText.classList.add('text-sm', 'sm:text-base');
	} else {
		//user at top of page
		header.classList.add('sm:h-24');
		header.classList.remove('sm:h-16');

		logoText.classList.remove('text-sm', 'sm:text-base');
	}
});
