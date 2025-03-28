function getComputerChoice() {
    // Create variable name x to store random number
    let x = 0;
    // Create variable name result to store a value of "Rock", "Paper", "Scissors"
    let result;
    // Random number in range of 3 assign to x
    x = Math.floor(Math.random() * 3)
    // IF x is equal 0
    if (x === 0) {
        // THEN assign "Rock" to result 
        result = "Rock"
    }
    //  ELSE IF result is equal 1
    else if (x === 1) {
        // THEN assign "Paper" to result
        result = "Paper"
    }
    // ELSE
    else {
        // Assign Scissors  to result
        result = "Scissors"
    }
    // END IF
    // Return result
    return result
}

