const crypto = require("crypto");

function generateSignature(params) {
  const keys = Object.keys(params).sort();
  let signatureStr = "";
  for (let key of keys) {
    signatureStr += `${key}=${params[key]}`;
  }
  return crypto
    .createHmac("sha256", process.env.SHOPIER_API_SECRET)
    .update(signatureStr)
    .digest("base64");
}

async function createOrder(data) {
  const params = {
    API_key: process.env.SHOPIER_API_KEY,
    website_index: process.env.SHOPIER_STORE_ID,
    product_name: data.product_name,
    buyer_name: data.buyer_name,
    buyer_email: data.buyer_email,
    buyer_address: data.buyer_address,
    buyer_phone: data.buyer_phone,
    amount: data.amount,
    callback_url: process.env.CALLBACK_URL,
  };

  params.signature = generateSignature(params);

  const searchParams = new URLSearchParams(params).toString();
  const paymentUrl = `https://www.shopier.com/ShowProduct/api_pay4.php?${searchParams}`;

  return { redirectUrl: paymentUrl };
}

module.exports = { createOrder };


fetch("http://localhost:4000/create-order", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    product_name: "El Yapımı Çini Tabağı",
    buyer_name: "Kaan Yılmaz",
    buyer_email: "kaan@example.com",
    buyer_address: "İznik, Bursa",
    buyer_phone: "05555555555",
    amount: "299.90"
  })
})
  .then(res => res.json())
  .then(data => {
    if (data.redirectUrl) {
      window.location.href = data.redirectUrl;
    } else {
      console.error("redirectUrl dönmedi:", data);
    }
  });



