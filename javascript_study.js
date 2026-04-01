console.log("SangVuong");

const score = [10, 8, 3, 7, 5];

// score.forEach((item, index) => {
//   console.log(`Điểm số thứ ${index + 1} là: ${item}`);
// });
const scorex2 = score.map((item, index) => {
  return item * 2;
});
console.log(score);
console.log(scorex2);
