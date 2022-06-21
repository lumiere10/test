const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const blocks = document.getElementsByClassName(".benefits__item.not-mob");

btnOpen.onclick = function() {
  blocks.style.display = "block";
}