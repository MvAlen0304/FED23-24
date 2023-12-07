// JavaScript Document
console.log("hi");

var button = document.querySelector("button");

button.onclick = toggleMenu;

function toggleMenu() {
	button.classList.toggle("open");
}