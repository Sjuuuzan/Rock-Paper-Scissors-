let computerScore = 0
let userScore = 0
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score-board')
const result_div = document.querySelector('.result p')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

function getComputerChoice () {
  const possible = ['p', 'r', 's']
  const randomNumber = Math.floor(Math.random() * 3)
  return possible[randomNumber]
}

function convertToWord (letter) {
  if (letter === 'r') return 'Rock'
  else if (letter === 'p') return 'Paper'
  return 'Scissors'
}

function win (userChoice, computerChoice) {
  userScore++
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  const smallUser = 'user'.fontsize(3).sub()
  const smallCpu = 'Cpu'.fontsize(3).sub()
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUser} beats ${convertToWord(computerChoice)}${smallCpu}. You won!`
  document.getElementById(userChoice).classList.add('green-glow')
  setTimeout(function () { document.getElementById(userChoice).classList.remove('green-glow') }, 300)
}

function lose (userChoice, computerChoice) {
  computerScore++
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  const smallUser = 'user'.fontsize(3).sub()
  const smallCpu = 'Cpu'.fontsize(3).sub()
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUser} loses to  ${convertToWord(computerChoice)}${smallCpu}. You lost!`
  document.getElementById(userChoice).classList.add('red-glow')
  setTimeout(function () { document.getElementById(userChoice).classList.remove('red-glow') }, 300)
}

function draw (userChoice, computerChoice) {
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  const smallUser = 'user'.fontsize(3).sub()
  const smallCpu = 'Cpu'.fontsize(3).sub()
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUser} is equal to  ${convertToWord(computerChoice)}${smallCpu}. It's draw!`
  document.getElementById(userChoice).classList.add('grey-glow')
  setTimeout(function () { document.getElementById(userChoice).classList.remove('grey-glow') }, 300)
}

function game (userChoice) {
  const computerChoice = getComputerChoice()
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice)
      break
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice)
      break
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice)
      break
  }
}

function main () {
  rock_div.addEventListener('click', function () {
    game('r')
  })

  paper_div.addEventListener('click', function () {
    game('p')
  })

  scissors_div.addEventListener('click', function () {
    game('s')
  })
}

main()
