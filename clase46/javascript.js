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
    const coincide = confirmPasswordInput.value === passwordInput.value;
    confirmPasswordInput.classList.toggle('valid', coincide );
    confirmPasswordInput.classList.toggle('invalid', !coincide );
    helpConfirmPassword.classList.toggle('visible_item', !coincide );
    helpConfirmPassword.classList.toggle('hidden_item', coincide );
}

//validar otros inputs
const validationRules = {
    name: value => /^[A-Za-z\s]+$/.test(value) && value !== "",
    lastname: value => /^[A-Za-z\s]+$/.test(value) && value !== "",
    age: value => !isNaN(value) && parseInt(value) >= 18 && parseInt(value) <= 100 && value !== "",
    birthdate: value => {
        const birthdate = new Date(value);
        const today = new Date();
        const ageFromBirthdate = today.getFullYear() - birthdate.getFullYear();
        return !isNaN(ageFromBirthdate) && ageFromBirthdate >= 18 && ageFromBirthdate <= 100 && value !== "";
    },
    email: value => /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i.test(value) && value !== ""
};


let eventosEscuchados = ["input", "focus", "blur"];
inputs.forEach(input => {
    eventosEscuchados.forEach(evento => input.addEventListener( evento, () => {
        validateInput(input);
    })) 
});

function validateInput(input) {
    const isValid = validationRules[input.id](input.value.trim());
    input.classList.toggle('invalid', !isValid);
    input.classList.toggle('valid', isValid);
    const helpInpunt = document.getElementById(`help_${input.id}`);
    helpInpunt.classList.toggle('hidden_item', isValid);
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