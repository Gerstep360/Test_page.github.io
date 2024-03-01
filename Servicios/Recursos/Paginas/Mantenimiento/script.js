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
        const correoDestino = 'Ventas@mapsaperu.com';
        const asunto = 'Cotizar - Matenimiento';
        const contenido = encodeURIComponent(mensaje);
        
        // Abrir Gmail con los campos prefijados
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${correoDestino}&su=${asunto}&body=${contenido}`);
    });
});