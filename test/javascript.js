

//--------------  Cambiar color del tema del sitio --------//

//----------------  Uso del prompt  --------------------------//

// let datos = {
//     nombre:"",
//     apellido:"",
//     edad:0,
//     conforme:""
// }

// function datosUsuario() {
//     datos.nombre = prompt('Ingrese su nombre: ')
//     datos.apellido = prompt("Ingrese su apellido: ");
//     datos.edad = parseInt(prompt("Ingrese su edad: "));
//     datos.conforme = confirm("¿Entiende el tema? (Aceptar = Si / Rechazar = No): ")
// }

// datosUsuario()

// console.log(datos);

//---------------- uso del onclick ---------------------------//

//let testClick = document.querySelector('#miBoton')

// testClick.onclick = function() {
//     alert('Hola mundo')
// }
// testClick.addEventListener('click',function() {
//     testClick.style.backgroundColor = prompt('Elegi un color: ')
// })



//---------------- uso del mouseover -------------------------//

// let cambiarBoton = document.querySelector('#cambiar-tema')

// cambiarBoton.addEventListener('mouseover', function() {
//     cambiarBoton.style.backgroundColor = 'blue';
//     cambiarBoton.style.color = 'white';
// })
// cambiarBoton.addEventListener('mouseout', () => {
//     cambiarBoton.style.backgroundColor = 'red';
//     cambiarBoton.style.color = 'white';
// })

//---------------- Uso del addEventListener ------------------//

const cambiarTema = document.querySelector('#cambiar-tema');

cambiarTema.addEventListener("click", alternarColorTema);

function alternarColorTema() {
    document.querySelector('#sitio').classList.toggle('darkMode')
}

//---------------------------   ---------------------------------------------------//

document.addEventListener('keydown', event => {
    let tecla = event.key;
    let aparece = document.querySelector('#caja3')
    if (tecla == 'q' || tecla == 'Q') {
        aparece.classList.toggle('oculto')
    }
})

//---------------- PreventDefault -------------------------------------------------//

let enlace = document.getElementById('miEnlace');

enlace.addEventListener('click', event => {
    console.log(event);
    event.preventDefault();
    alert('No te dejo ir')
})