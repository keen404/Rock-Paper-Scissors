document.addEventListener("DOMContentLoaded", (event) => {
    function getComputerChoice() {
        let randomNumber = 0;
        let computerChoice;
        randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) {
            computerChoice = "Rock";
        }
        else if (randomNumber === 1) {
            computerChoice = "Paper";
        }
        else {
            computerChoice = "Scissors";
        }
        return computerChoice
    }
    
    function getHumanChoice() {
        let userChoice;
        userChoice = prompt("Rock, Paper, Scissors?");
        return userChoice
    }
    
    
    function playGame() {
        
        let humanScore = 0;
        let computerScore = 0;
       
        function playRound(humanSelection, computerSelection) {
            console.log("Human: " + humanSelection);
            console.log("Computer: " + computerSelection);
            let tempHumanChoice = humanSelection.toLowerCase();
            let tempComputerChoice = computerSelection.toLowerCase();
            const resultDiv = document.querySelector(".result");
        
            if (tempHumanChoice === "paper" && tempComputerChoice === "rock"){
                resultDiv.textContent = "You win! Paper beats Rock";
                humanScore += 1;
            }
            else if (tempHumanChoice === "paper" && tempComputerChoice === "scissors"){
                resultDiv.textContent = "You lose! Scissors beat Paper";
                computerScore += 1;
            }
            else if (tempHumanChoice === "scissors" && tempComputerChoice === "rock"){
                resultDiv.textContent = "You lose! Rock beats Scissors";
                computerScore += 1;
            }
            else if (tempHumanChoice === "scissors" && tempComputerChoice === "paper"){
                resultDiv.textContent = "You win! Scissors beat Paper";
                humanScore += 1;
            }
            else if (tempHumanChoice === "rock" && tempComputerChoice === "paper"){
                resultDiv.textContent = "You lose! Paper beats Rock";
                computerScore +=1;
            }
            else if (tempHumanChoice === "rock" && tempComputerChoice === "scissors"){
                resultDiv.textContent = "You win! Rock beats Scissors";
                humanScore += 1;
            }
            else {
                resultDiv.textContent = "TIE!";
            }
        }
    
        const btns = document.querySelectorAll("button");
    
        btns.forEach(function (btn) {
            btn.addEventListener("click", function() {
                let playerChoice = btn.textContent;
                playRound(playerChoice, getComputerChoice());
            });
        });
            
            
        if (humanScore > computerScore) {   
            console.log("Winer is Human!")
        }
        else if (computerScore > humanScore) {
            console.log("Winer is Computer")
        }
    }
    
    playGame();
  
});