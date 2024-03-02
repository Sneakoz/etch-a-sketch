// Import css styles
const accentColor = getComputedStyle(document.body).getPropertyValue('--accent-color');
const inactiveColor = getComputedStyle(document.body).getPropertyValue('--inactive-color');

// Declare areaSize which is the width of the sketch area and pixelsOneWay
const areaSize = 700;
let pixelsOneWay = 16;

// Import sketch area and set width equal to *areaSize*
const sketchArea = document.querySelector('#sketchArea');
sketchArea.style.width = sketchArea.style.height = `${areaSize}px`;

// Import the sliderContainer ,slider and sliderText
const sliderContainer = document.querySelector('#sliderContainer');
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
    let pixelSize = areaSize / pixelsOneWay ;

    for (let i = 0; i < pixelsTotal; i++) {
        const pixel = document.createElement('div');

        pixel.style.width = pixel.style.height = `${pixelSize}px`;
        pixel.classList.add('pixel');

        sketchArea.appendChild(pixel);

        pixel.addEventListener('mouseover', changePixelColor)
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
const gridToggle = document.querySelector('#gridToggle');
const eraser = document.querySelector('#eraser');
const brush = document.querySelector('#brush');
const palette = document.querySelector('#palette');




// Create the initial pixels (16x16)
createPixels()
