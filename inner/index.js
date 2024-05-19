let pinturas = [
    {
        name: "La Mona Lisa",
        autor: "Leonardo da Vinci",
        year: 1503,
        description: "Retrato de una mujer con una expresión enigmática.",
        image:"https://upload.wikimedia.org/wikipedia/commons/7/73/Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg",
    },
    {
        name: "La última cena",
        autor: "Leonardo da Vinci",
        year: 1498,
        description:"Representación de la última cena de Jesús con sus discípulos.",
        image:"https://upload.wikimedia.org/wikipedia/commons/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg",
    },
    {
        name: "La noche estrellada",
        autor: "Vincent van Gogh",
        year: 1889,
        description: "Vista nocturna desde la ventana del asilo de Saint-Rémy-de-Provence.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    },
    {
        name: "El Grito",
        autor: "Edvard Munch",
        year: 1893,
        description: "Figura con una expresión de angustia bajo un cielo anaranjado.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/The_Scream_by_Edvard_Munch%2C_1893_-_Nasjonalgalleriet.png",
    },
    {
        name: "La joven de la perla",
        autor: "Johannes Vermeer",
        year: 1665,
        description: "Retrato de una joven con un pendiente de perla.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
    },
    {
        name: "Las Meninas",
        autor: "Diego Velázquez",
        year: 1656,
        description: "Escena de la infanta Margarita rodeada de sus sirvientes.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Las_Meninas_01.jpg",
    },
    {
        name: "El nacimiento de Venus",
        autor: "Sandro Botticelli",
        year: 1486,
        description: "Venus emergiendo del mar sobre una concha.",
        image:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    },
    {
        name: "Guernica",
        autor: "Pablo Picasso",
        year: 1937,
        description: "Protesta contra la guerra civil espyearla.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Mural_del_Gernika.jpg",
    },
    {
        name: "La persistencia de la memoria",
        autor: "Salvador Dalí",
        year: 1931,
        description: "Relojes derretidos en un paisaje desértico.",
        image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvbnljLTItMjY4LmpwZyIsInJlc2l6ZSwyMDAwLDIwMDAiXX0.kyLjy8saXwwv-oGbJBh7X0tgXbgo4aN-d5IcAxw7A2w.jpg",
    },
    {
        name: "El jardín de las delicias",
        autor: "Hieronymus Bosch",
        year: 1500,
        description: "Tríptico que representa el paraíso, la humanidad y el infierno.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/El_jard%C3%ADn_de_las_Delicias%2C_de_El_Bosco.jpg",
    },
    {
        name: "La ronda de noche",
        autor: "Rembrandt",
        year: 1642,
        description: "Grupo de guardias civiles en acción.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg",
    },
    {
        name: "La creación de Adán",
        autor: "Miguel Ángel",
        year: 1512,
        description: "Escena de la Capilla Sixtina donde Dios da vida a Adán.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    },
    {
        name: "El beso",
        autor: "Gustav Klimt",
        year: 1908,
        description: "Pareja abrazada envuelta en un manto dorado.",
        image:  "https://upload.wikimedia.org/wikipedia/commons/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
    },
    {
        name: "La libertad guiando al pueblo",
        autor: "Eugène Delacroix",
        year: 1830,
        description: "Alegoría de la Revolución Francesa de 1830.",
        image:"https://upload.wikimedia.org/wikipedia/commons/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg",
    },
    {
        name: "Noche estrellada sobre el Ródano",
        autor: "Vincent van Gogh",
        year: 1888,
        description: "Vista nocturna del río Ródano bajo un cielo estrellado.",
        image:"https://upload.wikimedia.org/wikipedia/commons/0/01/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    },
    {
        name: "Las señoritas de Aviñón",
        autor: "Pablo Picasso",
        year: 1907,
        description: "Representación de cinco mujeres en un burdel de Barcelona.",
        image:"https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvbGVzLWRlbW9pc2VsbGVzLWQtYXZpZ25vbi5qcGciLCJyZXNpemUsMjAwMCwyMDAwIl19.J8v-I2q79ZgLGPuQQ0Bohj1NLQ-wtXi7L7LmzeFAies.jpg",
    },
    {
        name: "American Gothic",
        autor: "Grant Wood",
        year: 1930,
        description: "Retrato de un granjero y su hija frente a una casa rural.",
        image:"https://upload.wikimedia.org/wikipedia/commons/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
    },
    {
        name: "La escuela de Atenas",
        autor: "Rafael",
        year: 1511,
        description: "Fresco que representa a varios filósofos griegos.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/31/La_scuola_di_Atene.jpg",
    },
    {
        name: "Madame X",
        autor: "John Singer Sargent",
        year: 1884,
        description: "Retrato de Madame Pierre Gautreau, una socialité parisina.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
    },
];

const dondeQuieroMiCard = document.querySelector("section");

function createCard(arrayDeElementos, constDondeQuieroMiCard) {
    let card = `<article class="article_container">
    <h3>${arrayDeElementos.name}</h3>
    <img src="${arrayDeElementos.image}" alt="">
    <p>Autor: <span>${arrayDeElementos.autor}</span></p>
    <p>Año: <span>${arrayDeElementos.year}</span></p>
    <p>Descripción: <span>${arrayDeElementos.description}</span></p>
    </article>`;
    dondeQuieroMiCard.innerHTML += card;
}

for (const pintura of pinturas) {
    createCard(pintura, dondeQuieroMiCard);
}
