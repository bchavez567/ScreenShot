

class Producto {

    constructor(id, nombre, categoria, precio){
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}

let imprimir = document.getElementById("aca")

let productos = []




let producto1 = new Producto (1, "auriculares", "only" , 200 )
let producto2 = new Producto (2, "cable usb", "only" , 300 )
let producto3 = new Producto (3, "auriculares 2", "only" , 300)
let producto4 = new Producto (4, "parlante", "only" , 500 )
let producto5 = new Producto (5, "smart watch", "only" , 800 )
let producto6 = new Producto (6, "cargador", "only" , 400 )

productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
productos.push(producto4)
productos.push(producto5)
productos.push(producto6)


console.log(productos);

productos.forEach(e =>{

    imprimir.innerHTML += `
    <div class="card">
        <div class="card text-center">
        <h5 class="card-title">${e.nombre} $ ${e.precio}</h5>
        <p class="card-text">Auriculares Only, Wilress</p>
        <a href="#" class="btn btn-primary" onclick="añadirCarrito(${e.id})">Comprar</a>
        </div>
    </div>
    `
})

const añadirCarrito = (idOnclick) => {
    const obtetoCarrito = productos.find(e => e.id == idOnclick)

}
