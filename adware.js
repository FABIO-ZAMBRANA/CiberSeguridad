// DESPLAZAMIENTO SUAVE ENTRE SECCIONES
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // MENÚ RESPONSIVO: MOSTRAR/OCULTAR EN PANTALLAS PEQUEÑAS
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');
  
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // ANIMACIONES EN EL SCROLL CON SCROLLREVEAL
  ScrollReveal().reveal('.content', {
    duration: 1200,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
    reset: false
  });
  
  ScrollReveal().reveal('.content-block', {
    duration: 1000,
    origin: 'right',
    distance: '30px',
    easing: 'ease-in-out',
    reset: true,
    interval: 100
  });
  
  // EFECTO DINÁMICO EN EL TEXTO DEL FOOTER
  const typer = document.querySelector('.typer');
  let index = 0;
  const words = typer.getAttribute('data-words').split(':');
  const colors = typer.getAttribute('data-colors').split(':');
  
  function typeEffect() {
    typer.style.color = colors[index % colors.length];
    typer.textContent = words[index % words.length];
    index++;
    setTimeout(typeEffect, 2000);
  }
  typeEffect();
// ANIMACIONES DE ENTRADA DE DERECHA A IZQUIERDA
ScrollReveal().reveal('.container, .content-block, .footer', {
    duration: 1200,
    origin: 'right',
    distance: '100px',
    easing: 'ease-in-out',
    reset: false, // Cambiar a true si quieres que la animación se repita al hacer scroll
  });  