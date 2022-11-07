function markupPriceGenerator(price) {
  let finalPrice = 0;
  if (price < 10000000) {
    finalPrice = price * 1.3;
  } else if (price >= 10000000 && price < 25000000) {
    finalPrice = price * 1.25;
  } else if (price >= 25000000 && price < 50000000) {
    finalPrice = price * 1.2;
  } else if (price >= 50000000 && price < 100000000) {
    finalPrice = price * 1.15;
  } else {
    finalPrice = price * 1.1;
  }
  return Math.round(finalPrice);
}

export default markupPriceGenerator;
