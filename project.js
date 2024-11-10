let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let result = document.querySelector("#result");

rock.addEventListener('click', () => { gameFunc("rock") });
paper.addEventListener('click', () => { gameFunc("paper") });
scissor.addEventListener('click', () => { gameFunc("scissor") });

function gameFunc (playerChoice) {
    const choices = ["rock", "paper", "scissor"];
    const botChoices = choices[Math.floor(Math.random() * 3)]

    let temp_result;

    if (playerChoice == botChoices) {
        temp_result = "Its a tie! Player and Bot choose the same choice";
    }
    else if ( (playerChoice == "rock" && botChoices == "scissor") ||
    (playerChoice == "paper" && botChoices == "rock") || 
    ( playerChoice == "scissor" && botChoices == "paper" ) ) {
        temp_result = "You win!" + " Player Choice : " + playerChoice + " | Bot Choices : " + botChoices;
    } else {
        temp_result = "You lose!" + " Player Choice : " + playerChoice + " | Bot Choices : " + botChoices;
    }

    result.innerHTML = temp_result;
}