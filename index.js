const drawingArea = document.querySelector("#drawing-area");
function grid(userInputForGridBox) {
    let grids = userInputForGridBox;
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

function askForGridBox() {
    userInputForGridBox = prompt("Enter a grid size between 1-100!");
    userInputForGridBox = Number(userInputForGridBox);
    let invalid = true;
    if(!Number.isInteger(userInputForGridBox)) {
        askForGridBox()
    } else if(userInputForGridBox > 100 || userInputForGridBox <= 0) {
        askForGridBox()
    }

    grid(userInputForGridBox);
}

askForGridBox();