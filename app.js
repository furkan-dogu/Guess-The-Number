const check = document.querySelector(".btn-check")
const input = document.querySelector(".input")
const text = document.querySelector(".text")
const firstNum = document.querySelector(".first")
const secondNum = document.querySelector(".second")
const text2 = document.querySelector(".text2")
const testNum = document.querySelector(".test-number")
const again = document.querySelector(".btn-again")
const score = document.querySelector(".score")
const scoreNum = document.querySelector(".score-number")
const h1 = document.querySelector("h1")
const container = document.querySelector(".container")

let random = Math.floor(Math.random() * 101)

check.addEventListener("click", () => {
    let tahmin = parseInt(input.value)

    if(tahmin < 0 || tahmin > 100 || isNaN(tahmin)) {
        text.textContent = "Enter a number between 0 and 100"
        text2.style.display = "none"
        scoreNum.textContent++
    } else {
        if(tahmin == random) {
            h1.textContent =  `🎉 Congratulations. You got it in ${+(testNum.textContent) + 1} guesses 🎉`
            tekrar()
            
        } else if(tahmin < random) {
            text.textContent = "🔼 Increase 🔼"
            firstNum.textContent = tahmin
            text2.style.display = "block"
            testNum.textContent++
        } else {
            text.textContent = "🔽 Reduce 🔽"
            secondNum.textContent = tahmin
            text2.style.display = "block" 
            testNum.textContent++
        }
    }
    if(scoreNum.textContent > 1){
        scoreNum.textContent--
    } else if(scoreNum.textContent == 1) {
        h1.textContent = "😢 You lost the game 😢"
        tekrar()
    }
})

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        check.click()
    }
})

window.addEventListener("load", () => {
    input.focus()
})

again.addEventListener("click", () => {
        random = Math.floor(Math.random() * 101);
        window.location.reload()
})

const tekrar = () => {
    text.textContent = ""
    check.style.display = "none"
    again.style.display = "block"
    text2.textContent = ""
    score.style.display = "none"
    input.style.display = "none"
    container.style.justifyContent = "center"
}
