// Run "npm init" in terminal before any javascript program to save details of metadata of this project

// Run "npm i prompt-sync" in terminam to install prompt-sync module to enable us to get user input

// 1. Deposit some money
// 2. Determine number of line to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
//7. Play again

////// Functions ////////

// function deposit() {
//     return 1
// }

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true){
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
   } else {
      return numberDepositAmount;
   }
  }
};

const getNumberOfLines = () => {
  while (true){
    const lines = prompt("Enter number of lines you wanna bet on(1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
      console.log("Invalid number of lines, please try again");
    } else {
      return numberOfLines
    }
  }
};

const getBet = (balance) => {
  while (true) {
    const bet_str = prompt("What is the amount you wanna bet: ");
    const bet = parseFloat(bet_str);

    if (isNaN(bet) || bet > balance){
      console.log("invalid bet entered, please try again")
    } else if (bet <= 0) {
      console.log("Insufficient bet amount, unable to place a bet")
    } else {
      return bet
    }
  }
};


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance)
