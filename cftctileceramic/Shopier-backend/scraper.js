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

  const products = [];
  $('.product-card').each((i, el) => {
    const title = $(el).find('.product-card-title > h3').text().trim();
    const price = $(el).find('.price-current .price-value').text().trim();
    const image1 = $(el).find('img').attr('src');
    const image2 = $(el).find('img').attr('data-src');

    if (!title || !price || !image1) {
      console.log('Eksik veri bulundu, atlanıyor...');
      return; // Eksik veri varsa bu ürünü atla
    }

    console.log({ title, price, image1, image2 });
    // Bu verileri kendi sitene DB'ye kaydet

    //Json yazma
     products.push({
    "product-title": title,
    "product-price-try": price,
    "product-image-1": image1,
    "product-image-2": image2
  });

    // JSON dosyasına yazma
    fs.writeFileSync('cftctileceramic/products.json', JSON.stringify(products, null, 2) + '\n', 'utf-8');
  });
  console.log('✅ JSON başarıyla kaydedildi!');

});
