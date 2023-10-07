function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Cena produktu ${product}: ${price.toFixed(2)} zł`);
}

let hatPrice = 100;
let glovesPrice = 75;
let umbrellaPrice = 42;

writePrice("czapka", calculateTax(hatPrice));
writePrice("rękawiczki", calculateTax(glovesPrice));
writePrice("parasol", calculateTax(umbrellaPrice));
