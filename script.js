const letter = document.querySelector(".container");

const card = document.querySelector(".card");
function onmouseEnter() {
  card.style.transform = "translateY(-90px)";
}

function onmouseOut() {
  card.style.transform = "translateY(0px)";
}

letter.addEventListener("mouseenter", onmouseEnter);
letter.addEventListener("mouseleave", onmouseOut);
