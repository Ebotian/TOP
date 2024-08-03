const body = document.querySelector("body");

const div = document.createElement("div");
div.style.cssText = "border: 5px soild black;background-color:pink";
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);
const p = document.createElement("p");
p.textContent = "ME TOO!";
div.appendChild(p);
body.appendChild(div);

// the JavaScript file
const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
	e.target.style.background = "blue";
	alert(e.target);
});
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
	// and for each one we add a 'click' listener
	button.addEventListener("click", () => {
		alert(button.id);
	});
});
