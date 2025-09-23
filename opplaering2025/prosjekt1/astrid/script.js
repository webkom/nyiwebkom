const sound = new Audio("sounds/tarararara-301609.mp3"); 

const spot = document.getElementById("secret-spot");
spot.addEventListener("click", () => {
  sound.currentTime = 0;
  sound.play();
});