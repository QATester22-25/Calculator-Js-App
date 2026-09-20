const display = document.getElementById("display");

const appendToDisplay = (input) => {
  display.value += input;
};

const clearDisplay = () => {
  display.value = "";
  display.style.color = "white";
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "E";
    display.style.color = "red";
  }
};
