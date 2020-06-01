const overlay = document.getElementById('window-overlay');
const modalWindow = document.getElementById('window');


document.getElementById('images').addEventListener('click', (e) => {
	if (e.target.classList.contains('banner')) {
		const img = document.createElement('img');
		img.classList.add('window-img');
		img.setAttribute('src', `${e.target.getAttribute('src')}`);
		modalWindow.appendChild(img);

		overlay.classList.remove('window-closed');
		modalWindow.classList.remove('window-closed');
		console.log(1);
	}
});

document.getElementById('window-close').addEventListener('click', (e) => {
		modalWindow.removeChild(modalWindow.lastChild);
		overlay.classList.add('window-closed');
		modalWindow.classList.add('window-closed');

});