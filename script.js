const container = document.querySelector('.container');


function makeSquaresGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide*squaresPerSide; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
}

makeSquaresGrid(16);

