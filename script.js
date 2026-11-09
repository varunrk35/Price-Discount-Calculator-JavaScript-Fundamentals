const name = "Wings of Fire Book";
const basePrice = 1500;
const discountPercent = 15;
const taxRate = 12;
const stockStatus = "limited";

function calculateDiscountedPrice(price, discount) {
  return price - (price * discount) / 100;
}

function calculateTax(price, taxRate) {
  return (price * taxRate) / 100;
}

function calculateFinalPrice(price, discount, taxRate) {
  const discountedPrice = calculateDiscountedPrice(price, discount);
  const taxAmount = calculateTax(discountedPrice, taxRate);
  return discountedPrice + taxAmount;
}

function isFreeShipping(finalPrice) {
  if (finalPrice >= 500) {
    return "Free Shipping";
  }
  return "Shipping: Rs.49";
}

function getStockMessage(status) {
  let message;

  if (status === "in_stock") {
    message = "In Stock";
  } else if (status === "limited") {
    message = "Limited Stock";
  } else {
    message = "Out of Stock";
  }

  return message;
}

const discountedPrice = calculateDiscountedPrice(basePrice, discountPercent);
const discountAmount = basePrice - discountedPrice;
const taxAmount = calculateTax(discountedPrice, taxRate);
const finalPrice = calculateFinalPrice(basePrice, discountPercent, taxRate);
const shippingMessage = isFreeShipping(finalPrice);
const stockMessage = getStockMessage(stockStatus);

console.log("----- PRODUCT PRICE SUMMARY -----");
console.log("-> Product: " + name);
console.log("-> Base Price: Rs. " + basePrice.toFixed(2));
console.log(
  "-> Discount: " +
    discountPercent +
    "% (Rs. " +
    discountAmount.toFixed(2) +
    ")"
);
console.log("-> Discounted Price: Rs. " + discountedPrice.toFixed(2));
console.log(
  "-> Tax Amount: Rs. " +
    taxAmount.toFixed(2) +
    " (" +
    taxRate +
    "% of Discounted Price)"
);
console.log("-> Final Price: Rs. " + finalPrice.toFixed(2));
console.log(
  "-> Shipping Status: " +
    shippingMessage +
    " (Final Price >= Rs. 500)"
);
console.log("-> Stock Status: " + stockMessage);
