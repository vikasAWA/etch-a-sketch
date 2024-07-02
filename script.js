const container = document.querySelector('.container');

//function to fill container with the squares
function makeSquaresGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide*squaresPerSide; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
}

makeSquaresGrid(16);


// Function to change color on an event
function changeColor(event) {
    event.target.style.backgroundColor = "#414141";
}

//Added an mouseover event listener to each square. Square will change it's color whenever we hover over it.
Array.from(container.children).forEach((child) => {
    child.addEventListener("mouseover", changeColor)
})

