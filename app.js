let check = document.querySelector(".btn-check")
let input = document.querySelector(".input")
let text = document.querySelector(".text")
let firstNum = document.querySelector(".first")
let secondNum = document.querySelector(".second")
let text2 = document.querySelector(".text2")
let testNum = document.querySelector(".test-number")
let again = document.querySelector(".btn-again")

let random = Math.floor(Math.random() * 101)
console.log(random);

check.addEventListener("click", () => {
    let tahmin = parseInt(input.value)

    if(tahmin < 0 || tahmin > 100 || isNaN(tahmin)) {
        text.textContent = "Enter a number between 0 and 100"
        text2.style.display = "none"
    } else {
        if(tahmin == random) {
            text.textContent =  `🎉 Congratulations. You got it in ${+(testNum.textContent) + 1} guesses 🎉`
            text2.style.display = "none"
            again.style.display = "block"
            check.style.display = "none"
            tekrar()
        } else if(tahmin < random) {
            text.textContent = "🔽 Increase 🔽"
            firstNum.textContent = tahmin
            text2.style.display = "block"
            testNum.textContent++
        } else {
            text.textContent = "🔼 Reduce 🔼"
            secondNum.textContent = tahmin
            text2.style.display = "block" 
            testNum.textContent++
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

let tekrar = function() {
    again.addEventListener("click", () => {
        random = Math.floor(Math.random() * 101)
        console.log(random);
        firstNum.textContent = 0
        secondNum.textContent = 100
        input.focus()
        again.style.display = "none"
        text.textContent = ""
        input.value = ""
        check.style.display = "block"
    })
}