window.onload = function () {
    fetch("https://rickandmortyapi.com/api/character")
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (data) {
            console.log(data.results);
            data.results.forEach(element => {
                let item = `<li class="items_lista">
                <h3 class="nombre_personaje">${element.name}</h3>
                <img src= "${element.image}" alt="${element.name}" class="imagen">
                </li>`;
                document.querySelector("ul").innerHTML += item;
            });
        });
}