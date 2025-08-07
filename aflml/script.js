document.addEventListener("DOMContentLoaded", function () {
  const carrosseis = document.querySelectorAll('.carrossel');

  carrosseis.forEach(carrossel => {
    const imagens = carrossel.querySelectorAll('.imagens img');
    const anterior = carrossel.querySelector('.anterior');
    const proximo = carrossel.querySelector('.proximo');
    let atual = 0;

    function mostrarImagem(index) {
      imagens.forEach(img => img.classList.remove('ativo'));
      imagens[index].classList.add('ativo');
    }

    anterior.addEventListener('click', () => {
      atual = (atual - 1 + imagens.length) % imagens.length;
      mostrarImagem(atual);
    });

    proximo.addEventListener('click', () => {
      atual = (atual + 1) % imagens.length;
      mostrarImagem(atual);
    });

    // Autoplay a cada 4 segundos
    setInterval(() => {
      atual = (atual + 1) % imagens.length;
      mostrarImagem(atual);
    }, 4000);

    mostrarImagem(atual);
  });
});

// Botão Voltar ao Topo
document.addEventListener("DOMContentLoaded", () => {
  const btnTopo = document.getElementById("btn-topo");

  // Mostrar/ocultar ao rolar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnTopo.classList.remove("hidden");
    } else {
      btnTopo.classList.add("hidden");
    }
  });

  // Ação de clique
  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Inicialmente oculto
  btnTopo.classList.add("hidden");
});
