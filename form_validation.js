document.getElementById("myForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function(element) {
        element.style.display = 'none';
    });

    // Validate name
    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        document.getElementById("nameError").style.display = 'block';
        isValid = false;
    }

    // Validate email
    if (!isValidEmail(email)) {
        document.getElementById("emailError").innerText = "Invalid email address.";
        document.getElementById("emailError").style.display = 'block';
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long.";
        document.getElementById("passwordError").style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
