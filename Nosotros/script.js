document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById('contacto-form');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario por defecto
        
        const formData = new FormData(formulario);
        let mensaje = '';
        for (let [key, value] of formData.entries()) {
            mensaje += `${key}: ${value}\n`; // Agregar un salto de línea al final de cada línea
        }

        // Crear el correo con los detalles proporcionados
        const correoDestino = 'ldgd290@gmail.com';
        const asunto = 'Cotizacion';
        const contenido = encodeURIComponent(mensaje);
        
        // Abrir cliente de correo predeterminado con los campos prefijados
        window.open(`mailto:${correoDestino}?subject=${asunto}&body=${contenido}`);
    });
});
