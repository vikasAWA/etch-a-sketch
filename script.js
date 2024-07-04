const container = document.querySelector('.container');
const gridSizeButton = document.createElement('button');
gridSizeButton.textContent = "Choose Grid Size";
document.body.appendChild(gridSizeButton);

//function to fill container with the squares
function makeSquaresGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide*squaresPerSide; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
        div.style.flexBasis = `${600/squaresPerSide}px`;
    }
}

makeSquaresGrid(10);

// function to get gridSize.
function getGridSize() {
    squares = parseInt(prompt("Enter Grid Size"));
    return squares;
}



//Function to get rainbow effect on squares.
function rainbow() {
    return `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} / ${Math.random() * 0.999

    })`;
}


// Function to change color on an event
function changeColor(event) {
    event.target.style.backgroundColor = rainbow();
}

//Added an mouseover event listener to each square. Square will change it's color whenever we hover over it.
Array.from(container.children).forEach((child) => {
    child.addEventListener("mouseover", changeColor)
})

