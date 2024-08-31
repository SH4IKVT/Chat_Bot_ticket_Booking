// function validateForm() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var subject = document.getElementById("subject").value;
//     var message = document.getElementById("message").value;
  
//     if (name == "" || email == "" || subject == "" || message == "") {
//       alert("Please fill in all required fields.");
//       return false;
//     }
  
//     // Add more validation rules here if needed (e.g., email format check)
//     return true;
// }

// document.querySelector(".send").onsubmit = () => {
//     if(validateForm()){
//         window.location.href="index.html";
//     }
// };






// contact.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Email validation using a basic regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If validation passes, you can proceed with form submission
        alert("Thank you for contacting us, " + name + "! We will get back to you soon.");

        // Optionally, you can reset the form after submission
        form.reset();
        window.location.href = "index.html";
    });
});
