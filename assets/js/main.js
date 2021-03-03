
const btn1 = document.getElementById('btn1').addEventListener("click", walk)
const btn2 = document.getElementById('btn2').addEventListener("click", standingStill)
const btn3 = document.getElementById('btn3').addEventListener("click", turnAround)
const btn4 = document.getElementById('btn4').addEventListener("click", speedUp)
const cat = document.getElementById('cat')

let leftPos = 0;
let direction = 0;
let catWidth = 200;
let clearCat;
let clearCat2;
let rightWall = (window.innerWidth - catWidth) + "px"

let rotationUndex = 180;

function walk() {
    disableDoubleRuns()

    clearCat = setInterval(animateCat, 10)
    btn1.disabled
}
function standingStill() {
    disableDoubleRuns()
}
function turnAround() {
    direction *= -1
    rotateCat()
}
function speedUp() {
    disableDoubleRuns()
    if (direction != 0) {
        clearCat2 = setInterval(animateCat, 2)
    }
}

function animateCat() {

    runToRight()

    if (cat.style.left == rightWall){
        direction = -1;
        rotateCat()
        runToRight()

    }
    if (cat.style.left == "0px") {
        direction = 1;
        rotateCat()
        runToRight()
    }
}

function runToRight() {
    leftPos += direction
    cat.style.left = `${leftPos}px`;
}

function rotateCat(){
    rotationUndex += 180
    cat.style.transform = "rotateY(" + rotationUndex + "deg)"
    
}

function disableDoubleRuns(){
    clearInterval(clearCat)
    clearInterval(clearCat2)
}
