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
document.addEventListener('DOMContentLoaded', () => {
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
})

//year
document.addEventListener('DOMContentLoaded', () => {
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
})

//gamble
document.addEventListener('DOMContentLoaded', () => {
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
})

//rps
document.addEventListener('DOMContentLoaded', () => {
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
})

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
  const line = document.querySelector('.main_dino--line')
  const scoreElement = document.getElementById('score')
  const gameOverText = document.getElementById('game-over')
  const gameContainer = document.querySelector('.main_dino--game')

  let score = 0
  let isGameStarted = false
  let isGameOver = false
  let scoreInterval = null
  let collisionInterval = null


  cactus.style.animation = 'none'
  line.style.animation = 'none'

  function resetGame() {
    isGameOver = false
    isGameStarted = false
    score = 0

    scoreElement.textContent = '00000'

    dino.classList.remove('jump');
    gameOverText.style.display = 'none'

    cactus.style.left = '';
    cactus.style.animation = 'none'
    line.style.animation = 'none'
  }

  function startGame() {
    if (isGameOver) {
      resetGame()
    }

    isGameStarted = true

    cactus.style.animation = 'moveCactus 1.4s infinite linear'
    line.style.animation = 'moveLine 1.4s infinite linear'

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

      cactus.style.animation = 'none'
      cactus.style.left = `${currentCactusLeft}px`

      line.style.animation = 'none'

      gameOverText.style.display = 'block'
    }
  }
})


//football
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.main_football--container')
  const img = container.querySelector('img')
  container.style.position = 'relative'
  container.style.overflow = 'hidden'

  img.style.position = 'absolute'
  img.style.cursor = 'pointer'

  let currentX = 50
  let currentY = 50
  let targetX = 50
  let targetY = 50

  const speed = 0.1

  container.addEventListener('click', (e) => {
    const rect = container.getBoundingClientRect()
    targetX = e.clientX - rect.left
    targetY = e.clientY - rect.top
  })

  function animate() {
    currentX += (targetX - currentX) * speed
    currentY += (targetY - currentY) * speed

    img.style.left = currentX + 'px'
    img.style.top = currentY + 'px'
    img.style.transform = 'translate(-50%, -50%)'

    requestAnimationFrame(animate)
  }

  animate()

})


//three
document.addEventListener('DOMContentLoaded', () => {
  const inputA = document.querySelector('.main_three--container--a')
  const inputB = document.querySelector('.main_three--container--b')
  const inputC = document.querySelector('.main_three--container--c')
  const resultP = document.querySelector('.main_three--container--result')

  function calculateLargest() {
    const valA = inputA.value.trim()
    const valB = inputB.value.trim()
    const valC = inputC.value.trim()

    if (valA === "" && valB === "" && valC === "") {
      resultP.textContent = ""
      return
    }


    if (valA === "" || valB === "" || valC === "") {
      resultP.textContent = "Будь ласка, заповніть усі поля!"

      return;
    }

    const numA = Number(valA)
    const numB = Number(valB)
    const numC = Number(valC)


    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
      resultP.textContent = "Помилка! Усі введені дані повинні бути числами."
      return
    }

    const largest = Math.max(numA, numB, numC)


    resultP.style.color = "";
    resultP.textContent = `Найбільше число, яке ви ввели - ${largest}`
  }


  inputA.addEventListener('input', calculateLargest)
  inputB.addEventListener('input', calculateLargest)
  inputC.addEventListener('input', calculateLargest)
})

//slider
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('sliderTrack')
  const slides = document.querySelectorAll('.slide')
  const prevBtn = document.getElementById('prevBtn')
  const nextBtn = document.getElementById('nextBtn')
  const dotsContainer = document.getElementById('dotsContainer')

  // Проверка, существуют ли элементы на странице, чтобы не было ошибок
  if (!track || !slides.length || !prevBtn || !nextBtn || !dotsContainer) {
    console.error('Ошибка: какие-то элементы слайдера не найдены в DOM!')
    return
  }

  let currentIndex = 0

  // Создаем точки-индикаторы
  slides.forEach((_, index) => {
    const dot = document.createElement('button')
    dot.classList.add('dot')
    if (index === 0) dot.classList.add('active')
    dot.addEventListener('click', () => showSlide(index));
    dotsContainer.appendChild(dot)
  });

  const dots = document.querySelectorAll('.dot')

  function showSlide(index) {
    if (index >= slides.length) {
      currentIndex = 0
    } else if (index < 0) {
      currentIndex = slides.length - 1
    } else {
      currentIndex = index
    }

    track.style.transform = `translateX(-${currentIndex * 100}%)`

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex)
    });
  }

  nextBtn.addEventListener('click', () => showSlide(currentIndex + 1))
  prevBtn.addEventListener('click', () => showSlide(currentIndex - 1))
})

//sort
document.addEventListener('DOMContentLoaded', () => {
  const scientists = [
    { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
    { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
    { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
    { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
    { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
    { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
    { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
    { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
    { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
    { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
    { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
    { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
  ];

  const cardsContainer = document.querySelector('.main_sort--container--cards')
  const buttonsContainer = document.querySelector('.main_sort--container--buttons')


  function renderScientists(arrayToRender) {
    cardsContainer.innerHTML = ''
    const data = Array.isArray(arrayToRender) ? arrayToRender : [arrayToRender]

    data.forEach(scientist => {
      const card = document.createElement('div')
      card.classList.add('scientist-card')
      card.innerHTML = `
            <h3>${scientist.name} ${scientist.surname}</h3>
            <p>Роки: ${scientist.born} - ${scientist.dead}</p>
            <p>Прожив років: ${scientist.dead - scientist.born}</p>
        `;
      cardsContainer.appendChild(card)
    })
  }

  renderScientists(scientists)

  const buttonsData = [
    {
      text: "Які вчені народилися в 19 ст.",
      action: () => scientists.filter(s => s.born >= 1801 && s.born <= 1900)
    },
    {
      text: "Знайти рік народження Albert Einstein",
      action: () => scientists.find(s => s.name === "Albert" && s.surname === "Einstein")
    },
    {
      text: "Відсортувати вчених за алфавітом",
      action: () => [...scientists].sort((a, b) => a.surname.localeCompare(b.surname))
    },
    {
      text: "Знайти вчених, прізвища яких починаються на 'C'",
      action: () => scientists.filter(s => s.surname.startsWith("C"))
    },
    {
      text: "Відсортувати за кількістю прожитих років",
      action: () => [...scientists].sort((a, b) => (a.dead - a.born) - (b.dead - b.born))
    },
    {
      text: "Видалити всіх вчених, ім'я яких починається на 'А'",
      action: () => scientists.filter(s => !s.name.startsWith("A"))
    },
    {
      text: "Знайти вченого, який народився найпізніше",
      action: () => scientists.reduce((latest, s) => s.born > latest.born ? s : latest)
    },
    {
      text: "Найдовше і найменше прожив",
      action: () => {
        const sorted = [...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
        return [sorted[0], sorted[sorted.length - 1]]
      }
    },
    {
      text: "Співпадають перші літери імені і прізвища",
      action: () => scientists.filter(s => s.name[0].toLowerCase() === s.surname[0].toLowerCase())
    }
  ]

  buttonsData.forEach(item => {
    const button = document.createElement('button')
    button.textContent = item.text

    button.addEventListener('click', () => {
      const result = item.action()
      renderScientists(result)
    })

    buttonsContainer.appendChild(button)
  })
})