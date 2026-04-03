const myBtnElement = document.querySelector(".myBtn");
const myTextElement = document.querySelector(".myText");
const backBtnElement = document.querySelector(".backBtn");

myBtnElement.addEventListener("click", () => {
  console.log("clicked");
  myTextElement.style.color = "red";
  myTextElement.style.backgroundColor = "blue";
});

backBtnElement.addEventListener("click", () => {
  console.log("clicked");
  myTextElement.style.color = "black";
  myTextElement.style.backgroundColor = "white";
});
