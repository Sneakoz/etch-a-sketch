const areaSize = 600;
let pixelsOneWay = 16;
let pixelsTotal = pixelsOneWay * pixelsOneWay;
let pixelSize = (areaSize / pixelsOneWay) ;


const sketchArea = document.querySelector('#sketchArea');
sketchArea.style.width = `${areaSize}px`;
sketchArea.style.height = `${areaSize}px`;


createPixels()

function createPixels() {
    for (let i = 0; i < pixelsTotal; i++) {
        const pixel = document.createElement('div');

        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        pixel.classList.add('pixel');

        sketchArea.appendChild(pixel);
    }
}