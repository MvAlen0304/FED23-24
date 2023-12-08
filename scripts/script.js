// JavaScript Document
console.log("hi");

var button = document.querySelector("button");
var deLijst = document.querySelector("nav ul");

button.onclick = toggleMenu;

function toggleMenu() {
	button.classList.toggle("open");
	deLijst.classList.toggle("open");
}