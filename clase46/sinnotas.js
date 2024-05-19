
const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
    const helpMessage = document.getElementById(`help_${input.id}`);
    input.addEventListener('focus', () => {
        helpMessage.classList.remove('hidden_item');
        helpMessage.classList.add('visible_item');
    });
    input.addEventListener('blur', () => {
        helpMessage.classList.remove('visible_item');
        helpMessage.classList.add('hidden_item');
    });
});

// Limpiar campos del formulario
const clearButton = document.getElementById('clear_fields');

clearButton.addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = '';
        const helpMessage = document.getElementById(`help-${input.id}`);
        helpMessage.classList.remove('visible_item');
        helpMessage.classList.add('hidden_item');
    });
});


// Obtener el input de la contraseña y el mensaje de ayuda
const passwordInput = document.getElementById('password');
const helpMessage = document.getElementById('help_password');

// Reglas de validación
const rules = {
    length: /(?=.{8,})/,
    uppercase: /(?=.*[A-Z])/,
    lowercase: /(?=.*[a-z])/,
    number: /(?=.*\d)/,
    special: /(?=.*[!@#$%^&*])/
};

// Mensajes de ayuda
const messages = {
    length: 'Debe tener al menos 8 caracteres.',
    uppercase: 'Debe incluir una letra mayúscula.',
    lowercase: 'Debe incluir una letra minúscula.',
    number: 'Debe incluir un número.',
    special: 'Debe incluir un símbolo especial.'
};

// Función para validar la contraseña
const validatePassword = (password) => {
    let valid = true;
    let feedback = '';

    for (const [rule, regex] of Object.entries(rules)) {
        if (!regex.test(password)) {
            valid = false;
            feedback += `<li>${messages[rule]}</li>`;
        }
    }

    return { valid, feedback };
};

// Añadir evento de entrada para la validación en tiempo real
passwordInput.addEventListener('input', () => {
    const { valid, feedback } = validatePassword(passwordInput.value);

    if (valid) {
        passwordInput.classList.remove('invalid');
        passwordInput.classList.add('valid');
        helpMessage.innerHTML = '<p>Contraseña válida</p>';
    } else {
        passwordInput.classList.remove('valid');
        passwordInput.classList.add('invalid');
        helpMessage.innerHTML = `<ul>${feedback}</ul>`;
    }

    helpMessage.classList.remove('hidden_item');
    helpMessage.classList.add('visible_item');
});