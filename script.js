const container = document.querySelector('.container');
const gridSizeButton = document.createElement('button');
const clearButton = document.createElement('button');
const eraser = document.createElement('button');
const colorButton = document.createElement('button');

gridSizeButton.textContent = "Choose Grid Size";
document.body.appendChild(gridSizeButton);
clearButton.textContent = "Clear";
document.body.appendChild(clearButton);
eraser.textContent = "Eraser";
document.body.appendChild(eraser);
colorButton.textContent = 'Color';
document.body.appendChild(colorButton);

//function to fill container with the squares
function makeSquaresGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide*squaresPerSide; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
        div.style.flexBasis = `${600/squaresPerSide}px`;
    }
}


// function to get gridSize.
function getGridSize() {
    Array.from(container.children).forEach(child => {
        child.remove();
    });
    squares = prompt("Enter Grid Size(limit: 100) ");
    if (squares == undefined || +squares > 100) {
        return makeSquaresGrid(16);
    } else {
        return makeSquaresGrid(+squares);
    }   
}

makeSquaresGrid(16);


//Function to get rainbow effect on squares.
function rainbow() {
    return `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} / ${Math.random() * 0.999

    })`;
}

function colorClassic() {
    return '#000000';
}


// Function to change colorButton on an event
function changeColor(event) {
    event.target.style.backgroundColor = rainbow();
}


// Adding Event delegation on container
container.addEventListener('mouseover', changeColor)

/
gridSizeButton.addEventListener('click', getGridSize);

// Adding clear feature
clearButton.addEventListener('click', () => {
    Array.from(container.children).forEach(child => {
        child.style.backgroundColor = "#FFFFFF";
    })
})

// Adding eraser feature 
const eraseMe = (e) => {
    e.target.style.backgroundColor = '#FFFFFF';
}

eraser.addEventListener('click', () => {
    container.addEventListener('mouseover', eraseMe);
})

// Adding event listener to colorButton button 
colorButton.addEventListener('click', () => {
    container.removeEventListener('mouseover', eraseMe)
    container.addEventListener('mouseover', changeColor);
})


