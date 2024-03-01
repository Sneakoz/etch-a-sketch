// Declare areaSize which is the width of the sketch area and pixelsOneWay
const areaSize = 700;
let pixelsOneWay = 16;

// Import sketch area and set width equal to *areaSize*
const sketchArea = document.querySelector('#sketchArea');
sketchArea.style.width = sketchArea.style.height = `${areaSize}px`;

// Import the sliderContainer ,slider and sliderValue
const sliderContainer = document.querySelector('#sliderContainer');
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector('#sliderValue');

// Set the sliderValue to the value of the pixelsOneWay
sliderValue.textContent = `${slider.value} x ${slider.value} Resolution`


const sizebtn = document.querySelector('#prompt');
sizebtn.addEventListener('click', changePixelCount);

const clearbtn = document.querySelector('#clear');
clearbtn.addEventListener('click', () => {
    removePixels()
    createPixels()
})

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

function removePixels() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild)
    }
}

function changePixelColor() {
    this.style.backgroundColor = 'black'
}

function changePixelCount() {
    let newPixelCount = prompt('Enter Pixel Count. Max = 100');
    console.log(newPixelCount)
    if (newPixelCount > 100) {
        alert('Max Pixel count is 100 by 100')
    } else {
        pixelsOneWay = newPixelCount;
        removePixels()
        createPixels()
    }
}

createPixels()
