// Selección de todos los inputs
const inputs = document.querySelectorAll('input');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const clearButton = document.getElementById('clear_fields');
const helpMessage = document.getElementById('help_password');

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
passwordInput.addEventListener('input', () => {
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
    // Validar confirmación de contraseña
    validateConfirmPassword();
});

// Validar confirmación de contraseña
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

function validateConfirmPassword() {
    const helpConfirmPassword = document.getElementById('help_confirm_password');
    if (confirmPasswordInput.value === passwordInput.value) {
        confirmPasswordInput.classList.remove('invalid');
        confirmPasswordInput.classList.add('valid');
        helpConfirmPassword.classList.remove('visible_item');
        helpConfirmPassword.classList.add('hidden_item');
    } else {
        confirmPasswordInput.classList.remove('valid');
        confirmPasswordInput.classList.add('invalid');
        helpConfirmPassword.classList.remove('hidden_item');
        helpConfirmPassword.classList.add('visible_item');
    }
}

// Validar otros campos
inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateInput(input);
    });

    input.addEventListener('focus', () => {
        if (input.value.trim() === '') {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }
    });

    input.addEventListener('blur', () => {
        if (input.value.trim() !== '') {
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }
    });
});

function validateInput(input) {
    let isValid = true;

    if (input.id === 'name' || input.id === 'lastname') {
        isValid = input.value.trim() !== '';
    } else if (input.id === 'age') {
        const age = parseInt(input.value, 10);
        isValid = age >= 18 && age <= 100;
    } else if (input.id === 'birthdate') {
        const birthdate = new Date(input.value);
        const today = new Date();
        const age = today.getFullYear() - birthdate.getFullYear();
        isValid = age >= 18 && age <= 100;
    } else if (input.id === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailPattern.test(input.value);
    }

    if (isValid) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

// Limpiar campos del formulario
clearButton.addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = '';
        const helpMessage = document.getElementById(`help_${input.id}`);
        if (helpMessage) {
            helpMessage.classList.remove('visible_item');
            helpMessage.classList.add('hidden_item');
        }
        input.classList.remove('valid');
        input.classList.remove('invalid');
    });

    for (const message of Object.values(passwordMessages)) {
        message.classList.remove('valid');
        message.classList.add('invalid');
    }

    const helpConfirmPassword = document.getElementById('help_confirm_password');
    helpConfirmPassword.classList.remove('visible_item');
    helpConfirmPassword.classList.add('hidden_item');
    // Código de SweetAlert
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: "Deseas eliminar todos los datos?",
        text: "Deberas volver a completar el formulario",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, borrar!",
        cancelButtonText: "No borrar!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: "Borrado!",
                text: "Los datos han sido eliminados",
                icon: "success"
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
                title: "No borraste los datos",
                text: "Puedes seguir con el registro",
                icon: "error"
            });
        }
    });
});

// Mostrar y ocultar mensajes de ayuda en focus y blur
inputs.forEach(input => {
    const helpMessage = document.getElementById(`help_${input.id}`);
    if (helpMessage) {
        input.addEventListener('focus', () => {
            helpMessage.classList.remove('hidden_item');
            helpMessage.classList.add('visible_item');
        });
        input.addEventListener('blur', () => {
            helpMessage.classList.remove('visible_item');
            helpMessage.classList.add('hidden_item');
        });
    }
});

//-----------------------Jugando con el ojito en el pass ---------------------------//

const passwordInputEye = document.querySelector('.pass');
const passwordEye = document.querySelector('.bx');

passwordEye.addEventListener('click', e => {
    if (passwordInputEye.type == 'password') {
        passwordInputEye.type = "text";
        passwordEye.classList.remove('bx-hide');
        passwordEye.classList.add('bx-show-alt');
    } else {
        passwordInputEye.type = "password";
        passwordEye.classList.remove('bx-show-alt');
        passwordEye.classList.add('bx-hide');
    }
})