document.getElementById('form-empleado').addEventListener('submit', function(e) {
    e.preventDefault();
    validarFormulario();
});

function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const fechaNacimiento = new Date(document.getElementById('fecha-nacimiento').value);
    const fechaIngreso = new Date(document.getElementById('fecha-ingreso').value);

    // Validar edad mínima (18 años)
    const edadMinima = new Date(fechaNacimiento.getFullYear() + 18, fechaNacimiento.getMonth(), fechaNacimiento.getDate());
    if (fechaIngreso < edadMinima) {
        alert('El empleado debe tener al menos 18 años al ingresar.');
        return;
    }

    // Validar correo único
    const usuarios = document.querySelectorAll('#lista-usuarios .card-text');
    for (let usuario of usuarios) {
        if (usuario.textContent.includes(correo)) {
            alert('El correo ya está registrado.');
            return;
        }
    }

    // Mostrar modal
    const modal = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
    modal.show();

    document.getElementById('confirmar-agregar').onclick = function() {
        agregarUsuario(nombre, correo, fechaNacimiento, fechaIngreso);
        modal.hide();
    };
}

function agregarUsuario(nombre, correo, fechaNacimiento, fechaIngreso) {
    const cargo = document.getElementById('cargo').value;
    const listaUsuarios = document.getElementById('lista-usuarios');

    const usuarioHTML = `
        <div class="col-md-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">Email: ${correo}<br>Cargo: ${cargo}</p>
                    <button class="btn btn-danger btn-sm" onclick="eliminarUsuario(this)">Eliminar</button>
                </div>
            </div>
        </div>
    `;

    listaUsuarios.insertAdjacentHTML('beforeend', usuarioHTML);
    document.getElementById('form-empleado').reset();
}

function eliminarUsuario(boton) {
    boton.closest('.col-md-4').remove();
}