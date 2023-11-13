type Product = {
  name: string;
  price: number;
  hasFeature?(Feature): boolean;
};

enum Feature {
  Waterproof,
  Insulated,
}
let hat = { name: "czapka", price: 100 };
let gloves = { name: "rękawiczki", price: 75 };
let jacket = {
  name: "kurtka",
  price: 120,
  hasFeature: (feature) => feature === Feature.Waterproof,
};
let glasses = {
  name: "okulary",
  price: 40,
  glass: "matowe",
};

let products: Product[] = [hat, gloves, jacket, glasses];

products.forEach((prod) =>
  console.log(
    `${prod.name} kosztuje ${prod.price}. Przemakalność ${
      prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false"
    }`
  )
);

type Product2 = {
  name: string;
  price?: number;
  hasFeature?: boolean;
};
let hat2 = { name: "czapka", price: 20 };
let gloves2 = { name: "rekawiczki", price: 30 };
let umbrella = { name: "parasol", price: 50, waterproof: true };

let products2: { name: string; price?: number }[] = [hat2, gloves2, umbrella];
