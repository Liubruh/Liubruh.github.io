/* 选择器和文本内容 */
// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
/* 实现点击图片切换功能 */
const myImage = document.querySelector("img");
myImage.onclick = function () {
  const myImageSrc = myImage.getAttribute("src");
  if (myImageSrc === "images/01.jpeg")
    myImage.setAttribute("src", "images/02.png"); // ⚠️这里的src也要在双引号里面
  else {
    myImage.setAttribute("src", "images/01.jpeg");
  }
};
/* 添加个性化欢迎信息 */
const myHeading = document.querySelector("h1");
const myButton = document.querySelector("button");
function change_user() {
  const myName = prompt("Please enter your name!");
  if (!myName) change_user();
  else {
    localStorage.setItem("name", myName); // 💀 localStorage 是指存储在浏览器端的信息
    myHeading.textContent = myName;
  }
}

if (!localStorage.getItem("name")) change_user();
else myHeading.textContent = localStorage.getItem("name");

myButton.onclick = function () {
  change_user();
};

/* 事件监听器 */
// document.querySelector("html").addEventListener("click", function () {
//   alert("don`t touch me");
// });

/* 函数定义和调用 */
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

// alert(multiply(4, 7));

/* if判断以及alert警告框输出 */
// alert("alert is a function that shows a message to the user.");
// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("I love chocolate ice cream!");
// } else {
//   alert("But chocolate is my favorite...");
// }
