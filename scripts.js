document.addEventListener("DOMContentLoaded", function() {
    const productos = document.querySelectorAll(".producto");
    let currentIndex = 0;

    // Función para mostrar los mosaicos de manera secuencial
    function mostrarProductos() {
        if (currentIndex < productos.length) {
            productos[currentIndex].classList.add("visible");
            currentIndex++;
            setTimeout(mostrarProductos, 200); // Cambia el tiempo para ajustar la velocidad
        }
    }

    // Iniciar la animación al cargar la página
    mostrarProductos();

    // Agregar eventos de mouseover y mouseout a los mosaicos
    productos.forEach(producto => {
        producto.addEventListener("mouseover", function() {
            this.classList.add("hover");
        });

        producto.addEventListener("mouseout", function() {
            this.classList.remove("hover");
        });
    });
});

