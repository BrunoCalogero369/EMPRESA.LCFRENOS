// Espera a que se cargue completamente el documento HTML
document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los elementos con la clase "producto"
    const productos = document.querySelectorAll('.producto');

    // Agrega un evento de mouseover a cada producto
    productos.forEach(producto => {
        producto.addEventListener('mouseover', function () {
            // Aplica la transformación y la opacidad en el hover
            this.style.transform = 'scale(1.1)';
            this.style.opacity = '1';
        });

        // Agrega un evento de mouseout a cada producto
        producto.addEventListener('mouseout', function () {
            // Restaura la transformación y la opacidad al estado original
            this.style.transform = 'scale(1)';
            this.style.opacity = '0.9';
        });
    });
});

