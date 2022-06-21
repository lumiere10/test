// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const blocks = document.querySelectorAll(".benefits__item.not-mob");
const blocksWrapp = document.querySelector(".benefits");
const blockAfter = document.querySelector(".benefits__item:not(.not-mob)");
btnClose.style.opacity = "0";
blockAfter.classList.add('hideAfter')

btnOpen.addEventListener('click', function() {
	this.style.opacity = "0";
	btnClose.style.opacity = "1";
	blocks.forEach(function(item) {
		item.classList.add('show');
	})
	blockAfter.classList.remove('hideAfter');
	blocksWrapp.style.position = "relative"
	blocksWrapp.style.left = "0%"
	blocksWrapp.style.transform = "translateX(-0%)"
})
btnClose.addEventListener('click', function() {
	this.style.opacity = "0";
	btnOpen.style.opacity = "1";
	blocks.forEach(function(item) {
		item.classList.remove('show')
	})
	blockAfter.classList.add('hideAfter')
	blocksWrapp.style.position = "absolute"
	blocksWrapp.style.left = "50%"
	blocksWrapp.style.transform = "translateX(-50%)"
})