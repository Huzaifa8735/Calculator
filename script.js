let lightMode = document.querySelector(".light-mode");
let container = document.querySelector(".container");

lightMode.addEventListener("click", () => {
  lightMode.classList.toggle("active");
  container.classList.toggle("active");
});

let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let result = "";

let array = Array.from(buttons);
array.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      result = eval(result);
      input.value = result;
    } else if (e.target.innerHTML == "AC") {
      result = "";
      input.value = result;
    } else if (e.target.innerHTML == "DE") {
      result = result.toString().slice(0, -1);
      input.value = result;
    } else {
      result += e.target.innerHTML;
      input.value = result;
    }
  });
});
