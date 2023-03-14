function toggleMenu() {
	var menu = document.getElementById("menu");
	if (menu.style.display === "none") {
		menu.style.display = "block";
		menu.style.left = "0";
	} else {
		menu.style.display = "none";
		menu.style.left = "-300px";
	}
}
