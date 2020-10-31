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

// TODO: Digital Clock
/* Write code here */

// TODO: Read More button
/* Write code here */

// TODO: Color Palette
/* Write code here */

// TODO: Coming Soon page
/* Write code here */
