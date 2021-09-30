//PROYECTO CARRITO SCREENSHOT




const carrito = document.getElementById("carrito");
const producto = document.getElementById("listaProducto");
const listaProducto = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

cargarEventListeners();

function cargarEventListeners() {
  producto.addEventListener("click", comprarProducto);
  carrito.addEventListener("click", eliminarProducto);
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  document.addEventListener("DOMContentLoaded", leerLocalStorage);
}

function comprarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const producto = e.target.parentElement.parentElement;
        leerDatosProducto(producto);
    }
}

function leerDatosProducto(producto){
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h4').textContent,
        precio: producto.querySelector('.precio span').textContent,
        id: producto.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoProducto);
}

function insertarCarrito(producto) {
    const row = document.createElement('tr');
    row.innerHTML = `
       <td>
           <img src="${producto.imagen}" width=100> 
       </td> 
       <td>${producto.titulo}</td>
       <td>${producto.precio}</td>
       <td>
        <a href="#" class="borrar-producto" data-id="${producto.id} ">X</a>
       </td>
    `;
    listaProducto.appendChild(row);
    guardarProductoLocalStorage(producto);
}

function eliminarProducto(e) {
    e.preventDefault();

    let producto,
        productoId;
    
    if(e.target.classList.contains('borrar-producto')) {
        e.target.parentElement.parentElement.remove();
        producto = e.target.parentElement.parentElement;
        productoId = producto.querySelector('a').getAttribute('data-id');
    }
    eliminarProductoLocalStorage( productoId)
}

function vaciarCarrito(){
    while(listaProducto.firstChild){
        listaProducto.removeChild(listaProducto.firstChild);
    }
    vaciarLocalStorage();

    return false;
}

function guardarProductoLocalStorage(producto) {

  let = producto;


    producto = obtenerProductoLocalStorage();
    producto.push(producto);

    localStorage.setItem('producto', JSON.stringify(producto));
}

function obtenerProductoLocalStorage() {
    let productoLS;

    if(localStorage.getItem('producto') === null) {
        productoLS = [];
    }else {
        productoLS = JSON.parse(localStorage.getItem('producto'));
    }
    return productoLS;
}

function leerLocalStorage() {
    let productoLS;

    productoLS = obtenerProductoLocalStorage();

    productoLS.forEach(function(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
            </td>
        `;
        listaProducto.appendChild(row);
    });
}

function eliminarProductoLocalStorage(producto) {
    let productoLS;
    productoLS = obtenerProductoLocalStorage();

    productoLS.forEach(function(productoLS, index){
        if(producto.id === producto) {
            productoLS.splice(index, 1);
        }
    });

    localStorage.setItem('producto', JSON.stringify(productoLS));
}

function vaciarLocalStorage() {
    localStorage.clear();
}


