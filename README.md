# Rock-Paper-Scissors
A simple Rock-Paper-Scissors game where the player competes against the computer. The first to score 5 points wins. The game is implemented with buttons in a browser-based UI.

## 🛠️ Features
- Intuitive button-based interface (Rock, Paper, Scissors)

- Real-time result display and score tracking

- Ends the game automatically when either side reaches 5 points

- Disables buttons after the game ends

## 📁 Project Structure
- index.html: Basic structure of the web page with buttons and result display

- script.js: Game logic and DOM interaction

## 🔍 Key Functions
### getComputerChoice()
Randomly selects one of the three possible moves for the computer.

```
js
Math.floor(Math.random() * 3)
```

- 0 = Rock

- 1 = Paper

- 2 = Scissors

### UI Input (replaces getHumanChoice())
- Instead of prompting the user via prompt(), the UI now provides 3 buttons: Rock, Paper, and Scissors.

- When a button is clicked, the value is used as the player's choice.

### playRound(humanSelection, computerSelection)
- Compares both choices to determine the round winner

- Updates scores and displays results

- Ends the game when either score reaches 5

- Hides all buttons when the game ends

### playGame()
- Initializes scores and sets up button event listeners

- Handles the main gameplay loop through event-driven interactions

### 🧠 Developer Notes
This version transitions from basic JavaScript prompts to interactive DOM-based input to improve usability and align with modern web development practices.