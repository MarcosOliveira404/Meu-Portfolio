// scripts.js
// Contém: foguete (movimento), controle da foto flutuante (pausar/executar), reveal dos elementos

document.addEventListener("DOMContentLoaded", function () {
  /* --------------------------
     Foguete: movimento pela tela
     Mantive comportamento: se move, bate nas bordas e gira.
     Use left/top para posicionamento (mais previsível que translate aqui).
  ---------------------------*/
  const rocket = document.getElementById("rocket");
  if (rocket) {
    // garantir estilo inicial
    rocket.style.position = 'fixed';
    rocket.style.left = '50%';
    rocket.style.top = '50%';
    rocket.style.transform = 'translate(-50%, -50%)';

    // coords em px (centraliza)
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    // velocidades (px por frame * fator)
    let speedX = 2;
    let speedY = 2;

    function moveRocket() {
      const rect = rocket.getBoundingClientRect();
      const rW = rect.width;
      const rH = rect.height;

      x += speedX;
      y += speedY;

      // colisão lateral
      if (x <= 0) {
        x = 0;
        speedX *= -1;
      } else if (x >= window.innerWidth - rW) {
        x = window.innerWidth - rW;
        speedX *= -1;
      }

      // colisão vertical
      if (y <= 0) {
        y = 0;
        speedY *= -1;
      } else if (y >= window.innerHeight - rH) {
        y = window.innerHeight - rH;
        speedY *= -1;
      }

      // rotação suave baseada na velocidade
      const angle = Math.atan2(speedY, speedX) * (180 / Math.PI);

      // aplicar posição (left/top) e rotação
      rocket.style.left = `${x}px`;
      rocket.style.top = `${y}px`;
      rocket.style.transform = `translate(0, 0) rotate(${angle}deg)`;

      requestAnimationFrame(moveRocket);
    }

    // reinicia posição ao redimensionar para evitar ficar preso fora da tela
    window.addEventListener('resize', () => {
      x = Math.min(x, window.innerWidth - rocket.getBoundingClientRect().width);
      y = Math.min(y, window.innerHeight - rocket.getBoundingClientRect().height);
    });

    requestAnimationFrame(moveRocket);
  }

  /* --------------------------
     Pausar/retomar animação da foto flutuante (clicando na imagem)
     Uso de animationPlayState via style para funcionar cross-browser.
  ---------------------------*/
  (function () {
    const floatElement = document.querySelector('.float-element');
    if (!floatElement) return;

    // definir estado inicial caso não exista
    const cs = window.getComputedStyle(floatElement);
    const initialState = cs.getPropertyValue('animation-play-state') || 'running';
    floatElement.style.animationPlayState = initialState.trim();

    floatElement.addEventListener('click', function () {
      const current = getComputedStyle(floatElement).animationPlayState;
      floatElement.style.animationPlayState = (current === 'paused') ? 'running' : 'paused';
    });
  })();

  /* --------------------------
     Reveal: usar IntersectionObserver para projetcs e skills
  ---------------------------*/
  (function () {
    const revealSelector = '.project, .programmers-item';
    const revealElems = document.querySelectorAll(revealSelector);

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // observer.unobserve(entry.target); // opcional: parar de observar
          } else {
            // manter o comportamento anterior (aparecer e desaparecer)
            entry.target.classList.remove('show');
          }
        });
      }, { threshold: 0.12 });

      revealElems.forEach(el => io.observe(el));
    } else {
      // Fallback: calcula na rolagem
      function checkScroll() {
        const windowHeight = window.innerHeight;
        revealElems.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < windowHeight - 100 && rect.bottom > 100) {
            el.classList.add('show');
          } else {
            el.classList.remove('show');
          }
        });
      }
      window.addEventListener('scroll', checkScroll);
      checkScroll();
    }
  })();

});


document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll(".project-slideshow");

  slideshows.forEach(slideshow => {
    const images = slideshow.querySelectorAll("img");
    let index = 0;

    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 3000); // troca a cada 3 segundos
  });
});
