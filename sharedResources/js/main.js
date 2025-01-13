"use strict";
const docItem = selector => document.querySelector(selector);

// var $ = function (id) {
//     return document.getElementById(id); 
// };
let currentYear = () =>{
	let d = new Date();
	let year = d.getFullYear();

	docItem("#currentYear").textContent = year;

	
};

document.addEventListener("DOMContentLoaded", () =>{
	//run function as soon as it is safe
	currentYear();
});


//If there is another js file and that file has a window.onload, list this one first. 
//In the window.onload of the other file, call currentYear(); first then other code.
//Unit 4 - simpleIfElse.html (checkBoolean.js)
//Unit 6 - methods.html (divideMe.js)
