//API DOLAR SE USA URL Y SE GUARDA UNA LOCAL//
const  url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"


$.getJSON( url, (respuesta , estado) =>{
    if (estado === "success"){
        respuesta.forEach(e => {
            $("#api").append (`

                <div class="card text-dark bg-light">
                <div class="card-header text-center" id="${e.casa.agencia}">${e.casa.nombre}</div>
                <div class="card-body">
                <h5 class="card-title" > Compra $${e.casa.compra}</h5>
                <h5 class="card-title"> Venta $${e.casa.venta}</h5>
                </div>
                </div>
                `
            )
        });
    }
}
)


