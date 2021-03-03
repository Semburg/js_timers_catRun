
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

console.log(rightWall)

function walk() {
    disableDoubleRuns()

    console.log("walk")
    clearCat = setInterval(animateCat, 10)
    btn1.disabled
}
function standingStill() {
    disableDoubleRuns()
    console.log("stop!")
}
function turnAround() {
    direction *= -1
    console.log("around")
    rotateCat()
}
function speedUp() {
    disableDoubleRuns()
    console.log("speed up!")
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

        console.log(cat.style.left)
        console.log(rightWall)
        // console.log(leftPos)
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

    console.log(window.innerWidth - catWidth)

    console.log(window.innerWidth)
    console.log(catWidth)
}

function rotateCat(){
    rotationUndex += 180
    cat.style.transform = "rotateY(" + rotationUndex + "deg)"
    
}

function disableDoubleRuns(){
    clearInterval(clearCat)
    clearInterval(clearCat2)
}
