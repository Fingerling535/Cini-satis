const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');


const shopierUrl = 'https://www.shopier.com/ShowProductNew/storefront.php?shop=cftctileceramic';

axios.get(shopierUrl, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115 Safari/537.36'
  }
}).then((response) => {
  const $ = cheerio.load(response.data);
  $('.product-card').each((i, el) => {
    const title = $(el).find('.product-card-title > h3').text().trim();
    const price = $(el).find('.price-current .price-value').text().trim();
    const image = $(el).find('img').attr('src');

    console.log({ title, price, image });
    // Bu verileri kendi sitene DB'ye kaydet
  

//Json yazma
    const product = {
      "product-title": title,
      "product-price-try": price,
      "product-image-1": image,
      "product-image-2": image, // İkinci resim aynı olarak ayarlandı
      "product-description": "Ürün açıklaması burada yer alacak." // Örnek açıklama
    };

    // JSON dosyasına yazma
    fs.appendFileSync('products.json', JSON.stringify(product, null, 2) + ',\n', 'utf-8');
  });
  console.log('✅ JSON başarıyla kaydedildi!');

});
