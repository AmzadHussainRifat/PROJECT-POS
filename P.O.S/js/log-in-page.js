document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("inputField");
    const keys = document.querySelectorAll(".key");
    const submitButton = document.getElementById("submit");
    const backspaceButton = document.getElementById("backspace");

    const correctPassword = "1262"; //REMOVE THIS !!

    // Handle keypad input
    keys.forEach(key => {
        key.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            if (value) {
                inputField.value += value;
            }
        });
    });

    // Handle backspace button
    backspaceButton.addEventListener("click", function () {
        inputField.value = inputField.value.slice(0, -1);
        inputField.style.border = "1px solid #ccc"; // Reset border color
    });

    // RMOVE THIS!!!
    submitButton.addEventListener("click", function () {
        if (inputField.value === correctPassword) {
            setCookie("name", "Rifat", 1); // Set cookie value to "rifat"
            window.location.href = "HOME-PAGE.html"; // Redirect to home page
        } else {
            inputField.style.border = "2px solid red"; // Highlight input field in red
            inputField.value = ""; // Clear input field
            inputField.placeholder = "Incorrect Password! Try Again"; // Show error message
        }
    });

    // Enable Enter key to submit
    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            submitButton.click();
        }
    });

    // REMOVE THIS!!!
    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Expiry time
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    }
});
