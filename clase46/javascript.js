// Selección de todos los inputs
const inputs = document.querySelectorAll('input');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');

// Reglas de validación para la contraseña

const passwordRules = {
    length: /(?=.{8,})/,
    uppercase: /(?=.*[A-Z])/,
    lowercase: /(?=.*[a-z])/,
    number: /(?=.*\d)/,
    special: /(?=.*[!@#$%^&*"~])/,
};

// Mensajes de ayuda para la contraseña

const passwordMessages = {
    length: document.getElementById('length'),
    uppercase: document.getElementById('uppercase'),
    lowercase: document.getElementById('lowercase'),
    number: document.getElementById('number'),
    special: document.getElementById('special')
};

// Validación en tiempo real de la contraseña

passwordInput.addEventListener('input', function() {

    const password = passwordInput.value;

    for (const [rule, regex] of Object.entries(passwordRules)) {
        if (regex.test(password)) {
            passwordMessages[rule].classList.remove('invalid');
            passwordMessages[rule].classList.add('valid');
        } else {
            passwordMessages[rule].classList.remove('valid');
            passwordMessages[rule].classList.add('invalid');
        }
    }
})

// Validar confirmación de contraseña


// Limpiar campos del formulario