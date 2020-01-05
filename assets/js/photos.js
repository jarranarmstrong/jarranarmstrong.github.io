var modal = document.getElementById("modal");

var imgs = document.getElementsByTagName("img");

var currentModalImage = undefined;
var currentModalIndex = undefined;

function checkButtonBounds() {
	if (currentModalIndex == 0) {
		prevButton.style.display = "none";
	}
	else {
		prevButton.style.display = "block";
	}

	if (currentModalIndex == (imgs.length - 2)) {
		nextButton.style.display = "none";
	}
	else {
		nextButton.style.display = "block";
	}
}

for (let i = 0; i < imgs.length; i++) {
	let img = imgs[i];

	img.onclick = () => {
		currentModalIndex = i;

		currentModalImage = img.cloneNode(false);
		currentModalImage.onclick = undefined;
		currentModalImage.className = "modal-img";
		
		modal.style.display = "flex";
		modal.appendChild(currentModalImage);

		checkButtonBounds();
	};
}


var closeButton = document.getElementById("close-button");

closeButton.onclick = () => {
	modal.style.display = "none";


	modal.removeChild(currentModalImage);
	currentModalImage = undefined;
	currentModalIndex = undefined;
}

var prevButton = document.getElementById("prev-button");

prevButton.onclick = () => {
	if (currentModalIndex == 0) {
		return;
	}
	modal.removeChild(currentModalImage);
	currentModalImage = imgs[currentModalIndex - 1].cloneNode(false)
	currentModalIndex -= 1;

	modal.appendChild(currentModalImage);

	checkButtonBounds();
}

var nextButton = document.getElementById("next-button");

nextButton.onclick = () => {
	if (currentModalIndex == (imgs.length - 2)) {
		return;
	}

	modal.removeChild(currentModalImage);
	currentModalImage = imgs[currentModalIndex + 1].cloneNode(false)
	currentModalIndex += 1;

	modal.appendChild(currentModalImage);

	checkButtonBounds();
}