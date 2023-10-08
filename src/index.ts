function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Cena produktu ${product}: ${price.toFixed(2)} zł`);
}

let prices = [];
prices.push(...[100, 75, 25])
let names: string[] = ["czapka", "rękawiczki", "parasol"];

names.forEach((name: string, index: number) => {
  const price = prices[index];
  writePrice(name, calculateTax(price));
})
