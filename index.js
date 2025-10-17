const drawingArea = document.querySelector("#drawing-area");
function drawGrid(userInputForGridBox) {
    let grids = userInputForGridBox;
    for(let i = 0; i < grids*grids; ++i) {
        const gridBoxElement = document.createElement("div");

        setSizeGridBox(gridBoxElement, grids);
        drawingArea.appendChild(gridBoxElement);

        gridBoxElement.addEventListener("mouseover", () => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            gridBoxElement.style.backgroundColor =`rgb(${red}, ${green}, ${blue})`;
        });
    }
}

function setSizeGridBox(gridBoxElement, grids) {
    gridBoxElement.style.width = (100.0/grids) + "%";
    gridBoxElement.style.aspectRatio = "1/1";

}

function askForGridSize() {
    userInputForGridBox = prompt("Enter a grid size between 1-100!");
    userInputForGridBox = Number(userInputForGridBox);
    let invalid = true;
    if(!Number.isInteger(userInputForGridBox)) {
        askForGridSize()
    } else if(userInputForGridBox > 100 || userInputForGridBox <= 0) {
        askForGridSize()
    }

    drawGrid(userInputForGridBox);
}

askForGridSize();