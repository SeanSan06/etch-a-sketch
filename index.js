const drawingArea = document.querySelector("#drawing-area");
function grid() {
    let grids = 8;
    for(let i = 0; i < grids*grids; ++i) {
        const gridBox = document.createElement("div");
        // gridBox.style.border = "1px solid blue";
        sizeEachGridBox(gridBox, grids);
        drawingArea.appendChild(gridBox);

        gridBox.addEventListener("mouseover", () => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            gridBox.style.backgroundColor =`rgb(${red}, ${green}, ${blue})`;
        });
    }
}

function sizeEachGridBox(gridBox, grids) {
    gridBox.style.width = (100.0/grids) + "%";
    gridBox.style.aspectRatio = "1/1";

}

grid();