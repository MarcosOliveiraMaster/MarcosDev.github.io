document.addEventListener('DOMContentLoaded', () => {
  const popup = document.createElement('div');
  popup.id = 'hover-popup';
  document.body.appendChild(popup);

  const icons = document.querySelectorAll('.icon-container');

  icons.forEach(icon => {
    icon.addEventListener('mouseenter', e => {
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
    });

    icon.addEventListener('mousemove', e => {
      popup.style.left = e.pageX + 15 + 'px';
      popup.style.top = e.pageY + 15 + 'px';
    });

    icon.addEventListener('mouseleave', () => {
      popup.style.display = 'none';
      popup.style.opacity = 0;
    });
  });
});
