const lungs = document.getElementById("lungs");

function inhale() {
  lungs.classList.remove("small");
  lungs.classList.add("big");
}

function exhale() {
  lungs.classList.remove("big");
  lungs.classList.add("small");
}
