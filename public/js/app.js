let memoreyGame = document.querySelector(".contianer-game")
let fruits = ["apple", "banana", "cherry", "grape","strawberry","orange","pineapple", "avocado"]

function initGame() {

    memoreyGame.innerHTML = ""
    
    let gameCarts = [...fruits, ...fruits]
    let flippedCards = []
    let locGame = false

    gameCarts.sort(() => Math.random() - 0.5)

    gameCarts.forEach(cart => {
        let divCart = document.createElement("div")
        let front = document.createElement("div")
        let back = document.createElement("div")

        divCart.classList.add("cart")
        front.classList.add("front")
        back.classList.add("back")

        front.textContent = "❓"
        back.innerHTML = `<img src="./public/images/${cart}.png" alt="">`
        divCart.setAttribute("data-fruit", cart)

        divCart.append(front, back)
        memoreyGame.appendChild(divCart)

        divCart.addEventListener("click", () => {
            if (locGame || divCart.classList.contains("flipped")) return
            divCart.classList.add("flipped")
            flippedCards.push(divCart)

            if (flippedCards.length < 2) return
            locGame = true

            if (flippedCards[0].dataset.fruit === flippedCards[1].dataset.fruit) {
                setTimeout(() => {
                    flippedCards[0].style.display = "none"
                    flippedCards[1].style.display = "none"
                    flippedCards = []
                    locGame = false
                }, 1000)
            } else {
                setTimeout(() => {
                    flippedCards[0].classList.remove("flipped")
                    flippedCards[1].classList.remove("flipped")
                    flippedCards = []
                    locGame = false
                }, 1000)
            }
        })
    })
}

initGame()

let restardBtn = document.createElement("button")

restardBtn.textContent = "Restart Game"
restardBtn.id = "restardBtn"
document.body.appendChild(restardBtn)

restardBtn.addEventListener("click", initGame)
