function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Cena produktu ${product}: ${price.toFixed(2)} zł`);
}

let hat: [string, number] = ["czapka", 100];
let gloves: [string, number]= ["rękawiczki", 75];
enum IndexNumbers { First = 20, Second = 99 };
enum Product { czapka, rękawiczki, parasol };
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
let restrictedVal: 1|2|3 = 3;

function getMixedValue(input: 1): 1;
function getMixedValue(input: 2|3): "Witaj" | true;
function getMixedValue(input: 4): Product.czapka;
function getMixedValue(input: number): 1|"Witaj"|true|Product.czapka {
  switch (input) {
    case 1:
      return 1;
    case 2:
      return "Witaj";
    case 3:
      return true;
    case 4:
      return true;
  }
  return true;
}

function testVal(index: number): number;
function testVal(index: string): string;
function testVal(index: number | string): number | string {
  if(typeof index === 'number') {
    return "hello"
  } else {
    return 20;
  }
}

let val: number = testVal(20)
console.log(val)

type comboType = [string, number | true, 1|2|3];
let typeVal: comboType = ['cos', true, 2]