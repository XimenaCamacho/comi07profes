
let usandoPrompt = prompt()
console.log(usandoPrompt);
//window.confirm();
// let resultado = window.confirm('Pone aceptar');
//     if (resultado === true) {
//             window.alert('No se rompio nada');
//         } else { 
//             window.alert('Tampoco rompiste nada');
//         }

// document.querySelector('article').innerHTML = "Cambiamos el texto"

let selector = document.querySelectorAll('article');

selector.forEach( elemento => {
    elemento.innerHTML += "Cambiamos el texto"
})
// let selector2 = document.querySelectorAll('article');
// selector2.forEach(elementos => {
//     elementos.classList.add('caja2')
// })