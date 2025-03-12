// JavaScript code for form validation
// Prevent form from submitting
let form = document.getElementById("myForm")

form.addEventListener('submit', function (event) {
    validateInput();
    event.preventDefault();
});
  
function validateInput() {
    // Retrieve the input field value
    let inputValue = document.getElementById("inputField").value;

    // Regular expression pattern for alphanumeric input
    let regex = /^[A-Za-z0-9]+$/;

    // Check if the input value matches the pattern
    if (regex.test(inputValue)) {
        // Valid input: display confirmation and submit the form
        alert("Valid input. Form submitted.");
        return true;
    } else {
        alert("Invalid input:Please enter only alphanumeric characters.");
        return false;
    }
}
