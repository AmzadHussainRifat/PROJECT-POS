document.addEventListener("DOMContentLoaded", function () {
    // Function to get cookie value by name
    function getCookie(name) {
        let cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            let [cookieName, cookieValue] = cookie.split("=");
            if (cookieName === name) {
                return decodeURIComponent(cookieValue); // Decode to handle special characters
            }
        }
        return null; // Return null if cookie doesn't exist
    }

    // Get the value of the "name" cookie
    let username = getCookie("name");

    // If the cookie exists, update the welcome text
    if (username) {
        let welcomeTextDiv = document.querySelector(".welcome-text");
        welcomeTextDiv.textContent = `Hello, ${username}`;
    }
});
