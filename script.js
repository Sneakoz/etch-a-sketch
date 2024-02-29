const areaSize = 700;
let pixelsOneWay = 16;
let pixelsTotal = pixelsOneWay * pixelsOneWay;
let pixelSize = (areaSize / pixelsOneWay) ;


const sketchArea = document.querySelector('#sketchArea');
sketchArea.style.width = `${areaSize}px`;
sketchArea.style.height = `${areaSize}px`;

function changePixelColor() {
    this.style.backgroundColor = 'black'
}

function createPixels() {
    for (let i = 0; i < pixelsTotal; i++) {
        const pixel = document.createElement('div');

        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        pixel.classList.add('pixel');

        sketchArea.appendChild(pixel);

        pixel.addEventListener('mouseover', changePixelColor)
    }
}

createPixels()
