const startButton = document.getElementById("start-designing");
const designer = document.getElementById("designer");

startButton.addEventListener("click", function () {
  designer.hidden = false;
  designer.classList.remove("show");

  // Restart the entrance animation
  void designer.offsetWidth;

  designer.classList.add("show");
  designer.scrollIntoView({ behavior: "smooth" });
});
