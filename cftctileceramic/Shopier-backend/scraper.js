const axios = require('axios');
const cheerio = require('cheerio');

const shopierUrl = 'https://www.shopier.com/ShowProductNew/storefront.php?shop=cftctileceramic';

axios.get(shopierUrl, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115 Safari/537.36'
  }
}).then((response) => {
  const $ = cheerio.load(response.data);
  $('.product-card').each((i, el) => {
    const title = $(el).find('.product-title').text().trim();
    const priceTry = $(el).find('.product-price').text().trim();
    const image = $(el).find('img').attr('src');

    console.log({ title, priceTry, image });
    // Bu verileri kendi sitene DB'ye kaydet
  });
});

  