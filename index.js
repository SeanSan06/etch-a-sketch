const drawingArea = document.querySelector("#drawing-area");
function grid() {
    for(let i = 0; i < 64; ++i) {
        const gridBox = document.createElement("div");
        gridBox.style.border = "1px solid blue";
        drawingArea.appendChild(gridBox);
    }
}

grid();