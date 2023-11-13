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

// fitting types (dopasowany typu)
let hat2 = { name: "czapka", price: 20 };
let gloves2 = { name: "rekawiczki", price: 30 };
let umbrella = { name: "parasol", price: 50, waterproof: true };

let products2: { name: string; price?: number }[] = [hat2, gloves2, umbrella];

type User = {
  id: string;
  name: string;
  phone?: number;
  adress?: boolean;
};

type Item = {
  id: number;
  name: string;
  quantity: number;
};

type UnionType = {
  id: string | number;
  name: string;
};

// Below code work after setting "suppressExcessPropertyErrors": true
// let Bob: User = { name: "Bob", city: "London" };

let user1: User = { id: "user1", name: "Bob" };
let item1: Item = { id: 1, name: "pencil", quantity: 20 };

let dataItems: (User | Item)[] = [user1, item1];

function isItem(testObj: any): testObj is Item {
  return testObj.quantity !== undefined;
}

dataItems.forEach((item) => {
  if (isItem(item)) {
    console.log(`Type Item: ${item.name}: ${item.quantity}`);
  } else {
    console.log(`Type User: ${item.name}: ${item.adress}`);
  }
});
