// Codigo JS para el formulario

document.getElementById("formInscripcion").addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const resultado = document.getElementById("resultado");
    let tipo = document.getElementById("tipo").value;

// Validador de campos

if (!nombre.length || !email.length || !mensaje.length) {
    resultado.innerHTML = "<div class='alert alert-danger'>Error: por favor, rellena los campos solicitados.</div>";
    return;
}
 // Identificador de solicitud segun mensaje

    if (mensaje.toLowerCase().includes("compra")) {
        tipo = "Compra";
    } else if (mensaje.toLowerCase().includes("venta") || mensaje.toLowerCase().includes("vender")) {
        tipo = "Venta";
    } else if (mensaje.toLowerCase().includes("consulta") || mensaje.toLowerCase().includes("preguntar")){
        tipo = "Consulta"
    }

// Mensaje de confirmación

    resultado.innerHTML = `
        <div class="alert alert-success">
            Estimado ${nombre}, tu solicitud ha sido recibida. Recibirás un correo con la información solicitada.<br>
            <strong>Tipo de solicitud:</strong> ${tipo}
        </div>
    `;
});