creategrid(16)

function creategrid(size) {
    let container = document.querySelector('#container');

    for (let i = 0; i < size; i++) {
        newdiv = document.createElement('div');
        container.appendChild(newdiv)
    }
}