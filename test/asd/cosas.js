let let datos = {
    nombre: "",
    apellido: "",
    edad: 0,
    entiende: ""
};

function datosUsuario() {
    datos.nombre = prompt("Ingrese su nombre: ");
    datos.apellido = prompt("Ingrese su apellido: ");
    datos.edad = prompt("Ingrese su edad: ");
    datos.entiende = confirm("¿Entiende el tema? (Aceptar = Si / Rechazar = No): ")
}

datosUsuario()

console.log(datos);

//---------------- uso del onclick ---------------------------//

let testClick = document.querySelector('#miBoton')

testClick.addEventListener('click', () => {
    alert('Hicimos click en el boton')
})

let testClick = document.querySelector('#miBoton');
    testClick.onclick = function() {
        alert('Hicimos click en el botón');
    };

let testClick = document.querySelector('#miBoton')

testClick.addEventListener('click', () => {
    testClick.style.backgroundColor = prompt('Elegi un color')  
})

//---------------- uso del mouseover -------------------------//

let cambiarBoton = document.querySelector('#cambiar-tema') 

cambiarBoton.addEventListener('mouseover', () => {
    cambiarBoton.style.backgroundColor = 'blue'; 
    cambiarBoton.style.color = 'white'; 
});

cambiarBoton.addEventListener('mouseout', () => {
    cambiarBoton.style.backgroundColor = 'red'; 
    cambiarBoton.style.color = 'white'; 
});

document.onkeydown = function(e) {
    let key = e.key;
    let aparece = document.querySelector('#caja3');
    if (key === 'a' || key === 'A') {
        aparece.classList.toggle('oculto');
    }
};

document.addEventListener('keydown', e => {
    let key = e.key;
    let aparece = document.querySelector('#caja3');
    if (key == 'a' || key == 'A') {
        aparece.classList.toggle('oculto');
    }
})

let aparece = document.querySelector('#caja3');

aparece.addEventListener('mouseover', () => {
    aparece.classList.add('oculto');
});

aparece.addEventListener('mouseout', () => {
    aparece.classList.remove('oculto');
});

// aparece.addEventListener('mouseenter', () => {
//     aparece.classList.add('oculto');
// });

// aparece.addEventListener('mouseleave', () => {
//     aparece.classList.remove('oculto');
// });

const enlace = document.getElementById('miEnlace');

enlace.addEventListener('click', (event) => {
    event.preventDefault();
    alert('El enlace ha sido desactivado.');
});