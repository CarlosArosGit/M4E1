document.addEventListener("DOMContentLoaded", () => {
    //Datos hora y fecha
    var d = new Date();
    var day = d.getDay();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var nowDate = `${day}/${month}/${year}`;


    //Creación contenido html 
    document.getElementById("contenido").innerHTML = `        <div class="container text-center">
    <div class="row">
        <div class="col-md-4 oculto">
        </div>
        <div class="col-md-4">
            <div class="cardPropuesta">
                <br>
                <h3>¡Apresúrese!</h3>
                <p class="p1">El plazo maximo para inscribirse es solo 2 días despues de la siguiente fecha:</p>
                <div id="fecha"></div>
                <hr class="sombra">
                <div class="container">
                    <form>
                        <div class="mb-3">
                          <input type="text" class="form-control inputs" id="user" placeholder="Usuario">
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control inputs" id="correo" placeholder="Correo">
                          </div>
                        <div class="mb-3">
                          <input type="text" class="form-control inputs" id="pass" placeholder="Contraseña">
                        </div>
                        <button type="submit" class="btn btn-info btnInscribirse">INSCRIBIRSE</button>
                        <p class="pTc">¿Tiene una cuenta? <a href="" class="inicioSesion">Inicie sesión aquí</a></p>
                      </form>
                      <br>
                </div>
            </div>
        </div>
        <div class="col-md-4 oculto">
        </div>
    </div>
</div>`;
    document.getElementById("fecha").innerHTML =`<p>`+nowDate+`</p>`;
});