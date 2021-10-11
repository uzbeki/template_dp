document.onclick = (e) => {
	isDropDownButton = e.target.matches("[data-dropdown-button]");

	// if the click is on a dropdown button or inside a dropdown content, do nothing
	if (!isDropDownButton && e.target.closest("[data-dropdown]") !== null) return;

	// if the click is on a dropdown button, toggle the dropdown
	let currentDropdown;
	if (isDropDownButton) {
		currentDropdown = e.target.closest("[data-dropdown]");
		currentDropdown.classList.toggle("active");
	}

	// if the click is on a dropdown content, close all dropdowns
	document.querySelectorAll("[data-dropdown].active").forEach((activeDropdown) => {
		if (activeDropdown === currentDropdown) return;
		activeDropdown.classList.remove("active");
	});
};
