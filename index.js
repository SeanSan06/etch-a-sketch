let rainbowActive = true;
let grayscaleActive = false;
let grayscaleColor = 0;

const q_drawingArea = document.querySelector("#drawing-area");
function drawGrid(userInputForGridBox) {
    let grids = userInputForGridBox;
    for(let i = 0; i < grids*grids; ++i) {
        const gridBoxElement = document.createElement("div");

        setSizeGridBox(gridBoxElement, grids);
        q_drawingArea.appendChild(gridBoxElement);
        
        gridBoxElement.addEventListener("mouseover", () => {
            if(rainbowActive) {
                let red = Math.floor(Math.random() * 256);
                let green = Math.floor(Math.random() * 256);
                let blue = Math.floor(Math.random() * 256);
                gridBoxElement.style.backgroundColor =`rgb(${red}, ${green}, ${blue})`;
            }
            if(grayscaleActive) {
                grayscaleColor += 5;
                if(grayscaleColor >= 255) {
                    grayscaleColor = 0;
                }
                gridBoxElement.style.backgroundColor =`rgb(${grayscaleColor}, ${grayscaleColor}, ${grayscaleColor})`;
            }
            if(blackBrushActive) {
                gridBoxElement.style.backgroundColor =`rgb(${0}, ${0}, ${0})`;
            }
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
        askForGridSize();
    } else if(userInputForGridBox > 100 || userInputForGridBox <= 0) {
        askForGridSize();
    } else {
        drawGrid(userInputForGridBox);
    }
}

const q_sizing_button = document.querySelector("#sizing-button");
q_sizing_button.addEventListener("click", (event) => {
    removeAllChildNodes();
    askForGridSize();
});

function removeAllChildNodes() {
    while (q_drawingArea.firstChild) {
        q_drawingArea.removeChild(q_drawingArea.firstChild);
    }
}

const q_rainbow_button = document.querySelector("#random-color-button");
q_rainbow_button.addEventListener("click", (event) => {
    rainbowActive = true;
    grayscaleActive = false;
    blackBrushActive = false;  
});

const q_grayscale_button = document.querySelector("#gray-scale-button");
q_grayscale_button.addEventListener("click", (event) => {
    rainbowActive = false;
    grayscaleActive = true; 
    blackBrushActive = false;  
});

const q_black_brush_button = document.querySelector("#black-brush-button");
q_black_brush_button.addEventListener("click", (event) => {
    rainbowActive = false;
    grayscaleActive = false;
    blackBrushActive = true;  
});

askForGridSize();