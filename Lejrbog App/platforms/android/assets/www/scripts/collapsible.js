function toggleDrop(e) {
	if ($(e.nextElementSibling).css("display") !== "none") {
		$(e.nextElementSibling).css("display", "none");
		$(e).children().toggleClass('fa-chevron-down', 1);
		$(e).children().toggleClass('fa-chevron-right', 0);
	} else {
		$(e.nextElementSibling).css("display", "block");
		$(e).children().toggleClass('fa-chevron-right', 1);
		$(e).children().toggleClass('fa-chevron-down', 0);
	}
}