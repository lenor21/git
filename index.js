const result = document.querySelector("#result");
const myInput = document.querySelector("#myInput");
const myButton = document.querySelector("#myButton");
const reset = document.querySelector("#reset");

myButton.addEventListener("click", () => {
  if (myInput.value % 2 == 0) {
    result.textContent = `Result: ${"Even"}`;
  } else if (myInput.value % 1 == 0) {
    result.textContent = `Result: ${"Odd"}`;
  } else if (typeof myInput.value === "string") {
    result.textContent = `Result: ${"Invalid!"}`;
  }
});

reset.addEventListener("click", () => {
  result.textContent = `Result:`;
  myInput.value = "";
});

// const input = window.prompt("Input a number");

// function evenOrOdd(number) {
//   if (number % 2 == 0) {
//     console.log("The number is even");
//   } else if (number % 1 == 0) {
//     console.log("The number is odd");
//   } else if (typeof input === "string") {
//     console.log("Invalid!");
//   }
// }

// evenOrOdd(input);
