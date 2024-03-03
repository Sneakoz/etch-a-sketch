// Import css styles
const accentColor = getComputedStyle(document.body).getPropertyValue('--accent-color');
const inactiveColor = getComputedStyle(document.body).getPropertyValue('--inactive-color');

// Declare areaSize which is the width of the sketch area and pixelsOneWay
const areaSize = 700;
let pixelsOneWay = 16;

// Import sketch area and set width equal to *areaSize*
const sketchArea = document.querySelector('#sketchArea');
sketchArea.style.width = sketchArea.style.height = `${areaSize}px`;

// Import the slider and sliderText
const slider = document.querySelector("#slider");
const sliderText = document.querySelector('#sliderText');

// Set the sliderValue to the value of the *pixelsOneWay*
sliderText.textContent = `Resolution = ${slider.value} x ${slider.value}`

// Import clear button and add functionality
const clearbtn = document.querySelector('#clear');
clearbtn.addEventListener('click', () => {
    removePixels()
    createPixels()
})

// This function creates pixels on the sketch area using the *pixelsOneWay* value and adds an event listener
// that applies the funtion *changePixelColor* of the pixel on *mouseover*
function createPixels() {
    let pixelsTotal = pixelsOneWay * pixelsOneWay;
    let pixelSize = areaSize / pixelsOneWay;

    for (let i = 0; i < pixelsTotal; i++) {
        const pixel = document.createElement('div');

        pixel.style.width = pixel.style.height = `${pixelSize}px`;
        pixel.classList.add('pixel');

        if (gridVisible) {
            pixel.style.outline = 'none';
        } else {
            pixel.style.outline = '1px solid whitesmoke';
        }

        sketchArea.appendChild(pixel);

        pixel.addEventListener('mouseover', changePixelColor);
    }
}


// This function removes all pixels from the sketch area
function removePixels() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild)
    }
}

// This function changes the color to black of the pixel its used on
function changePixelColor() {
    this.style.backgroundColor = 'black'
}

// This is an event listener on the slider that changes resolution
slider.oninput = function () {
    let newSliderText = `Resolution = ${this.value} x ${this.value}`;
    sliderText.textContent = newSliderText;
    pixelsOneWay = this.value;
    removePixels();
    createPixels();
}

//
// Header buttons functionality here
//

// Import header buttons
const gridTogglebtn = document.querySelector('#gridToggle');
const eraserbtn = document.querySelector('#eraser');
const brushbtn = document.querySelector('#brush');
const palettebtn = document.querySelector('#palette');

// This is the grid toggle function and event listener
let gridVisible = true;
function gridToggle() {
    gridVisible = !gridVisible;
    const pixel = document.querySelectorAll('.pixel');
    if (gridVisible == true) {
        gridTogglebtn.style.color = accentColor;
        pixel.forEach(currentPixel => {
            currentPixel.style.outline = 'none';
        });
    } else {
        gridTogglebtn.style.color = inactiveColor;
        pixel.forEach(currentPixel => {
            currentPixel.style.outline = '1px solid whitesmoke'
        });
    };
}

gridTogglebtn.addEventListener('click', gridToggle);

// This is the erease function and event listener




// Create the initial pixels (16x16)
createPixels()