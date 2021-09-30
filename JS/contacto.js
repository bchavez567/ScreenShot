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

        if ( nombre.length <5  || email.length <5 ||consulta.length <6) {

            //SE USA SWEETALRT PARA LAS ALERTS
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
