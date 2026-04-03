const myBtnSubmid = document.getElementById("SubmidBtn");
const input = document.getElementById("Name");

const prev = document.querySelector(".prev");
const prevName = localStorage.getItem("SangVuong");
if (prevName) {
  prev.innerHTML = `<b>${prevName}</b>`;
}
myBtnSubmid.addEventListener("click", function () {
  // console.log(input.value);
  localStorage.setItem("SangVuong", input.value);
  document.querySelector(".message").innerHTML = `<b>${input.value}</b>`;
});
