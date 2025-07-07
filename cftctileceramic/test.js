function loadProducts() {
  fetch('./products.json')
    .then(res => res.json())
    .then(items => {
      const container = document.getElementById('product-container');
      const tpl = document.getElementById('product-template').content;
      const countDiv = document.querySelector('.product-item-count');

      items.forEach(prod => {
        const clone = document.importNode(tpl, true);

        // link
        clone.querySelector('.product-card-link').href = prod['product-link'];

        // birinci resim
        clone.querySelector('.thumbitem-primary').src = prod['product-image-1'];

        // varsa ikinci resim
        if (prod['product-image-2']) {
          clone.querySelector('.thumbitem-secondary').src = prod['product-image-2'];
        }

        // başlık ve fiyatı her durumda ata
        clone.querySelector('.tpproduct__title').textContent = prod['product-title'];
        clone
          .querySelector('.tpproduct__ammount-try span')
          .textContent = prod['product-price-try'];

        container.appendChild(clone);
      });

      // ürün sayısını döngüden sonra güncelle
      countDiv.textContent = `Toplam ${items.length} ürün gösteriliyor.`;
    })
    .catch(err => console.error('Error loading products:', err));
}

loadProducts();
