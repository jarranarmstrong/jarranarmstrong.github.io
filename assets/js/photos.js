var modal = document.getElementById("modal");

var imgs = document.getElementsByTagName("img");

var currentModalImage = undefined;

for (let img of imgs) {
	img.onclick = () => {
		currentModalImage = img.cloneNode(false);
		currentModalImage.onclick = undefined;
		currentModalImage.className = "modal-img";
		
		modal.style.display = "flex";
		modal.appendChild(currentModalImage);
	};
}


var closeButton = document.getElementById("close-button");

closeButton.onclick = () => {
	modal.removeChild(currentModalImage);
	currentModalImage = undefined;
	
	modal.style.display = "none";
}