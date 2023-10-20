enum Feature { Waterproof, Insulated }
let hat = { name: 'czapka', price: 100 };
let gloves = { name: 'rękawiczki', price: 75 };
let jacket = { name: 'kurtka', hasFeature: (feature) => feature === Feature.Waterproof };

let products: { name: string, price?: number, hasFeature?(Feature): boolean }[] = [hat, gloves, jacket];

products.forEach(prod => console.log(`${prod.name} kosztuje ${prod.price}. Przemakalność ${prod.hasFeature(Feature.Waterproof)}`));