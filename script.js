// Seleccionamos la marquesina
const marquee = document.getElementById('marquee-text');

// Pausar la animación cuando el mouse está encima
marquee.addEventListener('mouseover', () => {
    marquee.style.animationPlayState = 'paused';
});

// Reanudar cuando el mouse sale
marquee.addEventListener('mouseout', () => {
    marquee.style.animationPlayState = 'running';
});

// Mensaje de consola para verificar carga
console.log("Portada de Rogelio Magaña cargada correctamente.");