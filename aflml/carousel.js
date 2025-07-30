document.querySelectorAll('.carousel').forEach(carousel => {
  const imageContainer = carousel.querySelector('.carousel-images');
  const images = carousel.querySelectorAll('.carousel-images img');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  let index = 0;

  function showImage(i) {
    const width = images[0].clientWidth;
    imageContainer.style.transform = `translateX(-${i * width}px)`;
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showImage(index);
  });

  // Redimensionamento
  window.addEventListener('resize', () => showImage(index));

  // AutoPlay individual
  setInterval(() => {
    index = (index + 1) % images.length;
    showImage(index);
  }, 4000);
});
