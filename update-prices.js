// update-prices.cjs
const fs    = require('fs');
const fetch = require('node-fetch');

(async () => {
  // Lê o HTML
  let html = fs.readFileSync('index.html', 'utf8');

  // Substitui cada <span class="price" data-mlid="MLAXXXX">…</span>
  html = html.replace(
    /<span class="price" data-mlid="(MLA\d+)">.*?<\/span>/g,
    (_, mlid) => {
      // Buscando preço sincronicamente não é possível,
      // então vamos acumular promessas e processar depois
      return `__REPLACE_MARKER__${mlid}__`;
    }
  );

  // Para cada marcador, busque o preço e substitua
  const markers = Array.from(html.matchAll(/__REPLACE_MARKER__(MLA\d+)__/g))
    .map(m => m[1]);

  for (const mlid of markers) {
    const res  = await fetch(`https://api.mercadolibre.com/items/${mlid}`);
    const data = await res.json();
    const valor = new Intl.NumberFormat('pt-BR', {
      style: 'currency', currency: 'BRL'
    }).format(data.selling_price);

    // Troca o marcador pelo span correto
    html = html.replace(
      `__REPLACE_MARKER__${mlid}__`,
      `<span class="price" data-mlid="${mlid}">${valor}</span>`
    );
  }

  // Grava de volta
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('✅ index.html atualizado com novos preços');
})();