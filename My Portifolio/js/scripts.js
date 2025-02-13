
document.addEventListener("DOMContentLoaded", function () {
    const rocket = document.getElementById("rocket");

    let x = window.innerWidth / 2; // Posição inicial X
    let y = window.innerHeight / 2; // Posição inicial Y
    let speedX = 2; // Velocidade no eixo X
    let speedY = 2; // Velocidade no eixo Y

    function moveRocket() {
        x += speedX;
        y += speedY;

        // Verifica se o foguete bateu nas bordas e inverte a direção
        if (x <= 0 || x >= window.innerWidth - 100) {
            speedX *= -1;
        }
        if (y <= 0 || y >= window.innerHeight - 100) {
            speedY *= -1;
        }

        // Aplica a nova posição e rotação ao foguete
        rocket.style.transform = `translate(${x}px, ${y}px) rotate(${x % 360}deg)`;

        requestAnimationFrame(moveRocket); // Chama a animação continuamente
    }

    moveRocket(); // Inicia a animação
});



//window.alert('O site ainda está passando \n por alterações ');

document.addEventListener('DOMContentLoaded', function() {
    const floatElement = document.querySelector('.float-element');

    floatElement.addEventListener('click', function() {
        if(floatElement.computedStyleMap.animationPlayState === 'paused'){
            floatElement.computedStyleMap.animationPlayState= 'running';
        } else {
            floatElement.computedStyleMap.animationPlayState = 'paused';
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    function checkScroll() {
        projects.forEach(project => {
            const rect = project.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight - 100 && rect.bottom > 100) {
                project.classList.add("show"); // Fade-in
            } else {
                project.classList.remove("show"); // Fade-out
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Para verificar ao carregar a página
});



document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".programmers-item");

    function checkScroll() {
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight - 100 && rect.bottom > 100) {
                item.classList.add("show"); // Aparece na tela (fade-in)
            } else {
                item.classList.remove("show"); // Some da tela (fade-out)
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Para verificar ao carregar a página
});
