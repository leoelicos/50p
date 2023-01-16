//  bring in the toggle buttons using querySelectorAll with class faq-toggle, this will create a node list
// loop through nodelist (forEach)
// on each toggle, add a click event (addEvent Listener)
// toggle the active class on the parent node (.parentNode & classList.toggle())
const nodeList = document.querySelectorAll('.faq-toggle');
nodeList.forEach((toggle) => {
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active');
	});
});
