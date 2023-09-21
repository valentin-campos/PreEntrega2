

// Para la segunda Pre-entrega, me decidi relizar una app parecida al que profe uso como ejemplo. Esta seria un simulacro de compra o venta de peliculas virtuales

class Item {
    constructor(nombre, precio, imagen, tipo) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.tipo = tipo;
    }
}

const pelicula1 = new Item("Oppenheimer", 1000, "oppenheimer.webp", "Pelicula");
const pelicula2 = new Item("Batman", 1000, "batman.webp", "Pelicula");
const pelicula3 = new Item("El señor de los anillos", 1000, "Las_dos_torres.webp", "Pelicula");
const pelicula4 = new Item("Once upon a time in Hollywood", 1000, "onceopenatimeinhollywood.webp", "Pelicula");
const pelicula5 = new Item("Star wars 3", 1000, "starwars.webp", "Pelicula");


// Array para el inventario donde vamos a ir metiendo los item que compremos
const inventario = []


// Platita de la app
let plata = 3500;

// Elementos del DOM
const laPlata = document.querySelector("#plata span");
laPlata.innerText = plata; // Para que muestre la plata apenas carga la actualizacion
const elInventario = document.getElementById("inventario");

//

function comprar(itemPeliculas) {
    if (plata - itemPeliculas.precio >= 0) {
        inventario.push(itemPeliculas);
        plata -= itemPeliculas.precio;
        actualizarHTML()
    } else {
        alert(`Lo siento, no te alcanza la plata para comprar: ${itemPeliculas.nombre}.`);
    }
}

// Funcion para vender un item
function vender(nombreDeItem) {
    // Buscamos el item
    const itemEncontrado = inventario.find((item) => item.nombre == nombreDeItem);
    
    if (itemEncontrado) {
        // ACtualizar plata
        plata += itemEncontrado.precio;
        // Lo sacamos del inventario
        const indice = inventario.indexOf(itemEncontrado);
        inventario.splice(inventario.indexOf(itemEncontrado), 1);
        actualizarHTML();
    }
    

} 

// Funcion para actualizar el HTML de la aplicacion (plata e items)
function actualizarHTML() {
    laPlata.innerText = plata;
    elInventario.innerHTML = "";
    for (const itemPeliculas of inventario) {
        //const indice = inventario.indexOf(itemPeliculas);
        const li = `
        <li onclick= "vender('${itemPeliculas.nombre}')">
            <img src="img/${itemPeliculas.imagen}" alt="${itemPeliculas.imagen}" />
        </li>
        `;
        elInventario.innerHTML +=  li;
    }

}


