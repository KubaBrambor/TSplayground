function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Cena produktu ${product}: ${price.toFixed(2)} zł`);
}

let hat: [string, number] = ["czapka", 100];
let gloves: [string, number]= ["rękawiczki", 75];
enum Product { czapka, rękawiczki, parasol }
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