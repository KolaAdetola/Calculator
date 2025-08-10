// const hello= document.querySelector('.hello')
// const words = document.querySelectorAll('span')
// const hello2 =document.getElementsByClassName('hello2')
// const hello3 =document.getElementById('middleSpan')
// const hello4 =document.getElementsByClassName('hello4')
// const hello5 =document.getElementsByClassName('hello5')

//  hello.getAttribute("class");
//  hello.setAttribute("class", "hello2");
//  hello.removeAttribute("class");

// console.log(hello3)

// console.log(hello)
// console.log(hello2)
// console.log(hello3)
// // console.log(hello4)
// // console.log(hello5)

// const title = document.getElementById("myTitle");
// title.style.color = "red";
// title.style.display = "block";

// function changeBg(color) {
//   title.style.backgroundColor = color;
//   title.style.color = "white";
// }

// var newDiv = document.createElement("div");
// newDiv.className = "hello2";
// // Creating a text node
// var newContent = document.createTextNode("Hi, how are you doing?");
// // Adding the text node to the newly created div
// newDiv.appendChild(newContent);
// // Adding the newly created element and its content into the DOM
// var currentDiv = document.getElementById("main");
// document.body.appendChild(newDiv, currentDiv);

// const btn = document.querySelector(".alert");
// btn.addEventListener("click", () => {
//     btn.style.backgroundColor = "red";
//     btn.style.color = "white";
//     btn.style.border = "none";
//     btn.style.padding = "10px 20px";
//     btn.style.fontSize = "16px";
//     btn.style.cursor = "pointer";
//     // alert("Button clicked!");
// });














const display = document.querySelector("#display");
const decimal = document.querySelector(".dot");
const backSpace = document.querySelector("#back");
const numberBtn = document.querySelectorAll(".num");
const operatorBtn = document.querySelectorAll(".op");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");



function updateDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        alert (error.message);
    }
}
function handleBackspace() {
    display.value = display.value.slice(0, -1);
}







