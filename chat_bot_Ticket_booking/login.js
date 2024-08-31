// login.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form values
        const username = document.querySelector("input[name='username']").value.trim();
        const password = document.querySelector("input[name='password']").value.trim();

        // Basic validation
        if (username === "" || password === "") {
            alert("Please enter both username and password.");
            return;
        }

        // Simulate a login process (this is where you would handle authentication)
        // For now, just display an alert
        alert("Welcome, " + username + "! You have successfully logged in.");
        window.location.href = "index_2.html";
        // window.open("https://chatgpt.com/", "_blank");
        // Optionally, you can redirect the user after successful login
        // window.location.href = "dashboard.html";
    });
});
