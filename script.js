const areaSize = 700;
let pixelsOneWay = 16;
let pixelsTotal = pixelsOneWay * pixelsOneWay;
let pixelSize = areaSize / pixelsOneWay ;

const sketchArea = document.querySelector('#sketchArea');
sketchArea.style.width = sketchArea.style.height = `${areaSize}px`;

const sizebtn = document.querySelector('#prompt');
sizebtn.addEventListener('click', changePixelCount);

const clearbtn = document.querySelector('#clear');
clearbtn.addEventListener('click', () => {
    removePixels()
    createPixels()
})

function changePixelCount() {
    let newPixelCount = prompt('Enter Pixel Count. Max = 100');
    console.log(newPixelCount)
    if (newPixelCount > 100) {
        alert('Max Pixel count is 100 by 100')
    } else {
        pixelsTotal = newPixelCount * newPixelCount;
        pixelSize = areaSize / newPixelCount
        removePixels()
        createPixels()
    }
}

function createPixels() {
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

createPixels()
