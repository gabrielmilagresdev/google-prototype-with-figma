const input = document.getElementById("searchhere");
const box = document.getElementById("box");
const square = document.getElementById("square");
const botao = document.getElementById("buttonsearch");
let clicado = false;

input.addEventListener("input", () => {
  if (input.value.trim().length > 0) {
    box.style.display = "block";
    square.classList.add("border90");
  } else {
    box.style.display = "none";
    square.classList.remove("border90");
  }
});
botao.addEventListener("click", () => {
clicado = true;
});