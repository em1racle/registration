document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const registerButton = document.getElementById('register-button');
    const showPasswordCheckbox = document.getElementById('show-password');

    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    let isUsernameValid = false;
    let isEmailValid = false;
    let isPasswordValid = false;
    let isConfirmPasswordValid = false;

    function validateUsername() {
        const value = username.value.trim();
        if (value.length < 3) {
            showError(usernameError, 'Имя пользователя должно содержать не менее 3 символов');
            isUsernameValid = false;
        } else {
            clearError(usernameError);
            isUsernameValid = true;
        }
        updateRegisterButtonState();
    }

    function validateEmail() {
        const value = email.value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(value)) {
            showError(emailError, 'Введите корректный адрес электронной почты');
            isEmailValid = false;
        } else {
            clearError(emailError);
            isEmailValid = true;
        }
        updateRegisterButtonState();
    }

    function validatePassword() {
        const value = password.value;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordPattern.test(value)) {
            showError(passwordError, 'Пароль должен содержать не менее 8 символов, включая хотя бы одну заглавную букву, одну строчную букву и одну цифру');
            isPasswordValid = false;
        } else {
            clearError(passwordError);
            isPasswordValid = true;
        }
        updateRegisterButtonState();
    }

    function validateConfirmPassword() {
        const passwordValue = password.value;
        const confirmPasswordValue = confirmPassword.value;
        if (passwordValue !== confirmPasswordValue) {
            showError(confirmPasswordError, 'Пароли не совпадают');
            isConfirmPasswordValid = false;
        } else {
            clearError(confirmPasswordError);
            isConfirmPasswordValid = true;
        }
        updateRegisterButtonState();
    }

    function updateRegisterButtonState() {
        registerButton.disabled = !(isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid);
    }

    function showPasswords() {
        if (showPasswordCheckbox.checked) {
            password.type = 'text';
            confirmPassword.type = 'text';
        } else {
            password.type = 'password';
            confirmPassword.type = 'password';
        }
    }

    function showError(element, message) {
        element.textContent = message;
        element.classList.add('error');
    }

    function clearError(element) {
        element.textContent = '';
        element.classList.remove('error');
    }

    username.addEventListener('input', validateUsername);
    email.addEventListener('input', validateEmail);
    password.addEventListener('input', validatePassword);
    confirmPassword.addEventListener('input', validateConfirmPassword);
    showPasswordCheckbox.addEventListener('change', showPasswords);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Регистрация успешно завершена!');
    });
});
