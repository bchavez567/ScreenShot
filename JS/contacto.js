// FORMUAlARIO DE CONTACTO

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const consult = document.getElementById("consult")
const form = document.getElementById("form")

class Cliente {
    constructor (nombre , email , consulta){
        this.nombre = nombre;
        this.email = email;
        this.consulta = consulta;
    }
}

const listaUsuario = []

const usuario1 = new Cliente("walter", "123@gmail.com", "abcdefghitnha")


const guardarDato = () => {
    let nombreNew = listaUsuario.find(e => e.nombre == nombre)
    let emailNew = listaUsuario.find(e => e.email == email)
    let consultaNew = listaUsuario.find(e => e.consulta == consulta);
    const usuario1 = new Cliente(nombre, email, consulta)
    listaUsuario.push(usuario1)
}

const mostrarNombre = () => {
    listaUsuario.forEach(ele => {
        console.log(ele.nombre);
    })
}

form.addEventListener("submit" , e=>{
    e.preventDefault()

    let enviar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if ( nombre.value <1 , !regexEmail.test(email.value) ,  consult.value.length <1){
        swal({
            title: "Error debes completar el formulario",
            icon: "error",
        });
    }else {( nombre.value > 6 , !regexEmail.test(email.value) , consult.value.length > 10)

        swal({
            title: "Datos enviados",
            icon: "success",
            button: "Ok",
        });

        enviar = true


        //lo guarda en consola como array
        console.log(listaUsuario);


    }

})

guardarDato ()