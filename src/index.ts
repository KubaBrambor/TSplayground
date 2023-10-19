function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Cena produktu ${product}: ${price.toFixed(2)} zł`);
}

let hat: [string, number] = ["czapka", 100];
let gloves: [string, number]= ["rękawiczki", 75];
enum IndexNumbers { First = 20, Second = 99 };
const enum Product { czapka = IndexNumbers.First + 1, rękawiczki = 31, parasol = czapka + rękawiczki };
let productVal: Product = Product.czapka;
let products: [Product, number][] = [[Product.czapka, 100], [Product.rękawiczki, 75]]
hat.forEach((el: string | number) => {
  if (typeof el === "string") {
    console.log(`Ten element to string ${el}`);
  } else {
    console.log(`Ten element to number ${el.toFixed(2)}`)
  }
})

// writePrice(hat[0], hat[1]);
// writePrice(gloves[0], gloves[1]);

products.forEach((prod: [Product, number]) => {
  switch(prod[0]) {
    case Product.czapka:
      writePrice('czapka', prod[1]);
      break;
    case Product.rękawiczki:
      writePrice('rękawiczki', prod[1]);
      break;
  }
})

console.log(Product.czapka)