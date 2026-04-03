const pr1 = {
  name: "Ao thun",
  price: 500,
  inStock: true,
};
const pr2 = {
  name: "Ao so mi",
  price: 600,
  inStock: true,
};
const pr3 = {
  name: "Ao khoac",
  price: 700,
  inStock: false,
};
const pr4 = {
  name: "Ao len",
  price: 800,
  inStock: true,
};
const pr5 = {
  name: "Ao lot",
  price: 900,
  inStock: false,
};

const products = [pr1, pr2, pr3, pr4, pr5];

products.push({
  name: "Ao vest",
  price: 1000,
  inStock: true,
});
let newArray = products.filter((item, index) => item.inStock === true);
console.log(newArray);

for (const key in pr1) {
  console.log(key, pr1[key]);
}
