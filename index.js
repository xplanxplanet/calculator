const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".btn-clear");
const equal = document.querySelector(".btn-equal");
const btnDelete = document.querySelector(".btn-delete");

buttons.forEach(function (button) {
  button.addEventListener("click", function (i) {
    const value = i.target.dataset.num;
    screen.value += value;
  });
});

equal.addEventListener("click", function () {
  if (screen.value === "") {
    screen.value = "";
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  }
});

clear.addEventListener("click", function () {
  screen.value = "";
});

btnDelete.addEventListener("click", function () {
  screen.value = screen.value.slice(0, -1);
});
