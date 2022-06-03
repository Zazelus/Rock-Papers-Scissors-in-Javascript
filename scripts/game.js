function computerPlay() {
    let cpuChoice = Math.floor(Math.random() * 3)

    switch(cpuChoice) {
        case 0:
            return 'Rock'
            break
        case 1:
            return 'Paper'
            break
        case 2:
            return 'Scissors'
            break
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()

    let rock = 'ROCK'
    let paper = 'PAPER'
    let scissors = 'SCISSORS'

    if (playerSelection === computerSelection) {
        return 'It\'s a tie!'
    } else if (playerSelection === rock && computerSelection === paper) {
        return 'You Lose! Paper beats Rock.'
    } else if (playerSelection === rock && computerSelection === scissors) {
        return 'You Win! Rock beats Scissors.'
    } else if (playerSelection === paper && computerSelection === rock) {
        return 'You Win! Paper beats Rock.'
    } else if (playerSelection === paper && computerSelection === scissors) {
        return 'You Lose! Scissors beats Paper'
    } else if (playerSelection === scissors && computerSelection === rock) {
        return 'You Lose! Rock beats Scissors.'
    } else if (playerSelection === scissors && computerSelection === paper) {
        return 'You Win! Scissors beats Paper'
    }
}

function startGame() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Choose rock, papers or scissors.')
        let cpuChoice = computerPlay()

        console.log(playRound(playerChoice, cpuChoice))
    }
}

startGame()