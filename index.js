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
