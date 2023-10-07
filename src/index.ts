function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Cena produktu ${product}: ${price.toFixed(2)} zł`)
}

let emptyArray = [];
emptyArray.push("one");
let prices: number[] = [100, 75, 30];
let names: string[] = ["czapka", "rękawiczki", "parasol"];

prices.forEach((price: number, index: number) => {
  writePrice(names[index], calculateTax(price));
});