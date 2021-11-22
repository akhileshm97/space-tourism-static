window.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.getElementById('menu-toggle');
	const primaryNav = document.getElementById('primary-navigation');

	menuToggle.addEventListener('click', toggleMenu);

	function toggleMenu() {
		const isOpen = menuToggle.getAttribute('data-open');
		if (isOpen === 'false') {
			menuToggle.setAttribute('data-open', 'true');
			primaryNav.setAttribute('aria-expanded', 'true');
		} else {
			menuToggle.setAttribute('data-open', 'false');
			primaryNav.setAttribute('aria-expanded', 'false');
		}
	}
});

// const buttons = document.querySelectorAll('button');
// const tabs = document.querySelectorAll('[role="tabpanel"]');
// buttons.forEach((button, i) =>
// 	button.addEventListener('click', (e) => changeTab(e, i))
// );

// function changeTab(e, i) {
// 	console.log(e.target);
// 	console.log(i);
// 	tabs.forEach((tab) => tab.setAttribute('aria-selected', false));
// 	tabs[i].setAttribute('aria-selected', true);
// }
// // fetch('/data.json').then(response => console.log(response.json()));
// const message = document.querySelector('#message');

// async function getData() {
// 	return fetch('/data.json').then((response) => response.json());
// }
// const data = await getData();
// console.log(data);
// console.log(message);
// message.textContent = data.crew.length;
