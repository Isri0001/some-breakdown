
// Løsning 3
const css = document.querySelector("#lightmode");
console.log(css.href);

const btn3 = document.querySelector("#switchBtn3");
btn3.addEventListener("click", changeMode3);
const switchtext3 = document.querySelector("#switchtext3");

function changeMode3() {
  if (css.href.includes("css/customdark.css")) {
    css.href = "css/custom.css";
    switchtext3.textContent = "Dark Mode";
  } else {
    css.href = "css/customdark.css";
    switchtext3.textContent = "Light Mode";
  }
}