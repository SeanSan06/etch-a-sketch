let rainbowActive = true;
let grayscaleActive = false;
let grayscaleColor = 0;
let blackBrushActive = false;
let mouseDown = false;

const q_drawingArea = document.querySelector("#drawing-area");
function drawGrid(userInputForGridBox) {
    let grids = userInputForGridBox;
    for(let i = 0; i < grids*grids; ++i) {
        const gridBoxElement = document.createElement("div");

        setSizeGridBox(gridBoxElement, grids);
        q_drawingArea.appendChild(gridBoxElement);
        gridBoxElement.style.backgroundColor =`rgb(${255}, ${255}, ${255})`;
        gridBoxElement.style.border = "1px solid white";
        gridBoxElement.style.boxSizing = "borderBox";
        

        function paintDiv(div) {
            if(rainbowActive) {
                let red = Math.floor(Math.random() * 256);
                let green = Math.floor(Math.random() * 256);
                let blue = Math.floor(Math.random() * 256);
                gridBoxElement.style.backgroundColor =`rgb(${red}, ${green}, ${blue})`;
                gridBoxElement.style.border =`1px solid rgb(${red}, ${green}, ${blue})`;
            }
            if(grayscaleActive) {
                grayscaleColor += 5;
                if(grayscaleColor >= 255) {
                    grayscaleColor = 0;
                }
                gridBoxElement.style.backgroundColor =`rgb(${grayscaleColor}, ${grayscaleColor}, ${grayscaleColor})`;
                gridBoxElement.style.border =`1px solid rgb(${grayscaleColor}, ${grayscaleColor}, ${grayscaleColor})`;
            }
            if(blackBrushActive) {
                gridBoxElement.style.backgroundColor =`rgb(${0}, ${0}, ${0})`;
                gridBoxElement.style.border =`1px solid rgb(${0}, ${0}, ${0})`;
            }
        };

        gridBoxElement.addEventListener("mousedown", () => paintDiv(gridBoxElement));
        gridBoxElement.addEventListener("mouseenter", () => {
            if(mouseDown) {
                paintDiv(gridBoxElement);
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

// Sets whether the mouse is down is true or false.
q_drawingArea.addEventListener("mousedown", () => {
    mouseDown = true;
})
document.addEventListener("mouseup", () => {
    mouseDown = false;
})

// CDN html2canvas code: captures the drawing area and downloads as a PNG
const q_save_as_png_button = document.querySelector("#save-as-png-button");
q_save_as_png_button.addEventListener("click", (event) => {
    html2canvas(document.querySelector("#drawing-area")).then(canvas => {
        const link = document.createElement("a");
        link.download = "pixel-drawing.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
});

askForGridSize();