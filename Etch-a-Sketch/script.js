const DEFAULT_GRID_SIZE = 16;

function createGrid(size) {
	for (let width = 0; width < size; width++) {
		for (let height = 0; height < size; height++) {
			const div = document.createElement("div");
			div.classList.add("grid");
			const r = Math.floor(Math.random() * 256);
			const g = Math.floor(Math.random() * 256);
			const b = Math.floor(Math.random() * 256);
			div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
			div.style.width = `${640 / size}px`;
			div.style.height = `${640 / size}px`;
			document.querySelector("#container").appendChild(div);
		}
	}
}

function drawColor(grid) {
	grid.forEach((div) => {
		let opacity = 1;
		div.addEventListener("mouseover", () => {
			if (opacity > 0) {
				opacity -= 0.1;
				const r = Math.floor(Math.random() * 256);
				const g = Math.floor(Math.random() * 256);
				const b = Math.floor(Math.random() * 256);
				div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
			}
		});
	});
}

createGrid(DEFAULT_GRID_SIZE);
const grid = document.querySelectorAll(".grid");
drawColor(grid);

button = document.querySelector("#set");
button.addEventListener("click", () => {
	size = prompt("Enter the size of the grid you want to create");
	if (size < 100) {
		document.querySelector("#container").innerHTML = "";
		createGrid(size);
		const grid = document.querySelectorAll(".grid");
		drawColor(grid);
	} else {
		alert("Size should be less than 100");
	}
});
