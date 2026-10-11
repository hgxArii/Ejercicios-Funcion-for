
function generarTablas() {
    let numero = document.getElementById("numeroTabla").valueAsNumber;
    let contenedor = document.getElementById("contenedorTabla");
    let titulo = document.getElementById("tituloTabla");
    let mensaje = document.getElementById("mensaje");

    if (!Number.isInteger(numero) || numero < 1 || numero > 100) {
        mensaje.textContent = "Por favor, ingresa un número entero del 1 al 100.";
        mensaje.className = "mensaje error";
        return;
    }

    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        contenido += `
            <div class="fila">
                <span>${numero} × ${i}</span>
                <span class="resultado">= ${numero * i}</span>
            </div>
        `;
    }

    contenedor.innerHTML = contenido;
    titulo.textContent = "Tabla del " + numero;

    mensaje.textContent = "¡Excelente! Aquí tienes la tabla del " + numero + ".";
    mensaje.className = "mensaje";
}

document.getElementById("formularioTabla").addEventListener("submit", function(evento) {
    evento.preventDefault();
    generarTablas();
});
