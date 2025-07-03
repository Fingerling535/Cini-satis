const axios = require('axios');
const cheerio = require('cheerio');

const shopierUrl = 'https://www.shopier.com/ShowProductNew/storefront.php?shop=cftctileceramic';

axios.get(shopierUrl).then((response) => {
  const $ = cheerio.load(response.data);
  $('.product-card').each((i, el) => {
    const title = $(el).find('.product-title').text().trim();
    const priceTry = $(el).find('.product-price').text().trim();
    const image = $(el).find('img').attr('src');

    console.log({ title, priceTry, image });
    // Bu verileri kendi sitene DB'ye kaydet
  });
});
