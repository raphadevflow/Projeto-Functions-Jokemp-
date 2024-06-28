const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')


//O formato a baixo das variaveis são chamadas de Camel Case quando feito desta forma -> humanScoreNumber devido a separação das palavras serem feitas por letras maiusculas
let humanScoreNumber = 0
let machineScoreNumber = 0

// O formato a baixo é chamado de Snake case devido a separação das palavras serem feitas pelo underline _ que são utilizados noralmente nos padrões ENUM'S
//ENUMS
const GAME_OPTIONS = {
    ROCK:'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choises = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randonNumber = Math.floor(Math.random() * 3)

    return choises[randonNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + " Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate"
    } else if (
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Maquina!"
    }
}

/*
papel -> pedra -> tesoura -> papel

*/