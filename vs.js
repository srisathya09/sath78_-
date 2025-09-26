document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission for validation

    // Get input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
    } else {
        alert("Form submitted successfully!");
        // You can proceed to send the data to the server here
        // Example: sendFormDataToServer(name, email, message);
    }
});
