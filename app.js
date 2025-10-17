const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");

let timeId = null;
let hitPosition; 
let result = 0;
let currentTime = 60;

function randumSquare() {
    squares.forEach((square) => { // for(let square of squares)
        square.classList.remove("mole");
    })
    let randumSquare = squares[Math.floor(Math.random()*9)];
    randumSquare.classList.add("mole");
    hitPosition = randumSquare.id;

}
squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
        if(square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});
function moveMole() {
    timeId = setInterval(randumSquare, 500);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if(currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timeId);
        alert("Game Over! Your final score is " + result );
    }
}

let countDownTimerId = setInterval(countDown, 1000);


