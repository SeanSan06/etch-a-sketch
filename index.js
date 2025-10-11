const drawingArea = document.querySelector("#drawing-area");
function grid() {
    for(let i = 0; i < 64; ++i) {
        const gridBox = document.createElement("div");
        // gridBox.style.border = "1px solid blue";
        drawingArea.appendChild(gridBox);

        gridBox.addEventListener("mouseover", () => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            gridBox.style.backgroundColor =`rgb(${red}, ${green}, ${blue})`;
        });
    }
}

grid();