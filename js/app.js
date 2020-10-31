// TODO: Digital Clock
document.addEventListener("DOMContentLoaded", () =>
	requestAnimationFrame(updateTime)
);

function updateTime() {
	document.documentElement.style.setProperty(
		"--timer-day",
		"'" + moment().format("dd") + "'"
	);
	document.documentElement.style.setProperty(
		"--timer-hours",
		"'" + moment().format("k") + "'"
	);
	document.documentElement.style.setProperty(
		"--timer-minutes",
		"'" + moment().format("mm") + "'"
	);
	document.documentElement.style.setProperty(
		"--timer-seconds",
		"'" + moment().format("ss") + "'"
	);
	requestAnimationFrame(updateTime);
}

// TODO: Read More button
const readMore = document.getElementById("read-more");

readMore.addEventListener("click", () => {
	const dots = document.getElementById("dots");
	const moreText = document.getElementById("more");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		readMore.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		readMore.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
});

// TODO: Color Palette
/* Write code here */

// TODO: Basic Counter
/* Write code here */

// TODO: Coming Soon page
/* Write code here */
