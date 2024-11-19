const texto = document.getElementById("especialidade-texto");
const startBtn = document.getElementById("startAnimationBtn");

startBtn.addEventListener("click", () => {
    texto.style.transform = "translateX(-100%)"; // Move a palavra da direita para a esquerda
});
