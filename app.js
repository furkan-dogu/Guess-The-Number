const check = document.querySelector(".btn-check")
const input = document.querySelector(".input")
const text = document.querySelector(".text")
const firstNum = document.querySelector(".first")
const secondNum = document.querySelector(".second")
const text2 = document.querySelector(".text2")
const testNum = document.querySelector(".test-number")
const restart = document.querySelector(".btn-restart")
const score = document.querySelector(".score")
const scoreNum = document.querySelector(".score-number")
const h1 = document.querySelector("h1")

let random = Math.floor(Math.random() * 101)

check.addEventListener("click", () => {
    let tahmin = parseInt(input.value)

    if(scoreNum.textContent > 1){
        scoreNum.textContent--
    } else if(scoreNum.textContent == 1) {
        h1.textContent = "😢 You lost the game 😢"
        loser.play()
        tekrar()
        document.querySelector(".text-div").style.display = "none"
    } 

    if(tahmin < 0 || tahmin > 100 || isNaN(tahmin)) {
        text.style.display = "block"
        text.textContent = "Enter a number between 0 and 100"
        text2.style.display = "none"
        scoreNum.textContent++
    } else {
        if(tahmin == random) {
            h1.textContent =  `🎉 Congratulations 🎉`
            text.textContent = `You got it in ${+(testNum.textContent) + 1} guesses`
            applaud.play()
            loser.pause()
            tekrar()
            text.style.display = "block"
            document.querySelector(".text-div").style.display = "block"
        } else if(tahmin < random) {
            text.textContent = "🔼 Increase 🔼"
            firstNum.textContent = tahmin
            text2.style.display = "block"
            testNum.textContent++
            text.style.display = "block"
        } else {
            text.textContent = "🔽 Reduce 🔽"
            secondNum.textContent = tahmin
            text2.style.display = "block" 
            testNum.textContent++
            text.style.display = "block"
        }
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

restart.addEventListener("click", () => {
        random = Math.floor(Math.random() * 101);
        window.location.reload()
})

const tekrar = () => {
    check.style.display = "none";
    restart.style.display = "block";
    text2.textContent = "";
    score.style.display = "none";
    input.style.display = "none";
    h1.style = "border: 5px solid turquoise; box-shadow: 0 0 20px turquoise , inset 0 0 20px turquoise; background: rgba(0, 0, 0, 0.7); color: white; border-radius: 20px; padding: 1rem; ";
}
