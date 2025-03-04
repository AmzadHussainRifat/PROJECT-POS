// Show the custom keypad when any table button is clicked
const tableButtons = document.querySelectorAll('button[id^="T"]'); // Select all table buttons

// Function to show the keypad
function showKeypad() {
    document.getElementById("keypad").style.display = "block"; // Show keypad
}

// Add event listeners to all table buttons
tableButtons.forEach(button => {
    button.addEventListener('click', () => {
        showKeypad();
    });
});

// Append number to the input field
function appendToInput(num) {
    const userInput = document.getElementById("userInput");
    userInput.value += num;
}

// Clear the input field
function clearInput() {
    document.getElementById("userInput").value = "";
}

// Submit the input
function submitInput() {
    const userInput = document.getElementById("userInput").value;
    if (userInput) {
        alert(`Number of users for this table: ${userInput}`);
        document.getElementById("keypad").style.display = "none"; // Close the keypad
        document.getElementById("userInput").value = ""; // Clear the input field
    } else {
        alert("Please enter a valid number.");
    }
}
