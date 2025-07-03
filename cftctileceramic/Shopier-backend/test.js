    function loadProducts() {   
    fetch('products.json')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('product-container');
        data.forEach(product => {
          const card = document.createElement('div');
          card.classList.add('product-card');
          card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price} TL</p>
          `;
          container.appendChild(card);
        });
      });
    }
    const express = require('express');
    const app = express();
    const PORT = 3000;

    app.use(express.static('cftctileceramic')); // index.html ve products.json buraya

    app.listen(PORT, () => {
      console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
