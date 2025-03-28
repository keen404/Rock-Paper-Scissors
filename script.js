function getComputerChoice() {
    // Create variable name x to store random number
    let x = 0;
    // Create variable name result to store a value of "Rock", "Paper", "Scissors"
    let computerChoice;
    // Random number in range of 3 assign to x
    x = Math.floor(Math.random() * 3)
    // IF x is equal 0
    if (x === 0) {
        // THEN assign "Rock" to result 
        computerChoice = "Rock"
    }
    //  ELSE IF result is equal 1
    else if (x === 1) {
        // THEN assign "Paper" to result
        computerChoice = "Paper"
    }
    // ELSE
    else {
        // Assign Scissors  to result
        computerChoice = "Scissors"
    }
    // END IF
    // Return result
    return computerChoice
}

function getHumanChoice() {
    // Create a variable to store user choice
    let UserChoice;
    // Ask user for choice
    // Return user choice

}