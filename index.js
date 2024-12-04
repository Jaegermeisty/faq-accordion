const accordionButtons = document.querySelectorAll('.accordion');

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    
    const panelContainer = button.nextElementSibling;
    const img = button.querySelector('img');

    panelContainer.classList.toggle('panel-visible');

    if (panelContainer.classList.contains('panel-visible')) {
      img.src = "assets/images/icon-minus.svg";
      img.classList.add('rotated');
    } else {
      img.src = "assets/images/icon-plus.svg";
      img.classList.remove('rotated');
    }
  });
});