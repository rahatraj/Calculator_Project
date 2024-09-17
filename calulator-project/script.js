let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".input");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.textContent.trim();
    if (buttonText == "=") {
      try {
        string = string.replace(/x/g, "*");
        string = string.replace(/÷/g, "/");
        string = eval(string);
        input.value = string;
      } catch (error) {
        input.value = "error";
        console.log(error);
        string = "";
      }

    } else if (buttonText == "AC") {
      string = "0";
      input.value = string;
      string = ""

    } else if (buttonText == "%") {
      try {
        string = handlePercentage(string);
        input.value = string;
      } catch (error) {
        input.value = "error";
        console.log(error);
        string = "";
      }

    } else if (e.target.tagName === 'IMG' && e.target.id == "clear") {
      string = string.slice(0, -1);
      input.value = string;

    } else {
      string = string + buttonText;
      input.value = string;
    }
  });
});

function handlePercentage(expression) {
  let lastNumberMatch = expression.match(/(\d+(\.\d+)?)(?=[^\d.]*$)/);
  if (lastNumberMatch) {
    let lastNumber = lastNumberMatch[0];
    let percentageValue = lastNumber / 100;
    return expression.replace(lastNumber, percentageValue);
  }

  return expression;
}
