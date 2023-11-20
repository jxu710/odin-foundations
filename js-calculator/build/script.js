// Create a single instance of Calculator
const calculator = new Calculator();

// Capture user input
const buttons = document.querySelector("#calculator-buttons");
buttons.addEventListener("click", function (event) {
  // If clicked other area besides buttons, return
  if (event.target.type !== "button") return;

  // Call the calculateInput method on the existing calculator instance
  calculator.calculateInput(event.target.value);
});

function Calculator() {
  this.display = "0";
  this.previousTotal = null;

  this.calculateInput = function (value) {
    // Check if the user clicked special buttons
    switch (value) {
      case "AC":
        // Clear the screen
        this.display = "0";
        this.previousTotal = null;
        this.showOnScreen(this.display);
        break;
      case "=":
        // Calculate the answer
        this.getAnswer(this.display);
        break;
      case ".":
        // Add a decimal point
        if (this.display === "0") {
          this.addToDisplay("0.");
        } else {
          this.addToDisplay(value);
        }
        break;
      default:
        // Add a number to the display
        this.addToDisplay(value);
    }
  };

  this.addToDisplay = function (value) {
    if (this.display === "0") {
      this.display = "";
    } else if (this.previousTotal !== null) {
      this.display = this.previousTotal;
      this.previousTotal = null;
    }

    // Check if user enters an invalid combination of operations
    const lastChar = this.display.slice(-1);
    if (isNaN(lastChar) && isNaN(value)) return;

    this.display += value;
    this.showOnScreen(this.display);
  };

  this.showOnScreen = function (display) {
    const screen = document.querySelector("#display-screen");
    screen.value = display;
  };

  this.getAnswer = function (display) {};
}
