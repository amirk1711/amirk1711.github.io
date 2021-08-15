// total reviews cards
let reviews = document.getElementsByClassName("reviews-card");

// range of indexes for displaying reviews cards
let displayIndex = [0, 2];
let screenWidth = document.getElementsByTagName("body")[0].offsetWidth;

if (screenWidth <= 480) {
	displayIndex[0] = 0;
	displayIndex[1] = 0;
}

function showReviews() {
	for (let i = 0; i < reviews.length; i++) {
		// show the cards which are in the range of displayIndex
		i >= displayIndex[0] && i <= displayIndex[1]
			? (reviews[i].style.display = "flex")
			: (reviews[i].style.display = "none");
	}
}

showReviews();

let leftArrow = document.getElementsByClassName("left-arrow")[0];

let rightArrow = document.getElementsByClassName("right-arrow")[0];

leftArrow.addEventListener("click", function () {
	// On clicking the left arrow
	if (displayIndex[0] > 0) {
		displayIndex[0] -= 1;
		displayIndex[1] -= 1;
		showReviews();
	}
});

rightArrow.addEventListener("click", function () {
	// On clicking the right arrow
	if (displayIndex[1] < reviews.length - 1) {
		displayIndex[1] += 1;
		displayIndex[0] += 1;
		showReviews();
	}
});

// for selecting border of plan-cards
let selectBtn = document.getElementsByClassName("select-btn");
let planCard = document.getElementsByClassName("plan-card");

document.addEventListener("click", function () {
	let n = document.activeElement.textContent;
	for (let j = 0; j < planCard.length; j++) {
		if (j == n[n.length - 1] - 1) {
			planCard[j].style.borderColor = "#f53838";
		} else {
			planCard[j].style.borderColor = "#dddddd";
		}
	}
});
