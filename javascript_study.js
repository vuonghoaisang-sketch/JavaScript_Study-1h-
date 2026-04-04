const myUN = document.querySelector(".UN");
const myPW = document.querySelector(".PW");
const myDN = document.querySelector(".DN");

myDN.addEventListener("click", function () {
  if (myUN.value === "hoidanit@gmail.com" && myPW.value === "123456") {
    alert("Dang nhap thanh cong!");
    myUN.style.borderColor = "black";
    myPW.style.borderColor = "black";
  } else {
    alert("Dang nhap that bai!");
    myUN.style.borderColor = "red";
    myPW.style.borderColor = "red";
  }
});
