var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButton();
    setupSquare();
    reset();
}

function setupModeButton() {
    for (var j = 0; j < modeButtons.length; j++) {
        modeButtons[j].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquare() {
    for (var i = 0; i < squares.length; i++) {
        //add initial colors
        squares[i].style.backgroundColor = colors[i];

        //add click listeners
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                h1.style.backgroundColor = pickedColor;
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeColor(pickedColor);
            } else {
                messageDisplay.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

function reset() {
    h1.style.backgroundColor = "steelblue";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = null;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

resetButton.addEventListener("click", function () {
    reset();
});

function changeColor(pickedColor) {
    for (var j = 0; j < squares.length; j++) {
        squares[j].style.backgroundColor = pickedColor;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    } 
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}