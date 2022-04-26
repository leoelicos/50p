const container = document.getElementById('container');
const color0 = '#e74c3c';
const color1 = '#8e44ad';
const color2 = '#3498db';
const color3 = '#e67e22';
const color4 = '#2ecc71';
const colors = [color0, color1, color2, color3, color4];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setColor(square));
	square.addEventListener('mouseout', () => removeColor(square));

	container.appendChild(square);
}

function setColor(element) {
	const color = getRandomColor();
	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.background = '#1d1d1d';
	element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
