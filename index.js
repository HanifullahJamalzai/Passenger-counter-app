// let saveEl = document.getElementById("save-el").innerHTML;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count");

let count = 0;
function increment() {
	count += 1;
	countEl.textContent = count;
	// countEl.innerText = count;
}

function save() {
	let countStr = count + " - ";
	// saveEl.innerText += countStr;
	saveEl.textContent += countStr;
	// document.getElementById("save-el").innerText += " " + count + " -";
	// console.log(saveEl, count);
	countEl.textContent = 0;
	count = 0;
}
