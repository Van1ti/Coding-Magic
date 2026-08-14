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

document.addEventListener('DOMContentLoaded', () => {
  const inputA = document.getElementById('calc-a')
  const inputB = document.getElementById('calc-b')
  const resultInput = document.getElementById('calc-result')

  const btnPlus = document.getElementById('plus')
  const btnMinus = document.getElementById('minus')
  const btnMultiply = document.getElementById('multiply')
  const btnDivide = document.getElementById('divide')
  const btnEqual = document.getElementById('equal')

  let currentOperator = null;

  function selectOperator(operator, button) {
    currentOperator = operator;

    [btnPlus, btnMinus, btnMultiply, btnDivide].forEach(btn => {
      if (btn) btn.style.backgroundColor = '#000000';
    });

    if (button) button.style.backgroundColor = '#555555';
  }

  if (btnPlus) btnPlus.addEventListener('click', () => selectOperator('+', btnPlus))
  if (btnMinus) btnMinus.addEventListener('click', () => selectOperator('-', btnMinus))
  if (btnMultiply) btnMultiply.addEventListener('click', () => selectOperator('*', btnMultiply))
  if (btnDivide) btnDivide.addEventListener('click', () => selectOperator('/', btnDivide))

  if (btnEqual) {
    btnEqual.addEventListener('click', () => {
      const a = parseFloat(inputA.value)
      const b = parseFloat(inputB.value)

      if (isNaN(a) || isNaN(b)) {
        resultInput.value = "Введіть числа!"
        return
      }

      if (!currentOperator) {
        resultInput.value = "Оберіть знак!"
        return
      }

      let result = 0

      switch (currentOperator) {
        case '+': result = a + b; break
        case '-': result = a - b; break
        case '*': result = a * b; break
        case '/':
          if (b === 0) {
            resultInput.value = "Ділення на 0!"
            return
          }
          result = a / b
          break
      }

      resultInput.value = `${result}`
    })
  }
})


//timeCalculator

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('timeCalculator-form')
  const input = document.getElementById('timeCalculator-input')
  const resultElement = document.querySelector('.main_timeCalculator--container--result')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const totalMinutes = parseInt(input.value.trim(), 10)

    if (isNaN(totalMinutes) || totalMinutes < 0) {
      resultElement.textContent = "Помилка"
      return
    }


    const days = Math.floor(totalMinutes / (24 * 60))
    const hours = Math.floor((totalMinutes % (24 * 60)) / 60)
    const minutes = totalMinutes % 60
    const seconds = 0


    const pad = (num) => String(num).padStart(2, '0')
    resultElement.textContent = `${days} дн. ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
  })
})


//dino
document.addEventListener('DOMContentLoaded', () => {
  const dino = document.getElementById('dino')
  const cactus = document.getElementById('cactus')
  const line = document.querySelector('.main_dino--line') // Получаем элемент земли
  const scoreElement = document.getElementById('score')
  const gameOverText = document.getElementById('game-over')
  const gameContainer = document.querySelector('.main_dino--game')

  let score = 0
  let isGameStarted = false
  let isGameOver = false
  let scoreInterval = null
  let collisionInterval = null

  // Изначально останавливаем анимации
  cactus.style.animation = 'none'
  line.style.animation = 'none' // Останавливаем линию

  function resetGame() {
    isGameOver = false
    isGameStarted = false
    score = 0

    scoreElement.textContent = '00000'

    dino.classList.remove('jump');
    gameOverText.style.display = 'none'

    cactus.style.left = '';
    cactus.style.animation = 'none'
    line.style.animation = 'none' // Сбрасываем анимацию линии
  }

  function startGame() {
    if (isGameOver) {
      resetGame()
    }

    isGameStarted = true

    // Запускаем обе анимации одновременно
    cactus.style.animation = 'moveCactus 1.4s infinite linear'
    line.style.animation = 'moveLine 1.4s infinite linear' // Запускаем линию

    scoreInterval = setInterval(() => {
      score++;
      scoreElement.textContent = String(score).padStart(5, '0')
    }, 100)

    collisionInterval = setInterval(checkCollision, 10)
  }

  function jump() {
    if (!dino.classList.contains('jump') && !isGameOver) {
      dino.classList.add('jump')
      setTimeout(() => {
        dino.classList.remove('jump')
      }, 500)
    }
  }

  function handleInput() {
    if (!isGameStarted || isGameOver) {
      startGame()
    } else {
      jump()
    }
  }

  gameContainer.addEventListener('click', handleInput)

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
      e.preventDefault()
      handleInput()
    }
  })

  function checkCollision() {
    const dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'))
    const cactusLeft = cactus.getBoundingClientRect().left
    const dinoLeft = dino.getBoundingClientRect().left

    if (cactusLeft - dinoLeft < 30 && cactusLeft - dinoLeft > -10 && dinoBottom <= 40) {
      isGameOver = true;

      clearInterval(scoreInterval)
      clearInterval(collisionInterval)

      const currentCactusLeft = cactusLeft - gameContainer.getBoundingClientRect().left

      // Останавливаем кактус на месте проигрыша
      cactus.style.animation = 'none'
      cactus.style.left = `${currentCactusLeft}px`

      // Останавливаем движение земли
      line.style.animation = 'none'

      gameOverText.style.display = 'block'
    }
  }
})