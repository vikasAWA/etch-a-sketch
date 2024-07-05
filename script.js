const container = document.querySelector('.container');
const gridSizeButton = document.createElement('button');
const clearButton = document.createElement('button')
gridSizeButton.textContent = "Choose Grid Size";
document.body.appendChild(gridSizeButton);
clearButton.textContent = "Clear";
document.body.appendChild(clearButton);

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


console.log(container)
//Function to get rainbow effect on squares.
function rainbow() {
    return `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} / ${Math.random() * 0.999

    })`;
}

function colorClassic() {
    return '#000000';
}


// Function to change color on an event
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



