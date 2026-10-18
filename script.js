
const startButton = document.getElementById("start-designing");
const designer = document.getElementById("designer");

startButton.addEventListener("click", function () {
  designer.hidden = false;
  designer.scrollIntoView({ behavior: "smooth" });
});

