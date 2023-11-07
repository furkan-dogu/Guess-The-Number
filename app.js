let check = document.querySelector(".btn")
let input = document.querySelector(".input")
let text = document.querySelector(".text")

let random = Math.floor(Math.random() * 101)
console.log(random);

check.addEventListener("click", () => {
    let tahmin = parseInt(input.value)

    if(tahmin < 0 || tahmin > 100 || isNaN(tahmin)) {
        text.textContent = "Enter a number between 0 and 100"
    } else {
        if(tahmin == random) {
            text.textContent =  "Congratulations 🎉"
            // text.textContent = ""
        } else if(tahmin < random) {
            text.textContent = "👆 Increase 👆"
        } else {
            text.textContent = "👇 Reduce 👇"
        }
    }
})

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        check.click()
    }
})