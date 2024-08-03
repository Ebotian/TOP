function add7(num) {
	return num + 7;
}
function multiply(num1, num2) {
	return num1 * num2;
}
function capitalize(string) {
	firstchar = string.charAt(0).toUpperCase();
	restchar = string.slice(1).toLowerCase();
	return firstchar + restchar;
}
function lastLetter(string) {
	return string.slice(-1);
}
let myfun = (a, b) => a + b;

let answer = parseInt(prompt("Enter a number:"));
console.log(add7(answer));
