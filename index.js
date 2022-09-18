const input = window.prompt("Input a number");

function evenOrOdd(number) {
  if (number % 2 == 0) {
    console.log("The number is even");
  } else if (number % 1 == 0) {
    console.log("The number is odd");
  } else if (typeof input === "string") {
    console.log("Invalid!");
  }
}

evenOrOdd(input);
