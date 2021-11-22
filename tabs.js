window.addEventListener('DOMContentLoaded', () => {
	const tabList = document.querySelector('[role="tablist"]');
	const tabs = tabList.querySelectorAll('*[role="tab"]');
	const parent = tabList.parentNode;

	let tabFocus = 0;

	tabList.addEventListener('keydown', changeFocus);

	tabs.forEach((tab) => {
		const ariaControls = tab.getAttribute('aria-controls');
		tab.addEventListener('click', function () {
			const currentTab = parent.querySelector('[aria-selected="true"]');
			const currentArticle = parent.querySelector(
				'[role="tabpanel"][data-selected="true"]'
			);
			const targetArticle = parent.querySelector(
				`[role="tabpanel"]#${ariaControls}`
			);
			const currentPicture = parent.querySelector(
				'picture[data-selected="true"]'
			);
			const targetPicture = parent.querySelector(
				`picture[data-id=${ariaControls}]`
			);
			if (currentPicture && targetPicture) {
				currentPicture.setAttribute('data-selected', 'false');
				targetPicture.setAttribute('data-selected', 'true');
			}
			currentTab.setAttribute('aria-selected', 'false');
			tab.setAttribute('aria-selected', 'true');
			currentArticle.setAttribute('data-selected', 'false');
			targetArticle.setAttribute('data-selected', 'true');
		});
	});

	function changeFocus(e) {
		if (e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
			tabs[tabFocus].setAttribute('tabindex', -1);
			if (e.code === 'ArrowRight') {
				tabFocus++;
				if (tabFocus >= tabs.length) {
					tabFocus = 0;
				}
			} else {
				tabFocus--;
				if (tabFocus < 0) {
					tabFocus = tabs.length - 1;
				}
			}

			tabs[tabFocus].setAttribute('tabindex', 0);
			tabs[tabFocus].focus();
		}
	}
});
