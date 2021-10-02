
//ARRAY
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


let producto1 = new Producto (1, "Banco Macro", "VISA" , 30 )
let producto2 = new Producto (2, "MERCADO PAGO", "MASTER" , 30 )
let producto3 = new Producto (3, "BILLETERA SANTA FE", "PLUS PAGO" , 33)


productos.push(producto1)
productos.push(producto2)
productos.push(producto3)


console.log(productos);


//SE CREA UN CUPON DE DESCUENTO DE CADA BANCO CON UN LINK QUE LLEVA A UNA PAGE 404 
productos.forEach(e =>{

    imprimir.innerHTML += `
    <div class="row-cols-md-6 g-2 p-5" id= ""array" >
        <div class="card text-center">
        <h5 class="card-title">${e.nombre}  ${e.precio} % de descuento</h5>
        <a href="../pages/404.html" class="btn btn-primary" onclick="añadirCarrito(${e.id})">Adquirir</a>
        </div>
    </div>
    `

})


