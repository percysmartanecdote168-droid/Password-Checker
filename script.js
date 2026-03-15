// 1. Select the elements from the HTML using their classes or IDs
const passwordForm = document.querySelector('.passwordForm');
const passwordInput = document.querySelector('#password');
const resultDiv = document.querySelector('.result');

// 2. Add an "Event Listener" to watch for when the user clicks the button
passwordForm.addEventListener('submit', function (event) {

    // This prevents the page from refreshing (the default behavior of forms)
    // If the page refreshes, our result disappears instantly!
    event.preventDefault();

    // Get the current value from the input field
    const password = passwordInput.value;

    // 3. Define our logic for password strength
    let strength = "";
    let color = "";

    // Check for "Strong" criteria: 
    // At least 8 chars AND has a number AND has a special character
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length >= 12 && hasNumber && hasSpecial) {
        strength = "Very Strong! (Great job!)";
        color = "#2ecc71"; // Green
    }
    else if (password.length >= 8 && hasNumber) {
        strength = "Medium Strength. (Add symbols to make it stronger)";
        color = "#ffcc00"; // Yellow/Gold
    }
    else if (password.length > 0) {
        strength = "Weak. (Try a longer password with numbers)";
        color = "#e7e954"; // Red
    }
    else {
        strength = "Please enter a password first!";
        color = "#ff0000";
    }
    // Grab the checkbox and the password input
    const showPwCheckbox = document.querySelector('#show-pw');

    // Add a listener to detect when the user clicks the checkbox
    showPwCheckbox.addEventListener('change', function () {
        // If the checkbox is checked, change type to "text"
        // Otherwise, change it back to "password"
        if (this.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });

    // 4. Output the result into that empty <div class="result">
    resultDiv.textContent = strength;
    resultDiv.style.color = color;
    resultDiv.style.fontWeight = "bold";
});