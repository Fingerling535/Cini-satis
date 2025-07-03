        
        
        function updateProductDetails() {
            const product = {
            "product-title" : "Vazo",
            "product-description" : "dekva0001",
            "product-price-try" : "₺ 100,00",
            "product-price-dollar" : "$ 10,00",
            "product-price-euro" : "€ 9,00",
            "product-image-1" : "https://cdn.shopier.app/pictures_mid/cftctileceramic_99cdec15472bf9048f79cc6953743f00.png",
            "product-image-2" : "https://cdn.shopier.app/pictures_mid/cftctileceramic_99cdec15472bf9048f79cc6953743f00.png"
         };

         document.getElementById("product-image").src = product["product-image-1"];
         document.getElementById("product-title").textContent = product["product-title"];
         document.getElementById("product-description").textContent = product["product-description"];
         document.getElementById("price-try").textContent = `Fiyat (TL): ${product["product-price-try"]}`;
         document.getElementById("price-dollar").textContent = `Fiyat ($): ${product["product-price-dollar"]}`;
         document.getElementById("price-euro").textContent = `Fiyat (€): ${product["product-price-euro"]}`;
         console.log("Product data loaded:", updateProductDetails);
        }