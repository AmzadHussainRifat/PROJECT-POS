document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("inputField");
    const keys = document.querySelectorAll(".key");
    const submitButton = document.getElementById("submit");
    const backspaceButton = document.getElementById("backspace");

    // Handle number key presses
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
    });

    // Function to enter fullscreen mode
    function enterFullScreen() {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
        }
    }

    // When "E" button is pressed, enter fullscreen mode
    submitButton.addEventListener("click", function () {
        enterFullScreen();
    });

    // Optional: Exit fullscreen when user presses Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    });
});
