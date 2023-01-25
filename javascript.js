const rock = document.querySelector('#rock')
  rock.addEventListener('click', () => {
    playRound('rock')
  });

const paper = document.querySelector('#paper');
  paper.addEventListener('click', () => {
    playRound('paper')
  });

const scissor = document.querySelector('#scissor');
  scissor.addEventListener('click', () => {
    playRound('scissor')
  });


function getComputerChoice () {
  let cpuNum = Math.floor((Math.random() * 3)+1);
  if (cpuNum === 1) {
      return 'rock';
  } else if (cpuNum === 2) {
      return 'paper';
  } else {
      return 'scissor';
  }
}

let scorePerson = 0
let scoreComputer = 0

function playRound(paramPlayerChoice) {
  let computerSelection  = getComputerChoice()

  let result = ""

  if (paramPlayerChoice === computerSelection) {
    result = "Tied!"
  }

  if (paramPlayerChoice === 'rock') {
    if (computerSelection === 'paper') {
      result = "Paper Beats Rock, Computer Wins"
      scoreComputer += 1
    }else if (computerSelection === 'scissor') {
      result = "Rock Beats Scissors, You Win"
      scorePerson += 1
    }
  } else if (paramPlayerChoice === 'paper') {
    if (computerSelection === 'scissor') {
      result = "Scissor Beats Paper, Computer Wins"
      scoreComputer += 1
    }else if (computerSelection === 'rock') {
      result = "Paper Beats Rock, You Win"
      scorePerson += 1
    }
  } else { //paramPlayerChoice === 'scissor'//
    if (computerSelection === 'rock') {
      result = "Rock Beats Scissor, Computer Wins"
      scoreComputer += 1
    }else if (computerSelection === 'paper') {
      result = "Scissor Beats Paper, You Win"
      scorePerson += 1
    }
    
  }

  const resultForRound = document.querySelector('#result');
  resultForRound.textContent = result

  const scoreTotal = document.querySelector('#score');
  scoreTotal.textContent = (scorePerson + ":" + scoreComputer)

  if (scorePerson == 5) {
    scorePerson = 0
    scoreComputer = 0
    const finalMessage = document.querySelector('#finalmessage');
    finalMessage.textContent = "You Win the Final Round! You beat the CPU! Play More!"
    resultForRound.textContent = "PlaceHolder Text for Result of Round"
    scoreTotal.textContent = (scorePerson + ":" + scoreComputer)
  } else if (scoreComputer == 5) {
    scorePerson = 0
    scoreComputer = 0
    const finalMessage = document.querySelector('#finalmessage');
    finalMessage.textContent = "Computer Wins the Final Round! You lost against the CPU! Try Again!"
    resultForRound.textContent = "PlaceHolder Text for Result of Round"
    scoreTotal.textContent = (scorePerson + ":" + scoreComputer)
  }
}