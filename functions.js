document.addEventListener('DOMContentLoaded', () => {
  // ============ MENU HAMBURGUER ============
  const hamburguer = document.createElement('div');
  hamburguer.className = 'hamburguer';
  hamburguer.innerHTML = '☰';
  hamburguer.style.fontSize = '1.5rem';
  hamburguer.style.cursor = 'pointer';
  document.querySelector('.header').appendChild(hamburguer);

  const navbar = document.querySelector('.navbar');
  hamburguer.addEventListener('click', () => {
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
  });

  // Fecha o menu ao clicar em um link
  navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 992) {
        navbar.style.display = 'none';
      }
    });
  });

  // ============ POPUP DE TECNOLOGIAS (MOBILE & DESKTOP) ============
  const popup = document.createElement('div');
  popup.id = 'hover-popup';
  document.body.appendChild(popup);

  const icons = document.querySelectorAll('.icon-container');
  let activePopup = null;

  // Funcionalidade para desktop (hover)
  icons.forEach(icon => {
    icon.addEventListener('mouseenter', e => {
      if (window.innerWidth > 992) {
        showPopup(icon, e.pageX, e.pageY);
      }
    });

    icon.addEventListener('mousemove', e => {
      if (window.innerWidth > 992) {
        popup.style.left = e.pageX + 15 + 'px';
        popup.style.top = e.pageY + 15 + 'px';
      }
    });

    icon.addEventListener('mouseleave', () => {
      if (window.innerWidth > 992) {
        hidePopup();
      }
    });

    // Funcionalidade para mobile (clique)
    icon.addEventListener('click', e => {
      if (window.innerWidth <= 992) {
        if (activePopup === icon) {
          hidePopup();
          activePopup = null;
        } else {
          showPopup(icon, e.clientX, e.clientY);
          activePopup = icon;
        }
      }
    });
  });

  // Fecha popup ao clicar fora (mobile)
  document.addEventListener('click', e => {
    if (window.innerWidth <= 992 && activePopup && !e.target.closest('.icon-container')) {
      hidePopup();
      activePopup = null;
    }
  });

  function showPopup(icon, x, y) {
    const name = icon.dataset.name;
    const funcao = icon.dataset.funcao;
    const nivel = icon.dataset.nivel;

    popup.innerHTML = `
      <strong>${name}</strong><br><br>
      ${funcao}<br>
      Nível: ${nivel}
    `;

    popup.style.display = 'block';
    popup.style.opacity = 1;

    if (window.innerWidth <= 992) {
      // Centraliza o popup em mobile
      popup.style.left = '50%';
      popup.style.top = '50%';
      popup.style.transform = 'translate(-50%, -50%)';
      popup.style.width = '80%';
      popup.style.maxWidth = '250px';
    } else {
      popup.style.left = x + 15 + 'px';
      popup.style.top = y + 15 + 'px';
      popup.style.transform = 'none';
    }
  }

  function hidePopup() {
    popup.style.display = 'none';
    popup.style.opacity = 0;
  }

  // ============ DARK MODE ============
  const btnDarkMode = document.createElement('button');
  btnDarkMode.className = 'btn-darkmode';
  btnDarkMode.innerHTML = '🌙';
  btnDarkMode.style.display = 'none'; // Inicia oculto (será mostrado via CSS em mobile)
  document.querySelector('.header').appendChild(btnDarkMode);

  btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btnDarkMode.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });

  // Verifica preferência do sistema
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    btnDarkMode.innerHTML = '☀️';
  }

  


});

// Menu Hamburguer
const hamburguerBtn = document.querySelector('.hamburguer-btn');
const navbar = document.getElementById('navbar');

hamburguerBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 992) {
      navbar.classList.remove('active');
    }
  });
});