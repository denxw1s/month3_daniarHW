
// HOMEWORK 1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')


const regex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;

function isValidGmail (email) {
    const inputValue = gmailInput.value
    if (regex.test(inputValue)){
        gmailResult.textContent = 'все правельно'

    }else {
        gmailResult.textContent = 'ведите коректный gmail'
    }
}

gmailButton.addEventListener('click', isValidGmail )


const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let posX = 0
let posY = 0



function move () {
    if (posX < 449 && posY === 0){
        posX += 2
        childBlock.style.left = `${posX}px`
        setTimeout(move,10)
    }else if (posX >=449 && posY < 449){
        posY +=2
        childBlock.style.top = `${posY}px`
        setTimeout(move,10)
    }else if (posX > 0 && posY > 0 ){
        posX-=2
        childBlock.style.left = `${posX}px`
        setTimeout(move,10)
    }else if (posX === 0 && posY > 0){
        posY -= 2
        childBlock.style.top = `${posY}px`
        setTimeout(move,10)
    }
}
move()

const timer = document.querySelector('#secondsS')
const btnStart = document.querySelector('#start')
const btnStop = document.querySelector('#stop')
const btnReset = document.querySelector('#reset')

let num = 0
let resetTimer = null


const updateTimer = () => {
    num++
    timer.innerText = num
}

btnStart.addEventListener('click', () => {
    if (!resetTimer) {
        resetTimer = setInterval(updateTimer, 1000)
    }
})


btnReset.addEventListener('click', () => {
    clearInterval(resetTimer)
    resetTimer = null
    num = 0
    timer.innerText = num
})


btnStop.addEventListener('click', () => {
    clearInterval(resetTimer)
    resetTimer = null
})



