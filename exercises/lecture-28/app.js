// Написати JavaScript-код для обробки надсилання форми та виконання перевірки на стороні клієнта.

// Перевірка форми: потрібно отримати значення імені користувача, електронної пошти та пароля.

// Виконати базову перевірку:

// ім’я користувача не може бути пустим,
// електронна адреса має бути у правильному форматі,
// пароль має містити принаймні 8 символів,
// пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.
// Обробка помилок: якщо будь-яка перевірка не вдасться, потрібно показати відповідне повідомлення про помилку. Повідомлення про помилки відображаються в розділі errorMessages.

// Скидання форми: після успішної реєстрації потрібно скинути значення полів форми.


document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const errorMessages = document.getElementById("errorMessages");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();


        errorMessages.innerHTML = "";


        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();


        let isValid = true;

        if (username === "") {
            displayError("Username is required.");
            isValid = false;
        }

        if (email === "") {
            displayError("Email is required.");
            isValid = false;
        } else if (!isValidEmail(email)) {
            displayError("Invalid email format.");
            isValid = false;
        }

        if (password === "") {
            displayError("Password is required.");
            isValid = false;
        } else if (password.length < 8) {
            displayError("Password must be at least 8 characters long.");
            isValid = false;
        } else if (!isValidPassword(password)) {
            displayError("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
            isValid = false;
        }


        if (isValid) {
            alert("Form submitted successfully!");
            registrationForm.reset();
        }
    });

    
    function displayError(message) {
        const errorElement = document.createElement("p");
        errorElement.textContent = message;
        errorMessages.appendChild(errorElement);
    }

   
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
});





