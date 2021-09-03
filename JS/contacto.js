// FORMUAlARIO DE CONTACTO CON JS 


/*
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const consulta = document.getElementById("consulta")
const form = document.getElementById("form")

class Cliente {
    constructor (nombre , email , consulta){
        this.nombre = nombre;
        this.email = email;
        this.consulta = consulta;
    }
}

const listaUsuario = []


const guardarDato = () => {
    let nombreNew = listaUsuario.find(e => e.nombre == nombre)
    let emailNew = listaUsuario.find(e => e.email == email)
    let consultaNew = listaUsuario.find(e => e.consulta == consulta);
}


form.addEventListener("submit" , e=>{
    e.preventDefault()

    let enviar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if ( nombre.value >6 , !regexEmail.test(email.value) , consult.value.length >6) {
        swal({
            title: "Datos enviados",
            icon: "success",
            button: "Ok",
        });


    }else {
        swal({
            title: "Error debes completar el formulario",
            icon: "error",
        });
    }
})

guardarDato ()

*/




// FORMUAlARIO DE CONTACTO CON JQUERY
class Persona {
    constructor({
        nombre = "",
        email = "",
        consulta= "",
    }) {
        this.nombre = nombre;
        this.email = email;
        this.consulta = consulta;
    }
}

$("#btn").on("click", (e) => {
    e.preventDefault()

    const Usuario = new Persona({
        nombre: $("#nombre").val(),
        email: $("#email").val(),
        consulta: $("#consulta").val(),
    })

    const { nombre, email, consulta } = Usuario

        if ( nombre.length <5  || consulta.length <6) {
            swal({
                title: "Error debes completar el formulario",
                icon: "error",
            });
        }else {
            $("#print").append(`
            <h5>Gracias ${nombre} su consulta fue enviada!!</h5>
            `);
        }
})

