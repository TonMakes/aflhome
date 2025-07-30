document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel.modern-carousel');

  carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-images img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let current = 0;
    // Auto play a cada 4 segundos
setInterval(() => {
  current = (current + 1) % images.length;
  showImage(current);
}, 4000);


    // Função para exibir imagem ativa
    function showImage(index) {
      images.forEach(img => img.classList.remove('active'));
      images[index].classList.add('active');
    }

    // Inicializa a primeira imagem como ativa
    showImage(current);

    // Botão próximo
    nextBtn.addEventListener('click', () => {
      current = (current + 1) % images.length;
      showImage(current);
    });

    // Botão anterior
    prevBtn.addEventListener('click', () => {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    });
  });
});
