    function loadProducts() {   
    fetch('cftctileceramic/products.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
    });
  }
    //     const container = document.getElementById('product-container');
    //     data.forEach(product => {
    //       const card = document.createElement('div');
    //       card.classList.add('product-card');
    //       card.innerHTML = `
    //         <img src="${product['product-image-1']}" alt="${product['product-title']}">
    //         <h3>${product['product-title']}</h3>
    //         <p>${product['product-price-try']} TL</p>          
    //       `;
    //       container.appendChild(card);
    //     });
    //   });
    // }
    // loadProducts();