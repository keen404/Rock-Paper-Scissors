function getComputerChoice() {
    // Create variable name x to store random number
    let x = 0;
    // Create variable name result to store a value of "Rock", "Paper", "Scissors"
    let computerChoice;
    // Random number in range of 3 assign to x
    x = Math.floor(Math.random() * 3);
    // IF x is equal 0
    if (x === 0) {
        // THEN assign "Rock" to result 
        computerChoice = "Rock";
    }
    //  ELSE IF result is equal 1
    else if (x === 1) {
        // THEN assign "Paper" to result
        computerChoice = "Paper";
    }
    // ELSE
    else {
        // Assign Scissors  to result
        computerChoice = "Scissors";
    }
    // END IF
    // Return result
    return computerChoice
}

function getHumanChoice() {
    // Create a variable to store user choice
    let userChoice;
    // Ask user for choice
    userChoice = prompt("Rock, Paper, Scissors?");
    // Return user choice
    return userChoice
}

let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    let tempHumanChoice = humanChoice.toLowerCase();
    let tempComputerChoice = computerChoice.toLowerCase();

    // IF human is paper and computer is rock 
    if (tempHumanChoice === "paper" && tempComputerChoice === "rock"){
        // Show "You win! Paper beats Rock"
        console.log("You win! Paper beats Rock");
        // INCREMENT 1 score to human
        humanScore += 1;
    }
    // ELSEIF human is paper and computer is scissors
    else if (tempHumanChoice === "paper" && tempComputerChoice === "scissors"){
        // Show "You lose! Scissors beat Rock"
        console.log("You lose! Scissors beat Rock");
        // INCREMENT 1 score to computer 
        computerScore += 1;
    }
    // ELSEIF human is scissors and computer is rock
    else if (tempHumanChoice === "scissors" && tempComputerChoice === "rock"){
        // SHOW "You lose! Rock beats Scissors"
        console.log("You lose! Rock beats Scissors");
        // INCREMENT 1 score to computer
        computerScore += 1;
    }
    // ELSEIF human is scissors and computer is paper
    else if (tempHumanChoice === "scissors" && tempComputerChoice === "paper"){
        // SHOW "You win! Scissors beat Paper"
        console.log("You win! Scissors beat Paper");
        // INCREMENT 1 score to human
        humanScore += 1;
    }
    // ELSEIF human is rock and computer is paper
    else if (tempHumanChoice === "rock" && tempComputerChoice === "paper"){
        // SHOW "You lose! Paper beats Rock"
        console.log("You lose! Paper beats Rock");
        // INCREMENT 1 score to computer
        computerScore +=1;
    }
    // ELSEIF human is rock and computer is scissors
    else if (tempHumanChoice === "rock" && tempComputerChoice === "scissors"){
        // SHOW "You win! Rock beats Scissors"
        console.log("You win! Rock beats Scissors");
        // INCREMENT 1 score to human
        humanScore += 1;
    }
}