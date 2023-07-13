const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
    return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
});

// in JS the value of an input element is always a string!
// no matter which type of input is