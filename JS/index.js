$(window).on('load', () => {
	$('.loader-container').fadeOut(2000);

	const hamburgerMenu = document.getElementById('hamburger-menu');
	const menuList = document.querySelector('.nav-list ul');
	hamburgerMenu.addEventListener('click', function () {
		menuList.classList.toggle('active-list');

		if (menuList.classList.contains('active-list')) {
			hamburgerMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>`;
		} else {
			hamburgerMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
						<path fill="none" d="M0 0h24v24H0z" />
						<path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
					</svg>`;
		}
	});
});
