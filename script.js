//dropdown

document.addEventListener('DOMContentLoaded', () => {
  const dropdownBtn = document.getElementById('dropdownBtn')
  const dropdownMenu = document.getElementById('dropdownMenu')
  const dropdownContainer = dropdownBtn.closest('.header_main--container--box--dropdown')

  dropdownBtn.addEventListener('click', (e) => {

    e.stopPropagation()

    dropdownMenu.classList.toggle('is-open')
    dropdownContainer.classList.toggle('is-active')
  })


  document.addEventListener('click', (e) => {
    if (!dropdownContainer.contains(e.target)) {
      dropdownMenu.classList.remove('is-open')
      dropdownContainer.classList.remove('is-active')
    }
  })
})

//modal
const openModalBtn = document.getElementById('open-modal-btn')
const modalOverlay = document.getElementById('modal_overlay')
const modal1 = document.getElementById('modal-1')

const saveNameBtn = document.getElementById('save-name-btn')
const userNameInput = document.getElementById('user-name-input')
const closeButtons = document.querySelectorAll('.close-btn')

function closeModal() {
  modalOverlay.classList.add('modal_overlay--hidden')
}

openModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('modal_overlay--hidden')
})

saveNameBtn.addEventListener('click', () => {
  const name = userNameInput.value.trim()

  if (name !== '') {

    openModalBtn.textContent = `Вітаємо, ${name}!`

    userNameInput.value = ''

    closeModal()
  } else {
    alert("Будь ласка, введіть своє ім'я!")
  }
})

closeButtons.forEach(btn => {
  btn.addEventListener('click', closeModal)
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modalOverlay.classList.contains('modal_overlay--hidden')) {
    closeModal()
  }
})

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal()
  }
})

//year

const yearInput = document.getElementById('year-input')
const resultText = document.getElementById('year-result')
const searchBtn = document.querySelector('.main_year--container--search--box--btn')

resultText.textContent = ''

function checkLeapYear() {
  const year = parseInt(yearInput.value.trim(), 10);

  if (isNaN(year) || year <= 0) {
    resultText.textContent = 'Будь ласка, введіть  рік!'
    resultText.style.color = '#990000'
    return
  }


  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)

  if (isLeap) {
    resultText.textContent = 'Ви народилися у високосний рік!'
    resultText.style.color = '#039900'
  } else {
    resultText.textContent = 'Ви народилися не у високосний рік!'
    resultText.style.color = '#990000'
  }
}

searchBtn.addEventListener('click', checkLeapYear)

yearInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    checkLeapYear()
  }
})


//gamble
const form = document.getElementById('gamble-form')
const userInput = document.getElementById('gamble-input')
const result = document.getElementById('gamble-result')

form.addEventListener('submit', (event) => {

  event.preventDefault()

  const secretNumber = Math.floor(Math.random() * 10) + 1
  const userGuess = Number(userInput.value)

  if (!userInput.value.trim()) {
    result.textContent = 'Будь ласка, введіть число!'
    result.style.color = 'black'
    return
  }

  if (userGuess === secretNumber) {
    result.textContent = `Вітаю, ви вгадали число ${secretNumber}!`
    result.style.color = '#039900'
  } else {
    result.textContent = `Ви програли, комп’ютер загадав ${secretNumber}`
    result.style.color = '#990000'
  }
})

//rps

let userScore = 0;
let pcScore = 0;


const countUserEl = document.getElementById('count-user')
const countPcEl = document.getElementById('count-pc')
const resultEl = document.getElementById('rps-result')
const pcButtonEl = document.getElementById('choise-pc')

const rockImg = document.getElementById('choise-rock')
const scissorsImg = document.getElementById('choise-scissors')
const paperImg = document.getElementById('choise-paper')

const choices = ['rock', 'scissors', 'paper']


const choicesUA = {
  rock: 'Камінь',
  scissors: 'Ножиці',
  paper: 'Папір'
};

countUserEl.textContent = `Ви: ${userScore}`
countPcEl.textContent = `Комп'ютер: ${pcScore}`
resultEl.textContent = 'Зробіть свій вибір!'


function getPcChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}


function playGame(userChoice) {
  const pcChoice = getPcChoice()


  pcButtonEl.textContent = `Комп'ютер обрав: ${choicesUA[pcChoice]}`

  if (userChoice === pcChoice) {
    resultEl.textContent = 'Нічия!'
    resultEl.style.color = '#000000'
  } else if (
    (userChoice === 'rock' && pcChoice === 'scissors') ||
    (userChoice === 'scissors' && pcChoice === 'paper') ||
    (userChoice === 'paper' && pcChoice === 'rock')
  ) {
    userScore++;
    countUserEl.textContent = `Ви: ${userScore}`
    resultEl.textContent = 'Ви виграли раунд! '
    resultEl.style.color = '#039900'
  } else {
    pcScore++;
    countPcEl.textContent = `Комп'ютер: ${pcScore}`
    resultEl.textContent = 'Комп’ютер виграв раунд! '
    resultEl.style.color = '#c62828'
  }
}

rockImg.addEventListener('click', () => playGame('rock'))
scissorsImg.addEventListener('click', () => playGame('scissors'))
paperImg.addEventListener('click', () => playGame('paper'))



//calculator

const inputA = document.getElementById('calc-a')
const inputB = document.getElementById('calc-b')
const resultInput = document.getElementById('calc-result')

const btnPlus = document.getElementById('plus')
const btnMinus = document.getElementById('minus')
const btnDivide = document.getElementById('divide')
const btnMultiply = document.getElementById('multiply')

function calculate(operator, label) {
  const a = parseFloat(inputA.value)
  const b = parseFloat(inputB.value)

  if (isNaN(a) || isNaN(b)) {

    return
  }

  if (operator === '/' && b === 0) {
    resultInput.value = "Cannot divide by 0!"
    return
  }

  const operations = {
    '+': a + b,
    '-': a - b,
    '*': a * b,
    '/': a / b
  }

  const calcResult = operations[operator]
  resultInput.value = `${label} of ${a} and ${b} = ${calcResult}`
}

btnPlus.addEventListener('click', () => calculate('+', 'Sum'))
btnMinus.addEventListener('click', () => calculate('-', 'Difference'))
btnMultiply.addEventListener('click', () => calculate('*', 'Multiplication'))
btnDivide.addEventListener('click', () => calculate('/', 'Division'))