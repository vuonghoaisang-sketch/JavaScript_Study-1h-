const sv1 = {
  username: "SangVuong",
  score: 100,
};

const sv2 = {
  username: "Long",
  score: 1,
};

const sv3 = {
  username: "JohnDoe",
  score: 80,
};
const sinhvien = [sv1, sv2, sv3];

// sinhvien.forEach((item, index) => {
//   console.log(index + 1, item.username);
// });
const person = {
  name: "SangVuong",
  age: 20,
  address: "Thanh Hoa",
};
// for (let key in person) {
//   console.log(key, person[key]);
// }
// for (let value of Object.values(person)) {
//   console.log(value);
// }
for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
