let hat = { name: 'czapka', price: 100 };
let gloves = { name: 'rękawiczki', price: 75 };
let jacket = { name: 'kurtka' };

let products: { name: string, price: number }[] = [hat, gloves, jacket];

products.forEach(prod => console.log(`${prod.name} kosztuje ${prod.price}`));