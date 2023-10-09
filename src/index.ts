function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Cena produktu ${product}: ${price.toFixed(2)} zł`);
}

let hat: [string, number] = ["czapka", 100];
let gloves: [string, number]= ["rękawiczki", 75];
let products: ([string, number] | boolean)[] = [true, false, hat]

hat.forEach((el: string | number) => {
  if (typeof el === "string") {
    console.log(`Ten element to string ${el}`);
  } else {
    console.log(`Ten element to number ${el.toFixed(2)}`)
  }
})

// writePrice(hat[0], hat[1]);
// writePrice(gloves[0], gloves[1]);

products.forEach((prod: [string, number] | boolean) => {
  if(prod instanceof Array) {
    writePrice(prod[0], prod[1]);
  } else {
    console.log('Its boolean.')
  }
})