// Get elements from the DOM
const billInput = document.getElementById("billAmount");
const tipSelect = document.getElementById("tipPercentage");
const calculateBtn = document.getElementById("calculate");
const totalDisplay = document.getElementById("totalAmount");
const themeToggle = document.getElementById("themeToggle");
const form = document.querySelector(".calculator");

// Function to calculate the tip and total amount
function calculateTotal(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the bill amount and tip percentage from the inputs
  let bill = Number(billInput.value);
  let tip = Number(tipSelect.value);

  // Show a helpful message if the user types invalid values
  if (isNaN(bill) || isNaN(tip) || bill < 0 || tip < 0) {
    totalDisplay.innerText = "Please enter valid positive numbers.";
    return;
  }

  // Calculate the total amount
  let total = bill + (bill * tip / 100);

  // Display the total amount with two decimal places
  totalDisplay.innerText = `Total: $${total.toFixed(2)}`;
}

// Function to toggle light/dark mode
function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i> Switch to Dark Mode';
  } else {
    document.body.classList.add("dark");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Switch to Light Mode';
  }
}

// Event listeners
form.addEventListener("submit", calculateTotal);
themeToggle.addEventListener("click", toggleTheme);
