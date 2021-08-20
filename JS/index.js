
const CLIENTE = prompt('Hola ingresa tu nombre')

const comprar = confirm(`Hola ${CLIENTE}, ¿querés hacer un pedido?`)

//ENTRADA
let entrada = prompt(`Hola que producto necesitas`)

//PRODUCTOS
let cables = 800;
let funda= 300;
let cargador = 900;
let auriculares = 900;
let cargadoresdeAutos = 200;
let templados = 900;
let cargadoresPared = 400;
let cargadoresInalabricos = 700;

//CONSTANTES

const cuotas = 3;
const interes = 1.21



//SWITCH 
switch (entrada) {
    case "cables":
    let precio = cables * interes
        alert(`El costo total de cuotas es de ${precio}, cada cuota sale ${precio / cuotas}`);
        break;

    case "funda":
    let precio1 = funda * interes
        alert(`El costo total de cuotas es de ${precio1}, cada cuota sale ${precio1 / cuotas}`);
        break;

    case "cargador":
    let precio2 = cargador * interes
        alert(`El costo total de cuotas es de ${precio2}, cada cuota sale ${precio2 / cuotas}`);
        break;

    case "auriculares":
    let precio3 = auriculares* interes
        alert(`El costo total de cuotas es de ${precio3}, cada cuota sale ${precio3 / cuotas}`);
        break;

    case "cargadoresdeAutos":
    let precio4 = cargadoresdeAutos * interes
        alert(`El costo total  de cuotas es de ${precio4}, cada cuota sale ${precio4 / cuotas}`);
        break;

    case "templados":
    let precio5 = templados * interes
        alert(`El costo total de cuotas es de ${precio5}, cada cuota sale ${precio5 / cuotas}`);
        break;

    case "cargadoresPared":
    let precio6 = cargadoresPared * interes
        alert(`El costo total de cuotas es de ${precio6}, cada cuota sale ${precio6 / cuotas}`);
        break;

    case "cargadoresInalambricos":
    let precio7 = cargadoresInalabricos * interes
        alert(`El costo total de cuotas es de ${precio7}, cada cuota sale ${precio7 / cuotas}`);
        break;
    
    default:
        alert("No conozco este producto");
        break;

}

//CONFIRMAR COMPRA
//let querescomprar = confirm ('Deseas comprar?')



class Producto {

    constructor(nombre, categoria,precio,stock, disp){
        this.nombre= nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
        this.disp = disp;
    }
}


//VARIABLES

const listaProductos = []

const producto1 = new Producto ("Cable de datos", "Cables" , "800" , "5" , true)
const producto2 = new Producto ("Protectores de carcasa", "Fundas" , "300" , "10" , true)
const producto3 = new Producto ("Cargador portatil", "Cargador" , "900" , "2" , true)
const producto4 = new Producto ("Auriculares JBl", "Auriculares" , "900" , "3" , true)
const producto5 = new Producto ("Cargador 1V Car", "Cargadores para autos" , "200" , "0" , false)
const producto6 = new Producto ("Hidrogel 3M", "Templados" , "900" , "2" , true)
const producto7 = new Producto ("Fast Charge Only", "Cargadores de pared" , "400" , "5" , true)
const producto8 = new Producto ("Cargador ONLY Wilres", "Cargadores inalambricos" , "700" , "2" , true)


//LISTA
listaProductos.push(producto1)
listaProductos.push(producto2)
listaProductos.push(producto3)
listaProductos.push(producto4)
listaProductos.push(producto5)
listaProductos.push(producto6)
listaProductos.push(producto7)
listaProductos.push(producto8)



//PLANTILLA DE TEXTO

const productos = [{ id: 1,  nombre: "Cable", precio: 800 },
                  {  id: 2,  nombre: "Fundas", precio: 300 },
                  {  id: 3,  nombre: "Cargador"  , precio: 900},
                  {  id: 4,  nombre: "Auriculares" , precio: 900},
                  {  id: 5,  nombre: "Cargadores para autos" , precio: 200},
                  {  id: 6,  nombre: "Templados" , precio: 900},
                  {  id: 7,  nombre: "Cargadores de pared" , precio: 400},
                  {  id: 8,  nombre: "Cargadores inalambricos" , precio: 700},
                ];

for (const producto of listaProductos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h4> ID: ${producto.id}</h4>
                            <p>  Producto: ${producto.nombre}</p>
                            <p> $ ${producto.precio}</p>
                            <br>`;
    document.body.appendChild(contenedor);
}



//LOCALSTORAGE DEL ARRAY LISTA DE PRODUCTOS
let ObjToJson = JSON.stringify(listaProductos)
localStorage.setItem("listaProductos" , ObjToJson)
