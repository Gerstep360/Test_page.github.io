document.addEventListener("DOMContentLoaded", function() {
    // Noticias deslizantes
    const noticias = document.querySelectorAll('.noticia');
    let index = 0;

    function mostrarNoticia() {
        noticias.forEach(noticia => noticia.style.display = 'none');
        noticias[index].style.display = 'block';
        index = (index + 1) % noticias.length;
    }

    setInterval(mostrarNoticia, 3000);

    // Agregar productos (simulado)
    const productosContainer = document.getElementById('productos-container');
    const numProductos = 20;

    for (let i = 1; i <= numProductos; i++) {
        const productoBtn = document.createElement('button');
        productoBtn.classList.add('producto-btn');
        productoBtn.style.backgroundImage = `url(producto${i}.jpg)`;
        productosContainer.appendChild(productoBtn);
    }

    // Botones de desplazamiento de productos
    const anteriorBtn = document.getElementById('anterior-btn');
    const siguienteBtn = document.getElementById('siguiente-btn');
    const productosContainerWidth = productosContainer.offsetWidth;
    let scrollLeft = 0;

    anteriorBtn.addEventListener('click', function() {
        scrollLeft -= productosContainerWidth;
        scrollLeft = Math.max(scrollLeft, 0);
        productosContainer.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    });

    siguienteBtn.addEventListener('click', function() {
        scrollLeft += productosContainerWidth;
        scrollLeft = Math.min(scrollLeft, productosContainer.scrollWidth - productosContainerWidth);
        productosContainer.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    });
});


