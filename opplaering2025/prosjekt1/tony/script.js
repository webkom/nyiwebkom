const root = document.documentElement;

const guessInput = document.getElementById("gjett");
const state = document.getElementById("state");

const numInput = document.getElementById("numInput")
const numButton = document.getElementById("numButton")
const numText = document.getElementById("num")
let num = ""

guessInput.addEventListener("input", (val) => {
  console.log(val);
  if (!val.data) {
    for (i = 1; i <= 3; i++) {
      root.style.setProperty(`--card-${i}`, "collapse");
    }
    state.innerText = "";

    return;
  }

  if (val.data === "1") {
    for (i = 1; i <= 3; i++) {
      root.style.setProperty(`--card-${i}`, "visibile");
    }
    state.innerText = "Riktig!";
    state.style.color = "green";
    return;
  }

  if (val.data === "2") {
    root.style.setProperty("--card-2", "visible");
    state.innerText = "Feil!";
    state.style.color = "red";
    return;
  }

  if (val.data === "3") {
    root.style.setProperty("--card-3", "visible");
    state.innerText = "Feil!";
    state.style.color = "red";
    return;
  }

  alert("assa var ganske tydelig med inputsene 1,2,3 da sjef");
});

numInput.addEventListener("input", (val) => {
  num = val.data
})

numButton.addEventListener("click", () => {
  if (num === "") {
    numText.innerText = "gjett et tall pls"
    return
  }

  numText.innerText = `tallet du tenker på er... \n ${num}`
})