var searchBox = document.querySelectorAll('.search-box input[type="text"] + span');
searchBox.forEach((elm) => {
	elm.addEventListener('click', () => {
		elm.previousElementSibling.value = '';
	});
});
