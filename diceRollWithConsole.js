let diceRoll = (Math.floor(Math.random() * 6) + 1) // generates a number which is supposedly the diceroll

if (diceRoll === 1) {
    console.log('You rolled a 1!')
} else if (diceRoll === 2) {
    console.log('You rolled a 2!')
} else if (diceRoll === 3) {
    console.log('You rolled a 3!')
} else if (diceRoll === 4) {
    console.log('You rolled a 4!')
} else if (diceRoll === 5) {
    console.log('You rolled a 5!')
} else if (diceRoll === 6) {
    console.log('You rolled a 6!')
}

// high roll/low roll logic
if (diceRoll >= 4) {
    console.log('You got a high roll!')
} else {
    console.log('You got a low roll!')
}
