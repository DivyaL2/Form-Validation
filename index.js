function validateForm() {
    let isValid = true;

    // Get form elements
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Clear previous error messages
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('phoneError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('confirmPasswordError').style.display = 'none';

    // Validate full name
    if (fullName.length < 5) {
        document.getElementById('nameError').innerText = 'Name must not be less than 5 characters';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Validate email
    if (!email.includes('@')) {
        document.getElementById('emailError').innerText = 'Enter a valid email';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Validate phone number
    const phonePattern = /^\d{10}$/;
    if (phoneNumber === '1234567890' || !phonePattern.test(phoneNumber)) {
        document.getElementById('phoneError').innerText = 'Enter a valid 10-digit phone number';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    // Validate password
    if (password === 'password' || password.length < 8 || password === fullName) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long and not be "password" or your name';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}
