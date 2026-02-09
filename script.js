const observador = new IntersectionObserver((itens) => {
    itens.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add('show');
            observador.unobserve(item.target);
        }
    });
});

const elementos = document.querySelectorAll('.hidden');

elementos.forEach((elemento) => observador.observe(elemento));
