"use strict";
const btn = document.querySelector(".btn");
const color = document.querySelector(".hex");

btn.addEventListener("click", function () {
  let hx = 0;

  let hexNums = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let hexCode = "";

  for (let i = 1; i <= 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexNums.length);
    hexCode += hexNums[randomIndex];
  }

  color.textContent = "#" + hexCode;
  document.querySelector("body").style.backgroundColor = "#" + hexCode;
});
