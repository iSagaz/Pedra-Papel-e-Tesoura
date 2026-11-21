const optionImages = document.querySelectorAll(".option-image")
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")
const userResult = document.querySelector(".user-result img")
const computerResult = document.querySelector(".computer-result img")

const computerImg = ['img/pedra.png', 'img/papel.png', 'img/tesoura.png']


const winner = {
    RR: "Empate",
    RP: "Computador",
    RS: "Você",
    PP: "Empate",
    PR: "Você",
    PS: "Computador",
    SS: "Empate",
    SR: "Computador",
    SP: "Você"
}

const loser = {

}

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const userIndex = Array.from(optionImages).indexOf(clickedImage)


    container.classList.add("start")
    resultText.textContent = "..."
    userResult.src = computerResult.src = 'img/pedra.png'

    setTimeout(() => {
        container.classList.remove("start")


        userResult.src = computerImg[userIndex]


        const randomNumber = Math.floor(Math.random() * computerImg.length )
        computerResult.src = computerImg[randomNumber]
        
        const userValue = ["R", "P", "S" ] [userIndex]
        const computerValue = ["R", "P", "S" ] [randomNumber]
        const userComputerResult= userValue + computerValue
        const finalResult = winner[userComputerResult]

        resultText.textContent = userValue === computerValue ? 'empate' : finalResult + ' Ganhou'
    }, 2000);
}

optionImages.forEach(img => {
    img.addEventListener("click", handleOptionClick)
})


